import SubLayout from './layout-sub';

export const metadata = {
  title: 'Welcome to Mitech Marketing',
  description:
    'Mitech Marketing is a digital marketing agency that specializes in SEO, PPC, and social media marketing.',
};




export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {



  return <SubLayout>{children}</SubLayout>
}

