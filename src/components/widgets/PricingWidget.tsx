'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Zap, Check, CheckCircle2 } from 'lucide-react';
import { pricingPlans } from '@/data/portfolioData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function PricingWidget() {
  const [activeTab, setActiveTab] = useState<'project' | 'monthly'>('project');
  const headerRef = useScrollReveal<HTMLDivElement>('scroll-revealed');

  const filteredPlans = pricingPlans.filter((p) => p.type === activeTab);

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
        {/* Header with Switcher Tabs */}
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
              <span>PRICING & ENGAGEMENT</span>
            </div>

            <h2 className="editorial-heading" style={{ margin: 0 }}>
              SIMPLE PLANS <br />
              <span className="muted-span">FOR EVERY NEED</span>
            </h2>
          </div>

          {/* Tab Switcher: MONTHLY / PROJECT BASED (Matches Video 00:28 - 00:29) */}
          <div
            style={{
              background: '#f1f0ea',
              padding: '6px',
              borderRadius: '6px',
              display: 'flex',
              gap: '4px',
              border: '1px solid var(--light-border)',
            }}
          >
            <button
              onClick={() => setActiveTab('monthly')}
              style={{
                background: activeTab === 'monthly' ? '#0f0f14' : 'transparent',
                color: activeTab === 'monthly' ? '#ffffff' : '#666675',
                border: 'none',
                padding: '10px 22px',
                borderRadius: '4px',
                fontFamily: 'Outfit, sans-serif',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              MONTHLY
            </button>

            <button
              onClick={() => setActiveTab('project')}
              style={{
                background: activeTab === 'project' ? '#0f0f14' : 'transparent',
                color: activeTab === 'project' ? '#ffffff' : '#666675',
                border: 'none',
                padding: '10px 22px',
                borderRadius: '4px',
                fontFamily: 'Outfit, sans-serif',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              PROJECT BASED
            </button>
          </div>
        </div>

        {/* Dark Pricing Cards (Matches Video 00:30 - 00:31) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              style={{
                background: '#0d0d12',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.15)',
                display: 'grid',
                gridTemplateColumns: '320px 1fr',
              }}
              className="pricing-card-split"
            >
              {/* Left Column: Metadata & Deliverable Specs (Matches Video 00:30) */}
              <div
                style={{
                  padding: '40px 32px',
                  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                  background: '#121218',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {plan.badge && (
                    <span
                      style={{
                        display: 'inline-block',
                        background: 'rgba(255, 255, 255, 0.1)',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontSize: '10.5px',
                        fontWeight: 800,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        color: 'rgba(255, 255, 255, 0.8)',
                        marginBottom: '16px',
                      }}
                    >
                      {plan.badge}
                    </span>
                  )}

                  <h3
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '24px',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      color: '#ffffff',
                      marginBottom: '12px',
                      lineHeight: '1.2',
                    }}
                  >
                    {plan.title}
                  </h3>

                  <p style={{ fontSize: '13px', color: '#9d9db0', lineHeight: '1.5', margin: 0 }}>
                    {plan.description}
                  </p>
                </div>

                {/* Specs List */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingTop: '24px',
                    marginTop: '24px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                    <span style={{ color: '#888899' }}>DELIVERY TIME</span>
                    <strong style={{ color: '#ffffff' }}>{plan.deliveryTime}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                    <span style={{ color: '#888899' }}>REVISIONS</span>
                    <strong style={{ color: '#ffffff' }}>{plan.revisions}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                    <span style={{ color: '#888899' }}>TECH / FORMAT</span>
                    <strong style={{ color: 'var(--red-primary)' }}>{plan.format}</strong>
                  </div>
                </div>
              </div>

              {/* Right Column: Price & Features Checklist (Matches Video 00:30) */}
              <div
                style={{
                  padding: '40px 48px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '32px',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.1fr 1fr',
                    gap: '36px',
                    alignItems: 'start',
                  }}
                  className="pricing-inner-grid"
                >
                  {/* Price */}
                  <div>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 800,
                        color: 'rgba(255, 255, 255, 0.5)',
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '8px',
                      }}
                    >
                      {activeTab === 'monthly' ? 'MONTHLY RETAINER' : 'ONE-TIME PROJECT'}
                    </span>

                    <div
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 'clamp(54px, 5.5vw, 76px)',
                        fontWeight: 900,
                        lineHeight: 1,
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '6px',
                      }}
                    >
                      <span>{plan.price}</span>
                      <span style={{ fontSize: '18px', color: '#888899', fontWeight: 600 }}>
                        {plan.duration}
                      </span>
                    </div>

                    {/* Guarantee note */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        marginTop: '24px',
                        padding: '14px 16px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <Zap size={18} style={{ color: 'var(--red-accent)', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#ffffff', display: 'block' }}>
                          SATISFACTION GUARANTEE
                        </span>
                        <span style={{ fontSize: '12px', color: '#9d9db0', lineHeight: '1.4' }}>
                          {plan.guarantee}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {plan.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '13.5px',
                          color: '#c2c2d4',
                          lineHeight: '1.4',
                        }}
                      >
                        <span style={{ color: 'var(--red-accent)', fontSize: '16px', lineHeight: 1 }}>
                          ›
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: GET STARTED button */}
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <a
                    href="#contact-section"
                    style={{
                      background: '#ffffff',
                      color: '#0e0e13',
                      padding: '14px 36px',
                      borderRadius: '4px',
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '13px',
                      fontWeight: 800,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--red-accent)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.color = '#0e0e13';
                    }}
                  >
                    <span>GET STARTED</span>
                    <span
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '3px',
                        background: 'var(--red-accent)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <ArrowUpRight size={14} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.pricing-card-split) {
            grid-template-columns: 1fr !important;
          }
          :global(.pricing-inner-grid) {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
