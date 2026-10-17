/**
 * Global site configuration.
 * Edit company details, contact numbers and navigation here; every page reads from this file.
 */

export const siteConfig = {
  name: "Fyntric Tech",
  legalName: "Fyntric Tech IT Solutions",
  tagline: "Custom Software, AI, SaaS, Blockchain & Digital Solutions for Growing Businesses.",
  description:
    "Fyntric Tech IT Solutions provides custom software, web and mobile app development, CRM, SaaS, AI automation, blockchain and digital solutions for businesses.",
  /** Public URL of the deployed site, without a trailing slash. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://midhunvijayvs.github.io/fyntric-public-website",
  locale: "en_IN",
  markets: ["India", "Kerala", "UAE", "Saudi Arabia", "Qatar"],
} as const;

export const contactConfig = {
  /**
   * WhatsApp number that receives contact form enquiries.
   * International format, digits only (country code first, no "+" or spaces).
   */
  whatsappNumber: "919995715997",
  /** Human readable version shown on the site. */
  phoneDisplay: "+91 99957 15997",
  email: "",
  address: "",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const primaryCta: NavItem = {
  label: "Get Free Consultation",
  href: "/contact/",
};
