"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { CartItem } from "@/components/marketplace/CartItem";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Mock Cart Data
const initialCart = [
    {
        id: "p1",
        name: "Velvet Evening Gown",
        designer: "Elena V",
        price: 1250,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1908&auto=format&fit=crop",
        size: "M",
        color: "Emerald",
        quantity: 1,
    },
    {
        id: "p2",
        name: "Designer Sneakers",
        designer: "StreetKing",
        price: 450,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop",
        size: "42",
        color: "White/Gold",
        quantity: 1,
    }
];

export default function CartPage() {
    const [cartItems, setCartItems] = useState(initialCart);

    const updateQuantity = (id: string, newQty: number) => {
        setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
    };

    const removeItem = (id: string) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = 0; // Free shipping
    const total = subtotal + shipping;

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Your bag is empty</h2>
                <p className="text-gray-500 mb-8">Looks like you haven't found anything yet.</p>
                <Link
                    href="/marketplace"
                    className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium"
                >
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-black min-h-screen py-12">
            <div className="container mx-auto px-4 md:px-6">
                <h1 className="text-3xl font-bold mb-8">Shopping Bag ({cartItems.length})</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart Items List */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-100 dark:border-neutral-800 p-6 md:p-8">
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    {...item}
                                    onUpdateQuantity={(qty) => updateQuantity(item.id, qty)}
                                    onRemove={() => removeItem(item.id)}
                                />
                            ))}
                        </div>
                        <div className="mt-6">
                            <Link href="/marketplace" className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                                <ArrowLeft className="w-4 h-4" /> Continue Shopping
                            </Link>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 dark:bg-neutral-900 rounded-xl p-6 sticky top-24 border border-gray-100 dark:border-neutral-800">
                            <h2 className="text-lg font-bold mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6 pb-6 border-b border-gray-200 dark:border-neutral-800">
                                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                    <span>Subtotal</span>
                                    <span>${subtotal}</span>
                                </div>
                                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-medium">Free</span>
                                </div>
                                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                    <span>Estimated Tax</span>
                                    <span>-</span> {/* Calculated at checkout */}
                                </div>
                            </div>

                            <div className="flex justify-between text-xl font-bold mb-8">
                                <span>Total</span>
                                <span>${total}</span>
                            </div>

                            <button className="w-full py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mb-4">
                                Proceed to Checkout <ArrowRight className="w-5 h-5" />
                            </button>

                            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                                <ShieldCheck className="w-4 h-4" />
                                <span>Secure Checkout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
