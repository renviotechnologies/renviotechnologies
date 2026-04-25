'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Twitter, Quote, Target, Rocket, Lightbulb, Users, Zap, Award } from 'lucide-react';

const founders = [
   
    {
        name: "Abhishek Patil",
        role: "Co-Founder & CTO",
        expertise: "Developer | AI & Machine Learning",
        image: "/images/abhishek_jamle.jpeg",
        bio: "AI visionary with deep expertise in machine learning algorithms and predictive analytics. Building intelligent systems that revolutionize marketing automation.",
        quote: "Data is the new oil, but AI is the refinery. We transform raw data into actionable insights that drive exponential growth for our clients.",
        icon: Zap,
        achievements: ["ML Expert", "Patent Holder", "10+ AI Solutions Deployed"]
    },
    {
        name: "Abhishek Jamle",
        role: "Co-Founder & CMO",
        expertise: "Developer | Growth Marketing",
        image: "/images/abhishek_patil.jpeg",
        bio: "Growth hacker specializing in customer acquisition and retention strategies. Proven track record of scaling brands from 0 to 7 figures.",
        quote: "Growth isn't just about acquiring customers—it's about building relationships that last. We combine creativity with data to create unforgettable brand experiences.",
        icon: Target,
        achievements: ["Growth Hacker of the Year", "100+ Brands Scaled", "8x ROI Average"]
    },
    {
        name: "Virendra Parmar",
        role: "Co-Founder & COO",
        expertise: "Social Media Expert | Operations & Strategy",
        image: "/images/virendra_parmar.jpeg",
        bio: "Operations expert with a passion for building scalable systems and processes. Ensures seamless delivery of exceptional client experiences.",
        quote: "Excellence is not a skill, it's an attitude. We've built Renvio to deliver nothing short of exceptional results through streamlined operations.",
        icon: Users,
        achievements: ["Operations Expert", "Client Satisfaction Leader", "Process Innovation"]
    }
];

export default function FounderQuote() {
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
                        Meet The Visionaries
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                        Behind{' '}
                        <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                            Renvio
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A collective of industry experts united by a shared vision to revolutionize marketing through AI innovation.
                    </p>
                </motion.div>

                {/* Founders Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {founders.map((founder, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                        >
                            {/* Gradient Top Border */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                            <div className="flex flex-col md:flex-row gap-6 p-8">
                                {/* Image Section */}
                                <div className="w-full md:w-1/3">
                                    <div className="relative overflow-hidden rounded-2xl group-hover:rounded-2xl transition-all duration-500">
                                        <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
                                            <Image
                                                src={founder.image}
                                                alt={founder.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                        
                                        {/* Social Links */}
                                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <button className="p-2 bg-white rounded-full hover:bg-green-600 transition-colors group/btn">
                                                <Linkedin size={18} className="text-gray-700 group-hover/btn:text-white" />
                                            </button>
                                            <button className="p-2 bg-white rounded-full hover:bg-green-600 transition-colors group/btn">
                                                <Twitter size={18} className="text-gray-700 group-hover/btn:text-white" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1">
                                    {/* Icon and Title */}
                                    <div className="flex items-start gap-3 mb-4">
                                        <div className="p-2 bg-green-100 rounded-xl">
                                            <founder.icon className="text-green-600" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                                            <p className="text-green-600 font-semibold text-sm">{founder.role}</p>
                                        </div>
                                    </div>

                                    {/* Expertise */}
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                                            {founder.expertise}
                                        </span>
                                    </div>

                                    {/* Bio */}
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {founder.bio}
                                    </p>

                                    {/* Quote */}
                                    <div className="bg-gray-50 rounded-xl p-4 mb-4 relative">
                                        <Quote size={20} className="text-green-600 absolute top-3 left-3 opacity-30" />
                                        <p className="text-gray-700 text-sm italic pl-6">
                                            "{founder.quote}"
                                        </p>
                                    </div>

                                    {/* Achievements */}
                                    <div className="flex flex-wrap gap-2">
                                        {founder.achievements.map((achievement, i) => (
                                            <span key={i} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                                {achievement}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Core Values Section */}
                <motion.div 
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
                        Our Collective Vision
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Lightbulb className="text-green-600" size={28} />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Innovation First</h4>
                            <p className="text-gray-600 text-sm">Pushing boundaries with cutting-edge AI technology</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="text-green-600" size={28} />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Client Success</h4>
                            <p className="text-gray-600 text-sm">Your growth is our ultimate metric of success</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="text-green-600" size={28} />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Excellence</h4>
                            <p className="text-gray-600 text-sm">Delivering nothing but the best in everything we do</p>
                        </div>
                    </div>
                </motion.div>

                        </div>
        </section>
    );
}