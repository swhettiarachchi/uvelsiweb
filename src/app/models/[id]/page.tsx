"use client";

import Image from "next/image";
import { ProfileHeader } from "@/components/social/ProfileHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ModelProfilePage() {
    // Mock Data
    const model = {
        name: "Sophia L",
        role: "Professional Model",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        banner: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop",
        location: "Paris, France",
        website: "https://portfolio.sophial.com",
        bio: "International runway and commercial model. Represented by Elite Models. Passionate about sustainable fashion and artistic collaboration. Available for shoots worldwide.",
        stats: [
            { label: "Followers", value: "102k" },
            { label: "Rating", value: "5.0" },
            { label: "Bookings", value: "150+" }
        ],
        isVerified: true
    };

    const galleryImages = [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=1887&auto=format&fit=crop"
    ];

    return (
        <div className="bg-gray-50 dark:bg-black min-h-screen pb-20">
            <div className="container mx-auto px-4 md:px-6 pt-4">
                <ProfileHeader {...model} />

                <div className="mt-12">
                    <SectionHeading title="Portfolio" />
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {galleryImages.map((img, idx) => (
                            <div key={idx} className="break-inside-avoid relative group rounded-xl overflow-hidden">
                                <Image
                                    src={img}
                                    alt={`Portfolio ${idx}`}
                                    width={500}
                                    height={700}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button className="px-6 py-2 bg-white text-black font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                        View
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 bg-white dark:bg-neutral-900 p-8 rounded-xl border border-gray-100 dark:border-neutral-800 shadow-sm text-center">
                    <h3 className="text-2xl font-bold mb-4">Interested in working with {model.name}?</h3>
                    <p className="text-gray-500 mb-8 max-w-lg mx-auto">Check availability and book for photo shoots, runway shows, or brand collaborations.</p>
                    <button className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold hover:opacity-90 transition-opacity">
                        Check Availability
                    </button>
                </div>
            </div>
        </div>
    );
}
