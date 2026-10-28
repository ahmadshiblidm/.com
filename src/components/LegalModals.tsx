import React, { useEffect } from 'react';
import { X, ShieldCheck, Lock, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export default function LegalModals({ isOpen, type, onClose }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              {type === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <p className="text-xs text-slate-500">Effective Date: October 2026 · Ahmad Shibli Portfolio</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-slate-600 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex items-start gap-3 text-emerald-900">
                <Lock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed">
                  Your ad account privacy, client lists, analytics data, and business metrics are treated under strict non-disclosure. Read-only access is used for audits and credentials are never stored insecurely.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-1">1. Information We Collect</h4>
                <p>
                  When you submit a consultation request, audit booking, or contact form, we collect your name, business email address, website URL, monthly ad budget range, and current marketing bottleneck descriptions.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-1">2. How Your Information Is Used</h4>
                <p>
                  Information gathered is solely utilized to analyze your advertising campaigns, prepare tailored strategic recommendations, provide audit reports, and communicate directly regarding your marketing objectives.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-1">3. Non-Disclosure &amp; Account Protection</h4>
                <p>
                  We strictly adhere to platform security best practices. During audits, standard Manager Account (MCC) or Business Manager partner access is requested with View-Only permissions unless direct management is contracted.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-1">4. Third-Party Services</h4>
                <p>
                  Appointments may be scheduled via Calendly or Google Meet. Communication occurs via WhatsApp and Telegram based on your preference. We do not sell, rent, or trade your personal or business data to any third parties.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-1">5. Data Retention &amp; Removal</h4>
                <p>
                  You can request the immediate deletion of your submitted contact details, audit notes, or historical performance summaries at any time by messaging <span className="font-medium text-slate-800">ahmadshiblidm@gmail.com</span>.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex items-start gap-3 text-slate-800">
                <FileText className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed">
                  Our consultancy services are based on data-driven Google Ads, Meta Ads, and GA4 tracking best practices designed to maximize ROAS and optimize CPA.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-1">1. Scope of Free Audits</h4>
                <p>
                  The complimentary 30-minute consultation and initial campaign audit provide diagnostic insights and prioritized growth opportunities based on accessible data. It carries zero long-term commitment.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-1">2. Performance &amp; Ad Spend Guarantee</h4>
                <p>
                  While digital advertising campaigns are rigorously engineered for high return on ad spend (ROAS), external market factors, seasonal demand, competitor bidding, and website conversion rates affect performance. Past results do not guarantee identical returns.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-1">3. Account Ownership</h4>
                <p>
                  Clients retain 100% ownership and administrative control over their Google Ads accounts, Meta Business portfolios, Google Tag Manager containers, and GA4 properties.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-1">4. Engagement &amp; Cancellation</h4>
                <p>
                  Monthly retainer agreements and setup projects are clearly detailed in mutual proposals prior to commencement. Retainer management can be discontinued with written notice according to individual service agreements.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
