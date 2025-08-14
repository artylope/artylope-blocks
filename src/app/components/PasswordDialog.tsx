'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, X, Eye, EyeOff } from 'lucide-react';
import { usePasswordProtect } from './PasswordProtectContext';
import { getValidatedWork } from '@/lib/works';
import {
  PasswordVerificationRequestSchema,
  PasswordVerificationSuccessSchema,
  PasswordVerificationErrorSchema,
} from '@/lib/schemas';
import { getZodErrorMessage } from '@/lib/error-handling';
import { ZodError } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from './Toast';

interface PasswordDialogProps {
  workTitle: string;
  onSuccess: () => void;
}

const PasswordDialog = ({ workTitle, onSuccess }: PasswordDialogProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { showPasswordDialog, setShowPasswordDialog, unlock, pendingWorkSlug } =
    usePasswordProtect();
  const router = useRouter();
  const { addToast } = useToast();

  // Get the actual work data from pendingWorkSlug
  const currentWork = pendingWorkSlug ? getValidatedWork(pendingWorkSlug) : null;
  const actualWorkTitle = currentWork?.title || workTitle;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Validate form input with Zod
      const validatedData = PasswordVerificationRequestSchema.parse({
        password,
      });

      const response = await fetch('/api/verify-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });

      const responseData = await response.json();

      if (response.ok) {
        // Validate success response
        const successData =
          PasswordVerificationSuccessSchema.parse(responseData);
        if (successData.success) {
          unlock();
          setShowPasswordDialog(false);
          setPassword('');

          // Show success toast with correct work title
          addToast(
            `${actualWorkTitle} is now unlocked, you can also access all works that are protected.`,
            'success'
          );

          onSuccess();

          // Redirect to the pending work if it exists
          if (pendingWorkSlug) {
            router.push(`/works/${pendingWorkSlug}`);
          }
        }
      } else {
        // Validate error response
        const errorData = PasswordVerificationErrorSchema.parse(responseData);
        setError(
          errorData.error || 'Password entered is wrong, please try again'
        );
      }
    } catch (error) {
      if (error instanceof ZodError) {
        setError(getZodErrorMessage(error));
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setShowPasswordDialog(false);
    setPassword('');
    setError('');
    router.push('/works');
  };

  if (!showPasswordDialog) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-background border rounded-lg p-6 max-w-md w-full mx-4 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Lock size={20} className="text-foreground" />
            <h2 className="text-xl font-semibold text-foreground">Protected Work</h2>
          </div>
          <Button
            onClick={handleClose}
            variant="ghost"
            size="icon">
            <X size={20} />
          </Button>
        </div>

        <p className="text-muted-foreground mb-4">
          <strong>{actualWorkTitle}</strong> is protected. Enter the password found in
          the application to proceed.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="password" className="sr-only">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoFocus
                required
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={16} className="text-muted-foreground" />
                ) : (
                  <Eye size={16} className="text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>

          {error && <p className="text-destructive text-sm mb-4">{error}</p>}

          <Button
            type="submit"
            disabled={isSubmitting || !password.trim()}
            className="w-full">
            {isSubmitting ? 'Verifying...' : 'Submit'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PasswordDialog;
