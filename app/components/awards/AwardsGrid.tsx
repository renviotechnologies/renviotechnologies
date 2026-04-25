'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Sparkles, Rocket, Target, Globe, Zap, Calendar, TrendingUp } from 'lucide-react';

const achievements = [
    {
        icon: Star,
        title: "Founded Renvio Technologies",
        desc: "Launched Renvio with a vision to revolutionize marketing through AI-powered solutions, helping brands achieve unprecedented growth through innovative strategies.",
        year: "2025",
        category: "Company Milestone",
        impact: "AI-Powered Marketing",
        highlight: true
    },
    {
        icon: Trophy,
        title: "Successfully Launched 5+ Brands",
        desc: "Within our first year, we successfully launched and scaled multiple brands including Delhi059, TripTale, Dee Cee Pearls, and Down Ridge, achieving remarkable market presence.",
        year: "2025",
        category: "Brand Launch",
        impact: "8+ Brands",
        highlight: false
    },
    {
        icon: Award,
        title: "Expanded Global Footprint",
        desc: "Established international presence across Canada, USA, and UAE markets, serving clients worldwide with our cutting-edge digital marketing solutions.",
        year: "2025",
        category: "Global Expansion",
        impact: "3+ Countries",
        highlight: false
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
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 font-bold text-sm uppercase tracking-widest rounded-full mb-4"
                    >
                        <Sparkles size={14} />
                        Our Journey
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                    >
                        Built in{' '}
                        <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                            2025
                        </span>
                    </motion.h2>
                    
                    <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-300 mx-auto mb-6 rounded-full"></div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Though we're new, our impact is already being felt across industries
                    </motion.p>
                </div>

               

                {/* Achievements Grid - 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border hover:-translate-y-1 ${
                                item.highlight 
                                    ? 'border-gray-300 shadow-lg ring-1 ring-gray-200' 
                                    : 'border-gray-100 hover:border-gray-200'
                            }`}
                        >
                            {/* Top Border Gradient on Hover */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-700 to-gray-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                                item.highlight ? 'opacity-100' : ''
                            }`} />

                            {/* Highlight Badge for Founding Year */}
                            {item.highlight && (
                                <div className="absolute -top-3 left-6 px-3 py-1 bg-gray-900 text-white text-xs font-bold rounded-full">
                                    Featured
                                </div>
                            )}

                            <div className="flex justify-between items-start mb-5">
                                <div className={`w-14 h-14 rounded-xl bg-gray-900 group-hover:bg-gray-800 transition-all duration-300 flex items-center justify-center shadow-md group-hover:shadow-lg ${
                                    item.highlight ? 'bg-gray-800' : ''
                                }`}>
                                    <item.icon size={24} className="text-white" />
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <div className="flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-full">
                                        <Calendar size={12} className="text-gray-500" />
                                        <span className="text-sm font-medium text-gray-600">{item.year}</span>
                                    </div>
                                    <div className="inline-block px-2 py-1 bg-gray-100 rounded-full">
                                        <span className="text-xs text-gray-500">{item.category}</span>
                                    </div>
                                </div>
                            </div>

                            <h3 className={`text-xl font-bold mb-3 group-hover:text-gray-800 transition ${
                                item.highlight ? 'text-gray-900' : 'text-gray-900'
                            }`}>
                                {item.title}
                            </h3>

                            <p className="text-gray-500 leading-relaxed text-sm mb-5">
                                {item.desc}
                            </p>

                            {/* Impact Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg">
                                <Zap size={12} className="text-gray-600" />
                                <span className="text-xs font-medium text-gray-700">{item.impact}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Company Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-10 text-center"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        The Journey Has Just Begun
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Founded in 2025, Renvio is already making waves in the marketing industry. 
                        With AI-powered solutions and a client-first approach, we're just getting started.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-500">Actively Growing</span>
                        </div>
                        <div className="w-px h-4 bg-gray-300"></div>
                        <div className="flex items-center gap-2">
                            <Rocket size={14} className="text-gray-600" />
                            <span className="text-sm text-gray-500">Expanding Globally</span>
                        </div>
                        <div className="w-px h-4 bg-gray-300"></div>
                        <div className="flex items-center gap-2">
                            <Target size={14} className="text-gray-600" />
                            <span className="text-sm text-gray-500">AI-Focused</span>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 text-gray-400">
                        <Sparkles size={14} />
                        <p className="text-sm">Every milestone represents our commitment to excellence and innovation</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}