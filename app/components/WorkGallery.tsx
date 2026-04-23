'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const workItems = [
    {
        id: 'delhi059',
        title: 'Delhi059',
        company: 'Delhi059 Hospitality',
        category: 'Restaurant - Canada',
        description: 'From zero to Canada\'s culinary icon with 650+ Google reviews—all without spending a rupee on performance marketing.',
        image: '/Feature_logos/delhi059-logo.jpg',
        logo: '/Feature_logos/delhi059-logo.jpg',
        tags: ['Hospitality', 'Featured'],
        metrics: { growth: '+650', reviews: '4.9★' }
    },
    {
        id: 'local-ride',
        title: 'Local Ride',
        company: 'Local Ride Inc.',
        category: 'Transportation - Canada',
        description: 'Engineered from the ground up into a thriving Canadian rideshare powerhouse. Full-stack iOS/Android apps with zero commission for drivers.',
        image: '/Feature_logos/localride.jpg',
        logo: '/Feature_logos/localride.jpg',
        tags: ['App Development', 'Featured'],
        metrics: { downloads: '250K+', rating: '4.8★' }
    },
    {
        id: 'maggo-play-school',
        title: 'Maggo Play School',
        company: 'Maggo Education',
        category: 'Education',
        description: 'Creating joyful learning experiences for young minds in Delhi with innovative digital engagement.',
        image: '/Feature_logos/maggo.png',
        logo: '/Feature_logos/maggo.png',
        tags: ['Education'],
        metrics: { parents: '1,200+', engagement: '98%' }
    },
    {
        id: 'promac-advisory',
        title: 'Promac Advisory',
        company: 'Promac Group',
        category: 'Real Estate - Jaipur',
        description: 'Transforming real estate advisory with data-driven insights and premium digital presence.',
        image: '/Feature_logos/promac.png',
        logo: '/Feature_logos/promac.png',
        tags: ['Real Estate'],
        metrics: { deals: '₹50Cr+', clients: '300+' }
    },
    {
        id: 'cabtale',
        title: 'CabTale',
        company: 'CabTale Technologies',
        category: 'Transportation',
        description: 'Building the future of urban mobility with seamless booking experiences and real-time tracking solutions.',
        image: '/Feature_logos/cabtale.jpg',
        logo: '/Feature_logos/cabtale.jpg',
        tags: ['Mobility', 'App Development'],
        metrics: { rides: '100K+', uptime: '99.9%' }
    },
    {
        id: 'astro-nexus',
        title: 'Astro Nexus',
        company: 'Astro Nexus Media',
        category: 'Astrology',
        description: 'Bridging ancient wisdom with modern technology through engaging digital astrology experiences.',
        image: '/Feature_logos/astronexus.jpg',
        logo: '/Feature_logos/astronexus.jpg',
        tags: ['Digital Media'],
        metrics: { users: '50K+', sessions: '2M+' }
    },
    {
        id: 'biryani-bar',
        title: 'Biryani Bar',
        company: 'Biryani Bar Hospitality',
        category: 'Hospitality',
        description: 'Crafting memorable dining experiences through innovative digital ordering and customer loyalty programs.',
        image: '/Feature_logos/biryanibar.jpg',
        logo: '/Feature_logos/biryanibar.jpg',
        tags: ['Hospitality'],
        metrics: { orders: '75K+', retention: '82%' }
    },
   {
        id: 'writing-rodgers',
        title: 'Writing Rodgers',
        company: 'Rodgers Education',
        category: 'Education',
        description: 'Empowering writers and educators with comprehensive digital tools and content strategies.',
        image: '/Feature_logos/writing.png',
        logo: '/Feature_logos/writing.png',
        tags: ['Education'],
        metrics: { courses: '45+', students: '10K+' }
    }
];
const categories = ['All', 'Hospitality', 'App Development', 'Education', 'Real Estate', 'Mobility', 'Digital Media'];

export default function WorkGallery() {
    const [filter, setFilter] = useState('All');
    const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});

    const filteredItems =
        filter === 'All'
            ? workItems
            : workItems.filter(item => item.tags.includes(filter));

    const handleImageError = (id: string, isLogo: boolean = false) => {
        setImagesLoaded(prev => ({ ...prev, [`${id}-${isLogo ? 'logo' : 'main'}`]: false }));
    };

    const handleImageLoad = (id: string, isLogo: boolean = false) => {
        setImagesLoaded(prev => ({ ...prev, [`${id}-${isLogo ? 'logo' : 'main'}`]: true }));
    };

    // Fallback SVG for missing images
    const getFallbackIcon = (title: string, isLogo: boolean = false) => (
        <div className={`${isLogo ? 'w-8 h-8' : 'w-full h-full'} bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center`}>
            <span className={`${isLogo ? 'text-xs' : 'text-4xl'} font-bold text-gray-400`}>
                {title.charAt(0)}
            </span>
        </div>
    );

    return (
        <section className="py-24 bg-white text-gray-900 relative" id="work">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-8 bg-green-500" />
                        <span className="text-green-500 uppercase tracking-[0.2em] text-sm font-medium">
                            Our Work
                        </span>
                        <div className="h-px w-8 bg-green-500" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
                        Featured <span className="text-green-500">Projects</span>
                    </h2>

                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Transforming brands through innovative digital solutions and measurable results.
                    </p>
                </motion.div>

                {/* Filters - Clean & Minimal */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer
                            ${filter === cat
                                    ? 'bg-gray-900 text-white shadow-sm'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Card Grid - Modern Redesign */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <Link key={item.id} href={`/projects/${item.id}`} className="block group">
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, delay: index * 0.03 }}
                                    className="relative rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    {/* Image Section */}
                                    <div className="relative h-48 overflow-hidden bg-gray-50">
                                        {imagesLoaded[`${item.id}-main`] !== false ? (
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                onError={() => handleImageError(item.id, false)}
                                                onLoad={() => handleImageLoad(item.id, false)}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                            />
                                        ) : (
                                            getFallbackIcon(item.title, false)
                                        )}
                                        
                                        {/* Simple Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        
                                        {/* Category Badge - Clean */}
                                        <div className="absolute top-3 left-3">
                                            <span className="text-xs font-medium text-gray-700 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-sm">
                                                {item.category.split(' - ')[0]}
                                            </span>
                                        </div>

                                        {/* Featured Indicator */}
                                        {item.tags.includes('Featured') && (
                                            <div className="absolute top-3 right-3">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm animate-pulse" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        {/* Company Logo + Title Row */}
                                        <div className="flex items-center gap-3 mb-3">
                                            {/* Small Company Logo */}
                                            <div className="relative w-10 h-10 rounded-lg bg-white border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                                                {imagesLoaded[`${item.id}-logo`] !== false ? (
                                                    <Image
                                                        src={item.logo || item.image}
                                                        alt={`${item.company} logo`}
                                                        fill
                                                        className="object-cover p-1.5"
                                                        onError={() => handleImageError(item.id, true)}
                                                        onLoad={() => handleImageLoad(item.id, true)}
                                                        sizes="40px"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                                        <span className="text-xs font-bold text-gray-500">
                                                            {item.company.charAt(0)}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-base font-bold text-gray-900 group-hover:text-gray-700 transition-colors truncate">
                                                    {item.title}
                                                </h3>
                                                <p className="text-xs text-gray-400 truncate">
                                                    {item.company}
                                                </p>
                                            </div>
                                            
                                            {/* Arrow indicator on hover */}
                                            <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>

                                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-3">
                                            {item.description}
                                        </p>

                                        {/* Metrics Row - New Feature */}
                                        {item.metrics && (
                                            <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                                                {Object.entries(item.metrics).map(([key, value], idx) => (
                                                    <div key={idx} className="flex items-center gap-1">
                                                        <span className="text-xs font-semibold text-gray-800">{value}</span>
                                                        <span className="text-xs text-gray-400 capitalize">{key}</span>
                                                        {idx < Object.keys(item.metrics!).length - 1 && (
                                                            <span className="text-gray-300 mx-0.5">•</span>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Simple Tags */}
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {item.tags.filter(t => t !== 'Featured').slice(0, 2).map((tag, idx) => (
                                                <span key={idx} className="text-xs text-gray-400">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </AnimatePresence>
                </div>
                
                {/* View All Button - Minimal */}
               <motion.div
              className="mt-8 flex gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                href="/projects"
                className="relative px-8 py-4  bg-black text-white font-bold rounded-full overflow-hidden group"
              >
                <span className="relative z-10">View All Projects</span>

                {/* Hover Animation */}
                <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </Link>
                </motion.div>

                {/* Simple Footer */}
                <div className="mt-16 text-center">
                    <p className="text-xs text-gray-400">
                        10+ years of delivering exceptional results for our clients
                    </p>
                </div>
            </div>
        </section>
    );
}