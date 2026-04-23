'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { services } from '@/lib/servicesData';

export default function HomeContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: 'Marketing as a Service (MaaS)',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Service Interest:* ${formData.service}
*Message:* ${formData.message || 'No message provided'}
        `.trim();

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappNumber = '918527664228';
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        { icon: Phone, text: '+91 7489951514', href: 'tel:+917489951514' },
        { icon: Mail, text: 'renviotechnologies.com', href: 'mailto:renviotechnologies.com' },
        { icon: MapPin, text: 'Indore, Madhya Pradesh', href: '#' },
        { icon: Clock, text: 'Mon-Fri: 9AM - 7PM', href: '#' },
    ];

    return (
        <section className="py-24 bg-white" id="contact">
            <div className="container mx-auto px-6 max-w-7xl">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 mb-4"
                    >
                        <div className="h-px w-8 bg-gray-800" />
                        <span className="text-gray-600 uppercase tracking-[0.2em] text-sm font-bold">Get In Touch</span>
                        <div className="h-px w-8 bg-gray-800" />
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Ready to Start Your Project?
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-2xl mx-auto"
                    >
                        Whether you need a full digital transformation or a specific marketing campaign, 
                        our team is ready to help you scale.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-1"
                    >
                        <div className="bg-gray-900 rounded-2xl p-6 text-white h-full">
                            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                            <p className="text-gray-300 text-sm mb-6">
                                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>
                            
                            <div className="space-y-4">
                                {contactInfo.map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.href}
                                        className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition">
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm">{item.text}</span>
                                    </a>
                                ))}
                            </div>

                            {/* Social Proof */}
                            <div className="mt-6 pt-6 border-t border-gray-800">
                                <div className="flex items-center gap-2 mb-3">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <span key={i} className="text-yellow-500 text-sm">★</span>
                                    ))}
                                    <span className="text-xs text-gray-400">4.9/5 from 50+ reviews</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-gray-800 transition-colors text-sm"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-gray-800 transition-colors text-sm"
                                            placeholder="+91..."
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-gray-800 transition-colors text-sm"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
                                        Service Interest
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-gray-800 transition-colors text-gray-600 text-sm"
                                    >
                                        <option>Marketing as a Service (MaaS)</option>
                                        {services.map((service) => (
                                            <option key={service.id} value={service.title}>
                                                {service.title}
                                            </option>
                                        ))}
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-gray-800 transition-colors resize-none text-sm"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                                >
                                    Send Message
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}