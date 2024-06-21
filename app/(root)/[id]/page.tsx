/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/awazTFWOi7o
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Cormorant_Garamond } from 'next/font/google'
import { Chivo } from 'next/font/google'

cormorant_garamond({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"
import { Button, ButtonGroup } from "@nextui-org/button"
import { Textarea } from "@nextui-org/react"
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { JSX, SVGProps} from 'react';

export default function ChannelPage() {

    const getParams = useSearchParams();
    const searchid = getParams.get("id");
    const searchname = getParams.get("name");
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-muted px-4 md:px-6 py-4 flex items-center gap-4">
        <div className="flex items-center gap-4">
          <img src="/channel/google.jpg" width={40} height={40} alt="Channel Logo" className="rounded-md" />
          <h1 className="text-lg font-semibold">{searchname} Channel</h1>
        </div>
      </header>
      <main className="flex-1 px-4 md:px-6 py-8 grid gap-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold">About {searchname} Channel</h2>
            <p className="text-muted-foreground mt-4">
              {searchname} Channel is a powerful integration that allows you to seamlessly connect your Shopify store with our
              innovative platform. With a wide range of features and customization options, Acme Channel empowers you to
              streamline your operations, boost sales, and provide an exceptional customer experience.
            </p>
             <Button className="flex flex-wrap items-center" color="primary" type="submit">
              <Link  href="#"></Link>Install
            </Button>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Key Features</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Automated order synchronization
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Inventory management and updates
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Detailed sales reporting
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Customizable branding and marketing tools
              </li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold">Pricing</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Basic Plan</span>
                <span className="font-medium">$9/month</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Pro Plan</span>
                <span className="font-medium">$29/month</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Enterprise Plan</span>
                <span className="font-medium">$99/month</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Rate {searchname} Channel</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
                <span className="text-sm font-medium">3.0</span>
              </div>
              <Textarea
                placeholder="Leave a review..."
                className="w-full resize-none rounded-md border border-input bg-background p-2 text-sm leading-snug focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button color="primary">Submit Review</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20 6 9 17l-5-5" />
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
