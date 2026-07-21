'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useActionState } from 'react';
import { Star } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { submitReview } from '@/app/actions/reviews';

type Review = {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  createdAt: Date;
};

const FEATURED_REVIEWS: Review[] = [
  {
    id: 'featured-1',
    name: 'Rajesh Mehta',
    company: 'Nexus Financial Group',
    role: 'COO',
    content:
      "ACENEXT didn't just automate our processes — they fundamentally rethought how our operations should work. Their team spent more time understanding our business than most vendors spend writing proposals.",
    rating: 5,
    createdAt: new Date('2025-12-01'),
  },
  {
    id: 'featured-2',
    name: 'Priya Sharma',
    company: 'MedCore Systems',
    role: 'VP Engineering',
    content:
      'The data infrastructure they built became the foundation for every strategic decision we have made since. Truly world-class engineering with an obsessive attention to detail.',
    rating: 5,
    createdAt: new Date('2025-11-15'),
  },
  {
    id: 'featured-3',
    name: 'Arjun Patel',
    company: 'GreenPath Logistics',
    role: 'CTO',
    content:
      'We reduced our manual processing time by 73% in the first quarter after deployment. The ROI was visible within weeks, not months. Their methodology is genuinely best-in-class.',
    rating: 5,
    createdAt: new Date('2025-10-20'),
  },
];

function StarRating({
  rating,
  onRate,
  interactive = false,
}: {
  rating: number;
  onRate?: (r: number) => void;
  interactive?: boolean;
}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => interactive && onRate?.(star)}
          className={interactive ? 'cursor-pointer' : 'cursor-default'}
          disabled={!interactive}
        >
          <Star
            className={`h-4 w-4 transition-colors ${
              star <= rating
                ? 'fill-bronze text-bronze'
                : 'fill-transparent text-white/20'
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default function TestimonialsSection({
  dbReviews = [],
}: {
  dbReviews?: Review[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);
  const [rating, setRating] = useState(5);
  const [state, formAction, isPending] = useActionState(submitReview, {
    success: false,
    error: null,
  });

  // Merge featured + DB reviews
  const allReviews = [...FEATURED_REVIEWS, ...dbReviews];

  const t = allReviews[active];

  return (
    <section className="relative py-32 bg-background" ref={ref}>
      <div className="absolute inset-0 bg-gradient-radial-bronze opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="Client Outcomes"
          heading="What Our Clients Say"
          description="Real feedback from real engagements. Our clients measure success in operational metrics, not deliverables."
          align="center"
        />

        {/* Reviews Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
          }}
          className="mt-16 mx-auto max-w-3xl text-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-center mb-4">
                <StarRating rating={t.rating} />
              </div>
              <blockquote className="text-xl leading-relaxed text-ivory md:text-2xl lg:text-3xl font-light italic">
                &ldquo;{t.content}&rdquo;
              </blockquote>
              <div className="mt-8">
                <p className="text-sm font-semibold text-sand">{t.name}</p>
                <p className="text-sm text-stone">
                  {t.role}
                  {t.company ? `, ${t.company}` : ''}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-2">
            {allReviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? 'w-8 bg-bronze'
                    : 'w-2 bg-charcoal hover:bg-graphite'
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Review Submission Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
          }}
          className="mt-24 mx-auto max-w-2xl"
        >
          <div className="rounded-2xl border border-white/10 bg-charcoal/20 p-8 lg:p-10 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-ivory mb-2 text-center">
              Share Your Experience
            </h3>
            <p className="text-sm text-stone text-center mb-8">
              Worked with us? We&apos;d love to hear your feedback.
            </p>

            {state.success ? (
              <div className="text-center py-8">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-bronze/10 mb-4">
                  <Star className="h-8 w-8 text-bronze fill-bronze" />
                </div>
                <h4 className="text-lg font-semibold text-ivory">
                  Thank you for your review!
                </h4>
                <p className="text-sm text-stone mt-2">
                  Your feedback is now live on our website.
                </p>
              </div>
            ) : (
              <form action={formAction} className="space-y-5">
                {state.error && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
                    {state.error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="review-name"
                      className="block text-xs font-medium text-stone mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="review-name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-white/10 bg-background px-4 py-3 text-sm text-ivory placeholder-warm-grey outline-none transition-colors focus:border-bronze"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="review-company"
                      className="block text-xs font-medium text-stone mb-1.5"
                    >
                      Company
                    </label>
                    <input
                      id="review-company"
                      name="company"
                      type="text"
                      placeholder="Your company"
                      className="w-full rounded-lg border border-white/10 bg-background px-4 py-3 text-sm text-ivory placeholder-warm-grey outline-none transition-colors focus:border-bronze"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="review-role"
                    className="block text-xs font-medium text-stone mb-1.5"
                  >
                    Your Role / Title
                  </label>
                  <input
                    id="review-role"
                    name="role"
                    type="text"
                    placeholder="e.g. CTO, Project Manager"
                    className="w-full rounded-lg border border-white/10 bg-background px-4 py-3 text-sm text-ivory placeholder-warm-grey outline-none transition-colors focus:border-bronze"
                  />
                </div>

                <div>
                  <label
                    htmlFor="review-content"
                    className="block text-xs font-medium text-stone mb-1.5"
                  >
                    Your Review *
                  </label>
                  <textarea
                    id="review-content"
                    name="content"
                    rows={4}
                    required
                    placeholder="Tell us about your experience working with ACENEXT..."
                    className="w-full rounded-lg border border-white/10 bg-background px-4 py-3 text-sm text-ivory placeholder-warm-grey outline-none transition-colors focus:border-bronze resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone mb-2">
                    Rating
                  </label>
                  <StarRating
                    rating={rating}
                    onRate={setRating}
                    interactive
                  />
                  <input type="hidden" name="rating" value={rating} />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full rounded-lg bg-bronze px-6 py-3 text-sm font-medium text-background transition-all hover:bg-sand disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending ? 'Submitting...' : 'Submit Review'}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
