"use client";

import { StatCard } from "@/components/dashboard/StatCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DashboardStats } from "@/types";

// Mock Data for Dashboard
const mockStats: DashboardStats[] = [
    { label: "Total Revenue", value: "$12,450", change: 15, trend: "up" },
    { label: "Active Orders", value: 8, change: 2, trend: "down" },
    { label: "Profile Views", value: "1.2k", change: 8, trend: "up" },
    { label: "New Followers", value: 45, change: 0, trend: "neutral" },
];

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Dashboard</h1>
                <p className="text-gray-500 dark:text-gray-400">Welcome back! Here's an overview of your activity.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {mockStats.map((stat, index) => (
                    <StatCard key={index} stat={stat} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-gray-100 dark:border-neutral-800 shadow-sm min-h-[300px]">
                    <SectionHeading title="Recent Activity" className="mb-6 !text-xl" />
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                            <div>
                                <p className="font-medium">New Order Received</p>
                                <p className="text-sm text-gray-500">Order #12345 from Sarah J.</p>
                            </div>
                            <span className="text-xs text-gray-400">2h ago</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-gray-100 dark:border-neutral-800 shadow-sm min-h-[300px]">
                    <SectionHeading title="Performance" className="mb-6 !text-xl" />
                    <div className="flex items-center justify-center h-[200px] text-gray-400 bg-gray-50 dark:bg-neutral-800 rounded-lg border-dashed border-2 border-gray-200 dark:border-neutral-700">
                        Chart Placeholder
                    </div>
                </div>
            </div>
        </div>
    );
}
