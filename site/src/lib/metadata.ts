import type { Metadata } from "next";
import { SITE } from "./constants";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  ogImage = "/og-image.png",
}: PageMetadataOptions): Metadata {
  const url = `${SITE.url}${path}`;

  return {
    title: `${title} | ${SITE.name}`,
    description,
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
