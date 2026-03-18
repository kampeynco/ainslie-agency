"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AccordionItem } from "@/components/ui/AccordionItem";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  faqs?: FaqItem[];
  heading?: string;
}

const DEFAULT_FAQS: FaqItem[] = [
  {
    question: "What is GEO (Generative Engine Optimization)?",
    answer:
      "GEO is the practice of optimizing your online presence so that AI search engines — ChatGPT, Perplexity, Google AI Overviews, Gemini, and Bing Copilot — cite, quote, and recommend your business in their generated answers. It's like SEO, but for the AI-powered search engines that are rapidly replacing traditional Google results.",
  },
  {
    question: "How is GEO different from SEO?",
    answer:
      "SEO optimizes for Google's traditional blue links and ranking algorithms. GEO optimizes for AI-generated answers where the AI decides which brands to cite. GEO focuses on citability, structured data, entity recognition, and content authority — the signals AI uses to decide who to recommend.",
  },
  {
    question: "Do I still need SEO if I do GEO?",
    answer:
      "Yes — and the good news is they're complementary. Strong SEO foundations (fast site, good content, proper structure) help with GEO. But GEO adds a critical layer: making your content specifically structured and authoritative enough for AI systems to cite directly. We handle both.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Technical fixes (AI crawler access, schema markup, llms.txt) take effect within weeks as AI systems re-crawl your site. Content and authority improvements compound over 2-3 months. We show you measurable score improvements in your monthly reports from month one.",
  },
  {
    question: "What AI platforms do you optimize for?",
    answer:
      "We optimize for all five major AI search platforms: ChatGPT (web search), Perplexity AI, Google AI Overviews, Google Gemini, and Bing Copilot. Each platform has different signals it relies on, and we tailor our strategy to each.",
  },
  {
    question: "What does the free audit include?",
    answer:
      "Our free AI visibility audit scores your website across AI citability, crawler access, structured data, content quality, and platform readiness. You'll see exactly how AI search engines currently perceive your business and what's blocking you from being recommended. No obligation — the report is yours to keep.",
  },
  {
    question: "What if my competitors start doing GEO too?",
    answer:
      "That's exactly why starting now matters. Only 23% of marketers are even thinking about GEO. The businesses that optimize first build the authority and citations that AI systems will continue to rely on. Being early gives you a compounding advantage that's hard to catch.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Monthly retainers are month-to-month with no long-term contracts. We believe in earning your business every month through measurable results, not locking you into agreements.",
  },
];

export function Faq({ faqs, heading }: FaqProps) {
  const displayFaqs = faqs || DEFAULT_FAQS;

  return (
    <SectionWrapper id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-center mb-12">
          {heading || "Frequently Asked Questions"}
        </h2>
        <div className="divide-y divide-border-subtle border-t border-border-subtle">
          {displayFaqs.map((faq) => (
            <AccordionItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
