"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Star, Heart, Share2, ShoppingBag, Truck, ShieldCheck, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { featuredProducts } from "@/lib/mockData";

// Mock detailed product data (in a real app, fetch based on ID)
const product = {
    id: "p1",
    name: "Velvet Evening Gown",
    price: 1250,
    designer: "Elena V",
    rating: 4.8,
    reviews: 124,
    description: "A stunning floor-length evening gown crafted from premium Italian velvet. Features a daring slit and a corset-style bodice for a flattering fit. Perfect for galas and red carpet events.",
    images: [
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1908&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1966&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1887&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1887&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
        { name: "Emerald", value: "#046307" },
        { name: "Midnight", value: "#191970" },
        { name: "Burgundy", value: "#800020" }
    ],
    features: [
        "Premium Italian Velvet",
        "Silk lining",
        "Hidden back zipper",
        "Dry clean only"
    ]
};

export default function ProductPage() {
    const params = useParams(); // In real app use this to fetch data
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState(product.colors[0].name);

    return (
        <div className="bg-white dark:bg-black min-h-screen pb-20">
            <div className="container mx-auto px-4 md:px-6 py-8">

                {/* Breadcrumb */}
                <nav className="text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/marketplace" className="hover:text-black dark:hover:text-white transition-colors">Marketplace</Link>
                    <span className="mx-2">/</span>
                    <Link href={`/marketplace?category=Women`} className="hover:text-black dark:hover:text-white transition-colors">Women</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 dark:text-white">{product.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-[3/4] relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-neutral-900">
                            <Image
                                src={product.images[selectedImage]}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                            <button className="absolute top-4 right-4 p-3 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full text-gray-900 dark:text-white hover:bg-white dark:hover:bg-black transition-colors">
                                <Heart className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={cn(
                                        "aspect-square relative rounded-lg overflow-hidden border-2 transition-all",
                                        selectedImage === idx ? "border-black dark:border-white" : "border-transparent opacity-70 hover:opacity-100"
                                    )}
                                >
                                    <Image src={img} alt={`View ${idx + 1}`} fill className="object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-8">
                        <div>
                            <Link href="/designers/elena-v" className="text-lg font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                                {product.designer}
                            </Link>
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">{product.name}</h1>
                            <div className="flex items-center gap-4 mb-6">
                                <p className="text-3xl font-semibold">${product.price}</p>
                                <div className="w-px h-6 bg-gray-300 dark:bg-neutral-700" />
                                <div className="flex items-center gap-1">
                                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    <span className="font-medium">{product.rating}</span>
                                    <span className="text-gray-500 underline ml-1 cursor-pointer hover:text-gray-900 dark:hover:text-white">({product.reviews} reviews)</span>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        <div className="space-y-6 pt-6 border-t border-gray-100 dark:border-neutral-800">
                            {/* Color Selector */}
                            <div>
                                <h3 className="text-sm font-medium mb-3 text-gray-900 dark:text-white">Color: <span className="text-gray-500 font-normal">{selectedColor}</span></h3>
                                <div className="flex gap-3">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => setSelectedColor(color.name)}
                                            className={cn(
                                                "w-10 h-10 rounded-full border-2 focus:outline-none transition-all",
                                                selectedColor === color.name ? "border-black dark:border-white scale-110" : "border-transparent hover:scale-105"
                                            )}
                                            style={{ backgroundColor: color.value }}
                                            aria-label={color.name}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Size Selector */}
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Size</h3>
                                    <button className="text-sm text-gray-500 underline hover:text-black dark:hover:text-white">Size Guide</button>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={cn(
                                                "px-6 py-3 rounded-lg border font-medium transition-all",
                                                selectedSize === size
                                                    ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                                                    : "border-gray-200 dark:border-neutral-700 text-gray-900 dark:text-white hover:border-gray-400 dark:hover:border-neutral-500"
                                            )}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <button className="flex-1 bg-black text-white dark:bg-white dark:text-black text-lg font-bold py-4 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                                <ShoppingBag className="w-5 h-5" />
                                Add to Cart
                            </button>
                            <button className="px-6 py-4 border border-gray-300 dark:border-neutral-700 rounded-full hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors flex items-center justify-center gap-2">
                                <Share2 className="w-5 h-5" />
                                <span className="hidden sm:inline">Share</span>
                            </button>
                        </div>

                        {/* Benefits */}
                        <div className="grid grid-cols-3 gap-4 pt-8 text-center text-sm text-gray-500">
                            <div className="flex flex-col items-center gap-2">
                                <Truck className="w-6 h-6 text-gray-400" />
                                <p>Free Shipping</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <ShieldCheck className="w-6 h-6 text-gray-400" />
                                <p>Authenticity Verified</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <RefreshCw className="w-6 h-6 text-gray-400" />
                                <p>30-Day Returns</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <div className="mt-24">
                    <SectionHeading title="You May Also Like" centered className="mb-12" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map((item) => (
                            <ProductCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                designer={item.designer}
                                price={item.price}
                                image={item.image}
                                category={item.category}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
