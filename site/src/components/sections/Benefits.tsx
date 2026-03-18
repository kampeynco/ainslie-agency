import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface BenefitsProps {
  benefits: Benefit[];
  heading?: string;
}

export function Benefits({ benefits, heading }: BenefitsProps) {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">
          {heading || "Why GEO Works for Your Business"}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map((benefit) => (
          <GlassCard key={benefit.title}>
            <span className="text-3xl block mb-3" aria-hidden="true">{benefit.icon}</span>
            <h3 className="text-lg font-semibold text-text-heading font-[family-name:var(--font-heading)] mb-2">
              {benefit.title}
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">{benefit.description}</p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
