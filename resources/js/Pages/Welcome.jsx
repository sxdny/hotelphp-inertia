import GuestLayout from "@/Layouts/GuestLayout";
import { Link, Head, usePage } from "@inertiajs/react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/Components/ui/navigation-menu";
import { Button } from "@/Components/ui/button";

import { motion, useScroll } from "motion/react";

import { useState } from "react";

export default function Welcome() {
    const user = usePage().props.auth.user;

    let userIsLoggedIn = user !== null;

    let scrollY = useScroll();

    const [headerMargin, setHeaderMargin] = useState("1rem");
    const [headerBorder, setHeaderBorder] = useState("0px solid transparent");

    scrollY.scrollY.on("change", (y) => {
        y > 50 ? setHeaderMargin("4rem") : setHeaderMargin("1rem");
        y > 50
            ? setHeaderBorder("1px solid #262626")
            : setHeaderBorder("0px solid transparent");
    });

    return (
        <GuestLayout>
            <Head title="The best PMS online" />

            <div className="fixed inset-x-3 top-0 z-50 mx-auto">
                <motion.header
                    className="sticky flex items-center justify-between dark:bg-neutral-900/30 backdrop-blur-lg rounded-xl py-3 px-4 bg-white"
                    initial={{
                        margin: "1rem",
                        border: "0px solid transparent",
                    }}
                    animate={{
                        margin: `2rem ${headerMargin}`,
                        border: headerBorder,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                >
                    <Link
                        href="/"
                        className="dark:text-white text-neutral-900 font-semibold text-2xl"
                    >
                        HotelPHP
                    </Link>

                    <NavigationMenu className="flex-1 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Features
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>
                                        Link
                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link
                                    className={navigationMenuTriggerStyle()}
                                    href="/pricing"
                                    legacybehavior="true"
                                    passhref="true"
                                >
                                    Pricing
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link
                                    className={navigationMenuTriggerStyle()}
                                    href="/docs"
                                    legacybehavior="true"
                                    passhref="true"
                                >
                                    Documentation
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex items-center gap-4">
                        {userIsLoggedIn ? (
                            <>
                                <Link href="/dashboard">
                                    <Button
                                        variant="secondary"
                                        className="font-semibold"
                                    >
                                        Dashboard
                                    </Button>
                                </Link>
                                <Link href="/profile">
                                    <Button className="font-semibold">
                                        Profile
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <Link href="/register">
                                <Button className="font-semibold">
                                    Get Started
                                </Button>
                            </Link>
                        )}
                    </div>
                </motion.header>
            </div>

            <section className="flex-1 mt-64 mb-10">
                <div className="flex flex-col items-center pt-8">
                    <h1 className="font-display font-semibold text-7xl text-neutral-900 dark:text-neutral-100 text-center">
                        Where hospitality <br /> meets technology
                    </h1>
                    <p className="mt-12 max-w-lg animate-slide-up-fade text-lg text-gray-700 dark:text-gray-400 text-center">
                        HotelPHP is a property management system that helps you
                        manage your hotel, hostel, or any other property with
                        ease.
                    </p>

                    <div className="mt-8">
                        {
                            userIsLoggedIn ? (
                                <Link href="/dashboard">
                                    <Button
                                        variant="secondary"
                                        className="font-semibold"
                                    >
                                        Dashboard
                                    </Button>
                                </Link>
                            ) : (
                                <Link href="/register">
                                    <Button className="font-semibold">
                                        Get Started
                                    </Button>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </section>

            <section className="my-32">
                <div className="flex flex-col items-center pt-8">
                    <h2 className="font-display text-4xl text-neutral-900 dark:text-neutral-100 text-center">
                        Why Choose HotelPHP?
                    </h2>
                    <p className="mt-6 max-w-lg animate-slide-up-fade text-lg text-gray-700 dark:text-gray-400 text-center">
                        Our platform offers a comprehensive suite of tools
                        designed to streamline your property management
                        processes.
                    </p>

                    <div className="mt-12 mx-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <h3 className="mt-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                Easy to Use
                            </h3>
                            <p className="mt-2 text-center text-gray-700 dark:text-gray-400">
                                Our intuitive interface ensures that you can
                                manage your property with ease, even if you're
                                not tech-savvy.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="mt-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                Secure
                            </h3>
                            <p className="mt-2 text-center text-gray-700 dark:text-gray-400">
                                We prioritize your data security with top-notch
                                encryption and regular security updates.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="mt-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                24/7 Support
                            </h3>
                            <p className="mt-2 text-center text-gray-700 dark:text-gray-400">
                                Our dedicated support team is available around
                                the clock to assist you with any issues or
                                questions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-32 bg-gray-100 dark:bg-neutral-800 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-4xl text-neutral-900 dark:text-neutral-100 text-center">
                        Key Features
                    </h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                Booking Management
                            </h3>
                            <p className="mt-2 text-gray-700 dark:text-gray-400">
                                Easily manage bookings, cancellations, and
                                modifications with our user-friendly booking
                                system.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                Guest Communication
                            </h3>
                            <p className="mt-2 text-gray-700 dark:text-gray-400">
                                Keep in touch with your guests through automated
                                emails and messages, ensuring a seamless
                                experience.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                Reporting & Analytics
                            </h3>
                            <p className="mt-2 text-gray-700 dark:text-gray-400">
                                Gain insights into your property's performance
                                with our comprehensive reporting and analytics
                                tools.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                Channel Management
                            </h3>
                            <p className="mt-2 text-gray-700 dark:text-gray-400">
                                Connect with multiple booking channels and
                                manage your availability and rates from one
                                place.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                Housekeeping Management
                            </h3>
                            <p className="mt-2 text-gray-700 dark:text-gray-400">
                                Streamline your housekeeping operations with our
                                efficient task management system.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                Integrations
                            </h3>
                            <p className="mt-2 text-gray-700 dark:text-gray-400">
                                Seamlessly integrate with popular third-party
                                services to enhance your property's
                                capabilities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
