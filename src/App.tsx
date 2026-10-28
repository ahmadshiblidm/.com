import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import WhyChooseMe from './components/WhyChooseMe.tsx';
import GoogleAdsGuide from './components/GoogleAdsGuide.tsx';
import AnalyticsGuide from './components/AnalyticsGuide.tsx';
import AuditGuide from './components/AuditGuide.tsx';
import ServicesSection from './components/ServicesSection.tsx';
import ResultsSection from './components/ResultsSection.tsx';
import CalendlySection from './components/CalendlySection.tsx';
import LeadForm from './components/LeadForm.tsx';
import ConnectSection from './components/ConnectSection.tsx';
import FaqSection from './components/FaqSection.tsx';
import Footer from './components/Footer.tsx';
import FloatingContactWidget from './components/FloatingContactWidget.tsx';
import LegalModals from './components/LegalModals.tsx';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white relative">
      {/* Top Navigation */}
      <Header />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero with Headshot & Trust Stats */}
        <Hero />

        {/* 2. Core Value Proposition & Comparison */}
        <WhyChooseMe />

        {/* 3. Deep-Dive Strategy Guides */}
        <GoogleAdsGuide />
        <AnalyticsGuide />
        <AuditGuide />

        {/* 4. Specialized Services */}
        <ServicesSection />

        {/* 5. Proven Results & Case Studies */}
        <ResultsSection />

        {/* 6. Live Consultation Scheduling (Filled Interactive Widget) */}
        <CalendlySection />

        {/* 7. Comprehensive Audit Request Form */}
        <LeadForm />

        {/* 8. Direct Contact & Social Links (Icon-Only Handles) */}
        <ConnectSection />

        {/* 9. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Persistent Floating Contact Button (Bottom-Right WhatsApp & Telegram Direct) */}
      <FloatingContactWidget />

      {/* Privacy Policy & Terms Modals */}
      <LegalModals
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
