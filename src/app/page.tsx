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
      const scrollTo = (id: string) =>
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
      if (view === 'services') scrollTo('services-section');
      else if (view === 'projects') scrollTo('projects-section');
      else if (view === 'contact') scrollTo('contact-section');
      else if (view === 'articles') scrollTo('insights-section');
      else if (view === 'pricing') scrollTo('pricing-section');
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Navbar activeView={activeView} onNavigate={handleNavigate} />

      {activeView === 'about' ? (
        <main>
          <AboutView />
          <SectionReveal><FAQWidget /></SectionReveal>
          <SectionReveal><ContactBannerWidget /></SectionReveal>
        </main>
      ) : (
        /* Conversion Flow: Hero → Brand Trust → About → Services → Workstation → Projects → Process → Results → Testimonials → Pricing → Insights → Contact → FAQ */
        <main>
          {/* 1. Hero — strong first impression (minimal changes) */}
          <HeroWidget />

          {/* 2. Marquee — instant tech credibility signal */}
          <SectionReveal><BrandMarqueeWidget /></SectionReveal>

          {/* 3. About / Impact — who I am + social proof numbers */}
          <SectionReveal><ImpactSectionWidget /></SectionReveal>

          {/* 4. Services — what I offer ("can you help me?") */}
          <SectionReveal><ServicesWidget /></SectionReveal>

          {/* 5. Live Flutter Workstation — proof of craft */}
          <SectionReveal><WorkstationBannerWidget /></SectionReveal>

          {/* 6. Projects — portfolio proof */}
          <SectionReveal><ProjectsWidget /></SectionReveal>

          {/* 7. Engineering Process — how I work */}
          <SectionReveal><ProcessWidget /></SectionReveal>

          {/* 8. Results / Bento Grid — tangible outcomes */}
          <SectionReveal><BentoResultsWidget /></SectionReveal>

          {/* 9. Testimonials — social proof before pricing */}
          <SectionReveal><TestimonialsWidget /></SectionReveal>

          {/* 10. Pricing — clear investment options */}
          <div id="pricing-section">
            <SectionReveal><PricingWidget /></SectionReveal>
          </div>

          {/* 11. Insights — thought leadership */}
          <SectionReveal><InsightsWidget /></SectionReveal>

          {/* 12. Contact — final CTA */}
          <SectionReveal><ContactBannerWidget /></SectionReveal>

          {/* 13. FAQ — handle objections */}
          <SectionReveal><FAQWidget /></SectionReveal>
        </main>
      )}

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

/* ─── Scroll Reveal Wrapper ────────────────────────────────────────────────
   Lightweight IntersectionObserver wrapper. Adds 'scroll-revealed' class
   when the section enters the viewport triggering the CSS fade+slide-up.
   ──────────────────────────────────────────────────────────────────────── */
function SectionReveal({ children, id }: { children: React.ReactNode; id?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('scroll-revealed');
          observer.unobserve(el);
        }
      },
      { threshold: 0.07, rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} id={id} className="section-scroll-wrapper">
      {children}
    </div>
  );
}
