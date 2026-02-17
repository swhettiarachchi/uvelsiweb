"use client";

import { useState } from "react";
import { User, Mail, MapPin, Camera, Save } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function SettingsPage() {
    const [isLoading, setIsLoading] = useState(false);

    // Mock initial state
    const [formData, setFormData] = useState({
        name: "Alex Designer",
        email: "alex@example.com",
        bio: "Fashion designer specializing in sustainable streetwear.",
        location: "Berlin, Germany",
        website: "https://alex-designs.com",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
        alert("Profile updated successfully!");
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Settings</h1>
                <p className="text-gray-500 dark:text-gray-400">Manage your profile and account preferences.</p>
            </div>

            <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-neutral-800">
                    <SectionHeading title="Public Profile" className="mb-0 !text-xl" />
                </div>

                <div className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Avatar Section */}
                        <div className="flex items-center gap-6">
                            <div className="relative w-24 h-24 rounded-full bg-gray-100 dark:bg-neutral-800 overflow-hidden flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-neutral-700 hover:border-indigo-500 transition-colors cursor-pointer group">
                                <User className="w-10 h-10 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                    <Camera className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white">Profile Picture</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">JPG, GIF or PNG. Max size of 800K</p>
                                <button type="button" className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">Upload new photo</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Display Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent dark:text-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent dark:text-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label htmlFor="bio" className="text-sm font-medium text-gray-700 dark:text-gray-300">Bio</label>
                                <textarea
                                    id="bio"
                                    name="bio"
                                    rows={4}
                                    value={formData.bio}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent dark:text-white resize-none"
                                    placeholder="Tell us about yourself..."
                                />
                                <p className="text-xs text-gray-500 text-right">0 / 250 characters</p>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="location" className="text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                    <input
                                        id="location"
                                        name="location"
                                        type="text"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent dark:text-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="website" className="text-sm font-medium text-gray-700 dark:text-gray-300">Website</label>
                                <div className="relative">
                                    <input
                                        id="website"
                                        name="website"
                                        type="url"
                                        value={formData.website}
                                        onChange={handleChange}
                                        placeholder="https://"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent dark:text-white"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="flex items-center gap-2 px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-80 transition-opacity disabled:opacity-50"
                            >
                                {isLoading ? "Saving..." : <><Save className="w-4 h-4" /> Save Changes</>}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
