'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Target, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

export default function BookAppointmentSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        datetime: '',
        message: ''
    });
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const benefits = [
        { icon: Target, title: 'Growth Roadmap', description: 'Clear path to scale your business' },
        { icon: TrendingUp, title: 'Strategy Review', description: 'Identify the right marketing tools' },
        { icon: Clock, title: '30-Minute Call', description: 'Free consultation with our experts' }
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Save to MongoDB
            const response = await fetch('/api/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to save appointment');
            }

            setSubmitStatus('success');
            
            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                datetime: '',
                message: ''
            });
            
            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
            
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const minDateTime = new Date();
    minDateTime.setMinutes(minDateTime.getMinutes() + 30);

    return (
        <section className="py-28 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-100 rounded-full blur-3xl opacity-40" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black rounded-full text-white text-sm font-medium w-fit">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            Free Consultation
                        </div>

                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight">
                                Book a Strategy
                                <span className="block text-gray-400">Call</span>
                            </h2>
                            <div className="w-20 h-1 bg-black mt-6" />
                        </div>

                        <div className="space-y-3">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                                        <benefit.icon className="w-5 h-5 text-black" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                                        <p className="text-sm text-gray-500">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-5 bg-gray-900 rounded-2xl text-center">
                            <p className="text-white text-sm">📞 Book a free consultation call with our experts</p>
                            <p className="text-white/50 text-xs mt-2">We'll contact you within 24 hours</p>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE - FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-black rounded-3xl transform rotate-3 scale-105 opacity-5" />
                        <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100">
                                <h3 className="text-xl font-bold text-black">Schedule Your Free Call</h3>
                                <p className="text-gray-400 text-sm">Fill the form and we'll reach out</p>
                            </div>

                            <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                {submitStatus === 'success' && (
                                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5" />
                                        Appointment booked successfully! We'll contact you soon.
                                    </div>
                                )}
                                
                                {submitStatus === 'error' && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                                        ✗ Failed to book appointment. Please try again.
                                    </div>
                                )}

                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition
                                        ${focusedField === 'name' ? 'border-black bg-white' : 'border-transparent'}`}
                                    placeholder="Full name *"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition
                                        ${focusedField === 'email' ? 'border-black bg-white' : 'border-transparent'}`}
                                    placeholder="Email address *"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('phone')}
                                    onBlur={() => setFocusedField(null)}
                                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition
                                        ${focusedField === 'phone' ? 'border-black bg-white' : 'border-transparent'}`}
                                    placeholder="Phone number *"
                                />

                                <input
                                    type="datetime-local"
                                    name="datetime"
                                    value={formData.datetime}
                                    onChange={handleChange}
                                    min={minDateTime.toISOString().slice(0, 16)}
                                    className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:border-black focus:bg-white transition"
                                />

                                <textarea
                                    name="message"
                                    rows={3}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:border-black focus:bg-white transition resize-none"
                                    placeholder="Your message (optional)"
                                />

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3.5 bg-black text-white font-semibold rounded-xl flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Book Free Call
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                                        </>
                                    )}
                                </motion.button>

                                <p className="text-xs text-gray-400 text-center">No spam. We'll confirm within 24h</p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}