'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, MessageCircle, Eye, TrendingUp, Users, Award, Clock } from 'lucide-react';

const creativeContent = [
    {
        type: 'post' as const,
        image: 'https://www.instagram.com/p/DBjCxUbuKge/media/?size=l',
        brand: 'Delhi059',
        likes: '2.4k',
        comments: '156',
        link: 'https://www.instagram.com/p/DBjCxUbuKge/'
    },
    {
        type: 'post' as const,
        image: 'https://www.instagram.com/p/DSGIHDZgcQm/media/?size=l',
        brand: 'Local Ride',
        likes: '3.1k',
        comments: '203',
        link: 'https://www.instagram.com/p/DSGIHDZgcQm/'
    },
    {
        type: 'post' as const,
        image: '/creatives/promaccreatives.png',
        brand: 'Promac Advisory',
        likes: '1.9k',
        comments: '124',
        link: undefined
    },
    {
        type: 'post' as const,
        image: 'https://www.instagram.com/p/DTSxqv6iNh5/media/?size=l',
        brand: 'Astro Nexus',
        likes: '1.8k',
        comments: '89',
        link: 'https://www.instagram.com/p/DTSxqv6iNh5/'
    },
    {
        type: 'post' as const,
        image: 'https://www.instagram.com/p/DHIHRiZSdrU/media/?size=l',
        brand: 'Dee Cee Accessories',
        likes: '2.2k',
        comments: '167',
        link: 'https://www.instagram.com/p/DHIHRiZSdrU/'
    },
    {
        type: 'post' as const,
        image: '/creatives/biryanibar.jpg',
        brand: 'Biryani Bar',
        likes: '3.5k',
        comments: '234',
        link: undefined
    }
];



export default function CreativeShowcase() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 mb-4"
                    >
                        <div className="h-px w-8 bg-gray-800" />
                        <span className="text-gray-600 uppercase tracking-[0.2em] text-sm font-bold">Our Journey</span>
                        <div className="h-px w-8 bg-gray-800" />
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                    >
                        A Legacy Reborn,
                        <span className="text-green-500 block">A Vision Renewed</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-3xl mx-auto"
                    >
                        Every great story has chapters of triumph and transformation. Ours began with a dream—to build brands that don't just exist, but inspire, connect, and dominate.
                    </motion.p>
                </div>

                {/* Story Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {[
                        { title: 'The Beginning', desc: 'Building 30+ brands from ground up', icon: Clock },
                        { title: 'The Transformation', desc: 'A restart fueled by passion & experience', icon: TrendingUp },
                        { title: 'The Vision', desc: 'Crafting legacies, telling stories', icon: Award }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition"
                        >
                            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-900 flex items-center justify-center">
                                <item.icon className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                

                {/* Creative Content Grid */}
                <div className="mb-16">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            Our Creative Universe
                        </h3>
                        <p className="text-gray-500">Visual stories that connect and inspire</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {creativeContent.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => {
                                    if (item.link) {
                                        window.open(item.link, '_blank', 'noopener,noreferrer');
                                    }
                                }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.brand}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-white font-bold text-sm mb-2">
                                            {item.brand}
                                        </p>
                                        <div className="flex items-center gap-4 text-white text-xs">
                                            <span className="flex items-center gap-1">
                                                <Heart size={12} />
                                                {item.likes}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MessageCircle size={12} />
                                                {item.comments}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/projects">
                        <button className="group inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
                            Explore Our Full Journey
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                        </button>
                    </Link>
                    <p className="mt-4 text-gray-400 text-sm">
                        Dive into our visual journey, reels, articles, and influencer campaigns
                    </p>
                </motion.div>
            </div>
        </section>
    );
}