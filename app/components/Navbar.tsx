"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  ChevronDown,
  Briefcase,
  User,
  Award,
  Sparkles,
  Home,
  Layers,
  Megaphone,
  MessageCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

// ─── DROPDOWN MENU COMPONENT ────────────────────────────────────────────────

interface DropdownItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  badge?: string;
}

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  isOpen: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const DropdownMenu = ({
  trigger,
  items,
  isOpen,
  onHover,
  onLeave,
}: DropdownMenuProps) => {
  return (
    <div className="relative" onMouseEnter={onHover} onMouseLeave={onLeave}>
      {trigger}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden z-50"
          >
            <div className="py-2">
              {items.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50/80 transition-all duration-200 group"
                >
                  <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-gray-100 flex items-center justify-center text-gray-500 group-hover:text-gray-900 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900 group-hover:text-gray-700">
                        {item.name}
                      </span>
                      {item.badge && (
                        <span className="text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded-full bg-black/5 text-gray-600">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-gray-300 group-hover:text-gray-500 transition-colors flex-shrink-0 mt-2"
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── MEGA MENU COMPONENT ────────────────────────────────────────────────────

interface MegaMenuItem {
  category: string;
  items: DropdownItem[];
}

interface MegaMenuProps {
  trigger: React.ReactNode;
  items: MegaMenuItem[];
  isOpen: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const MegaMenu = ({
  trigger,
  items,
  isOpen,
  onHover,
  onLeave,
}: MegaMenuProps) => {
  return (
    <div className="relative" onMouseEnter={onHover} onMouseLeave={onLeave}>
      {trigger}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 mt-2 w-[600px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-50"
          >
            <div className="grid grid-cols-2 gap-0 p-4">
              {items.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-[10px] font-mono tracking-[0.2em] text-gray-400 uppercase px-3 pt-2 pb-1">
                    {section.category}
                  </h4>
                  {section.items.map((item, itemIdx) => (
                    <Link
                      key={itemIdx}
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50/80 transition-all duration-200 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-gray-100 flex items-center justify-center text-gray-500 group-hover:text-gray-900 transition-colors">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-gray-900 group-hover:text-gray-700">
                          {item.name}
                        </span>
                        {item.description && (
                          <p className="text-xs text-gray-500">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 bg-gray-50/50 px-4 py-3">
              <Link
                href="/services"
                className="flex items-center justify-between text-sm text-gray-600 hover:text-black transition-colors group"
              >
                <span>View all services</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── MAIN NAVBAR COMPONENT ──────────────────────────────────────────────────

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.85)"],
  );
  const headerBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"],
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.05)"],
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // ─── NAVIGATION STRUCTURE ──────────────────────────────────────────────────

  const navStructure = [
    {
      name: "Home",
      href: "/",
      type: "link",
      icon: <Home size={16} />,
    },
    {
      name: "Services",
      type: "mega",
      items: [
        {
          category: "Core Offerings",
          items: [
            {
              name: "Brand Strategy",
              href: "/services/branding",
              icon: <Award size={14} />,
              description: "Identity & positioning",
              badge: "Popular",
            },
            {
              name: "Web Design",
              href: "/services/web-design",
              icon: <Layers size={14} />,
              description: "Next.js & modern web",
            },
            {
              name: "Growth Marketing",
              href: "/services/growth",
              icon: <Megaphone size={14} />,
              description: "Data-driven campaigns",
            },
          ],
        },
        {
          category: "Innovation",
          items: [
            {
              name: "AI Integration",
              href: "/services/ai",
              icon: <Sparkles size={14} />,
              description: "LLM & automation",
              badge: "New",
            },
            {
              name: "Motion Design",
              href: "/services/motion",
              icon: <Sparkles size={14} />,
              description: "Animation & interaction",
            },
          ],
        },
      ],
    },
    {
      name: "Projects",
      href: "/projects",
      type: "link",
    },
    {
      name: "Company",
      type: "dropdown",
      items: [
        {
          name: "About Us",
          href: "/about",
          icon: <User size={16} />,
          description: "Our story & culture",
        },
        {
          name: "Careers",
          href: "/careers",
          icon: <Briefcase size={16} />,
          description: "Join our team",
          badge: "Hiring",
        },
        {
          name: "Awards",
          href: "/awards",
          icon: <Award size={16} />,
          description: "Recognition & achievements",
        },
        {
          name: "Insights",
          href: "/blogs",
          icon: <Sparkles size={16} />,
          description: "Thought leadership",
        },
      ],
    },
    {
      name: "Contact",
      href: "/contact",
      type: "button",
    },
  ];

  const handleDropdownHover = useCallback((name: string | null) => {
    setActiveDropdown(name);
  }, []);

  const renderNavItem = (item: (typeof navStructure)[0]) => {
    if (item.type === "dropdown" && "items" in item) {
      return (
        <DropdownMenu
          key={item.name}
          trigger={
            <button
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                "hover:bg-gray-50/80 flex items-center gap-1.5",
                activeDropdown === item.name
                  ? "text-gray-900"
                  : "text-gray-600",
              )}
            >
              {item.name}
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform duration-300",
                  activeDropdown === item.name ? "rotate-180" : "",
                )}
              />
            </button>
          }
          items={item.items as DropdownItem[]}
          isOpen={activeDropdown === item.name}
          onHover={() => handleDropdownHover(item.name)}
          onLeave={() => handleDropdownHover(null)}
        />
      );
    }

    if (item.type === "mega" && "items" in item) {
      return (
        <MegaMenu
          key={item.name}
          trigger={
            <button
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                "hover:bg-gray-50/80 flex items-center gap-1.5",
                activeDropdown === item.name
                  ? "text-gray-900"
                  : "text-gray-600",
              )}
            >
              {item.name}
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform duration-300",
                  activeDropdown === item.name ? "rotate-180" : "",
                )}
              />
            </button>
          }
          items={item.items as MegaMenuItem[]}
          isOpen={activeDropdown === item.name}
          onHover={() => handleDropdownHover(item.name)}
          onLeave={() => handleDropdownHover(null)}
        />
      );
    }

    if (item.type === "button") {
      return (
        <Link
          key={item.name}
          href={item.href || "#"}
          className="group relative ml-4 px-6 py-2.5 text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 bg-black text-white hover:bg-gray-800 hover:shadow-md"
        >
          <span className="relative z-10">{item.name}</span>
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.4 }}
          />
        </Link>
      );
    }

    return (
      <Link
        key={item.name}
        href={item.href || "#"}
        className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
      >
        {item.name}
        <span className="absolute inset-x-4 -bottom-1 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </Link>
    );
  };

  return (
    <>
      <motion.nav
        style={{
          backgroundColor: headerBg,
          backdropFilter: headerBlur,
          borderBottomColor: headerBorder,
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              scrolled ? "py-3" : "py-5 md:py-6",
            )}
          >
            {/* Logo */}
            <Link href="/" className="relative group block">
              <div className="relative w-36 md:w-40 h-10 md:h-12">
                <Image
                  src="/images/aerovince_logo.png"
                  alt="Aerovince"
                  fill
                  className="object-contain transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                  sizes="(max-width: 768px) 244px, 260px"
                  priority
                />
              </div>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-gray-900 to-transparent origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0 xl:gap-1">
              {navStructure.map(renderNavItem)}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-4">
                <Link
                  href="/contact"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Get in touch
                </Link>
                <div className="w-px h-5 bg-gray-200" />
                <Link
                  href="/projects"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1 group"
                >
                  View work
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={cn(
                  "lg:hidden relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                  "hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200",
                  mobileMenuOpen ? "bg-gray-100" : "",
                )}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={22} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* ─── MOBILE MENU OVERLAY ────────────────────────────────────────────── */}

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden bg-white border-t border-gray-100 absolute inset-x-0 top-[100%] z-40 overflow-hidden"
            >
              <div className="container mx-auto px-6 py-6 max-h-[calc(100vh-80px)] overflow-y-auto">
                {navStructure.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {item.type === "dropdown" && "items" in item ? (
                      <div className="mb-6">
                        <div className="text-[10px] font-mono tracking-[0.2em] text-gray-400 uppercase mb-3">
                          {item.name}
                        </div>
                        <div className="space-y-1">
                          {(item.items as DropdownItem[]).map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center gap-3 py-3 px-3 rounded-xl hover:bg-gray-50 transition-colors group"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <div className="w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-gray-100 flex items-center justify-center text-gray-500">
                                {subItem.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium text-gray-900">
                                    {subItem.name}
                                  </span>
                                  {subItem.badge && (
                                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-black/5 text-gray-600">
                                      {subItem.badge}
                                    </span>
                                  )}
                                </div>
                                {subItem.description && (
                                  <p className="text-xs text-gray-500 mt-0.5">
                                    {subItem.description}
                                  </p>
                                )}
                              </div>
                              <ArrowRight size={14} className="text-gray-300" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : item.type === "mega" && "items" in item ? (
                      <div className="mb-6">
                        <div className="text-[10px] font-mono tracking-[0.2em] text-gray-400 uppercase mb-3">
                          {item.name}
                        </div>
                        <div className="space-y-4">
                          {(item.items as MegaMenuItem[]).map((section) => (
                            <div key={section.category}>
                              <div className="text-[9px] font-mono tracking-[0.2em] text-gray-300 uppercase px-3 mb-2">
                                {section.category}
                              </div>
                              <div className="space-y-1">
                                {section.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500">
                                      {subItem.icon}
                                    </div>
                                    <div className="flex-1">
                                      <span className="text-sm font-medium text-gray-900">
                                        {subItem.name}
                                      </span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : item.type === "button" ? (
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <Link
                          href={item.href || "#"}
                          className="flex items-center justify-between w-full px-6 py-3.5 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                          <ArrowRight size={18} />
                        </Link>
                      </div>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        className="flex items-center justify-between py-4 text-base font-medium text-gray-900 hover:text-gray-600 transition-colors border-b border-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                        <ArrowRight size={16} className="text-gray-400" />
                      </Link>
                    )}
                  </motion.div>
                ))}

                {/* Mobile Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 pt-6 border-t border-gray-100"
                >
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-2">
                      Ready to start your project?
                    </p>
                    <Link
                      href="/contact"
                      className="text-black font-semibold inline-flex items-center gap-2 group"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact us today
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-[72px] md:h-[80px]" />
    </>
  );
}
