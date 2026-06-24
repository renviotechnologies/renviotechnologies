"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  Compass,
  BarChart2,
  Layers,
  Sparkles,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";

// Logo Icon
const LogoIcon = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-12 h-12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="50"
      cy="50"
      r="45"
      stroke="currentColor"
      strokeWidth="3"
      className="text-gray-900"
    />
    <path
      d="M35 50 L65 50 M50 35 L50 65"
      stroke="currentColor"
      strokeWidth="3"
      className="text-gray-900"
    />
    <circle
      cx="50"
      cy="50"
      r="8"
      fill="currentColor"
      className="text-gray-900"
    />
  </svg>
);

const coreValues = [
  {
    id: "01",
    title: "Strategic Excellence",
    icon: Target,
    description:
      "Every decision is backed by data, research, and strategic thinking to ensure maximum impact for your brand.",
    color: "#FF4D1C",
    points: [
      "Data-Driven Decisions",
      "Market Research",
      "Competitive Analysis",
    ],
    gradient: "from-orange-500/5 to-transparent",
  },
  {
    id: "02",
    title: "Measurable Results",
    icon: TrendingUp,
    description:
      "We're obsessed with outcomes, not just activities. Every campaign is designed with clear KPIs and ROI targets.",
    color: "#00E5FF",
    points: ["Real-time Analytics", "ROI Tracking", "Performance Optimization"],
    gradient: "from-cyan-500/5 to-transparent",
  },
  {
    id: "03",
    title: "Innovation First",
    icon: Zap,
    description:
      "Staying ahead of trends and leveraging cutting-edge technologies to give our clients a competitive advantage.",
    color: "#B8FF3C",
    points: ["Emerging Tech", "Creative Solutions", "Future-Proof Strategies"],
    gradient: "from-lime-500/5 to-transparent",
  },
  {
    id: "04",
    title: "Uncompromising Integrity",
    icon: Shield,
    description:
      "Transparency, honesty, and ethical practices form the foundation of every client relationship we build.",
    color: "#C084FC",
    points: [
      "Full Transparency",
      "Ethical Practices",
      "Long-term Partnerships",
    ],
    gradient: "from-purple-500/5 to-transparent",
  },
  {
    id: "05",
    title: "Global Perspective",
    icon: Globe,
    description:
      "Understanding diverse markets and cultural nuances to create campaigns that resonate worldwide.",
    color: "#FF6B6B",
    points: ["Multi-market Expertise", "Cultural Intelligence", "Global Reach"],
    gradient: "from-red-500/5 to-transparent",
  },
  {
    id: "06",
    title: "Continuous Growth",
    icon: TrendingUp,
    description:
      "We never stop learning, evolving, and pushing boundaries to deliver exceptional value to our clients.",
    color: "#4ECDC4",
    points: ["Ongoing Education", "Process Improvement", "Innovation Labs"],
    gradient: "from-teal-500/5 to-transparent",
  },
];

// Animated Counter Component
const AnimatedCounter = ({
  value,
  color,
}: {
  value: string;
  color: string;
}) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = numericValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <motion.span
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      style={{ color }}
      className="font-bold"
    >
      {count}
      {suffix}
    </motion.span>
  );
};

// Individual Value Card Component with Enhanced Animations
const ValueCard = ({
  value,
  index,
}: {
  value: (typeof coreValues)[0];
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current && isHovered) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        className="relative bg-white border border-gray-200 rounded-2xl p-6 overflow-hidden"
        animate={{
          borderColor: isHovered ? value.color + "40" : "#e5e7eb",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated Gradient Background on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${value.color}08, transparent 70%)`,
          }}
        />

        {/* Floating Particles on Hover */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: [0, (i - 1) * 30],
                    y: [0, -50],
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                  className="absolute pointer-events-none"
                  style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                  }}
                >
                  <Star size={8} style={{ color: value.color }} />
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>

        {/* ID Badge with Animation */}
        <motion.div
          className="absolute top-4 right-4 text-xs font-mono font-bold overflow-hidden"
          animate={{
            color: isHovered ? value.color : "#d1d5db",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="inline-block"
          >
            {value.id}
          </motion.span>
        </motion.div>

        {/* Icon Container with Spring Animation */}
        <motion.div
          className="mb-5"
          animate={{
            rotate: isHovered ? [0, -5, 5, -5, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${value.color}10` }}
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <value.icon size={24} style={{ color: value.color }} />
          </motion.div>
        </motion.div>

        {/* Title with Stagger Animation */}
        <motion.h3
          className="text-xl font-bold mb-2 text-gray-900"
          animate={{
            x: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {value.title.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </motion.h3>

        {/* Description with Fade Animation */}
        <motion.p
          className="text-gray-600 text-sm leading-relaxed mb-4"
          animate={{
            opacity: isHovered ? 0.9 : 0.7,
          }}
          transition={{ duration: 0.3 }}
        >
          {value.description}
        </motion.p>

        {/* Key Points with Stagger Entrance */}
        <motion.div className="space-y-1.5">
          {value.points.map((point, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 text-xs text-gray-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.07 }}
            >
              <motion.div
                animate={{
                  rotate: isHovered ? 360 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle size={12} style={{ color: value.color }} />
              </motion.div>
              <span>{point}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Line with Progress Bar */}
        <motion.div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <motion.span
              className="text-xs text-gray-400"
              animate={{
                color: isHovered ? value.color : "#9ca3af",
              }}
            >
              Core principle
            </motion.span>
            <motion.div
              whileHover={{ x: 5 }}
              animate={{
                x: isHovered ? 3 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight size={14} style={{ color: value.color }} />
            </motion.div>
          </div>
          {/* Animated Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r rounded-b-2xl"
            style={{
              background: `linear-gradient(90deg, ${value.color}, ${value.color}60)`,
              width: isHovered ? "100%" : "0%",
            }}
            animate={{ width: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll animations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]);
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Parallax effects for background elements
  const orb1X = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const orb2X = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  // Floating animation for decorations
  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-gray-50/50 to-transparent rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50/50 to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Animated Dot Pattern */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #d1d5db 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </motion.div>

      {/* Animated Floating Elements */}
      <motion.div
        className="absolute left-10 top-1/4 text-gray-200 pointer-events-none"
        animate={floatAnimation}
      >
        <Star size={20} />
      </motion.div>
      <motion.div
        className="absolute right-20 bottom-1/3 text-gray-200 pointer-events-none"
        animate={{
          ...floatAnimation,
          y: [0, 15, 0],
          transition: { duration: 5, repeat: Infinity },
        }}
      >
        <Sparkles size={16} />
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section with Enhanced Animations */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="text-center mb-16"
        >
          {/* Label with Bounce Animation */}
          <motion.div
            className="inline-flex items-center justify-center gap-2 mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="h-px w-8 bg-gray-300" />
            <motion.span
              className="text-gray-500 uppercase tracking-[0.2em] text-xs font-semibold"
              
              transition={{ duration: 2, repeat: Infinity }}
            >
              Our Foundation
            </motion.span>
            <div className="h-px w-8 bg-gray-300" />
          </motion.div>

          {/* Main Title with Split Text Animation */}
          <motion.h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            {"Core Values That".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="relative inline-block mx-3"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              Define Us
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-1 bg-gray-400 rounded-full"
              />
            </motion.span>
          </motion.h2>

          {/* Subtitle with Fade Animation */}
          <motion.p
            className="text-gray-500 max-w-2xl mx-auto text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Guiding principles that shape our work, decisions, and relationships
            with every client
          </motion.p>

          {/* Progress Indicator */}
          <motion.div
            className="w-24 h-0.5 bg-gray-200 mx-auto mt-8 rounded-full overflow-hidden"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <motion.div
              className="h-full bg-gray-400 rounded-full"
              style={{
                width: useTransform(springProgress, [0, 1], ["0%", "100%"]),
              }}
            />
          </motion.div>
        </motion.div>

        {/* Core Values Grid with Stagger Children */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {coreValues.map((value, index) => (
            <ValueCard key={value.id} value={value} index={index} />
          ))}
        </motion.div>

        {/* Bottom Philosophy Statement with Scroll-Triggered Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center pt-8 border-t border-gray-100"
        >
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} className="text-gray-400" />
              </motion.div>
              <motion.span
                className="text-xs uppercase tracking-wider text-gray-400 font-semibold"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Our Philosophy
              </motion.span>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} className="text-gray-400" />
              </motion.div>
            </motion.div>

            <motion.p
              className="text-gray-600 text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              We believe that exceptional results come from a foundation of
              strong values. Every strategy we craft, every campaign we execute,
              and every relationship we build is guided by these core principles
              — ensuring long-term success for our clients.
            </motion.p>

            {/* Animated Signature Line */}
            <motion.div
              className="mt-6 flex items-center justify-center gap-2"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "auto", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div
                className="w-12 h-px bg-gray-200"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              />
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-gray-300"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="w-12 h-px bg-gray-200"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Counter Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 pt-8 flex justify-center gap-12 flex-wrap"
        >
          {[
            { value: "500+", label: "Projects Delivered", color: "#FF4D1C" },
            { value: "98%", label: "Client Satisfaction", color: "#00E5FF" },
            { value: "24/7", label: "Support Available", color: "#B8FF3C" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="text-3xl font-bold" style={{ color: stat.color }}>
                <AnimatedCounter value={stat.value} color={stat.color} />
              </div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
