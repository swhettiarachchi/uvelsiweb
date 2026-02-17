"use client";

import Link from "next/link";
import { ArrowRight, Lock, Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function LoginPage() {
    return (
        <div className="bg-gray-50 dark:bg-black min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-xl p-8">
                <div className="text-center mb-8">
                    <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 inline-block">UVelsi</Link>
                    <h1 className="text-xl font-bold">Welcome Back</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Enter your credentials to access your account.</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium">Password</label>
                            <Link href="/forgot-password" className="text-xs text-indigo-600 hover:underline">Forgot password?</Link>
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-neutral-800 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <Link href="/dashboard" className="block w-full">
                        <button className="w-full py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            Sign In <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account? <Link href="/signup" className="text-indigo-600 font-medium hover:underline">Create one</Link>
                </div>
            </div>
        </div>
    );
}
