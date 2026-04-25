'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Users, Heart, MessageCircle, Share2, DollarSign, Target, Zap, Instagram, Youtube, Twitter, Sparkles, Award, Star, ChevronRight } from 'lucide-react';

const campaigns = [
    {
        id: 1,
        brand: 'Delhi059',
        influencer: '@foodie_canada',
        platform: 'Instagram',
        image: '/delhi059-logo.jpg',
        followers: '250K',
        engagement: '8.5%',
        reach: '2.1M',
        conversions: '450+',
        roi: '12x',
        description: 'Authentic food review that drove massive foot traffic to Canada\'s favorite restaurant',
        metrics: {
            likes: '45K',
            comments: '2.3K',
            shares: '1.8K',
            saves: '12K'
        }
    },
    {
        id: 2,
        brand: 'Dee Cee Accessories',
        influencer: '@fashion_forward',
        platform: 'Instagram',
        image: '/Feature_logos/deecee.jpg',
        followers: '180K',
        engagement: '12.3%',
        reach: '1.8M',
        conversions: '320+',
        roi: '15x',
        description: 'Jewelry styling series that went viral across social platforms',
        metrics: {
            likes: '38K',
            comments: '1.9K',
            shares: '2.1K',
            saves: '15K'
        }
    },
    {
        id: 3,
        brand: 'Astro Nexus',
        influencer: '@cosmic_vibes',
        platform: 'YouTube',
        image: '/Feature_logos/astronexus.jpg',
        followers: '420K',
        engagement: '6.8%',
        reach: '3.5M',
        conversions: '890+',
        roi: '18x',
        description: 'Weekly horoscope series with massive engagement and community growth',
        metrics: {
            likes: '67K',
            comments: '4.2K',
            shares: '3.5K',
            saves: '22K'
        }
    },
    {
        id: 4,
        brand: 'Biryani Bar',
        influencer: '@food_explorer',
        platform: 'Instagram',
        image: '/Feature_logos/biryanibar.jpg',
        followers: '310K',
        engagement: '9.2%',
        reach: '2.8M',
        conversions: '670+',
        roi: '14x',
        description: 'Authentic biryani launch campaign that drove record-breaking sales',
        metrics: {
            likes: '52K',
            comments: '3.1K',
            shares: '2.9K',
            saves: '18K'
        }
    }
];

const stats = [
    { icon: Users, number: '50+', label: 'Influencer Partnerships', color: 'text-gray-700', bg: 'bg-gray-100' },
    { icon: TrendingUp, number: '25M+', label: 'Total Reach', color: 'text-gray-700', bg: 'bg-gray-100' },
    { icon: DollarSign, number: '15x', label: 'Average ROI', color: 'text-green-600', bg: 'bg-green-50' },
    { icon: Zap, number: '95%', label: 'Campaign Success Rate', color: 'text-gray-700', bg: 'bg-gray-100' }
];

const platformIcons = {
    Instagram: Instagram,
    YouTube: Youtube,
    Twitter: Twitter
};

export default function InfluencerMarketing() {
    const [selectedCampaign, setSelectedCampaign] = useState(campaigns[0]);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 font-bold text-sm uppercase tracking-widest rounded-full mb-4">
                        <Sparkles size={14} />
                        Influencer Marketing
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Campaigns That{' '}
                        <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                            Drive Results
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-300 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We create authentic partnerships that go beyond likes—delivering measurable ROI,
                        brand loyalty, and viral growth for our clients.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            className={`${stat.bg} rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.bg} rounded-full mb-3`}>
                                <stat.icon className={stat.color} size={24} />
                            </div>
                            <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                                {stat.number}
                            </div>
                            <div className="text-sm text-gray-500">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Campaign Showcase */}
                <div className="grid lg:grid-cols-2 gap-10 mb-16">
                    {/* Campaign Selector */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <h3 className="text-xl font-bold text-gray-900">Featured Campaigns</h3>
                            <div className="h-px flex-1 bg-gray-200"></div>
                        </div>
                        <div className="space-y-4">
                            {campaigns.map((campaign, idx) => (
                                <motion.div
                                    key={campaign.id}
                                    className={`p-5 rounded-xl cursor-pointer transition-all duration-300 border ${
                                        selectedCampaign.id === campaign.id
                                            ? 'bg-gray-900 border-gray-900 shadow-lg'
                                            : 'bg-white border-gray-200 hover:border-gray-400 hover:shadow-md'
                                    }`}
                                    onClick={() => setSelectedCampaign(campaign)}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                                            <Image
                                                src={campaign.image}
                                                alt={campaign.brand}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className={`font-bold ${selectedCampaign.id === campaign.id ? 'text-white' : 'text-gray-900'}`}>
                                                    {campaign.brand}
                                                </h4>
                                                {React.createElement(platformIcons[campaign.platform as keyof typeof platformIcons], {
                                                    size: 14,
                                                    className: selectedCampaign.id === campaign.id ? 'text-gray-400' : 'text-gray-500'
                                                })}
                                            </div>
                                            <p className={`text-sm ${selectedCampaign.id === campaign.id ? 'text-gray-400' : 'text-gray-500'}`}>
                                                {campaign.influencer}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <div className={`text-xl font-bold ${selectedCampaign.id === campaign.id ? 'text-green-400' : 'text-green-600'}`}>
                                                {campaign.roi}
                                            </div>
                                            <div className={`text-xs ${selectedCampaign.id === campaign.id ? 'text-gray-400' : 'text-gray-400'}`}>
                                                ROI
                                            </div>
                                        </div>
                                        {selectedCampaign.id === campaign.id && (
                                            <ChevronRight size={20} className="text-gray-400" />
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Campaign Details */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCampaign.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Image */}
                            <div className="relative h-48 bg-gradient-to-r from-gray-100 to-gray-200">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-white shadow-lg">
                                        <Image
                                            src={selectedCampaign.image}
                                            alt={selectedCampaign.brand}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-900 font-bold text-xs rounded-full shadow-sm">
                                    {selectedCampaign.platform}
                                </div>
                            </div>

                            {/* Details */}
                            <div className="p-6">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {selectedCampaign.brand}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {selectedCampaign.description}
                                    </p>
                                </div>

                                {/* Metrics Grid */}
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    <div className="p-3 bg-gray-50 rounded-xl text-center">
                                        <div className="text-lg font-bold text-gray-900 mb-0.5">
                                            {selectedCampaign.reach}
                                        </div>
                                        <div className="text-xs text-gray-500">Total Reach</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-xl text-center">
                                        <div className="text-lg font-bold text-gray-900 mb-0.5">
                                            {selectedCampaign.engagement}
                                        </div>
                                        <div className="text-xs text-gray-500">Engagement Rate</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-xl text-center">
                                        <div className="text-lg font-bold text-gray-900 mb-0.5">
                                            {selectedCampaign.conversions}
                                        </div>
                                        <div className="text-xs text-gray-500">Conversions</div>
                                    </div>
                                    <div className="p-3 bg-green-50 rounded-xl text-center">
                                        <div className="text-lg font-bold text-green-600 mb-0.5">
                                            {selectedCampaign.roi}
                                        </div>
                                        <div className="text-xs text-gray-500">Return on Investment</div>
                                    </div>
                                </div>

                                {/* Social Metrics */}
                                <div className="flex items-center justify-around p-4 bg-gray-50 rounded-xl">
                                    <div className="text-center">
                                        <Heart size={18} className="text-gray-500 mx-auto mb-1" />
                                        <div className="font-semibold text-gray-900 text-sm">
                                            {selectedCampaign.metrics.likes}
                                        </div>
                                        <div className="text-xs text-gray-400">Likes</div>
                                    </div>
                                    <div className="text-center">
                                        <MessageCircle size={18} className="text-gray-500 mx-auto mb-1" />
                                        <div className="font-semibold text-gray-900 text-sm">
                                            {selectedCampaign.metrics.comments}
                                        </div>
                                        <div className="text-xs text-gray-400">Comments</div>
                                    </div>
                                    <div className="text-center">
                                        <Share2 size={18} className="text-gray-500 mx-auto mb-1" />
                                        <div className="font-semibold text-gray-900 text-sm">
                                            {selectedCampaign.metrics.shares}
                                        </div>
                                        <div className="text-xs text-gray-400">Shares</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Testimonial */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
                        <div className="text-4xl text-gray-300 font-serif mb-3">"</div>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-4 italic">
                            The influencer campaign Renvio ran for us generated more sales in 2 weeks 
                            than we had in the previous 6 months. Their approach to authentic partnerships is unmatched.
                        </p>
                        <div className="flex items-center justify-center gap-2">
                            <Star size={16} className="text-yellow-500 fill-yellow-500" />
                            <Star size={16} className="text-yellow-500 fill-yellow-500" />
                            <Star size={16} className="text-yellow-500 fill-yellow-500" />
                            <Star size={16} className="text-yellow-500 fill-yellow-500" />
                            <Star size={16} className="text-yellow-500 fill-yellow-500" />
                        </div>
                        <p className="text-sm text-gray-500 mt-3">
                            — Sarah Johnson, CMO at Delhi059
                        </p>
                    </div>
                </motion.div>

               
            </div>
        </section>
    );
}