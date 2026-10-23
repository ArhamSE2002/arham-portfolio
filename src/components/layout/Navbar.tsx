'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X, Phone, Mail, Clock, Github, Linkedin, MessageCircle } from 'lucide-react';
import { contactDetails } from '@/data/portfolioData';

interface NavbarProps {
  activeView?: string;
  onNavigate?: (view: string) => void;
}

export default function Navbar({ activeView = 'home', onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: string, href?: string) => {
    setMenuOpen(false);
    if (onNavigate) {
      onNavigate(view);
    }
    if (href) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 90,
          background: scrolled ? 'rgba(189, 50, 22, 0.95)' : 'var(--hero-bg)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div
          style={{
            maxWidth: '1320px',
            margin: '0 auto',
            padding: '16px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: '#ffffff',
              textDecoration: 'none',
            }}
          >
            <span
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '22px',
                fontWeight: 900,
                letterSpacing: '-0.5px',
                textTransform: 'uppercase',
              }}
            >
              Arham®
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
            }}
            className="desktop-nav-items"
          >
            {[
              { id: 'home', label: 'Home', href: '#hero' },
              { id: 'about', label: 'About', href: '#about-section' },
              { id: 'services', label: 'Services', href: '#services-section' },
              { id: 'projects', label: 'Projects', href: '#projects-section' },
              { id: 'pricing', label: 'Pricing', href: '#pricing-section' },
              { id: 'contact', label: 'Contact', href: '#contact-section' },
            ].map((link) => {
              const isActive = activeView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id, link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.2px',
                    position: 'relative',
                    padding: '6px 0',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.8)')}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: '#ffffff',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk CTA & Animated Hamburger Menu */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={() => handleNavClick('contact', '#contact-section')}
              className="desktop-nav-items"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#ffffff',
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'Outfit, sans-serif',
                fontSize: '12.5px',
                fontWeight: 700,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = 'var(--hero-bg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              Let&apos;s Talk
            </button>

            {/* Framer Animated Hamburger Button (Two bars) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open Navigation Menu"
              style={{
                width: '42px',
                height: '42px',
                background: 'rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: 0,
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.4)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.2)')}
            >
              <span
                style={{
                  width: '20px',
                  height: '2px',
                  backgroundColor: '#ffffff',
                  borderRadius: '2px',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none',
                }}
              />
              <span
                style={{
                  width: '20px',
                  height: '2px',
                  backgroundColor: '#ffffff',
                  borderRadius: '2px',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Framer Dark Overlay Menu (Matches Video 00:04 - 00:06) */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(10, 10, 14, 0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '36px 48px',
            animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Top Bar inside Overlay */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              paddingBottom: '20px',
            }}
          >
            <span
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '24px',
                fontWeight: 900,
                color: '#ffffff',
                textTransform: 'uppercase',
              }}
            >
              Arham®
            </span>

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--red-accent)';
                e.currentTarget.style.transform = 'rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'rotate(0deg)';
              }}
            >
              <X size={22} />
            </button>
          </div>

          {/* Main Menu Body: Giant Links (Left) + Contact Drawer (Right) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '60px',
              alignItems: 'center',
              margin: 'auto 0',
            }}
            className="menu-overlay-grid"
          >
            {/* Giant Menu Links with '+' markers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { id: 'home', label: 'HOME', href: '#hero' },
                { id: 'about', label: 'ABOUT', href: '#about-section' },
                { id: 'services', label: 'SERVICES', href: '#services-section' },
                { id: 'projects', label: 'PROJECTS', href: '#projects-section' },
                { id: 'pricing', label: 'PRICING', href: '#pricing-section' },
                { id: 'articles', label: 'BLOGS & ARTICLES', href: '#insights-section' },
                { id: 'contact', label: 'CONTACT', href: '#contact-section' },
              ].map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.href)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    padding: '8px 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    const title = e.currentTarget.querySelector('.nav-huge-title') as HTMLElement;
                    const plus = e.currentTarget.querySelector('.nav-huge-plus') as HTMLElement;
                    if (title) title.style.color = 'var(--red-primary)';
                    if (title) title.style.transform = 'translateX(12px)';
                    if (plus) plus.style.transform = 'rotate(45deg) scale(1.2)';
                    if (plus) plus.style.color = 'var(--red-primary)';
                  }}
                  onMouseLeave={(e) => {
                    const title = e.currentTarget.querySelector('.nav-huge-title') as HTMLElement;
                    const plus = e.currentTarget.querySelector('.nav-huge-plus') as HTMLElement;
                    if (title) title.style.color = '#ffffff';
                    if (title) title.style.transform = 'translateX(0)';
                    if (plus) plus.style.transform = 'none';
                    if (plus) plus.style.color = 'rgba(255, 255, 255, 0.4)';
                  }}
                >
                  <span
                    className="nav-huge-title"
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: 'clamp(36px, 4.8vw, 60px)',
                      fontWeight: 900,
                      color: '#ffffff',
                      textTransform: 'uppercase',
                      letterSpacing: '-0.03em',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="nav-huge-plus"
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '32px',
                      fontWeight: 400,
                      color: 'rgba(255, 255, 255, 0.4)',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    +
                  </span>
                </div>
              ))}
            </div>

            {/* Right Drawer: Contact, Hours & Socials (Exact match from video) */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                paddingLeft: '32px',
                borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              className="menu-contact-drawer"
            >
              <div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--red-primary)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '8px' }}>
                  Contact Phone
                </span>
                <a
                  href={`tel:${contactDetails.phone}`}
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#ffffff',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Phone size={18} style={{ color: 'var(--red-primary)' }} />
                  <span>{contactDetails.phone}</span>
                </a>
              </div>

              <div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--red-primary)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '8px' }}>
                  Contact Mail
                </span>
                <a
                  href={`mailto:${contactDetails.email}`}
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#ffffff',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Mail size={18} style={{ color: 'var(--red-primary)' }} />
                  <span>{contactDetails.email}</span>
                </a>
              </div>

              <div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '8px' }}>
                  Availability / Sprint Schedule
                </span>
                <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '14.5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={16} style={{ color: 'var(--red-primary)' }} />
                  <span>Open for Senior Mobile Roles & Sprints (Mon - Sat)</span>
                </div>
              </div>

              {/* Social Channels */}
              <div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '12px' }}>
                  Direct Channels
                </span>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a
                    href={contactDetails.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--red-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
                  >
                    <Github size={18} />
                  </a>

                  <a
                    href={contactDetails.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--red-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href={contactDetails.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#25D366')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
                  >
                    <MessageCircle size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar inside Overlay */}
          <div
            style={{
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            <span>© 2026 M. Arham. All Rights Reserved.</span>
            <span>Architecting High-Performance Mobile Experiences</span>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @media (max-width: 900px) {
          :global(.desktop-nav-items) {
            display: none !important;
          }
          :global(.menu-overlay-grid) {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          :global(.menu-contact-drawer) {
            padding-left: 0 !important;
            border-left: none !important;
            border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
            padding-top: 24px !important;
          }
        }
      `}</style>
    </>
  );
}
