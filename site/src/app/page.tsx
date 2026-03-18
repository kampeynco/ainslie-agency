import { Hero } from "@/components/sections/Hero";
import { MarketStats } from "@/components/sections/MarketStats";
import { GeoVsSeo } from "@/components/sections/GeoVsSeo";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SocialProof } from "@/components/sections/SocialProof";
import { PricingHint } from "@/components/sections/PricingHint";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarketStats />
      <GeoVsSeo />
      <Services />
      <HowItWorks />
      <SocialProof />
      <PricingHint />
      <Faq />
      <FinalCta />
    </>
  );
}
