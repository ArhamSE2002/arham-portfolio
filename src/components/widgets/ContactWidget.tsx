'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  MessageSquare,
  Github,
  Linkedin,
  Sparkles,
} from 'lucide-react';
import { contactDetails } from '@/data/portfolioData';

export default function ContactWidget() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '90px 24px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="section-container" style={{ padding: 0 }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Let&apos;s Build Together</span>
          <h2 className="section-title">
            Get In <span className="gradient-text-red">Touch</span>
          </h2>
          <p className="section-description">
            Looking for a Senior Flutter Developer, Mobile Architect, or Software Engineer? Let&apos;s connect to discuss your project requirements or hiring opportunities.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '36px',
          }}
          className="contact-grid-main"
        >
          {/* Left Column: Direct Info & Quick Copy Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Status Card */}
            <div
              className="glass-card"
              style={{
                padding: '26px',
                borderRadius: '22px',
                border: '1px solid var(--border-red)',
                background: 'rgba(255, 42, 75, 0.04)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span className="pulse-dot" />
                <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--red-primary)', textTransform: 'uppercase' }}>
                  Open for Opportunities
                </span>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                I am actively taking on mobile consulting, freelance contracts, and full-time software engineering roles. Inquiries receive a response within 24 hours.
              </p>
            </div>

            {/* Email Card with Copy Action */}
            <div
              className="glass-card"
              style={{
                padding: '22px',
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(255, 42, 75, 0.12)',
                    color: 'var(--red-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    style={{
                      fontSize: '14.5px',
                      fontWeight: 700,
                      color: '#ffffff',
                      textDecoration: 'none',
                    }}
                  >
                    {contactDetails.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(contactDetails.email, 'email')}
                title="Copy Email"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: copiedType === 'email' ? '#10b981' : 'var(--text-muted)',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {copiedType === 'email' ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedType === 'email' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div
              className="glass-card"
              style={{
                padding: '22px',
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(255, 42, 75, 0.12)',
                    color: 'var(--red-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Phone & WhatsApp
                  </div>
                  <a
                    href={contactDetails.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '14.5px',
                      fontWeight: 700,
                      color: '#ffffff',
                      textDecoration: 'none',
                    }}
                  >
                    {contactDetails.phone}
                  </a>
                </div>
              </div>

              <a
                href={contactDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red"
                style={{
                  padding: '8px 14px',
                  fontSize: '12px',
                }}
              >
                <MessageSquare size={13} />
                <span>Chat</span>
              </a>
            </div>

            {/* Location Card */}
            <div
              className="glass-card"
              style={{
                padding: '22px',
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255, 42, 75, 0.12)',
                  color: 'var(--red-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MapPin size={18} />
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>
                  Location
                </div>
                <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#ffffff' }}>
                  {contactDetails.location}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div
            className="glass-card"
            style={{
              padding: '36px',
              borderRadius: '24px',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
              Send Direct Message
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Fill in your details below and I will get back to you promptly.
            </p>

            {formSubmitted ? (
              <div
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  borderRadius: '16px',
                  padding: '28px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#10b981',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 14px',
                  }}
                >
                  <Check size={24} />
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  Thank you for reaching out, M. Arham will reply to you as soon as possible.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn-glass"
                  style={{ fontSize: '13px', padding: '8px 18px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        background: 'var(--bg-input)',
                        border: '1px solid var(--border-medium)',
                        color: '#ffffff',
                        fontSize: '13.5px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        background: 'var(--bg-input)',
                        border: '1px solid var(--border-medium)',
                        color: '#ffffff',
                        fontSize: '13.5px',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Subject / Project Topic
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Flutter Mobile App Development"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-medium)',
                      color: '#ffffff',
                      fontSize: '13.5px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Message Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your mobile app or software engineering needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-medium)',
                      color: '#ffffff',
                      fontSize: '13.5px',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formLoading}
                  className="btn-red"
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '14.5px',
                    marginTop: '8px',
                  }}
                >
                  <Send size={16} />
                  <span>{formLoading ? 'Sending...' : 'Send Message to Arham'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.contact-grid-main) {
            grid-template-columns: 1fr !important;
          }
          :global(.form-row) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
