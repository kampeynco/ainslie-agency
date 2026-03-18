import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { SERVICES } from "@/data/services";

export function Services() {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">
          Everything You Need to Win in AI Search
        </h2>
        <p className="mt-4 text-text-muted max-w-2xl mx-auto">
          A comprehensive GEO strategy covering every angle AI search engines use to decide
          who to recommend.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICES.map((service) => (
          <GlassCard key={service.title} className="text-center">
            <span className="text-3xl block mb-3" aria-hidden="true">{service.icon}</span>
            <h3 className="text-base font-semibold text-text-heading font-[family-name:var(--font-heading)] mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">{service.description}</p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
