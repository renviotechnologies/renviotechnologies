'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BarChart2, Layers } from 'lucide-react';

// Replace this with your actual logo component or image
const LogoIcon = () => (
    <svg 
        viewBox="0 0 100 100" 
        className="w-12 h-12"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Replace with your actual logo path */}
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" className="text-white"/>
        <path d="M35 50 L65 50 M50 35 L50 65" stroke="currentColor" strokeWidth="3" className="text-white"/>
        <circle cx="50" cy="50" r="8" fill="currentColor" className="text-white"/>
    </svg>
);

const philosophies = [
    {
        title: 'Strategic Approach',
        icon: Compass,
        description:
            'We take a strategic, data-driven approach to marketing, blending traditional and digital techniques to create customized solutions for your brand.'
    },
    {
        title: 'Measurable Impact',
        icon: BarChart2,
        description:
            'Our services are designed to deliver measurable results, helping you track and optimize your marketing efforts for maximum impact.'
    },
    {
        title: 'Seamless Integration',
        icon: Layers,
        description:
            'We seamlessly integrate traditional and digital marketing channels, ensuring a cohesive brand experience across all touchpoints.'
    }
];

export default function PhilosophySection() {
    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
            {/* Background Pattern - Subtle brand pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-green-400/20 blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-green-400/10 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-green-400/5 blur-3xl" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Heading with brand accent */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-8 bg-green-400" />
                        <span className="text-green-400 uppercase tracking-[0.2em] text-sm font-bold">
                            Core Values
                        </span>
                        <div className="h-px w-8 bg-green-400" />
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                        Core Marketing Philosophy
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Our guiding principles that drive success for every client partnership
                    </p>
                    <div className="w-24 h-1 bg-green-400 mx-auto mt-6 rounded-full" />
                </div>

                {/* 3 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {philosophies.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative bg-gradient-to-br from-[#000000] via-[#111111] to-black/80 backdrop-blur-sm border border-gray-800 hover:border-green-400/40  p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/5 hover:-translate-y-2"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/0 via-green-400/0 to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Logo/Icon Section */}
                            <div className="relative z-10">
                                {/* Brand Logo for first card, Icons for others */}
                                {index === 0 ? (
                                    <div className="mb-6">
                                        <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-green-400/10 text-green-400 border border-green-400/30 group-hover:scale-110 transition-transform duration-300">
                                            <LogoIcon />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mb-6">
                                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-800 group-hover:bg-green-400/20 text-gray-400 group-hover:text-green-400 transition-all duration-300 border border-gray-700 group-hover:border-green-400/30 group-hover:scale-110 transition-transform duration-300">
                                            <item.icon size={26} />
                                        </div>
                                    </div>
                                )}

                                {/* Card Number */}
                                <div className="absolute top-0 right-0 text-6xl font-bold text-gray-800 group-hover:text-green-400/10 transition-colors duration-300">
                                    {(index + 1).toString().padStart(2, '0')}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-300">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {item.description}
                                </p>

                                {/* Brand Accent Line */}
                                <div className="mt-6 h-[2px] w-12 group-hover:w-full bg-green-400/30 group-hover:bg-green-400 transition-all duration-500 rounded-full" />

                                {/* Learn More Link */}
                                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-sm text-green-400 inline-flex items-center gap-1">
                                        Learn more 
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Brand Signature */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-400" />
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>✦</span>
                            <span>Driven by strategic excellence</span>
                            <span>✦</span>
                        </div>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-green-400" />
                    </div>
                </div>
            </div>
        </section>
    );
}