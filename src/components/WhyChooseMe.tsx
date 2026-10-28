import React from 'react';
import { Award, BarChart3, Target, MessageSquare, CheckCircle, ShieldAlert } from 'lucide-react';

export default function WhyChooseMe() {
  const reasons = [
    {
      title: 'Certified Expertise',
      icon: Award,
      badge: '5+ Years Experience',
      items: [
        'Google Ads Certified Professional',
        'Meta Ads Certified Specialist',
        '5+ years dedicated digital marketing background',
        'Continuous learning & platform algorithm updates',
      ],
      description: 'Benefit from accredited knowledge directly aligned with Google and Meta’s latest auction and privacy mechanics.',
    },
    {
      title: 'Data-Driven Approach',
      icon: BarChart3,
      badge: 'Zero Guesswork',
      items: [
        'Every decision backed by rigorous analytics',
        'No guesswork, no emotional assumptions',
        'Real-time conversion tracking & event monitoring',
        'Transparent reporting & verified ROI metrics',
      ],
      description: 'Every dollar is accounted for with granular event attribution and quantitative statistical confidence.',
    },
    {
      title: 'Customized Solutions',
      icon: Target,
      badge: 'Tailored Strategy',
      items: [
        'Tailored to your specific revenue & CPA goals',
        'Industry-specific competitive best practices',
        'Flexible project-based or monthly packages',
        'No copy-pasted or cookie-cutter templates',
      ],
      description: 'Your margins, market maturity, and competitive landscape dictate the exact blueprint we deploy.',
    },
    {
      title: 'Transparent Communication',
      icon: MessageSquare,
      badge: 'Direct WhatsApp/Telegram',
      items: [
        'Clear explanations in plain human language',
        'Consistent weekly progress updates',
        'Direct access via WhatsApp & Telegram',
        'Zero hidden fees, zero surprise markups',
      ],
      description: 'No bureaucratic agency middlemen. You communicate directly with the specialist managing your ad spend.',
    },
    {
      title: 'Proven Track Record',
      icon: CheckCircle,
      badge: '50+ Accounts Scaled',
      items: [
        'Successfully audited & optimized 50+ clients',
        'Average ROI improvement: 25% in 30 days',
        'Experience spanning eCommerce, B2B, SaaS, Services',
        'Sustainable long-term client retention',
      ],
      description: 'Proven case studies with documented revenue increases and slashed cost-per-acquisition across diverse sectors.',
    },
  ];

  return (
    <section id="why-me" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-wide text-emerald-700 uppercase">
            Built on Trust &amp; Performance
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Why Businesses Choose Ahmad Shibli
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 text-balance">
            Proven Strategies. Real Results. Your Success is My Priority. Here is how my audit and optimization framework protects your budget and scales your profits.
          </p>
        </div>

        {/* 5 Reasons Grid - Bento style layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            const isMarquee = index === 0 || index === 4;
            return (
              <div
                key={item.title}
                className={`bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                    {item.items.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Guarantee Box */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-400">
                <ShieldAlert className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  30-Day Campaign Performance Guarantee
                </h4>
                <p className="mt-1 text-slate-300 text-sm sm:text-base max-w-2xl">
                  &ldquo;I don't just run ads—I fix broken campaigns. My clients see measurable efficiency improvements within 30 days or your fee is refunded.&rdquo;
                </p>
              </div>
            </div>

            <a
              href="#challenge-form"
              className="inline-flex items-center justify-center bg-[#27AE60] hover:bg-[#219653] text-white font-bold px-6 py-3.5 rounded-md text-sm whitespace-nowrap shadow-md transition-all duration-150 hover:scale-[1.02] shrink-0"
            >
              Claim Your Campaign Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
