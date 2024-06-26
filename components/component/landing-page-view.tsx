"use client";
import { Footer } from '@/packages/shared-components/ui/footer';
import { Button, Card, CardBody, Image, CardFooter } from "@nextui-org/react";
import { JSX, SVGProps, useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/packages/shared-components/ui/navbar';

export default function IndexPage() {
  const [channels, setChannels] = useState<{
    id?: string,
    name?: string,
    image?: string,
    description?: string,
    owner_id?: string,
    createAt?: string,
    updateAt?: string,
  }[]>([]);

  useEffect(() => {
    fetch('/api/channel/list')
      .then(response => response.json())
      .then(data => setChannels(data.result));
  }, []);

  return (<>
    <Navbar />
    <div className="flex flex-col min-h-[100dvh] w-full">
      <header className="bg-gray-900 text-gray-50 py-4 px-6 md:px-8 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          <StoreIcon className="h-8 w-8" />
          <span className="text-xl font-semibold">Advertiment Channels</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:underline underline-offset-4" >
            Explore Channels
          </Link>
          <Link href="#" className="hover:underline underline-offset-4">
            Develop Channels
          </Link>
          <Button>Get Started</Button>
        </div>
      </header>
      <section className="bg-gray-900 text-gray-50 py-12 md:py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold">Discover the best channels for your Mitech Marketing</h1>
              <p className="text-gray-300 md:text-xl">
                Browse our curated selection of apps to enhance your online store and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button>Explore Channels</Button>
                <Button variant="light">Become a Developer</Button>
              </div>
            </div>
            <Image src="/channel/placeholder.svg" width={600} height={400} alt="Hero Image" className="mx-auto rounded-lg" />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Featured Apps</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                  channels.slice(0, 6).map((channel, index) => (
                    <Card key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden items-between">
                      <CardBody className="p-4 space-y-2">
                        <Image
                          src={channel.image ?? "/channel/placeholder.svg"}
                          width={400}
                          height={300}
                          alt="App Image"
                          className="w-full aspect-video object-cover"
                        />
                      </CardBody>
                      <CardFooter className="p-4 space-y-2" >
                        <div></div>
                        <h3 className="text-xl font-semibold">{channel.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          {channel.description}
                        </p>
                        <Button size="sm">Install</Button>
                      </CardFooter>
                    </Card>
                  ))
                }
                {/* <Card className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden items-center">
                  <Image
                    src="/channel/google.jpg"
                    width={400}
                    height={300}
                    alt="App Image"
                    className="w-full aspect-video object-cover"
                  />
                  <CardBody className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold">Google Ads</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Recover lost sales with automated abandoned cart emails.
                    </p>
                    <Button size="sm">Install</Button>
                  </CardBody>
                </Card>
                <Card className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden items-center">
                  <Image
                    src="/channel/placeholder.svg"
                    width={400}
                    height={300}
                    alt="App Image"
                    className="w-full aspect-video object-cover"
                  />
                  <CardBody className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold">Product Reviews</h3>
                    <p className="text-gray-500 dark:text-gray-400">Boost sales with authentic product reviews.</p>
                    <Button size="sm">Install</Button>
                  </CardBody>
                </Card>
                <Card className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden items-center">
                  <Image
                    src="/channel/placeholder.svg"
                    width={400}
                    height={300}
                    alt="App Image"
                    className="w-full aspect-video object-cover"
                  />
                  <CardBody className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold">Upsell & Cross-sell</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Increase average order value with smart upsells.
                    </p>
                    <Button size="sm">Install</Button>
                  </CardBody>
                </Card> */}
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Browse by Category</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                <Link
                  href="#"
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <ShoppingCartIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Sales & Marketing</span>
                </Link>
                <Link
                  href="#"
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <WarehouseIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Inventory</span>
                </Link>
                <Link
                  href="#"
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <ShipIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Shipping</span>
                </Link>
                <Link
                  href="#"
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <CoinsIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Payments</span>
                </Link>
                <Link
                  href="#"
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <FlagIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Reporting</span>
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Top Rated Apps</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden items-center">
                  <Image
                    src="/channel/placeholder.svg"
                    width={400}
                    height={300}
                    alt="App Image"
                    className="w-full aspect-video object-cover"
                  />
                  <CardBody className="p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <StarIcon className="h-5 w-5" />
                        <StarIcon className="h-5 w-5" />
                        <StarIcon className="h-5 w-5" />
                        <StarIcon className="h-5 w-5" />
                        <StarIcon className="h-5 w-5" />
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">4.9 (1,234 reviews)</span>
                    </div>
                    <h3 className="text-xl font-semibold">Abandoned Cart Saver</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Recover lost sales with automated abandoned cart emails.
                    </p>
                    <Button size="sm">Install</Button>
                  </CardBody>
                </Card>
                <Card className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden items-center">
                  <Image
                    src="/channel/placeholder.svg"
                    width={400}
                    height={300}
                    alt="App Image"
                    className="w-full aspect-video object-cover"
                  />
                  <CardBody className="p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <StarIcon className="h-5 w-5" />
                        <StarIcon className="h-5 w-5" />
                        <StarIcon className="h-5 w-5" />
                        <StarIcon className="h-5 w-5" />
                        <StarIcon className="h-5 w-5" />
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">4.8 (987 reviews)</span>
                    </div>
                    <h3 className="text-xl font-semibold">Product Reviews</h3>
                    <p className="text-gray-500 dark:text-gray-400">Boost sales with authentic product reviews.</p>
                    <Button size="sm">Install</Button>
                  </CardBody>
                </Card>
                <Card className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden items-center">
                  <Image
                    src="/channel/placeholder.svg"
                    width={400}
                    height={300}
                    alt="App Image"
                    className="w-full aspect-video object-cover"
                  />
                  <CardBody className="p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <StarIcon className="h-5 w-5" />
                        <StarIcon className="h-5 w-5" />
                        <StarIcon className="h-5 w-5" />
                        <StarIcon className="h-5 w-5" />
                        <StarIcon className="h-5 w-5" />
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">4.7 (654 reviews)</span>
                    </div>
                    <h3 className="text-xl font-semibold">Upsell & Cross-sell</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Increase average order value with smart upsells.
                    </p>
                    <Button size="sm">Install</Button>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer className="bg-gray-900 text-gray-50"></Footer>
    </div>
  </>
  );
}

function CoinsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  )
}


function FlagIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function ShipIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
      <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
      <path d="M12 10v4" />
      <path d="M12 2v3" />
    </svg>
  )
}


function ShoppingCartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function StoreIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  )
}


function WarehouseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
      <path d="M6 18h12" />
      <path d="M6 14h12" />
      <rect width="12" height="12" x="6" y="10" />
    </svg>
  )
}