'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check, Video, Search, FileText, Target, ShieldCheck, Palette, TrendingUp, BarChart, Sparkles, Zap, Brain } from 'lucide-react';

const deepDives = [
    {
        title: "Captivating Visuals",
        subtitle: "Video Content Creation",
        content: "Crafting captivating video content is crucial for brands to engage their audience and showcase their products or services in a compelling manner. Our team of creative professionals specializes in producing high-quality, attention-grabbing videos that tell your brand's story and drive meaningful connections with your target market.",
        benefits: ["High-quality Production", "Attention-Grabbing", "Brand Storytelling", "Meaningful Connections"],
        image: "/images/services/video_content_1768164776471.png",
        icon: Video
    },
    {
        title: "Deep Understanding",
        subtitle: "Market Research",
        content: "We employ a multi-faceted approach to understand your audience:\n\n• Qualitative Research: In-depth interviews and focus groups to understand audience needs, pain points, and preferences.\n• Quantitative Analysis: Analysis of large-scale survey data to identify statistically significant trends.\n• Observational Studies: Ethnographic research observing customers in natural environments.",
        benefits: ["Audience Needs", "Pain Points", "Significant Trends", "Natural Behaviors"],
        image: "/images/services/market_research_1768164791783.png",
        icon: Search
    },
    {
        title: "Strategy First",
        subtitle: "Marketing Plan Development",
        content: "We take a strategic, data-driven approach to marketing, blending traditional and digital techniques to create customized solutions for your brand. Our comprehensive planning includes data-driven insights and creative ideation to ensure your marketing efforts yield maximum impact.",
        benefits: ["Comprehensive Planning", "Data-Driven Insights", "Creative Ideation", "Customized Solutions"],
        image: "/images/services/marketing_strategy_1768164808685.png",
        icon: Target
    }
];

export default function ServiceDeepDive() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header Section */}
                <motion.div 
                    className="max-w-4xl mx-auto mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-green-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Why Choose Renvio?
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                        We Go{' '}
                        <span className="bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">
                            Deeper
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-500 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        We go deeper than surface-level deliverables. We understand the business mechanics behind marketing and technology.
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {deepDives.map((dive, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex flex-col ${
                                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                            } items-center gap-10 lg:gap-16`}
                        >
                            {/* Content Section */}
                            <div className="flex-1">
                                {/* Icon and Subtitle */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-green-900/30 rounded-xl border border-green-500/30">
                                        <dive.icon className="text-green-500" size={24} />
                                    </div>
                                    <span className="text-green-500 font-bold tracking-widest uppercase text-sm">
                                        {dive.subtitle}
                                    </span>
                                </div>
                                
                                {/* Title */}
                                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                    {dive.title}
                                </h3>
                                
                                {/* Description */}
                                <div className="text-gray-400 leading-relaxed mb-8 whitespace-pre-line text-lg">
                                    {dive.content.split('\n\n').map((paragraph, i) => (
                                        <p key={i} className="mb-4 last:mb-0">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                                
                                {/* Benefits Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {dive.benefits.map((benefit, i) => (
                                        <motion.div 
                                            key={i} 
                                            className="flex items-center text-gray-300 font-medium group"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <div className="w-6 h-6 rounded-full bg-green-900/30 border border-green-500/30 flex items-center justify-center mr-3 group-hover:bg-green-600 transition-all duration-300">
                                                <Check size={14} className="text-green-500 group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            <span className="group-hover:text-white transition-colors duration-300">
                                                {benefit}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="flex-1 relative">
                                <div className="relative h-[300px] lg:h-[400px] w-full bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800 group">
                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    {/* Image */}
                                    <Image
                                        src={dive.image}
                                        alt={dive.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        quality={90}
                                    />
                                    
                                    {/* Green Border on Hover */}
                                    <div className="absolute inset-0 border-2 border-green-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    
                                    {/* Icon Badge */}
                                    <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 border border-green-500/30">
                                        <dive.icon className="text-green-500" size={20} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                

                
            </div>
        </section>
    );
}