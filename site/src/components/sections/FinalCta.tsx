import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { SITE } from "@/lib/constants";

interface FinalCtaProps {
  headline?: string;
  subheadline?: string;
  bullets?: string[];
}

export function FinalCta({ headline, subheadline, bullets }: FinalCtaProps) {
  const displayBullets = bullets || [
    "Free AI visibility audit — see your exact score",
    "Clear roadmap to getting recommended by AI",
    "No commitment, no pressure — just clarity",
  ];

  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-50" />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] leading-tight">
          {headline || (
            <>
              Stop Losing Customers to{" "}
              <GradientText>AI Search.</GradientText>
            </>
          )}
        </h2>
        <p className="mt-4 text-lg text-text-muted max-w-xl mx-auto">
          {subheadline ||
            "Every day you wait, AI learns to recommend someone else. Book your free audit and see where you stand."}
        </p>

        <ul className="mt-8 space-y-3 text-left max-w-md mx-auto">
          {displayBullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-text-primary">
              <span className="text-accent mt-0.5 shrink-0">✓</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Button href={SITE.ctaUrl} size="lg" external>
            {SITE.ctaText}
            <span aria-hidden="true">→</span>
          </Button>
          <p className="mt-3 text-sm text-text-muted">
            15-minute call. No sales pitch. Just your AI visibility report.
          </p>
        </div>
      </div>
    </section>
  );
}
