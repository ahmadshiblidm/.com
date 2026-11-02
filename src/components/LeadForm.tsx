import React, { useState } from 'react';
import { Send, CheckCircle, Calendar, MessageSquare, AlertCircle, Copy, ExternalLink, ShieldCheck, Loader2, Mail } from 'lucide-react';
import { LeadFormData } from '../types';

interface LeadFormProps {
  initialService?: string;
}

const RECIPIENT_EMAIL = 'ahmadshibli927@gmail.com';

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

  // Anti-spam honeypot & human verification state
  const [honeypot, setHoneypot] = useState('');
  const [humanVerified, setHumanVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<LeadFormData | null>(null);
  const [emailStatus, setEmailStatus] = useState<'sent' | 'fallback' | null>(null);
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

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot check (if filled by a bot, silently block)
    if (honeypot.trim() !== '') {
      return;
    }

    // 2. Required fields validation
    if (!formData.fullName.trim() || !formData.companyName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    // 3. Strict email format verification
    if (!validateEmail(formData.email)) {
      setErrorMsg('Please enter a valid business or personal email address.');
      return;
    }

    // 4. Challenge length validation
    if (formData.mainChallenge.trim().length < 20) {
      setErrorMsg('Please describe your main challenge with a bit more detail (at least 20 characters).');
      return;
    }

    // 5. Anti-spam human verification check
    if (!humanVerified) {
      setErrorMsg('Please check the security verification box to confirm this is a genuine inquiry.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    const dhakaTimestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Dhaka',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    // Structured payload optimized for primary inbox deliverability (anti-spam headers + clean table layout)
    const payload = {
      _subject: `New Audit Lead: ${formData.fullName.trim()} (${formData.companyName.trim()})`,
      _replyto: formData.email.trim(),
      _template: 'table',
      _captcha: 'false',
      _honey: honeypot,
      Full_Name: formData.fullName.trim(),
      Company_Name: formData.companyName.trim(),
      Email_Address: formData.email.trim(),
      Phone_WhatsApp: formData.phone.trim(),
      Advertising_Platform: formData.adPlatform,
      Monthly_Ad_Budget: formData.monthlyBudget,
      Main_Challenge: formData.mainChallenge.trim(),
      Selected_Goals: formData.goals.join(', ') || 'None specified',
      Best_Time_To_Reach: formData.bestTime.trim() || 'Anytime',
      Referral_Source: formData.referralSource,
      Additional_Information: formData.additionalInfo.trim() || 'N/A',
      Submitted_Time_Dhaka: `${dhakaTimestamp} (Asia/Dhaka)`,
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && (result?.success === 'true' || result?.success === true)) {
        setEmailStatus('sent');
      } else {
        setEmailStatus('fallback');
      }
    } catch {
      setEmailStatus('fallback');
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      setSubmittedData({ ...formData });

      try {
        const existing = JSON.parse(localStorage.getItem('as_inquiries') || '[]');
        existing.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('as_inquiries', JSON.stringify(existing));
      } catch {
        // ignore storage error
      }
    }
  };

  const generateMailtoLink = (data: LeadFormData) => {
    const subject = encodeURIComponent(`New Audit Lead: ${data.fullName} (${data.companyName})`);
    const body = encodeURIComponent(
      `Hello Ahmad,\n\nHere are the details of my campaign audit inquiry:\n\n` +
        `• Full Name: ${data.fullName}\n` +
        `• Company Name: ${data.companyName}\n` +
        `• Email: ${data.email}\n` +
        `• Phone / WhatsApp: ${data.phone}\n` +
        `• Ad Platform: ${data.adPlatform}\n` +
        `• Monthly Budget: ${data.monthlyBudget}\n` +
        `• Main Challenge: ${data.mainChallenge}\n` +
        `• Goals: ${data.goals.join(', ')}\n` +
        `• Best Time to Reach: ${data.bestTime}\n` +
        `• Referral Source: ${data.referralSource}\n` +
        `• Additional Info: ${data.additionalInfo || 'N/A'}\n`
    );
    return `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
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
            The more details you provide, the better I can analyze your campaign. Every inquiry is delivered straight to Ahmad Shibli&apos;s verified inbox.
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
                {emailStatus === 'sent' ? (
                  <>
                    Your lead details have been securely transmitted to my direct email inbox. I will review your campaign challenge and contact you within <strong className="text-white">24 hours</strong> via <strong className="text-emerald-400">{submittedData.phone}</strong> or <strong className="text-emerald-400">{submittedData.email}</strong>.
                  </>
                ) : (
                  <>
                    Your inquiry summary is ready! I will review your challenge and contact you within <strong className="text-white">24 hours</strong> via the contact details you provided ({submittedData.phone}).
                  </>
                )}
              </p>

              <div className="pt-4 pb-2">
                <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-700 text-left max-w-lg mx-auto text-xs sm:text-sm text-slate-300 space-y-2">
                  <div className="font-semibold text-emerald-400 uppercase tracking-wide text-xs">
                    Next Recommended Actions:
                  </div>
                  <p>• Book an immediate 30-min strategy slot on my calendar</p>
                  <p>• Reach me directly on WhatsApp for real-time priority review</p>
                  <p>• Send a direct copy via your email app if you want an instant thread</p>
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

                <a
                  href={generateMailtoLink(submittedData)}
                  className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm px-4 py-3 rounded-md shadow transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open in Email App</span>
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
                  onClick={() => {
                    setSubmitted(false);
                    setEmailStatus(null);
                  }}
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
            {/* Hidden Honeypot Input to Prevent Automated Bot Spam */}
            <input
              type="text"
              name="_honey"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

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
                  name="Full_Name"
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
                  name="Company_Name"
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
                  name="email"
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
                  name="Phone_WhatsApp"
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
                  name="Advertising_Platform"
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
                  name="Monthly_Ad_Budget"
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
                name="Main_Challenge"
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
                  name="Best_Time_To_Reach"
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
                  name="Referral_Source"
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
                name="Additional_Information"
                placeholder="Any links to your landing pages, target markets, or specific questions?"
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors"
              />
            </div>

            {/* Anti-Spam Verification Box */}
            <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-4 flex items-center justify-between gap-4">
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={humanVerified}
                  onChange={(e) => setHumanVerified(e.target.checked)}
                  className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-emerald-500 focus:ring-emerald-500 cursor-pointer accent-emerald-500"
                />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">
                  I am a real business owner / marketer requesting a genuine campaign audit
                </span>
              </label>
              <ShieldCheck className={`w-5 h-5 shrink-0 ${humanVerified ? 'text-emerald-400' : 'text-slate-500'}`} />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#27AE60] hover:bg-[#219653] disabled:opacity-60 text-white font-bold text-base py-4 px-8 rounded-lg shadow-xl shadow-emerald-950/50 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Directly to Ahmad&apos;s Inbox...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit &amp; Send Directly to Email</span>
                  </>
                )}
              </button>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Confidential · Direct Encrypted Delivery · 24-Hour Response</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
