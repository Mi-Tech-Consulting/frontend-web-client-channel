"use client";
import Head from 'next/head';
import Image from 'next/image';




export default function IndexPage({
    searchParams
}: {
    searchParams: { q: string };
}) {

    return (
        <main className="min-h-screen bg-gray-100 flex flex-col">
            <Head>
                <title>Welcome to My Recruitment Website</title>
                <meta name="description" content="Find your dream job or your ideal candidate here!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="bg-white shadow-md py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <Image src="/favicon.ico" alt="Website Logo" className="h-8 w-auto" width={10} height={10} />
                    <nav>
                        <a href="#services" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                        <a href="#testimonials" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
                        <a href="contact" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    </nav>
                </div>
            </header>

            <main className="flex-grow">
                <section className="text-center py-20 bg-white">
                    <h1 className="text-4xl font-bold text-gray-900">Welcome to MiTech Recruitment Website</h1>
                    <p className="mt-3 text-gray-500">Your one-stop destination for all recruitment needs.</p>
                    <h1 className="text-4xl font-bold text-gray-900">Trackable Authentable High Transparency Career Path</h1>

                    <button className="mt-5 bg-blue-500 text-white px-5 py-2 rounded-md text-lg"
                        onClick={() => { }}
                    >Get Started</button>
                </section>

                {/* Other sections */}
            </main>

            <footer className="bg-white shadow-t-md py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    Contact us at: contact@example.com
                    <br />
                    © 2024 MiTech Recruitment Website
                </div>
            </footer>
        </main>
    );
}
