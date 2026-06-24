"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";

// ─── CUSTOM CURSOR ──────────────────────────────────────────────────────────

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 28, stiffness: 300 });
  const springY = useSpring(cursorY, { damping: 28, stiffness: 300 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[100] mix-blend-difference bg-white"
      style={{ x: springX, y: springY }}
    />
  );
}

// ─── SERVICE ROW ────────────────────────────────────────────────────────────

function ServiceRow({
  number,
  title,
  tags,
  delay,
}: {
  number: string;
  title: string;
  tags: string[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="group flex items-start gap-6 py-5 border-b border-gray-100 cursor-default"
    >
      <span className="text-[10px] font-mono text-gray-300 mt-1 w-4 shrink-0">
        {number}
      </span>
      <span className="text-[15px] font-medium text-gray-900 tracking-tight w-36 shrink-0 group-hover:text-black transition-colors">
        {title}
      </span>
      <div className="flex flex-wrap gap-x-4 gap-y-1 pt-0.5">
        {tags.map((t) => (
          <span
            key={t}
            className="text-[11px] text-gray-400 font-mono tracking-wide"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// ─── HERO ───────────────────────────────────────────────────────────────────

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-white overflow-hidden"
      style={{ cursor: "none" }}
    >
      <CustomCursor />

      {/* Faint ruled lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 79px, rgba(0,0,0,0.03) 80px)",
        }}
      />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10">
        {/* Nav bar */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between px-8 md:px-14 h-20"
        >
          <span className="text-[13px] font-semibold tracking-tight text-gray-900">
            VESSEL
          </span>
          <nav className="hidden md:flex items-center gap-8">
            {["Work", "Studio", "Process", "Contact"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[11px] font-mono tracking-widest text-gray-400 hover:text-gray-900 transition-colors uppercase"
              >
                {item}
              </Link>
            ))}
          </nav>
          <span className="text-[10px] font-mono text-gray-300 tracking-wider hidden md:block">
            EST. 2019
          </span>
        </motion.header>

        {/* Hero headline */}
        <motion.div
          style={{ y }}
          className="px-8 md:px-14 pt-16 pb-10 max-w-[1100px]"
        >
          <motion.p
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[10px] font-mono tracking-[0.3em] text-gray-400 uppercase mb-7"
          >
            Strategy · Design · Engineering
          </motion.p>

          <h1 className="text-[clamp(2.8rem,8vw,7rem)] font-light leading-[1.1] tracking-[-0.03em] text-gray-900">
            {["We build", "companies", "worth", "following."].map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.09,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {i === 2 ? (
                  <>
                    {line}{" "}
                    <em
                      className="font-serif italic text-gray-400 not-italic"
                      style={{ fontStyle: "italic" }}
                    >
                      {/* italic accent on last real word */}
                    </em>
                  </>
                ) : i === 3 ? (
                  <span className="text-gray-400 font-serif italic">
                    {line}
                  </span>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-9 text-[15px] text-gray-400 leading-relaxed max-w-[460px]"
          >
            A small studio that partners with founders to build their brand from
            the inside out — strategy first, craft throughout.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.78 }}
            className="mt-10 flex items-center gap-7"
          >
            <button className="px-7 py-3 bg-gray-900 text-white text-[12px] font-mono tracking-widest uppercase hover:bg-black transition-colors rounded-sm">
              Start a project
            </button>
            <Link
              href="#"
              className="group flex items-center gap-2 text-[12px] font-mono tracking-widest text-gray-400 uppercase hover:text-gray-800 transition-colors"
            >
              See work
              <span className="group-hover:translate-x-1 transition-transform inline-block">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.85,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="origin-left h-px bg-gray-100 mx-8 md:mx-14"
        />

        {/* Services list */}
        <div className="px-8 md:px-14 mt-2 pb-16 max-w-[900px]">
          <ServiceRow
            number="01"
            title="Strategy"
            tags={["Market Audit", "Positioning", "Go-to-Market", "Metrics"]}
            delay={0.9}
          />
          <ServiceRow
            number="02"
            title="Design"
            tags={["UI/UX", "Visual Identity", "Design Systems", "Prototyping"]}
            delay={1.0}
          />
          <ServiceRow
            number="03"
            title="Engineering"
            tags={["Frontend", "Backend", "API Design", "DevOps"]}
            delay={1.1}
          />
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-8 md:px-14 h-12 border-t border-gray-100 bg-white/80 backdrop-blur-sm z-20"
        >
          <span className="text-[9px] font-mono text-gray-300 tracking-widest uppercase">
            Currently accepting new clients
          </span>
          <span className="text-[9px] font-mono text-gray-300 tracking-widest">
            ©{new Date().getFullYear()} Vessel Studio
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
