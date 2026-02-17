"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { UserRole } from "@/types";

// In a real app, this would come from a context or auth hook
const MOCK_USER_ROLE: UserRole = "designer";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-black">
            <Sidebar role={MOCK_USER_ROLE} />
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
