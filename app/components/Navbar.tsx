'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

import AnnouncementBar from './AnnouncementBar';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [background, setBackground] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setBackground(true);
        } else {
            setBackground(false);
        }
    });

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Awards', href: '/awards' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 bg-kestone-black transition-all duration-300"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <AnnouncementBar />

            <div className={cn(
                "w-full  transition-all duration-300",
                background ? "py-4 shadow-md" : "py-6"
            )}>
                <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative block w-40 h-12">
                        <Image
                            //src="/images/image.png"
                            src="/images/renvio_logo.png"
                            alt="Renvio"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 160px, 160px"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className="text-white font-body text-sm font-medium hover:text-white transition-colors duration-200 flex items-center gap-1"
                                >
                                    {link.name}
                                     <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                               
                            </div>
                        ))}
                        
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: '100vh' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="lg:hidden bg-kestone-black border-t border-gray-800 absolute inset-x-0 top-[100%] z-40 overflow-y-auto"
                >
                    <div className="flex flex-col p-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white font-body text-lg font-medium hover:text-[#9200b3]"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
