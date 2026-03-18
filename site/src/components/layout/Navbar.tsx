"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/constants";
import { NAV_ITEMS, USE_CASES } from "@/data/navigation";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm font-[family-name:var(--font-heading)]">
            A
          </div>
          <span className="text-lg font-bold text-text-heading font-[family-name:var(--font-heading)] group-hover:text-primary-light transition-colors">
            {SITE.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}

          {/* Use Cases Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm text-text-muted hover:text-text-primary transition-colors cursor-pointer"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Industries
              <svg
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  dropdownOpen && "rotate-180"
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Transparent bridge fills the gap so mouseleave doesn't fire */}
            <div className={cn(
              "absolute top-full right-0 w-72 pt-2",
              dropdownOpen ? "pointer-events-auto" : "pointer-events-none"
            )}>
              <div
                className={cn(
                  "rounded-xl overflow-hidden",
                  "bg-bg-surface/95 backdrop-blur-xl border border-border-subtle",
                  "shadow-2xl shadow-primary/5",
                  "transition-all duration-200 origin-top",
                  dropdownOpen
                    ? "scale-y-100 opacity-100"
                    : "scale-y-0 opacity-0"
                )}
              >
                <div className="p-2">
                  {USE_CASES.map((useCase) => (
                    <Link
                      key={useCase.href}
                      href={useCase.href}
                      className="block rounded-lg px-4 py-3 transition-colors hover:bg-white/5"
                    >
                      <span className="block text-sm font-semibold text-text-heading">
                        {useCase.name}
                      </span>
                      <span className="block text-xs text-text-muted mt-0.5">
                        {useCase.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Button href={SITE.ctaUrl} size="sm" external>
            {SITE.ctaTextShort}
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span className={cn("block h-0.5 w-6 bg-text-primary transition-all duration-300", mobileOpen && "rotate-45 translate-y-2")} />
          <span className={cn("block h-0.5 w-6 bg-text-primary transition-all duration-300", mobileOpen && "opacity-0")} />
          <span className={cn("block h-0.5 w-6 bg-text-primary transition-all duration-300", mobileOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-[64px] bg-bg-primary/98 backdrop-blur-xl z-40",
          "transition-all duration-300",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-1 p-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-lg text-text-muted hover:text-text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}

          <div className="py-3">
            <p className="text-xs uppercase tracking-wider text-text-muted mb-3">Industries</p>
            {USE_CASES.map((useCase) => (
              <Link
                key={useCase.href}
                href={useCase.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 pl-4 text-text-muted hover:text-text-primary transition-colors border-l border-border-subtle"
              >
                {useCase.name}
              </Link>
            ))}
          </div>

          <div className="pt-4">
            <Button href={SITE.ctaUrl} className="w-full" external>
              {SITE.ctaText}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
