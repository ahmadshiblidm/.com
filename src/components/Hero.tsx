import React from 'react';
import { CheckCircle2, Calendar, ArrowRight, ShieldCheck, TrendingUp, Award, Clock } from 'lucide-react';
import { getAssetUrl } from '../utils';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-[#0F172A] text-white overflow-hidden border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs sm:text-sm text-slate-300 font-medium shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Available for New Audits · Asia/Dhaka &amp; Global Clients</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Your Google Ads &amp; Meta Ads Specialist |{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                Stop Wasting Ad Budget
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 text-balance">
              Expert Audits. Data-Driven Optimization. Real Results. Get a free, comprehensive campaign analysis today and turn underperforming ad spend into high-converting revenue.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#book-now"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#27AE60] hover:bg-[#219653] text-white font-bold text-base px-7 py-3.5 rounded-md shadow-lg shadow-emerald-950/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Free Consultation</span>
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-slate-800/60 text-white font-semibold text-base px-6 py-3.5 rounded-md border border-slate-600 hover:border-slate-400 transition-all duration-200"
              >
                <span>See How I Can Help</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

            {/* Trust markers */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> No long-term lock-in contracts
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400" /> 100% Data-driven insights
              </span>
            </div>
          </div>

          {/* Right Column: High Quality Portrait of Ahmad Shibli */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500/30 to-sky-500/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300" />

              <div className="relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/80 shadow-2xl">
                <img
                  src={getAssetUrl('assets/aistudio/IMG-20260926-WA0002.jpg_bacfd4d5.jpeg')}
                  alt="Ahmad Shibli - Digital Marketing Specialist"
                  className="w-full h-auto object-cover object-top aspect-[4/5] transform group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent p-5 pt-12">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-white tracking-tight">Ahmad Shibli</h2>
                      <p className="text-xs text-emerald-400 font-medium">Google Ads &amp; Meta Ads Specialist</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-800/90 px-2 py-0.5 rounded border border-slate-700">
                        Dhaka, BD
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Metric Card 1 */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-slate-900/95 border border-slate-700/80 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white tabular-nums">+25% Avg ROI</div>
                  <div className="text-[11px] text-slate-400">Within First 30 Days</div>
                </div>
              </div>

              {/* Floating Mini Metric Card 2 */}
              <div className="absolute top-4 -right-3 sm:-right-4 bg-slate-900/95 border border-slate-700/80 rounded-xl p-2.5 px-3 shadow-xl backdrop-blur-md flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-slate-200">Google Ads Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges Row */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <div className="text-base sm:text-lg font-bold text-white tabular-nums">50+ Audits</div>
              <div className="text-xs text-slate-400">Completed with Impact</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <TrendingUp className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <div className="text-base sm:text-lg font-bold text-white tabular-nums">25% Average</div>
              <div className="text-xs text-slate-400">Campaign Improvement</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <Award className="w-6 h-6 text-sky-400 shrink-0" />
            <div>
              <div className="text-base sm:text-lg font-bold text-white">Google Ads Certified</div>
              <div className="text-xs text-slate-400">&amp; Meta Ads Certified</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <Clock className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <div className="text-base sm:text-lg font-bold text-white tabular-nums">24-Hour</div>
              <div className="text-xs text-slate-400">Response Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
