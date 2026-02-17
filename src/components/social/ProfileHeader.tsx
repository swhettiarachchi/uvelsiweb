"use client";

import Image from "next/image";
import { CheckCircle2, MapPin, Link as LinkIcon, Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ProfileHeaderProps {
    name: string;
    role: string;
    avatar: string;
    banner: string;
    location: string;
    website?: string;
    bio: string;
    stats: { label: string; value: string }[];
    isVerified?: boolean;
}

export function ProfileHeader({ name, role, avatar, banner, location, website, bio, stats, isVerified }: ProfileHeaderProps) {
    return (
        <div className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden border border-gray-100 dark:border-neutral-800 shadow-sm mb-8">
            {/* Banner */}
            <div className="h-48 md:h-64 relative bg-gray-200 dark:bg-neutral-800">
                <Image src={banner} alt="Cover" fill className="object-cover" />
            </div>

            <div className="px-6 md:px-10 pb-8">
                <div className="flex flex-col md:flex-row items-start md:items-end -mt-12 md:-mt-16 mb-6 gap-6">
                    {/* Avatar */}
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-neutral-900 overflow-hidden bg-gray-100">
                        <Image src={avatar} alt={name} fill className="object-cover" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 pt-2 md:pt-0">
                        <div className="flex items-center gap-2 mb-1">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{name}</h1>
                            {isVerified && <CheckCircle2 className="w-6 h-6 text-blue-500 fill-blue-500 text-white" />}
                        </div>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">{role}</p>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {location}
                            </div>
                            {website && (
                                <div className="flex items-center gap-1">
                                    <LinkIcon className="w-4 h-4" />
                                    <a href={website} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-indigo-600">{website.replace('https://', '')}</a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
                        <button className="flex-1 md:flex-none px-6 py-2 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors">
                            Follow
                        </button>
                        <button className="flex-1 md:flex-none px-6 py-2 border border-gray-300 dark:border-neutral-700 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors">
                            Message
                        </button>
                    </div>
                </div>

                {/* Bio & Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="font-semibold text-lg mb-2">About</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">{bio}</p>
                    </div>
                    <div className="flex justify-between md:justify-end gap-8 text-center bg-gray-50 dark:bg-neutral-800/50 p-4 rounded-xl">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
