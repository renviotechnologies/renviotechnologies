"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Check,
  Rocket,
  TrendingUp,
  Crown,
  Star,
  ArrowRight,
  Zap,
  Shield,
  Award,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    icon: Rocket,
    tagline: "Perfect for new startups",
    price: "25,000",
    secondMonthPrice: "15,000",
    features: [
      "Website + Domain + Hosting",
      "Complete brand setup",
      "Social media optimization",
      "Content creation (graphics + reels)",
      "SEO basics",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Start Free Consultation",
    highlighted: false,
    popular: false,
    savings: "Save 40%",
  },
  {
    name: "Growth",
    icon: TrendingUp,
    tagline: "For scaling businesses",
    price: "50,000",
    secondMonthPrice: "35,000",
    features: [
      "Everything in Starter",
      "E-commerce product listing",
      "Paid ads setup & management",
      "Advanced growth strategy",
      "Funnel & retargeting",
      "Priority support",
      "Dedicated account manager",
    ],
    cta: "Get Started Now",
    highlighted: true,
    popular: true,
    badge: "MOST POPULAR",
    savings: "Save 30%",
  },
  {
    name: "Enterprise",
    icon: Crown,
    tagline: "Custom solutions",
    price: "Custom",
    secondMonthPrice: "",
    features: [
      "Everything in Growth",
      "Custom development",
      "24/7 priority support",
      "Dedicated team",
      "Advanced analytics",
      "Strategic consulting",
      "SLA agreement",
    ],
    cta: "Contact Sales",
    highlighted: false,
    popular: false,
    savings: "Tailored pricing",
  },
];

// Custom cursor component
const CustomCursor = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 z-50 rounded-full pointer-events-none hidden lg:flex items-center justify-center"
      animate={{
        width: isHovered ? 60 : 8,
        height: isHovered ? 60 : 8,
        backgroundColor: isHovered ? "#000" : "#000",
        mixBlendMode: isHovered ? "difference" : "normal",
      }}
      transition={{ type: "spring", damping: 25, stiffness: 400 }}
    />
  );
};

// Pricing Card Component
const PricingCard = ({ plan, index, isHovered, onHover }: any) => {
  const Icon = plan.icon;
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.21, 0.45, 0.27, 1],
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className={`relative transition-all duration-500 ${
        plan.highlighted ? "lg:scale-105 z-10" : ""
      }`}
    >
      <div
        className={`relative rounded-2xl overflow-hidden ${
          plan.highlighted
            ? "bg-black shadow-2xl"
            : "bg-white border border-gray-100 shadow-lg hover:shadow-xl"
        }`}
      >
        {/* Animated Border Gradient */}
        {plan.highlighted && (
          <motion.div
            className="absolute inset-0 opacity-0 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
            }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        )}

        {/* Top Progress Bar */}
        <motion.div
          className={`absolute top-0 left-0 h-0.5 rounded-t-2xl ${
            plan.highlighted ? "bg-white" : "bg-black"
          }`}
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Popular Badge */}
        {plan.popular && (
          <motion.div
            className="absolute -top-3 left-1/2 -translate-x-1/2 z-20"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            <div className="flex items-center gap-1 bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
              <Star className="w-3 h-3 fill-current" />
              {plan.badge}
            </div>
          </motion.div>
        )}

        <div className="p-8">
          {/* Icon & Name */}
          <motion.div
            className="flex items-center gap-3 mb-4"
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                plan.highlighted ? "bg-white/10" : "bg-black"
              }`}
            >
              <Icon
                className={`w-6 h-6 ${
                  plan.highlighted ? "text-white" : "text-white"
                }`}
              />
            </div>
            <h3
              className={`text-2xl font-bold ${
                plan.highlighted ? "text-white" : "text-black"
              }`}
            >
              {plan.name}
            </h3>
          </motion.div>

          {/* Tagline */}
          <p
            className={`text-sm mb-6 ${
              plan.highlighted ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {plan.tagline}
          </p>

          {/* Price */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            {plan.price === "Custom" ? (
              <div
                className={`text-3xl font-bold ${
                  plan.highlighted ? "text-white" : "text-black"
                }`}
              >
                Custom
              </div>
            ) : (
              <>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlighted ? "text-white" : "text-black"
                    }`}
                  >
                    ₹{plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    / 1st month
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p
                    className={`text-sm font-medium ${
                      plan.highlighted ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Then ₹{plan.secondMonthPrice}/month
                  </p>
                  <motion.span
                    className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-600"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {plan.savings}
                  </motion.span>
                </div>
              </>
            )}
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Check
                    size={16}
                    className={`flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? "text-gray-400" : "text-black/60"
                    }`}
                  />
                </motion.div>
                <span
                  className={`text-sm ${
                    plan.highlighted ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`group w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-300 ${
                plan.highlighted
                  ? "bg-white text-black hover:shadow-xl"
                  : "bg-black text-white hover:bg-black/90"
              }`}
            >
              <span>{plan.cta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>

        {/* Bottom Corner Accent */}
        <motion.div
          className={`absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 ${
            plan.highlighted ? "border-white/20" : "border-black/10"
          }`}
          animate={{
            width: isHovered ? "30px" : "0",
            height: isHovered ? "30px" : "0",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default function PricingSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [particles, setParticles] = useState<React.ReactNode[]>([]);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Generate particles only on client side to avoid window undefined error
  useEffect(() => {
    setMounted(true);
    const generatedParticles = [...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-0.5 h-0.5 rounded-full bg-black"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          y: [null, -30, -60],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: Math.random() * 6 + 3,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: "linear",
        }}
      />
    ));
    setParticles(generatedParticles);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
      id="pricing"
    >
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_20%_40%, rgba(0,0,0,0.02), transparent 50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_80%_60%, rgba(0,0,0,0.015), transparent 50%)]" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating Particles - Only render on client side */}
      {mounted && (
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          {particles}
        </div>
      )}

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          style={{ scale: useTransform(scrollYProgress, [0, 0.3], [0.98, 1]) }}
        >
          <motion.div
            className="inline-flex items-center justify-center gap-2 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-8 h-px bg-black/30" />
            <span className="text-black/50 text-[10px] font-mono tracking-[0.3em] uppercase">
              Investment
            </span>
            <span className="w-8 h-px bg-black/30" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Simple,
            <span className="relative inline-block mx-2">
              Transparent
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-black"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
            </span>
            Pricing
          </motion.h2>

          <motion.p
            className="text-black/50 text-base max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Choose the perfect plan for your business. No hidden fees, cancel
            anytime.
          </motion.p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          style={{ y, opacity }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              index={index}
              isHovered={hoveredCard === index}
              onHover={setHoveredCard}
            />
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-black/40" />
              <span className="text-xs text-black/40">No setup fees</span>
            </div>
            <div className="w-px h-4 bg-black/10" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-black/40" />
              <span className="text-xs text-black/40">
                Money-back guarantee
              </span>
            </div>
            <div className="w-px h-4 bg-black/10" />
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-black/40" />
              <span className="text-xs text-black/40">Free consultation</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-px bg-black/20" />
            <p className="text-[10px] text-black/40 tracking-wider">
              All plans include free consultation. No long-term contracts
              required.
            </p>
            <div className="w-12 h-px bg-black/20" />
          </div>
        </motion.div>

        {/* Featured Badge Row */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-black/5 rounded-full px-4 py-2">
            <Sparkles className="w-3 h-3 text-black/40" />
            <span className="text-[10px] text-black/40 tracking-wider">
              Trusted by 150+ businesses worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
