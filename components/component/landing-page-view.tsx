"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function IndexPage() {

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
            <blockquote className="flex flex-col  bg-gray-200 dark:bg-gray-800"> 
              <Link  href="/amazon" >
                <Image className="float-left" src={require('/public/amazon.jpg')} width={48} height={48} alt="amazon"/>
                <div className="text-lg font-semibold hover:bg-sky-100"> Cod Commerce Amazon Channel</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Amazon Channel free Plan available</div>
              </Link>
            </blockquote>
            <blockquote className="flex flex-col space-y-2 rounded-md bg-gray-200 dark:bg-gray-800">
              <Link  href="/tiktok" >
                <Image className="float-left" src={require('/public/tiktok.jpg')}  width={48} height={48} alt="tiktok" />
                <div className="text-lg font-semibold hover:bg-sky-100">TikTok</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Showcase your products to TickTok &apos; billions of users</div>
              </Link>
            </blockquote>
            <blockquote className="flex flex-col  bg-gray-200 dark:bg-gray-800">
              <Link  href="/facebook" >
                <Image className="float-left" src={require('/public/facebook.jpg')}  width={48} height={48} alt="facebook"/>
                <div className="text-lg font-semibold hover:bg-sky-100">Facebook & Instagram</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">The official app from Meta sell on Facebook and Instagram
                </div>
              </Link>
            </blockquote>
            <blockquote className="flex flex-col bg-gray-200 dark:bg-gray-800">
            <Link  href="/linktree" > 
                <Image className="float-left" src={require('/public/linktree.jpg')}  width={48} height={48} alt="linktree" />
                <div className="text-lg font-semibold hover:bg-sky-100"><p>Linktree</p></div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                Free plan available,Reach new customers and increase sales
                </div>
            </Link>
            </blockquote>
            <blockquote className="flex flex-col  bg-gray-200 dark:bg-gray-800">
            <Link  href="/pinterest" > 
              <Image className="float-left" src={require('/public/pinterest.jpg')}  width={48} height={48} alt="pinterest" />
              <div className="text-lg font-semibold hover:bg-sky-100"> Pinterest</div>
              <div className="text-sm text-gray-500 dark:text-gray-400"> Put your products where people go to find ideas to try and buy</div>
            </Link>
            </blockquote>
            <blockquote className="flex flex-col space-y-2 rounded-md bg-gray-200 dark:bg-gray-800">
            <Link  href="/google" > 
              <Image className="float-left" src={require('/public/google.jpg')}  width={48} height={48} alt="google"/>
              <div className="text-lg font-semibold hover:bg-sky-100">Google & YouTube</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Access the best of Google and Youtube  </div>
            </Link>
            </blockquote>
            <blockquote className="flex flex-col bg-gray-200  dark:bg-gray-800">
            <Link  href="/shopify" > 
              <Image className="float-left" src={require('/public/shopify.jpg')}  width={48} height={48} alt="shopify" />
              <div className="text-lg font-semibold hover:bg-sky-100">Shopify Market Connect</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Sell on Amazon,Walmart,eBay and Etsy </div>
            </Link>
            </blockquote>
            <blockquote className="flex flex-col bg-gray-200 dark:bg-gray-800">
            <Link  href="/faire" > 
              <Image className="float-left" src={require('/public/shop.jpg')}  width={48} height={48} alt="shop"/>
              <div className="text-lg font-semibold hover:bg-sky-100"><p>Faire: Sell Wholesale</p>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Sell Wholesale to independent Retailers worldwide</div>
            </Link>
            </blockquote>
          </div>
        </div>
      </div>
    </section>   
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
