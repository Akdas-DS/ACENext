'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasMegaMenu: true },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Technology', href: '/technology' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as { label: string; href: string; hasMegaMenu?: boolean }[];

const serviceCategories = [
  {
    title: 'Intelligent Automation & AI Solutions',
    description: 'Streamline operations with intelligent automation and AI-driven solutions',
    href: '/services/automation-ai',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v1a1 1 0 0 0 1 1h1a4 4 0 0 1 0 8h-1a1 1 0 0 0-1 1v1a4 4 0 0 1-8 0v-1a1 1 0 0 0-1-1H6a4 4 0 0 1 0-8h1a1 1 0 0 0 1-1V6a4 4 0 0 1 4-4z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Process Architecture & Workflow Optimization',
    description: 'Redesign business processes for maximum efficiency',
    href: '/services/process-optimization',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M17.5 14v7M14 17.5h7" />
      </svg>
    ),
  },
  {
    title: 'Data Infrastructure & Business Intelligence',
    description: 'Build robust data pipelines and actionable dashboards',
    href: '/services/data-intelligence',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    title: 'Custom Software Development',
    description: 'Tailored applications built for your unique business needs',
    href: '/services/custom-development',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megaMenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleMegaMenuEnter = useCallback(() => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
      megaMenuTimeoutRef.current = null;
    }
    setIsMegaMenuOpen(true);
  }, []);

  const handleMegaMenuLeave = useCallback(() => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  }, []);

  const handleMegaMenuKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMegaMenuOpen(false);
      }
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsMegaMenuOpen((prev) => !prev);
      }
    },
    []
  );

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-background/95 backdrop-blur-xl border-b border-white/10/50 shadow-2xl shadow-black/20'
            : 'bg-transparent'
        )}
      >
        <nav
          className="mx-auto flex h-18 max-w-[1400px] items-center justify-between px-6 lg:px-10"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center gap-2.5 group"
            aria-label="ACENEXT Solutions — Home"
          >
            <Image
              src="/logo.png"
              alt="ACENEXT"
              width={36}
              height={36}
              className="h-9 w-9 transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className="text-lg font-semibold tracking-tight text-[#FAFAF8]">
              ACENEXT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.hasMegaMenu ? (
                <div
                  key={link.label}
                  ref={megaMenuRef}
                  className="relative"
                  onMouseEnter={handleMegaMenuEnter}
                  onMouseLeave={handleMegaMenuLeave}
                >
                  <button
                    type="button"
                    className={cn(
                      'flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                      'text-[#A8A29E] hover:text-[#FAFAF8] focus-visible:text-[#FAFAF8]',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1FEC8]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                      isMegaMenuOpen && 'text-[#FAFAF8]'
                    )}
                    aria-expanded={isMegaMenuOpen}
                    aria-haspopup="true"
                    onKeyDown={handleMegaMenuKeyDown}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        'h-3.5 w-3.5 transition-transform duration-300',
                        isMegaMenuOpen && 'rotate-180'
                      )}
                    />
                  </button>

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {isMegaMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full pt-3 -translate-x-1/2"
                        onMouseEnter={handleMegaMenuEnter}
                        onMouseLeave={handleMegaMenuLeave}
                      >
                        <div className="w-[640px] rounded-2xl border border-white/10 bg-background/98 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
                          <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8A29E]">
                              Our Services
                            </h3>
                            <Link
                              href="/services"
                              className="flex items-center gap-1.5 text-xs font-medium text-[#F1FEC8] transition-colors hover:text-[#D4C5B2]"
                            >
                              View All
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            {serviceCategories.map((service, index) => (
                              <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: index * 0.05,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                              >
                                <Link
                                  href={service.href}
                                  className="group flex gap-4 rounded-xl p-4 transition-colors duration-200 hover:bg-white/5"
                                >
                                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2D2D32] text-[#F1FEC8] transition-colors duration-200 group-hover:bg-[#2D4A3E] group-hover:text-[#FAFAF8]">
                                    {service.icon}
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-sm font-medium text-[#FAFAF8] transition-colors duration-200 group-hover:text-white">
                                      {service.title}
                                    </p>
                                    <p className="mt-1 text-xs leading-relaxed text-[#A8A29E]">
                                      {service.description}
                                    </p>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                    'text-[#A8A29E] hover:text-[#FAFAF8]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1FEC8]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA & Login */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className={cn(
                'text-sm font-medium transition-colors duration-200',
                'text-[#A8A29E] hover:text-[#FAFAF8]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze/50'
              )}
            >
              Client Login
            </Link>
            <Link
              href="/contact"
              className={cn(
                'rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300',
                'bg-bronze text-background hover:bg-sand hover:shadow-lg hover:shadow-bronze/10',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze'
              )}
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={cn(
              'relative z-10 flex h-10 w-10 items-center justify-center rounded-lg lg:hidden',
              'text-[#FAFAF8] transition-colors hover:bg-white/10',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1FEC8]/50'
            )}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex h-full flex-col justify-center px-8">
              <nav className="space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        'block py-3 text-3xl font-light tracking-tight transition-colors duration-200',
                        'text-[#A8A29E] hover:text-[#FAFAF8]',
                        'focus-visible:outline-none focus-visible:text-[#FAFAF8]'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-10"
              >
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium',
                    'bg-[#FAFAF8] text-background transition-all duration-300 hover:bg-[#D4C5B2]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1FEC8]'
                  )}
                >
                  Book Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="mt-auto pb-12"
              >
                <p className="text-xs text-[#A8A29E]">
                  acenext@gmail.com
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
