import React from "react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { SITE } from "@/lib/constants";

interface IcpHeroProps {
  headline: string;
  highlightedText: string;
  subheadline: string;
  ctaText: string;
  background?: React.ReactNode;
}

export function IcpHero({ headline, highlightedText, subheadline, ctaText, background }: IcpHeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Background pattern */}
      {background ?? (
        <AnimatedGridPattern
          numSquares={40}
          maxOpacity={0.08}
          duration={3}
          repeatDelay={1}
          className="text-primary [mask-image:radial-gradient(600px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-20%] h-[140%]"
        />
      )}

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-4 text-center py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-[family-name:var(--font-heading)] tracking-tight">
          {headline}{" "}
          <GradientText className="block mt-2">{highlightedText}</GradientText>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
          {subheadline}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={SITE.ctaUrl} size="lg" external>
            {ctaText}
            <span aria-hidden="true">→</span>
          </Button>
          <Button href="#how-it-works" variant="secondary" size="lg">
            See How It Works
          </Button>
        </div>

        <p className="mt-4 text-sm text-text-muted">
          15-minute call. No commitment. See your AI visibility score.
        </p>
      </div>
    </section>
  );
}
