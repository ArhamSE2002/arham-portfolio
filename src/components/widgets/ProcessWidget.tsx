'use client';

import React from 'react';
import { processSteps } from '@/data/portfolioData';

export default function ProcessWidget() {
  return (
    <section
      style={{
        background: 'var(--dark-bg)',
        color: '#ffffff',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '120px 32px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="eyebrow-tag dark" style={{ margin: '0 auto 20px' }}>
            <span style={{ color: 'var(--red-accent)' }}>•</span>
            <span>MY ENGINEERING PROCESS</span>
          </div>

          <h2 className="editorial-heading dark" style={{ margin: 0 }}>
            ENGINEERING PROCESS <br />
            THAT WORKS
          </h2>
        </div>

        {/* 4 Dark Cards Grid (Matches Video 00:19 - 00:20) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
          className="process-cards-grid"
        >
          {processSteps.map((step) => (
            <div
              key={step.step}
              style={{
                background: '#121218',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '340px',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'var(--red-accent)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(234, 56, 32, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Top Plus Icon Badge */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--red-accent)',
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '18px',
                    fontWeight: 900,
                    marginBottom: '32px',
                  }}
                >
                  <span style={{ fontSize: '22px', lineHeight: 1 }}>+</span>
                  <span style={{ letterSpacing: '1px' }}>{step.title}</span>
                </div>

                <p
                  style={{
                    fontSize: '14px',
                    color: '#9e9eb0',
                    lineHeight: '1.65',
                    marginBottom: '24px',
                  }}
                >
                  {step.description}
                </p>
              </div>

              {/* Step Sub-points */}
              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                {step.details.map((detail, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '11.5px',
                      color: 'rgba(255, 255, 255, 0.5)',
                      fontFamily: 'monospace',
                    }}
                  >
                    • {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          :global(.process-cards-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          :global(.process-cards-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
