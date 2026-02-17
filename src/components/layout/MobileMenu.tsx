"use strict";
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navLinks: { name: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed inset-0 z-50 bg-white dark:bg-black md:hidden"
                >
                    <div className="flex flex-col h-full p-6">
                        <div className="flex justify-end mb-8">
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                                aria-label="Close menu"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <nav className="flex flex-col space-y-6 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={onClose}
                                    className="text-2xl font-medium text-gray-800 hover:text-primary dark:text-gray-200 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="pt-8 border-t border-gray-200 dark:border-gray-800 mt-4 flex flex-col gap-4">
                                <Link
                                    href="/login"
                                    onClick={onClose}
                                    className="w-full py-3 px-6 rounded-full border border-gray-300 text-lg font-medium hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900 transition-colors"
                                >
                                    Log In
                                </Link>
                                <Link
                                    href="/signup"
                                    onClick={onClose}
                                    className="w-full py-3 px-6 rounded-full bg-black text-white text-lg font-medium hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </nav>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
