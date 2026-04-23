'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Star, TrendingUp, Shield, Zap, Users, Award, Rocket, Globe, BarChart3, Clock, CheckCircle2, Sparkles } from 'lucide-react';

export default function StartupFeature() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const features = [
        { icon: TrendingUp, title: '3x Growth', desc: 'Average ROI increase', color: 'from-emerald-500 to-teal-500' },
        { icon: Shield, title: '95% Retention', desc: 'Client satisfaction', color: 'from-blue-500 to-indigo-500' },
        { icon: Zap, title: 'Fast Setup', desc: 'Launch in 2 weeks', color: 'from-amber-500 to-orange-500' },
        { icon: Users, title: '50+ Brands', desc: 'Successfully scaled', color: 'from-purple-500 to-pink-500' },
    ];

    const benefits = [
        { icon: BarChart3, text: 'Data-driven growth strategies' },
        { icon: Globe, text: 'Cross-border market expansion' },
        { icon: Rocket, text: 'Dedicated mentorship' },
        { icon: Clock, text: 'Real-time analytics' },
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
            {/* Background Decor - same as before */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-50 to-blue-50 rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                
                {/* Hero Section */}
                <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full px-4 py-1.5 mb-6 shadow-lg shadow-emerald-500/20">
                        <Sparkles className="w-4 h-4 text-white" />
                        <span className="text-xs font-bold uppercase tracking-wider text-white">GTM Acceleration Program</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-[1.2] tracking-tight">
                        Scale Your B2C Brand
                        <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent block mt-2">
                            Globally
                        </span>
                    </h1>
                    <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                        Born from Kestone Global's marketing DNA — proven strategies for ambitious consumer brands ready to dominate their markets.
                    </p>
                    
                  
                </div>

                {/* Stats Row - with staggered animation */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div 
                                key={idx} 
                                className={`group text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">{feature.title}</h3>
                                <p className="text-sm text-gray-500">{feature.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Split Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Image */}
                    <div className={`relative group transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <div className="relative h-[500px] w-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse">
                                {/* Replace with your actual image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                    <Image 
                                        src="/images/startup-cafe.png" 
                                        alt="Growth" 
                                        fill 
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                </div>
                            </div>
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                            
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-2">
                                        {[1,2,3,4].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r  from-emerald-500 to-green-500 border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                                                {String.fromCharCode(64 + i)}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-white font-semibold text-sm">Trusted by 50+ industry leaders</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-400 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none"></div>
                    </div>

                    {/* Right Content */}
                    <div className={`pl-0 lg:pl-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="inline-flex items-center gap-2 bg-emerald-50 rounded-full px-4 py-1.5 mb-6">
                            <Rocket className="w-4 h-4 text-green-500" />
                            <span className="text-xs font-bold uppercase tracking-wider text-green-500">Ready to Scale?</span>
                        </div>
                        
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Take your brand to the 
                            <span className="text-green-500"> next level</span>
                        </h2>
                        
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Our GTM Acceleration Program combines enterprise-grade frameworks with startup agility. 
                            We help consumer brands unlock new markets, optimize customer acquisition, and scale sustainably.
                        </p>
                        
                        <div className="space-y-4 mb-10">
                            {benefits.map((benefit, i) => {
                                const IconBenefit = benefit.icon;
                                return (
                                    <div 
                                        key={i} 
                                        className="flex items-center gap-3 group cursor-pointer transition-all duration-500"
                                        style={{ transitionDelay: `${i * 100 + 600}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-1rem)' }}
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-emerald-100 to-green-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <IconBenefit className="w-4 h-4 text-green-500" />
                                        </div>
                                        <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                                            {benefit.text}
                                        </span>
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                    </div>
                                );
                            })}
                        </div>
                        
                        {/* Trust Indicator */}
                        <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                                ))}
                            </div>
                            <span className="text-sm text-gray-600">
                                Rated <span className="font-bold text-gray-900">4.9/5</span> by 100+ founders
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Banner */}
                <div className={`mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-center relative overflow-hidden transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                   <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-3">Ready to accelerate your growth?</h3>
                        <p className="text-gray-300 mb-6">Join 50+ brands that have scaled with our GTM program</p>
                        <button className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 font-semibold shadow-lg group">
                            <span>Book Free Consultation</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}