import '../globals.css';
import Navbar from '@mitech/shared-components/ui/navbars/navbar-2';
import Sidebar from '@mitech/shared-components/ui/sidebars/sidebar-2';
import { signIn, signOut, useSession } from 'next-auth/react';

export const metadata = {
  title: 'Welcome to Mitech Marketing',
  description:
    'Mitech Marketing is a digital marketing agency that specializes in SEO, PPC, and social media marketing.',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session } = useSession();
  const user = session?.user;


  return (<>{user ? <div className="flex" >
    <aside className="w-1/5 bg-[#ff7f00] text-white p-4 h-screen">
      <Sidebar />
    </aside>
    <main className="w-screen h-screen">
      <div className="mx-auto px-4 mb-8">
        <Navbar />
        {children}
      </div>
    </main>
  </div > :
    <main className="w-screen h-screen">
      {children}
    </main>
  }</>
  )
}
