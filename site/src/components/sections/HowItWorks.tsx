import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StepCard } from "@/components/ui/StepCard";

interface Step {
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps?: Step[];
  heading?: string;
  subheading?: string;
}

const DEFAULT_STEPS: Step[] = [
  {
    title: "We Audit Your AI Visibility",
    description:
      "We run a comprehensive analysis of your website across every AI search platform — ChatGPT, Perplexity, Google AI Overviews, Gemini, and Bing Copilot. You get a detailed report showing exactly where you stand and what's blocking AI from recommending you.",
  },
  {
    title: "We Optimize Everything",
    description:
      "We fix technical issues (AI crawler access, schema markup, llms.txt), rewrite key pages for AI citability, and build your brand authority across the platforms AI trusts. Every fix is strategic — designed to make AI choose you.",
  },
  {
    title: "AI Search Engines Recommend You",
    description:
      "When someone asks AI for the best provider in your industry, your business starts showing up in the answer. Higher-intent traffic. Better conversion. No ad spend required.",
  },
];

export function HowItWorks({ steps, heading, subheading }: HowItWorksProps) {
  const displaySteps = steps || DEFAULT_STEPS;

  return (
    <SectionWrapper id="how-it-works" className="bg-bg-surface/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] sticky top-24">
            {heading || "How It Works"}
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed sticky top-36">
            {subheading ||
              "Three steps to going from invisible to recommended by AI search engines."}
          </p>
        </div>
        <div>
          {displaySteps.map((step, i) => (
            <StepCard
              key={step.title}
              number={i + 1}
              title={step.title}
              description={step.description}
              isLast={i === displaySteps.length - 1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
