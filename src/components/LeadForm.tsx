import React, { useState } from 'react';
import { Send, CheckCircle, Calendar, MessageSquare, AlertCircle, Copy, ExternalLink, ShieldCheck } from 'lucide-react';
import { LeadFormData } from '../types';

interface LeadFormProps {
  initialService?: string;
}

export default function LeadForm({ initialService }: LeadFormProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    adPlatform: 'Both Google Ads & Meta Ads',
    mainChallenge: initialService
      ? `We need assistance with: ${initialService}. Our main bottleneck is high ad spend without adequate qualified conversions.`
      : '',
    goals: ['Audit current campaigns', 'Improve ROI', 'Generate more leads'],
    monthlyBudget: '$1,000 - $5,000',
    bestTime: 'Morning (10:00 AM - 1:00 PM Asia/Dhaka)',
    referralSource: 'LinkedIn',
    additionalInfo: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<LeadFormData | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const goalOptions = [
    'Increase website traffic',
    'Generate more leads',
    'Increase sales/revenue',
    'Improve conversion rate',
    'Reduce cost per click',
    'Start running ads',
    'Audit current campaigns',
    'Setup proper tracking',
    'Improve ROI',
  ];

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => {
      const exists = prev.goals.includes(goal);
      return {
        ...prev,
        goals: exists ? prev.goals.filter((g) => g !== goal) : [...prev.goals, goal],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.companyName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    if (formData.mainChallenge.trim().length < 20) {
      setErrorMsg('Please describe your main challenge with a bit more detail (at least 20 characters).');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
    setSubmittedData({ ...formData });

    try {
      const existing = JSON.parse(localStorage.getItem('as_inquiries') || '[]');
      existing.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('as_inquiries', JSON.stringify(existing));
    } catch {
      // ignore storage error
    }
  };

  const handleCopySummary = () => {
    if (!submittedData) return;
    const summary = `Lead Challenge Submission:
Name: ${submittedData.fullName}
Company: ${submittedData.companyName}
Email: ${submittedData.email}
Phone: ${submittedData.phone}
Ad Platform: ${submittedData.adPlatform}
Budget: ${submittedData.monthlyBudget}
Challenge: ${submittedData.mainChallenge}
Goals: ${submittedData.goals.join(', ')}
Preferred Contact: ${submittedData.bestTime}`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="challenge-form" className="py-20 bg-slate-900 text-white border-b border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wide text-emerald-400 uppercase">
            Start Your Transformation
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Tell Me About Your Challenge
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto text-balance">
            The more details you provide, the better I can analyze your campaign. Every inquiry is reviewed directly by Ahmad Shibli.
          </p>
        </div>

        {submitted && submittedData ? (
          <div className="bg-slate-800/95 border border-emerald-500/50 rounded-2xl p-8 sm:p-10 shadow-2xl animate-in fade-in duration-300">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-9 h-9" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                ✓ Thank you {submittedData.fullName}!
              </h3>

              <p className="text-slate-300 text-base max-w-xl mx-auto leading-relaxed">
                Your information has been received. I will review your challenge and contact you within <strong className="text-white">24 hours</strong> via the contact details you provided ({submittedData.phone}).
              </p>

              <div className="pt-4 pb-2">
                <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-700 text-left max-w-lg mx-auto text-xs sm:text-sm text-slate-300 space-y-2">
                  <div className="font-semibold text-emerald-400 uppercase tracking-wide text-xs">
                    Next Recommended Actions:
                  </div>
                  <p>• Book an immediate 30-min strategy slot on my calendar</p>
                  <p>• Reach me directly on WhatsApp for real-time priority review</p>
                  <p>• Connect on Telegram for fast async voice/text exchange</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <a
                  href="https://calendly.com/ahmadshiblidm"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#27AE60] hover:bg-[#219653] text-white font-bold text-sm px-5 py-3 rounded-md shadow transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Open Calendly Direct</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://wa.me/8801873818927"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm px-5 py-3 rounded-md shadow transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Message on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-semibold px-4 py-3 rounded-md transition-colors cursor-pointer"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copied ? 'Summary Copied!' : 'Copy Inquiry Summary'}</span>
                </button>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                >
                  Edit or submit another challenge
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6"
          >
            {errorMsg && (
              <div className="p-4 rounded-lg bg-rose-950/60 border border-rose-500/50 text-rose-300 text-sm flex items-center gap-2">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Full Name <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Company / Business Name <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your business name"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Email Address <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Phone / WhatsApp Number <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+880 1873 818927"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Current Advertising Platform <span className="text-emerald-400">*</span>
                </label>
                <select
                  value={formData.adPlatform}
                  onChange={(e) => setFormData({ ...formData, adPlatform: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-lg px-4 py-3 text-sm text-white transition-colors"
                >
                  <option value="Not currently advertising">Not currently advertising</option>
                  <option value="Google Ads only">Google Ads only</option>
                  <option value="Meta Ads only">Meta Ads only</option>
                  <option value="Both Google Ads & Meta Ads">Both Google Ads &amp; Meta Ads</option>
                  <option value="Other platform">Other platform</option>
                  <option value="Not sure">Not sure</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Current Monthly Ad Budget <span className="text-emerald-400">*</span>
                </label>
                <select
                  value={formData.monthlyBudget}
                  onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-lg px-4 py-3 text-sm text-white transition-colors"
                >
                  <option value="Under $500">Under $500</option>
                  <option value="$500 - $1,000">$500 – $1,000</option>
                  <option value="$1,000 - $5,000">$1,000 – $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 – $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                  <option value="Not decided yet">Not decided yet</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Main Challenge / Problem <span className="text-emerald-400">*</span>
                </label>
                <span className="text-[11px] text-slate-400 tabular-nums">
                  {formData.mainChallenge.length} characters
                </span>
              </div>
              <textarea
                rows={4}
                required
                placeholder="Describe your main marketing challenge. Examples:
- High ad spend but low conversion rate
- Don't know if Google Ads or Meta Ads is best for us
- Not tracking conversions accurately in GA4
- Ad account suspended or Quality Scores declining
- Need hands-on monthly optimization"
                value={formData.mainChallenge}
                onChange={(e) => setFormData({ ...formData, mainChallenge: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                What Are Your Goals? (Select all that apply)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {goalOptions.map((goal) => {
                  const isSelected = formData.goals.includes(goal);
                  return (
                    <button
                      type="button"
                      key={goal}
                      onClick={() => handleGoalToggle(goal)}
                      className={`text-left text-xs p-2.5 rounded-lg border transition-colors flex items-center gap-2 cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-300 font-medium'
                          : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                          isSelected
                            ? 'bg-emerald-500 border-emerald-400 text-white font-bold text-[10px]'
                            : 'border-slate-600'
                        }`}
                      >
                        {isSelected && '✓'}
                      </span>
                      <span>{goal}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Best Time to Reach You
                </label>
                <input
                  type="text"
                  placeholder="E.g., Morning 10am-12pm Asia/Dhaka"
                  value={formData.bestTime}
                  onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  How Did You Hear About Me?
                </label>
                <select
                  value={formData.referralSource}
                  onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-lg px-4 py-3 text-sm text-white transition-colors"
                >
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Telegram">Telegram</option>
                  <option value="Referral">Client Referral</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Additional Information (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Any links to your landing pages, target markets, or specific questions?"
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#27AE60] hover:bg-[#219653] text-white font-bold text-base py-4 px-8 rounded-lg shadow-xl shadow-emerald-950/50 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <Send className="w-5 h-5" />
                <span>Submit &amp; Schedule Free Consultation</span>
              </button>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Confidential · Zero Spam Guarantee · 24-Hour Response</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
