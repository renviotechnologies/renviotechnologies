'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, Sparkles, TrendingUp, BookOpen, User, Eye } from 'lucide-react';

const categories = ['All', 'Case Studies', 'Industry Insights', 'Success Stories', 'Marketing Tips'];

const articles = [
    {
        id: 1,
        title: 'How Delhi059 Became Canada\'s Favorite Restaurant Without Paid Ads',
        category: 'Case Studies',
        excerpt: 'The complete story of how we built a restaurant empire using organic marketing, community engagement, and authentic storytelling.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80',
        author: 'Renvio Team',
        date: 'Jan 10, 2026',
        readTime: '8 min read',
        tags: ['Hospitality', 'Organic Growth', 'Social Media'],
        views: '12.5K',
        featured: true
    },
    {
        id: 2,
        title: 'Building a Zero-Commission Rideshare App: The Local Ride Story',
        category: 'Success Stories',
        excerpt: 'From concept to 10,000+ active drivers—how we disrupted the rideshare industry with a driver-first approach.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80',
        author: 'Renvio Team',
        date: 'Jan 5, 2026',
        readTime: '12 min read',
        tags: ['App Development', 'Disruption', 'Technology'],
        views: '8.2K',
        featured: false
    },
    {
        id: 3,
        title: 'The Psychology of Color in Food Marketing',
        category: 'Marketing Tips',
        excerpt: 'Why BG Foods\' branding choices led to 300% increase in customer engagement and what you can learn from it.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
        author: 'Renvio Team',
        date: 'Dec 28, 2025',
        readTime: '6 min read',
        tags: ['Branding', 'Psychology', 'E-commerce'],
        views: '5.8K',
        featured: false
    },
    {
        id: 4,
        title: 'Luxury Real Estate Marketing in the Digital Age',
        category: 'Industry Insights',
        excerpt: 'How Promac Advisory leveraged premium content and targeted campaigns to sell ₹50Cr+ in properties.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
        author: 'Renvio Team',
        date: 'Dec 20, 2025',
        readTime: '10 min read',
        tags: ['Real Estate', 'Luxury Marketing', 'Digital Strategy'],
        views: '6.3K',
        featured: false
    },
    {
        id: 5,
        title: 'From Niche to Mainstream: Astro Nexus Growth Strategy',
        category: 'Case Studies',
        excerpt: 'How we took an astrology platform from 500 followers to 250K+ engaged community members in 18 months.',
        image: 'https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=1200&q=80',
        author: 'Renvio Team',
        date: 'Dec 15, 2025',
        readTime: '9 min read',
        tags: ['Community Building', 'Content Strategy', 'Growth Hacking'],
        views: '7.1K',
        featured: false
    },
    {
        id: 6,
        title: 'E-commerce Photography That Converts: Dee Cee Case Study',
        category: 'Success Stories',
        excerpt: 'The art and science behind product photography that increased conversion rates by 180%.',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
        author: 'Renvio Team',
        date: 'Dec 10, 2025',
        readTime: '7 min read',
        tags: ['Photography', 'E-commerce', 'Conversion Optimization'],
        views: '4.9K',
        featured: false
    }
];

export default function BlogsArticles() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredArticles = articles.filter(article => {
        const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const featuredArticle = articles.find(a => a.featured);

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
                        <BookOpen size={14} />
                        Knowledge Hub
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Insights &{' '}
                        <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                            Stories
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-300 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Deep dives into our projects, marketing strategies, and the lessons we've learned
                        building 30+ brands from the ground up.
                    </p>
                </motion.div>

                {/* Search and Filter Bar */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <div className="flex flex-wrap gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                                        selectedCategory === category
                                            ? 'bg-gray-900 text-white shadow-md'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full w-64 focus:outline-none focus:border-gray-400 transition-colors"
                            />
                            <svg
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </motion.div>

                {/* Featured Article */}
                {featuredArticle && selectedCategory === 'All' && !searchQuery && (
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href={`/blogs/${featuredArticle.id}`}>
                            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100">
                                <div className="grid md:grid-cols-2 gap-0">
                                    {/* Image */}
                                    <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                                        <Image
                                            src={featuredArticle.image}
                                            alt={featuredArticle.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-6 left-6 px-4 py-2 bg-gray-900 text-white font-bold text-sm uppercase rounded-full flex items-center gap-2">
                                            <Sparkles size={14} />
                                            Featured
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                        <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 font-bold text-xs uppercase tracking-wide rounded-full mb-4 w-fit">
                                            {featuredArticle.category}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                                            {featuredArticle.title}
                                        </h3>
                                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                            {featuredArticle.excerpt}
                                        </p>

                                        {/* Meta Info */}
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                                            <span className="flex items-center gap-2">
                                                <Calendar size={16} />
                                                {featuredArticle.date}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <Clock size={16} />
                                                {featuredArticle.readTime}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <Eye size={16} />
                                                {featuredArticle.views} views
                                            </span>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {featuredArticle.tags.map((tag, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2 text-gray-900 font-bold group-hover:gap-4 transition-all">
                                            Read Full Article
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                {/* Articles Grid */}
                <AnimatePresence mode="popLayout">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.filter(a => !a.featured).map((article, idx) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                            >
                                <Link href={`/blogs/${article.id}`}>
                                    <div className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100 hover:-translate-y-1">
                                        {/* Image */}
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-900 font-bold text-xs uppercase rounded-full shadow-sm">
                                                {article.category}
                                            </div>
                                            <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                                                <span className="text-white text-xs flex items-center gap-1">
                                                    <Eye size={10} />
                                                    {article.views}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3 flex-1">
                                                {article.excerpt}
                                            </p>

                                            {/* Meta Info */}
                                            <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={12} />
                                                    {article.date}
                                                </span>
                                                <span>•</span>
                                                <span className="flex items-center gap-1">
                                                    <Clock size={12} />
                                                    {article.readTime}
                                                </span>
                                            </div>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {article.tags.slice(0, 2).map((tag, idx) => (
                                                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                                        {tag}
                                                    </span>
                                                ))}
                                                {article.tags.length > 2 && (
                                                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                                        +{article.tags.length - 2}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-2 text-gray-900 font-bold text-sm group-hover:gap-3 transition-all">
                                                Read More
                                                <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </AnimatePresence>

                {/* No Results */}
                {filteredArticles.filter(a => !a.featured).length === 0 && (
                    <motion.div
                        className="text-center py-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <p className="text-gray-500">No articles found. Try a different search term.</p>
                    </motion.div>
                )}

                

                {/* View All CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Link href="/blogs">
                        <motion.button
                            className="group inline-flex items-center gap-3 px-8 py-3 bg-white text-gray-900 font-bold text-base rounded-full border-2 border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-md"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Browse All Articles
                            <ArrowRight size={18} />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}