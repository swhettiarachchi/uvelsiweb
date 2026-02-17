"use strict";
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/lib/mockData";

export function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for text readability */}
                    <Image
                        src={heroSlides[currentSlide].image}
                        alt={heroSlides[currentSlide].title}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            {heroSlides[currentSlide].title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
                            {heroSlides[currentSlide].subtitle}
                        </p>
                        <Link
                            href={heroSlides[currentSlide].link}
                            className="inline-block px-8 py-4 bg-white text-black font-semibold text-lg rounded-full hover:bg-gray-200 transition-colors duration-300"
                        >
                            {heroSlides[currentSlide].cta}
                        </Link>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-4">
                <button
                    onClick={prevSlide}
                    className="p-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                                }`}
                        />
                    ))}
                </div>
                <button
                    onClick={nextSlide}
                    className="p-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </section>
    );
}
