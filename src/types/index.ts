/* ================================================================
   ACENEXT Solutions — TypeScript Type Definitions
   ================================================================ */

/* ── Site Configuration ──────────────────────────────────── */

export interface SocialLinks {
  linkedin: string;
  twitter: string;
  github: string;
  instagram: string;
  youtube: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: Address;
  socialLinks: SocialLinks;
  foundedYear: number;
  locale: string;
  currency: string;
  founders: Founder[];
}

export interface Founder {
  name: string;
  role: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  full: string;
}

/* ── Navigation ──────────────────────────────────────────── */

export interface NavigationItem {
  label: string;
  path: string;
  description?: string;
  children?: NavigationChild[];
}

export interface NavigationChild {
  label: string;
  path: string;
  description: string;
  icon?: string;
}

/* ── Services ────────────────────────────────────────────── */

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  technologies: string[];
  slug: string;
  color: ServiceColor;
}

export type ServiceColor = "green" | "navy" | "bronze" | "charcoal";

/* ── Industries ──────────────────────────────────────────── */

export interface Industry {
  id: string;
  name: string;
  description: string;
  challenges: string[];
  solutions: string[];
  icon: string;
  slug: string;
}

/* ── Process Steps ───────────────────────────────────────── */

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  deliverables: string[];
  duration: string;
  icon: string;
}

/* ── Pricing ─────────────────────────────────────────────── */

export interface PricingTier {
  id: string;
  name: string;
  priceRange: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

/* ── Case Studies ────────────────────────────────────────── */

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  technologies: string[];
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
  duration: string;
  slug: string;
  featured: boolean;
}

export interface CaseStudyResult {
  metric: string;
  value: string;
  description: string;
}

/* ── Tech Stack ──────────────────────────────────────────── */

export interface TechStackItem {
  name: string;
  category: TechCategory;
  description: string;
  icon?: string;
}

export type TechCategory =
  | "language"
  | "framework"
  | "database"
  | "devops"
  | "cloud"
  | "analytics"
  | "ai"
  | "automation";

/* ── Testimonials ────────────────────────────────────────── */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  industry: string;
}

/* ── FAQ ──────────────────────────────────────────────────── */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
}

export type FAQCategory =
  | "general"
  | "services"
  | "pricing"
  | "process"
  | "technical"
  | "support";

/* ── Blog ────────────────────────────────────────────────── */

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: BlogAuthor;
  publishedAt: string;
  readTime: string;
  category: BlogCategory;
  tags: string[];
  slug: string;
  featured: boolean;
}

export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export type BlogCategory =
  | "automation"
  | "ai"
  | "strategy"
  | "engineering"
  | "case-study"
  | "industry-insights";

/* ── Stats ───────────────────────────────────────────────── */

export interface Stat {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  description: string;
}

/* ── Contact Form ────────────────────────────────────────── */

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
}

/* ── SEO / Metadata ──────────────────────────────────────── */

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
}

/* ── Animation Variants ──────────────────────────────────── */

export interface AnimationConfig {
  initial: Record<string, number | string>;
  animate: Record<string, number | string>;
  exit?: Record<string, number | string>;
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string | number[];
  };
}

/* ── API Response ────────────────────────────────────────── */

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/* ── Theme ───────────────────────────────────────────────── */

export type Theme = "dark" | "light";

/* ── Breakpoints ─────────────────────────────────────────── */

export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";
