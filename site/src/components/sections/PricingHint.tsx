import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { SITE } from "@/lib/constants";

interface PricingHintProps {
  industry?: string;
  retainerRange?: string;
}

const TRUST_SIGNALS = [
  { icon: "🔍", label: "Free AI Visibility Audit", detail: "See exactly where you stand across all 5 AI platforms" },
  { icon: "⚡", label: "15-Minute Discovery Call", detail: "No lengthy sales process. Get answers fast." },
  { icon: "📋", label: "Custom Action Plan", detail: "Walk away with a clear roadmap — even if you don't hire us" },
];

export function PricingHint({ industry }: PricingHintProps) {
  const headline = industry
    ? `Ready to Be the ${industry.replace(/s$/, "")} AI Recommends?`
    : "Ready to Show Up Where Clients Are Searching?";

  const subheadline = industry
    ? `While other ${industry} are invisible to AI search, you could be the one it recommends. It starts with one free call.`
    : "AI search is sending high-intent clients to businesses right now. Book a free call and see where you stand.";

  return (
    <SectionWrapper className="bg-bg-surface/30">
      <div className="max-w-3xl mx-auto">
        <GlassCard hover={false} className="text-center p-8 md:p-12 border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">
            <GradientText>{headline}</GradientText>
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto text-lg">
            {subheadline}
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {TRUST_SIGNALS.map(({ icon, label, detail }) => (
              <div key={label} className="rounded-xl bg-white/5 p-5">
                <div className="text-2xl mb-2">{icon}</div>
                <p className="font-semibold text-text-heading text-sm">{label}</p>
                <p className="text-xs text-text-muted mt-1">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button href={SITE.ctaUrl} size="lg" external>
              {SITE.ctaText}
              <span aria-hidden="true">→</span>
            </Button>
            <p className="mt-3 text-sm text-text-muted">
              No commitment. No pitch deck. Just a clear look at your AI visibility.
            </p>
          </div>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
}
