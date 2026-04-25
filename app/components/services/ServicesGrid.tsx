'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '@/lib/servicesData';
import { ArrowRight, Sparkles, TrendingUp, Zap, Shield, Users, BarChart, Code, Search, Palette, Globe } from 'lucide-react';

// Extended service data for 8 services (2 rows of 4)
const defaultServices = [
    {
        slug: "app-development",
        title: "App Development",
        desc: "Custom mobile applications that engage users and drive business growth with cutting-edge technology.",
        icon: Zap,
        features: ["iOS & Android", "React Native", "Flutter"],
        color: "from-green-600 to-green-500"
    },
    {
        slug: "web-development",
        title: "Web Development",
        desc: "High-performance websites and web applications built with modern frameworks and best practices.",
        icon: Code,
        features: ["React/Next.js", "Vue/Nuxt", "E-commerce"],
        color: "from-green-600 to-green-500"
    },
    {
        slug: "performance-marketing",
        title: "Performance Marketing",
        desc: "Data-driven campaigns that deliver measurable results and maximize ROI across all digital channels.",
        icon: TrendingUp,
        features: ["Google Ads", "Social Media Ads", "Programmatic"],
        color: "from-green-600 to-green-500"
    },
    {
        slug: "seo-analytics",
        title: "SEO & Analytics",
        desc: "Comprehensive SEO strategies and advanced analytics to improve visibility and drive organic growth.",
        icon: Search,
        features: ["Keyword Research", "Technical SEO", "Analytics"],
        color: "from-green-600 to-green-500"
    },
    {
        slug: "social-media",
        title: "Social Media Marketing",
        desc: "Engaging social media strategies that build communities, increase brand awareness, and drive conversions.",
        icon: Users,
        features: ["Content Creation", "Community Management", "Influencer Marketing"],
        color: "from-green-600 to-green-500"
    },
    {
        slug: "ai-solutions",
        title: "AI-Powered Solutions",
        desc: "Leverage artificial intelligence to automate processes, gain insights, and deliver personalized experiences.",
        icon: Sparkles,
        features: ["Chatbots", "Predictive Analytics", "Personalization"],
        color: "from-green-600 to-green-500"
    },
    {
        slug: "creative-design",
        title: "Creative Design",
        desc: "Stunning visual designs that capture attention and communicate your brand message effectively.",
        icon: Palette,
        features: ["UI/UX Design", "Brand Identity", "Motion Graphics"],
        color: "from-green-600 to-green-500"
    },
    {
        slug: "digital-strategy",
        title: "Digital Strategy",
        desc: "Comprehensive digital strategies that align with your business goals and drive sustainable growth.",
        icon: Globe,
        features: ["Market Analysis", "Growth Strategy", "Digital Transformation"],
        color: "from-green-600 to-green-500"
    }
];

export default function ServicesGrid() {
    const servicesList = services && services.length > 0 ? services : defaultServices;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                        What We Offer
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Our{' '}
                        <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                            Services
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-500 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive digital solutions powered by AI to accelerate your business growth
                    </p>
                </motion.div>

                {/* 4 Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesList.map((service, index) => (
                        <Link href={`/services/${service.slug}`} key={index} className="block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                                className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 h-full flex flex-col overflow-hidden hover:-translate-y-1"
                            >
                              
                                {/* Content */}
                                <div className="p-6 flex flex-col h-full">
                                    {/* Icon Container */}
                                    <div className="mb-5">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <service.icon className="text-green-600" size={24} strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                                        {service.desc}
                                    </p>

                                    {/* Features Tags */}
                                    {service.features && (
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {service.features.slice(0, 3).map((feature, i) => (
                                                <span key={i} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-md">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Learn More Link */}
                                    <div className="flex items-center text-xs font-semibold uppercase tracking-wider text-green-600 group-hover:text-green-700 mt-auto">
                                        <span>Learn More</span>
                                        <ArrowRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>

                                {/* Bottom Gradient on Hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* View All Services Button */}
                <motion.div 
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link href="/services">
                            <button className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                View All →
                            </button>
                        </Link>
                </motion.div>

                {/* CTA Section */}
                <motion.div 
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-10 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3">
                            Ready to Transform Your Business?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Let's discuss how our AI-powered solutions can help you achieve your goals
                        </p>
                        <Link href="/contact">
                            <button className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Get Started →
                            </button>
                        </Link>
                    </div>
                </motion.div>

               
            </div>
        </section>
    );
}