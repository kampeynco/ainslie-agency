"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

const variants = {
  primary: [
    "bg-primary text-white",
    "shadow-[0_0_20px_rgba(124,58,237,0.3),0_0_40px_rgba(6,182,212,0.1)]",
    "hover:shadow-[0_0_30px_rgba(124,58,237,0.5),0_0_60px_rgba(6,182,212,0.25)]",
    "hover:scale-[1.02] hover:bg-primary-light",
    "animate-glow-pulse",
  ].join(" "),
  secondary: [
    "bg-transparent text-text-primary",
    "border border-border-subtle",
    "hover:border-primary hover:text-white hover:bg-white/5",
  ].join(" "),
  ghost: [
    "bg-transparent text-text-muted",
    "hover:text-text-primary hover:bg-white/5",
  ].join(" "),
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  external = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2",
    "rounded-xl font-semibold",
    "transition-all duration-300 ease-out",
    "cursor-pointer select-none",
    "font-[family-name:var(--font-heading)]",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
