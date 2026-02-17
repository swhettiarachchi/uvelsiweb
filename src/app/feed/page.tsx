"use client";

import { PostCard } from "@/components/social/PostCard";
import { Plus } from "lucide-react";
import Image from "next/image";

// Mock Data
const stories = [
    { id: 1, user: "You", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop", isUser: true },
    { id: 2, user: "Elena V", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop", isUser: false },
    { id: 3, user: "StreetKing", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop", isUser: false },
    { id: 4, user: "LuxeCraft", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop", isUser: false },
];

const posts = [
    {
        id: "post1",
        user: {
            name: "Elena V",
            handle: "elenav_official",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
        },
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop",
        caption: "Sneak peek of our upcoming Summer Collection! Can't wait to share more. ✨ #SummerVibes #NewCollection",
        likes: 1245,
        comments: 89,
        timeAgo: "2h"
    },
    {
        id: "post2",
        user: {
            name: "Marcus J",
            handle: "marcus_model",
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop"
        },
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
        caption: "Backstage at Paris Fashion Week. The energy is unreal! 📸",
        likes: 3502,
        comments: 210,
        timeAgo: "5h"
    }
];

export default function FeedPage() {
    return (
        <div className="bg-gray-50 dark:bg-black min-h-screen py-8">
            <div className="container mx-auto px-4 max-w-2xl">

                {/* Stories */}
                <div className="flex gap-4 overflow-x-auto pb-6 mb-2 no-scrollbar">
                    {stories.map((story) => (
                        <div key={story.id} className="flex flex-col items-center flex-shrink-0 space-y-1">
                            <div className={`relative w-16 h-16 rounded-full p-[2px] ${story.isUser ? '' : 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500'}`}>
                                <div className="relative w-full h-full rounded-full border-2 border-white dark:border-black overflow-hidden bg-gray-200">
                                    <Image src={story.image} alt={story.user} fill className="object-cover" />
                                    {story.isUser && (
                                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                            <Plus className="w-6 h-6 text-white" />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{story.user}</span>
                        </div>
                    ))}
                </div>

                {/* Feed */}
                <div className="space-y-6">
                    {posts.map((post) => (
                        <PostCard key={post.id} {...post} />
                    ))}
                </div>

            </div>
        </div>
    );
}
