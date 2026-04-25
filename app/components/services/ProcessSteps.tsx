'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Target, Rocket, TrendingUp, Compass, Map, Cpu, BarChart } from 'lucide-react';

const steps = [
    {
        num: "01",
        title: "Discovery",
        desc: "We dive deep into your business model, audit existing assets, and identify growth bottlenecks.",
        icon: Search,
        color: "from-green-600 to-green-500"
    },
    {
        num: "02",
        title: "Strategy",
        desc: "We engineer a custom roadmap combining tech stack selection, channel strategy, and content plan.",
        icon: Target,
        color: "from-green-600 to-green-500"
    },
    {
        num: "03",
        title: "Execution",
        desc: "Our agile pods deploy rapid sprints—launching campaigns, building features, and shipping code.",
        icon: Rocket,
        color: "from-green-600 to-green-500"
    },
    {
        num: "04",
        title: "Optimization",
        desc: "We analyze performance data in real-time, iterating to maximize ROI and scale what works.",
        icon: TrendingUp,
        color: "from-green-600 to-green-500"
    }
];

export default function ProcessSteps() {
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
                        Our Process
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        How We{' '}
                        <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                            Deliver Results
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-500 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A proven methodology that transforms your vision into measurable success
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line - Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-green-500 -translate-y-1/2"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group"
                            >
                                {/* Card */}
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full hover:-translate-y-2">
                                    
                                    {/* Step Number Circle */}
                                    <div className="relative pt-8 pb-4">
                                        <div className="w-20 h-20 mx-auto bg-white border-2 border-gray-200 rounded-full flex items-center justify-center relative z-10 group-hover:border-green-600 transition-all duration-500 shadow-md group-hover:shadow-xl">
                                            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                                                {step.num}
                                            </span>
                                        </div>
                                        
                                        {/* Decorative Circle Pulse */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-24 h-24 rounded-full bg-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-100"></div>
                                        </div>
                                    </div>

                                    {/* Icon */}
                                    <div className="flex justify-center mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <step.icon className="text-green-600" size={24} strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="px-6 pb-8 text-center">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>

                                    {/* Bottom Gradient Border */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                                </div>

                                {/* Connector Arrow (Desktop) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                                        <div className="w-8 h-8 bg-green-600 border border-gray-200 rounded-full flex items-center justify-center shadow-md">
                                            <div className="w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>


                {/* Bottom CTA */}
                <motion.div 
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 text-gray-600">
                        <span className="text-sm">Ready to start your journey?</span>
                        <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                            Let's Talk →
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}