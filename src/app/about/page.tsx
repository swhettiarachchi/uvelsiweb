"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AboutPage() {
    return (
        <div className="bg-white dark:bg-black min-h-screen pb-20">
            {/* Hero */}
            <div className="relative h-[60vh] bg-gray-900 flex items-center justify-center">
                <Image
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop"
                    alt="Team working"
                    fill
                    className="object-cover opacity-40"
                />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl font-bold mb-4">Reimagining Fashion</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">UVelsi is the bridge between creators, models, and fashion enthusiasts worldwide.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <SectionHeading title="Our Mission" />
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            We believe fashion is more than just clothing—it's a form of expression, art, and identity. UVelsi was founded to democratize the fashion industry, giving independent designers and models a platform to showcase their talent directly to a global audience.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            By integrating social networking with a robust marketplace, we create a community where trends are born, connections are made, and businesses thrive.
                        </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-neutral-900 h-96 rounded-2xl overflow-hidden relative">
                        <Image
                            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop"
                            alt="Fashion Show"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
