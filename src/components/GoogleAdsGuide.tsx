import React from 'react';
import { Search, Zap, DollarSign, Crosshair, BarChart2, RefreshCw, ArrowRight, Check } from 'lucide-react';

export default function GoogleAdsGuide() {
  const steps = [
    {
      num: '01',
      title: 'Target Buyer Intent',
      desc: 'Pinpoint precise high-intent keywords that people search when ready to hire or purchase.',
    },
    {
      num: '02',
      title: 'Dominate Top Positions',
      desc: 'Your ads appear above organic results on Google Search, Maps, and high-converting partner networks.',
    },
    {
      num: '03',
      title: 'Pay Strictly for Clicks (PPC)',
      desc: 'Zero cost for impressions. You only pay when an interested prospect clicks through to your page.',
    },
    {
      num: '04',
      title: 'Convert Visitors to Revenue',
      desc: 'Prospects land on high-converting landing pages configured with frictionless conversion funnels.',
    },
  ];

  const benefits = [
    {
      title: 'Targeted Traffic with Buying Intent',
      icon: Search,
      points: [
        'Reach prospects ALREADY searching for your specific solution',
        '75% of commercial searchers click on relevant paid search ads',
        'Pre-qualified high-intent leads rather than passive scrollers',
        'Consistently higher closing rates than social disruption ads',
      ],
    },
    {
      title: 'Immediate High-Value Visibility',
      icon: Zap,
      points: [
        'Rank at the top of Google results within hours, not months',
        'Bypass slow organic SEO index waitlists for critical terms',
        'Beat established competitors to the #1 mobile & desktop spot',
        'Essential for rapid product launches and time-sensitive offers',
      ],
    },
    {
      title: 'Cost-Effective & Infinitely Scalable',
      icon: DollarSign,
      points: [
        'Total budget control: start at $10/day or scale to $10,000/day',
        'Pure Pay-Per-Click (PPC) model—no wasteful static billboards',
        'Double down on winning ad groups that demonstrate high ROAS',
        'Pause or redirect underperforming campaigns instantly',
      ],
    },
    {
      title: 'Hyper-Precise Targeting Controls',
      icon: Crosshair,
      points: [
        'Granular keyword matching (exact, phrase, negative exclusions)',
        'Pinpoint geo-fencing (countries, cities, postal codes, radiuses)',
        'Device bidding splits (mobile-first, desktop B2B, tablet)',
        'Audience segmentation, in-market buyers & remarketing lists',
      ],
    },
    {
      title: 'Measurable Results & Exact Attribution',
      icon: BarChart2,
      points: [
        'Every single click, phone call, form submit, and sale tracked',
        'Unquestioned clarity on cost per lead (CPA) and return on ad spend (ROAS)',
        'Real-time analytics integration via Google Ads & GA4',
        'Eliminate mystery: calculate exact net revenue per dollar spent',
      ],
    },
    {
      title: 'Agile Flexibility & Rapid Iteration',
      icon: RefreshCw,
      points: [
        'Adjust ad copy, landing page URLs, or bids in seconds',
        'A/B test value propositions and headline variants on live traffic',
        'Deploy seasonal promotional copy without waiting for dev cycles',
        'Adapt bids in real-time based on conversion likelihood',
      ],
    },
  ];

  return (
    <section id="google-ads-guide" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-wide text-emerald-700 uppercase">
            Mastering Intent-Based Acquisition
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Understanding Google Ads: The Complete Guide
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 text-balance">
            Is Google Ads right for your business? Discover how high-intent search capture outperforms social disruption and accelerates revenue.
          </p>
        </div>

        {/* What is Google Ads? Core Explainer Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white rounded-2xl p-8 sm:p-10 shadow-lg border border-slate-800 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Core Distinction: Intent vs Entertainment
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                What Makes Google Ads the Most Lucrative Paid Channel?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Google Ads is Google’s premier advertising engine that puts your company in front of customers at the <span className="text-white font-semibold underline decoration-emerald-400">exact moment</span> they are actively searching to buy your products or services.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Unlike social feeds where audiences scroll for entertainment and your ads interrupt them, Google Search captures <span className="text-emerald-400 font-semibold">Active Commercial Intent</span>. When someone types &ldquo;emergency plumbing service&rdquo; or &ldquo;hire B2B marketing auditor,&rdquo; they are actively seeking an immediate solution with credit card in hand.
              </p>
            </div>

            <div className="lg:col-span-4 bg-slate-800/80 rounded-xl p-5 border border-slate-700/80 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">
                Quick Formula
              </h4>
              <div className="text-xs text-slate-300 space-y-2">
                <div className="p-2 rounded bg-slate-900/60 border border-slate-700">
                  <span className="font-semibold text-white">Social Media Ads:</span> Interruption based (passive audience, lower intent).
                </div>
                <div className="p-2 rounded bg-emerald-950/40 border border-emerald-500/30">
                  <span className="font-semibold text-emerald-300">Google Ads:</span> Demand capture (active buyers, 2-5x higher intent).
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works: 4 Step Process */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              How Google Ads Works in 4 Practical Steps
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.num}
                className="bg-slate-50 border border-slate-200/90 rounded-xl p-6 relative hover:border-slate-300 transition-colors"
              >
                <span className="text-3xl font-extrabold text-slate-300 tabular-nums">
                  {st.num}
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-2 mb-2">
                  {st.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Key Benefits Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              6 Core Benefits That Drive Business Growth
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">
                      {b.title}
                    </h4>
                    <ul className="space-y-2">
                      {b.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real World Example Card */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-wider uppercase text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
                Real-World Unit Economics Example
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                How a Small Local Service Business Generated a 19X ROAS
              </h4>
              <p className="text-slate-700 text-sm sm:text-base max-w-3xl leading-relaxed">
                &ldquo;A specialized plumbing contractor in Dhaka spends <strong className="text-slate-900">$300/month</strong> on Google Ads targeting high-value emergency pipe repair keywords. The campaign generates <strong className="text-slate-900">15 qualified calls</strong>, closing 3 high-margin contracts at $2,000 each = <strong className="text-slate-900">$6,000 gross revenue</strong>. Total net profit after ad spend: <strong className="text-emerald-800 font-bold">$5,700</strong>. That is a documented 19X Return On Ad Spend.&rdquo;
              </p>
            </div>

            <a
              href="#challenge-form"
              className="inline-flex items-center gap-2 bg-[#27AE60] hover:bg-[#219653] text-white font-semibold text-sm px-5 py-3 rounded-md shrink-0 shadow transition-all hover:scale-[1.02]"
            >
              <span>Calculate Your Campaign Potential</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
