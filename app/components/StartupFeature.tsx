"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  TrendingUp,
  Star,
  Users,
  Globe,
  Rocket,
  BarChart3,
  Clock,
  Shield,
  Zap,
  Target,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// ─── DATA ───────────────────────────────────────────────────────────────────

const programFeatures = [
  {
    id: 0,
    icon: TrendingUp,
    title: "Rapid Scale",
    value: "3x",
    metric: "Average Growth",
    color: "#FF4D1C",
    description: "Proven frameworks that accelerate your market traction",
  },
  {
    id: 1,
    icon: Shield,
    title: "Enterprise Grade",
    value: "99.9%",
    metric: "Uptime & Reliability",
    color: "#00E5FF",
    description: "Infrastructure that scales with your business",
  },
  {
    id: 2,
    icon: Zap,
    title: "Lightning Fast",
    value: "2 Weeks",
    metric: "Launch Timeline",
    color: "#B8FF3C",
    description: "From concept to market in record time",
  },
  {
    id: 3,
    icon: Users,
    title: "Expert Team",
    value: "50+",
    metric: "Industry Experts",
    color: "#C084FC",
    description: "Dedicated specialists at your disposal",
  },
];

const successMetrics = [
  { label: "Revenue Growth", value: "+340%", color: "#FF4D1C" },
  { label: "Client Satisfaction", value: "4.9★", color: "#00E5FF" },
  { label: "Market Penetration", value: "3.8x", color: "#B8FF3C" },
  { label: "User Acquisition", value: "100K+", color: "#C084FC" },
];

const timelineSteps = [
  { week: "Week 1", title: "Discovery & Strategy", icon: Target },
  { week: "Week 2", title: "Implementation", icon: Rocket },
  { week: "Week 3", title: "Optimization", icon: BarChart3 },
  { week: "Week 4", title: "Scale & Growth", icon: TrendingUp },
];

// ─── CUSTOM COMPONENTS ─────────────────────────────────────────────────────

const AnimatedMetricCard = ({ feature, index, isActive }: any) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`group relative p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
        isActive
          ? "bg-gray-900 text-white shadow-xl"
          : "bg-white border border-gray-100 hover:border-gray-200"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${isActive ? "bg-white/10" : "bg-gray-50"}`}
        >
          <Icon
            className={`w-6 h-6 ${isActive ? "text-white" : "text-gray-700"}`}
          />
        </div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
          className={`text-2xl font-bold ${isActive ? "text-white" : "text-gray-900"}`}
          style={{ color: isActive ? "white" : feature.color }}
        >
          {feature.value}
        </motion.div>
      </div>

      <h3
        className={`text-lg font-bold mb-1 ${isActive ? "text-white" : "text-gray-900"}`}
      >
        {feature.title}
      </h3>
      <p
        className={`text-sm mb-3 ${isActive ? "text-gray-300" : "text-gray-500"}`}
      >
        {feature.metric}
      </p>
      <p className={`text-xs ${isActive ? "text-gray-400" : "text-gray-400"}`}>
        {feature.description}
      </p>

      <motion.div
        className={`absolute bottom-0 left-0 h-0.5 rounded-b-2xl transition-all duration-300 ${
          isActive ? "bg-white" : "bg-gray-900"
        }`}
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
      />
    </motion.div>
  );
};

const TimelineStep = ({ step, index, activeStep, onHover }: any) => {
  const Icon = step.icon;
  const isActive = activeStep === index;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="relative flex-1"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          animate={{ scale: isActive ? 1.1 : 1 }}
          className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-300 ${
            isActive
              ? "bg-gray-900 text-white shadow-lg"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <Icon className="w-5 h-5" />
        </motion.div>

        <div
          className={`text-xs font-mono mb-1 ${isActive ? "text-gray-900 font-bold" : "text-gray-400"}`}
        >
          {step.week}
        </div>
        <div
          className={`text-sm font-medium ${isActive ? "text-gray-900" : "text-gray-500"}`}
        >
          {step.title}
        </div>

        {index < timelineSteps.length - 1 && (
          <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gray-200">
            <motion.div
              className="h-full bg-gray-900"
              initial={{ width: "0%" }}
              whileInView={{ width: isActive ? "100%" : "0%" }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────

export default function StartupFeature() {
  const [activeMetric, setActiveMetric] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Auto-rotate metrics
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % successMetrics.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-100 to-purple-100 rounded-full blur-3xl opacity-10" />
      </div>

      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Rocket className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">
              GTM Acceleration Program
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Launch & Scale Your
            <span className="relative inline-block mx-3">
              Brand Globally
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gray-900 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
            </span>
          </h2>

          <p className="text-gray-500 text-lg">
            Enterprise-grade acceleration for ambitious B2C brands ready to
            dominate their markets
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {programFeatures.map((feature, index) => (
            <AnimatedMetricCard
              key={feature.id}
              feature={feature}
              index={index}
              isActive={hoveredCard === index}
            />
          ))}
        </div>

        {/* Success Metrics Row */}
        <motion.div
          className="bg-gray-900 rounded-2xl p-8 mb-20 overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-white text-2xl font-bold mb-2">
                Proven Track Record
              </h3>
              <p className="text-gray-400">Real results from real brands</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    animate={{
                      scale: activeMetric === index ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-1"
                    style={{ color: metric.color }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Your 4-Week Launch Timeline
            </h3>
            <p className="text-gray-500">
              From strategy to scale in record time
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4">
            {timelineSteps.map((step, index) => (
              <TimelineStep
                key={index}
                step={step}
                index={index}
                activeStep={activeStep}
                onHover={setActiveStep}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />

          <div className="relative z-10 p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Accelerate Your Growth?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join 50+ brands that have scaled with our GTM program
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 rounded-full font-bold shadow-lg hover:shadow-xl transition-all group"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gray-900 text-gray-900" />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              4.9/5 from 100+ founders
            </span>
          </div>
          <div className="w-px h-4 bg-gray-300 hidden sm:block" />
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-gray-900" />
            <span className="text-sm text-gray-500">ISO 27001 Certified</span>
          </div>
          <div className="w-px h-4 bg-gray-300 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-900" />
            <span className="text-sm text-gray-500">Global Coverage</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }
        .animate-shimmer {
          animation: shimmer 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
