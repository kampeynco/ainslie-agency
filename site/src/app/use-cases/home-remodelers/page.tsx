import type { Metadata } from "next";
import { homeRemodelersData as data } from "@/data/icps/home-remodelers";
import { IcpHero } from "@/components/sections/IcpHero";
import { ProblemAgitation } from "@/components/sections/ProblemAgitation";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { SocialProof } from "@/components/sections/SocialProof";
import { PricingHint } from "@/components/sections/PricingHint";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: `/use-cases/${data.slug}`,
});

export default function HomeRemodelersPage() {
  return (
    <>
      <IcpHero {...data.hero} />
      <ProblemAgitation {...data.problem} />
      <Solution {...data.solution} />
      <HowItWorks steps={data.howItWorks.steps} />
      <Benefits benefits={data.benefits} heading={`Why GEO Works for ${data.industryPlural}`} />
      <SocialProof
        heading={`AI Visibility Results for ${data.industryPlural}`}
        metrics={data.proofMetrics}
      />
      <PricingHint industry={data.industryPlural} retainerRange={data.stats.retainerRange} />
      <Faq faqs={data.faqs} heading={`GEO FAQ for ${data.industryPlural}`} />
      <FinalCta
        headline={data.finalCta.headline}
        subheadline={data.finalCta.subheadline}
        bullets={data.finalCta.bullets}
      />
    </>
  );
}
