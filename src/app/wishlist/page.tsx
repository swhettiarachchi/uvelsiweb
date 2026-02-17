"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { featuredProducts } from "@/lib/mockData"; // Mocking wishlist as slice of features

export default function WishlistPage() {
    // Simulating a wishlist state with just a few items
    const wishlistItems = featuredProducts.slice(0, 3);

    return (
        <div className="bg-white dark:bg-black min-h-screen py-12">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading title="My Wishlist" subtitle={`${wishlistItems.length} items saved for later`} />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {wishlistItems.map((product) => (
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

                {wishlistItems.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        You haven't saved any items yet.
                    </div>
                )}
            </div>
        </div>
    );
}
