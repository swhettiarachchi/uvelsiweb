"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    ShoppingBag,
    Users,
    Settings,
    LogOut,
    Shirt,
    Camera,
    MessageSquare,
    BarChart3,
    Heart
} from "lucide-react";
import { UserRole } from "@/types";

interface SidebarProps {
    role: UserRole;
}

export function Sidebar({ role }: SidebarProps) {
    const pathname = usePathname();

    const commonLinks = [
        { title: "Overview", href: "/dashboard", icon: LayoutDashboard },
        { title: "Messages", href: "/dashboard/messages", icon: MessageSquare },
        { title: "Settings", href: "/dashboard/settings", icon: Settings },
    ];

    const roleSpecificLinks = {
        buyer: [
            { title: "My Orders", href: "/dashboard/orders", icon: ShoppingBag },
            { title: "Wishlist", href: "/dashboard/wishlist", icon: Heart },
        ],
        seller: [
            { title: "My Products", href: "/dashboard/products", icon: Shirt },
            { title: "Sales Analytics", href: "/dashboard/analytics", icon: BarChart3 },
        ],
        model: [
            { title: "Portfolio", href: "/dashboard/portfolio", icon: Camera },
            { title: "Bookings", href: "/dashboard/bookings", icon: Users },
        ],
        designer: [
            { title: "Collections", href: "/dashboard/collections", icon: Shirt },
            { title: "Consultations", href: "/dashboard/consultations", icon: Users },
        ],
        advisor: [
            { title: "Appointments", href: "/dashboard/appointments", icon: Users },
        ],
    };

    // Lucide Heart icon needs to be imported if used above, adding it now to imports
    // Correcting the dynamic access:
    const specificLinks = roleSpecificLinks[role] || [];

    const allLinks = [...commonLinks, ...specificLinks];

    return (
        <aside className="w-64 bg-white dark:bg-neutral-900 border-r border-gray-200 dark:border-neutral-800 hidden md:flex flex-col h-screen sticky top-0">
            <div className="p-6 border-b border-gray-200 dark:border-neutral-800">
                <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                    <span className="text-indigo-600">UVelsi</span>
                    <span className="text-xs font-normal px-2 py-1 bg-gray-100 dark:bg-neutral-800 rounded-full text-gray-500 capitalize">{role}</span>
                </Link>
            </div>

            <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                {allLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                                isActive
                                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400"
                                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-neutral-800"
                            )}
                        >
                            <Icon className="w-5 h-5" />
                            {link.title}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-gray-200 dark:border-neutral-800">
                <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg w-full transition-colors">
                    <LogOut className="w-5 h-5" />
                    Log Out
                </button>
            </div>
        </aside>
    );
}


