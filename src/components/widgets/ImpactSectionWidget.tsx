'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';
import { statsMetrics } from '@/data/portfolioData';

export default function ImpactSectionWidget() {
  return (
    <section
      id="about-section"
      style={{
        background: 'var(--light-bg)',
        borderBottom: '1px solid var(--light-border)',
        padding: '110px 32px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {/* Top Grid: Left Title & Right Intro Bio */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '64px',
            alignItems: 'flex-start',
            marginBottom: '72px',
          }}
          className="impact-top-grid"
        >
          {/* Left Title */}
          <div>
            <div className="eyebrow-tag">
              <span style={{ color: 'var(--red-accent)' }}>•</span>
              <span>BETTER DIGITAL EXPERIENCES</span>
            </div>

            <h2 className="editorial-heading" style={{ margin: 0 }}>
              MY IMPACT <br />
              <span className="muted-span">THROUGH MOBILE</span> <br />
              ENGINEERING
            </h2>
          </div>

          {/* Right Column: Decorative Star & Short Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Asterisk / Star icon (matches video 00:09) */}
            <div
              style={{
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1a1a24',
              }}
            >
              <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L13.8 8.8L22.6 7L15.6 12.8L20.8 20L12.4 16.2L6 22.8L8.8 14.6L0 13.8L8.2 9.4L6 1L12.6 6.8L12 0Z" />
              </svg>
            </div>

            <p
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '15px',
                fontWeight: 700,
                letterSpacing: '1px',
                lineHeight: '1.6',
                textTransform: 'uppercase',
                color: '#343442',
                margin: 0,
              }}
            >
              HI, I&apos;M M. ARHAM, A FLUTTER & FULL-STACK MOBILE ENGINEER PASSIONATE ABOUT ARCHITECTING INTUITIVE, SCALABLE, AND HIGH-PERFORMANCE DIGITAL PRODUCTS.
            </p>

            <p style={{ fontSize: '15px', color: 'var(--light-text-body)', lineHeight: '1.65', margin: 0 }}>
              With hands-on production experience in reactive state management (GetX, BLoC), cloud architectures (Supabase, Firebase), on-device OCR, and full-stack web companion portals, I build software that runs fluidly at 60 FPS and delivers measurable business value.
            </p>
          </div>
        </div>

        {/* Staggered Visual & Metric Grid (Matches Video 00:09 - 00:10) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
          }}
          className="impact-metrics-grid"
        >
          {/* Left Side: Photo Card (Artistic Graphic from Monefii) */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 3',
              borderRadius: '8px',
              overflow: 'hidden',
              background: '#0d0d12',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.12)',
              border: '1px solid var(--light-border)',
            }}
          >
            <Image
              src="/impact-editorial.jpg"
              alt="Mobile Engineering Architectural Core"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
            {/* Corner Crosshairs */}
            <span style={{ position: 'absolute', top: '10px', left: '10px', color: '#ffffff', fontSize: '14px', fontFamily: 'monospace' }}>+</span>
            <span style={{ position: 'absolute', top: '10px', right: '10px', color: '#ffffff', fontSize: '14px', fontFamily: 'monospace' }}>+</span>
            <span style={{ position: 'absolute', bottom: '10px', left: '10px', color: '#ffffff', fontSize: '14px', fontFamily: 'monospace' }}>+</span>
            <span style={{ position: 'absolute', bottom: '10px', right: '10px', color: '#ffffff', fontSize: '14px', fontFamily: 'monospace' }}>+</span>
          </div>

          {/* Right Side: Big Numeric Stats with Descriptions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {statsMetrics.map((stat, idx) => (
              <div
                key={stat.id}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '24px',
                  paddingBottom: '24px',
                  borderBottom: '1px solid var(--light-border)',
                }}
              >
                {/* Big Number */}
                <div
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 'clamp(54px, 5.5vw, 76px)',
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    color: '#0e0e13',
                  }}
                >
                  {stat.value}
                </div>

                {/* Subtitle & Info */}
                <div style={{ flex: 1, maxWidth: '280px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '13px',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: '#0e0e13',
                      marginBottom: '4px',
                    }}
                  >
                    <span style={{ color: 'var(--red-accent)' }}>•</span>
                    <span>{stat.label}</span>
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--light-text-body)', lineHeight: '1.4' }}>
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.impact-top-grid) {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          :global(.impact-metrics-grid) {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
