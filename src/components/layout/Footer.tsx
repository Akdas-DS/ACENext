'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mail, Phone, MessageCircle, Link2, Globe, Hash } from 'lucide-react';
import { cn } from '@/lib/utils';

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Technology', href: '/technology' },
  { label: 'Process', href: '/process' },
];

const resourceLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Link2 },
  { label: 'Twitter / X', href: 'https://x.com', icon: Hash },
  { label: 'GitHub', href: 'https://github.com', icon: Globe },
  { label: 'Instagram', href: 'https://instagram.com', icon: Globe },
  { label: 'WhatsApp', href: 'https://wa.me/', icon: MessageCircle },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });

  return (
    <footer
      ref={footerRef}
      className="relative bg-background text-[#FAFAF8]"
      role="contentinfo"
    >
      {/* CTA Section */}
      <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-16 lg:px-10">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          custom={0}
          className="text-center"
        >
          <h2 className="mx-auto max-w-3xl text-3xl font-light leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to Transform
            <br />
            <span className="text-[#A8A29E]">Your Business?</span>
          </h2>
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUpVariant}
            custom={1}
            className="mt-8"
          >
            <Link
              href="/contact"
              className={cn(
                'inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-medium',
                'bg-[#FAFAF8] text-background transition-all duration-300',
                'hover:bg-[#D4C5B2] hover:shadow-lg hover:shadow-[#F1FEC8]/10',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1FEC8] focus-visible:ring-offset-2 focus-visible:ring-offset-background'
              )}
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="h-px w-full origin-left bg-[#2D2D32]"
        />
      </div>

      {/* Links Grid */}
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUpVariant}
            custom={2}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group"
              aria-label="ACENEXT Solutions — Home"
            >
              <Image
                src="/logo.png"
                alt="ACENEXT"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-base font-semibold tracking-tight text-[#FAFAF8]">
                ACENEXT
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#A8A29E]">
              Enterprise technology consulting and digital transformation
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:acenext@gmail.com"
                className="flex items-center gap-2.5 text-sm text-[#A8A29E] transition-colors duration-200 hover:text-[#FAFAF8]"
              >
                <Mail className="h-4 w-4 text-[#F1FEC8]" />
                acenext@gmail.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2.5 text-sm text-[#A8A29E] transition-colors duration-200 hover:text-[#FAFAF8]"
              >
                <Phone className="h-4 w-4 text-[#F1FEC8]" />
                +1 (234) 567-890
              </a>
            </div>
          </motion.div>

          {/* Column 2: Company */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUpVariant}
            custom={3}
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4C5B2]">
              Company
            </h3>
            <ul className="mt-5 space-y-3" role="list">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A8A29E] transition-colors duration-200 hover:text-[#FAFAF8] focus-visible:outline-none focus-visible:text-[#FAFAF8]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Resources */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUpVariant}
            custom={4}
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4C5B2]">
              Resources
            </h3>
            <ul className="mt-5 space-y-3" role="list">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A8A29E] transition-colors duration-200 hover:text-[#FAFAF8] focus-visible:outline-none focus-visible:text-[#FAFAF8]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Connect */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUpVariant}
            custom={5}
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4C5B2]">
              Connect
            </h3>
            <ul className="mt-5 space-y-3" role="list">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-sm text-[#A8A29E] transition-colors duration-200 hover:text-[#FAFAF8] focus-visible:outline-none focus-visible:text-[#FAFAF8]"
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="h-px w-full bg-[#2D2D32]" />
      </div>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-xs text-[#A8A29E]">
            &copy; 2024 ACENEXT Solutions. All rights reserved.
          </p>
          <p className="text-xs text-[#A8A29E]/60">
            Crafted with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
