"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function TestimonialsSection() {
  return (
    <div className="min-h-[30rem] md:min-h-[40rem] flex flex-col bg-white items-center justify-center relative overflow-hidden py-12 md:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gray-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-100 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
           
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2"
          >
            What Our Clients Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm md:text-base"
          >
            Hear from those who've experienced our work
          </motion.p>
        </div>

        {/* Infinite Moving Cards */}
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />

        {/* Review Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 md:mt-12 z-10 text-center"
        >
          <a
            href="https://www.google.com/maps/search/?api=1&query=Renvio+Dwarka+Sector+14+New+Delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full shadow-md hover:shadow-lg transition-all text-sm font-semibold hover:bg-gray-800"
          >
            <span className="text-lg">⭐</span>
            Leave a Google Review
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 pt-6 border-t border-gray-100 text-center"
        >
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              50+ Happy Clients
            </span>
            <span className="flex items-center gap-1">
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              4.9/5 Average Rating
            </span>
            <span className="flex items-center gap-1">
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              100+ Reviews
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TestimonialsSection;

const testimonials = [
  {
    quote: "Professional and supportive team. Great experience!",
    name: "DivYans Jos",
    title: "Local Guide",
    rating: 5,
  },
  {
    quote:
      "It has been a very good experience working with the Marktale World. All the Employees working here all very supportive, and the founder too is very visionary and Growth Focused",
    name: "Aditya Sharma",
    title: "Client",
    rating: 5,
  },
  {
    quote: "Excellent service and results.",
    name: "Pranav",
    title: "Client",
    rating: 5,
  },
  {
    quote: "Best and creative marketing team.",
    name: "Komal Kalyan",
    title: "Client",
    rating: 5,
  },
  {
    quote:
      "Choosing Renvio was the best decision for our brand launch! Their AI-powered marketing strategies helped us grow...",
    name: "Ashwani Singh",
    title: "Client",
    rating: 5,
  },
  {
    quote:
      "Renvio World Pvt. Ltd. transformed my small business into a local favorite! Their digital marketing strategies,...",
    name: "Kaustubh",
    title: "Client",
    rating: 5,
  },
];