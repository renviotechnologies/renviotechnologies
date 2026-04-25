'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Users, Target, TrendingUp, Rocket } from 'lucide-react';

const items = [
    {
        title: "Core Philosophy",
        subtitle: "Strategic Approach",
        desc: "We take a strategic, data-driven approach to marketing, blending traditional and digital techniques to create customized solutions for your brand.",
        bg: "bg-gradient-to-br from-gray-900 to-gray-800",
        text: "text-gray-200",
        colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
        icon: Zap,
        gradient: "from-green-600 to-green-500",
        stats: "98% Client Satisfaction"
    },
    {
        title: "Performance",
        subtitle: "Measurable Impact",
        desc: "Our services are designed to deliver measurable results, helping you track and optimize your marketing efforts for maximum impact.",
        bg: "bg-white border-2 border-gray-100 shadow-lg",
        text: "text-gray-600",
        colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
        icon: Brain,
        gradient: "from-green-600 to-green-500",
        stats: "200% Avg. ROI"
    },
    {
        title: "Holistic",
        subtitle: "Seamless Integration",
        desc: "We seamlessly integrate traditional and digital marketing channels, ensuring a cohesive brand experience across all touchpoints.",
        bg: "bg-gradient-to-br from-green-50 to-white border border-green-100",
        text: "text-gray-700",
        colSpan: "col-span-1 md:col-span-2 lg:col-span-3",
        icon: Users,
        gradient: "from-green-600 to-green-500",
        stats: "360° Marketing Solutions"
    }
];

export default function PhilosophyGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header Section */}
                <motion.div 
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Our Methodology
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                        Why We{' '}
                        <span className="line-through text-gray-300">Exist</span>{' '}
                        <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                            Dominate.
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        We combine cutting-edge AI technology with human creativity to deliver 
                        unprecedented results for our clients.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(320px,auto)]">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={`${item.colSpan} ${item.bg} p-8 md:p-10 flex flex-col justify-between rounded-2xl relative overflow-hidden group transition-all duration-500 hover:shadow-2xl`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            {/* Gradient Border Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10`} style={{ padding: '2px' }} />
                            
                            {/* Icon Background */}
                            {item.icon && (
                                <div className="absolute -top-10 -right-10 opacity-10 group-hover:opacity-30 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
                                    <item.icon size={160} strokeWidth={1} />
                                </div>
                            )}

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon Circle */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                                    <item.icon className="text-white" size={28} />
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-green-600">
                                        {item.title}
                                    </h3>
                                    <h4 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${
                                        item.bg.includes('gray-900') ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        {item.subtitle}
                                    </h4>
                                </div>

                                <p className={`text-base leading-relaxed mb-6 ${item.text}`}>
                                    {item.desc}
                                </p>

                                {/* Stats Tag */}
                                {item.stats && (
                                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                                        item.bg.includes('gray-900') 
                                            ? 'bg-white/10 text-white' 
                                            : 'bg-green-50 text-green-700'
                                    }`}>
                                        <TrendingUp size={16} className={item.bg.includes('gray-900') ? 'text-green-400' : 'text-green-600'} />
                                        {item.stats}
                                    </div>
                                )}
                            </div>

                            {/* Bottom Decorative Line */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                        </motion.div>
                    ))}
                </div>

                {/* Additional Features Section */}
                <motion.div 
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    
                </motion.div>
            </div>
        </section>
    );
}