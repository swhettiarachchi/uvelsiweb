import Image from "next/image";
import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface ModelCardProps {
    id: string;
    name: string;
    location: string;
    image: string;
    rating: number;
}

export function ModelCard({ id, name, location, image, rating }: ModelCardProps) {
    return (
        <motion.div
            className="relative rounded-xl overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className="aspect-[3/4] relative">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-end">
                    <div>
                        <Link href={`/models/${id}`}>
                            <h3 className="text-xl font-bold mb-1 group-hover:underline decoration-white/50 underline-offset-4">{name}</h3>
                        </Link>
                        <div className="flex items-center gap-1 text-sm text-gray-300 mb-2">
                            <MapPin className="w-3 h-3" />
                            <span>{location}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium">{rating}</span>
                    </div>
                </div>
                <button className="w-full mt-3 py-2 bg-white text-black text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    View Profile
                </button>
            </div>
        </motion.div>
    );
}
