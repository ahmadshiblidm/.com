import React, { useState } from 'react';
import { Stethoscope, CheckCircle2, ArrowRight, DollarSign, Layers, Search, Sparkles, Sliders, Target } from 'lucide-react';

export default function AuditGuide() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: 'Step 1',
      title: 'Account Structure Review',
      desc: 'Audit campaign hierarchy, ad group themes, match-type isolation, budget allocation, and ad rotation settings.',
      checks: [
        'Are campaigns structured logically around business objectives?',
        'Is budget allocated strategically to high-margin products?',
        'Are ad rotation settings preventing algorithmic bias?',
        'Are geographic targeting exclusions preventing accidental international spend?',
      ],
    },
    {
      step: 'Step 2',
      title: 'Keyword & Search Query Analysis',
      desc: 'Inspect real search query reports to isolate money-losing terms and discover high-intent keyword gaps.',
      checks: [
        'Which exact keywords are driving verified revenue?',
        'How much ad spend is wasted on irrelevant search terms?',
        'Are comprehensive negative keyword lists implemented?',
        'Are keyword match types aligned with current Google AI semantics?',
      ],
    },
    {
      step: 'Step 3',
      title: 'Ad Creative Performance Analysis',
      desc: 'Benchmark responsive search ads (RSAs), asset extensions, click-through rates, and ad relevance scores.',
      checks: [
        'Which headlines and descriptions produce the highest CTR?',
        'Are all ad asset extensions (sitelinks, callouts, snippets) populated?',
        'Is ad relevance rated "Good" or "Excellent" across ad groups?',
        'Are call-to-action triggers explicit and action-oriented?',
      ],
    },
    {
      step: 'Step 4',
      title: 'Landing Page & CRO Evaluation',
      desc: 'Evaluate the post-click experience: message continuity, mobile responsiveness, page speed, and form friction.',
      checks: [
        'Does the landing page immediately fulfill the ad headline promise?',
        'Is page loading speed under 2.5 seconds on mobile 4G networks?',
        'Are primary contact forms friction-free and above the fold?',
        'Are authoritative trust seals and customer testimonials prominent?',
      ],
    },
    {
      step: 'Step 5',
      title: 'Conversion Tracking Verification',
      desc: 'Validate that Google Tag Manager, Google Ads conversion tags, and GA4 events are passing accurate signals.',
      checks: [
        'Is Google Tag Manager firing without duplicate event triggers?',
        'Are transaction values and enhanced conversions configured?',
        'Is call tracking and form submission tracking accurately verified?',
        'Can revenue be directly attributed to specific ad campaigns and keywords?',
      ],
    },
    {
      step: 'Step 6',
      title: 'Competitive Auction Insights',
      desc: 'Analyze Impression Share, Outranking Share, and competitor bidding behavior within your exact niche.',
      checks: [
        'Who are your true search auction competitors?',
        'What keyword themes are competitors dominating?',
        'Are you losing impression share due to budget or ad rank?',
        'How can your ad copy differentiate from generic competitor claims?',
      ],
    },
    {
      step: 'Step 7',
      title: 'ROI & Budget Reallocation Roadmap',
      desc: 'Synthesize audit findings into an actionable 30-day tactical roadmap to reallocate wasted spend into profit centers.',
      checks: [
        'What is your true Cost Per Acquisition (CPA) by product line?',
        'Where can budget be pruned with zero loss in conversions?',
        'Which campaigns deserve immediate 20-50% budget scaling?',
        'What is the projected 30-day profit expansion roadmap?',
      ],
    },
  ];

  const optimizations = [
    {
      title: 'Keyword Refinement',
      icon: Search,
      impact: 'Same Budget · More Conversions',
      text: 'Prune money-draining broad queries, apply exhaustive multi-tiered negative keyword lists, and increase bids on proven high-intent terms.',
    },
    {
      title: 'Ad Copy & Asset Revamp',
      icon: Sparkles,
      impact: 'Higher CTR · Lower CPC',
      text: 'Rewrite underperforming responsive search ads with compelling buyer hooks, quantified social proof, and complete asset extensions.',
    },
    {
      title: 'Landing Page Enhancement',
      icon: Sliders,
      impact: 'Higher Conversion Rate',
      text: 'Streamline mobile UX, remove unnecessary form obstacles, elevate value propositions, and improve page speed for instant engagement.',
    },
    {
      title: 'Campaign Restructuring',
      icon: Layers,
      impact: 'Higher Quality Score · Lower Costs',
      text: 'Reorganize chaotic accounts into thematic ad groups to skyrocket Quality Scores and reduce Google’s required click bid prices.',
    },
    {
      title: 'Audience Targeting Refinement',
      icon: Target,
      impact: 'Lower Customer Acquisition Cost',
      text: 'Layer high-intent in-market audiences, custom intent segments, dynamic remarketing, and geographic bid modifiers.',
    },
    {
      title: 'Strategic Budget Reallocation',
      icon: DollarSign,
      impact: 'Higher Net ROI & Cash Flow',
      text: 'Transfer funds from plateaued campaigns directly into your top 20% highest-margin winning keywords.',
    },
  ];

  return (
    <section id="audit-guide" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-wide text-emerald-700 uppercase">
            Diagnostic Health Checkup
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Google Ads Audit &amp; Optimization: Complete Guide
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 text-balance">
            Uncover hidden problems costing you thousands of dollars every single day. A rigorous audit provides clarity, while precision optimization unlocks scale.
          </p>
        </div>

        {/* What is an Audit? Callout */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg border border-slate-800 mb-16">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <Stethoscope className="w-4 h-4" />
                The Medical Health Checkup Analogy
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                What Exactly is a Google Ads Audit?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Think of an audit as an exhaustive MRI for your advertising account. Over months of running ads, accounts accumulate &ldquo;ad fatigue,&rdquo; broken tracking links, bloated broad keywords, and mismatched bidding rules.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Identifies budget waste on irrelevant keywords</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Diagnoses low Quality Scores driving up click prices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Uncovers profitable keyword queries you are missing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fixes conversion pixel leaks and broken tracking</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-xl shrink-0 w-full lg:w-72 text-center lg:text-left space-y-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Action Step
              </span>
              <h4 className="text-lg font-bold text-white">From Audit to Optimization</h4>
              <p className="text-xs text-slate-300">
                An audit is diagnosis. Optimization is the surgery that restores profitability.
              </p>
              <a
                href="#challenge-form"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#27AE60] hover:bg-[#219653] text-white text-xs font-bold py-2.5 px-4 rounded-md shadow transition-colors"
              >
                <span>Request Account Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 7 Step Interactive Process */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              The 7-Step Account Diagnostic Process
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Click any stage to inspect the technical inspection checklist
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Step selector tabs */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              {steps.map((st, i) => (
                <button
                  key={st.step}
                  type="button"
                  onClick={() => setActiveStep(i)}
                  className={`text-left p-4 rounded-xl border transition-all duration-150 flex items-center justify-between cursor-pointer ${
                    activeStep === i
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded ${
                        activeStep === i
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {st.step}
                    </span>
                    <span className="text-sm font-semibold">{st.title}</span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      activeStep === i ? 'text-emerald-400 translate-x-1' : 'text-slate-400'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Active Step Details Card */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-2xl p-7 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded">
                  {steps[activeStep].step} Detailed Protocol
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {activeStep + 1} of 7
                </span>
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-2">
                {steps[activeStep].title}
              </h4>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Critical Verification Invariants:
                </span>
                {steps[activeStep].checks.map((chk, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{chk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 6 High-Impact Optimizations We Implement */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              6 High-Impact Optimizations We Implement
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Translating audit findings into immediate operational lifts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optimizations.map((opt) => {
              const Icon = opt.icon;
              return (
                <div
                  key={opt.title}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                      {opt.impact}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {opt.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {opt.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Before vs After Audit Comparison Matrix */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl border border-slate-800 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Verified Financial Impact
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              Typical Client Transformation: Before vs. After
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              Same budget. Zero increase in advertising expenditure. Doubled net bottom-line profit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Before Box */}
            <div className="bg-slate-800/80 rounded-xl p-6 border border-rose-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-700 mb-4">
                  <span className="text-sm font-bold text-rose-400 uppercase tracking-wider">
                    Before Optimization
                  </span>
                  <span className="text-xs text-slate-400 bg-slate-700/60 px-2 py-0.5 rounded">
                    Common Problems
                  </span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-1 border-b border-slate-700/50">
                    <span className="text-slate-400">Monthly Ad Budget:</span>
                    <span className="font-bold text-white tabular-nums">$2,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-700/50">
                    <span className="text-slate-400">Leads Generated:</span>
                    <span className="font-bold text-white tabular-nums">20 Leads</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-700/50">
                    <span className="text-slate-400">Cost Per Lead (CPA):</span>
                    <span className="font-bold text-rose-300 tabular-nums">$100 / lead</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-700/50">
                    <span className="text-slate-400">Sales Conversion Rate:</span>
                    <span className="font-bold text-white tabular-nums">25% (5 sales)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-700/50">
                    <span className="text-slate-400">Gross Monthly Revenue:</span>
                    <span className="font-bold text-white tabular-nums">$10,000</span>
                  </div>
                  <div className="flex justify-between py-2 bg-slate-900/60 px-3 rounded text-base font-semibold">
                    <span className="text-slate-300">Net Profit (after ad spend):</span>
                    <span className="font-bold text-white tabular-nums">$8,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* After Box */}
            <div className="bg-emerald-950/40 rounded-xl p-6 border border-emerald-500/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-emerald-800/40 mb-4">
                  <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
                    After Ahmad Shibli Optimization
                  </span>
                  <span className="text-xs text-emerald-300 bg-emerald-900/60 px-2 py-0.5 rounded font-semibold">
                    Within 30 Days
                  </span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-1 border-b border-emerald-800/30">
                    <span className="text-slate-300">Monthly Ad Budget:</span>
                    <span className="font-bold text-emerald-300 tabular-nums">$2,000 (Same spend)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-emerald-800/30">
                    <span className="text-slate-300">Leads Generated:</span>
                    <span className="font-bold text-emerald-300 tabular-nums">35 Leads (+75%)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-emerald-800/30">
                    <span className="text-slate-300">Cost Per Lead (CPA):</span>
                    <span className="font-bold text-emerald-400 tabular-nums">$57 / lead (-43%)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-emerald-800/30">
                    <span className="text-slate-300">Sales Conversion Rate:</span>
                    <span className="font-bold text-emerald-300 tabular-nums">35% (+40% quality traffic)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-emerald-800/30">
                    <span className="text-slate-300">Gross Monthly Revenue:</span>
                    <span className="font-bold text-emerald-300 tabular-nums">$17,500 (+75%)</span>
                  </div>
                  <div className="flex justify-between py-2 bg-emerald-900/60 px-3 rounded text-base font-semibold border border-emerald-500/30">
                    <span className="text-white">Net Profit (after ad spend):</span>
                    <span className="font-bold text-emerald-400 tabular-nums">$15,500 (+94% Lift!)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-slate-300">
              <strong className="text-white">Client Showcase:</strong> Consumer Electronics Store — Kept spend fixed at $3,000/mo while increasing sales from 60 to 85 (+42% revenue increase to $70,000/mo).
            </div>
            <a
              href="#book-now"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 whitespace-nowrap"
            >
              <span>Schedule Audit Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
