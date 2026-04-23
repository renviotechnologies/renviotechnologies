'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import LogoCarousel from './LogoCarousel';
import LogoCarouselMobile from './LogoCarouselMobile';

const slides = [
  {
    title: "Renvio Technologies",
    subtitle: "AI Powered Marketing Agency"
  },
  {
    title: "Digital Media Maestro",
    subtitle: "Crafting Your Online Presence"
  },
  {
    title: "Helping Brands Grow",
    subtitle: "Strategic. Measurable. Seamless."
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-green-200 flex items-center justify-center overflow-hidden">

      {/* 🔥 Animated Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Background"
          fill
          className="object-cover opacity-20 scale-110 animate-[pulse_10s_ease-in-out_infinite]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-transparent" />
      </div>

      {/* ✨ Floating Blur Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">

          {/* LEFT */}
          <div className="max-w-2xl">

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-sm md:text-lg font-semibold tracking-[0.3em] text-gray-500 uppercase mb-4">
                  {slides[currentSlide].subtitle}
                </h2>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-black via-gray-800 to-gray-500 bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </h1>
              </motion.div>
            </AnimatePresence>

            {/* Description */}
            <motion.p
              className="mt-6 text-lg text-gray-600 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Renvio is an AI powered pioneering advertising and marketing company dedicated to helping businesses grow with powerful digital strategies.
            </motion.p>

            {/* 🚀 CTA Buttons */}
            <motion.div
              className="mt-8 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                href="/services"
                className="relative px-8 py-4 bg-black text-white font-bold rounded-full overflow-hidden group"
              >
                <span className="relative z-10">Explore Services</span>

                {/* Hover Animation */}
                <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 border border-gray-300 rounded-full hover:bg-gray-100 transition"
              >
                Contact
              </Link>
            </motion.div>
          </div>

          {/* RIGHT - Carousel */}
          <motion.div
            className="h-[140px] lg:h-[600px] relative lg:pl-12"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="lg:hidden">
              <LogoCarouselMobile />
            </div>

            <div className="hidden lg:block h-full">
              <LogoCarousel />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-10 bg-black"
                : "w-4 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

    </section>
  );
}