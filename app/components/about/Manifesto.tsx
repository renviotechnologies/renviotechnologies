'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Manifesto() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen  w-full  flex items-center justify-center bg-black text-white overflow-hidden px-6 pt-44"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Grid Pattern */}
                <div 
                    className="absolute inset-0 opacity-20 pointer-events-none" 
                    style={{ 
                        backgroundImage: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 1px, transparent 1px)', 
                        backgroundSize: '50px 50px' 
                    }}
                />
                
                {/* Gradient Orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-green-600/20 blur-[100px]"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-green-600/15 blur-[100px]"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            <motion.div
                className="relative z-10 max-w-6xl mx-auto text-center"
                style={{ y, opacity }}
            >
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block mt-20 px-4 py-2   text-sm font-semibold tracking-wider text-green-400 uppercase bg-green-600/10 rounded-full border border-green-600/30">
                        AI Powered Innovation
                    </span>
                </motion.div>

                <motion.h1
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter mb-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <span className="bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent">
                        Renvio
                    </span>
                    <br />
                    <span className="text-green-500">
                        AI Powered
                    </span>
                    <span className="text-white"> Marketing Agency</span>
                </motion.h1>

                <motion.div
                    className="overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold">
                        Helping Brands <span className="text-green-500">Grow</span> Exponentially
                    </h2>
                </motion.div>

                <motion.div
                    className="mt-12 text-base md:text-lg text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <p className="leading-relaxed">
                        Renvio is an AI-powered pioneering advertising and marketing company dedicated
                        to helping businesses of all sizes achieve their maximum potential through innovative
                        and effective marketing strategies. We are committed to driving brand visibility,
                        customer engagement, and lead generation for our clients.
                    </p>
                    
                </motion.div>

                <motion.div
                    className="mt-16 flex flex-col items-center gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                   

                    {/* Scroll Indicator */}
                    <motion.div
                        className="flex flex-col items-center gap-2 cursor-pointer"
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <span className="text-sm text-gray-400 uppercase tracking-wider">Scroll to explore</span>
                        <div className="h-12 w-0.5 bg-gradient-to-b from-green-500 to-transparent"></div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    );
}