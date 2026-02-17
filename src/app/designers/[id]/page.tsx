"use client";

import { ProfileHeader } from "@/components/social/ProfileHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProducts } from "@/lib/mockData";

export default function DesignerProfilePage() {
    // Mock Data
    const designer = {
        name: "Elena V",
        role: "Fashion Designer",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
        banner: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
        location: "Milan, Italy",
        website: "https://elenav.com",
        bio: "Award-winning designer focusing on sustainable luxury and timeless elegance. Featured in Vogue, Elle, and Harper's Bazaar. Creating pieces that empower women to feel confident and beautiful.",
        stats: [
            { label: "Followers", value: "45.2k" },
            { label: "Sales", value: "1.2k" },
            { label: "Rating", value: "4.9" }
        ],
        isVerified: true
    };

    const designerProducts = featuredProducts.slice(0, 4);

    return (
        <div className="bg-gray-50 dark:bg-black min-h-screen pb-20">
            <div className="container mx-auto px-4 md:px-6 pt-4">
                <ProfileHeader {...designer} />

                <div className="mt-12">
                    <SectionHeading title="Latest Collection" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {designerProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                designer={product.designer}
                                price={product.price}
                                image={product.image}
                                category={product.category}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-16">
                    <SectionHeading title="Services" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-gray-100 dark:border-neutral-800 text-center hover:border-indigo-500 transition-colors cursor-pointer group">
                            <h3 className="font-bold text-xl mb-2 group-hover:text-indigo-600">Custom Design</h3>
                            <p className="text-gray-500 mb-4">Get a unique piece tailored specifically for you.</p>
                            <p className="font-semibold">Starting at $2,000</p>
                        </div>
                        <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-gray-100 dark:border-neutral-800 text-center hover:border-indigo-500 transition-colors cursor-pointer group">
                            <h3 className="font-bold text-xl mb-2 group-hover:text-indigo-600">Consultation</h3>
                            <p className="text-gray-500 mb-4">1-on-1 fashion advice and styling tips.</p>
                            <p className="font-semibold">$150 / hour</p>
                        </div>
                        <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-gray-100 dark:border-neutral-800 text-center hover:border-indigo-500 transition-colors cursor-pointer group">
                            <h3 className="font-bold text-xl mb-2 group-hover:text-indigo-600">Wardrobe Audit</h3>
                            <p className="text-gray-500 mb-4">Complete review and refresh of your closet.</p>
                            <p className="font-semibold">$500</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
