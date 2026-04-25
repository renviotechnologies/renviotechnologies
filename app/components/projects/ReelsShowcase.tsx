'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Eye, Heart, Instagram, Clock, TrendingUp, Sparkles, X } from 'lucide-react';

const reels = [
    {
        id: 1,
        title: 'Delhi059 Behind the Scenes',
        brand: 'Delhi059',
        thumbnail: 'https://www.instagram.com/p/DQzEyrTDAXW/media/?size=l',
        instagramUrl: 'https://www.instagram.com/p/DQzEyrTDAXW/',
        views: '125K',
        likes: '8.2K',
        duration: '0:45',
        description: 'A day in the life at Canada\'s favorite restaurant',
        engagement: '6.5%'
    },
    {
        id: 2,
        title: 'Local Ride Driver Stories',
        brand: 'Local Ride',
        thumbnail: 'https://www.instagram.com/p/DSG7FV_jVdI/media/?size=l',
        instagramUrl: 'https://www.instagram.com/p/DSG7FV_jVdI/',
        views: '89K',
        likes: '5.4K',
        duration: '0:32',
        description: 'Real drivers, real stories, zero commission',
        engagement: '6.1%'
    },
    {
        id: 3,
        title: 'Dee Cee Jewelry Showcase',
        brand: 'Dee Cee Accessories',
        thumbnail: 'https://www.instagram.com/p/DIYuVCWz2aO/media/?size=l',
        instagramUrl: 'https://www.instagram.com/p/DIYuVCWz2aO/',
        views: '92K',
        likes: '6.8K',
        duration: '0:38',
        description: 'Elegance meets affordability',
        engagement: '7.4%'
    },
    {
        id: 4,
        title: 'Biryani Bar Cooking Magic',
        brand: 'Biryani Bar',
        thumbnail: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80',
        instagramUrl: undefined,
        views: '178K',
        likes: '14.2K',
        duration: '0:52',
        description: 'The secret to perfect biryani',
        engagement: '8.0%'
    },
    {
        id: 5,
        title: 'CabTale Safety First',
        brand: 'CabTale',
        thumbnail: 'https://www.instagram.com/p/DNH5BkfBSeQ/media/?size=l',
        instagramUrl: 'https://www.instagram.com/p/DNH5BkfBSeQ/',
        views: '45K',
        likes: '3.2K',
        duration: '0:30',
        description: 'Your safety is our priority',
        engagement: '7.1%'
    },
    {
        id: 6,
        title: 'Astro Nexus Zodiac Series',
        brand: 'Astro Nexus',
        thumbnail: 'https://www.instagram.com/p/DTgxqv6iNh5/media/?size=l',
        instagramUrl: 'https://www.instagram.com/p/DTgxqv6iNh5/',
        views: '67K',
        likes: '4.9K',
        duration: '0:28',
        description: 'Your daily horoscope reimagined',
        engagement: '7.3%'
    },
    {
        id: 7,
        title: 'Read Abroad Study Tips',
        brand: 'Read Abroad',
        thumbnail: 'https://www.instagram.com/p/DS1YULWEegw/media/?size=l',
        instagramUrl: 'https://www.instagram.com/p/DS1YULWEegw/',
        views: '34K',
        likes: '2.1K',
        duration: '0:35',
        description: 'Study abroad success stories',
        engagement: '6.2%'
    },
    {
        id: 8,
        title: 'TripTale Travel Diaries',
        brand: 'TripTale',
        thumbnail: 'https://www.instagram.com/p/DOfLasDCRCO/media/?size=l',
        instagramUrl: 'https://www.instagram.com/p/DOfLasDCRCO/',
        views: '156K',
        likes: '12.3K',
        duration: '0:42',
        description: 'Wanderlust inspiration',
        engagement: '7.9%'
    }
];

const featuredReel = reels[0];

export default function ReelsShowcase() {
    const [selectedReel, setSelectedReel] = useState<typeof reels[0] | null>(null);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    // Calculate total stats
    const totalViews = reels.reduce((sum, reel) => sum + parseInt(reel.views.replace('K', '000')), 0);
    const totalLikes = reels.reduce((sum, reel) => sum + parseFloat(reel.likes.replace('K', '')) * 1000, 0);
    const avgEngagement = (reels.reduce((sum, reel) => sum + parseFloat(reel.engagement), 0) / reels.length).toFixed(1);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 font-bold text-sm uppercase tracking-widest rounded-full mb-4">
                        <Sparkles size={14} />
                        Video Content That Goes Viral
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Reels That{' '}
                        <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                            Resonate
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-300 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Short-form content that captures attention, tells stories, and drives massive engagement
                        across social platforms.
                    </p>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="text-2xl font-bold text-gray-900 mb-1">{reels.length}</div>
                        <div className="text-sm text-gray-500">Engaging Reels</div>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="text-2xl font-bold text-gray-900 mb-1">{Math.floor(totalViews / 1000)}M+</div>
                        <div className="text-sm text-gray-500">Total Views</div>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="text-2xl font-bold text-gray-900 mb-1">{Math.floor(totalLikes / 1000)}K+</div>
                        <div className="text-sm text-gray-500">Total Likes</div>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="text-2xl font-bold text-green-600 mb-1">{avgEngagement}%</div>
                        <div className="text-sm text-gray-500">Avg. Engagement</div>
                    </div>
                </motion.div>

                {/* Featured Reel */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Video Preview */}
                            <div
                                className="relative aspect-[9/16] md:aspect-auto group cursor-pointer overflow-hidden"
                                onClick={() => {
                                    if (featuredReel.instagramUrl) {
                                        window.open(featuredReel.instagramUrl, '_blank', 'noopener,noreferrer');
                                    } else {
                                        setSelectedReel(featuredReel);
                                    }
                                }}
                            >
                                <Image
                                    src={featuredReel.thumbnail}
                                    alt={featuredReel.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <motion.div
                                        className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Play size={36} className="text-gray-900 ml-1" fill="gray-900" />
                                    </motion.div>
                                </div>
                                <div className="absolute top-4 left-4 px-3 py-1 bg-gray-900 text-white text-xs font-bold uppercase rounded-full">
                                    Featured
                                </div>
                                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-sm font-bold rounded-full flex items-center gap-1">
                                    <Clock size={12} />
                                    {featuredReel.duration}
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-900 font-bold text-sm uppercase tracking-wide rounded-full mb-4 w-fit">
                                    {featuredReel.brand}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    {featuredReel.title}
                                </h3>
                                <p className="text-gray-600 text-lg mb-6">
                                    {featuredReel.description}
                                </p>
                                <div className="flex flex-wrap items-center gap-6 text-gray-700 mb-8">
                                    <div className="flex items-center gap-2">
                                        <Eye size={20} className="text-gray-600" />
                                        <span className="font-bold">{featuredReel.views}</span>
                                        <span className="text-gray-500 text-sm">views</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Heart size={20} className="text-gray-600" />
                                        <span className="font-bold">{featuredReel.likes}</span>
                                        <span className="text-gray-500 text-sm">likes</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <TrendingUp size={20} className="text-green-600" />
                                        <span className="font-bold">{featuredReel.engagement}</span>
                                        <span className="text-gray-500 text-sm">engagement</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        if (featuredReel.instagramUrl) {
                                            window.open(featuredReel.instagramUrl, '_blank', 'noopener,noreferrer');
                                        } else {
                                            setSelectedReel(featuredReel);
                                        }
                                    }}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 w-fit transform hover:scale-105"
                                >
                                    <Instagram size={18} />
                                    Watch on Instagram
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Reels Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {reels.slice(1).map((reel, idx) => (
                        <motion.div
                            key={reel.id}
                            className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-gray-100 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            onClick={() => {
                                if (reel.instagramUrl) {
                                    window.open(reel.instagramUrl, '_blank', 'noopener,noreferrer');
                                } else {
                                    setSelectedReel(reel);
                                }
                            }}
                            onMouseEnter={() => setHoveredId(reel.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <Image
                                src={reel.thumbnail}
                                alt={reel.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Dark Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${
                                hoveredId === reel.id ? 'opacity-100' : 'opacity-90'
                            }`}>
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h4 className="text-white font-bold text-sm mb-1 line-clamp-2">
                                        {reel.title}
                                    </h4>
                                    <p className="text-gray-300 text-xs mb-2">{reel.brand}</p>
                                    <div className="flex items-center justify-between text-white text-xs">
                                        <div className="flex items-center gap-2">
                                            <Eye size={12} />
                                            <span>{reel.views}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Heart size={12} />
                                            <span>{reel.likes}</span>
                                        </div>
                                        <span>{reel.duration}</span>
                                    </div>
                                    {reel.engagement && (
                                        <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 bg-green-500/20 rounded-full">
                                            <TrendingUp size={10} className="text-green-400" />
                                            <span className="text-green-400 text-xs">{reel.engagement} engagement</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                    <Play size={20} className="text-gray-900 ml-0.5" fill="gray-900" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                   
                </motion.div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedReel && (
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedReel(null)}
                        >
                            <motion.div
                                className="relative max-w-4xl w-full"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedReel(null)}
                                    className="absolute -top-12 right-0 p-2 text-white hover:text-gray-400 transition-colors"
                                >
                                    <X size={32} />
                                </button>

                                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gray-900">
                                    <Image
                                        src={selectedReel.thumbnail}
                                        alt={selectedReel.title}
                                        fill
                                        className="object-contain"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                                                <Play size={40} className="text-white ml-1" fill="white" />
                                            </div>
                                            <p className="text-white text-sm">Click to play on Instagram</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 text-center">
                                    <h3 className="text-2xl font-bold text-white mb-2">{selectedReel.title}</h3>
                                    <p className="text-gray-400 mb-4">{selectedReel.description}</p>
                                    {selectedReel.instagramUrl && (
                                        <button
                                            onClick={() => window.open(selectedReel.instagramUrl, '_blank')}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full hover:shadow-lg transition-all"
                                        >
                                            <Instagram size={18} />
                                            Watch Full Reel on Instagram
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}