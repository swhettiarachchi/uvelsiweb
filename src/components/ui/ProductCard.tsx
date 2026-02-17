import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
    id: string;
    name: string;
    designer: string;
    price: number;
    image: string;
    category: string;
}

export function ProductCard({ id, name, designer, price, image, category }: ProductCardProps) {
    return (
        <motion.div
            className="group relative bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            whileHover={{ y: -5 }}
        >
            <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                    <button className="p-2 bg-white rounded-full text-gray-800 hover:text-red-500 shadow-lg transition-colors" aria-label="Add to Wishlist">
                        <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-black text-white rounded-full hover:bg-gray-800 shadow-lg transition-colors" aria-label="Quick Add">
                        <ShoppingBag className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">{designer}</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">${price}</p>
                </div>
                <Link href={`/product/${id}`}>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">{name}</h3>
                </Link>
                <p className="text-xs text-gray-400">{category}</p>
            </div>
        </motion.div>
    );
}
