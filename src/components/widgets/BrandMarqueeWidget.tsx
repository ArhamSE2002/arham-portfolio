'use client';

import React from 'react';
import { techBrandsMarquee } from '@/data/portfolioData';

export default function BrandMarqueeWidget() {
  // Duplicate for seamless infinite loop
  const marqueeItems = [...techBrandsMarquee, ...techBrandsMarquee, ...techBrandsMarquee];

  return (
    <section
      style={{
        background: '#ffffff',
        borderBottom: '1px solid var(--light-border)',
        padding: '28px 0',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
        }}
        className="marquee-wrapper-row"
      >
        {/* Left Label */}
        <div
          style={{
            whiteSpace: 'nowrap',
            flexShrink: 0,
            fontFamily: 'Outfit, sans-serif',
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#8e8e9c',
            borderRight: '1px solid var(--light-border)',
            paddingRight: '32px',
          }}
        >
          TRUSTED TECH STACK
        </div>

        {/* Continuous Infinite Ticker */}
        <div className="marquee-container" style={{ flex: 1 }}>
          <div className="marquee-track">
            {marqueeItems.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  whiteSpace: 'nowrap',
                  cursor: 'default',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '17px',
                    fontWeight: 900,
                    letterSpacing: '-0.3px',
                    textTransform: 'uppercase',
                    color: '#1a1a24',
                  }}
                >
                  {brand.name}
                </span>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    color: 'var(--red-accent)',
                    background: 'rgba(234, 56, 32, 0.08)',
                    padding: '2px 7px',
                    borderRadius: '4px',
                    border: '1px solid rgba(234, 56, 32, 0.2)',
                    textTransform: 'uppercase',
                  }}
                >
                  {brand.tag}
                </span>
                <span style={{ color: '#d2d2db', fontSize: '14px', marginLeft: '12px' }}>
                  /
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          :global(.marquee-wrapper-row) {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
