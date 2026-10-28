import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Calendar } from 'lucide-react';
import { getAssetUrl } from '../utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Me', href: '#why-me' },
    { label: 'Google Ads', href: '#google-ads-guide' },
    { label: 'GA4 Analytics', href: '#analytics-guide' },
    { label: 'Audit Guide', href: '#audit-guide' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg py-3'
          : 'bg-slate-900/80 backdrop-blur-sm border-b border-slate-800/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark & Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
          >
            <img
              src={getAssetUrl('assets/aistudio/image_b2f12f86.png')}
              alt="Ahmad Shibli Logo"
              className="w-10 h-10 rounded-full border border-sky-400/30 object-contain shadow-sm group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-1.5 whitespace-nowrap">
                Ahmad Shibli
                <span className="text-xs font-normal text-slate-400 hidden sm:inline">
                  | Digital Marketing Audits
                </span>
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-emerald-400 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#book-now"
              className="inline-flex items-center gap-2 bg-[#27AE60] hover:bg-[#219653] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-md shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-md hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 mt-2 flex flex-col gap-2">
              <a
                href="#book-now"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#27AE60] text-white font-semibold py-2.5 rounded-md text-sm shadow hover:bg-[#219653]"
              >
                <Calendar className="w-4 h-4" />
                Book Free Consultation
              </a>
              <a
                href="#challenge-form"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-slate-800 text-slate-200 font-medium py-2.5 rounded-md text-sm hover:bg-slate-700"
              >
                Submit Audit Challenge
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
