'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { testimonialsList } from '@/data/portfolioData';
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal';

export default function TestimonialsWidget() {
  const headerRef = useScrollReveal<HTMLDivElement>('scroll-revealed');
  const cardsRef = useStaggerReveal<HTMLDivElement>();

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
        {/* Header Row */}
        <div
          ref={headerRef}
          className="reveal-fade-up"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '64px',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <div className="eyebrow-tag">
              <span style={{ color: 'var(--red-accent)' }}>•</span>
              <span>CLIENT ENDORSEMENTS</span>
            </div>

            <h2 className="editorial-heading" style={{ margin: 0 }}>
              WHAT MY <br />
              CLIENTS SAY
            </h2>
          </div>

          <div style={{ maxWidth: '380px' }}>
            <p
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '1px',
                lineHeight: '1.5',
                textTransform: 'uppercase',
                color: '#6e6e80',
                margin: 0,
              }}
            >
              CREATING THOUGHTFUL AND USER-FOCUSED MOBILE EXPERIENCES THAT HELP BRANDS SCALE, ACCELERATE TIME-TO-MARKET, AND DELIGHT USERS.
            </p>
          </div>
        </div>

        {/* Testimonials Grid with stagger */}
        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }}
          className="testimonials-grid"
        >
          {testimonialsList.map((test) => (
            <div
              key={test.id}
              className="editorial-card reveal-stagger-child"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '280px',
                padding: '36px 32px',
              }}
            >
              <div>
                {/* 5 Stars */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '20px' }}>
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} size={15} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <p
                  style={{
                    fontSize: '14.5px',
                    color: '#2a2a36',
                    lineHeight: '1.65',
                    margin: 0,
                  }}
                >
                  &ldquo;{test.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderTop: '1px solid var(--light-border)',
                  paddingTop: '20px',
                  marginTop: '24px',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    flexShrink: 0,
                  }}
                >
                  <Image src={test.avatar} alt={test.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '14px',
                      fontWeight: 800,
                      color: '#0e0e13',
                      display: 'block',
                      textTransform: 'uppercase',
                    }}
                  >
                    {test.name}
                  </span>
                  <span style={{ fontSize: '12px', color: '#777788', display: 'block' }}>
                    {test.role} • {test.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.testimonials-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
