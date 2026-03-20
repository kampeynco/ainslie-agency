import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Get Recommended by AI Search`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — Get Recommended by AI Search`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className={`${inter.variable} ${newsreader.variable} antialiased bg-surface text-on-surface`}
      >
        <OrganizationSchema />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
