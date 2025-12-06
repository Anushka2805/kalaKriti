"use client";

import { useState } from "react";
import { RiMagicFill } from "react-icons/ri";
import { FiMic } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function MarketAssistant() {

    const [activeTab, setActiveTab] = useState<"desc" | "price" | "video">("desc");

    return (
        <main className="p-10">

            {/* PAGE TITLE */}
            <h1 className="text-3xl font-bold text-gray-900">
                AI Market Assistant
            </h1>
            <p className="text-gray-600 mt-2 max-w-2xl">
                Your creative partner for listing products and marketing.
                Use a quick-start wizard or our individual tools below.
            </p>


            {/* TOP WIZARD BLOCKS */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">

                {/* Wizard 1 */}
                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                    <div className="flex gap-3 items-start">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-500 text-xl">
                            <RiMagicFill />
                        </div>
                        <div>
                            <h2 className="font-semibold text-gray-800 text-lg">
                                AI Product Wizard
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">
                                Generate a full product listing from a single photo.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Wizard 2 */}
                <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-6 shadow-sm">
                    <div className="flex gap-3 items-start">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-100 text-yellow-600 text-xl">
                            <FiMic />
                        </div>
                        <div>
                            <h2 className="font-semibold text-gray-800 text-lg">
                                AI Recording & Analysis
                            </h2>
                            <p className="text-sm text-gray-600 mt-1">
                                Describe your product with your voice to generate a full listing.
                            </p>
                        </div>
                    </div>
                </div>

            </div>


            {/* TOOL PANEL */}
            <div className="grid md:grid-cols-2 gap-8 mt-10">

                {/* LEFT SIDE → Tabs + Tool Forms */}
                <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">

                    {/* TABS */}
                    <div className="flex gap-10 border-b pb-3">

                        <button
                            className={`pb-2 font-medium ${activeTab === "desc"
                                ? "text-emerald-600 border-b-2 border-emerald-600"
                                : "text-gray-500"
                                }`}
                            onClick={() => setActiveTab("desc")}
                        >
                            Description Generator
                        </button>

                        <button
                            className={`pb-2 font-medium ${activeTab === "price"
                                ? "text-emerald-600 border-b-2 border-emerald-600"
                                : "text-gray-500"
                                }`}
                            onClick={() => setActiveTab("price")}
                        >
                            Price Advisor
                        </button>

                        <button
                            className={`pb-2 font-medium ${activeTab === "video"
                                ? "text-emerald-600 border-b-2 border-emerald-600"
                                : "text-gray-500"
                                }`}
                            onClick={() => setActiveTab("video")}
                        >
                            Video Ad Creator
                        </button>
                    </div>


                    {/* TAB CONTENT */}
                    <div className="mt-6">

                        {/* DESCRIPTION GENERATOR */}
                        {activeTab === "desc" && (
                            <>
                                <p className="text-gray-700 font-medium">
                                    Describe your product:
                                </p>

                                <div className="mt-3 relative">
                                    <textarea
                                        rows={4}
                                        placeholder="e.g., 'blue pottery vase with floral design'"
                                        className="w-full border border-gray-200 rounded-xl p-4 text-gray-700 focus:ring-2 focus:ring-emerald-500"
                                    />
                                    <FiMic className="absolute bottom-3 right-4 text-gray-500 text-xl cursor-pointer" />
                                </div>

                                <button className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-lg">
                                    Generate Description
                                </button>
                            </>
                        )}


                        {/* PRICE ADVISOR */}
                        {activeTab === "price" && (
                            <>
                                <p className="text-gray-700 font-medium">
                                    Describe your product to get a data-driven price suggestion from the AI based on real-time web search.
                                </p>

                                <div className="mt-3 relative">
                                    <textarea
                                        rows={4}
                                        placeholder="e.g., 'Hand-painted silk scarf, 2 meters long, with peacock design...'"
                                        className="w-full border border-gray-200 rounded-xl p-4 text-gray-700 focus:ring-2 focus:ring-emerald-500"
                                    />
                                    <FiMic className="absolute bottom-3 right-4 text-gray-500 text-xl cursor-pointer" />
                                </div>

                                <button className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-lg">
                                    Get Price Idea
                                </button>
                            </>
                        )}


                        {/* VIDEO AD CREATOR */}
                        {activeTab === "video" && (
                            <>
                                <p className="text-gray-700 font-medium">
                                    Describe your brand’s story or product, and the AI will generate a short promotional video.
                                </p>

                                <div className="mt-3 relative">
                                    <textarea
                                        rows={4}
                                        placeholder="e.g., 'A beautiful handwoven scarf, showing close-ups of the fabric and someone wearing it on a sunny day...'"
                                        className="w-full border border-gray-200 rounded-xl p-4 text-gray-700 focus:ring-2 focus:ring-emerald-500"
                                    />
                                    <FiMic className="absolute bottom-3 right-4 text-gray-500 text-xl cursor-pointer" />
                                </div>

                                <button className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-lg">
                                    Generate Video
                                </button>
                            </>
                        )}

                    </div>

                </div>
                {/* RIGHT SIDE → Social Media Toolkit */}
                <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">

                    <h3 className="font-semibold text-gray-800 mb-6 text-lg">
                        Social Media Toolkit
                    </h3>

                    {/* UPLOAD PHOTO */}
                    <div>
                        <label className="font-medium text-gray-700">
                            1. Upload a Photo (Optional)
                        </label>

                        <div className="w-full mt-3 border border-dashed border-gray-300 rounded-xl h-48 flex items-center justify-center text-gray-500 cursor-pointer">
                            Click to upload image
                        </div>
                    </div>


                    {/* PLATFORM SELECTION */}
                    <div className="mt-8">
                        <label className="font-medium text-gray-700">
                            2. Choose Platform & Describe Post (Optional)
                        </label>

                        <div className="mt-3 flex gap-3">

                            <button className="flex-1 border px-3 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 text-black">
                                <FaInstagram className="text-pink-500 text-lg" />
                                Instagram
                            </button>

                            <button className="flex-1 border px-3 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 text-black">
                                <FaFacebookF className="text-blue-600 text-lg" />
                                Facebook
                            </button>

                            <button className="flex-1 border px-3 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 text-black">
                                <FaWhatsapp className="text-green-600 text-lg" />
                                WhatsApp
                            </button>

                        </div>

                        <textarea
                            rows={3}
                            placeholder="e.g., 'A post about my new collection...'"
                            className="mt-3 w-full border border-gray-200 rounded-xl p-4 text-gray-700 focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>


                    <button className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-lg w-full">
                        Generate Post
                    </button>

                </div>
            </div>

        </main>
    );
}
