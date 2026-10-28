import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseMe from './components/WhyChooseMe';
import GoogleAdsGuide from './components/GoogleAdsGuide';
import AnalyticsGuide from './components/AnalyticsGuide';
import AuditGuide from './components/AuditGuide';
import ServicesSection from './components/ServicesSection';
import ResultsSection from './components/ResultsSection';
import LeadForm from './components/LeadForm';
import CalendlySection from './components/CalendlySection';
import ConnectSection from './components/ConnectSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#27AE60] selection:text-white">
      {/* 1. Header Navigation */}
      <Header />

      {/* 2. Hero Section */}
      <main className="flex-1">
        <Hero />

        {/* 3. Why Choose Ahmad Shibli Section */}
        <WhyChooseMe />

        {/* 4. Understanding Google Ads (Complete Guide) */}
        <GoogleAdsGuide />

        {/* 5. Analytics & GA4 Explained */}
        <AnalyticsGuide />

        {/* 6. Google Ads Audit & Optimization Deep-Dive */}
        <AuditGuide />

        {/* 7. Complete Service Offerings & Pricing */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 8. Results & Social Proof Case Studies */}
        <ResultsSection />

        {/* 9. Interactive Problem Submission & Lead Capture Form */}
        <LeadForm initialService={selectedService} />

        {/* 10. Calendly Booking Section */}
        <CalendlySection />

        {/* 11. Connect With Me (Direct Messaging Channels) */}
        <ConnectSection />

        {/* 12. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* 13. Footer with Legal Policies */}
      <Footer />
    </div>
  );
}
