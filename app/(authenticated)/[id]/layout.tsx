import '../../globals.css';

import Frame from '@mitech/shared-components/component/frame-with-sidebar-and-navbar';
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
    <Frame>
      {children}
    </Frame>
  );
}