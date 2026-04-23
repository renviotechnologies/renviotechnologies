'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Globe, Search, FileText, TrendingUp, BarChart, Target, Video, ShieldCheck, Code, Megaphone, LineChart, Sparkles, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const services = [
    { title: 'App Development', icon: Smartphone, description: 'High-performance Android & iOS applications with stunning UI/UX.', popular: true, color: 'from-blue-500 to-cyan-500' },
    { title: 'Web Development', icon: Globe, description: 'Scalable, responsive websites and web applications.', popular: false, color: 'from-purple-500 to-indigo-500' },
    { title: 'Market Research', icon: Search, description: 'Qualitative & quantitative market analysis for informed decisions.', popular: false, color: 'from-emerald-500 to-teal-500' },
    { title: 'Marketing Strategy', icon: FileText, description: 'Data-driven marketing plans for sustainable growth.', popular: true, color: 'from-orange-500 to-red-500' },
    { title: 'Performance Marketing', icon: TrendingUp, description: 'ROI-focused advertising campaigns across all channels.', popular: false, color: 'from-pink-500 to-rose-500' },
    { title: 'SEO & Analytics', icon: BarChart, description: 'Visibility & actionable data insights to dominate search.', popular: false, color: 'from-yellow-500 to-amber-500' },
    { title: 'Lead Generation', icon: Target, description: 'High-quality lead conversion strategies that deliver.', popular: false, color: 'from-green-500 to-emerald-500' },
    { title: 'Video Content', icon: Video, description: 'Engaging brand storytelling through professional video.', popular: false, color: 'from-red-500 to-pink-500' },
    
];

export default function ServicesSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden" id="services">
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 mb-4"
                    >
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-800" />
                        <span className="text-gray-600 uppercase tracking-[0.2em] text-sm font-bold">What We Do</span>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-gray-800" />
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-gray-900"
                    >
                        Our <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Services</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg max-w-2xl mx-auto mt-4"
                    >
                        Comprehensive solutions to help your brand grow and succeed in the digital landscape
                    </motion.p>
                </div>

                {/* Services Grid - Premium Design */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
                            >
                                {/* Gradient Border Effect on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-gray-100 transition-all duration-500" />
                                
                                {/* Content */}
                                <div className="relative p-8">
                                    {/* Popular Badge */}
                                    {service.popular && (
                                        <div className="absolute top-4 right-4 z-10">
                                            <div className="flex items-center gap-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full shadow-lg">
                                                <Sparkles className="w-3 h-3" />
                                                <span className="text-[10px] font-bold uppercase tracking-wider">Popular</span>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {/* Icon with Gradient Background */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 shadow-lg transform group-hover: transition-transform duration-300`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition">
                                        {service.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-gray-500 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    
                                    {/* Link with Arrow */}
                                    <Link 
                                        href="/services" 
                                        className="inline-flex items-center gap-2 text-gray-400 group-hover:text-gray-900 font-medium transition-all duration-300 group/link"
                                    >
                                        <span>Learn More</span>
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                                
                                {/* Bottom Gradient Line */}
                                <div className={`h-1 bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                            </motion.div>
                        );
                    })}
                </motion.div>



                

                {/* Stats Section */}
               

                {/* CTA Banner - Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl"
                >
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                       
                    </div>
                    
                   
                </motion.div>
            </div>
        </section>
    );
}

// Add missing icon imports
import { Users, Headphones } from 'lucide-react';