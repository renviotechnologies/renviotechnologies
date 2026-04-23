'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Target, Award, Globe, Zap, Shield } from 'lucide-react';

const stats = [
    { label: 'Brands Scaled', value: '30+', icon: Users },
    { label: 'Years of Growth', value: '1.5', icon: TrendingUp },
    { label: 'Client Retention', value: '95%', icon: Award },
    { label: 'Projects Delivered', value: '50+', icon: Target },
];

const values = [
    { icon: Zap, title: 'AI-Powered', desc: 'Leveraging cutting-edge AI tools' },
    { icon: Globe, title: 'Global Reach', desc: 'India, Canada, USA markets' },
    { icon: Shield, title: 'Growth Partner', desc: 'Not just a vendor' },
];

export default function AboutSection() {
    return (
        <section className="py-24 bg-white" id="about">
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
                        <span className="text-gray-600 uppercase tracking-[0.2em] text-sm font-bold">Who We Are</span>
                        <div className="h-px w-8 bg-gray-800" />
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        More Than Just An Agency.
                        <span className="text-green-500 block">We Are Your Growth Partners.</span>
                    </motion.h2>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    
                    {/* Left Content */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Renvio – Powered by AI is a full-service startup building, branding, marketing, and technology company. 
                            We work as a growth partner, not a vendor — combining AI tools, human creativity, and execution clarity 
                            to deliver real business outcomes.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            In just 1.5 years, we've built and scaled 30+ brands across India and international markets including 
                            Canada and the USA. We leverage cutting-edge technology to solve complex business challenges.
                        </p>
                        
                        {/* Value Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            {values.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition"
                                >
                                    <item.icon className="w-6 h-6 text-gray-700 mx-auto mb-2" />
                                    <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                                    <p className="text-xs text-gray-500">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <Link 
                            href="/about" 
                            className="group inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all"
                        >
                            Read Our Story
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                        </Link>
                    </motion.div>

                    {/* Right Stats Grid */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="grid grid-cols-2 gap-5">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-all hover:-translate-y-1"
                                >
                                    <stat.icon className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                                        {stat.value}
                                    </h3>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Trust Badge */}
                        <div className="mt-6 bg-gray-900 rounded-2xl p-5 text-center">
                            <p className="text-white text-sm font-medium mb-2">Trusted by brands across</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {['India', 'Canada', 'USA', 'UAE'].map((country, i) => (
                                    <span key={i} className="text-xs text-gray-300 bg-gray-800 px-3 py-1 rounded-full">
                                        {country}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}