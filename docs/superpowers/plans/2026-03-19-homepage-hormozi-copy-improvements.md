# Homepage Hormozi Copy Improvements Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply four Hormozi-aligned copy improvements to the law firm landing page — translate jargon to buyer outcomes, enhance proof cards with timeframe context, add a risk reversal, and wire CTA buttons to the cal.com booking link.

**Architecture:** All changes are confined to a single file (`site/src/app/page.tsx`). No new components, no new files. Changes are pure copy edits plus two small structural additions (proof card badge row, risk reversal block).

**Tech Stack:** Next.js 15, React, Tailwind CSS, Material Symbols (icon font already loaded)

---

## Files

| Action | File | What changes |
|--------|------|--------------|
| Modify | `site/src/app/page.tsx` | All four changes from spec |

---

### Task 1: Rewrite Audit Deliverable Card Descriptions

Replace all six card `desc` strings in the value stack grid with outcome-focused copy.

**Files:**
- Modify: `site/src/app/page.tsx` (the `.map()` array at the "Value Stack / Bento Grid" section, lines ~178–223)

- [ ] **Step 1: Open the file and locate the cards array**

  Find the array passed to `.map()` that starts with `{ icon: "report_gmailerrorred", title: "GEO Gap Report", desc: ...`. It is inside the `{/* Value Stack / Bento Grid */}` section.

- [ ] **Step 2: Replace the six `desc` values**

  Update each object's `desc` field to the following exact strings:

  ```tsx
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
  ```

- [ ] **Step 3: Verify in browser**

  Run `cd site && npm run dev` (if not already running). Open `http://localhost:3000`. Scroll to "What You Get in Your Free AI Visibility Audit". Confirm all six card descriptions show the new outcome-focused copy.

- [ ] **Step 4: Commit**

  ```bash
  git add site/src/app/page.tsx
  git commit -m "feat: rewrite audit deliverable card descriptions with buyer outcome copy"
  ```

---

### Task 2: Enhance Proof Cards with Timeframe Badge + Prompts Tested Row

Update both case study cards in the "Proof of Authority" section.

**Files:**
- Modify: `site/src/app/page.tsx` (the `{/* Case Studies */}` section, lines ~334–415)

- [ ] **Step 1: Update the Dallas card header**

  Find the first card's location `<span>` (currently `<span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 block">Personal Injury Firm — Dallas</span>`).

  Replace it with a flex row wrapping the label and a "90-Day Results" badge:

  ```tsx
  <div className="flex items-center justify-between mb-4">
    <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">
      Personal Injury Firm — Dallas
    </span>
    <span className="bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-widest px-2 py-1 rounded">
      90-Day Results
    </span>
  </div>
  ```

- [ ] **Step 2: Add Prompts Tested row to the Dallas card**

  After the "Post-GEO Citation Rate" row (the last `border-b` row in the Dallas card's `space-y-6` div), add:

  ```tsx
  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
    <span className="text-on-surface-variant">Prompts Tested</span>
    <span>50+ across ChatGPT, Perplexity, Google AI</span>
  </div>
  ```

- [ ] **Step 3: Update the NYC card header**

  Find the second card's location `<span>` (currently `<span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 block">Corporate Litigators — NYC</span>`).

  Replace with the same flex row pattern:

  ```tsx
  <div className="flex items-center justify-between mb-4">
    <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">
      Corporate Litigators — NYC
    </span>
    <span className="bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-widest px-2 py-1 rounded">
      90-Day Results
    </span>
  </div>
  ```

- [ ] **Step 4: Add Prompts Tested row to the NYC card**

  After the "Lead Quality (MQL)" row in the NYC card, add the same Prompts Tested row:

  ```tsx
  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
    <span className="text-on-surface-variant">Prompts Tested</span>
    <span>50+ across ChatGPT, Perplexity, Google AI</span>
  </div>
  ```

- [ ] **Step 5: Add section-level illustrative disclaimer**

  After the closing `</div>` of the `grid lg:grid-cols-2 gap-8` div (which wraps both cards), add:

  ```tsx
  <p className="text-xs text-on-surface-variant/50 italic text-center mt-8">
    Illustrative results based on typical GEO implementations.
  </p>
  ```

- [ ] **Step 6: Verify in browser**

  Scroll to "Proof of Authority". Confirm both cards show the "90-Day Results" badge in the header row, a "Prompts Tested" metric row, and the disclaimer text below the grid.

- [ ] **Step 7: Commit**

  ```bash
  git add site/src/app/page.tsx
  git commit -m "feat: add proof card timeframe badges, prompts tested row, and illustrative disclaimer"
  ```

---

### Task 3: Add Risk Reversal to Final CTA Section

Add a checkmark callout box below the scarcity line in the closing section.

**Files:**
- Modify: `site/src/app/page.tsx` (the `{/* Final CTA */}` section, lines ~462–481)

- [ ] **Step 1: Locate the scarcity line**

  Find: `<p className="mt-8 text-sm text-on-surface-variant uppercase tracking-[0.2em] opacity-60">Limited to 5 firms per jurisdiction monthly.</p>`

- [ ] **Step 2: Add risk reversal block after it**

  Insert immediately after that `<p>`:

  ```tsx
  <div className="border border-white/10 rounded-lg p-4 max-w-lg mx-auto mt-6">
    <div className="flex items-start gap-3">
      <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
      <p className="text-sm text-on-surface-variant text-left leading-relaxed">
        If we don&apos;t find meaningful AI visibility gaps in your firm, we&apos;ll tell you
        directly — and you keep the audit insights either way. No retainer required to get
        your findings.
      </p>
    </div>
  </div>
  ```

- [ ] **Step 3: Verify in browser**

  Scroll to the "Fast Clarity. No Long-Term Commitment." section. Confirm the bordered callout with a `check_circle` icon and risk reversal copy appears below the scarcity line.

- [ ] **Step 4: Commit**

  ```bash
  git add site/src/app/page.tsx
  git commit -m "feat: add risk reversal callout to final CTA section"
  ```

---

### Task 4: Wire CTA Buttons to cal.com and Update Text

Convert both `<button>` elements to `<a>` tags with outcome-focused text and the booking URL.

**Files:**
- Modify: `site/src/app/page.tsx` (hero section ~line 40, final CTA section ~line 474)

- [ ] **Step 1: Update the Hero CTA button**

  Find:
  ```tsx
  <button className="gradient-cta px-8 py-4 rounded-md font-label font-bold text-base tracking-widest uppercase text-on-primary hover:shadow-xl transition-all">
    Get Your Free Law Firm AI Visibility Audit
  </button>
  ```

  Replace with:
  ```tsx
  <a
    href="https://cal.com/ainslie-agency/discovery-call"
    target="_blank"
    rel="noopener noreferrer"
    className="gradient-cta px-8 py-4 rounded-md font-label font-bold text-base tracking-widest uppercase text-on-primary hover:shadow-xl transition-all"
  >
    See If AI Recommends Your Firm →
  </a>
  ```

- [ ] **Step 2: Update the Final CTA button**

  Find:
  ```tsx
  <button className="gradient-cta px-12 py-6 rounded-md font-label font-extrabold text-xl tracking-widest uppercase text-on-primary shadow-2xl hover:scale-105 transition-transform">
    Claim Your Free AI Visibility Audit Now
  </button>
  ```

  Replace with:
  ```tsx
  <a
    href="https://cal.com/ainslie-agency/discovery-call"
    target="_blank"
    rel="noopener noreferrer"
    className="gradient-cta px-12 py-6 rounded-md font-label font-extrabold text-xl tracking-widest uppercase text-on-primary shadow-2xl hover:scale-105 transition-transform"
  >
    Find Out Why AI Isn&apos;t Recommending Your Firm →
  </a>
  ```

- [ ] **Step 3: Verify in browser**

  Click both CTAs. Confirm each opens `https://cal.com/ainslie-agency/discovery-call` in a new tab.

- [ ] **Step 4: Commit**

  ```bash
  git add site/src/app/page.tsx
  git commit -m "feat: wire CTA buttons to cal.com with outcome-focused text"
  ```

---

## Done

All four tasks complete. The page now has:
- Outcome-focused audit deliverable descriptions
- Proof cards with 90-day timeframe badges, prompts tested metric, and illustrative disclaimer
- Risk reversal callout in the final CTA section
- Both CTAs linking to cal.com with buyer-outcome-focused text
