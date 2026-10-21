'use client';

import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { contactDetails } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-secondary)',
        padding: '60px 24px 36px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {/* Logo & Tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, var(--red-primary), var(--red-deep))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '15px',
                  color: '#ffffff',
                }}
              >
                A
              </div>
              <span style={{ fontWeight: 800, fontSize: '18px', color: '#ffffff' }}>
                M. ARHAM
              </span>
              <span
                style={{
                  fontSize: '10.5px',
                  fontWeight: 700,
                  color: 'var(--red-primary)',
                  background: 'rgba(255, 42, 75, 0.1)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  border: '1px solid var(--border-red)',
                }}
              >
                FLUTTER ARCHITECT
              </span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', maxWidth: '400px', margin: 0 }}>
              Designing and developing high-fidelity cross-platform mobile apps with Flutter, Dart, and scalable full-stack backend integrations.
            </p>
          </div>

          {/* Socials & Back-to-Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={contactDetails.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = 'var(--red-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <Github size={18} />
            </a>

            <a
              href={contactDetails.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = 'var(--red-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <Linkedin size={18} />
            </a>

            <a
              href={`mailto:${contactDetails.email}`}
              title="Send Email"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = 'var(--red-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <Mail size={18} />
            </a>

            <button
              onClick={scrollToTop}
              title="Back to Top"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--red-primary)',
                color: '#ffffff',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 0 12px var(--red-glow)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* SEO Keywords Tagline & Copyright */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            fontSize: '12px',
            color: 'var(--text-dim)',
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>M. Arham</strong>. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <span>Arham Flutter Developer</span>
            <span>•</span>
            <span>Arham Software Engineer</span>
            <span>•</span>
            <span>Mobile App Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
