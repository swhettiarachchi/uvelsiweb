"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";

export default function TermsPage() {
    return (
        <div className="bg-white dark:bg-black min-h-screen py-20">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <SectionHeading title="Terms of Service" subtitle="Last Updated: February 2026" />

                <div className="prose dark:prose-invert max-w-none space-y-8 text-gray-600 dark:text-gray-300">
                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h3>
                        <p>By accessing or using the UVelsi platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. User Accounts</h3>
                        <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. Intellectual Property</h3>
                        <p>The Service and its original content, features, and functionality are and will remain the exclusive property of UVelsi and its licensors.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. Termination</h3>
                        <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
