import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface DesignerCardProps {
    id: string;
    name: string;
    specialty: string;
    image: string;
}

export function DesignerCard({ id, name, specialty, image }: DesignerCardProps) {
    return (
        <motion.div
            className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 transition-colors cursor-pointer group"
            whileHover={{ x: 5 }}
        >
            <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-100 dark:border-neutral-800">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{specialty}</p>
            </div>

            <div className="p-2 rounded-full bg-gray-50 dark:bg-neutral-800 text-gray-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 dark:group-hover:bg-indigo-900/30 dark:group-hover:text-indigo-400 transition-all">
                <ArrowRight className="w-5 h-5" />
            </div>
        </motion.div>
    );
}
