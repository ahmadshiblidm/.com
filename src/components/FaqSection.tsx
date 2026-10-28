import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'How much does a Google Ads audit cost?',
      answer:
        'Audits typically range from $500–$2,000 depending on account size, monthly spend, and campaign complexity. The initial 30-minute consultation call is completely free and carries zero obligation, so you will understand the exact scope and pricing before committing.',
    },
    {
      question: 'How long does an audit take?',
      answer:
        'A comprehensive, forensic audit takes 7–10 days. I review account architecture, search term reports, negative keyword gaps, Quality Scores, and GA4 tracking. You receive an exhaustive written report (15–20 pages), an actionable optimization roadmap, and a dedicated 1-hour consultation call to walk through the findings.',
    },
    {
      question: 'Will you manage my campaigns after the audit?',
      answer:
        'Yes! I offer dedicated monthly management services starting at $800/month for businesses wanting hands-on daily monitoring and optimization. However, the audit deliverable is 100% self-contained—you and your internal team can implement the roadmap yourselves or hand it to any marketing agency.',
    },
    {
      question: 'Do I need Google Analytics?',
      answer:
        'Absolutely. Without proper analytics, you cannot track if your ads are generating actual cash revenue versus accidental clicks. I can implement GA4 with Google Tag Manager, custom event tracking, and server attribution as part of our service.',
    },
    {
      question: 'What if my current campaigns are already optimized?',
      answer:
        'In over 90% of accounts we inspect, there are significant hidden leaks—often 20% to 40% in efficiency gains. Common unnoticed issues include obsolete match types, broad keyword bleed, misplaced conversion counts, and declining Quality Scores. Even healthy accounts benefit from a fresh, unbiased expert audit.',
    },
    {
      question: 'Can you help if I do not have Google Ads running yet?',
      answer:
        'Yes! We build high-converting search and remarketing campaigns from scratch. We conduct thorough competitor keyword research, establish conversion tracking, design landing page recommendations, and launch with a structured test budget.',
    },
    {
      question: 'How do you charge — hourly, flat fee, or performance-based?',
      answer:
        'I offer clear, predictable pricing: flat-fee audits, structured setup projects, or straightforward monthly management retainer fees. No surprise hourly overages. We discuss the ideal commercial model for your cash flow during the free consultation.',
    },
    {
      question: 'What if I am not satisfied with your work?',
      answer:
        'My goal is your long-term success. If an audit fails to uncover meaningful optimization insights or value, I offer a money-back satisfaction guarantee. I focus on building lasting client relationships rather than one-off transactional gigs.',
    },
    {
      question: 'How often should I audit my Google Ads account?',
      answer:
        'For businesses spending over $1,000/month, I recommend a comprehensive audit quarterly. For smaller ad budgets, an annual audit usually suffices. For rapid scale, dedicated ongoing monthly management is ideal.',
    },
    {
      question: 'Will you teach me to manage ads myself?',
      answer:
        'Absolutely. I include walkthrough videos and documentation in every project. I can train your in-house team on core mechanics, reading reporting dashboards, and making fundamental bid adjustments. However, many clients prefer ongoing management because daily optimization is time-intensive.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-wide text-emerald-700 uppercase">
            Clear Answers
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 text-balance">
            Everything you need to know about Google Ads audits, GA4 tracking, and campaign optimization.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 tabular-nums">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}.
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-6 bg-white rounded-xl border border-slate-200">
          <h4 className="text-sm font-bold text-slate-900 mb-1">
            Have a Specific Question About Your Account?
          </h4>
          <p className="text-xs text-slate-500 mb-4">
            Feel free to ask directly on WhatsApp or book a 30-minute discovery call.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/8801873818927"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 underline"
            >
              Ask on WhatsApp &rarr;
            </a>
            <span className="text-slate-300">·</span>
            <a
              href="#book-now"
              className="text-xs font-bold text-slate-700 hover:text-slate-900 underline"
            >
              Book Discovery Session &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
