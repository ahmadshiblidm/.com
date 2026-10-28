import React from 'react';
import { ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';

export default function ConnectSection() {
  const channels = [
    {
      name: 'WhatsApp Me',
      description: 'Quick messages & fast responses',
      link: 'https://wa.me/8801873818927',
      hoverBorder: 'hover:border-[#25D366] hover:shadow-[#25D366]/20',
      badgeColor: 'text-[#25D366] bg-[#25D366]/10',
      iconSvg: (
        <svg className="w-8 h-8 fill-current text-[#25D366]" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.669-.699c.969.54 1.771.82 2.791.82 3.182 0 5.768-2.587 5.768-5.766.001-3.181-2.585-5.767-5.768-5.767zm7.653 5.766c.002 4.237-3.447 7.686-7.684 7.686-1.304 0-2.535-.333-3.619-.918l-4.381 1.149 1.168-4.272c-.672-1.136-1.03-2.446-1.031-3.645-.002-4.237 3.447-7.686 7.684-7.686 4.237 0 7.683 3.449 7.683 7.686z" />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      description: 'Fast messaging & notifications',
      link: 'https://t.me/ahmadshibli',
      hoverBorder: 'hover:border-[#0088cc] hover:shadow-[#0088cc]/20',
      badgeColor: 'text-[#0088cc] bg-[#0088cc]/10',
      iconSvg: (
        <svg className="w-8 h-8 fill-current text-[#0088cc]" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
        </svg>
      ),
    },
    {
      name: 'Facebook Page',
      description: 'Message via Facebook',
      link: 'https://facebook.com/ahmadshiblidm',
      hoverBorder: 'hover:border-[#1877F2] hover:shadow-[#1877F2]/20',
      badgeColor: 'text-[#1877F2] bg-[#1877F2]/10',
      iconSvg: (
        <svg className="w-8 h-8 fill-current text-[#1877F2]" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn Profile',
      description: 'Professional connection',
      link: 'https://linkedin.com/in/ahmadshiblibd',
      hoverBorder: 'hover:border-[#0A66C2] hover:shadow-[#0A66C2]/20',
      badgeColor: 'text-[#0A66C2] bg-[#0A66C2]/10',
      iconSvg: (
        <svg className="w-8 h-8 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-wide text-emerald-700 uppercase">
            Fast Direct Channels
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Connect With Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 text-balance">
            Multiple ways to reach out. Pick what is most convenient for you. No receptionists or sales reps—reach Ahmad Shibli directly.
          </p>
        </div>

        {/* 4 Cards Grid - Logos Only, No Plaintext Handles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {channels.map((ch) => (
            <a
              key={ch.name}
              href={ch.link}
              target="_blank"
              rel="noreferrer"
              className={`group bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-200 shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between ${ch.hoverBorder}`}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                  {ch.iconSvg}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-900 flex items-center gap-1.5">
                  <span>{ch.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {ch.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-600 group-hover:text-slate-900">
                  Open Direct Link
                </span>
                <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${ch.badgeColor}`}>
                  Online
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Direct Contact Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-slate-800">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Guaranteed Rapid Turnaround</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Responses to inquiries and audit requests are typically provided within <strong>24 hours</strong>.
              </p>
            </div>
          </div>

          <a
            href="#challenge-form"
            className="inline-flex items-center gap-2 bg-[#27AE60] hover:bg-[#219653] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-md transition-all hover:scale-[1.02] shrink-0"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Send Direct Message</span>
          </a>
        </div>
      </div>
    </section>
  );
}
