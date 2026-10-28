import React from 'react';
import { ShoppingBag, Building2, Wrench, CheckCircle, Quote } from 'lucide-react';

export default function ResultsSection() {
  const cases = [
    {
      clientType: 'E-commerce Brand',
      industry: 'Fashion & Apparel',
      icon: ShoppingBag,
      result: '35% Reduction in CPA',
      metric: '-35%',
      metricLabel: 'Cost Per Acquisition',
      timeframe: '30 Days Post-Optimization',
      summary: 'Audited broad-match keyword sprawl and unoptimized smart bidding. Rebuilt campaign into segmented product categories with strict negative lists.',
      deliverables: ['Negative keyword overhaul', 'GA4 purchase conversion tracking', 'Product catalog feed fix'],
    },
    {
      clientType: 'Digital B2B Agency',
      industry: 'Professional Services',
      icon: Building2,
      result: '52% Increase in Lead Quality',
      metric: '+52%',
      metricLabel: 'Qualified Inbound Leads',
      timeframe: '60 Days Implementation',
      summary: 'Replaced vague generic search terms with high-intent decision-maker search phrases. Restructured lead capture forms to filter out tire-kickers.',
      deliverables: ['Competitor auction conquesting', 'Form qualification logic', 'Responsive search ad copy overhaul'],
    },
    {
      clientType: 'Local Service Company',
      industry: 'Home & Commercial Services',
      icon: Wrench,
      result: '23% Improvement in Conversion Rate',
      metric: '+23%',
      metricLabel: 'Visitor-to-Call Rate',
      timeframe: '90 Days Partnership',
      summary: 'Introduced mobile call-only campaigns with geo-fenced postal radius targeting and immediate click-to-WhatsApp emergency consultation triggers.',
      deliverables: ['Click-to-Call extensions', 'Mobile landing page optimization', 'Local search ad scheduling'],
    },
  ];

  return (
    <section id="case-studies" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-wide text-emerald-700 uppercase">
            Documented Impact
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Results from Recent Client Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 text-balance">
            Real results from real businesses like yours. Every engagement is measured by bottom-line profit, reduced acquisition cost, and sustainable growth.
          </p>
        </div>

        {/* 3 Result Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cases.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.clientType}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {c.industry}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                    {c.timeframe}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                    {c.clientType}
                  </h3>

                  {/* Big Metric Display */}
                  <div className="my-4 p-4 rounded-xl bg-white border border-slate-200 text-center">
                    <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 tabular-nums">
                      {c.metric}
                    </div>
                    <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide mt-1">
                      {c.metricLabel}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {c.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block">
                    Key Execution:
                  </span>
                  {c.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Testimonial Quote */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
          <Quote className="absolute right-6 top-6 w-24 h-24 text-slate-800/60 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-1 mb-4 text-emerald-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg">★</span>
              ))}
            </div>

            <p className="text-lg sm:text-xl font-medium text-slate-100 leading-relaxed italic">
              &ldquo;Ahmad identified <strong className="text-emerald-400 font-bold">$1,200/month in wasted budget</strong> on irrelevant keywords within our first audit. By restructuring our campaigns and improving our landing pages, we increased revenue while reducing ad spend. Highly recommended for any business looking for honest, data-driven PPC mastery!&rdquo;
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center font-bold text-emerald-400 text-base">
                RC
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Rashid Chowdhury</h4>
                <p className="text-xs text-slate-400">Managing Director · Apex Tech Retail Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
