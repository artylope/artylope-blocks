import { ThemeProvider } from '@/app/components/theme-provider';
import { PasswordProtectProvider } from '@/app/components/PasswordProtectContext';
import { ToastProvider } from '@/app/components/Toast';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Artylope',
  description: 'Artylope',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <PasswordProtectProvider>
            <ToastProvider>{children}</ToastProvider>
          </PasswordProtectProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
