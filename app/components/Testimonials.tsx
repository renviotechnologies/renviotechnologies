'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Users, Award, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function Testimonials() {
    const testimonials = [
        { text: "Flawless project delivery every single time", author: "Marketing Director" },
        { text: "Transformed our digital presence completely", author: "CEO, Tech Startup" },
        { text: "Best B2C marketing agency we've worked with", author: "Brand Manager" }
    ];

    return (
        <section className="py-24 bg-white">
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
                        <span className="text-gray-600 uppercase tracking-[0.2em] text-sm font-bold">Testimonials</span>
                        <div className="h-px w-8 bg-gray-800" />
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        Trusted by <span className="text-green-500">Industry Leaders</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-2xl mx-auto mt-4"
                    >
                        We are humbled when some of the biggest global brands trust us with their marketing campaigns
                    </motion.p>
                </div>

                {/* Main Quote Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-black rounded-2xl p-8 md:p-12 mb-16 text-center"
                >
                    <Quote className="absolute top-6 left-6 text-gray-700 w-16 h-16" />
                    <Quote className="absolute bottom-6 right-6 text-gray-700 w-16 h-16 rotate-180" />
                    
                    <div className="relative z-10">
                        <div className="flex justify-center mb-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            ))}
                        </div>

                        
                        <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-6 max-w-3xl mx-auto">
                            "Awesome B2C Marketing Agency. Flawless Project Delivery."
                        </h3>
                        
                        <Link 
                            href="/projects" 
                            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                        >
                            View Our Clients
                        </Link>
                        <br />
                        <br />
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-10 h-px bg-gray-600" />
                            <span className="text-gray-400">Senior Marketing Executive</span>
                            <div className="w-10 h-px bg-gray-600" />
                        </div>
                    </div>
                </motion.div>


            </div>
        </section>
    );
}

// Add TrendingUp import
import { TrendingUp } from 'lucide-react';