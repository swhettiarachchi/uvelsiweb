"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ContactPage() {
    return (
        <div className="bg-white dark:bg-black min-h-screen py-20">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading title="Contact Us" subtitle="We'd love to hear from you." centered />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Email</h3>
                                <p className="text-gray-500">support@uvelsi.com</p>
                                <p className="text-gray-500">partnerships@uvelsi.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Phone</h3>
                                <p className="text-gray-500">+1 (555) 123-4567</p>
                                <p className="text-gray-500">Mon-Fri, 9am - 6pm EST</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Office</h3>
                                <p className="text-gray-500">100 Fashion Avenue</p>
                                <p className="text-gray-500">New York, NY 10001</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2 bg-gray-50 dark:bg-neutral-900 rounded-2xl p-8 border border-gray-100 dark:border-neutral-800">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-black focus:ring-2 focus:ring-indigo-500 outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-black focus:ring-2 focus:ring-indigo-500 outline-none" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Subject</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-black focus:ring-2 focus:ring-indigo-500 outline-none">
                                    <option>General Inquiry</option>
                                    <option>Support</option>
                                    <option>Partnership</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <textarea rows={6} className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-black focus:ring-2 focus:ring-indigo-500 outline-none"></textarea>
                            </div>
                            <button className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg font-bold hover:opacity-90 transition-opacity">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
