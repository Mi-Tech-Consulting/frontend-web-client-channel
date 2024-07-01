/**
 * v0 by Vercel.
 * @see https://v0.dev/t/As7nvorvs9c
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react"
import { Button } from "@nextui-org/react"
import { Image } from "@nextui-org/react"
import { Accordion, AccordionItem } from "@nextui-org/react"
import { JSX, SVGProps } from 'react'

export default function Component(props : {  id: string }) {
    return (
        <div className="bg-background text-foreground">
            <header className="bg-primary text-primary-foreground py-6 px-4 md:px-8 lg:px-12">
                <div className="container mx-auto flex items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Image src="/channel/placeholder.svg" width={64} height={64} alt="App Icon" className="rounded-lg" />
                        <div>
                            <h1 className="text-2xl font-bold">Acme Inventory Manager</h1>
                            <p className="text-sm text-primary-foreground/80">by Acme Inc.</p>
                        </div>
                    </div>
                </div>
            </header>
            <main className="container mx-auto py-12 px-4 md:px-8 lg:px-12">
                <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="col-span-2 lg:col-span-1">
                        <h2 className="text-2xl font-bold mb-4">About the App</h2>
                        <p className="text-muted-foreground mb-6">
                            Acme Inventory Manager is a powerful tool that helps you streamline your inventory management process.
                            With features like real-time stock tracking, automated reordering, and detailed reporting, you can save
                            time and optimize your operations.
                        </p>
                        <ul className="grid gap-4">
                            <li className="flex items-start gap-2">
                                <CheckIcon className="w-5 h-5 text-primary mt-1" />
                                <div>
                                    <h3 className="font-medium">Real-Time Inventory Tracking</h3>
                                    <p className="text-muted-foreground">
                                        Get instant updates on your stock levels and never run out of popular items.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckIcon className="w-5 h-5 text-primary mt-1" />
                                <div>
                                    <h3 className="font-medium">Automated Reordering</h3>
                                    <p className="text-muted-foreground">
                                        Set up custom reorder points and let the app handle restocking for you.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckIcon className="w-5 h-5 text-primary mt-1" />
                                <div>
                                    <h3 className="font-medium">Detailed Reporting</h3>
                                    <p className="text-muted-foreground">
                                        Generate comprehensive reports on sales, inventory turnover, and more.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2 lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Image src="/channel/placeholder.svg" width={400} height={300} alt="Screenshot 1" className="rounded-lg" />
                            <Image src="/channel/placeholder.svg" width={400} height={300} alt="Screenshot 2" className="rounded-lg" />
                            <Image src="/channel/placeholder.svg" width={400} height={300} alt="Screenshot 3" className="rounded-lg" />
                        </div>
                    </div>
                </section>
                <section className="mt-12">
                    <h2 className="text-2xl font-bold mb-4">Pricing</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <Card className="bg-muted text-muted-foreground">
                            <CardHeader>
                                <h1>Starter</h1>
                                <p>Perfect for small businesses</p>
                            </CardHeader>
                            <CardBody>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold">$9</span>
                                    <span className="text-sm text-muted-foreground">/month</span>
                                </div>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="w-4 h-4 text-primary" />
                                        <span>Up to 100 products</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="w-4 h-4 text-primary" />
                                        <span>Basic reporting</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="w-4 h-4 text-primary" />
                                        <span>Email support</span>
                                    </li>
                                </ul>
                            </CardBody>
                            <CardFooter>
                                <Button size="lg" className="w-full">
                                    Start Trial
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="bg-muted text-muted-foreground">
                            <CardHeader>
                                <h1>Pro</h1>
                                <p>For growing businesses</p>
                            </CardHeader>
                            <CardBody>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold">$29</span>
                                    <span className="text-sm text-muted-foreground">/month</span>
                                </div>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="w-4 h-4 text-primary" />
                                        <span>Up to 500 products</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="w-4 h-4 text-primary" />
                                        <span>Advanced reporting</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="w-4 h-4 text-primary" />
                                        <span>Priority email support</span>
                                    </li>
                                </ul>
                            </CardBody>
                            <CardFooter>
                                <Button size="lg" className="w-full">
                                    Start Trial
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="bg-muted text-muted-foreground">
                            <CardHeader>
                                <h1>Enterprise</h1>
                                <p>For large businesses</p>
                            </CardHeader>
                            <CardBody>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold">$99</span>
                                    <span className="text-sm text-muted-foreground">/month</span>
                                </div>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="w-4 h-4 text-primary" />
                                        <span>Unlimited products</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="w-4 h-4 text-primary" />
                                        <span>Custom reporting</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="w-4 h-4 text-primary" />
                                        <span>Dedicated account manager</span>
                                    </li>
                                </ul>
                            </CardBody>
                            <CardFooter>
                                <Button size="lg" className="w-full">
                                    Contact Sales
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </section>
                <section className="mt-12">
                    <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <Card className="bg-muted text-muted-foreground">
                            <CardBody>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex items-center gap-1">
                                        <StarIcon className="w-5 h-5 fill-primary" />
                                        <StarIcon className="w-5 h-5 fill-primary" />
                                        <StarIcon className="w-5 h-5 fill-primary" />
                                        <StarIcon className="w-5 h-5 fill-primary" />
                                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                    </div>
                                    <span className="text-sm font-medium">4.2</span>
                                </div>
                                <p className="text-sm">
                                    &quot;Acme Inventory Manager has been a game-changer for my\n business. The real-time tracking and
                                    automated reordering\n have saved me so much time and hassle.&quot;
                                </p>
                                <div className="mt-4 flex items-center gap-2">
                                    <Image src="/channel/placeholder.svg" width={40} height={40} alt="User Avatar" className="rounded-full" />
                                    <div>
                                        <p className="font-medium">Jane Doe</p>
                                        <p className="text-xs text-muted-foreground">Small Business Owner</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="bg-muted text-muted-foreground">
                            <CardBody>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex items-center gap-1">
                                        <StarIcon className="w-5 h-5 fill-primary" />
                                        <StarIcon className="w-5 h-5 fill-primary" />
                                        <StarIcon className="w-5 h-5 fill-primary" />
                                        <StarIcon className="w-5 h-5 fill-primary" />
                                        <StarIcon className="w-5 h-5 fill-primary" />
                                    </div>
                                    <span className="text-sm font-medium">5.0</span>
                                </div>
                                <p className="text-sm">
                                &quot;I&apos;ve tried several inventory management apps, but Acme\n Inventory Manager is by far the best. The
                                    user interface is\n intuitive, and the features are exactly what I need.&quot;
                                </p>
                                <div className="mt-4 flex items-center gap-2">
                                    <Image src="/channel/placeholder.svg" width={40} height={40} alt="User Avatar" className="rounded-full" />
                                    <div>
                                        <p className="font-medium">John Smith</p>
                                        <p className="text-xs text-muted-foreground">Retail Store Owner</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="bg-muted text-muted-foreground">
                            <CardBody>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex items-center gap-1">
                                        <StarIcon className="w-5 h-5 fill-primary" />
                                        <StarIcon className="w-5 h-5 fill-primary" />
                                        <StarIcon className="w-5 h-5 fill-primary" />
                                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                    </div>
                                    <span className="text-sm font-medium">3.8</span>
                                </div>
                                <p className="text-sm">
                                &quot;Acme Inventory Manager has a few quirks, but overall it&apos;s a\n solid product. The customer support
                                    team has been very\n helpful in addressing my concerns.&quot;
                                </p>
                                <div className="mt-4 flex items-center gap-2">
                                    <Image src="/channel/placeholder.svg" width={40} height={40} alt="User Avatar" className="rounded-full" />
                                    <div>
                                        <p className="font-medium">Sarah Lee</p>
                                        <p className="text-xs text-muted-foreground">Ecommerce Business Owner</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </section>
                <section className="mt-12">
                    <h2 className="text-2xl font-bold mb-4">FAQs</h2>
                    <Accordion>
                        <AccordionItem value="faq-1" subtitle="How does the automated reordering feature work?">
                            <p className="text-muted-foreground">
                                The automated reordering feature allows you to set custom reorder points for each product. When your
                                stock levels reach those thresholds, the app will automatically generate a purchase order for you to
                                review and approve.
                            </p>
                        </AccordionItem>
                        <AccordionItem value="faq-2" subtitle="Can I integrate Acme Inventory Manager with my existing systems?">
                            <p className="text-muted-foreground">
                                Yes, Acme Inventory Manager offers a robust API that allows you to integrate with your existing
                                accounting, ecommerce, and other business systems. Our team can help you set up the integration to
                                ensure a seamless workflow.
                            </p>
                        </AccordionItem>
                        <AccordionItem value="faq-3" subtitle="What kind of support is available for Acme Inventory Manager?">
                            <p className="text-muted-foreground">
                                We offer a variety of support options, including email support, a comprehensive knowledge base, and
                                priority support for our Enterprise customers. Our team is dedicated to ensuring your success with the
                                app.
                            </p>
                        </AccordionItem>
                    </Accordion>
                </section>
                <section className="mt-12">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <h3 className="text-lg font-medium mb-2">Acme Inc.</h3>
                            <p className="text-muted-foregroun" />
                        </div>
                    </div>
                </section>
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