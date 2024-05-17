// "use client"
import LandingPageView from './LandingPageView';
import Image from 'next/image';
import Link from 'next/link';

export default function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-5 shrink-0 items-end rounded-lg bg-blue-300 p-4 md:h-5">
      </div> 
        <div className={`text-base  text-left text-gray-800 columns-4`}> 
          <div className={`hover:bg-sky-100`}>
              <Link  href="https:google.com" >
              <Image class="float-left" src={require('/public/amazon.jpg')}  width={30} height={30} />
            <p><span>&nbsp;</span><strong> Cod Commerce Amazon Channel</strong><br/>
            <span>&nbsp;</span>Amzzon Channel free Plan available
           </p>
           </Link>
           {/* className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base" */}
           </div>
          
          <div className={`hover:bg-sky-100`}>
            <Link  href="https:google.com" >
                <Image class="float-left" src={require('/public/tiktok.jpg')}  width={30} height={30} />
                <p><span>&nbsp;</span> <strong> TikTok</strong><br/>
                <span>&nbsp;</span>Showcase your products to TikTok's billions of users
                {/* className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base" */}
                </p>
            </Link>
        </div>
        {/* <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}> */}
        <div className={`hover:bg-sky-100`}>
          <Link  href="https:google.com" >
            <Image class="float-left" src={require('/public/facebook.jpg')}  width={30} height={30}/>
            <p><span>&nbsp;</span><strong> Facebook & Instagram</strong><br/>
            <span>&nbsp;</span>The official app from Meta sell on Facebook and Instagram
            </p>
            </Link>
        </div>
         <div>  
          <Link  href="https:google.com" > 
           <Image class="float-left" src={require('/public/linktree.jpg')}  width={30} height={30} />
           <p><span>&nbsp;</span><strong className={`hover:bg-sky-100`}> Linktree</strong><br/>
           <span>&nbsp;</span>Free plan available,Reach new customers and increase sales
           </p>
           </Link>
        </div>
        <div>           
          <Link  href="https:google.com" > 
            <Image class="float-left" src={require('/public/pinterest.jpg')}  width={30} height={30} />
            <p><span>&nbsp;</span><strong className={`hover:bg-sky-100`}>Pinterest</strong><br/>
            <span>&nbsp;</span>Put your products where people go to find ideas to try and buy
            </p>
          </Link>
        </div>
        <div>
          <Link  href="https:google.com" > 
           <Image class="float-left" src={require('/public/google.jpg')}  width={30} height={30} />
          <p><span>&nbsp;</span><strong className={`hover:bg-sky-100`}>Google & YouTube</strong><br/>
          <span>&nbsp;</span>Access the best of Google and Youtube 
          </p>
          </Link>
        </div>
        <div>
          <Link  href="https:google.com" > 
           <Image class="float-left" src={require('/public/shopify.jpg')}  width={30} height={30} />
          <p><span>&nbsp;</span><strong className={`hover:bg-sky-100`}>Shopify Market Connect</strong><br/>
          <span>&nbsp;</span>Sell on Amazon,Walmart,eBay and Etsy
          </p>
          </Link>
        </div>
        <div>
          <Link  href="https:google.com" > 
           <Image class="float-left" src={require('/public/shop.jpg')}  width={30} height={30} />
          <p><span>&nbsp;</span><strong className={`hover:bg-sky-100`}>Shop</strong><br/>
          <span>&nbsp;</span>Boots your brand presence and connect with customers on shop
          </p>
          </Link>
        </div>
     </div>
    </main>
  );
    // <LandingPageView searchParams={searchParams}></LandingPageView>);
}
