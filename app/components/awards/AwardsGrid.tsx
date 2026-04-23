'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Mic, Briefcase, Video, Calendar, TrendingUp } from 'lucide-react';

const achievements = [
    {
        icon: Star,
        title: "Founder & Scale",
        desc: "Successfully founded and scaled Renvio, launching multiple brands including Delhi059 by Chef Kanishk, TripTale, Dee Cee Pearls, and Down Ridge.",
        year: "2024"
    },
    {
        icon: Trophy,
        title: "Volvo Cars India",
        desc: "Led high-impact digital marketing for Volvo Cars India, driving campaigns across web, SEO/SEM, email, social media, and display channels.",
        year: "2023"
    },
    {
        icon: Briefcase,
        title: "13SQFT.COM",
        desc: "Spearheaded marketing for 13SQFT.COM (AMS and Procurement Partnership Model), improving product visibility and engagement through structured go-to-market strategies.",
        year: "2022"
    },
    {
        icon: Award,
        title: "Kamalraj Group",
        desc: "Headed marketing for Kamalraj Group (residential and commercial), increasing client subscriptions and activating new societies through performance-driven digital campaigns.",
        year: "2021"
    },
    {
        icon: Mic,
        title: "Mindwise Media Research",
        desc: "Managed election surveys and a 120-member field team as Senior Zonal Coordinator at Mindwise Media Research Unit (India News), handling large-scale data collection and reporting.",
        year: "2019"
    },
    {
        icon: Video,
        title: "Commercial Direction",
        desc: "Directed and filmed commercial and promotional content, including a chroma ad for Unique Builders, promotional planning for eBay.in, and ad direction for Square Animation Company.",
        year: "2018"
    },
    {
        icon: TrendingUp,
        title: "National Theatre Actor",
        desc: "Represented Delhi at the national level as a theatre actor, demonstrating recognized performance skills and national-level visibility.",
        year: "2017"
    }
];

export default function AwardsGrid() {
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
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Key Milestones & Achievements
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-2xl mx-auto"
                    >
                        A timeline of our journey, impact, and recognition across industries
                    </motion.p>
                </div>

                {/* Stats Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                >
                    {[
                        { value: '7+', label: 'Major Milestones' },
                        { value: '8+', label: 'Brands Launched' },
                        { value: '10+', label: 'Years Experience' },
                        { value: '5+', label: 'Industries' }
                    ].map((stat, i) => (
                        <div key={i} className="text-center p-4 bg-gray-50 rounded-xl">
                            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 group border border-gray-100 hover:border-gray-200"
                        >
                            <div className="flex justify-between items-start mb-5">
                                <div className="w-12 h-12 rounded-xl bg-gray-900 group-hover:bg-gray-800 transition-colors flex items-center justify-center">
                                    <item.icon size={22} className="text-white" />
                                </div>
                                <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm">
                                    <Calendar size={12} className="text-gray-500" />
                                    <span className="text-xs font-medium text-gray-600">{item.year}</span>
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <p className="text-xs text-gray-400">
                        Each milestone represents our commitment to excellence and innovation
                    </p>
                </motion.div>
            </div>
        </section>
    );
}