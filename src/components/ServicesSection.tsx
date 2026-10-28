import React from 'react';
import { Check, Clock, UserCheck, ArrowRight, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const services: ServiceItem[] = [
    {
      id: 'google-ads-audit',
      title: 'Google Ads Audit & Optimization',
      price: '$500 – $2,000',
      timeline: '7 – 10 Days Delivery',
      idealFor: 'Existing Google Ads accounts underperforming or not audited recently',
      popular: true,
      features: [
        'Complete account structure & settings review',
        'Keyword performance & search query analysis',
        'Ad copy effectiveness & extension audit',
        'Landing page & message match review',
        'Conversion tracking & pixel verification',
        'In-depth competitor auction insights',
        'Detailed written report (15–20 pages)',
        'Comprehensive optimization strategy roadmap',
        '1-hour live strategy consultation call',
        '30-day dedicated post-audit support',
      ],
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads (Facebook & Instagram) Setup & Optimization',
      price: '$400 – $1,500',
      timeline: '5 – 7 Days Delivery',
      idealFor: 'Businesses wanting to launch or scale profitable Facebook & Instagram ads',
      features: [
        'Full campaign funnel architecture & structure',
        'High-intent audience & lookalike configuration',
        'Ad creative angles & copy recommendations',
        'Meta Pixel & Conversions API (CAPI) setup',
        'Event configuration & catalog setup',
        'Active campaign optimization for 30 days',
        'Transparent bi-weekly performance reporting',
        'Ongoing creative strategy refinement',
      ],
    },
    {
      id: 'ga4-tracking',
      title: 'Google Analytics 4 (GA4) Implementation & Tracking',
      price: '$300 – $800',
      timeline: '3 – 5 Days Delivery',
      idealFor: 'Websites without analytics or with corrupted, incomplete GA4 setups',
      features: [
        'GA4 account & property setup from scratch',
        'Google Tag Manager (GTM) container setup',
        'Custom event & trigger implementation',
        'Conversion goal & monetary value setup',
        'Google Ads & BigQuery integration linking',
        'Enhanced eCommerce purchase tracking',
        'Custom retargeting audience creation',
        'Recorded walk-through training & documentation',
        '2 weeks dedicated technical follow-up support',
      ],
    },
    {
      id: 'cro-consulting',
      title: 'CRO (Conversion Rate Optimization) Consulting',
      price: '$600 – $2,000',
      timeline: 'Ongoing (Min. 30 Days)',
      idealFor: 'Businesses getting website traffic but struggling to convert visitors into buyers',
      features: [
        'Frictionless landing page audit & redesign brief',
        'User behavior session & drop-off analysis',
        'Hypothesis-backed A/B testing roadmap',
        'Checkout & lead capture form streamlining',
        'High-converting CTA positioning & hooks',
        'Core Web Vitals & mobile page speed audit',
        'Mobile user experience (UX) audit',
        'Heatmap & click tracking analysis',
        'Implementation guidance for your developers',
      ],
    },
    {
      id: 'monthly-management',
      title: 'Monthly Managed Ads Service',
      price: '$800 – $3,000 / mo',
      timeline: 'Dedicated Monthly Partnership',
      idealFor: 'Ambitious businesses wanting proactive, hands-on senior ad management',
      popular: true,
      features: [
        'Daily ad monitoring & algorithmic bid adjustments',
        'Continuous keyword expansion & negative pruning',
        'Weekly creative & responsive ad A/B testing',
        'Landing page continuity & conversion tweaks',
        'Custom Looker Studio automated dashboard',
        'Direct WhatsApp & Telegram priority access',
        'Bi-weekly progress check-in calls',
        'Quarterly macro-market strategic reviews',
      ],
    },
  ];

  const handleChoose = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    }
    const el = document.getElementById('challenge-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-wide text-emerald-700 uppercase">
            Specialized Capabilities
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Complete Service Offerings
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 text-balance">
            Tailored Solutions for Your Digital Marketing Needs. Choose a one-time audit, a specialized tracking setup, or comprehensive monthly campaign management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl p-7 border transition-all duration-200 flex flex-col justify-between relative ${
                service.popular
                  ? 'border-emerald-500 shadow-md ring-1 ring-emerald-500/20'
                  : 'border-slate-200/90 shadow-sm hover:shadow-md'
              } ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-6 bg-[#27AE60] text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Most Requested
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>

                <div className="mb-4">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                    {service.price}
                  </span>
                </div>

                <div className="flex flex-col gap-2 pb-5 border-b border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{service.timeline}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <UserCheck className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span className="italic">{service.idealFor}</span>
                  </div>
                </div>

                <div className="pt-5 space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                    What&rsquo;s Included:
                  </span>
                  <ul className="space-y-2">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => handleChoose(service.title)}
                  className={`w-full inline-flex items-center justify-center gap-2 font-bold py-3 px-4 rounded-md text-sm transition-all duration-150 cursor-pointer ${
                    service.popular
                      ? 'bg-[#27AE60] hover:bg-[#219653] text-white shadow hover:scale-[1.01]'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>Inquire for {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
