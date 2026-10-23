'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, MessageSquare, Sparkles, X, ChevronRight } from 'lucide-react';
import { contactDetails, bioSummary } from '@/data/portfolioData';

export default function HeroWidget() {
  const [chatWidgetOpen, setChatWidgetOpen] = useState(true);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'var(--hero-canvas)',
        color: '#ffffff',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '90px',
      }}
    >
      {/* 4-Column Subtle Editorial Grid Lines with Crosshair '+' Markers (Matches Video 00:00 - 00:02) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          zIndex: 1,
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              borderRight: i < 3 ? '1px solid var(--hero-grid)' : 'none',
              position: 'relative',
              height: '100%',
            }}
          >
            {/* Crosshair markers at 25%, 50%, 75% height */}
            <span
              style={{
                position: 'absolute',
                top: '25%',
                right: '-7px',
                color: 'rgba(255, 255, 255, 0.4)',
                fontSize: '13px',
                lineHeight: 1,
                fontFamily: 'monospace',
              }}
            >
              +
            </span>
            <span
              style={{
                position: 'absolute',
                top: '55%',
                right: '-7px',
                color: 'rgba(255, 255, 255, 0.4)',
                fontSize: '13px',
                lineHeight: 1,
                fontFamily: 'monospace',
              }}
            >
              +
            </span>
            <span
              style={{
                position: 'absolute',
                top: '80%',
                right: '-7px',
                color: 'rgba(255, 255, 255, 0.4)',
                fontSize: '13px',
                lineHeight: 1,
                fontFamily: 'monospace',
              }}
            >
              +
            </span>
          </div>
        ))}
      </div>

      {/* Massive Watermark Typography in Background: 'ARHAM' (Matches Video 00:01 - 00:03) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '32%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(90px, 20vw, 290px)',
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          textTransform: 'uppercase',
          color: 'rgba(255, 255, 255, 0.08)',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        ARHAM
      </div>

      {/* Central Portrait of Creator (Matches Video 00:01 - 00:03) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(320px, 45vw, 650px)',
          height: 'clamp(420px, 68vh, 760px)',
          zIndex: 3,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            maskImage: 'linear-gradient(to top, transparent 0%, black 18%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 18%, black 100%)',
          }}
        >
          <Image
            src="/avatar.jpg"
            alt="M. Arham - Expert Flutter Developer and Mobile Architect"
            fill
            priority
            style={{
              objectFit: 'contain',
              objectPosition: 'bottom center',
              filter: 'contrast(1.05) drop-shadow(0 20px 40px rgba(0, 0, 0, 0.45))',
            }}
          />
        </div>
      </div>

      {/* Foreground Content Layout */}
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          width: '100%',
          padding: '40px 32px 32px',
          position: 'relative',
          zIndex: 4,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Top Bar Row: Left Tagline & Right Floating Featured Card */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '24px',
          }}
        >
          {/* Left Tagline Pill & Bio Note */}
          <div style={{ maxWidth: '380px' }}>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(0, 0, 0, 0.22)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '10px 18px',
                borderRadius: '6px',
                marginBottom: '16px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  lineHeight: '1.45',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.95)',
                  margin: 0,
                }}
              >
                I ARCHITECT HIGH-PERFORMANCE CROSS-PLATFORM MOBILE EXPERIENCES THAT ARE FAST, ROBUST AND IMPACTFUL
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 10px #22c55e',
                }}
              />
              <span>Available for Senior Mobile Roles & Sprints</span>
            </div>
          </div>

          {/* Right Floating Project Card (Matches Video 00:01 - 00:03) */}
          <a
            href="#projects-section"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
          >
            <div
              style={{
                background: '#ffffff',
                color: '#0f0f13',
                padding: '12px',
                borderRadius: '8px',
                boxShadow: '0 16px 36px rgba(0, 0, 0, 0.35)',
                width: '185px',
                border: '1px solid rgba(255, 255, 255, 0.6)',
              }}
            >
              {/* Thumbnail */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '140px',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  background: '#14141a',
                  marginBottom: '10px',
                }}
              >
                <Image
                  src="/project_images/monefii (ai expense tracker) images/Frame 176.png"
                  alt="Monefii AI Expense Tracker"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Meta */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '2px 4px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: 'var(--red-accent)',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '11px',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Monefii
                  </span>
                </div>
                <span style={{ fontSize: '10.5px', color: '#686877', fontWeight: 600 }}>
                  /Fintech AI
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Bottom Bar Row: Left Huge Title & Right Interactive Chat Card */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '24px',
            marginTop: 'auto',
            paddingTop: '60px',
          }}
        >
          {/* Bottom Left Title: '©2026 MICHAEL' in video -> '©2026 ARHAM' */}
          <div>
            <span
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '2px',
                color: 'rgba(255, 255, 255, 0.8)',
                display: 'block',
                marginBottom: '4px',
              }}
            >
              ©2026
            </span>
            <h1
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(54px, 11vw, 150px)',
                fontWeight: 900,
                lineHeight: 0.85,
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                color: '#ffffff',
                margin: 0,
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              }}
            >
              Arham
            </h1>
          </div>

          {/* Bottom Right Floating Chat / Status Widget (Matches Video 00:01 - 00:03) */}
          {chatWidgetOpen && (
            <div
              style={{
                background: '#111116',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '12px',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                boxShadow: '0 18px 40px rgba(0, 0, 0, 0.5)',
                maxWidth: '280px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid var(--red-accent)',
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/avatar.jpg"
                  alt="M. Arham"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div style={{ flex: 1 }}>
                <span
                  style={{
                    fontSize: '11px',
                    color: 'rgba(255, 255, 255, 0.55)',
                    display: 'block',
                    fontWeight: 600,
                  }}
                >
                  Let&apos;s Talk
                </span>
                <span
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '14px',
                    fontWeight: 800,
                    color: '#ffffff',
                    display: 'block',
                  }}
                >
                  M. Arham
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    color: 'var(--red-primary)',
                    fontWeight: 600,
                  }}
                >
                  Senior Flutter Dev
                </span>
              </div>

              <a
                href="#contact-section"
                aria-label="Direct message"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  background: 'var(--red-accent)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#c72e18')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--red-accent)')}
              >
                <ArrowUpRight size={17} />
              </a>

              <button
                onClick={() => setChatWidgetOpen(false)}
                aria-label="Dismiss chat widget"
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#22222b',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '10px',
                }}
              >
                <X size={11} />
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 800px) {
          :global(#hero) {
            min-height: 92vh !important;
          }
        }
      `}</style>
    </section>
  );
}
