'use client';
import Navbar from '@mitech/shared-components/ui/navbars/navbar-2';
import Sidebar from '@mitech/shared-components/ui/sidebars/sidebar-2';
import { signIn, signOut, useSession, SessionProvider } from 'next-auth/react';


export default function SubLayout({ children }: { children: React.ReactNode }) {
  const data = useSession();
  console.log('data', data);
  const user = data.data?.user;
  return <>
    {user ? <div className="flex" >
      <aside className="w-1/5 bg-[#ff7f00] text-white p-4 min-h-screen">
        <Sidebar />
      </aside>
      <main className='w-full'>
        <div className="mx-auto px-4 mb-8">
          <Navbar />
          {children}
        </div>
      </main>
    </div > :
      <main>
        <Navbar />
        {children}
      </main>
    }
  </>
}
