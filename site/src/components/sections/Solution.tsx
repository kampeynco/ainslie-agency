import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

interface SolutionProps {
  headline: string;
  description: string;
}

export function Solution({ headline, description }: SolutionProps) {
  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">
          <GradientText>{headline}</GradientText>
        </h2>
        <p className="mt-6 text-lg text-text-muted leading-relaxed">
          {description}
        </p>
        <div className="mt-8">
          <Button href={SITE.ctaUrl} external>
            {SITE.ctaTextShort}
            <span aria-hidden="true">→</span>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
