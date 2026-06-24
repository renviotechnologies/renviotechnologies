"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Smartphone,
  Globe,
  Search,
  FileText,
  TrendingUp,
  BarChart,
  Target,
  Video,
  Code,
  Sparkles,
  CheckCircle2,
  Rocket,
  Zap,
  Shield,
  Award,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "App Development",
    icon: Smartphone,
    description:
      "High-performance Android & iOS applications with stunning UI/UX.",
    tags: ["iOS", "Android", "React Native"],
    color: "#FF4D1C",
    stat: "50+ Apps",
    bgColor: "orange",
  },
  {
    title: "Web Development",
    icon: Globe,
    description: "Scalable, responsive websites and web applications.",
    tags: ["Next.js", "React", "Node.js"],
    color: "#00E5FF",
    stat: "100+ Websites",
    bgColor: "cyan",
  },
  {
    title: "Market Research",
    icon: Search,
    description:
      "Qualitative & quantitative market analysis for informed decisions.",
    tags: ["Analytics", "Insights", "Strategy"],
    color: "#B8FF3C",
    stat: "500+ Studies",
    bgColor: "lime",
  },
  {
    title: "Marketing Strategy",
    icon: FileText,
    description: "Data-driven marketing plans for sustainable growth.",
    tags: ["Strategy", "Planning", "Execution"],
    color: "#C084FC",
    stat: "200+ Campaigns",
    bgColor: "purple",
  },
  {
    title: "Performance Marketing",
    icon: TrendingUp,
    description: "ROI-focused advertising campaigns across all channels.",
    tags: ["Google Ads", "Meta Ads", "Programmatic"],
    color: "#FF6B6B",
    stat: "3.8x ROAS",
    bgColor: "red",
  },
  {
    title: "SEO & Analytics",
    icon: BarChart,
    description: "Visibility & actionable data insights to dominate search.",
    tags: ["SEO", "Analytics", "Reporting"],
    color: "#4ECDC4",
    stat: "#1 Rankings",
    bgColor: "teal",
  },
  {
    title: "Lead Generation",
    icon: Target,
    description: "High-quality lead conversion strategies that deliver.",
    tags: ["B2B", "B2C", "Conversion"],
    color: "#FFD93D",
    stat: "50K+ Leads",
    bgColor: "yellow",
  },
  {
    title: "Video Content",
    icon: Video,
    description: "Engaging brand storytelling through professional video.",
    tags: ["Production", "Editing", "Animation"],
    color: "#FF6B6B",
    stat: "1M+ Views",
    bgColor: "rose",
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered", color: "#FF4D1C" },
  { value: "98%", label: "Client Satisfaction", color: "#00E5FF" },
  { value: "50+", label: "Team Members", color: "#B8FF3C" },
  { value: "24/7", label: "Support Available", color: "#C084FC" },
];

// Ticker Marquee Component
const words = [
  "APP DEVELOPMENT",
  "·",
  "WEB DEVELOPMENT",
  "·",
  "MARKET RESEARCH",
  "·",
  "SEO",
  "·",
  "PERFORMANCE MARKETING",
  "·",
  "LEAD GENERATION",
  "·",
];

function Ticker({ color }: { color: string }) {
  const repeated = [...words, ...words, ...words];
  return (
    <div
      className="overflow-hidden whitespace-nowrap select-none py-3 border-y"
      style={{ borderColor: "rgba(0,0,0,0.07)" }}
    >
      <motion.div
        className="inline-flex gap-8"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
      >
        {repeated.map((w, i) => (
          <span
            key={i}
            className="text-[11px] tracking-[0.25em] font-medium"
            style={{ color: w === "·" ? color : "rgba(0,0,0,0.25)" }}
          >
            {w}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// Service Card Component
const ServiceCard = ({ service, index, isHovered, onHover }: any) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="group"
    >
      <div className="relative bg-white border border-gray-100 rounded-2xl p-6 transition-all duration-500 hover:border-gray-200 hover:shadow-xl overflow-hidden">
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${service.color}08, transparent 70%)`,
          }}
        />

        {/* Icon Container */}
        <motion.div
          className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-5"
          style={{ backgroundColor: `${service.color}10` }}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="w-7 h-7" style={{ color: service.color }} />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.slice(0, 3).map((tag: string, i: number) => (
            <span
              key={i}
              className="text-[10px] px-2 py-1 rounded-full"
              style={{
                backgroundColor: `${service.color}10`,
                color: service.color,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stat & Link */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <div className="text-lg font-bold" style={{ color: service.color }}>
              {service.stat}
            </div>
            <div className="text-[10px] text-gray-400">Projects</div>
          </div>
          <Link href="/services">
            <motion.div
              whileHover={{ x: 5 }}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-gray-200 transition-colors"
            >
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </motion.div>
          </Link>
        </div>

        {/* Bottom Indicator Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 rounded-full"
          style={{ backgroundColor: service.color }}
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 + 0.3, duration: 0.6 }}
        />
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [particles, setParticles] = useState<React.ReactNode[]>([]);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.97, 1]);

  // Generate particles only on client side to avoid window undefined error
  useEffect(() => {
    setMounted(true);
    const generatedParticles = [...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-0.5 h-0.5 rounded-full bg-gray-400"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          y: [null, -50, -100],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 8 + 4,
          repeat: Infinity,
          delay: Math.random() * 5,
        }}
      />
    ));
    setParticles(generatedParticles);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
      id="services"
    >
      {/* Background Elements - Matching HeroSection */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-transparent to-gray-100/30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100/30 via-transparent to-transparent pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Diagonal Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="diagonalLinesServices"
            patternUnits="userSpaceOnUse"
            width="40"
            height="40"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="40"
              stroke="black"
              strokeWidth="0.5"
              className="opacity-10"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalLinesServices)" />
      </svg>

      {/* Floating Particles - Only render on client side */}
      {mounted && (
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {particles}
        </div>
      )}

      {/* Ticker */}
      <motion.div style={{ opacity }} className="relative z-20 mt-8">
        <Ticker color="#FF4D1C" />
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          style={{ scale }}
        >
          <motion.div
            className="inline-flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-px bg-gray-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-900" />
            <span className="text-gray-500 text-xs font-mono tracking-widest uppercase">
              What We Do
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-900" />
            <div className="w-8 h-px bg-gray-300" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Our{" "}
            <span className="relative inline-block">
              Services
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gray-900 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-500 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Comprehensive solutions to help your brand grow and succeed in the
            digital landscape
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          style={{ y, opacity }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isHovered={hoveredCard === index}
              onHover={setHoveredCard}
            />
          ))}
        </motion.div>

        {/* Stats Section */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-16 overflow-hidden relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-white text-2xl font-bold mb-2">
                Our Impact in Numbers
              </h3>
              <p className="text-gray-400">
                Delivering excellence across every project
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    className="text-3xl md:text-4xl font-bold mb-1"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

          <div className="relative z-10 p-8 md:p-12 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6"
            >
              <Rocket className="w-4 h-4 text-white" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Ready to Scale?
              </span>
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Let's Build Something Great Together
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get a free consultation and discover how our services can
              transform your business
            </p>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 rounded-full font-bold shadow-lg hover:shadow-xl transition-all group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Bottom Indicator */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2">
            <div className="w-8 h-px bg-gray-300" />
            <span className="text-xs text-gray-400 tracking-wider">
              Trusted by 150+ brands worldwide
            </span>
            <div className="w-8 h-px bg-gray-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
