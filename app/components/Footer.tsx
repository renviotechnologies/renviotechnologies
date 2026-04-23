'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { services } from '@/lib/servicesData';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-black text-white pt-20 pb-10" id="contact">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
                    
                    {/* Brand Column */}
                    <div>
                         <Link href="/" className="relative block w-40 h-12 mb-6">
                            <Image
                                src="/images/renvio_logo.png"
                                alt="Renvio"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 160px, 160px"
                            />
                        </Link>
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                            Renvio – Powered by AI
                            <br />
                            A Unit of Renvio World Private Limited
                        </p>
                        <div className="flex space-x-3">
                            {[
                                { icon: Facebook, href: "https://www.facebook.com/renviotechnologies" },
                                { icon: Twitter, href: "https://x.com/renviotechnologies" },
                                { icon: Linkedin, href: "https://www.linkedin.com/company/renviotechnologies" },
                                { icon: Instagram, href: "https://www.instagram.com/renviotechnologies/" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 bg-gray-800 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all duration-300 text-gray-400 hover:text-black"
                                >
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Events & Awards', href: '/awards' },
                                { name: 'Projects', href: '/projects' },
                                { name: 'Blogs', href: '/blogs' },
                                { name: 'Contact', href: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Services</h4>
                        <ul className="space-y-3">
                            {services.slice(0, 6).map((service) => (
                                <li key={service.slug}>
                                    <Link href={`/services/${service.slug}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/services" className="text-white hover:text-gray-300 transition-colors text-sm font-semibold">
                                    View All Services →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">Plat -001, Vijay Nagar, Indore,Madhya Pradesh – 452010</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-gray-400 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">+91-7489951514 , +91-9399273310 , +91-8717818474</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-gray-400 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">www.renviotechnologies.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} Renvio Technologies Private Limited. All Rights Reserved.
                    </p>
                    
                    <div className="flex space-x-6">
                        <Link href="#" className="text-gray-500 hover:text-white text-xs transition">Privacy Policy</Link>
                        <Link href="#" className="text-gray-500 hover:text-white text-xs transition">Terms of Service</Link>
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-1 text-gray-500 hover:text-white text-xs transition"
                        >
                            Back to Top
                            <ArrowUp size={12} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}