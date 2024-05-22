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
 
            <main className="flex-grow">
                <section className="text-center py-20 bg-white">
                    <h1 className="text-4xl font-bold text-gray-900">Welcome to MiTech</h1>
                    <p className="mt-3 text-gray-500"></p>
                    <h1 className="text-4xl font-bold text-gray-900"></h1>

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
