'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroWidget from '@/components/widgets/HeroWidget';
import BrandMarqueeWidget from '@/components/widgets/BrandMarqueeWidget';
import ImpactSectionWidget from '@/components/widgets/ImpactSectionWidget';
import ServicesWidget from '@/components/widgets/ServicesWidget';
import ProjectsWidget from '@/components/widgets/ProjectsWidget';
import ProcessWidget from '@/components/widgets/ProcessWidget';
import BentoResultsWidget from '@/components/widgets/BentoResultsWidget';
import WorkstationBannerWidget from '@/components/widgets/WorkstationBannerWidget';
import TestimonialsWidget from '@/components/widgets/TestimonialsWidget';
import PricingWidget from '@/components/widgets/PricingWidget';
import InsightsWidget from '@/components/widgets/InsightsWidget';
import ContactBannerWidget from '@/components/widgets/ContactBannerWidget';
import FAQWidget from '@/components/widgets/FAQWidget';
import AboutView from '@/components/views/AboutView';

export default function HomePage() {
  const [activeView, setActiveView] = useState<'home' | 'about'>('home');

  const handleNavigate = (view: string) => {
    if (view === 'about') {
      setActiveView('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveView('home');
      if (view === 'services') {
        setTimeout(() => {
          document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (view === 'projects') {
        setTimeout(() => {
          document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (view === 'contact') {
        setTimeout(() => {
          document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (view === 'articles') {
        setTimeout(() => {
          document.getElementById('insights-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Top Navbar with Video-Matching Animated Hamburger & Full-Screen Menu */}
      <Navbar activeView={activeView} onNavigate={handleNavigate} />

      {activeView === 'about' ? (
        /* Dedicated About Page View (Matches Video Frames 00:39 - 00:51) */
        <main>
          <AboutView />
          <FAQWidget />
          <ContactBannerWidget />
        </main>
      ) : (
        /* Complete Rich Landing Experience (Matches Video Frames 00:00 - 00:37) */
        <main>
          {/* 1. Hero with Warm Terracotta-Crimson Canvas, 4-Col Grid, Watermark & Floating Cards */}
          <HeroWidget />

          {/* 2. Trusted Brands / Tech Stack Infinite Continuous Marquee Ticker */}
          <BrandMarqueeWidget />

          {/* 3. Impact & Mobile Engineering Metrics with Star Icon & Photo Card */}
          <ImpactSectionWidget />

          {/* 4. Powerful Services with Interactive Accordion & Live Preview Image Switcher */}
          <ServicesWidget />

          {/* 5. Our Projects Masonry Showcase with Clean Quranic Images & High-Res Lightbox Modal */}
          <ProjectsWidget />

          {/* 6. Engineering Process That Works (Dark High-Contrast 4-Card Section) */}
          <ProcessWidget />

          {/* 7. Bento Grid: Focused on Engineering That Delivers Results */}
          <BentoResultsWidget />

          {/* 8. Cinematic Workstation Banner: Live Flutter IDE & Interactive Mobile Simulator */}
          <WorkstationBannerWidget />

          {/* 9. What My Clients Say: Testimonials Horizontal Carousel */}
          <TestimonialsWidget />

          {/* 10. Simple Plans for Every Need: Pricing Tabs (Monthly vs Project) & Black Cards */}
          <PricingWidget />

          {/* 11. Latest Tech & Architecture Insights with Article Preview Reader */}
          <InsightsWidget />

          {/* 12. Let's Create Together: Split Contact Banner with Interactive Form Card */}
          <ContactBannerWidget />

          {/* 13. Frequent Questions: Expandable FAQ Accordion */}
          <FAQWidget />
        </main>
      )}

      {/* Global Editorial Footer with Giant ARHAM Watermark & Newsletter Form */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
