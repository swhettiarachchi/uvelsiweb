"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";

interface CartItemProps {
    id: string;
    name: string;
    designer: string;
    price: number;
    image: string;
    size: string;
    color: string;
    quantity: number;
    onUpdateQuantity: (newQuantity: number) => void;
    onRemove: () => void;
}

export function CartItem({
    id, name, designer, price, image, size, color, quantity, onUpdateQuantity, onRemove
}: CartItemProps) {
    return (
        <div className="flex gap-4 py-6 border-b border-gray-100 dark:border-neutral-800 last:border-0">
            <div className="relative w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-neutral-800">
                <Image src={image} alt={name} fill className="object-cover" />
            </div>

            <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">{designer}</p>
                        <Link href={`/product/${id}`} className="font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            {name}
                        </Link>
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-white">${price * quantity}</p>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <p>Size: <span className="text-gray-900 dark:text-white">{size}</span></p>
                    <p>Color: <span className="text-gray-900 dark:text-white">{color}</span></p>
                </div>

                <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center border border-gray-200 dark:border-neutral-700 rounded-lg">
                        <button
                            onClick={() => onUpdateQuantity(Math.max(1, quantity - 1))}
                            className="p-1 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                            disabled={quantity <= 1}
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                        <button
                            onClick={() => onUpdateQuantity(quantity + 1)}
                            className="p-1 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>

                    <button
                        onClick={onRemove}
                        className="text-gray-400 hover:text-red-500 transition-colors p-2"
                        aria-label="Remove item"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
