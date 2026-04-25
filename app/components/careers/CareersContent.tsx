'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Briefcase, MapPin, Clock, Users, Coffee, Laptop, BookOpen, Heart, Globe } from 'lucide-react';

const positions = [
    {
        title: "Senior Growth Strategist",
        location: "New Delhi / Remote",
        type: "Full-time",
        department: "Marketing",
        desc: "Lead go-to-market strategies for our Series A clients. You live and breathe CAC, LTV, and retention metrics. Drive growth across multiple channels and optimize campaigns for maximum ROI.",
        requirements: ["5+ years experience", "Data-driven mindset", "Leadership skills"]
    },
    {
        title: "Full Stack Developer (Next.js)",
        location: "Remote",
        type: "Full-time",
        department: "Engineering",
        desc: "Build pixel-perfect digital experiences. Mastery of React, Node.js, and modern CSS frameworks required. Create scalable web applications that power our clients' success.",
        requirements: ["React/Next.js expert", "Node.js", "3+ years experience"]
    },
    {
        title: "Content Marketing Lead",
        location: "New Delhi",
        type: "Hybrid",
        department: "Content",
        desc: "Shape the voice of high-growth startups. You will manage editorial calendars and lead a team of AI + Human writers. Create compelling narratives that drive engagement.",
        requirements: ["SEO expertise", "Editorial management", "Creative writing"]
    }
];

const perks = [
    { icon: Laptop, text: "Remote-first capabilities", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Briefcase, text: "Competitive equity packages", color: "text-purple-600", bg: "bg-purple-50" },
    { icon: BookOpen, text: "Annual learning budget", color: "text-green-600", bg: "bg-green-50" },
    { icon: Heart, text: "Mental health support", color: "text-red-600", bg: "bg-red-50" },
    { icon: Users, text: "Global team retreats", color: "text-orange-600", bg: "bg-orange-50" },
    { icon: Coffee, text: "Latest tech equipment", color: "text-teal-600", bg: "bg-teal-50" }
];

const stats = [
    { value: "100%", label: "Remote Culture", icon: Globe },
    { value: "5+", label: "Open Positions", icon: Briefcase },
    { value: "4.9⭐", label: "Employee Rating", icon: Users }
];

export default function CareersContent() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 font-bold text-sm uppercase tracking-widest rounded-full mb-4">
                        <Zap size={14} />
                        Join Our Team
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Built for Those Who{' '}
                        <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                            Move Fast
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-300 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We are not a traditional agency. We are a growth engine powered by technology and creativity.
                        We look for people who are obsessed with solving problems.
                    </p>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-3">
                                <stat.icon size={24} className="text-gray-600" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Column - Culture & Perks */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-gray-50 rounded-3xl p-8 h-full">
                            <div className="mb-8">
                                <span className="text-gray-500 font-bold tracking-widest uppercase text-sm mb-2 block">Our Culture</span>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Why Join Renvio?
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We are a growth engine powered by technology and creativity. We look for people 
                                    who are obsessed with solving problems and aren't afraid to break things to make them better.
                                </p>
                            </div>

                            {/* Perks Grid */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Perks & Benefits</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {perks.map((perk, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 }}
                                            className={`flex items-center gap-3 p-3 ${perk.bg} rounded-xl`}
                                        >
                                            <perk.icon size={18} className={perk.color} />
                                            <span className="text-sm font-medium text-gray-700">{perk.text}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-100">
                                <p className="text-gray-600 italic text-sm leading-relaxed">
                                    "Renvio gave me the freedom to work remotely while working on cutting-edge AI marketing projects. 
                                    The team culture is incredible and the growth opportunities are endless."
                                </p>
                                <div className="flex items-center gap-3 mt-4">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm">Priya Sharma</div>
                                        <div className="text-xs text-gray-500">Senior Growth Strategist</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Open Positions */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-6">
                            <span className="text-gray-500 font-bold tracking-widest uppercase text-sm mb-2 block">Join The Team</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Open Positions
                            </h3>
                        </div>

                        <div className="space-y-5">
                            {positions.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition">
                                                {job.title}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                                    <MapPin size={12} />
                                                    {job.location}
                                                </span>
                                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                                    <Clock size={12} />
                                                    {job.type}
                                                </span>
                                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                                    <Briefcase size={12} />
                                                    {job.department}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="inline-flex px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full">
                                            Hot Job 🔥
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        {job.desc}
                                    </p>

                                    {/* Requirements */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {job.requirements.map((req, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-md">
                                                {req}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white font-semibold text-sm rounded-full hover:bg-gray-800 transition-all duration-300 group-hover:gap-3">
                                        Apply Now
                                        <ArrowRight size={16} />
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        {/* No Match Found */}
                        <div className="mt-8 text-center p-6 bg-gray-50 rounded-2xl">
                            <p className="text-gray-500 text-sm">
                                Don't see a perfect fit? 
                                <button className="ml-2 text-gray-900 font-semibold hover:underline">
                                    Send us your resume →
                                </button>
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="mt-20 text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Ready to Make an Impact?
                    </h3>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join us in building the future of AI-powered marketing. We're looking for passionate individuals 
                        who want to shape the industry.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                            View All Positions
                        </button>
                        <button className="px-8 py-3 bg-gray-700 text-white rounded-full font-semibold hover:bg-gray-600 transition-all duration-300">
                            Join Talent Pool
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}