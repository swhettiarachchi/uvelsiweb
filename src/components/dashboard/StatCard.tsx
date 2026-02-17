import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardStats } from "@/types";

interface StatCardProps {
    stat: DashboardStats;
}

export function StatCard({ stat }: StatCardProps) {
    return (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-gray-100 dark:border-neutral-800 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{stat.label}</h3>
            <div className="flex items-end justify-between">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>

                {stat.change !== undefined && (
                    <div className={cn(
                        "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
                        stat.trend === 'up' ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                            stat.trend === 'down' ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" :
                                "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    )}>
                        {stat.trend === 'up' && <ArrowUp className="w-3 h-3" />}
                        {stat.trend === 'down' && <ArrowDown className="w-3 h-3" />}
                        {stat.trend === 'neutral' && <Minus className="w-3 h-3" />}
                        <span>{stat.change}%</span>
                    </div>
                )}
            </div>
        </div>
    );
}
