"use strict";
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/layout/MobileMenu";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Sell Items", href: "/sell" },
    { name: "Models", href: "/models" },
    { name: "Designers", href: "/designers" },
    { name: "About Us", href: "/about" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out border-b border-transparent",
                    isScrolled
                        ? "bg-white/80 backdrop-blur-md dark:bg-black/80 py-3 shadow-sm border-gray-200 dark:border-gray-800"
                        : "bg-transparent py-5"
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                        <span className="text-black dark:text-white">UVelsi</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors" aria-label="Search">
                            <Search className="w-5 h-5" />
                        </button>
                        <Link href="/cart" className="p-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors relative" aria-label="Cart">
                            <ShoppingBag className="w-5 h-5" />
                            {/* Optional: Add badge here */}
                        </Link>
                        <Link href="/account" className="hidden md:flex p-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors" aria-label="Account">
                            <User className="w-5 h-5" />
                        </Link>

                        <button
                            className="md:hidden p-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </header>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navLinks={navLinks}
            />
        </>
    );
}
