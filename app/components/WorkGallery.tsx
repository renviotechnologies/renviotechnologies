'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const workItems = [
    {
        id: 'delhi059',
        title: 'Delhi059',
        category: 'Restaurant - Canada',
        description: 'From zero to Canada\'s culinary icon with 650+ Google reviews—all without spending a rupee on performance marketing.',
        image: '/delhi059-logo.jpg',
        tags: ['Hospitality', 'Featured']
    },
    {
        id: 'local-ride',
        title: 'Local Ride',
        category: 'Transportation - Canada',
        description: 'Engineered from the ground up into a thriving Canadian rideshare powerhouse. Full-stack iOS/Android apps with zero commission for drivers.',
        image: '/Feature_logos/localride.jpg',
        tags: ['App Development', 'Featured']
    },
    {
        id: 'maggo-play-school',
        title: 'Maggo Play School',
        category: 'Education',
        description: 'Creating joyful learning experiences for young minds in Delhi with innovative digital engagement.',
        image: '/Feature_logos/maggo.png',
        tags: ['Education']
    },
    {
        id: 'promac-advisory',
        title: 'Promac Advisory',
        category: 'Real Estate - Jaipur',
        description: 'Transforming real estate advisory with data-driven insights and premium digital presence.',
        image: '/Feature_logos/promac.png',
        tags: ['Real Estate']
    },
    {
        id: 'cabtale',
        title: 'CabTale',
        category: 'Transportation',
        description: 'Building the future of urban mobility with seamless booking experiences and real-time tracking solutions.',
        image: '/Feature_logos/cabtale.jpg',
        tags: ['Mobility', 'App Development']
    },
    {
        id: 'astro-nexus',
        title: 'Astro Nexus',
        category: 'Astrology',
        description: 'Bridging ancient wisdom with modern technology through engaging digital astrology experiences.',
        image: '/Feature_logos/astronexus.jpg',
        tags: ['Digital Media']
    },
    {
        id: 'biryani-bar',
        title: 'Biryani Bar',
        category: 'Hospitality',
        description: 'Crafting memorable dining experiences through innovative digital ordering and customer loyalty programs.',
        image: '/Feature_logos/biryanibar.jpg',
        tags: ['Hospitality']
    },
   {
        id: 'writing-rodgers',
        title: 'Writing Rodgers',
        category: 'Education',
        description: 'Empowering writers and educators with comprehensive digital tools and content strategies.',
        image: '/Feature_logos/writing.png',
        tags: ['Education']
    }
];

const categories = ['All', 'Hospitality', 'App Development', 'E-commerce', 'Non-profit', 'Education', 'Real Estate'];

export default function WorkGallery() {
    const [filter, setFilter] = useState('All');

    const filteredItems =
        filter === 'All'
            ? workItems
            : workItems.filter(item => item.tags.includes(filter));

    return (
        <section className="py-24 bg-white text-gray-900 relative overflow-hidden" id="work">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Heading with brand accent */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-8 bg-green-500" />
                        <span className="text-green-600 uppercase tracking-[0.2em] text-sm font-bold">
                            Our Portfolio
                        </span>
                        <div className="h-px w-8 bg-green-500" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
                        10 Years Into Delivering Integrated <br />
                        <span className="text-green-600">Sales & Marketing Campaigns</span>
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto font-body">
                        With creativity backed by technology, we build powerful consumer connections that drive real growth.
                    </p>
                    
                    <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full" />
                </motion.div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`text-sm font-bold uppercase tracking-widest relative pb-2 px-3 transition-all duration-300
                            ${filter === cat
                                    ? 'text-green-600'
                                    : 'text-gray-400 hover:text-gray-700'
                                }`}
                        >
                            {cat}

                            {filter === cat && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* 3 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <Link key={item.id} href={`/projects/${item.id}`} className="block group cursor-pointer">
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="relative  overflow-hidden border border-gray-200 hover:0 transition-all duration-500 bg-white shadow-md  "
                                >
                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-green-50 via-transparent to-transparent transition duration-700" />

                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden bg-gray-100">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                                        
                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="text-xs font-bold uppercase tracking-widest text-black bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white shadow-sm">
                                                {item.category}
                                            </span>
                                        </div>

                                        {/* Featured Badge */}
                                        {item.tags.includes('Featured') && (
                                            <div className="absolute top-4 right-4 z-10">
                                                <span className="text-xs font-bold uppercase tracking-widest text-white bg-black/40 px-3 py-1 rounded-full shadow-lg">
                                                    Featured
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 relative z-10">
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-black transition-colors duration-300">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 text-sm">
                                            {item.description}
                                        </p>

                                        {/* Brand Accent Line on Hover */}
                                        <div className="mt-4 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-black to-transparent transition-all duration-500 rounded-full" />
                                        
                                        {/* Tags */}
                                        {item.tags.length > 0 && (
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {item.tags.map((tag, idx) => (
                                                    <span key={idx} className="text-xs text-gray-400 group-hover:text-gray-500 transition">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                </motion.div>
                            </Link>
                        ))}
                    </AnimatePresence>
                </div>
                
                {/* View More Button */}
                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Link href="/projects">
                    <button className="group relative inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-black text-black rounded-full font-semibold hover:bg-black hover:text-white cursor-pointer transition-all duration-300 overflow-hidden">
                        
                        
                        <span className="relative z-10">View All Projects</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left cursor-pointer duration-300" />
                    </button>
                    </Link>
                </motion.div>

                {/* Brand Signature */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-400" />
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>✦</span>
                            <span>Driving results for 10+ years</span>
                            <span>✦</span>
                        </div>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-green-400" />
                    </div>
                </div>
            </div>
        </section>
    );
}