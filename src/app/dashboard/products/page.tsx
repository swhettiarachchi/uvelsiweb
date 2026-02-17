"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Edit2, Trash2, MoreHorizontal, Eye } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Mock Seller Inventory
const initialInventory = [
    {
        id: "p1",
        name: "Velvet Evening Gown",
        price: 1250,
        stock: 5,
        status: "Active",
        views: 1240,
        sales: 12,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1908&auto=format&fit=crop",
    },
    {
        id: "p7",
        name: "Classic Trench",
        price: 890,
        stock: 2,
        status: "Low Stock",
        views: 850,
        sales: 8,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
    },
    {
        id: "p9",
        name: "Summer Floral Dress",
        price: 320,
        stock: 0,
        status: "Out of Stock",
        views: 2100,
        sales: 45,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1946&auto=format&fit=crop",
    }
];

export default function SellerProductsPage() {
    const [products, setProducts] = useState(initialInventory);

    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to delete this product?")) {
            setProducts(prev => prev.filter(p => p.id !== id));
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">My Products</h1>
                    <p className="text-gray-500 dark:text-gray-400">Manage your inventory and track performance.</p>
                </div>
                <Link
                    href="/dashboard/products/new"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    <Plus className="w-4 h-4" /> Add New Product
                </Link>
            </div>

            <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 dark:bg-neutral-800 border-b border-gray-200 dark:border-neutral-700">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-gray-900 dark:text-gray-200">Product</th>
                                <th className="px-6 py-4 font-semibold text-gray-900 dark:text-gray-200">Price</th>
                                <th className="px-6 py-4 font-semibold text-gray-900 dark:text-gray-200">Status</th>
                                <th className="px-6 py-4 font-semibold text-gray-900 dark:text-gray-200">Stock</th>
                                <th className="px-6 py-4 font-semibold text-gray-900 dark:text-gray-200">Performance</th>
                                <th className="px-6 py-4 font-semibold text-gray-900 dark:text-gray-200 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                            {products.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-neutral-800 flex-shrink-0">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900 dark:text-white">{product.name}</p>
                                                <p className="text-xs text-gray-500">ID: {product.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                        ${product.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                                                product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                                    'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                            }`}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                                        {product.stock} units
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4 text-xs text-gray-500">
                                            <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {product.views}</span>
                                            <span className="flex items-center gap-1">🛒 {product.sales} sold</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors" title="Edit">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button
                                                className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                                                title="Delete"
                                                onClick={() => handleDelete(product.id)}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {products.length === 0 && (
                        <div className="p-12 text-center text-gray-500">
                            You have no products listed. Start selling today!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
