export type UserRole = 'buyer' | 'seller' | 'model' | 'designer' | 'advisor';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    avatar?: string;
    bio?: string;
    location?: string;
    isVerified?: boolean;
}

export interface DashboardStats {
    label: string;
    value: string | number;
    change?: number; // percentage change
    trend?: 'up' | 'down' | 'neutral';
}

export interface NavItem {
    title: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    variant?: 'default' | 'ghost';
}
