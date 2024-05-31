import Link from 'next/link';
import Image from "next/image";
import {Button, ButtonGroup} from "@nextui-org/button"

export default function Page()
{
    return (
       
         <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:grid-cols-2 lg:text-left xl:gap-10">
              <div className="space-y-4">
                <Image class="float-left" src={require('/public/shopify.jpg')}  width={48} height={48} />
                <div className="text-2xl items-center justify-center font-semibold "> Shopify Search & Discovery</div>
                <div className="text-lg text-gray-500 dark:text-gray-400">Price: Free</div>
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:grid-cols-3 lg:text-left xl:gap-10"> 
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Rating (4.5)</p> 
                        <p>*****</p> 
                    </div>
                    <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Reviews</div>
                        <div><Link href="/Reviews">7500</Link></div>
                    </div>   
                    <div >  
                        <div className="text-sm text-gray-500 dark:text-gray-400">Developer</div>
                        <div><a href="/Reviews">Shopify</a></div>
                    </div>
                </div>
                <div>
                <Button className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
                    type="submit">
                    <Link href="/Install">Install</Link>
                </Button>
               
                </div>
              </div>
              <iframe
                width="650"
                height="350"
                src="https://www.youtube.com/embed/YBtaSEmirMc"
    
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
             />
        </div>
    </section>
 )
}