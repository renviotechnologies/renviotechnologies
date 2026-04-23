'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Globe, Search, FileText, TrendingUp, BarChart, Target, Video, ShieldCheck, Code, Megaphone, LineChart } from 'lucide-react';
import Link from 'next/link';

const services = [
    { title: 'App Development', icon: Smartphone, description: 'High-performance Android & iOS applications.', popular: true },
    { title: 'Web Development', icon: Globe, description: 'Scalable websites and web applications.', popular: false },
    { title: 'Market Research', icon: Search, description: 'Qualitative & quantitative market analysis.', popular: false },
    { title: 'Marketing Strategy', icon: FileText, description: 'Data-driven marketing plans for growth.', popular: true },
    { title: 'Performance Marketing', icon: TrendingUp, description: 'ROI-focused advertising campaigns.', popular: false },
    { title: 'SEO & Analytics', icon: BarChart, description: 'Visibility & actionable data insights.', popular: false },
    { title: 'Lead Generation', icon: Target, description: 'High-quality lead conversion strategies.', popular: false },
    { title: 'Video Content', icon: Video, description: 'Engaging brand storytelling through video.', popular: false },
    { title: 'Reputation Management', icon: ShieldCheck, description: 'Digital brand perception monitoring.', popular: false },
];

export default function ServicesSection() {
    return (
        <section className="py-24 bg-white" id="services">
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
                        <span className="text-gray-600 uppercase tracking-[0.2em] text-sm font-bold">What We Do</span>
                        <div className="h-px w-8 bg-gray-800" />
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        Our Services
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-2xl mx-auto mt-4"
                    >
                        Comprehensive solutions to help your brand grow and succeed in the digital landscape
                    </motion.p>
                </div>

                {/* Services Grid - Card Style 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200"
                        >
                            {/* Popular Badge */}
                            {service.popular && (
                                <div className="absolute top-4 right-4">
                                    <span className="text-[10px] font-bold uppercase bg-gray-800 text-white px-2 py-1 rounded-full">
                                        Popular
                                    </span>
                                </div>
                            )}
                            
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-gray-900 group-hover:bg-gray-800 transition-all duration-300 flex items-center justify-center mb-5">
                                <service.icon className="w-7 h-7 text-white" />
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition">
                                {service.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                {service.description}
                            </p>
                            
                            {/* Link */}
                            <Link href="/services" className="inline-flex items-center text-gray-400 group-hover:text-gray-800 text-sm font-medium transition">
                                Learn More 
                                <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-gray-900 rounded-2xl overflow-hidden mt-12"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-50" />
                    <div className="relative p-8 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Need a Custom Solution?</h3>
                            <p className="text-gray-300">Let's discuss how we can help your business grow</p>
                        </div>
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center gap-2 mt-4 md:mt-0 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                        >
                            Get in Touch
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>

               
            </div>
        </section>
    );
}