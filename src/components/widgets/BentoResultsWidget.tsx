'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Zap, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function BentoResultsWidget() {
  const headerRef = useScrollReveal<HTMLDivElement>('scroll-revealed');
  const bentoRef = useScrollReveal<HTMLDivElement>('scroll-revealed');

  return (
    <section
      style={{
        background: 'var(--light-bg)',
        borderBottom: '1px solid var(--light-border)',
        padding: '120px 32px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {/* Header */}
        <div ref={headerRef} className="reveal-fade-up" style={{ marginBottom: '64px' }}>
          <div className="eyebrow-tag">
            <span style={{ color: 'var(--red-accent)' }}>•</span>
            <span>WHY CHOOSE ME</span>
          </div>

          <h2 className="editorial-heading" style={{ margin: 0 }}>
            FOCUSED ON <br />
            <span className="muted-span">ENGINEERING THAT</span> <br />
            DELIVERS RESULTS
          </h2>
        </div>

        {/* Bento Grid Layout (Matches Video 00:21 - 00:22) */}
        <div
          ref={bentoRef}
          className="reveal-scale-up bento-grid-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
          }}
        >
          {/* Card 1: Experience Years (Col 1-4) */}
          <div
            className="editorial-card"
            style={{
              gridColumn: 'span 4',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#7b7b8a',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                <span style={{ color: 'var(--red-accent)' }}>•</span>
                <span>PRODUCTION EXPERIENCE</span>
              </div>

              <div
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 'clamp(52px, 5vw, 68px)',
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  color: '#0e0e13',
                  marginBottom: '8px',
                }}
              >
                3+
              </div>
            </div>

            <p style={{ fontSize: '13.5px', color: 'var(--light-text-body)', margin: 0, lineHeight: '1.5' }}>
              Creating modern, scalable mobile and full-stack solutions with an unwavering focus on clean architecture and 60 FPS performance.
            </p>
          </div>

          {/* Card 2: Production Apps / Happy Clients (Col 5-8) */}
          <div
            className="editorial-card"
            style={{
              gridColumn: 'span 4',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#7b7b8a',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                <span style={{ color: 'var(--red-accent)' }}>•</span>
                <span>CLIENT COLLABORATION</span>
              </div>

              <div
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 'clamp(32px, 3.2vw, 42px)',
                  fontWeight: 900,
                  lineHeight: 1.1,
                  color: '#0e0e13',
                  marginBottom: '12px',
                }}
              >
                100% Shipped Successfully
              </div>
            </div>

            {/* Avatars Strip */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex' }}>
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80',
                ].map((src, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'relative',
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      marginLeft: i > 0 ? '-10px' : 0,
                      border: '2px solid #ffffff',
                    }}
                  >
                    <Image src={src} alt="Client" fill style={{ objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#333342' }}>
                Multi-Store Releases
              </span>
            </div>
          </div>

          {/* Card 3: Visual Artwork with Warm Studio Lighting (Col 9-12) */}
          <div
            style={{
              gridColumn: 'span 4',
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              minHeight: '260px',
              background: '#121218',
              boxShadow: 'var(--shadow-card)',
              border: '1px solid var(--light-border)',
            }}
          >
            <Image
              src="/avatar.jpg"
              alt="M. Arham"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '20px',
              }}
            >
              <span
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '14px',
                  fontWeight: 800,
                  color: '#ffffff',
                  textTransform: 'uppercase',
                }}
              >
                M. Arham
              </span>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
                Flutter Specialist & BS SE
              </span>
            </div>
          </div>

          {/* Card 4: Client Satisfaction % (Col 1-3) */}
          <div
            className="editorial-card"
            style={{
              gridColumn: 'span 3',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '240px',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#7b7b8a',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                <span style={{ color: 'var(--red-accent)' }}>•</span>
                <span>CLIENT SATISFACTION</span>
              </div>

              <div
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 'clamp(48px, 4.5vw, 64px)',
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  color: '#0e0e13',
                  marginBottom: '8px',
                }}
              >
                99%
              </div>
            </div>

            <p style={{ fontSize: '13px', color: 'var(--light-text-body)', margin: 0, lineHeight: '1.45' }}>
              Focused on delivering results that meet user delight and mission-critical business metrics.
            </p>
          </div>

          {/* Card 5: Star Rating & Highlight Testimonial (Col 4-8) */}
          <div
            className="editorial-card"
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '240px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '14px' }}>
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={15} fill="#f59e0b" color="#f59e0b" />
                ))}
                <span style={{ fontSize: '12px', fontWeight: 800, marginLeft: '6px', color: '#0e0e13' }}>
                  5.0/5
                </span>
              </div>

              <p
                style={{
                  fontSize: '14px',
                  fontStyle: 'italic',
                  color: '#333342',
                  lineHeight: '1.6',
                  margin: 0,
                }}
              >
                &ldquo;Arham delivered an outstanding mobile architecture that perfectly matched our vision. The attention to detail and user experience exceeded all expectations.&rdquo;
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px' }}>
              <div
                style={{
                  position: 'relative',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop&q=80"
                  alt="Olivia Davis"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 800, color: '#0e0e13', display: 'block' }}>
                  Olivia Davis
                </span>
                <span style={{ fontSize: '11px', color: '#777788' }}>Product Lead</span>
              </div>
            </div>
          </div>

          {/* Card 6: Fast & Reliable (Col 9-12) */}
          <div
            className="editorial-card"
            style={{
              gridColumn: 'span 4',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '240px',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--red-accent)',
                  marginBottom: '16px',
                }}
              >
                <Zap size={18} fill="var(--red-accent)" />
                <span
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '14px',
                    fontWeight: 900,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    color: '#0e0e13',
                  }}
                >
                  FAST & RELIABLE
                </span>
              </div>

              <p style={{ fontSize: '13.5px', color: 'var(--light-text-body)', lineHeight: '1.6', margin: 0 }}>
                I maintain an efficient agile workflow that ensures smooth collaboration, proactive communication, and on-time sprint milestones.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: 'var(--red-accent)' }}>
              <CheckCircle2 size={15} />
              <span>Zero Technical Debt Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.bento-grid-container > div) {
            grid-column: span 6 !important;
          }
        }
        @media (max-width: 600px) {
          :global(.bento-grid-container > div) {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
