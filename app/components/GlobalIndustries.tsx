"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Award,
  Building2,
  Cpu,
  Stethoscope,
  Car,
  Film,
  GraduationCap,
  Factory,
  Landmark,
  Crown,
} from "lucide-react";
import Link from "next/link";

// Indian Cities Data
const indianCities = [
  {
    name: "Mumbai",
    short: "BOM",
    x: 35,
    y: 45,
    identity: "Financial Capital",
    icon: Building2,
    color: "#FF4D1C",
    stats: { projects: "150+", growth: "+45%" },
    description: "India's economic powerhouse & entertainment hub",
  },
  {
    name: "Delhi NCR",
    short: "DEL",
    x: 45,
    y: 35,
    identity: "Political Hub",
    icon: Landmark,
    color: "#00E5FF",
    stats: { projects: "180+", growth: "+52%" },
    description: "National capital & political center",
  },
  {
    name: "Bangalore",
    short: "BLR",
    x: 50,
    y: 55,
    identity: "Silicon Valley",
    icon: Cpu,
    color: "#B8FF3C",
    stats: { projects: "200+", growth: "+68%" },
    description: "India's tech & startup capital",
  },
  {
    name: "Hyderabad",
    short: "HYD",
    x: 55,
    y: 60,
    identity: "Pharma Hub",
    icon: Stethoscope,
    color: "#C084FC",
    stats: { projects: "120+", growth: "+38%" },
    description: "City of pearls & innovation hub",
  },
  {
    name: "Chennai",
    short: "MAA",
    x: 60,
    y: 65,
    identity: "Detroit of India",
    icon: Car,
    color: "#FF6B6B",
    stats: { projects: "110+", growth: "+35%" },
    description: "Automotive & manufacturing hub",
  },
  {
    name: "Kolkata",
    short: "CCU",
    x: 58,
    y: 48,
    identity: "Cultural Capital",
    icon: Film,
    color: "#4ECDC4",
    stats: { projects: "95+", growth: "+28%" },
    description: "City of joy & intellectual heritage",
  },
  {
    name: "Pune",
    short: "PNQ",
    x: 42,
    y: 50,
    identity: "Oxford of East",
    icon: GraduationCap,
    color: "#FFD93D",
    stats: { projects: "85+", growth: "+32%" },
    description: "Education & manufacturing hub",
  },
  {
    name: "Ahmedabad",
    short: "AMD",
    x: 32,
    y: 48,
    identity: "Manchester of East",
    icon: Factory,
    color: "#FF8C42",
    stats: { projects: "78+", growth: "+30%" },
    description: "Textile & commerce hub",
  },
];

const stats = [
  { value: "350+", label: "Projects Delivered", icon: TrendingUp },
  { value: "98%", label: "Client Satisfaction", icon: Users },
  { value: "15+", label: "Cities Covered", icon: Award },
  { value: "8+", label: "Industries", icon: Building2 },
];

// Ticker
const tickerWords = [
  "PRESENCE",
  "·",
  "IMPACT",
  "·",
  "GROWTH",
  "·",
  "REACH",
  "·",
  "SCALE",
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

// City Dot Component for Map
const CityDot = ({ city, index, activeCity, onHover }: any) => {
  const isActive = activeCity === index;

  return (
    <g
      style={{ cursor: "pointer" }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onHover(index)}
    >
      {/* Pulse Ring */}
      {isActive && (
        <circle
          cx={city.x}
          cy={city.y}
          r="18"
          fill="none"
          stroke={city.color}
          strokeWidth="1"
          opacity="0.3"
        >
          <animate
            attributeName="r"
            from="12"
            to="24"
            dur="1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            from="0.4"
            to="0"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
      )}

      {/* Dot */}
      <circle
        cx={city.x}
        cy={city.y}
        r={isActive ? "8" : "5"}
        fill={city.color}
        stroke="white"
        strokeWidth="2"
      />

      {/* Label */}
      <text
        x={city.x}
        y={city.y - 12}
        textAnchor="middle"
        fontSize="8"
        fill="black"
        fontWeight="bold"
        className="font-mono"
      >
        {city.short}
      </text>
    </g>
  );
};

export default function IndianPresence() {
  const [activeCity, setActiveCity] = useState<number>(0);
  const [hoveredCity, setHoveredCity] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.97, 1]);

  const currentCity = indianCities[activeCity];
  const displayCity =
    hoveredCity !== null ? indianCities[hoveredCity] : currentCity;
  const IconComponent = displayCity.icon;

  // Auto-rotate cities
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveCity((prev) => (prev + 1) % indianCities.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50/50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Decorative Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full border border-black/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border border-black/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Ticker */}
      <motion.div style={{ opacity }} className="relative z-20 mt-8">
        <Ticker />
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          style={{ scale }}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-px bg-black/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-black" />
            <span className="text-black/50 text-[10px] font-mono tracking-[0.3em] uppercase">
              Our Footprint
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-black" />
            <div className="w-8 h-px bg-black/30" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-black">
            Across{" "}
            <span className="relative inline-block">
              India
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-black" />
            </span>
          </h2>

          <p className="text-black/50 text-base max-w-2xl mx-auto">
            Strong presence in 15+ cities, delivering excellence across the
            nation
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-black/5 flex items-center justify-center group-hover:scale-110 transition">
                  <Icon className="w-6 h-6 text-black/60" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-black">
                  {stat.value}
                </div>
                <div className="text-xs text-black/40 mt-1">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Map Section */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Map Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-white/50 rounded-2xl p-4 border border-gray-100">
                {/* India Map SVG */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-full aspect-square"
                  style={{ background: "transparent" }}
                >
                  {/* India Outline */}
                  <path
                    d="M50,5 L55,8 L58,12 L60,18 L58,24 L62,28 L65,32 L63,38 L66,42 L68,48 L65,54 L60,58 L55,62 L50,68 L45,72 L40,75 L35,72 L30,68 L28,62 L25,58 L22,54 L20,48 L22,42 L25,38 L28,32 L32,28 L35,24 L38,18 L40,12 L45,8 Z"
                    fill="none"
                    stroke="black"
                    strokeWidth="0.5"
                    strokeOpacity="0.1"
                  />

                  {/* City Dots */}
                  {indianCities.map((city, idx) => (
                    <CityDot
                      key={idx}
                      city={city}
                      index={idx}
                      activeCity={
                        hoveredCity !== null ? hoveredCity : activeCity
                      }
                      onHover={(index: number) => {
                        if (index !== null) {
                          setHoveredCity(index);
                        } else {
                          setHoveredCity(null);
                        }
                      }}
                    />
                  ))}
                </svg>
              </div>
            </motion.div>

            {/* Info Side */}
            <motion.div
              key={displayCity.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm"
            >
              {/* City Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: displayCity.color }}
                    />
                    <span className="text-xs font-mono text-black/50">
                      {displayCity.identity}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-black">
                    {displayCity.name}
                  </h3>
                </div>
                <div className="text-right">
                  <div
                    className="text-2xl font-bold"
                    style={{ color: displayCity.color }}
                  >
                    {displayCity.stats.projects}
                  </div>
                  <div className="text-[10px] text-black/40">Projects</div>
                </div>
              </div>

              <p className="text-black/60 text-sm leading-relaxed mb-6">
                {displayCity.description}
              </p>

              {/* Growth Indicator */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-black/50">Growth Rate</span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: displayCity.color }}
                  >
                    {displayCity.stats.growth}
                  </span>
                </div>
                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: displayCity.color }}
                    initial={{ width: "0%" }}
                    animate={{ width: displayCity.stats.growth }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Icon */}
              <div className="mt-6 flex justify-end">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${displayCity.color}10` }}
                >
                  <IconComponent
                    className="w-5 h-5"
                    style={{ color: displayCity.color }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* City Tags Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {indianCities.map((city, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveCity(idx);
                  setHoveredCity(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeCity === idx && hoveredCity === null
                    ? "bg-black text-white"
                    : hoveredCity === idx
                      ? "bg-black/20 text-black"
                      : "bg-black/5 text-black/60 hover:bg-black/10"
                }`}
              >
                {city.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" />

          <div className="relative z-10 p-10 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              <Crown className="w-4 h-4 text-white" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Expand to India
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Enter the Indian Market?
            </h3>
            <p className="text-white/60 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you establish and scale your
              presence across India
            </p>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold shadow-lg hover:shadow-xl transition-all group"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-px bg-black/20" />
            <div className="flex items-center gap-1 text-[10px] text-black/40">
              <span>✦</span>
              <span>Trusted by 350+ brands across India</span>
              <span>✦</span>
            </div>
            <div className="w-8 h-px bg-black/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
