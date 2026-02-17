"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface FilterSectionProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}

function FilterSection({ title, isOpen, onToggle, children }: FilterSectionProps) {
    return (
        <div className="border-b border-gray-200 dark:border-neutral-800 py-4">
            <button
                onClick={onToggle}
                className="flex items-center justify-between w-full text-left font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
                <span>{title}</span>
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4 space-y-2">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FilterSidebar({ className }: { className?: string }) {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        category: true,
        price: true,
        designer: false,
    });

    const toggleSection = (section: string) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div className={cn("w-full md:w-64 flex-shrink-0 space-y-6", className)}>
            <div className="flex items-center justify-between md:hidden mb-4">
                <h2 className="text-lg font-bold">Filters</h2>
                {/* Mobile close button would go here if in a modal */}
            </div>

            <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-gray-200 dark:border-neutral-800 shadow-sm">
                <FilterSection
                    title="Category"
                    isOpen={openSections.category}
                    onToggle={() => toggleSection('category')}
                >
                    {['Women', 'Men', 'Accessories', 'New Arrivals', 'Sale'].map((cat) => (
                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{cat}</span>
                        </label>
                    ))}
                </FilterSection>

                <FilterSection
                    title="Price Range"
                    isOpen={openSections.price}
                    onToggle={() => toggleSection('price')}
                >
                    <div className="flex items-center gap-4">
                        <input
                            type="number"
                            placeholder="Min"
                            className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-neutral-700 rounded-md bg-transparent focus:ring-1 focus:ring-indigo-500"
                        />
                        <span className="text-gray-400">-</span>
                        <input
                            type="number"
                            placeholder="Max"
                            className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-neutral-700 rounded-md bg-transparent focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>
                </FilterSection>

                <FilterSection
                    title="Designers"
                    isOpen={openSections.designer}
                    onToggle={() => toggleSection('designer')}
                >
                    {['Elena V', 'StreetKing', 'Aura', 'LuxeCraft', 'House of Kai'].map((designer) => (
                        <label key={designer} className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{designer}</span>
                        </label>
                    ))}
                </FilterSection>
            </div>
        </div>
    );
}
