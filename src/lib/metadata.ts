/* ================================================================
   ACENEXT Solutions — SEO & Metadata Configuration
   Open Graph, Twitter Cards, JSON-LD Schema
   ================================================================ */

import type { Metadata } from "next";
import type { PageMeta } from "@/types";

const BASE_URL = "https://acenext.com";
const SITE_NAME = "ACENEXT Solutions";
const DEFAULT_DESCRIPTION =
  "Premium enterprise consulting delivering intelligent automation, AI solutions, process optimization, and custom software development for businesses across India.";
const DEFAULT_KEYWORDS = [
  "enterprise consulting",
  "business automation",
  "AI solutions",
  "process optimization",
  "custom software development",
  "digital transformation",
  "workflow automation",
  "data analytics",
  "business intelligence",
  "India",
  "ACENEXT Solutions",
];

/**
 * Generates complete Next.js Metadata for any page.
 * Includes Open Graph, Twitter Cards, canonical URL, and robots directives.
 *
 * @param page - Page-specific metadata overrides
 * @returns Full Next.js Metadata object
 *
 * @example
 * ```ts
 * export const metadata = generateMetadata({
 *   title: "Services",
 *   description: "Our consulting services",
 * });
 * ```
 */
export function generateMetadata(page: PageMeta = {} as PageMeta): Metadata {
  const title = page.title
    ? `${page.title} | ${SITE_NAME}`
    : `${SITE_NAME} — Enterprise Consulting & Digital Transformation`;

  const description = page.description || DEFAULT_DESCRIPTION;
  const keywords = page.keywords?.length ? page.keywords : DEFAULT_KEYWORDS;
  const ogImage = page.ogImage || `${BASE_URL}/og-default.png`;
  const canonical = page.canonical || BASE_URL;

  return {
    title,
    description,
    keywords,
    authors: [{ name: SITE_NAME, url: BASE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(BASE_URL),

    robots: page.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },

    alternates: {
      canonical,
    },

    openGraph: {
      type: "website",
      locale: "en_IN",
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — Enterprise Consulting`,
          type: "image/png",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@acenext",
      site: "@acenext",
    },

    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },

    manifest: "/site.webmanifest",

    other: {
      "theme-color": "#0C0C0E",
      "msapplication-TileColor": "#0C0C0E",
    },
  };
}

/* ── JSON-LD Structured Data ─────────────────────────────── */

/**
 * Generates Organization JSON-LD schema.
 * Should be included in the root layout for site-wide presence.
 */
export function generateOrganizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: "ACENEXT Solutions",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: DEFAULT_DESCRIPTION,
    email: "acenext@gmail.com",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560001",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "acenext@gmail.com",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://linkedin.com/company/acenext",
      "https://twitter.com/acenext",
      "https://github.com/acenext",
    ],
    knowsAbout: [
      "Enterprise Consulting",
      "Business Automation",
      "Artificial Intelligence",
      "Process Optimization",
      "Custom Software Development",
      "Data Analytics",
      "Digital Transformation",
    ],
  };
}

/**
 * Generates WebSite JSON-LD schema with search action.
 */
export function generateWebsiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: BASE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generates Service JSON-LD schema for a specific service page.
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: "Enterprise Consulting",
  };
}

/**
 * Generates FAQ JSON-LD schema from an array of question-answer pairs.
 */
export function generateFAQSchema(
  items: { question: string; answer: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Generates BlogPosting JSON-LD schema for a blog article.
 */
export function generateBlogPostSchema(post: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  author: string;
  image?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: post.url,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    image: post.image || `${BASE_URL}/og-default.png`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
  };
}

/**
 * Generates BreadcrumbList JSON-LD schema.
 */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Renders a JSON-LD script tag string for embedding in page head.
 * Use inside a <script type="application/ld+json"> element.
 */
export function jsonLdString(schema: Record<string, unknown>): string {
  return JSON.stringify(schema, null, 0);
}
