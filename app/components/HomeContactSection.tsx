'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { services } from '@/lib/servicesData';

export default function HomeContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: 'Marketing as a Service (MaaS)',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error();
            setSubmitted(true);
            setFormData({
                name: '',
                phone: '',
                email: '',
                service: 'Marketing as a Service (MaaS)',
                message: '',
            });
        } catch (err) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        { icon: Mail, text: 'hello@renvio.com', href: 'mailto:hello@renvio.com' },
        { icon: Phone, text: '+91 8527 664 228', href: 'tel:+918527664228' },
        { icon: MapPin, text: 'Dwarka, New Delhi', href: '#' },
        { icon: Clock, text: 'Mon-Fri: 9AM - 7PM', href: '#' },
    ];

    return (
        <section className="py-24 bg-white">
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
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-3"
                    >
                        Let's Build Something Great
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-xl mx-auto"
                    >
                        Tell us about your project and we'll get back to you within 24 hours.
                    </motion.p>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-1"
                    >
                        <div className="bg-gray-900 rounded-2xl p-8 text-white h-full">
                            <h3 className="text-xl font-bold mb-3">Let's Talk</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                We're here to answer your questions and help you grow your brand.
                            </p>
                            
                            <div className="space-y-4 mb-8">
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

                            <div className="pt-6 border-t border-gray-800">
                                <p className="text-xs text-gray-500 mb-3">Trusted by</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-500 text-sm">★★★★★</span>
                                    <span className="text-xs text-gray-400">4.9/5 from 50+ clients</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-gray-50 rounded-2xl p-8">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center text-center py-12 gap-4"
                                >
                                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                                        <CheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Message Received!</h3>
                                    <p className="text-gray-500 text-sm max-w-sm">
                                        Thanks for contacting us. Our team will get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-4 text-sm text-gray-600 hover:text-gray-900 transition"
                                    >
                                        Send another message →
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-gray-800 transition text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Phone *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91..."
                                                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-gray-800 transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@company.com"
                                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-gray-800 transition text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Service Interest</label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-gray-800 transition text-sm text-gray-700"
                                        >
                                            <option>Marketing as a Service (MaaS)</option>
                                            {services.map((s) => (
                                                <option key={s.id}>{s.title}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Message</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your project..."
                                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-gray-800 transition text-sm resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                        <Send size={16} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}