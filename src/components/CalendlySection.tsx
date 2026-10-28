import React, { useEffect } from 'react';
import { Calendar, CheckCircle2, Clock, Globe, MessageSquare, ExternalLink, Shield } from 'lucide-react';

export default function CalendlySection() {
  useEffect(() => {
    try {
      // If Calendly widget script is loaded in window, init inline widgets
      // @ts-expect-error Calendly is on window
      if (typeof window !== 'undefined' && window.Calendly) {
        // @ts-expect-error Calendly is on window
        window.Calendly.initInlineWidget?.({
          url: 'https://calendly.com/ahmadshiblidm?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=27ae60',
          parentElement: document.getElementById('calendly-inline-container'),
        });
      }
    } catch (err) {
      console.warn('Calendly inline widget initialization deferred:', err);
    }
  }, []);

  const benefits = [
    'Discuss your current marketing bottlenecks & account history',
    'Review your target cost per acquisition (CPA) and ROI goals',
    'Identify instant quick wins to stop ad budget bleeding',
    'Explain step-by-step what an account audit entails',
    'Answer all your technical questions with zero pressure',
    'Present next actionable steps tailored to your growth stage',
  ];

  return (
    <section id="book-now" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-wide text-emerald-700 uppercase">
            Direct Calendar Access
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Schedule Your Free Audit Consultation
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 text-balance">
            Pick a time that works best for you. The first consultation is 100% free, confidential, and carries zero obligation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Agenda & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">30-Minute Strategy Session</h3>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> 30 Mins
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Globe className="w-3.5 h-3.5 text-slate-400" /> Default: Asia/Dhaka (Auto-Detects)
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                  During Our Free Consultation, We Will:
                </h4>
                <ul className="space-y-3">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 bg-slate-50 p-4 rounded-xl text-xs text-slate-600 space-y-1">
                <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  Confirmation &amp; Reminders
                </div>
                <p>You will receive an automated Google Meet invitation, calendar invite, and optional WhatsApp reminder prior to the call.</p>
              </div>
            </div>

            {/* Direct fallback contact if calendar is busy */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-sm">
              <h4 className="text-sm font-bold text-white mb-2">Can&rsquo;t Find a Suitable Time Slot?</h4>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Reach me directly across messaging channels to coordinate an off-schedule time:
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <a
                  href="https://wa.me/8801873818927"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-3 py-2 rounded-md font-medium transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Direct</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://t.me/ahmadshibli"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#0088cc] hover:bg-[#0077b5] text-white px-3 py-2 rounded-md font-medium transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Telegram Direct</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Calendly Embed Container */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden p-2 sm:p-4">
              <div
                id="calendly-inline-container"
                className="calendly-inline-widget min-w-[320px] h-[680px] w-full"
                data-url="https://calendly.com/ahmadshiblidm?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=27ae60"
              >
                {/* Fallback iframe in case async widget script hasn't rendered yet */}
                <iframe
                  src="https://calendly.com/ahmadshiblidm?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=27ae60"
                  width="100%"
                  height="660"
                  frameBorder="0"
                  title="Schedule a consultation with Ahmad Shibli"
                  className="rounded-xl w-full border-0"
                />
              </div>

              <div className="p-3 text-center border-t border-slate-100">
                <a
                  href="https://calendly.com/ahmadshiblidm"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  <span>Trouble viewing the calendar? Open Calendly directly in a new tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
