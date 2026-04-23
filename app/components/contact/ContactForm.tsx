'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageCircle, Clock, Award, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '@/lib/servicesData';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: 'Marketing as a Service (MaaS)',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const whatsappMessage = `
🏢 *NEW CONTACT FORM SUBMISSION*
━━━━━━━━━━━━━━━━━━━━━

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
🎯 *Service:* ${formData.service}
💬 *Message:* ${formData.message || 'No message provided'}

━━━━━━━━━━━━━━━━━━━━━
📅 *Submitted:* ${new Date().toLocaleString()}
        `.trim();

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappNumber = '918527664228';

        setTimeout(() => {
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
            setIsSubmitting(false);
            setFormData({
                name: '',
                phone: '',
                email: '',
                service: 'Marketing as a Service (MaaS)',
                message: ''
            });
        }, 500);
    };

    const contactStats = [
        { icon: Clock, label: 'Response Time', value: '< 24 Hours', description: 'Fast turnaround' },
        { icon: Award, label: 'Success Rate', value: '98%', description: 'Client satisfaction' },
        { icon: Users, label: 'Active Clients', value: '500+', description: 'Growing daily' },
    ];

    const benefits = [
        'Free consultation call',
        'No hidden charges',
        'Dedicated support team',
        'Custom solutions'
    ];

    return (
        <section className="py-28 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
            {/* Modern Geometric Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-100 rounded-full blur-3xl opacity-40" />
                
                {/* Diagonal Lines Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_98%,rgba(0,0,0,0.02)_98%),linear-gradient(-45deg,transparent_98%,rgba(0,0,0,0.02)_98%)] bg-[size:60px_60px]" />
                
                {/* Dot Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* LEFT SIDE - Brand New Design */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black rounded-full text-white text-sm font-medium w-fit">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            We're here to help
                        </div>

                        {/* Main Heading */}
                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-4">
                                Let's talk
                                <span className="block text-gray-400">business</span>
                            </h2>
                            <div className="w-20 h-1 bg-black mt-6"></div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Ready to elevate your brand? Share your vision with us, and we'll craft a strategy 
                            that delivers measurable results. Your success story starts here.
                        </p>

                       
                        {/* Benefits List */}
                        <div className="space-y-3 pt-4">
                            <p className="text-sm font-semibold text-black uppercase tracking-wider">Why choose us?</p>
                            <div className="grid grid-cols-2 gap-3">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="flex items-center gap-2"
                                    >
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span className="text-sm text-gray-600">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Methods */}
                        <div className="space-y-3 pt-4">
                            <p className="text-sm font-semibold text-black uppercase tracking-wider">Reach us directly</p>
                            <div className="space-y-3">
                                <a href="tel:+918527664228" className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors group">
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black transition-colors">
                                        <Phone className="w-4 h-4 text-black group-hover:text-white" />
                                    </div>
                                    <span>+91-8527664228</span>
                                </a>
                                <a href="mailto:teammarktaleworld@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors group">
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black transition-colors">
                                        <Mail className="w-4 h-4 text-black group-hover:text-white" />
                                    </div>
                                    <span>teammarktaleworld@gmail.com</span>
                                </a>
                                <div className="flex items-start gap-3 text-gray-600">
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                                        <MapPin className="w-4 h-4 text-black" />
                                    </div>
                                    <span className="text-sm">Plot no. 141, Sec. 14, Dwarka, New Delhi – 110078</span>
                                </div>
                            </div>
                        </div>

                        {/* Map Preview */}
                        <motion.div 
                            className="mt-4 h-40 rounded-2xl overflow-hidden border border-gray-200"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://maps.google.com/maps?q=Renvio%20Plot%20no.%20141,%20Sec.%2014,%20Dwarka,%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                title="Renvio Location"
                                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE - Modern Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Floating Card Effect */}
                        <div className="absolute inset-0 bg-black rounded-3xl transform rotate-3 scale-105 opacity-5"></div>
                        
                        <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                            {/* Form Header */}
                            <div className="p-8 border-b border-gray-100">
                                <h3 className="text-2xl font-bold text-black">Send a message</h3>
                                <p className="text-gray-400 mt-1">Fill the form and we'll get back to you within 24h</p>
                            </div>

                            <form onSubmit={handleSubmit} className="p-8 space-y-5">
                                {/* Name & Phone Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="relative">
                                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                            Full name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-900
                                                ${focusedField === 'name' ? 'border-black bg-white' : 'border-transparent'}`}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                            Phone number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('phone')}
                                            onBlur={() => setFocusedField(null)}
                                            className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-900
                                                ${focusedField === 'phone' ? 'border-black bg-white' : 'border-transparent'}`}
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="relative">
                                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-900
                                            ${focusedField === 'email' ? 'border-black bg-white' : 'border-transparent'}`}
                                        placeholder="john@company.com"
                                    />
                                </div>

                                {/* Service Selection */}
                                <div className="relative">
                                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                        Service interest
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:border-black focus:bg-white transition-all duration-300 text-gray-900"
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

                                {/* Message */}
                                <div className="relative">
                                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                        Your message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none text-gray-900
                                            ${focusedField === 'message' ? 'border-black bg-white' : 'border-transparent'}`}
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </motion.button>

                                {/* WhatsApp Alternative */}
                                <div className="relative mt-6 pt-4">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-200"></div>
                                    </div>
                                    <div className="relative flex justify-center text-xs">
                                        <span className="px-3 bg-white text-gray-400">Or</span>
                                    </div>
                                </div>

                                <a
                                    href="https://wa.me/918527664228"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full py-3 border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:border-black hover:bg-black hover:text-white transition-all duration-300 group"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Chat with us on WhatsApp
                                </a>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}