'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Share2, ZoomIn, ExternalLink, Sparkles, Instagram, TrendingUp, Eye, Heart } from 'lucide-react';

const posterCategories = ['All', 'Social Media', 'Print', 'Digital Ads', 'Branding', 'Events'];

const posters = [
    {
        id: 1,
        title: 'Delhi059 Grand Opening',
        brand: 'Delhi059',
        category: 'Social Media',
        image: 'https://www.instagram.com/p/DBjCxUbuKge/media/?size=l',
        description: 'Launch campaign that generated 10K+ impressions',
        link: 'https://www.instagram.com/p/DBjCxUbuKge/',
        stats: { views: '10.2K', likes: '1.2K' }
    },
    {
        id: 2,
        title: 'Local Ride App Launch',
        brand: 'Local Ride',
        category: 'Digital Ads',
        image: 'https://www.instagram.com/p/DSGIHDZgcQm/media/?size=l',
        description: 'Zero commission driver campaign',
        link: 'https://www.instagram.com/p/DSGIHDZgcQm/',
        stats: { views: '25.5K', likes: '3.1K' }
    },
    {
        id: 3,
        title: 'BG Foods Festive Special',
        brand: 'BG Foods',
        category: 'Social Media',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
        description: 'Diwali campaign with 50K+ reach',
        link: undefined,
        stats: { views: '52.1K', likes: '4.8K' }
    },
    {
        id: 4,
        title: 'Promac Luxury Homes',
        brand: 'Promac Advisory',
        category: 'Print',
        image: '/creatives/promaccreatives.png',
        description: 'Premium real estate brochure design',
        link: undefined,
        stats: { views: '8.3K', likes: '892' }
    },
    {
        id: 5,
        title: 'Astro Nexus Zodiac Series',
        brand: 'Astro Nexus',
        category: 'Branding',
        image: 'https://www.instagram.com/p/DTSxqv6iNh5/media/?size=l',
        description: 'Complete brand identity redesign',
        link: 'https://www.instagram.com/p/DTSxqv6iNh5/',
        stats: { views: '15.7K', likes: '2.3K' }
    },
    {
        id: 6,
        title: 'Dee Cee Jewelry Collection',
        brand: 'Dee Cee Accessories',
        category: 'Social Media',
        image: 'https://www.instagram.com/p/DHIHRiZSdrU/media/?size=l',
        description: 'Product photography campaign',
        link: 'https://www.instagram.com/p/DHIHRiZSdrU/',
        stats: { views: '32.4K', likes: '4.2K' }
    },
    {
        id: 7,
        title: 'Biryani Bar Menu Launch',
        brand: 'Biryani Bar',
        category: 'Print',
        image: '/creatives/biryanibar.jpg',
        description: 'Premium menu design and photography',
        link: undefined,
        stats: { views: '6.8K', likes: '734' }
    },
    {
        id: 8,
        title: 'CabTale Safety Campaign',
        brand: 'CabTale',
        category: 'Digital Ads',
        image: 'https://www.instagram.com/p/DOLPnqODw42/media/?size=l',
        description: 'Safety-first messaging campaign',
        link: 'https://www.instagram.com/p/DOLPnqODw42/',
        stats: { views: '18.9K', likes: '2.1K' }
    },
    {
        id: 9,
        title: 'BG Foundation Charity Drive',
        brand: 'BG Foundation',
        category: 'Events',
        image: 'https://www.instagram.com/p/DRelzQxjF9d/media/?size=l',
        description: 'Community outreach event branding',
        link: 'https://www.instagram.com/p/DRelzQxjF9d/?img_index=1',
        stats: { views: '41.3K', likes: '5.2K' }
    },
    {
        id: 10,
        title: 'Read Abroad Study Guide',
        brand: 'Read Abroad',
        category: 'Branding',
        image: 'https://www.instagram.com/p/DR1YULWEegw/media/?size=l',
        description: 'Educational branding materials',
        link: 'https://www.instagram.com/p/DR1YULWEegw/',
        stats: { views: '9.5K', likes: '1.1K' }
    },
    {
        id: 11,
        title: 'Writing Rodgers Workshop',
        brand: 'Writing Rodgers',
        category: 'Events',
        image: '/creatives/writingrodgerscreative.jpg',
        description: 'Creative writing workshop promotion',
        link: undefined,
        stats: { views: '7.2K', likes: '843' }
    },
    {
        id: 12,
        title: 'TripTale Travel Stories',
        brand: 'TripTale',
        category: 'Social Media',
        image: 'https://www.instagram.com/p/DOdLasDCRCO/media/?size=l',
        description: 'Engaging travel content series',
        link: 'https://www.instagram.com/p/DOdLasDCRCO/',
        stats: { views: '28.6K', likes: '3.4K' }
    }
];

export default function BestPostersGallery() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [lightboxImage, setLightboxImage] = useState<typeof posters[0] | null>(null);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const filteredPosters = selectedCategory === 'All'
        ? posters
        : posters.filter(poster => poster.category === selectedCategory);

    // Featured posters for hero section
    const featuredPosters = posters.slice(0, 3);

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Hero Section with Featured Work */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-full mb-6">
                                <Sparkles size={14} />
                                Our Creative Portfolio
                            </span>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                                Transforming Ideas into{' '}
                                <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                    Visual Masterpieces
                                </span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                From concept to creation, we craft designs that captivate audiences and drive results. 
                                Explore our finest work across social media, print, branding, and digital advertising.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button 
                                    onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    Explore Gallery
                                </button>
                                <button className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-900 transition-all duration-300">
                                    View Case Studies
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {featuredPosters.map((poster, idx) => (
                                <motion.div
                                    key={poster.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`relative rounded-xl overflow-hidden shadow-lg ${idx === 0 ? 'row-span-2' : ''}`}
                                >
                                    <div className="relative aspect-[3/4]">
                                        <Image
                                            src={poster.image}
                                            alt={poster.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Category Filters - Modern Design */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {posterCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`relative px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'text-white'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            {selectedCategory === category && (
                                <motion.span
                                    layoutId="activeCategory"
                                    className="absolute inset-0 bg-gray-900 rounded-full"
                                    transition={{ type: "spring", duration: 0.5 }}
                                />
                            )}
                            <span className="relative z-10">{category}</span>
                        </button>
                    ))}
                </motion.div>

                {/* Posters Grid - Modern Grid Layout */}
                <div id="gallery" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredPosters.map((poster, idx) => (
                            <motion.div
                                key={poster.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                onMouseEnter={() => setHoveredId(poster.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div
                                    className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                                    onClick={() => {
                                        if (poster.link) {
                                            window.open(poster.link, '_blank', 'noopener,noreferrer');
                                        } else {
                                            setLightboxImage(poster);
                                        }
                                    }}
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-[3/4] overflow-hidden">
                                        <Image
                                            src={poster.image}
                                            alt={poster.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        
                                        {/* Stats Overlay */}
                                        <div className="absolute top-3 right-3 flex gap-2">
                                            <div className="flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-white text-xs">
                                                <Eye size={12} />
                                                <span>{poster.stats?.views}</span>
                                            </div>
                                            <div className="flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-white text-xs">
                                                <Heart size={12} />
                                                <span>{poster.stats?.likes}</span>
                                            </div>
                                        </div>

                                        {/* Category Badge */}
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2 py-1 bg-white/95 backdrop-blur-sm rounded-lg text-xs font-semibold text-gray-900">
                                                {poster.category}
                                            </span>
                                        </div>

                                        {/* Hover Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent transition-opacity duration-500 ${
                                            hoveredId === poster.id ? 'opacity-100' : 'opacity-0'
                                        }`}>
                                            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-4 transition-transform duration-500"
                                                style={{ transform: hoveredId === poster.id ? 'translateY(0)' : 'translateY(100%)' }}
                                            >
                                                <h3 className="text-white font-bold text-lg mb-1">{poster.title}</h3>
                                                <p className="text-gray-300 text-sm mb-3">{poster.description}</p>
                                                <div className="flex items-center gap-2 text-white text-xs">
                                                    {poster.link ? (
                                                        <>
                                                            <Instagram size={14} />
                                                            <span>View on Instagram</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <ZoomIn size={14} />
                                                            <span>View full size</span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Footer */}
                                    <div className="p-4 border-t border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="font-semibold text-gray-900 text-sm">{poster.title}</h4>
                                                <p className="text-gray-500 text-xs">{poster.brand}</p>
                                            </div>
                                            <div className="text-gray-400 group-hover:text-gray-900 transition-colors">
                                                <ExternalLink size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

               

                {/* CTA Section */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Ready to Create Something Amazing?
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Let's bring your vision to life with our expert design and creative services.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/contact">
                                <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    Start Your Project
                                </button>
                            </Link>
                            <Link href="/portfolio">
                                <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-900 transition-all duration-300">
                                    View Full Portfolio
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {lightboxImage && (
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setLightboxImage(null)}
                        >
                            <motion.div
                                className="relative max-w-5xl w-full"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setLightboxImage(null)}
                                    className="absolute -top-12 right-0 p-2 text-white hover:text-gray-400 transition-colors"
                                >
                                    <X size={32} />
                                </button>

                                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-900">
                                    <Image
                                        src={lightboxImage.image}
                                        alt={lightboxImage.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div className="mt-6 text-center">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {lightboxImage.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4">
                                        {lightboxImage.description}
                                    </p>
                                    <div className="flex justify-center gap-4">
                                        {lightboxImage.link ? (
                                            <Link href={lightboxImage.link} target="_blank">
                                                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full hover:shadow-lg transition-all">
                                                    <Instagram size={18} />
                                                    View on Instagram
                                                </button>
                                            </Link>
                                        ) : (
                                            <>
                                                <button className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all">
                                                    <Download size={18} />
                                                    Download
                                                </button>
                                                <button className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all">
                                                    <Share2 size={18} />
                                                    Share
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}