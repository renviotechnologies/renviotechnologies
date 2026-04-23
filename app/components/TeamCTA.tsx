'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Shield, Target, Heart, Users, CheckCircle } from 'lucide-react';

export default function TeamCTA() {
    const features = [
        { icon: Shield, text: "Enterprise Ready" },
        { icon: Target, text: "Startup Friendly" },
        { icon: Heart, text: "Personalized Care" },
        { icon: Users, text: "Dedicated Team" }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 mb-4"
                    >
                        <div className="h-px w-8 bg-gray-800" />
                        <span className="text-gray-600 uppercase tracking-[0.2em] text-sm font-bold">Our Promise</span>
                        <div className="h-px w-8 bg-gray-800" />
                    </motion.div>
                </div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5 mb-6">
                        <CheckCircle className="w-4 h-4 text-gray-700" />
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-700">Full-Service Agency</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Big enough to manage scale,
                        <span className="text-green-500 block mt-2">small enough to care</span>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Whether you're an established enterprise with defined processes or a self-funded startup 
                        looking to create a niche, we're here to make things work.
                    </p>

                    {/* Feature Icons */}
                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-2"
                            >
                                <feature.icon className="w-4 h-4 text-gray-600" />
                                <span className="text-sm text-">{feature.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/contact" 
                            className="group inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
                        >
                            Get In Touch
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                        </Link>
                        <Link 
                            href="/services" 
                            className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-gray-900 hover:text-gray-900 transition-all"
                        >
                            Explore Services
                        </Link>
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                                No long-term contracts
                            </span>
                            <span className="flex items-center gap-1">
                                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                                Free consultation
                            </span>
                            <span className="flex items-center gap-1">
                                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                                24/7 support
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}