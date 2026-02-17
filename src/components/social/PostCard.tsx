"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle, Share2, MoreHorizontal, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

interface PostProps {
    id: string;
    user: {
        name: string;
        avatar: string;
        handle: string;
    };
    image: string;
    caption: string;
    likes: number;
    comments: number;
    timeAgo: string;
}

export function PostCard({ id, user, image, caption, likes, comments, timeAgo }: PostProps) {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likes);

    const handleLike = () => {
        if (isLiked) {
            setLikeCount(prev => prev - 1);
        } else {
            setLikeCount(prev => prev + 1);
        }
        setIsLiked(!isLiked);
    };

    return (
        <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-100 dark:border-neutral-800 overflow-hidden mb-6">
            {/* Header */}
            <div className="flex items-center justify-between p-4">
                <Link href={`/profile/${user.handle}`} className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 dark:bg-neutral-800">
                        <Image src={user.avatar} alt={user.name} fill className="object-cover" />
                    </div>
                    <div>
                        <p className="font-semibold text-sm text-gray-900 dark:text-white">{user.name}</p>
                        <p className="text-xs text-gray-500">@{user.handle} • {timeAgo}</p>
                    </div>
                </Link>
                <button className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
            </div>

            {/* Image */}
            <div className="relative aspect-square w-full bg-gray-100 dark:bg-neutral-800">
                <Image src={image} alt="Post content" fill className="object-cover" />
            </div>

            {/* Actions */}
            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleLike}
                            className={cn("transition-colors", isLiked ? "text-red-500" : "text-gray-900 dark:text-white hover:text-gray-600")}
                        >
                            <Heart className={cn("w-6 h-6", isLiked && "fill-current")} />
                        </button>
                        <button className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                            <MessageCircle className="w-6 h-6" />
                        </button>
                        <button className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                            <Share2 className="w-6 h-6" />
                        </button>
                    </div>
                    <button className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                        <Bookmark className="w-6 h-6" />
                    </button>
                </div>

                <p className="font-semibold text-sm mb-2">{likeCount.toLocaleString()} likes</p>

                <div className="space-y-1">
                    <p className="text-sm text-gray-900 dark:text-white">
                        <span className="font-semibold mr-2">{user.handle}</span>
                        {caption}
                    </p>
                    {comments > 0 && (
                        <button className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
                            View all {comments} comments
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
