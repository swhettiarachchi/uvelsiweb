import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold tracking-tighter">
                            UVelsi
                        </Link>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                            The world's premier fashion platform connecting designers, models, and fashion enthusiasts in a unified marketplace.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Shop Column */}
                    <div>
                        <h3 className="font-semibold mb-6">Shop</h3>
                        <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                            <li><Link href="/new-arrivals" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">New Arrivals</Link></li>
                            <li><Link href="/marketplace?category=women" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Women's Fashion</Link></li>
                            <li><Link href="/marketplace?category=men" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Men's Fashion</Link></li>
                            <li><Link href="/designers" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Designers</Link></li>
                            <li><Link href="/marketplace?sort=trending" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Trending Now</Link></li>
                        </ul>
                    </div>

                    {/* Discover Column */}
                    <div>
                        <h3 className="font-semibold mb-6">Discover</h3>
                        <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                            <li><Link href="/models" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Top Models</Link></li>
                            <li><Link href="/blog" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Fashion Blog</Link></li>
                            <li><Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Careers</Link></li>
                            <li><Link href="/press" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Press</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                <span>123 Fashion Avenue<br />New York, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                <span>support@uvelsi.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <p>&copy; {new Date().getFullYear()} UVelsi. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
