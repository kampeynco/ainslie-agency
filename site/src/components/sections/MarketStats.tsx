"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StatCard } from "@/components/ui/StatCard";

const stats = [
  {
    value: 527,
    suffix: "%",
    label: "AI Traffic Growth",
    description: "Year-over-year increase in AI-referred website traffic",
  },
  {
    value: 44,
    suffix: "x",
    prefix: "",
    label: "Higher Conversion",
    description: "AI traffic converts 4.4x higher than traditional organic search",
    displayPrefix: "4.",
  },
  {
    value: 50,
    suffix: "%",
    label: "Search Drop by 2028",
    description: "Gartner predicts traditional search traffic will decline by half",
  },
];

export function MarketStats() {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">
          The Shift Is Already Happening
        </h2>
        <p className="mt-4 text-text-muted max-w-2xl mx-auto">
          AI search isn&apos;t coming — it&apos;s here. And the businesses that show up in AI answers
          are capturing the highest-intent traffic available.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </SectionWrapper>
  );
}
