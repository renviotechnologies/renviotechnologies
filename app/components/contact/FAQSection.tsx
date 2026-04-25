"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  HelpCircle,
  MessageCircle,
  Mail,
  Headphones,
} from "lucide-react";

const faqs = [
  {
    q: "How fast can you onboard a new client?",
    a: "We move at the speed of your business. Typically, we can complete discovery and kick off execution within 5-7 business days. Our streamlined onboarding process ensures you're up and running quickly without compromising on quality.",
    category: "Process",
  },
  {
    q: "Do you work with pre-seed startups?",
    a: "Yes. In fact, we specialize in them. Our 'MaaS for Startups' package is designed specifically to give early-stage founders a full marketing stack without the C-suite costs. We've helped numerous startups go from concept to market leaders.",
    category: "Clients",
  },
  {
    q: "What is your pricing model?",
    a: "We offer both retainer-based models (MaaS) and project-based pricing. We believe in transparency, so there are no hidden fees or surprise billings. Every client receives a detailed breakdown before any work begins.",
    category: "Pricing",
  },
  {
    q: "Can you handle international projects?",
    a: "Absolutely. We are already building global brands in Canada, USA, and India. Our team is accustomed to working across time zones and cultural nuances, ensuring seamless communication and delivery worldwide.",
    category: "Global",
  },
  {
    q: "What industries do you specialize in?",
    a: "We have deep expertise across multiple industries including hospitality, real estate, e-commerce, technology, automotive, and education. Our diverse portfolio allows us to bring unique insights to every project.",
    category: "Expertise",
  },
  {
    q: "How do you measure success?",
    a: "We use data-driven KPIs tailored to your specific goals. Whether it's brand awareness, lead generation, or revenue growth, we provide transparent reporting and regular performance reviews to ensure we're hitting targets.",
    category: "Results",
  },
];

const categories = [
  "All",
  "Process",
  "Clients",
  "Pricing",
  "Global",
  "Expertise",
  "Results",
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

 const handleEmailClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&to=renviotechnologies@gmail.com",
      "_blank",
    );
  };

  const handleChatClick = () => {
    const phone = "917489951514";
    const message = encodeURIComponent(
      "Hi! I would like to know more about your services."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const filteredFaqs =
    selectedCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
            <HelpCircle size={14} className="text-gray-600" />
            <span className="text-gray-600 font-bold tracking-widest uppercase text-xs">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-300 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about working with us. Can't find what
            you're looking for? Feel free to reach out directly.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gray-900 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3
                    className={`text-lg md:text-xl font-semibold transition-colors ${
                      openIndex === index ? "text-gray-900" : "text-gray-700"
                    }`}
                  >
                    {item.q}
                  </h3>
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredFaqs.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <HelpCircle size={24} className="text-gray-400" />
            </div>
            <p className="text-gray-500">No questions found for this category.</p>
          </motion.div>
        )}

        {/* Still Have Questions? */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-10 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Headphones size={14} className="text-gray-300" />
              <span className="text-gray-300 text-sm">Still have questions?</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              We're Here to Help
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is ready to assist you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={handleChatClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:gap-3"
              >
                <MessageCircle size={18} />
                Chat with Us
              </button>
              <button
                onClick={handleEmailClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-full font-semibold hover:bg-gray-600 transition-all duration-300"
              >
                <Mail size={18} />
                Email Support
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}