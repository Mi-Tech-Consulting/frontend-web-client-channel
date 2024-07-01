'use client';
import Link from 'next/link';
import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/button"
import AppDetailPageView from '@/components/component/app-detail-page-view';



export default function Page({ id }: { id: string }) {

    return (<AppDetailPageView id={id} />)
}

// export default function Page({ params }: { params: { id: string } }) {
//     return (

//         <section className="py-12 md:py-24 lg:py-32 px-4">
//                 <div className="grid grid-cols-2 md:max-lg:grid-cols-1 gap-4 w-full">
//                     <div className='flex flex-col gap-4 justify-between items-start'>
//                         <Image className="float-left" src={"/channel/amazon.jpg"} width={48} height={48} alt="Amazon" />
//                         <div className="text-2xl items-center justify-center font-semibold "> Cod Commerce Amazon Channel</div>
//                         <div className="text-lg text-gray-500 dark:text-gray-400">Amazon Channel free Plan available</div>
//                         <div className="flex flex-row justify-between w-full">
//                             <div>
//                                 <p className="text-sm text-gray-500 dark:text-gray-400">Rating (4.5)</p>
//                                 <p>*****</p>
//                             </div>
//                             <div>
//                                 <div className="text-sm text-gray-500 dark:text-gray-400">Reviews</div>
//                                 <div><Link href="/Reviews">7500</Link></div>
//                             </div>
//                             <div>
//                                 <div className="text-sm text-gray-500 dark:text-gray-400">Developer</div>
//                                 <div><a href="/Reviews">Ced Commerce</a></div>
//                             </div>
//                         </div>
//                         <div>
//                             <Button className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
//                                 type="submit">
//                                 <Link href="/Install">Install</Link>
//                             </Button>
//                         </div>
//                     </div>
//                     <iframe
//                         width="650"
//                         height="350"
//                         src="https://www.youtube.com/embed/46PGYJx3YAg"

//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         title="Embedded youtube"
//                     />
//                     <div>
//                     <p>Description</p>

//                     <p>CodCommerce Amazon Channel is a free extension that allows you to sell your products on Amazon. It is a complete solution for managing your Amazon listings, orders, and inventory. With CodCommerce Amazon Channel, you can easily import your products, manage your inventory, and process your orders from Amazon.</p>
//                     <p>Features</p>
//                     <ul>
//                         <li>Import products from Amazon to your store</li>
//                         <li>Sync inventory and price changes</li>
//                         <li>Automatically update product information</li>
//                         <li>Manage orders and shipments</li>
//                         <li>Track sales and performance</li>
//                     </ul>
//                     <p>Requirements</p>
//                 </div>
//                 </div>
//         </section>
//     )
// }