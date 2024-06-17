import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Frame  from '@mitech/shared-components/component/frame-with-sidebar-and-navbar';
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
    <html lang="en" >
      <body className="static h-full bg-gray-50">
        <SessionProvider>
          <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme='light'>
              <main className="text-foreground bg-background">
                <Frame>
                  {children}
                </Frame>
              </main>
              <Analytics />
              <SpeedInsights />{/* Vercel Speed Insights */}
            </NextThemesProvider>
          </NextUIProvider>
        </SessionProvider>
      </body>
    </html>
  );
}