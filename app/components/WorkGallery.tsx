"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

const workItems = [
  {
    id: "delhi059",
    title: "Delhi059",
    company: "Delhi059 Hospitality",
    category: "Restaurant - Canada",
    description:
      "From zero to Canada's culinary icon with 650+ Google reviews—all without spending a rupee on performance marketing.",
    image: "/Feature_logos/delhi059-logo.jpg",
    logo: "/Feature_logos/delhi059-logo.jpg",
    tags: ["Hospitality", "Featured"],
    metrics: { growth: "+650", reviews: "4.9★" },
  },
  {
    id: "local-ride",
    title: "Local Ride",
    company: "Local Ride Inc.",
    category: "Transportation - Canada",
    description:
      "Engineered from the ground up into a thriving Canadian rideshare powerhouse. Full-stack iOS/Android apps with zero commission for drivers.",
    image: "/Feature_logos/localride.jpg",
    logo: "/Feature_logos/localride.jpg",
    tags: ["App Development", "Featured"],
    metrics: { downloads: "250K+", rating: "4.8★" },
  },
  {
    id: "maggo-play-school",
    title: "Maggo Play School",
    company: "Maggo Education",
    category: "Education",
    description:
      "Creating joyful learning experiences for young minds in Delhi with innovative digital engagement.",
    image: "/Feature_logos/maggo.png",
    logo: "/Feature_logos/maggo.png",
    tags: ["Education"],
    metrics: { parents: "1,200+", engagement: "98%" },
  },
  {
    id: "promac-advisory",
    title: "Promac Advisory",
    company: "Promac Group",
    category: "Real Estate - Jaipur",
    description:
      "Transforming real estate advisory with data-driven insights and premium digital presence.",
    image: "/Feature_logos/promac.png",
    logo: "/Feature_logos/promac.png",
    tags: ["Real Estate"],
    metrics: { deals: "₹50Cr+", clients: "300+" },
  },
  {
    id: "cabtale",
    title: "CabTale",
    company: "CabTale Technologies",
    category: "Transportation",
    description:
      "Building the future of urban mobility with seamless booking experiences and real-time tracking solutions.",
    image: "/Feature_logos/cabtale.jpg",
    logo: "/Feature_logos/cabtale.jpg",
    tags: ["Mobility", "App Development"],
    metrics: { rides: "100K+", uptime: "99.9%" },
  },
  {
    id: "astro-nexus",
    title: "Astro Nexus",
    company: "Astro Nexus Media",
    category: "Astrology",
    description:
      "Bridging ancient wisdom with modern technology through engaging digital astrology experiences.",
    image: "/Feature_logos/astronexus.jpg",
    logo: "/Feature_logos/astronexus.jpg",
    tags: ["Digital Media"],
    metrics: { users: "50K+", sessions: "2M+" },
  },
  {
    id: "biryani-bar",
    title: "Biryani Bar",
    company: "Biryani Bar Hospitality",
    category: "Hospitality",
    description:
      "Crafting memorable dining experiences through innovative digital ordering and customer loyalty programs.",
    image: "/Feature_logos/biryanibar.jpg",
    logo: "/Feature_logos/biryanibar.jpg",
    tags: ["Hospitality"],
    metrics: { orders: "75K+", retention: "82%" },
  },
  {
    id: "writing-rodgers",
    title: "Writing Rodgers",
    company: "Rodgers Education",
    category: "Education",
    description:
      "Empowering writers and educators with comprehensive digital tools and content strategies.",
    image: "/Feature_logos/writing.png",
    logo: "/Feature_logos/writing.png",
    tags: ["Education"],
    metrics: { courses: "45+", students: "10K+" },
  },
];

const categories = [
  "All",
  "Hospitality",
  "App Development",
  "Education",
  "Real Estate",
  "Mobility",
  "Digital Media",
];

// Ticker Marquee Component - Matching HeroSection
const words = [
  "PORTFOLIO",
  "·",
  "CASE STUDIES",
  "·",
  "SUCCESS STORIES",
  "·",
  "CLIENT WORK",
  "·",
  "PROJECTS",
  "·",
];

function Ticker() {
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
            className="text-[11px] tracking-[0.25em] font-medium text-black/40"
          >
            {w}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// Work Card Component - Matching HeroSection Style
const WorkCard = ({ item, index, onHover, isHovered }: any) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
      className="group"
    >
      <Link href={`/projects/${item.id}`} className="block">
        <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-100 transition-all duration-500 hover:shadow-xl">
          {/* Top Accent Line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-0.5 bg-black"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Image Container */}
          <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                onLoad={() => setImageLoaded(true)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </motion.div>

            {/* Gradient Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              animate={{ opacity: isHovered ? 1 : 0.5 }}
              transition={{ duration: 0.3 }}
            />

            {/* Category Badge */}
            <motion.div
              className="absolute top-4 left-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
            >
              <span className="text-xs font-medium text-white bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                {item.category.split(" - ")[0]}
              </span>
            </motion.div>

            {/* Featured Badge */}
            {item.tags.includes("Featured") && (
              <motion.div
                className="absolute top-4 right-4"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
              >
                <div className="flex items-center gap-1.5 px-2 py-1 bg-white/95 backdrop-blur-sm rounded-full shadow-sm">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-black"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-[10px] font-medium text-black uppercase tracking-wider">
                    Featured
                  </span>
                </div>
              </motion.div>
            )}

            {/* Hover Arrow Indicator */}
            <motion.div
              className="absolute bottom-4 right-4"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            {/* Logo and Title */}
            <div className="flex items-start gap-3 mb-4">
              <motion.div
                className="relative w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-md overflow-hidden flex-shrink-0"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={item.logo || item.image}
                  alt={`${item.company} logo`}
                  fill
                  className="object-contain p-2"
                  sizes="48px"
                />
              </motion.div>

              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-black truncate group-hover:text-black/70 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-black/40 truncate">{item.company}</p>
              </div>
            </div>

            {/* Description */}
            <motion.p
              className="text-black/50 text-sm leading-relaxed line-clamp-2 mb-4"
              animate={{ opacity: isHovered ? 0.8 : 0.6 }}
              transition={{ duration: 0.3 }}
            >
              {item.description}
            </motion.p>

            {/* Metrics */}
            {item.metrics && (
              <motion.div
                className="grid grid-cols-2 gap-3 pt-3 border-t border-black/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
              >
                {Object.entries(item.metrics as Record<string, string>).map(
                  ([key, value], idx) => (
                    <motion.div
                      key={idx}
                      className="text-center"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-sm font-bold text-black">{value}</p>
                      <p className="text-[10px] text-black/40 uppercase tracking-wider">
                        {key}
                      </p>
                    </motion.div>
                  )
                )}
              </motion.div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {item.tags
                .filter((t) => t !== "Featured")
                .slice(0, 2)
                .map((tag, idx) => (
                  <motion.span
                    key={idx}
                    className="text-xs text-black/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.03 }}
                  >
                    #{tag}
                  </motion.span>
                ))}
            </div>

            {/* Bottom Progress Bar */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-black rounded-b-2xl"
              initial={{ width: "0%" }}
              animate={{ width: isHovered ? "100%" : "0%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function WorkGallery() {
  const [filter, setFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [particles, setParticles] = useState<React.ReactNode[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.97, 1]);

  const filteredItems =
    filter === "All"
      ? workItems
      : workItems.filter((item) => item.tags.includes(filter));

  // Generate particles only on client side to avoid window undefined error
  useEffect(() => {
    const generatedParticles = [...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-0.5 h-0.5 rounded-full bg-black"
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
      id="work"
    >
      {/* Background Elements - Matching HeroSection */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50/50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100/20 via-transparent to-transparent pointer-events-none" />

      {/* Grid Overlay - Matching HeroSection */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Diagonal Lines - Matching HeroSection */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="diagonalLinesWork"
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
              className="opacity-5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalLinesWork)" />
      </svg>

      {/* Floating Particles - Matching HeroSection */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {particles}
      </div>

      {/* Ticker - Matching HeroSection */}
      <motion.div style={{ opacity }} className="relative z-20 mt-8">
        <Ticker />
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section - Matching HeroSection */}
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
            <div className="w-8 h-px bg-black/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-black" />
            <span className="text-black/50 text-[10px] font-mono tracking-[0.3em] uppercase">
              Our Portfolio
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-black" />
            <div className="w-8 h-px bg-black/30" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Featured{" "}
            <span className="relative inline-block">
              Work
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-black rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-black/50 text-base max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Transforming brands through innovative digital solutions and
            measurable results.
          </motion.p>
        </motion.div>

        {/* Filters - Matching HeroSection Style */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {categories.map((cat, idx) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 overflow-hidden
                ${filter === cat ? "text-white" : "text-black/60 hover:text-black"}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 + idx * 0.03 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {filter === cat && (
                <motion.span
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-black rounded-full"
                  transition={{ type: "spring", duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          style={{ y, opacity }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <WorkCard
                key={item.id}
                item={item}
                index={index}
                isHovered={hoveredCard === item.id}
                onHover={(id: string | null) => setHoveredCard(id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button - Matching HeroSection CTA */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/projects">
            <motion.button
              className="group relative px-8 py-3.5 bg-black text-white font-bold rounded-full overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span
                className="absolute inset-0 bg-black/80"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                View All Projects
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Bottom Indicator */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-2">
            <div className="w-8 h-px bg-black/20" />
            <span className="text-[10px] text-black/40 tracking-wider">
              Ready to start your project?
            </span>
            <div className="w-8 h-px bg-black/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
