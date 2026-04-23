'use client';

import React, { JSX } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const logos: string[] = [
  '/logos/Biryani-Bar-Kitchener-Logo-1-scaled-1.png',
  '/logos/CCL-Logo-1.png',
  '/logos/CREATIVE-KITCHENS-WARDROBE-LOGO-HD-1-scaled.png',
  '/logos/Dee-Cee-Accessories (1).png',
  '/logos/FreeGPSUpdate-scaled.png',
  '/logos/GSF-LOGO.png',
  '/logos/Indian-Jewelryish.png',
  '/logos/JD-Logo.png',
  '/logos/LMC-logo-scaled.png',
  '/logos/Noida-Run-logo.png',
  '/logos/Primary-Single-Logo.png',
  '/logos/Prun-Sports-logo.png',
  '/logos/SINNOVA-AGRO.png',
  '/logos/Surbhee-PEB-e1747653635950.png',
  '/logos/Theme-Interiors-e1747653537500.png',
  '/logos/Writing-Rodgers.png',
  '/logos/string-theory-logo-.png',
];

// split into rings
const ring1 = logos.slice(0, 6);
const ring2 = logos.slice(6, 12);
const ring3 = logos.slice(12);

// ✅ TYPES ADDED
type OrbitProps = {
  items: string[];
  radius: number;
  duration: number;
  reverse?: boolean;
};

function Orbit({ items, radius, duration, reverse = false }: OrbitProps) {
  const angleStep = 360 / items.length;

  return (
    <motion.div
      className="absolute w-full h-full"
      style={{ transformStyle: 'preserve-3d' }}
      animate={{
        rotate: reverse ? [360, 0] : [0, 360],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {items.map((logo: string, i: number) => {
        const angle = i * angleStep;

        return (
          <div
            key={i}
            className="absolute top-1/2 left-1/2"
            style={{
              transform: `
                rotate(${angle}deg)
                translate(${radius}px)
                rotate(-${angle}deg)
                translate(-50%, -50%)
              `,
            }}
          >
            <motion.div
              animate={{
                rotate: reverse ? [-360, 0] : [0, -360],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <LogoCard src={logo} />
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

// ✅ TYPE ADDED
type LogoCardProps = {
  src: string;
};

function LogoCard({ src }: LogoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      className="
        relative w-20 h-20
        flex items-center justify-center
        rounded-xl
        bg-[#000000fc]
        backdrop-blur-xl
        border border-white/10
        shadow-lg
        overflow-hidden
        group
      "
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition blur-xl cursor-pointer" />

      <Image
        src={src}
        alt="logo"
        fill
        sizes="80px" // ✅ prevents Next.js warning
        className="object-contain p-3 relative z-10"
      />
    </motion.div>
  );
}

export default function LogoCarousel(): JSX.Element {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">

      <div className="absolute w-28 h-28 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-2xl opacity-40" />

      <Orbit items={ring1} radius={120} duration={80} />
      <Orbit items={ring2} radius={200} duration={100} reverse />
      <Orbit items={ring3} radius={280} duration={105} />

      <motion.div
        className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </div>
  );
}