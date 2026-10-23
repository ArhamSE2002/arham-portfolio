'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Send, CheckCircle2, Phone, Mail, MessageCircle } from 'lucide-react';
import { contactDetails } from '@/data/portfolioData';

export default function ContactBannerWidget() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 700);
  };

  return (
    <section
      id="contact-section"
      style={{
        background: 'var(--light-bg)',
        borderBottom: '1px solid var(--light-border)',
        padding: '120px 32px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {/* Split Banner Container (Matches Video 00:34 - 00:35) */}
        <div
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #111116 0%, #1a0808 50%, #2a0b0b 100%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 32px 80px rgba(0, 0, 0, 0.25)',
            display: 'grid',
            gridTemplateColumns: '460px 1fr',
            minHeight: '560px',
          }}
          className="contact-banner-grid"
        >
          {/* Left Column: Form Card with White Border / Floating Frame (Matches Video 00:34) */}
          <div
            style={{
              padding: '48px 40px',
              background: 'rgba(15, 15, 20, 0.85)',
              backdropFilter: 'blur(16px)',
              borderRight: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              zIndex: 2,
            }}
          >
            {/* Brand Header */}
            <div style={{ marginBottom: '28px' }}>
              <div
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '22px',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  marginBottom: '4px',
                }}
              >
                M. Arham®
              </div>
              <div style={{ fontSize: '13px', color: '#9d9db0' }}>
                Reach Out to Me
              </div>
            </div>

            {submitted ? (
              <div
                style={{
                  padding: '24px',
                  borderRadius: '8px',
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  color: '#ffffff',
                  textAlign: 'center',
                  animation: 'fadeIn 0.3s ease',
                }}
              >
                <CheckCircle2 size={36} style={{ color: '#22c55e', margin: '0 auto 12px' }} />
                <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '18px', fontWeight: 800, margin: '0 0 6px' }}>
                  MESSAGE TRANSMITTED
                </h4>
                <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
                  Thank you! I will review your project and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: 'rgba(255, 255, 255, 0.6)',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      background: '#16161f',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '4px',
                      padding: '12px 14px',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: 'rgba(255, 255, 255, 0.6)',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      background: '#16161f',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '4px',
                      padding: '12px 14px',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: 'rgba(255, 255, 255, 0.6)',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your mobile or full-stack project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      background: '#16161f',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '4px',
                      padding: '12px 14px',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'none',
                    }}
                  />
                </div>

                {/* Submit button (Matches Video: 'YOUR MESSAGE' black/white box button) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    marginTop: '8px',
                    background: '#ffffff',
                    color: '#0e0e13',
                    border: 'none',
                    padding: '14px',
                    borderRadius: '4px',
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '13px',
                    fontWeight: 900,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
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
                  {isSubmitting ? 'TRANSMITTING...' : 'YOUR MESSAGE'}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: High-Impact Visual Title & Direct Channels (Matches Video 00:34) */}
          <div
            style={{
              padding: '64px 54px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '32px',
                }}
              >
                <span style={{ color: 'var(--red-accent)' }}>•</span>
                <span>DESIGN & ARCHITECTURE</span>
              </div>

              <h2
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 'clamp(42px, 5.5vw, 76px)',
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  marginBottom: '28px',
                }}
              >
                LET&apos;S CREATE <br />
                TOGETHER
              </h2>

              <p
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '13px',
                  fontWeight: 800,
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  color: 'var(--red-primary)',
                  marginBottom: '16px',
                }}
              >
                RESULTS-DRIVEN SOLUTIONS
              </p>
              <p
                style={{
                  fontSize: '14.5px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  maxWidth: '440px',
                  lineHeight: '1.6',
                }}
              >
                Refining digital architecture through robust software engineering and deep domain expertise to guarantee user delight and business velocity.
              </p>
            </div>

            {/* Direct Instant Channels */}
            <div
              style={{
                display: 'flex',
                gap: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                paddingTop: '28px',
                marginTop: '36px',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Instant WhatsApp
                </span>
                <a
                  href={contactDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#ffffff',
                    fontSize: '15px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <MessageCircle size={16} style={{ color: '#25D366' }} />
                  <span>+92 302 3344759</span>
                </a>
              </div>

              <div>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Direct Email
                </span>
                <a
                  href={`mailto:${contactDetails.email}`}
                  style={{
                    color: '#ffffff',
                    fontSize: '15px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Mail size={16} style={{ color: 'var(--red-primary)' }} />
                  <span>{contactDetails.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.contact-banner-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
