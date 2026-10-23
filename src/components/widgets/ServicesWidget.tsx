'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { servicesCatalog } from '@/data/portfolioData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ServicesWidgetProps {
  onSelectProject?: (projectId: string) => void;
}

export default function ServicesWidget({ onSelectProject }: ServicesWidgetProps) {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const headerRef = useScrollReveal<HTMLDivElement>('scroll-revealed');
  const leftColRef = useScrollReveal<HTMLDivElement>('scroll-revealed');
  const rightColRef = useScrollReveal<HTMLDivElement>('scroll-revealed');

  const activeService = servicesCatalog[activeServiceIndex];

  const handleServiceChange = (index: number) => {
    setActiveServiceIndex(index);
    setActiveImageIndex(0);
  };

  return (
    <section
      id="services-section"
      style={{
        background: '#ffffff',
        borderBottom: '1px solid var(--light-border)',
        padding: '120px 32px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {/* Section Header */}
        <div ref={headerRef} className="reveal-fade-up" style={{ marginBottom: '64px' }}>
          <div className="eyebrow-tag">
            <span style={{ color: 'var(--red-accent)' }}>•</span>
            <span>OUR SERVICES</span>
          </div>

          <h2 className="editorial-heading" style={{ margin: 0 }}>
            POWERFUL <br />
            <span className="muted-span">SERVICES</span> <br />
            FOR YOUR BRAND
          </h2>
        </div>

        {/* Interactive Master-Detail Services Layout (Matches Video 00:10 - 00:13) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '64px',
            alignItems: 'start',
          }}
          className="services-master-grid"
        >
          {/* Left Column: Interactive Service Accordion List */}
          <div ref={leftColRef} className="reveal-slide-left" style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {servicesCatalog.map((service, index) => {
              const isActive = index === activeServiceIndex;
              return (
                <div
                  key={service.id}
                  onClick={() => handleServiceChange(index)}
                  style={{
                    paddingBottom: '32px',
                    borderBottom: '1px solid var(--light-border)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {/* Top Row: Number & Title */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '20px',
                      marginBottom: '12px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '13px',
                        fontWeight: 800,
                        letterSpacing: '1px',
                        color: isActive ? 'var(--red-accent)' : '#9999a8',
                        transition: 'color 0.2s',
                      }}
                    >
                      {service.number}
                    </span>

                    <h3
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 'clamp(22px, 2.5vw, 32px)',
                        fontWeight: 900,
                        letterSpacing: '-0.02em',
                        textTransform: 'uppercase',
                        color: isActive ? 'var(--red-accent)' : '#0e0e13',
                        margin: 0,
                        transition: 'color 0.2s',
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Subtitle Headline */}
                  <p
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '13px',
                      fontWeight: 700,
                      letterSpacing: '0.8px',
                      textTransform: 'uppercase',
                      color: isActive ? '#22222d' : '#888899',
                      paddingLeft: '48px',
                      marginBottom: '14px',
                      lineHeight: '1.4',
                    }}
                  >
                    {service.headline}
                  </p>

                  {/* Detailed Description & Tags when Active */}
                  {isActive && (
                    <div style={{ paddingLeft: '48px', animation: 'fadeIn 0.3s ease' }}>
                      <p
                        style={{
                          fontSize: '14.5px',
                          color: 'var(--light-text-body)',
                          lineHeight: '1.6',
                          marginBottom: '20px',
                        }}
                      >
                        {service.description}
                      </p>

                      {/* Tech & Strategy Tags */}
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '8px',
                          marginBottom: '24px',
                        }}
                      >
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontSize: '12px',
                              fontWeight: 600,
                              padding: '5px 12px',
                              borderRadius: '4px',
                              background: '#f1f0ea',
                              border: '1px solid #e2e1db',
                              color: '#3e3e4a',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* View Project CTA Button (Matches Video 01:17 - 01:21) */}
                      <a
                        href="#projects-section"
                        className="btn-framer-primary"
                        style={{ display: 'inline-flex', padding: '10px 22px' }}
                      >
                        <span>VIEW PROJECTS</span>
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Image Preview */}
          <div
            ref={rightColRef}
            className="reveal-slide-right services-preview-panel"
            style={{
              position: 'sticky',
              top: '120px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4 / 3',
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#0e0e14',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.15)',
                border: '1px solid var(--light-border)',
              }}
            >
              <Image
                src={activeService.previewImages[activeImageIndex] || activeService.previewImages[0]}
                alt={activeService.title}
                fill
                style={{ objectFit: 'cover', transition: 'all 0.4s ease' }}
              />

              {/* Bottom Pagination Switcher Pill (01 / 02) (Matches Video 00:11) */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  background: 'rgba(12, 12, 16, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '6px',
                  padding: '4px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  zIndex: 2,
                }}
              >
                {activeService.previewImages.map((_, imgIdx) => (
                  <button
                    key={imgIdx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex(imgIdx);
                    }}
                    style={{
                      background: activeImageIndex === imgIdx ? 'var(--red-accent)' : 'transparent',
                      color: '#ffffff',
                      border: 'none',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '11px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    0{imgIdx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Caption */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 6px',
              }}
            >
              <span
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '12px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: '#444455',
                  letterSpacing: '0.5px',
                }}
              >
                {activeService.title}
              </span>
              <span style={{ fontSize: '12px', color: '#888899', fontWeight: 600 }}>
                Screen 0{activeImageIndex + 1} of 0{activeService.previewImages.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.services-master-grid) {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          :global(.services-preview-panel) {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
