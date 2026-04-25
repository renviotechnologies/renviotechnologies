'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Users, Award, Rocket, Target, Heart, Star, Zap, Crown } from 'lucide-react';

const milestones = [
    { year: '2025', event: 'The Birth of Renvio', description: 'Founded with a vision to revolutionize marketing through AI-powered solutions and innovative strategies', isMain: true },
    { year: '2025', event: 'Breaking Barriers', description: 'Crossed 10+ brands milestone and expanded service offerings within first year' },
    { year: '2026', event: 'Global Recognition', description: 'Expanded to international markets including Canada, USA, and UAE' },
    { year: '2026', event: 'AI Innovation Hub', description: 'Launched cutting-edge AI solutions for personalized marketing at scale' },
    { year: '2027', event: 'The Future', description: 'Building the next generation of iconic brands with revolutionary technology' }
];

const achievements = [
    { icon: Users, number: '100K+', label: 'Lives Touched' },
    { icon: Award, number: '30+', label: 'Brands Built' },
    { icon: TrendingUp, number: '5M+', label: 'Reach Generated' },
    { icon: Sparkles, number: '∞', label: 'Creative Ideas' }
];

export default function VisualJourneyHero() {
    return (
        <section className="relative py-32 bg-black overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Grid Pattern */}
                <div 
                    className="absolute inset-0 opacity-10" 
                    style={{ 
                        backgroundImage: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 1px, transparent 1px)', 
                        backgroundSize: '50px 50px' 
                    }}
                />
                
                {/* Gradient Orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-600/5 rounded-full blur-3xl" />
                
                {/* Floating Particles */}
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-green-500 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Main Hero Content */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-block mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-green-600/10 border border-green-500/30 rounded-full text-green-500 font-bold text-sm uppercase tracking-widest backdrop-blur-sm">
                            <Sparkles size={16} />
                            Born in 2025
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        From Vision to<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-400 to-green-600">
                            Revolution
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Every brand we build carries our innovation. Every campaign tells a story of excellence.
                        Every solution is a testament to our commitment to transforming the marketing landscape.
                    </motion.p>
                </motion.div>

              
              

                {/* Timeline */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Journey to Greatness
                        </h2>
                        <p className="text-gray-400">
                            Every milestone, every breakthrough, every triumph—this is our story in the making
                        </p>
                    </div>

                    {/* Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-600 via-green-500 to-green-600 opacity-40" />

                    <div className="space-y-12 md:space-y-16">
                        {milestones.map((milestone, idx) => (
                            <motion.div
                                key={idx}
                                className={`flex flex-col md:flex-row items-center gap-8 ${
                                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                            >
                                {/* Content */}
                                <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                                    <div className={`inline-block px-4 py-2 ${milestone.isMain ? 'bg-green-600/20 border-green-500/50' : 'bg-green-600/10 border-green-500/30'} border rounded-full mb-3`}>
                                        <span className={`${milestone.isMain ? 'text-green-400' : 'text-green-500'} font-bold text-lg`}>
                                            {milestone.year}
                                        </span>
                                    </div>
                                    <h3 className={`text-2xl font-bold ${milestone.isMain ? 'text-green-400' : 'text-white'} mb-2`}>
                                        {milestone.event}
                                        {milestone.isMain && <Zap size={20} className="inline-block ml-2 text-green-500" />}
                                    </h3>
                                    <p className="text-gray-400">
                                        {milestone.description}
                                    </p>
                                </div>

                                {/* Center Dot */}
                                <div className="relative flex-shrink-0">
                                    <div className={`w-6 h-6 ${milestone.isMain ? 'bg-green-400' : 'bg-green-500'} rounded-full border-4 border-black shadow-lg shadow-green-500/50`} />
                                    <div className={`absolute inset-0 w-6 h-6 ${milestone.isMain ? 'bg-green-400' : 'bg-green-500'} rounded-full animate-ping opacity-75`} />
                                </div>

                                {/* Spacer for alignment */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Emotional Closing */}
                <motion.div
                    className="text-center mt-24 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="p-8 md:p-12 bg-gradient-to-br from-green-600/10 to-green-500/5 rounded-3xl border border-green-500/20 backdrop-blur-sm">
                        {/* Quote Icon */}
                        <div className="text-6xl text-green-500/20 font-serif mb-4">"</div>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic">
                            "Born in 2025 with a vision to revolutionize marketing. We're not just building a company—
                            we're building the future of AI-powered marketing. Every day, we push boundaries, challenge norms,
                            and create <span className="font-bold text-green-500">extraordinary results</span> for our clients."
                        </p>
                        <div className="mt-6 text-gray-500 font-semibold">
                            — The Renvio Team
                        </div>
                        {/* Decorative Line */}
                        <div className="w-12 h-0.5 bg-gradient-to-r from-green-600 to-green-500 mx-auto mt-6 rounded-full"></div>
                        
                        {/* Founding Year Badge */}
                        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-green-600/10 rounded-full border border-green-500/20">
                            <Crown size={14} className="text-green-500" />
                            <span className="text-xs text-green-400 font-semibold">Est. 2025</span>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Decorative Element */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
            </div>
        </section>
    );
}