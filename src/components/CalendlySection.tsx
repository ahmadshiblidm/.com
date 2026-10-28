import React, { useState } from 'react';
import { Calendar, CheckCircle2, Clock, Globe, MessageSquare, ExternalLink, Shield, Sparkles, Send, Video, ArrowRight } from 'lucide-react';

export default function CalendlySection() {
  const [selectedDay, setSelectedDay] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('11:30 AM');
  const [selectedTopic, setSelectedTopic] = useState('Google Ads Campaign Audit');

  // Days list (next 5 days)
  const availableDays = [
    { label: 'Today', date: 'Oct 28' },
    { label: 'Tomorrow', date: 'Oct 29' },
    { label: 'Thursday', date: 'Oct 30' },
    { label: 'Friday', date: 'Oct 31' },
    { label: 'Saturday', date: 'Nov 01' },
  ];

  // Time slots in Asia/Dhaka timezone
  const availableTimes = [
    '10:00 AM',
    '11:30 AM',
    '02:30 PM',
    '04:00 PM',
    '06:30 PM',
    '08:00 PM',
    '09:30 PM',
  ];

  const topics = [
    'Google Ads Campaign Audit',
    'Meta Ads (FB/IG) Strategy',
    'GA4 & Event Tracking Setup',
    'CRO & Budget Scaling',
  ];

  const handleCalendlyOpen = () => {
    // If official Calendly popup is available on window, open it
    // @ts-expect-error Calendly on window
    if (typeof window !== 'undefined' && window.Calendly?.initPopupWidget) {
      // @ts-expect-error Calendly on window
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/ahmadshiblidm?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=27ae60',
      });
    } else {
      window.open('https://calendly.com/ahmadshiblidm', '_blank', 'noreferrer');
    }
  };

  const generateWhatsAppBookingUrl = () => {
    const text = encodeURIComponent(
      `Hello Ahmad, I would like to book a free 30-min consultation session.\nTopic: ${selectedTopic}\nPreferred Day: ${selectedDay}\nPreferred Time: ${selectedTime} (Asia/Dhaka)`
    );
    return `https://wa.me/8801873818927?text=${text}`;
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Agenda & Value Proposition */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm space-y-6 flex-1">
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
                      <Globe className="w-3.5 h-3.5 text-slate-400" /> Asia/Dhaka Time (UTC+6)
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
                  Confirmation &amp; Video Call Link
                </div>
                <p>Google Meet invite link and calendar confirmation will be sent automatically. No preparation required.</p>
              </div>
            </div>

            {/* Direct Instant Channels Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-sm">
              <h4 className="text-sm font-bold text-white mb-1.5">Prefer Instant Messaging?</h4>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Skip calendar booking and message Ahmad Shibli directly for immediate coordination:
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <a
                  href="https://wa.me/8801873818927"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-3 rounded-lg font-bold transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://t.me/ahmadshibli"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-[#0088cc] hover:bg-[#0077b5] text-white py-2.5 px-3 rounded-lg font-bold transition-all hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Scheduling Card (Completely Eliminates Blank Space) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                  <div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                      Live Scheduling
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1.5">
                      Select Your Preferred Time
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                    <Video className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Google Meet</span>
                  </div>
                </div>

                {/* Step 1: Topic Selector */}
                <div className="mb-6">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    1. Consultation Focus Topic
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {topics.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTopic(t)}
                        className={`text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                          selectedTopic === t
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold shadow-xs'
                            : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{t}</span>
                          {selectedTopic === t && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Date Selector */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      2. Choose Date
                    </label>
                    <span className="text-[11px] text-slate-500">Asia/Dhaka Standard Time</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {availableDays.map((d) => (
                      <button
                        key={d.label}
                        type="button"
                        onClick={() => setSelectedDay(d.label)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          selectedDay === d.label
                            ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                            : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        <div className="text-xs font-bold">{d.label}</div>
                        <div className="text-[11px] opacity-75 mt-0.5">{d.date}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Time Slot Selector */}
                <div className="mb-8">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    3. Available Time Slots
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {availableTimes.map((tm) => (
                      <button
                        key={tm}
                        type="button"
                        onClick={() => setSelectedTime(tm)}
                        className={`p-2.5 rounded-lg border text-xs font-semibold transition-all ${
                          selectedTime === tm
                            ? 'bg-[#27AE60] border-[#27AE60] text-white shadow-sm'
                            : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                        }`}
                      >
                        {tm}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 space-y-3">
                <button
                  type="button"
                  onClick={handleCalendlyOpen}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#27AE60] hover:bg-[#219653] text-white font-bold text-base py-4 px-6 rounded-xl shadow-lg shadow-emerald-950/20 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Confirm on Calendly ({selectedDay} at {selectedTime})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Instant confirmation via email &amp; calendar
                  </span>

                  <a
                    href={generateWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 underline"
                  >
                    <span>Or reserve via WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
