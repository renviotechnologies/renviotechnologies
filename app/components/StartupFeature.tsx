'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Star, TrendingUp, Shield, Zap, Users, Award } from 'lucide-react';

export default function StartupFeature() {
    const features = [
        { icon: TrendingUp, title: '3x Growth', desc: 'Average ROI increase' },
        { icon: Shield, title: '95% Retention', desc: 'Client satisfaction' },
        { icon: Zap, title: 'Fast Setup', desc: 'Launch in 2 weeks' },
        { icon: Users, title: '50+ Brands', desc: 'Successfully scaled' },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                
                {/* Hero Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5 mb-6">
                        <Award className="w-4 h-4 text-gray-700" />
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-700">GTM Acceleration Program</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                        Scale Your B2C Brand
                        <span className="text-green-500 block">Globally</span>
                    </h1>
                    <p className="text-lg text-gray-500 mb-8">
                        Born from Kestone Global's marketing DNA — proven strategies for ambitious consumer brands.
                    </p>
                </div>

               
                {/* Split Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                        <div className="relative h-96 w-full">
                            <Image src="/images/startup-cafe.png" alt="Growth" fill className="object-cover" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                            <p className="text-white font-semibold">Trusted by industry leaders</p>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to take your brand to the next level?</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Our GTM Acceleration Program combines enterprise-grade frameworks with startup agility. 
                            We help consumer brands unlock new markets, optimize customer acquisition, and scale sustainably.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {['Data-driven growth strategies', 'Cross-border market expansion', 'Dedicated mentorship', 'Real-time analytics'].map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                                    <span className="text-gray-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}