/* ================================================================
   ACENEXT Solutions — Utility Functions
   ================================================================ */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes with conflict resolution.
 * Combines clsx for conditional classes with tailwind-merge for deduplication.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/* ── Date Formatting ─────────────────────────────────────── */

/**
 * Formats a date string into a human-readable format.
 * @param dateString - ISO date string or Date-compatible string
 * @param options - Intl.DateTimeFormat options override
 * @returns Formatted date string (e.g., "January 15, 2026")
 */
export function formatDate(
  dateString: string,
  options?: Intl.DateTimeFormatOptions
): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return dateString;
  }

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("en-IN", options ?? defaultOptions).format(
    date
  );
}

/**
 * Returns a relative time string (e.g., "2 days ago", "in 3 hours").
 */
export function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffSeconds < 60) return "just now";
  if (diffMinutes < 60)
    return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;
  if (diffHours < 24)
    return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  if (diffWeeks < 4)
    return `${diffWeeks} week${diffWeeks > 1 ? "s" : ""} ago`;
  if (diffMonths < 12)
    return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
  return `${diffYears} year${diffYears > 1 ? "s" : ""} ago`;
}

/* ── Currency Formatting ─────────────────────────────────── */

/**
 * Formats a number as Indian Rupee currency.
 * @param amount - Numeric amount
 * @param compact - Use compact notation for large numbers (e.g., "15K")
 * @returns Formatted currency string (e.g., "₹1,50,000")
 */
export function formatCurrency(
  amount: number,
  compact: boolean = false
): string {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  if (compact) {
    options.notation = "compact";
    options.compactDisplay = "short";
  }

  return new Intl.NumberFormat("en-IN", options).format(amount);
}

/* ── Throttle ────────────────────────────────────────────── */

/**
 * Creates a throttled version of a function that executes at most once
 * within the specified interval.
 * @param fn - The function to throttle
 * @param delay - Minimum milliseconds between invocations
 */
export function throttle<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: unknown, ...args: Parameters<T>) {
    const now = Date.now();
    const timeSinceLastCall = now - lastCall;

    if (timeSinceLastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastCall = Date.now();
        fn.apply(this, args);
      }, delay - timeSinceLastCall);
    }
  };
}

/* ── Debounce ────────────────────────────────────────────── */

/**
 * Creates a debounced version of a function that delays execution
 * until after the specified wait period has elapsed since the last call.
 * @param fn - The function to debounce
 * @param delay - Milliseconds to wait before executing
 */
export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: unknown, ...args: Parameters<T>) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

/* ── Input Sanitization ──────────────────────────────────── */

/**
 * Sanitizes user input to prevent XSS attacks.
 * Escapes HTML special characters and strips dangerous patterns.
 * @param input - Raw user input string
 * @returns Sanitized string safe for rendering
 */
export function sanitizeInput(input: string): string {
  const htmlEscapeMap: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
    "`": "&#96;",
  };

  const sanitized = input.replace(/[&<>"'/`]/g, (char) => htmlEscapeMap[char]);

  return sanitized
    .replace(/javascript\s*:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .replace(/data\s*:/gi, "")
    .replace(/vbscript\s*:/gi, "");
}

/* ── String Utilities ────────────────────────────────────── */

/**
 * Converts a string to a URL-friendly slug.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Truncates a string to a specified length with ellipsis.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}

/* ── Number Utilities ────────────────────────────────────── */

/**
 * Clamps a value between a minimum and maximum.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Linearly interpolates between two values.
 */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * clamp(factor, 0, 1);
}

/* ── Viewport & Responsive ───────────────────────────────── */

/**
 * Checks if the code is running on the client side.
 */
export function isClient(): boolean {
  return typeof window !== "undefined";
}

/**
 * Returns the current viewport width on client, or 0 on server.
 */
export function getViewportWidth(): number {
  return isClient() ? window.innerWidth : 0;
}

/**
 * Checks if the viewport matches a mobile breakpoint (< 768px).
 */
export function isMobile(): boolean {
  return getViewportWidth() < 768;
}

/* ── Misc ────────────────────────────────────────────────── */

/**
 * Generates a stable unique ID string for component keys.
 */
export function generateId(prefix: string = "id"): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 11)}`;
}

/**
 * Pauses execution for specified milliseconds. For animations / transitions.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Extracts initials from a full name (e.g., "John Doe" → "JD").
 */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
