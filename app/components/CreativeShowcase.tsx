"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Heart,
  MessageCircle,
  TrendingUp,
  Users,
  Award,
  Clock,
  Sparkles,
  Instagram,
} from "lucide-react";

// Use local images - you need to download the Instagram images and add them to /public/creatives/
const creativeContent = [
  {
    type: "post" as const,
    image: "/creatives/delhi059.jpg", // Download from Instagram and save here
    brand: "Delhi059",
    likes: "2.4k",
    comments: "156",
    instagramUrl: "https://www.instagram.com/p/DBjCxUbuKge/",
  },
  {
    type: "post" as const,
    image: "/creatives/localride.jpg",
    brand: "Local Ride",
    likes: "3.1k",
    comments: "203",
    instagramUrl: "https://www.instagram.com/p/DSGIHDZgcQm/",
  },
  {
    type: "post" as const,
    image: "/creatives/promaccreatives.png",
    brand: "Promac Advisory",
    likes: "1.9k",
    comments: "124",
    instagramUrl: null,
  },
  {
    type: "post" as const,
    image: "/creatives/astronexus.jpg",
    brand: "Astro Nexus",
    likes: "1.8k",
    comments: "89",
    instagramUrl: "https://www.instagram.com/p/DTSxqv6iNh5/",
  },
  {
    type: "post" as const,
    image: "/creatives/deecee.jpg",
    brand: "Dee Cee Accessories",
    likes: "2.2k",
    comments: "167",
    instagramUrl: "https://www.instagram.com/p/DHIHRiZSdrU/",
  },
  {
    type: "post" as const,
    image: "/creatives/biryanibar.jpg",
    brand: "Biryani Bar",
    likes: "3.5k",
    comments: "234",
    instagramUrl: null,
  },
];

// Ticker Component
const tickerWords = [
  "CREATIVITY",
  "·",
  "INNOVATION",
  "·",
  "IMPACT",
  "·",
  "VISUAL STORYTELLING",
  "·",
  "ENGAGEMENT",
  "·",
];

function Ticker() {
  const repeated = [...tickerWords, ...tickerWords, ...tickerWords];
  return (
    <div className="overflow-hidden whitespace-nowrap select-none py-3 border-y border-black/5">
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

export default function CreativeShowcase() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);
  const sectionRef = React.useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.97, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
      id="creative-showcase"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:60px_60px]" />

      <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
        <defs>
          <pattern
            id="diagonalCreative"
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
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalCreative)" />
      </svg>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Ticker */}
        <motion.div style={{ opacity }} className="mt-8">
          <Ticker />
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          style={{ scale }}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-px bg-black/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
            <span className="text-black/50 text-[10px] font-mono tracking-[0.3em] uppercase">
              Our Creative Journey
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
            <div className="w-8 h-px bg-black/30" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-black">
            A Legacy Reborn,
            <span className="relative inline-block mx-2">
              A Vision Renewed
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-black"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              />
            </span>
          </h2>

          <p className="text-black/50 text-base max-w-2xl mx-auto">
            Every great story has chapters of triumph and transformation. Ours
            began with a dream—to build brands that don't just exist, but
            inspire, connect, and dominate.
          </p>
        </motion.div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              title: "The Beginning",
              desc: "Building 30+ brands from ground up",
              icon: Clock,
              color: "#FF4D1C",
            },
            {
              title: "The Transformation",
              desc: "A restart fueled by passion & experience",
              icon: TrendingUp,
              color: "#00E5FF",
            },
            {
              title: "The Vision",
              desc: "Crafting legacies, telling stories",
              icon: Award,
              color: "#B8FF3C",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white border border-gray-100 rounded-2xl p-6 text-center transition-all duration-500 hover:shadow-xl overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: item.color }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  />

                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-black flex items-center justify-center shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-black/50">{item.desc}</p>

                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-black rounded-b-2xl"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Instagram Feed Grid */}
        <motion.div style={{ y, opacity }} className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <Instagram className="w-5 h-5 text-black/40" />
              <h3 className="text-2xl font-bold text-black">
                Our Creative Universe
              </h3>
            </div>
            <p className="text-black/50 text-sm">
              Visual stories that connect and inspire
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {creativeContent.map((item, idx) => {
              // Determine if we should show the fallback
              const imagePath = item.image;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 ${item.instagramUrl ? "cursor-pointer" : ""}`}
                  onClick={() => {
                    if (item.instagramUrl) {
                      window.open(
                        item.instagramUrl,
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }
                  }}
                >
                  <Image
                    src={imagePath}
                    alt={item.brand}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://placehold.co/600x600/e5e7eb/9ca3af?text=Image+Not+Found";
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-bold text-sm mb-2">
                        {item.brand}
                      </p>
                      <div className="flex items-center gap-4 text-white/80 text-xs">
                        <span className="flex items-center gap-1">
                          <Heart size={12} />
                          {item.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle size={12} />
                          {item.comments}
                        </span>
                        {item.instagramUrl && (
                          <span className="flex items-center gap-1 ml-auto">
                            <Instagram size={12} />
                            <span className="text-[9px]">View</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Top Bar */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-0.5 bg-white"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <span>Explore Our Full Journey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          <div className="inline-flex items-center gap-2 mt-4">
            <div className="w-8 h-px bg-black/20" />
            <p className="text-[10px] text-black/40 tracking-wider">
              Follow us on Instagram for more creative content
            </p>
            <div className="w-8 h-px bg-black/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
