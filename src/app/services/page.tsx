"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ServicesPage() {
    return (
        <div className="bg-white dark:bg-black min-h-screen pb-20">

            {/* Hero */}
            <div className="bg-indigo-900 text-white py-24 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Expert Fashion Consulting</h1>
                <p className="text-xl text-indigo-200 max-w-2xl mx-auto mb-8">Connect with top designers, stylists, and models for personalized advice and professional services.</p>
                <Link href="#pricing" className="px-8 py-4 bg-white text-indigo-900 rounded-full font-bold hover:bg-gray-100 transition-colors">
                    View Services
                </Link>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-20">
                <SectionHeading title="How It Works" centered />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 mb-20">
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto text-indigo-600">
                            <MessageSquare className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold">1. Choose an Expert</h3>
                        <p className="text-gray-500">Browse profiles of verified designers and stylists.</p>
                    </div>
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto text-indigo-600">
                            <Calendar className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold">2. Book a Session</h3>
                        <p className="text-gray-500">Select a time that works for you directly on their calendar.</p>
                    </div>
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto text-indigo-600">
                            <Check className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold">3. Get Results</h3>
                        <p className="text-gray-500">Receive personalized advice, sketches, or wardrobe plans.</p>
                    </div>
                </div>

                <div id="pricing" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="border border-gray-200 dark:border-neutral-800 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold mb-2">Style Audit</h3>
                        <p className="text-gray-500 mb-6">Perfect for a wardrobe refresh.</p>
                        <div className="text-4xl font-bold mb-6">$150<span className="text-lg font-normal text-gray-500">/session</span></div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3"><Check className="text-green-500 w-5 h-5" /> 1 hour video call</li>
                            <li className="flex gap-3"><Check className="text-green-500 w-5 h-5" /> Wardrobe review</li>
                            <li className="flex gap-3"><Check className="text-green-500 w-5 h-5" /> Shopping list</li>
                        </ul>
                        <button className="w-full py-3 border-2 border-black dark:border-white rounded-lg font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Book Now</button>
                    </div>

                    {/* Card 2 */}
                    <div className="border border-indigo-500 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl p-8 relative">
                        <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
                        <h3 className="text-2xl font-bold mb-2">Custom Design</h3>
                        <p className="text-gray-500 mb-6">For special occasions & events.</p>
                        <div className="text-4xl font-bold mb-6">$500<span className="text-lg font-normal text-gray-500">/concept</span></div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3"><Check className="text-green-500 w-5 h-5" /> Initial consultation</li>
                            <li className="flex gap-3"><Check className="text-green-500 w-5 h-5" /> 3 sketch options</li>
                            <li className="flex gap-3"><Check className="text-green-500 w-5 h-5" /> Fabric selection</li>
                            <li className="flex gap-3"><Check className="text-green-500 w-5 h-5" /> Find a tailor</li>
                        </ul>
                        <button className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors">Book Now</button>
                    </div>

                    {/* Card 3 */}
                    <div className="border border-gray-200 dark:border-neutral-800 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold mb-2">Brand Strategy</h3>
                        <p className="text-gray-500 mb-6">For emerging designers.</p>
                        <div className="text-4xl font-bold mb-6">$300<span className="text-lg font-normal text-gray-500">/hour</span></div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3"><Check className="text-green-500 w-5 h-5" /> Portfolio review</li>
                            <li className="flex gap-3"><Check className="text-green-500 w-5 h-5" /> Market positioning</li>
                            <li className="flex gap-3"><Check className="text-green-500 w-5 h-5" /> Manufacturing contacts</li>
                        </ul>
                        <button className="w-full py-3 border-2 border-black dark:border-white rounded-lg font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
