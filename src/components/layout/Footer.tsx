'use client';

import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { contactDetails } from '@/data/portfolioData';

interface FooterProps {
  onNavigate?: (view: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleNav = (view: string, href?: string) => {
    if (onNavigate) {
      onNavigate(view);
    }
    if (href) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        background: '#ffffff',
        borderTop: '1px solid var(--light-border)',
        paddingTop: '90px',
        paddingBottom: '36px',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 32px' }}>
        {/* Top Split Row: Bio & Newsletter (Matches Video 00:36) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '64px',
            alignItems: 'start',
            marginBottom: '72px',
          }}
          className="footer-top-grid"
        >
          {/* Left: Bio & Direct Contact */}
          <div>
            <p
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '17px',
                fontWeight: 700,
                color: '#2b2b38',
                lineHeight: '1.6',
                maxWidth: '520px',
                marginBottom: '28px',
              }}
            >
              Focused on crafting clean, high-performance, and intuitive mobile & full-stack experiences that blend technical rigor, clean architecture, and delightful interactions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                href={`tel:${contactDetails.phone}`}
                style={{
                  fontSize: '14px',
                  color: '#7b7b8c',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                {contactDetails.phone}
              </a>
              <a
                href={`mailto:${contactDetails.email}`}
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '22px',
                  fontWeight: 800,
                  color: '#0e0e13',
                  textDecoration: 'none',
                }}
              >
                {contactDetails.email}
              </a>
            </div>
          </div>

          {/* Right: Newsletter Subscribe Box (Matches Video 00:36) */}
          <div>
            <span
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#0e0e13',
                display: 'block',
                marginBottom: '14px',
              }}
            >
              Newsletter & Sprint Updates
            </span>

            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#16a34a', fontSize: '14px', fontWeight: 700 }}>
                <CheckCircle2 size={18} />
                <span>Subscribed! You will receive sprint engineering updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                  type="email"
                  required
                  placeholder="your.email@company.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    background: '#f1f0eb',
                    border: '1px solid var(--light-border)',
                    borderRadius: '4px',
                    padding: '13px 16px',
                    fontSize: '14px',
                    color: '#0e0e13',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: '#0e0e13',
                    color: '#ffffff',
                    border: 'none',
                    padding: '13px',
                    borderRadius: '4px',
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '12.5px',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--red-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#0e0e13')}
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Navigation & Socials Row (Matches Video 00:36 - 00:37) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px',
            borderTop: '1px solid var(--light-border)',
            paddingTop: '48px',
            marginBottom: '48px',
          }}
          className="footer-nav-grid"
        >
          {/* Navigation Column */}
          <div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#8e8e9e',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              Navigation
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Home', view: 'home', href: '#hero' },
                { label: 'About Me', view: 'about', href: '#about-section' },
                { label: 'Services', view: 'services', href: '#services-section' },
                { label: 'Projects', view: 'projects', href: '#projects-section' },
                { label: 'Contact', view: 'contact', href: '#contact-section' },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.view, link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    textAlign: 'left',
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    color: '#1a1a24',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--red-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#1a1a24')}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Channels Column with Arrow Links (Matches Video 00:36) */}
          <div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#8e8e9e',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              Connect
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'GitHub', href: contactDetails.githubUrl },
                { label: 'LinkedIn', href: contactDetails.linkedinUrl },
                { label: 'WhatsApp', href: contactDetails.whatsappUrl },
                { label: 'Email', href: `mailto:${contactDetails.email}` },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    maxWidth: '140px',
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#1a1a24',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--red-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#1a1a24')}
                >
                  <span>{social.label}</span>
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Core Skills Column */}
          <div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#8e8e9e',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              Specializations
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', color: '#555566' }}>
              <span>Flutter 3.x Mobile</span>
              <span>Dart Clean Architecture</span>
              <span>Supabase & Realtime</span>
              <span>Firebase Cloud Suite</span>
              <span>Next.js Web Systems</span>
              <span>On-Device AI & OCR</span>
            </div>
          </div>

          {/* Location & Honors Column */}
          <div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#8e8e9e',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              Honors & Location
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', color: '#555566' }}>
              <span style={{ fontWeight: 700, color: '#0e0e13' }}>BS Software Engineering</span>
              <span>CGPA: 3.58 / 4.00</span>
              <span>Bahawalpur, Pakistan</span>
              <span style={{ color: 'var(--red-accent)', fontWeight: 700 }}>Open for Worldwide Remote</span>
            </div>
          </div>
        </div>

        {/* Giant Watermark Typography: 'MICHAEL®' in video -> 'ARHAM®' (Matches Video 00:36 - 00:37) */}
        <div
          style={{
            textAlign: 'center',
            padding: '24px 0',
            userSelect: 'none',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(64px, 15vw, 220px)',
              fontWeight: 900,
              lineHeight: 0.85,
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
              color: '#0e0e13',
              display: 'inline-block',
            }}
          >
            Arham®
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution (Matches Video 00:37) */}
        <div
          style={{
            borderTop: '1px solid var(--light-border)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '12px',
            color: '#888899',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div>
            Copyright & Engineering by <strong>@Arham</strong> – 2026. All rights reserved.
          </div>
          <div>
            Designed with Framer Precision • Built with Next.js & TypeScript
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.footer-top-grid) {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          :global(.footer-nav-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </footer>
  );
}
