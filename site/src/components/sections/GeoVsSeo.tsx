import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";

export function GeoVsSeo() {
  return (
    <SectionWrapper className="bg-bg-surface/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">
          SEO Gets You Blue Links.{" "}
          <GradientText>GEO Gets You Recommended.</GradientText>
        </h2>
        <p className="mt-4 text-text-muted max-w-2xl mx-auto">
          Generative Engine Optimization is the practice of making AI search engines cite, quote,
          and recommend your business in their generated answers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Traditional SEO */}
        <GlassCard className="relative overflow-hidden" hover={false}>
          <div className="absolute top-0 left-0 w-full h-1 bg-text-muted/30" />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🔗</span>
            <h3 className="text-xl font-bold font-[family-name:var(--font-heading)]">
              Traditional SEO
            </h3>
          </div>
          <p className="text-text-muted mb-4">Optimizes for Google&apos;s blue link rankings</p>
          <ul className="space-y-3 text-sm text-text-muted">
            <li className="flex items-start gap-2">
              <span className="text-text-muted/50 mt-0.5">→</span>
              <span>Rank higher in a list of 10 links</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-text-muted/50 mt-0.5">→</span>
              <span>Users still have to click and browse</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-text-muted/50 mt-0.5">→</span>
              <span>Keyword density and backlink focused</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-text-muted/50 mt-0.5">→</span>
              <span>Traffic declining as AI answers grow</span>
            </li>
          </ul>
        </GlassCard>

        {/* GEO */}
        <GlassCard className="relative overflow-hidden border-primary/30" hover={false}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🧠</span>
            <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] gradient-text">
              GEO (What We Do)
            </h3>
          </div>
          <p className="text-text-muted mb-4">Optimizes for AI-generated answers</p>
          <ul className="space-y-3 text-sm text-text-primary">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">✓</span>
              <span>AI directly recommends your business</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">✓</span>
              <span>Users get your name before they even click</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">✓</span>
              <span>Citability, structured data, and entity authority</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">✓</span>
              <span>AI traffic converts 4.4x higher</span>
            </li>
          </ul>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
}
