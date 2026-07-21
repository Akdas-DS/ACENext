'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useActionState } from 'react';
import { ArrowRight, Mail, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { submitContactInquiry } from '@/app/actions/contact';

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [state, formAction, isPending] = useActionState(submitContactInquiry, {
    success: false,
    error: null,
  });

  return (
    <section className="relative py-32 bg-background" ref={ref}>
      <div className="absolute inset-0 bg-gradient-radial-green opacity-15 pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <SectionHeading
              eyebrow="Start a Conversation"
              heading="Let's Build Something That Matters"
              description="Whether you need a specific automation, a complete digital transformation, or just want to explore what's possible — we're here to listen first."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
              }}
              className="mt-10 space-y-4"
            >
              <a
                href="mailto:acenext@gmail.com"
                className="flex items-center gap-3 text-stone hover:text-ivory transition-colors"
              >
                <Mail className="h-5 w-5 text-bronze" />
                <span className="text-sm">acenext@gmail.com</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-stone hover:text-ivory transition-colors"
              >
                <Phone className="h-5 w-5 text-bronze" />
                <span className="text-sm">+91 98765 43210</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-stone hover:text-ivory transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-bronze" />
                <span className="text-sm">WhatsApp</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
            }}
            className="rounded-2xl border border-white/10 bg-charcoal/20 p-8 lg:p-10"
          >
            <h3 className="text-lg font-semibold text-ivory mb-6">
              Quick Inquiry
            </h3>

            {state.success ? (
              <div className="text-center py-10">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-forest-green/20 mb-4">
                  <CheckCircle className="h-8 w-8 text-forest-green" />
                </div>
                <h4 className="text-lg font-semibold text-ivory">
                  Message Sent!
                </h4>
                <p className="text-sm text-stone mt-2">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form action={formAction} className="space-y-5">
                {state.error && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
                    {state.error}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="home-name"
                    className="block text-xs font-medium text-stone mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="home-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-white/10 bg-background px-4 py-3 text-sm text-ivory placeholder-warm-grey outline-none transition-colors focus:border-bronze"
                  />
                </div>
                <div>
                  <label
                    htmlFor="home-email"
                    className="block text-xs font-medium text-stone mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="home-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-white/10 bg-background px-4 py-3 text-sm text-ivory placeholder-warm-grey outline-none transition-colors focus:border-bronze"
                  />
                </div>
                <div>
                  <label
                    htmlFor="home-message"
                    className="block text-xs font-medium text-stone mb-1.5"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="home-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="What challenge can we help you solve?"
                    className="w-full rounded-lg border border-white/10 bg-background px-4 py-3 text-sm text-ivory placeholder-warm-grey outline-none transition-colors focus:border-bronze resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-forest-green px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-forest-green/80 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending ? 'Sending...' : 'Send Inquiry'}
                  {!isPending && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
