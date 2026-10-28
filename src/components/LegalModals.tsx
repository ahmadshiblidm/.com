import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export default function LegalModals({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative text-slate-800">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-emerald-700">
              <ShieldCheck className="w-6 h-6" />
              <h3 className="text-xl font-bold text-slate-900">Privacy Policy</h3>
            </div>
            <p className="text-xs text-slate-500">Effective Date: October 2026</p>

            <div className="text-sm space-y-3 leading-relaxed text-slate-600">
              <p>
                <strong>1. Data Collection &amp; Use:</strong> Ahmad Shibli Digital Marketing Audits collects only the contact details (name, email, phone number) and business challenge information voluntarily submitted via our consultation request form.
              </p>
              <p>
                <strong>2. Confidentiality &amp; Ad Account Access:</strong> All campaign audits, ad account read-only permissions, keyword query logs, and commercial metrics shared with Ahmad Shibli are held in strict non-disclosure confidence. We will never share, sell, or disclose your proprietary business data or ad accounts to third parties.
              </p>
              <p>
                <strong>3. Communications:</strong> We use your contact information exclusively to respond to your audit inquiry, coordinate scheduling on Calendly/WhatsApp/Telegram, and deliver audit findings. We do not participate in unsolicited spam marketing.
              </p>
              <p>
                <strong>4. GDPR &amp; User Rights:</strong> You may request the deletion of your submitted consultation details at any time by contacting us directly.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-emerald-700">
              <ShieldCheck className="w-6 h-6" />
              <h3 className="text-xl font-bold text-slate-900">Terms of Service</h3>
            </div>
            <p className="text-xs text-slate-500">Effective Date: October 2026</p>

            <div className="text-sm space-y-3 leading-relaxed text-slate-600">
              <p>
                <strong>1. Nature of Services:</strong> Ahmad Shibli provides strategic consulting, account audits, GA4 configuration, and ad optimization services. Free initial consultations provide high-level diagnostics with no binding obligation.
              </p>
              <p>
                <strong>2. Audit Deliverables:</strong> Paid audits include comprehensive account analysis, written documentation, and live strategy consultations as detailed in individual service scope agreements.
              </p>
              <p>
                <strong>3. Client Responsibilities:</strong> Clients must provide necessary standard read-only access to Google Ads, Meta Ads Manager, or Google Tag Manager to enable thorough audits.
              </p>
              <p>
                <strong>4. Satisfaction &amp; Performance Guarantee:</strong> We stand behind our work. If an audit fails to provide actionable, quantifiable value and recommendations, eligible partial or full refunds are honored according to project scope agreements.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-slate-100 text-right">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
