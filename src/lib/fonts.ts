/* ================================================================
   ACENEXT Solutions — Font Configuration
   Optimized loading via next/font/google with variable fonts
   ================================================================ */

import { Inter, Manrope } from "next/font/google";

/**
 * Inter — Primary body and UI typeface.
 * Clean, highly legible, optimized for screens.
 * Variable font with weights 300–700.
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
});

/**
 * Manrope — Heading and display typeface.
 * Geometric, modern, excellent for headings and hero text.
 * Variable font with weights 500–800.
 */
export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
});

/**
 * Combined CSS variable class string for applying to <html> or <body>.
 * Usage in layout.tsx:
 *   <html className={fontVariables}>
 */
export const fontVariables = `${inter.variable} ${manrope.variable}`;
