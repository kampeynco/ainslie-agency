export interface IcpPageData {
  slug: string;
  industry: string;
  industryPlural: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    headline: string;
    highlightedText: string;
    subheadline: string;
    ctaText: string;
  };
  problem: {
    headline: string;
    painPoints: string[];
    agitation: string;
  };
  solution: {
    headline: string;
    description: string;
  };
  howItWorks: {
    steps: { title: string; description: string }[];
  };
  benefits: { title: string; description: string; icon: string }[];
  stats: {
    clientValue: string;
    adSpend: string;
    retainerRange: string;
  };
  proofMetrics: { label: string; before: string; after: string }[];
  faqs: { question: string; answer: string }[];
  finalCta: {
    headline: string;
    subheadline: string;
    bullets: string[];
  };
}
