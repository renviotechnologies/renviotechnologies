'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowUpRight, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { blogs } from '@/lib/blogData';

export default function BlogGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.article
                            key={blog.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <Link href={`/blogs/${blog.slug}`} className="block">
                                <div className="relative h-64 overflow-hidden rounded-xl mb-6 bg-gray-100">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest text-kestone-black rounded-md shadow-sm">
                                        {blog.category}
                                    </div>
                                </div>

                                <div className="flex items-center text-xs text-gray-400 font-bold uppercase tracking-wider mb-3 space-x-4">
                                    <div className="flex items-center">
                                        <Calendar size={14} className="mr-1" />
                                        {blog.date}
                                    </div>
                                    <div className="flex items-center">
                                        <User size={14} className="mr-1" />
                                        {blog.author}
                                    </div>
                                    {blog.readTime && (
                                        <div className="flex items-center">
                                            <Clock size={14} className="mr-1" />
                                            {blog.readTime}
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-xl font-heading font-bold text-kestone-black mb-3 group-hover:text-kestone-red transition-colors flex items-start justify-between">
                                    {blog.title}
                                    <ArrowUpRight size={20} className="text-gray-300 group-hover:text-kestone-red transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0 ml-2" />
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                                    {blog.excerpt}
                                </p>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
