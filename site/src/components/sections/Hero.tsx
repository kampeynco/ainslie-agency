import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Flickering grid background */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        color="#7c3aed"
        maxOpacity={0.12}
        flickerChance={0.08}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-4 text-center py-20">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary-light">
          Only 23% of marketers are thinking about this
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-[family-name:var(--font-heading)] tracking-tight">
          Your Competitors Are{" "}
          <GradientText>Showing Up in AI Search.</GradientText>{" "}
          <span className="block mt-2">You&apos;re Not.</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
          AI search is growing 527% year-over-year. When someone asks ChatGPT, Perplexity, or
          Google AI for a recommendation in your industry — will they mention your business?
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={SITE.ctaUrl} size="lg" external>
            {SITE.ctaText}
            <span aria-hidden="true">→</span>
          </Button>
          <Button href="#how-it-works" variant="secondary" size="lg">
            See How It Works
          </Button>
        </div>

        <p className="mt-4 text-sm text-text-muted">
          15-minute call. No commitment. We&apos;ll show you your AI visibility score.
        </p>
      </div>
    </section>
  );
}
