"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";

export default function PrivacyPage() {
    return (
        <div className="bg-white dark:bg-black min-h-screen py-20">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <SectionHeading title="Privacy Policy" subtitle="Last Updated: February 2026" />

                <div className="prose dark:prose-invert max-w-none space-y-8 text-gray-600 dark:text-gray-300">
                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. Information We Collect</h3>
                        <p>We collect information you provide directly to us, such as when you create an account, update your profile, make a purchase, or communicate with us. This info may include name, email, phone number, and payment information.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. How We Use Your Information</h3>
                        <p>We use the information we collect to provide, maintain, and improve our services, including to process transactions, send you related information, and respond to your comments and questions.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. Sharing of Information</h3>
                        <p>We may share personal information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. Data Security</h3>
                        <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
