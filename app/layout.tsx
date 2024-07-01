import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NotificationProvider from '@mitech/shared-components/lib/notification-context-provider';

export const metadata = {
  title: 'Welcome to Mitech Recruitment',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className='scroll-smooth'>
      <body className="h-full bg-gray-50 min-w-full min-h-full">
        <SessionProvider>
          <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme='light'>
              <NotificationProvider>
                <main className="text-foreground bg-background">
                  {children}
                </main>
                <Analytics />
                <SpeedInsights />{/* Vercel Speed Insights */}
              </NotificationProvider>
            </NextThemesProvider>
          </NextUIProvider>
        </SessionProvider>
      </body>
    </html>
  );
}