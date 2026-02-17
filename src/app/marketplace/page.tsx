"use client";

import { useState } from "react";
import { FilterSidebar } from "@/components/marketplace/FilterSidebar";
import { ProductCard } from "@/components/ui/ProductCard";
import { featuredProducts } from "@/lib/mockData";
import { Filter, SlidersHorizontal } from "lucide-react";
// Assuming Shadcn UI sheet or similar, but for now I'll create a simple mobile drawer mock

// Expanding mock data for grid visualization
const allProducts = [
    ...featuredProducts,
    {
        id: "p5",
        name: "Cashmere Sweater",
        designer: "Urban Flow",
        price: 290,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
        category: "Women"
    },
    {
        id: "p6",
        name: "Designer Sneakers",
        designer: "StreetKing",
        price: 450,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop",
        category: "Men"
    },
    {
        id: "p7",
        name: "Classic Trench",
        designer: "Elena V",
        price: 890,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
        category: "Women"
    },
    {
        id: "p8",
        name: "Stylist Sunglasses",
        designer: "Aura",
        price: 220,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop",
        category: "Accessories"
    }
];

export default function MarketplacePage() {
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    return (
        <div className="bg-gray-50 dark:bg-black min-h-screen pb-20">
            {/* Header Banner */}
            <div className="bg-indigo-900 text-white py-12 mb-8">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Waitlist Exclusive: Marketplace</h1>
                    <p className="text-indigo-200 max-w-2xl mx-auto">
                        Explore curated collections from the world's top verified designers and models.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Desktop Sidebar */}
                    <aside className="hidden md:block w-64 flex-shrink-0">
                        <FilterSidebar />
                    </aside>

                    {/* Mobile Filter Trigger */}
                    <div className="md:hidden flex justify-between items-center mb-6">
                        <button
                            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg shadow-sm font-medium"
                        >
                            <SlidersHorizontal className="w-4 h-4" />
                            Filters
                        </button>
                        <select className="px-4 py-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg shadow-sm text-sm">
                            <option>Newest</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>

                    {/* Simple Mobile Filter Drawer Overlay (Custom implementation without library dependency) */}
                    {isMobileFilterOpen && (
                        <div className="fixed inset-0 z-50 flex md:hidden">
                            <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileFilterOpen(false)} />
                            <div className="relative w-4/5 max-w-xs bg-white dark:bg-neutral-900 h-full shadow-xl p-6 overflow-y-auto transform transition-transform duration-300">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold">Filters</h2>
                                    <button onClick={() => setIsMobileFilterOpen(false)} className="p-2">✕</button>
                                </div>
                                <FilterSidebar />
                                <div className="mt-8 pt-4 border-t border-gray-100 dark:border-neutral-800">
                                    <button
                                        onClick={() => setIsMobileFilterOpen(false)}
                                        className="w-full py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg font-bold"
                                    >
                                        Apply Filters
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-6 hidden md:flex">
                            <p className="text-gray-500 text-sm">Showing {allProducts.length} results</p>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500">Sort by:</span>
                                <select className="border-none bg-transparent font-medium cursor-pointer focus:ring-0 text-sm">
                                    <option>Recommended</option>
                                    <option>Newest</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {allProducts.map((product) => (
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

                        {/* Pagination Placeholder */}
                        <div className="mt-12 flex justify-center">
                            <div className="flex gap-2">
                                <button className="px-4 py-2 border border-gray-300 dark:border-neutral-800 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800 disabled:opacity-50" disabled>Previous</button>
                                <button className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md">1</button>
                                <button className="px-4 py-2 border border-gray-300 dark:border-neutral-800 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800">2</button>
                                <button className="px-4 py-2 border border-gray-300 dark:border-neutral-800 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800">3</button>
                                <button className="px-4 py-2 border border-gray-300 dark:border-neutral-800 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
