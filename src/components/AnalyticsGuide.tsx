import React from 'react';
import { Compass, Activity, Route, DollarSign, AlertTriangle, CheckCircle, TrendingDown, Layers } from 'lucide-react';

export default function AnalyticsGuide() {
  const metrics = [
    {
      title: 'Traffic Sources',
      icon: Compass,
      desc: 'Understand exactly where your visitors originate: Paid Ads (Google, Meta), Organic Search (SEO), Direct URL, Social Referrals, and Affiliate links.',
      whyMatters: 'Know which channel brings paying clients versus useless clicks. If Google Ads delivers cheap clicks but 0 conversions, while LinkedIn converts at 8%, reallocate budget accordingly.',
    },
    {
      title: 'Conversion Tracking',
      icon: Activity,
      desc: 'Pinpoint every micro and macro milestone: purchase checkouts, qualified lead submissions, booked consultations, phone calls, file downloads, and cart events.',
      whyMatters: 'You cannot optimize what you do not measure. Without pristine server/client conversion tracking, ad algorithms bid blindly on low-intent users.',
    },
    {
      title: 'User Behavior & On-Site Engagement',
      icon: Layers,
      desc: 'Observe the friction in the browsing flow: pages visited, dwell time, scroll depth milestones (25%, 50%, 90%), button clicks, and drop-off exit pages.',
      whyMatters: 'If 80% of paid ad visitors bounce within 3 seconds, your ad promise does not match your landing page headline. Analytics reveals the exact bottleneck.',
    },
    {
      title: 'Full Multi-Touch Customer Journey',
      icon: Route,
      desc: 'Track cross-device attribution across multiple visits: first touch discovery, retargeting touches, days to conversion, and mobile-to-desktop transitions.',
      whyMatters: 'Modern buyers visit 3-5 times before committing. GA4 data-driven attribution credits every touchpoint so you do not kill profitable top-of-funnel ads.',
    },
    {
      title: 'Return on Investment (ROI & ROAS)',
      icon: DollarSign,
      desc: 'Connect actual merchant revenue to ad campaign IDs: cost per acquisition (CPA), return on ad spend (ROAS), and gross profit margins per channel.',
      whyMatters: 'Turn marketing from an unpredictable cost center into an engineered profit machine. Know with mathematical precision how much net revenue each campaign produces.',
    },
  ];

  const mistakes = [
    'Not installing analytics or using deprecated Universal Analytics tags',
    'Failing to configure custom conversion events and purchase values',
    'Tracking basic page views while ignoring actual lead form submissions',
    'Ignoring analytics reports and making ad decisions based on gut feeling',
    'Not linking Google Ads and GA4 to pass auto-tagging GCLID conversions',
  ];

  return (
    <section id="analytics-guide" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-wide text-emerald-700 uppercase">
            Data Architecture &amp; GA4
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Analytics Explained: Know Your Customer Data
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 text-balance">
            &ldquo;If You&rsquo;re Not Tracking Analytics, You&rsquo;re Flying Blind.&rdquo; Discover how Google Analytics 4 (GA4) turns raw traffic into actionable profit insights.
          </p>
        </div>

        {/* Definition & Without Analytics Blindspots */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Foundational Definition
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4">
                What is Web Analytics &amp; GA4?
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Analytics is the disciplined methodology of collecting, measuring, and interpreting user activity on your digital properties. It directly answers the questions that make or break a business: <em className="text-slate-900 font-medium">Where do our most profitable clients come from? Which ads are wasting our budget? Why do visitors leave without buying?</em>
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <strong className="text-slate-900">Google Analytics 4 (GA4)</strong> is Google’s event-based tracking infrastructure engineered for the privacy-first era. It connects app, mobile, and desktop journeys into a unified conversion timeline.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs sm:text-sm text-slate-700">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Configured with Google Tag Manager, custom data layers, and enhanced measurement.</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-md">
            <div className="flex items-center gap-2 mb-4 text-rose-400">
              <TrendingDown className="w-5 h-5" />
              <h4 className="text-sm font-bold uppercase tracking-wider">
                Without Analytics, You Never Know:
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Exact visitor counts versus bot spam traffic</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Whether Google Ads or Meta Ads drove the purchase</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">✕</span>
                <span>The precise page where 70% of potential buyers drop off</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">✕</span>
                <span>How many phone calls or booking submits were generated</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Which campaign keywords produce positive net cash flow</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 5 Key Metrics Cards */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              5 Critical Data Streams Provided by GA4
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className={`bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                    idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {m.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 bg-slate-50/70 p-3 rounded-lg">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block mb-1">
                      Why It Matters:
                    </span>
                    <p className="text-xs text-slate-600 leading-normal">
                      {m.whyMatters}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why GA4 Setup Is Critical Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-6 sm:p-8">
            <h4 className="text-lg font-bold text-rose-900 flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center text-sm font-black">
                ✕
              </span>
              Without Proper GA4 Setup
            </h4>
            <ul className="space-y-3 text-sm text-rose-800">
              <li>• You are guessing campaign strategy on subjective opinions</li>
              <li>• Ad budgets are drained by bot traffic and accidental clicks</li>
              <li>• Inability to prove return on marketing spend to stakeholders</li>
              <li>• Smart Bidding algorithms lack data to optimize conversions</li>
            </ul>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6 sm:p-8">
            <h4 className="text-lg font-bold text-emerald-900 flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center text-sm font-black">
                ✓
              </span>
              With Ahmad Shibli&rsquo;s GA4 Implementation
            </h4>
            <ul className="space-y-3 text-sm text-emerald-800">
              <li>• Every decision backed by verified statistical conversion data</li>
              <li>• Automated reporting dashboards showing exact ROAS</li>
              <li>• Google Ads algorithms receive clean, high-value signals</li>
              <li>• Uncover hidden leakage points where customers abandon orders</li>
            </ul>
          </div>
        </div>

        {/* Common Analytics Mistakes + Case Insight */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-amber-600 mb-3">
                <AlertTriangle className="w-5 h-5" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  5 Most Common Analytics Mistakes Businesses Make
                </h4>
              </div>
              <ol className="space-y-2 text-xs sm:text-sm text-slate-700">
                {mistakes.map((mis, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="font-bold text-slate-400 tabular-nums">{i + 1}.</span>
                    <span>{mis}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-6 border border-slate-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800/40">
                Real Client Discovery
              </span>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                &ldquo;One client discovered that <strong className="text-white">40% of their Google Ads budget</strong> was being consumed by completely irrelevant broad-match search terms. By establishing exact conversion tracking, we eliminated those terms and saved <strong className="text-emerald-400">$2,000/month</strong> while sustaining the exact same conversion volume.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
