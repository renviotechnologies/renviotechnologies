'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Rocket, TrendingUp, Crown, Zap, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const plans = [
    {
        name: "Starter",
        icon: Rocket,
        tagline: "Perfect for new startups",
        price: "25,000",
        secondMonthPrice: "15,000",
        features: [
            "Website + Domain + Hosting",
            "Complete brand setup",
            "Social media optimization",
            "Content creation (graphics + reels)",
            "SEO basics",
            "Monthly performance report",
            "Email support"
        ],
        cta: "Start Free Consultation",
        highlighted: false,
        popular: false
    },
    {
        name: "Growth",
        icon: TrendingUp,
        tagline: "For scaling businesses",
        price: "50,000",
        secondMonthPrice: "35,000",
        features: [
            "Everything in Starter",
            "E-commerce product listing",
            "Paid ads setup & management",
            "Advanced growth strategy",
            "Funnel & retargeting",
            "Priority support",
            "Dedicated account manager"
        ],
        cta: "Get Started Now",
        highlighted: true,
        popular: true,
        badge: "MOST POPULAR"
    },
    {
        name: "Enterprise",
        icon: Crown,
        tagline: "Custom solutions",
        price: "Custom",
        secondMonthPrice: "",
        features: [
            "Everything in Growth",
            "Custom development",
            "24/7 priority support",
            "Dedicated team",
            "Advanced analytics",
            "Strategic consulting",
            "SLA agreement"
        ],
        cta: "Contact Sales",
        highlighted: false,
        popular: false
    }
];

export default function PricingSection() {
    return (
        <section className="py-24 bg-white" id="pricing">
            <div className="container mx-auto px-6 max-w-7xl">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 mb-4"
                    >
                        <div className="h-px w-8 bg-black" />
                        <span className="text-gray-600 uppercase tracking-[0.2em] text-sm font-bold">Pricing</span>
                        <div className="h-px w-8 bg-black" />
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-black"
                    >
                        Simple, Transparent Pricing
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-2xl mx-auto mt-4"
                    >
                        Choose the perfect plan for your business. No hidden fees, cancel anytime.
                    </motion.p>
                </div>

                {/* Pricing Cards - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                                plan.highlighted
                                    ? 'bg-black text-white shadow-2xl scale-105'
                                    : 'bg-gray-50 text-black shadow-lg hover:shadow-xl'
                            }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <div className="flex items-center gap-1 bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                        <Star className="w-3 h-3 fill-current" />
                                        {plan.badge}
                                    </div>
                                </div>
                            )}

                            <div className="p-8">
                                {/* Icon & Name */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                        plan.highlighted ? 'bg-black' : 'bg-black'
                                    }`}>
                                        <plan.icon className={`w-6 h-6 ${plan.highlighted ? 'text-white' : 'text-white'}`} />
                                    </div>
                                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                                </div>

                                {/* Tagline */}
                                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {plan.tagline}
                                </p>

                                {/* Price */}
                                <div className="mb-6 pb-6 border-b border-gray-200">
                                    {plan.price === "Custom" ? (
                                        <div className="text-3xl font-bold">Custom</div>
                                    ) : (
                                        <>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-4xl font-bold">₹{plan.price}</span>
                                                <span className={`text-sm ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                                                    / 1st month
                                                </span>
                                            </div>
                                            <p className={`text-sm mt-2 font-medium ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                                                Then ₹{plan.secondMonthPrice}/month
                                            </p>
                                        </>
                                    )}
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.slice(0, 6).map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check size={16} className={`flex-shrink-0 mt-0.5 ${
                                                plan.highlighted ? 'text-gray-400' : 'text-gray-600'
                                            }`} />
                                            <span className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <Link
                                    href="/contact"
                                    className={`group w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all ${
                                        plan.highlighted
                                            ? 'bg-white text-gray-900 hover:bg-gray-100'
                                            : 'bg-gray-900 text-white hover:bg-gray-800'
                                    }`}
                                >
                                    {plan.cta}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <p className="text-sm text-gray-400">
                        All plans include free consultation. No long-term contracts required.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}