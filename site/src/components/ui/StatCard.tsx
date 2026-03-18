"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { GlassCard } from "./GlassCard";

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}

export function StatCard({ value, suffix = "", prefix = "", label, description }: StatCardProps) {
  const { ref, isVisible } = useIntersectionObserver();
  const count = useCountUp(value, isVisible);

  return (
    <div ref={ref}>
      <GlassCard className="text-center">
        <p className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] gradient-text">
          {prefix}{count}{suffix}
        </p>
        <p className="mt-2 text-lg font-semibold text-text-heading">{label}</p>
        {description && (
          <p className="mt-1 text-sm text-text-muted">{description}</p>
        )}
      </GlassCard>
    </div>
  );
}
