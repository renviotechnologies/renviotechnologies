'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy,Users, Star, Award, Zap, Code, PenTool, TrendingUp, Search, Brain, Palette, Rocket, Shield, Sparkles, Target, Globe, Heart, Coffee, Briefcase, Crown } from 'lucide-react';

const departments = [
    { name: 'Social Media Sorcerers', icon: Users, description: 'Viral content & community growth', stats: '10M+ Reach', color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50', text: 'text-blue-600' },
    { name: 'Digital Strategy Geniuses', icon: Brain, description: 'Data-driven roadmaps to success', stats: '95% Success Rate', color: 'from-purple-500 to-pink-500', bg: 'bg-purple-50', text: 'text-purple-600' },
    { name: 'Performance Marketing Ninjas', icon: TrendingUp, description: 'ROI-focused campaign management', stats: '300% Avg. ROI', color: 'from-orange-500 to-red-500', bg: 'bg-orange-50', text: 'text-orange-600' },
    { name: 'Creative Design & Video Wizards', icon: Palette, description: 'Stunning visuals & animations', stats: '500+ Projects', color: 'from-pink-500 to-rose-500', bg: 'bg-pink-50', text: 'text-pink-600' },
    { name: 'Innovative Copywriting', icon: PenTool, description: 'Compelling stories that convert', stats: '1M+ Words Written', color: 'from-indigo-500 to-purple-500', bg: 'bg-indigo-50', text: 'text-indigo-600' },
    { name: 'SEO and Analytics Experts', icon: Search, description: 'First-page rankings guaranteed', stats: '50+ Keywords', color: 'from-teal-500 to-emerald-500', bg: 'bg-teal-50', text: 'text-teal-600' },
    { name: 'Web Development Aces', icon: Code, description: 'High-performance web solutions', stats: '100+ Websites', color: 'from-slate-500 to-gray-500', bg: 'bg-slate-50', text: 'text-slate-600' },
    { name: 'Client Service Department', icon: Star, description: '24/7 dedicated support', stats: '98% Satisfaction', color: 'from-amber-500 to-yellow-500', bg: 'bg-amber-50', text: 'text-amber-600' }
];

const cultureValues = [
    { icon: Heart, title: "Passion First", description: "We love what we do, and it shows in every project", color: "text-red-500", bg: "bg-red-50" },
    { icon: Zap, title: "Innovation Driven", description: "Always pushing boundaries with cutting-edge solutions", color: "text-yellow-500", bg: "bg-yellow-50" },
    { icon: Users, title: "Collaborative Spirit", description: "Together we achieve more for our clients", color: "text-blue-500", bg: "bg-blue-50" },
    { icon: Trophy, title: "Results Focused", description: "Measurable outcomes with every campaign", color: "text-green-500", bg: "bg-green-50" }
];

const leadershipTeam = [
    { name: "Sarah Johnson", role: "CEO & Founder", image: "/team/sarah.jpg", icon: Crown },
    { name: "Michael Chen", role: "CTO", image: "/team/michael.jpg", icon: Code },
    { name: "Emily Rodriguez", role: "Creative Director", image: "/team/emily.jpg", icon: Palette }
];

export default function TeamCulture() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
                        <Sparkles size={14} className="text-gray-600" />
                        <span className="text-gray-600 font-bold tracking-widest uppercase text-xs">Our Powerhouse</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Team &{' '}
                        <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                            Culture
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-300 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A powerhouse of creative minds with specialized departments dedicated to your success.
                    </p>
                </motion.div>

                {/* Stats Banner - Redesigned */}
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {[
                        { value: '50+', label: 'Team Members', icon: Users, gradient: 'from-blue-500 to-cyan-500' },
                        { value: '8', label: 'Specialized Depts', icon: Briefcase, gradient: 'from-purple-500 to-pink-500' },
                        { value: '500+', label: 'Projects Delivered', icon: Rocket, gradient: 'from-orange-500 to-red-500' },
                        { value: '98%', label: 'Client Retention', icon: Heart, gradient: 'from-green-500 to-emerald-500' }
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="relative group"
                        >
                            <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <stat.icon className="text-white" size={24} />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Departments Grid - Enhanced */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Our Specialized Departments
                        </h3>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Each team brings unique expertise to deliver exceptional results for our clients
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {departments.map((dept, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05, duration: 0.5 }}
                                whileHover={{ y: -8 }}
                                className="group"
                            >
                                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                                    {/* Icon Container */}
                                    <div className={`w-14 h-14 ${dept.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                        <dept.icon className={dept.text} size={28} strokeWidth={1.5} />
                                    </div>

                                    {/* Title */}
                                    <h3 className={`text-lg font-bold text-gray-900 mb-2 group-hover:${dept.text} transition-colors duration-300`}>
                                        {dept.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                        {dept.description}
                                    </p>

                                    {/* Stats Tag */}
                                    <div className="inline-block">
                                        <span className={`inline-flex items-center gap-1 px-3 py-1 ${dept.bg} ${dept.text} text-xs font-semibold rounded-full`}>
                                            <Target size={10} />
                                            {dept.stats}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Culture Values - New Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    
                </motion.div>

              

               
            </div>
        </section>
    );
}

// Missing ArrowRight import
import { ArrowRight } from 'lucide-react';