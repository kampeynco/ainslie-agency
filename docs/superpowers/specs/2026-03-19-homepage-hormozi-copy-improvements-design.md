# Homepage Hormozi Copy Improvements — Design Spec

**Date:** 2026-03-19
**Status:** Approved
**Scope:** `site/src/app/page.tsx` — copy changes + light proof section enhancement + CTA wiring

---

## Background

ChatGPT reviewed the current law firm landing page and rated it 85–90% aligned with Alex Hormozi's *$100M Offers* framework. Four gaps were identified. This spec closes all four.

---

## Changes

### 1. Audit Deliverable Cards — Translate Jargon to Buyer Outcomes

All 6 cards in the "What You Get in Your Free AI Visibility Audit" section need their descriptions rewritten to lead with the business outcome (cases, leads, recommendations) rather than the technical deliverable name.

| Card | New Description |
|------|----------------|
| GEO Gap Report | "Discover exactly which AI models aren't recommending your firm — and why. Shows the precise gaps between your current authority signals and what AI needs to cite you." |
| Competitor Snapshot | "See exactly which rival firms are winning AI recommendation share in your jurisdiction — so you know who you're losing high-intent leads to right now." |
| Prompt Test | "We run 50+ localized prompts across ChatGPT, Perplexity, and Google AI to show you exactly how AI responds when a prospect searches for a firm like yours." |
| Authority Audit | "Find out where your firm is being cited — and where it's absent from the high-authority legal sources AI uses to decide who to recommend." |
| Semantic Web Map | "Shows where AI is missing key signals about your firm and practice areas — the invisible gaps causing you to be skipped in AI recommendations." |
| Action Roadmap | "A prioritized plan to close your visibility gaps and start appearing in AI recommendations for your highest-value practice areas — with clear next steps, not vague advice." |

### 2. Proof Section — Timeframe Badges + Prompts Tested Row + Illustrative Disclaimer

Each of the two case study cards gets:

- A **"90-Day Results" badge** — small pill in the top-right of the card header (`bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-widest px-2 py-1 rounded`)
- A new **"Prompts Tested"** metric row below the existing metrics: `50+ across ChatGPT, Perplexity, Google AI`
- A **section-level disclaimer** rendered below the two cards: `"Illustrative results based on typical GEO implementations."` — small, muted, centered (`text-xs text-on-surface-variant/50 italic text-center mt-8`)

### 3. Risk Reversal — Final CTA Section

Add below the scarcity line (`Limited to 5 firms per jurisdiction monthly.`) in the Final CTA section:

```
A bordered callout box (border border-white/10 rounded-lg p-4 max-w-lg mx-auto mt-6):
  ✓  If we don't find meaningful AI visibility gaps in your firm, we'll tell you directly —
     and you keep the audit insights either way. No retainer required to get your findings.
```

Styled with a `text-primary` checkmark icon (`material-symbols-outlined`) and `text-sm text-on-surface-variant` body copy.

### 4. CTA Buttons — Outcome-Focused Text + cal.com Link

Both CTA buttons are currently `<button>` elements with no href. Convert to `<a>` tags linking to `https://cal.com/ainslie-agency/discovery-call` with `target="_blank" rel="noopener noreferrer"`.

| Location | New Text |
|----------|----------|
| Hero section | `See If AI Recommends Your Firm →` |
| Final CTA section | `Find Out Why AI Isn't Recommending Your Firm →` |

Keep existing className/styling on both.

---

## Files Changed

- `site/src/app/page.tsx` — all changes are in this single file

## Out of Scope

- No layout or structural changes
- No new components
- No changes to any other page or component
- No changes to styling, colors, or fonts beyond what's described above
