import React, { useState } from 'react';
import { ArrowUp, MapPin, Mail, MessageSquare } from 'lucide-react';
import LegalModals from './LegalModals';
import { getAssetUrl } from '../utils';

export default function Footer() {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={getAssetUrl('assets/aistudio/image_b2f12f86.png')}
                alt="Ahmad Shibli Logo"
                className="w-10 h-10 rounded-full border border-sky-400/40 object-contain shadow"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-bold text-white tracking-tight">
                Ahmad Shibli
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Google Ads &amp; Meta Ads Audit &amp; Optimization Specialist. Helping businesses turn ad spend into revenue through data-driven audits and optimization.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Based in Bangladesh (Asia/Dhaka Timezone) · Serving Clients Worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Home
              </a>
              <a href="#services" className="hover:text-emerald-400 transition-colors">
                Services
              </a>
              <a href="#why-me" className="hover:text-emerald-400 transition-colors">
                Why Choose Me
              </a>
              <a href="#google-ads-guide" className="hover:text-emerald-400 transition-colors">
                Google Ads
              </a>
              <a href="#analytics-guide" className="hover:text-emerald-400 transition-colors">
                GA4 Analytics
              </a>
              <a href="#audit-guide" className="hover:text-emerald-400 transition-colors">
                Audit Guide
              </a>
              <a href="#case-studies" className="hover:text-emerald-400 transition-colors">
                Case Studies
              </a>
              <a href="#faq" className="hover:text-emerald-400 transition-colors">
                FAQ
              </a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">
                Contact
              </a>
              <a href="#book-now" className="hover:text-emerald-400 transition-colors">
                Book Consultation
              </a>
            </div>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Direct Channels
            </h4>
            <p className="text-xs text-slate-400">
              Connect directly via verified messaging and social profiles:
            </p>

            {/* Social Links: Icons ONLY, strictly no visible handles/numbers */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/8801873818927"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Profile"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#25D366] hover:bg-[#25D366]/10 flex items-center justify-center transition-all group"
              >
                <svg className="w-5 h-5 fill-current text-slate-400 group-hover:text-[#25D366] transition-colors" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.669-.699c.969.54 1.771.82 2.791.82 3.182 0 5.768-2.587 5.768-5.766.001-3.181-2.585-5.767-5.768-5.767zm7.653 5.766c.002 4.237-3.447 7.686-7.684 7.686-1.304 0-2.535-.333-3.619-.918l-4.381 1.149 1.168-4.272c-.672-1.136-1.03-2.446-1.031-3.645-.002-4.237 3.447-7.686 7.684-7.686 4.237 0 7.683 3.449 7.683 7.686z" />
                </svg>
              </a>

              <a
                href="https://t.me/ahmadshibli"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram Channel"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#0088cc] hover:bg-[#0088cc]/10 flex items-center justify-center transition-all group"
              >
                <svg className="w-5 h-5 fill-current text-slate-400 group-hover:text-[#0088cc] transition-colors" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
                </svg>
              </a>

              <a
                href="https://facebook.com/ahmadshiblidm"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Page"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#1877F2] hover:bg-[#1877F2]/10 flex items-center justify-center transition-all group"
              >
                <svg className="w-5 h-5 fill-current text-slate-400 group-hover:text-[#1877F2] transition-colors" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/ahmadshiblibd"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 flex items-center justify-center transition-all group"
              >
                <svg className="w-5 h-5 fill-current text-slate-400 group-hover:text-[#0A66C2] transition-colors" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white pt-2 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to top</span>
            </button>
          </div>
        </div>

        {/* Row 4: Copyright, Terms & Privacy */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 Ahmad Shibli | Digital Marketing Audits &amp; Optimization. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-300 transition-colors underline"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-slate-300 transition-colors underline"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      <LegalModals type={legalModal} onClose={() => setLegalModal(null)} />
    </footer>
  );
}
