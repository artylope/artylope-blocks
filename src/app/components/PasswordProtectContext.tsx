'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface PasswordProtectContextType {
  isUnlocked: boolean;
  unlock: () => void;
  showPasswordDialog: boolean;
  setShowPasswordDialog: (show: boolean) => void;
  pendingWorkSlug: string | null;
  setPendingWorkSlug: (slug: string | null) => void;
}

const PasswordProtectContext = createContext<PasswordProtectContextType | undefined>(undefined);

export const usePasswordProtect = () => {
  const context = useContext(PasswordProtectContext);
  if (!context) {
    throw new Error('usePasswordProtect must be used within a PasswordProtectProvider');
  }
  return context;
};

interface PasswordProtectProviderProps {
  children: ReactNode;
}

export const PasswordProtectProvider = ({ children }: PasswordProtectProviderProps) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [pendingWorkSlug, setPendingWorkSlug] = useState<string | null>(null);

  const unlock = () => {
    setIsUnlocked(true);
  };

  return (
    <PasswordProtectContext.Provider
      value={{
        isUnlocked,
        unlock,
        showPasswordDialog,
        setShowPasswordDialog,
        pendingWorkSlug,
        setPendingWorkSlug,
      }}
    >
      {children}
    </PasswordProtectContext.Provider>
  );
};