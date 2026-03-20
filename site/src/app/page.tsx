import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ainslie Agency | Law Firm GEO Authority",
  description:
    "Generative Engine Optimization for law firms. Get recommended by ChatGPT, Claude, and Perplexity — not just ranked on Google.",
};

export default function HomePage() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden px-8 pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
          <img
            alt="Legal statue of lady justice in a digital dark room"
            className="w-full h-full object-cover opacity-30"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA09vJ7OeGV0Yt26stoo_sSuhattHYamhbUk2m5qJ0k36D6Has3ukD_Gg0YFjiJR08RTIYH1kSpG1MROt1lYpYxgGn8VwzZEmHccmJtOYYBcz1npPD788xed7enst2w65i-opVhzniVikpVfIkOGHBtsT_RYgQrYrxIrHi_Dhx4RBVs9vOS_aK838XOkMaPcKK_h_CTo1l5ME-TIoflbyNo1h6cn33OSD5ng2gM7cXNybqy7hN4JrGXllO3BKwsnF3YPU4FjvH3i0I"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-surface-container-high border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-8">
              The Future of Legal Search
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-bold leading-tight -tracking-[0.02em] mb-8">
              Does AI Recommend{" "}
              <span className="italic text-primary">Your Firm?</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed">
              Traditional SEO is no longer enough. AI search engines are the new
              gatekeepers. If your firm isn&apos;t being cited in LLM responses,
              you have a massive marketing{" "}
              <span className="text-on-surface font-semibold underline decoration-primary/40 underline-offset-4">
                blind spot.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="gradient-cta px-8 py-4 rounded-md font-label font-bold text-base tracking-widest uppercase text-on-primary hover:shadow-xl transition-all">
                Get Your Free Law Firm AI Visibility Audit
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="glass-panel p-8 rounded-xl border border-white/5 relative">
              <div className="absolute -top-4 -right-4 bg-primary text-on-primary p-3 rounded-lg shadow-2xl">
                <span className="material-symbols-outlined text-2xl font-bold">
                  auto_awesome
                </span>
              </div>
              <div className="space-y-6">
                {/* Search Bar Mockup */}
                <div className="bg-surface-dim/50 rounded-lg p-3 border border-white/10 flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm text-primary">
                    search
                  </span>
                  <p className="text-xs font-medium text-on-surface-variant">
                    Who is the best personal injury lawyer in Dallas?
                  </p>
                </div>
                {/* AI Response Mockup */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-primary text-[14px]">
                        smart_toy
                      </span>
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-on-surface/60">
                      AI Analysis
                    </span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed text-on-surface">
                      Based on recent litigation success rates, peer
                      recognition, and authoritative legal citations,{" "}
                      <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4">
                        Your Firm
                      </span>{" "}
                      is consistently identified as the premier choice for
                      complex personal injury cases in Dallas.
                    </p>
                    <ul className="space-y-2 text-[13px] text-on-surface-variant">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Highest weighted authority score in North Texas.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Cited by 12+ independent legal journals in 2024.
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">
                        AI Citation Verified &amp; Recommended
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-surface-container-low px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-5xl font-headline font-bold mb-8">
                Your Firm&apos;s Biggest Marketing{" "}
                <span className="text-primary italic">Blind Spot</span>
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-12">
                The way clients find legal counsel has fundamentally shifted.
                While you&apos;re optimizing for keywords, AI is analyzing your
                reputation, citations, and authority.
              </p>
            </div>
            <div className="lg:col-span-7 grid gap-6">
              <div className="bg-surface p-8 rounded-lg flex gap-6 group hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">
                  psychology_alt
                </span>
                <div>
                  <h4 className="text-xl font-bold mb-2">The Hidden Filter</h4>
                  <p className="text-on-surface-variant">
                    AI models like ChatGPT and Claude act as a hidden filter,
                    recommending only firms that meet high-authority thresholds.
                  </p>
                </div>
              </div>
              <div className="bg-surface p-8 rounded-lg flex gap-6 group hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">
                  analytics
                </span>
                <div>
                  <h4 className="text-xl font-bold mb-2">Untracked Loss</h4>
                  <p className="text-on-surface-variant">
                    You&apos;re losing high-intent leads who never even visit
                    your site because the AI didn&apos;t suggest you as a top
                    choice.
                  </p>
                </div>
              </div>
              <div className="bg-surface p-8 rounded-lg flex gap-6 group hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">
                  update_disabled
                </span>
                <div>
                  <h4 className="text-xl font-bold mb-2">Stale SEO Tactics</h4>
                  <p className="text-on-surface-variant">
                    Standard backlink building and keyword stuffing are
                    invisible to generative search engines focusing on semantic
                    intent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Stack / Bento Grid */}
      <section id="solutions" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
            What You Get in Your Free AI Visibility Audit
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "report_gmailerrorred",
              title: "GEO Gap Report",
              desc: "Discover exactly which AI models aren't recommending your firm — and why. Shows the precise gaps between your current authority signals and what AI needs to cite you.",
            },
            {
              icon: "camera_front",
              title: "Competitor Snapshot",
              desc: "See exactly which rival firms are winning AI recommendation share in your jurisdiction — so you know who you're losing high-intent leads to right now.",
            },
            {
              icon: "terminal",
              title: "Prompt Test",
              desc: "We run 50+ localized prompts across ChatGPT, Perplexity, and Google AI to show you exactly how AI responds when a prospect searches for a firm like yours.",
            },
            {
              icon: "new_releases",
              title: "Authority Audit",
              desc: "Find out where your firm is being cited — and where it's absent from the high-authority legal sources AI uses to decide who to recommend.",
            },
            {
              icon: "hub",
              title: "Semantic Web Map",
              desc: "Shows where AI is missing key signals about your firm and practice areas — the invisible gaps causing you to be skipped in AI recommendations.",
            },
            {
              icon: "map",
              title: "Action Roadmap",
              desc: "A prioritized plan to close your visibility gaps and start appearing in AI recommendations for your highest-value practice areas — with clear next steps, not vague advice.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-surface-container p-8 rounded-xl border-l-4 border-primary"
            >
              <span className="material-symbols-outlined text-primary mb-6 block text-4xl">
                {card.icon}
              </span>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mechanism Section */}
      <section id="mechanism" className="py-24 bg-surface-container-lowest px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-5xl font-headline font-bold mb-8">
              We Help AI Search Engines Confidently Recommend{" "}
              <span className="italic text-primary">Your Firm</span>
            </h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Generative Engine Optimization (GEO) isn&apos;t about gaming a
              system; it&apos;s about providing the clear, structured, and
              authoritative data that AI models need to make a recommendation.
            </p>
            <ul className="space-y-4">
              {[
                "Semantic data structuring",
                "Authority citation building",
                "Legal-specific entity mapping",
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 text-on-surface">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square bg-surface-container rounded-2xl overflow-hidden border border-white/5">
              <img
                alt="Neural network visualization"
                className="w-full h-full object-cover opacity-50"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9ssvN855qlrGD8e3c-gmRgzOO-LaPZIvTUNkhZY_vQJ6NuZug9q3srGtgywSKLUmPQ_-rcfrKhrl-vtZna6Ym5HunQAZUgVYlHLLgDZe-YbO8uK9PM-QRqjgEOOlCUM0pJkLIXQYwawtGFGwHpAPlZB6dgaWS7Oedu0cbDXXm0deBMcNLfiaf3kF1VEvZMY4NCn1Wyr_ufLK5vINYmyLgFK5hLF7AuAJbRP0T4pLm5QvlqLOuOvI5HvQH8GWIiojcsgnIz9hQ8ME"
              />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="glass-panel p-8 rounded-xl border border-primary/20 w-full">
                  <h3 className="font-headline text-2xl italic mb-4">
                    Ainslie Agency Logic
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs tracking-widest uppercase">
                      <span>Authority Signal</span>
                      <span className="text-primary">98%</span>
                    </div>
                    <div className="w-full h-1 bg-surface-variant rounded-full">
                      <div className="w-[98%] h-full bg-primary" />
                    </div>
                    <div className="flex justify-between items-center text-xs tracking-widest uppercase">
                      <span>Citation Density</span>
                      <span className="text-primary">84%</span>
                    </div>
                    <div className="w-full h-1 bg-surface-variant rounded-full">
                      <div className="w-[84%] h-full bg-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold mb-4">
            The Path to Dominance
          </h2>
          <p className="text-on-surface-variant">
            A streamlined methodology for the modern legal environment.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Audit",
              desc: "We perform a comprehensive scan of LLM responses to identify your current citation gaps.",
            },
            {
              step: "2",
              title: "Fix",
              desc: "We inject authority signals and structured data into the digital web to update AI knowledge graphs.",
            },
            {
              step: "3",
              title: "Recommend",
              desc: "Your firm becomes the definitive answer for relevant AI-driven legal search queries.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="relative p-8 bg-surface-container rounded-lg text-center"
            >
              <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">
                {item.title}
              </h3>
              <p className="text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-24 bg-surface-container-low px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-5xl font-headline font-bold">
                Proof of <span className="italic text-primary">Authority</span>
              </h2>
              <p className="text-on-surface-variant mt-4">
                Actual performance metrics from early GEO adopters.
              </p>
            </div>
            <div className="text-right">
              <span className="text-6xl font-headline font-bold text-primary">
                +240%
              </span>
              <p className="text-xs uppercase tracking-widest text-on-surface-variant">
                Increase in AI Recommendations
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-surface p-1 rounded-xl overflow-hidden">
              <div className="bg-surface-container p-10 rounded-lg h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">
                    Personal Injury Firm — Dallas
                  </span>
                  <span className="bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-widest px-2 py-1 rounded">
                    90-Day Results
                  </span>
                </div>
                <h4 className="text-2xl font-headline mb-6">
                  From &ldquo;Unknown&rdquo; to &ldquo;Top Choice&rdquo; in
                  ChatGPT 4.0
                </h4>
                <div className="space-y-6">
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-on-surface-variant">
                      Initial Citation Rate
                    </span>
                    <span>2.4%</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-on-surface-variant">
                      Post-GEO Citation Rate
                    </span>
                    <span className="text-primary font-bold">41.8%</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-on-surface-variant">Prompts Tested</span>
                    <span>50+ across ChatGPT, Perplexity, Google AI</span>
                  </div>
                  <p className="text-sm italic text-on-surface-variant">
                    &ldquo;Within 90 days, our firm became the primary
                    recommendation for high-value catastrophic injury prompts in
                    the North Texas area.&rdquo;
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-surface p-1 rounded-xl overflow-hidden">
              <div className="bg-surface-container p-10 rounded-lg h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">
                    Corporate Litigators — NYC
                  </span>
                  <span className="bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-widest px-2 py-1 rounded">
                    90-Day Results
                  </span>
                </div>
                <h4 className="text-2xl font-headline mb-6">
                  Dominating Competitive Legal Queries
                </h4>
                <div className="space-y-6">
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-on-surface-variant">
                      Market Share Increase
                    </span>
                    <span className="text-primary font-bold">+180%</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-on-surface-variant">
                      Lead Quality (MQL)
                    </span>
                    <span className="text-primary font-bold">High Intent</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-on-surface-variant">Prompts Tested</span>
                    <span>50+ across ChatGPT, Perplexity, Google AI</span>
                  </div>
                  <p className="text-sm italic text-on-surface-variant">
                    &ldquo;The traffic we get from AI search results converted
                    at a 3x higher rate than standard Google Ads.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-on-surface-variant/50 italic text-center mt-8">
            Illustrative results based on typical GEO implementations.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-8 max-w-4xl mx-auto">
        <h2 className="text-4xl font-headline font-bold mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "What is GEO and how is it different from SEO?",
              a: "SEO focuses on ranking links on a search page. GEO (Generative Engine Optimization) focuses on getting AI models like ChatGPT and Perplexity to mention and recommend your firm within their synthesized answers.",
              open: true,
            },
            {
              q: "Does this work for all legal niches?",
              a: "Yes, from high-volume personal injury to niche corporate law, AI models are used across all sectors to research and vet legal counsel.",
            },
            {
              q: "How long does it take to see results?",
              a: "LLMs update their knowledge bases frequently. Most firms see shifts in recommendation patterns within 60 to 90 days of implementation.",
            },
            {
              q: "Is GEO compliant with legal ethics?",
              a: "Absolutely. GEO is about ensuring accuracy and authority in how your firm is represented digitally. It uses white-hat, citation-based methods.",
            },
          ].map((faq) => (
            <details
              key={faq.q}
              className="group bg-surface-container rounded-lg"
              {...(faq.open ? { open: true } : {})}
            >
              <summary className="list-none p-6 flex justify-between items-center cursor-pointer font-bold">
                {faq.q}
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-surface-container-low opacity-50" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-headline font-bold mb-8">
            Fast Clarity. No Long-Term{" "}
            <span className="italic text-primary">Commitment.</span>
          </h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
            The audit is free. The insights are permanent. Find out exactly
            where you stand in the new AI economy before your competitors close
            the gap.
          </p>
          <button className="gradient-cta px-12 py-6 rounded-md font-label font-extrabold text-xl tracking-widest uppercase text-on-primary shadow-2xl hover:scale-105 transition-transform">
            Claim Your Free AI Visibility Audit Now
          </button>
          <p className="mt-8 text-sm text-on-surface-variant uppercase tracking-[0.2em] opacity-60">
            Limited to 5 firms per jurisdiction monthly.
          </p>
        </div>
      </section>
    </div>
  );
}
