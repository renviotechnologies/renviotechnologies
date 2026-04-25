'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowUpRight, Clock, TrendingUp, Eye, Heart, Bookmark, Search, Filter, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { blogs } from '@/lib/blogData';

const categories = ['All', 'Case Studies', 'Marketing Tips', 'Industry Insights', 'Success Stories'];

export default function BlogGrid() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredBlogs = blogs.filter(blog => {
        const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Featured blog (first one)
    const featuredBlog = filteredBlogs[0];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6 max-w-7xl">
                
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
                        <Sparkles size={14} className="text-gray-600" />
                        <span className="text-gray-600 font-bold tracking-widest uppercase text-xs">Insights & Stories</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Latest{' '}
                        <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                            Articles
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-300 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Insights, strategies, and success stories from our journey of building brands
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
                                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                                        selectedCategory === category
                                            ? 'bg-gray-900 text-white shadow-md'
                                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
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
                                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full w-64 focus:outline-none focus:border-gray-400 transition-colors bg-white"
                            />
                            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                </motion.div>

                {/* Featured Article (if exists and no search) */}
                {featuredBlog && selectedCategory === 'All' && !searchQuery && (
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href={`/blogs/${featuredBlog.slug}`}>
                            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100">
                                <div className="grid md:grid-cols-2 gap-0">
                                    <div className="relative h-80 md:h-auto overflow-hidden">
                                        <Image
                                            src={featuredBlog.image}
                                            alt={featuredBlog.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-6 left-6 px-4 py-2 bg-gray-900 text-white font-bold text-xs uppercase rounded-full flex items-center gap-2">
                                            <Sparkles size={12} />
                                            Featured
                                        </div>
                                    </div>
                                    <div className="p-8 md:p-10 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} />
                                                {featuredBlog.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <User size={12} />
                                                {featuredBlog.author}
                                            </span>
                                            {featuredBlog.readTime && (
                                                <span className="flex items-center gap-1">
                                                    <Clock size={12} />
                                                    {featuredBlog.readTime}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                                            {featuredBlog.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {featuredBlog.excerpt}
                                        </p>
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-full w-fit group-hover:bg-gray-800 transition-all duration-300">
                                            Read Article
                                            <ArrowUpRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                {/* Blog Grid */}
                <AnimatePresence mode="popLayout">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(searchQuery || selectedCategory !== 'All' ? filteredBlogs : filteredBlogs.slice(1)).map((blog, index) => (
                            <motion.article
                                key={blog.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group"
                            >
                                <Link href={`/blogs/${blog.slug}`} className="block h-full">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col border border-gray-100 hover:-translate-y-1">
                                        <div className="relative h-56 overflow-hidden bg-gray-100">
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest text-gray-900 rounded-full shadow-sm">
                                                {blog.category}
                                            </div>
                                            {blog.readTime && (
                                                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                                                    <span className="text-white text-xs flex items-center gap-1">
                                                        <Clock size={10} />
                                                        {blog.readTime}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex items-center text-xs text-gray-400 font-medium mb-3 gap-3">
                                                <div className="flex items-center gap-1">
                                                    <Calendar size={12} />
                                                    {blog.date}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <User size={12} />
                                                    {blog.author}
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
                                                {blog.title}
                                            </h3>

                                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                                                {blog.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <div className="inline-flex items-center gap-1 text-xs text-gray-400">
                                                    <Eye size={12} />
                                                    <span>5 min read</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-900 font-semibold text-sm group-hover:gap-3 transition-all">
                                                    Read More
                                                    <ArrowUpRight size={14} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </AnimatePresence>

                {/* No Results */}
                {filteredBlogs.length === 0 && (
                    <motion.div
                        className="text-center py-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                            <Search size={24} className="text-gray-400" />
                        </div>
                        <p className="text-gray-500">No articles found. Try a different search term.</p>
                        <button
                            onClick={() => {
                                setSelectedCategory('All');
                                setSearchQuery('');
                            }}
                            className="mt-4 text-gray-600 hover:text-gray-900 font-semibold"
                        >
                            Clear filters
                        </button>
                    </motion.div>
                )}

                {/* View All CTA */}
                {filteredBlogs.length > 0 && (
                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
                            Load More Articles
                            <ArrowUpRight size={16} />
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}