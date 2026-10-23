'use client';

import React, { useState } from 'react';
import { faqList } from '@/data/portfolioData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function FAQWidget() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const leftRef = useScrollReveal<HTMLDivElement>('scroll-revealed');
  const rightRef = useScrollReveal<HTMLDivElement>('scroll-revealed');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        background: '#ffffff',
        borderBottom: '1px solid var(--light-border)',
        padding: '120px 32px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {/* Two Column Layout: Left Huge Title & Right Accordion (Matches Video 00:58) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '460px 1fr',
            gap: '64px',
            alignItems: 'start',
          }}
          className="faq-split-grid"
        >
          {/* Left Title */}
          <div ref={leftRef} className="reveal-slide-left">
            <div className="eyebrow-tag">
              <span style={{ color: 'var(--red-accent)' }}>•</span>
              <span>FAQ</span>
            </div>

            <h2 className="editorial-heading" style={{ margin: 0 }}>
              FREQUENT <br />
              QUESTIONS
            </h2>
          </div>

          {/* Right Accordion List */}
          <div ref={rightRef} className="reveal-slide-right" style={{ display: 'flex', flexDirection: 'column' }}>
            {faqList.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  style={{
                    borderBottom: '1px solid var(--light-border)',
                    padding: '24px 0',
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 'clamp(15px, 1.8vw, 19px)',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        color: isOpen ? 'var(--red-accent)' : '#0e0e13',
                        letterSpacing: '-0.2px',
                        transition: 'color 0.2s',
                        paddingRight: '16px',
                      }}
                    >
                      {item.question}
                    </span>

                    <span
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '24px',
                        fontWeight: 400,
                        color: '#666677',
                        lineHeight: 1,
                        transition: 'transform 0.2s',
                      }}
                    >
                      {isOpen ? '—' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        paddingTop: '16px',
                        fontSize: '14.5px',
                        color: 'var(--light-text-body)',
                        lineHeight: '1.65',
                        animation: 'fadeIn 0.25s ease',
                      }}
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.faq-split-grid) {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
