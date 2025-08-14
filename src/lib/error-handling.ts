import { z, ZodError } from 'zod';

export interface ValidationResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export function safeValidate<T>(schema: z.ZodSchema<T>, data: unknown): ValidationResult<T> {
  try {
    const validatedData = schema.parse(data);
    return {
      success: true,
      data: validatedData,
    };
  } catch (error) {
    if (error instanceof ZodError) {
      const firstError = error.issues[0];
      return {
        success: false,
        error: firstError.message,
      };
    }
    return {
      success: false,
      error: 'Validation failed',
    };
  }
}

export function getZodErrorMessage(error: ZodError): string {
  const firstError = error.issues[0];
  if (firstError.path.length > 0) {
    return `${firstError.path.join('.')}: ${firstError.message}`;
  }
  return firstError.message;
}

export function formatValidationErrors(error: ZodError): string[] {
  return error.issues.map(err => {
    if (err.path.length > 0) {
      return `${err.path.join('.')}: ${err.message}`;
    }
    return err.message;
  });
}

export class ValidationError extends Error {
  constructor(
    message: string,
    public field?: string,
    public zodError?: ZodError
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

export function handleZodError(error: unknown): never {
  if (error instanceof ZodError) {
    const message = getZodErrorMessage(error);
    throw new ValidationError(message, error.issues[0]?.path[0]?.toString(), error);
  }
  throw error;
}