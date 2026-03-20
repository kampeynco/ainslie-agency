"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/constants";

const NAV_LINKS = [
  { name: "Solutions", href: "#solutions" },
  { name: "Mechanism", href: "#mechanism" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[#041329]/90 backdrop-blur-md shadow-[0_20px_40px_rgba(1,14,36,0.4)]"
          : "bg-[#041329]/80 backdrop-blur-md"
      )}
    >
      <div className="flex justify-between items-center w-full px-8 py-5 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-headline italic text-primary hover:opacity-80 transition-opacity"
        >
          Ainslie Agency
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-on-surface-variant hover:text-on-surface transition-colors text-sm"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-6">
          <button className="gradient-cta text-on-primary px-6 py-2 rounded-md font-bold text-sm tracking-widest uppercase hover:scale-95 active:scale-90 transition-transform">
            Book Audit
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-on-surface transition-all duration-300",
              mobileOpen && "rotate-45 translate-y-2"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-on-surface transition-all duration-300",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-on-surface transition-all duration-300",
              mobileOpen && "-rotate-45 -translate-y-2"
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-[66px] bg-surface/98 backdrop-blur-xl z-40",
          "transition-all duration-300",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-1 p-6">
          {NAV_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-lg text-on-surface-variant hover:text-on-surface transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4">
            <button className="gradient-cta w-full text-on-primary px-6 py-3 rounded-md font-bold text-sm tracking-widest uppercase">
              Book Audit
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
