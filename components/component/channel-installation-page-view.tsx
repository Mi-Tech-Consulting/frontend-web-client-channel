"use client";

import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Avatar,
    Input,
    Autocomplete,
    AutocompleteItem,
    CardFooter,
    Tabs,
    Tab,
    Spacer,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";



export default function ChannelInstallationPageView(props: { id: string }) {
    return (
        <div className="flex flex-col w-full justify-center items-center content-center p-8 gap-8">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">Welcome to Channel Installation</h1>
                <p className="text-lg text-gray-500">Please complete the payment process to install the channel.</p>
            </div>
            <Card className="w-4/5">
                <CardHeader className="relative flex h-[150px] flex-col justify-end overflow-visible bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400">
                    <h1 className="text-large font-bold">
                        Google Ads Channel
                    </h1>
                    <p>{props.id}</p>
                    <Avatar
                        className="h-20 w-20 translate-y-12 "
                        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    />

                </CardHeader>
                <CardBody className="p-4">

                    <div className="pb-4 pt-6">
                        <p className="text-large font-medium">Google Ads</p>
                        <p className="max-w-[90%] text-small text-default-400">
                            Google Ads is an online advertising platform developed by Google, where advertisers pay to display brief advertisements, service offerings, product listings, video content, and generate mobile application installs within the Google ad network to web users.
                        </p>
                    </div>
                    <div className="pb-4 pt-6">
                        <Button><Icon icon="flat-color-icons:google" width={"100%"} height={"100%"} />Connect to Google</Button>
                    </div>
                    <Tabs>
                        <Tab key="one-time-payment" title="One-time payment" />
                        <Tab key="subscription" title="Subscription" />
                    </Tabs>
                    <Spacer y={2} />
                    <form className="px-2 py-4" onSubmit={(e) => e.preventDefault()}>
                        <ChannelInstallForm />
                        <fieldset className="mt-4">
                            <legend className="pb-1.5 text-small font-medium">Billing address</legend>
                            <Autocomplete
                                defaultItems={countries}
                                label="Country"
                                labelPlacement="outside"
                                placeholder="Select country"
                                showScrollIndicators={false}
                            >
                                {(item) => (
                                    <AutocompleteItem
                                        key={item.code}
                                        startContent={
                                            <Avatar
                                                alt="Country Flag"
                                                className="h-6 w-6"
                                                src={`https://flagcdn.com/${item.code.toLowerCase()}.svg`}
                                            />
                                        }
                                        value={item.code}
                                    >
                                        {item.name}
                                    </AutocompleteItem>
                                )}
                            </Autocomplete>
                            <Spacer y={2} />
                            <div className="flex gap-2">
                                <Input labelPlacement="outside" placeholder="ZIP Code" />
                                <Input labelPlacement="outside" placeholder="State" />
                            </div>
                        </fieldset>
                        <Spacer y={4} />
                        <Button fullWidth color="secondary" size="lg" type="submit">
                            Pay $49.00
                        </Button>
                    </form>
                </CardBody>
                <CardFooter className="items-center justify-center gap-1 pb-5">
                    <Icon className="text-default-300" icon="solar:shield-check-bold" width={20} />
                    <p className="text-small text-default-300">Payments are secure and encrypted.</p>
                </CardFooter>
            </Card>
        </div>
    );
}

import type { InputProps } from "@nextui-org/react";
import { cn } from "@/packages/shared-components/lib/cn";
import countries from "@/lib/countries";

export type PaymentFormProps = React.HTMLAttributes<HTMLDivElement> & {
    variant?: InputProps["variant"];
};


const ChannelInstallForm = React.forwardRef<HTMLDivElement, PaymentFormProps>(
    ({ variant = "flat", className, ...props }, ref) => {
        const NumberInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
            <input
                className="w-11 rounded-sm bg-transparent text-small outline-none placeholder:text-default-400"
                min={0}
                minLength={0}
                type="number"
                {...props}
            />
        );

        return (
            <div ref={ref} className={cn("flex flex-col gap-4", className)} {...props}>
                <Input
                    label="Email address"
                    labelPlacement="outside"
                    placeholder="Enter address"
                    type="email"
                    variant={variant}
                />
                <Input
                    endContent={
                        <div className="flex max-w-[140px] items-center">
                            <NumberInput max={12} maxLength={2} name="card-month" placeholder="MM" />
                            <span className="mx-1 text-default-300">/</span>
                            <NumberInput max={99} maxLength={2} name="card-year" placeholder="YY" />
                            <NumberInput max={999} maxLength={3} name="card-cvc" placeholder="CVC" />
                        </div>
                    }
                    label="Card number"
                    labelPlacement="outside"
                    minLength={0}
                    name="card-number"
                    placeholder="Card number"
                    startContent={
                        <span>
                            <Icon className="text-default-400" icon="solar:card-bold" width={20} />
                        </span>
                    }
                    type="number"
                    variant={variant}
                />
                <Input
                    label="Cardholder name"
                    labelPlacement="outside"
                    placeholder="Cardholder name"
                    variant={variant}
                />
            </div>
        );
    },
);

ChannelInstallForm.displayName = "ChannelInstallForm";
