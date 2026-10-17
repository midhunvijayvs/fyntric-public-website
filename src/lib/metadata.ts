import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/** Social share image in /public. Absolute URL so it already includes any base path. */
export const ogImage = {
  url: `${siteConfig.url}/og-image.png`,
  width: 1200,
  height: 630,
  alt: siteConfig.legalName,
};

type PageMetadataInput = {
  /** Full SEO title, used as-is (no template suffix). */
  title: string;
  description: string;
  /** Route path with trailing slash, e.g. "/about/". */
  path: string;
};

/** Builds consistent page metadata: title, description, canonical URL, Open Graph and Twitter cards. */
export function buildMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.legalName,
      locale: siteConfig.locale,
      url: path,
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

/** Absolute URL for a site path, for structured data. */
export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${path}`;
}
