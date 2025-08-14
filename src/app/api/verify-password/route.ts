import { NextRequest, NextResponse } from 'next/server';
import { 
  PasswordVerificationRequestSchema, 
  PasswordVerificationSuccessSchema, 
  PasswordVerificationErrorSchema 
} from '@/lib/schemas';
import { ZodError } from 'zod';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body with Zod
    const validatedData = PasswordVerificationRequestSchema.parse(body);
    const { password } = validatedData;
    
    const correctPassword = process.env.WORKS_PASSWORD;

    if (!correctPassword) {
      const errorResponse = PasswordVerificationErrorSchema.parse({
        error: 'Password not configured'
      });
      return NextResponse.json(errorResponse, { status: 500 });
    }

    if (password === correctPassword) {
      const successResponse = PasswordVerificationSuccessSchema.parse({
        success: true
      });
      return NextResponse.json(successResponse);
    } else {
      const errorResponse = PasswordVerificationErrorSchema.parse({
        error: 'Invalid password'
      });
      return NextResponse.json(errorResponse, { status: 401 });
    }
  } catch (error) {
    if (error instanceof ZodError) {
      const errorResponse = PasswordVerificationErrorSchema.parse({
        error: 'Invalid request format'
      });
      return NextResponse.json(errorResponse, { status: 400 });
    }
    
    const errorResponse = PasswordVerificationErrorSchema.parse({
      error: 'Internal server error'
    });
    return NextResponse.json(errorResponse, { status: 500 });
  }
}