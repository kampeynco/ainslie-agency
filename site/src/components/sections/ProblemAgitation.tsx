import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface ProblemAgitationProps {
  headline: string;
  painPoints: string[];
  agitation: string;
}

export function ProblemAgitation({ headline, painPoints, agitation }: ProblemAgitationProps) {
  return (
    <SectionWrapper className="bg-bg-surface/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-center mb-10">
          {headline}
        </h2>

        <ul className="space-y-4">
          {painPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-border-subtle">
              <span className="shrink-0 mt-0.5 text-red-400/80 text-lg">✕</span>
              <p className="text-text-primary leading-relaxed">{point}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 p-6 rounded-xl border border-primary/20 bg-primary/5">
          <p className="text-text-primary leading-relaxed text-lg font-medium">
            {agitation}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
