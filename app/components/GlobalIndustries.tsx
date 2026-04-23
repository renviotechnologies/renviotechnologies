'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Lightbulb, MapPin, Briefcase } from 'lucide-react';

const locations = [
    'Canada', 'USA', 'UAE', 'India', 'New Zealand', 'South Africa', 'UK', 'Australia'
];

const industries = [
    'Healthcare', 'B2B', 'E-Commerce', 'FMCG', 'Finance', 'Education', 'SaaS',
    'Mobile Apps', 'Fashion', 'Hospitality', 'Real Estate', 'Transportation'
];

export default function GlobalIndustries() {
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
                        <span className="text-gray-600 uppercase tracking-[0.2em] text-sm font-bold">Our Reach</span>
                        <div className="h-px w-8 bg-gray-800" />
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        Global Presence, <br />
                        <span className="text-green-500">Industry Expertise</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-2xl mx-auto mt-4"
                    >
                        Delivering excellence across borders and industries
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    
                    {/* Global Presence */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center">
                                <Globe className="text-white" size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Global Presence
                            </h2>
                        </div>
                        <p className="text-gray-500 mb-8 pl-0">
                            Worked with clients across the globe, delivering excellence without borders.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {locations.map((loc, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.03 }}
                                    className="flex items-center gap-2 group cursor-pointer"
                                >
                                    <MapPin size={14} className="text-gray-400 group-hover:text-gray-700 transition" />
                                    <span className="text-gray-700 group-hover:text-gray-900 transition text-sm font-medium">
                                        {loc}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Industries Served */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg cursor-pointer transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center">
                                <Briefcase className="text-white" size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Industries Served
                            </h2>
                        </div>
                        <p className="text-gray-500 mb-8">
                            Our expertise spans across diverse sectors, helping unique challenges find unique solutions.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {industries.map((ind, idx) => (
                                <motion.span
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.02 }}
                                    className="px-3 py-1.5 bg-white text-gray-700 rounded-full text-xs font-medium border border-gray-200 hover:border-gray-400 hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-default"
                                >
                                    {ind}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>

               
            </div>
        </section>
    );
}