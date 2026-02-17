"use client";

import { Hero } from "@/components/home/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { ModelCard } from "@/components/ui/ModelCard";
import { DesignerCard } from "@/components/ui/DesignerCard";
import { featuredProducts, topModels, trendingDesigners } from "@/lib/mockData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <SectionHeading
              title="Featured Collections"
              subtitle="Hand-picked items from our top designers."
              className="mb-0"
            />
            <Link href="/marketplace" className="group flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline mt-4 md:mt-0">
              View All Items <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
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
        </div>
      </section>

      {/* Top Models Section */}
      <section className="py-20 bg-gray-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <SectionHeading
              title="Top Models"
              subtitle="Discover the faces shaping the fashion world."
              className="mb-0"
            />
            <Link href="/models" className="group flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline mt-4 md:mt-0">
              Browse All Models <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {topModels.map((model) => (
              <div key={model.id} className="w-full">
                <ModelCard
                  id={model.id}
                  name={model.name}
                  location={model.location}
                  image={model.image}
                  rating={model.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trendy Designers Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Trending Designers"
            subtitle="Creative minds behind the latest styles."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {trendingDesigners.map((designer) => (
              <DesignerCard
                key={designer.id}
                id={designer.id}
                name={designer.name}
                specialty={designer.specialty}
                image={designer.image}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/designers"
              className="inline-block px-8 py-3 border border-gray-300 dark:border-neutral-700 rounded-full text-gray-700 dark:text-gray-300 font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              View More Designers
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-30 fixed-attachment" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Join the Revolution</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Whether you're a designer, model, or fashion lover, UVelsi is your platform to shine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup?role=brand" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
              Join as Brand
            </Link>
            <Link href="/signup?role=model" className="px-8 py-4 border border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">
              Join as Model
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
