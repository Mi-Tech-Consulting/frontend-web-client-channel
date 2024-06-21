"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
/*fetch from test api*/
/*   const [results, setResults] = useState<
    {
      result?: {
        data:
        {
          id: string,
          title: string,
          content: string,
          imagelocation: string,
          link: string
        }[]
      }
    }>({}); */

 /*------------retrive data from Mitech api Server--------*/
  const [results, setResults] = useState<
    {
      
        result:
        {
          id: string,
          name: string,
          createAt: string,
          owner_id: string,
          updatedAt: string
        }[]
   
    }>();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/channel/list').then((res) => res.json())
   // fetch('/channel/api/channel/list').then((res) => res.json())
      .then((data) => setResults(data));

  }, []);

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow">
        {/* <section className="text-center py-20 bg-white"> */}
        <section className="w-full py-2 md:py-4 lg:py-8 xl:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-1xl md:text-2xl lg:text-3xl/none">
                  Client Channel
                </h1>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {[...results?.result??[]].map((item, index) => {
                  return (
                    <blockquote key={item.id} className="flex flex-col  bg-gray-100 dark:bg-gray-800">
                      {/* <Link href={data.link}> */}
                      {/* <Link href="/channelpage"> */}
                      <Link href={`/channelpage?id=${item.id}&name=${item.name}&`}> 
                       <Image className="float-left" src="/channel/amazon.jpg" width={48} height={48} alt={item.name} />
                        <div className="text-lg font-semibold hover:bg-sky-100"> {item.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{item.name}</div>
                      </Link>
                    </blockquote>
                  )
                })}

              </div>
            </div>
          </div>
        </section>
      </main>
    
    </main>
  );
}
