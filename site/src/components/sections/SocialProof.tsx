import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";

interface SocialProofProps {
  heading?: string;
  subheading?: string;
  metrics?: { label: string; before: string; after: string }[];
}

const DEFAULT_METRICS = [
  { label: "GEO Visibility Score", before: "23/100", after: "78/100" },
  { label: "AI Crawler Access", before: "Blocked", after: "Full Access" },
  { label: "Schema Markup", before: "Missing", after: "Comprehensive" },
  { label: "AI Platform Coverage", before: "0/5", after: "5/5" },
];

export function SocialProof({ heading, subheading, metrics }: SocialProofProps) {
  const displayMetrics = metrics || DEFAULT_METRICS;

  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">
          {heading || "Real Results From Real Audits"}
        </h2>
        <p className="mt-4 text-text-muted max-w-2xl mx-auto">
          {subheading ||
            "Here's what happens when we optimize a business for AI search visibility."}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {displayMetrics.map((metric) => (
          <GlassCard key={metric.label} className="text-center">
            <p className="text-sm text-text-muted mb-3">{metric.label}</p>
            <div className="flex flex-col items-center gap-1">
              <span className="text-lg text-text-muted/60 line-through">{metric.before}</span>
              <GradientText className="text-2xl font-bold font-[family-name:var(--font-heading)]">
                {metric.after}
              </GradientText>
            </div>
          </GlassCard>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-text-muted">
        Results shown are from actual GEO audits. Individual results vary based on starting position and industry.
      </p>
    </SectionWrapper>
  );
}
