"use client";

import Link from "next/link";
import { ArrowRight, Lock, Mail, User } from "lucide-react";

export default function SignupPage() {
    return (
        <div className="bg-gray-50 dark:bg-black min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-xl p-8">
                <div className="text-center mb-8">
                    <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 inline-block">UVelsi</Link>
                    <h1 className="text-xl font-bold">Create Account</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Join the world's premier fashion community.</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">First Name</label>
                            <input
                                type="text"
                                placeholder="Jane"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-neutral-800 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Last Name</label>
                            <input
                                type="text"
                                placeholder="Doe"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-neutral-800 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                placeholder="hello@example.com"
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-neutral-800 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <input
                                type="password"
                                placeholder="Create a password"
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-neutral-800 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">I am a...</label>
                        <select className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-neutral-800 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none transition-all">
                            <option>Buyer</option>
                            <option>Seller</option>
                            <option>Model</option>
                            <option>Designer</option>
                        </select>
                    </div>

                    <Link href="/dashboard" className="block w-full">
                        <button className="w-full mt-2 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            Get Started <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Already have an account? <Link href="/login" className="text-indigo-600 font-medium hover:underline">Sign In</Link>
                </div>
            </div>
        </div>
    );
}
