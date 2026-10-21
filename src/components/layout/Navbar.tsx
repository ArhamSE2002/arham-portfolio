'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send, Github, Linkedin } from 'lucide-react';
import { contactDetails } from '@/data/portfolioData';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Simulator', href: '#simulator' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['about', 'simulator', 'projects', 'experience', 'skills', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? '12px 24px' : '20px 24px',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'var(--bg-glass-elevated)' : 'var(--bg-glass)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: `1px solid ${scrolled ? 'var(--border-red)' : 'var(--border-subtle)'}`,
          boxShadow: scrolled ? 'var(--shadow-md), var(--shadow-red)' : 'var(--shadow-sm)',
          borderRadius: 'var(--radius-full)',
          padding: '10px 22px',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#about"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'var(--text-primary)',
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--red-primary), var(--red-deep))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '16px',
              color: '#ffffff',
              boxShadow: '0 0 12px var(--red-glow)',
            }}
          >
            A
          </div>
          <div>
            <span style={{ fontWeight: 800, fontSize: '17px', letterSpacing: '-0.3px' }}>
              M. ARHAM
            </span>
            <span
              style={{
                marginLeft: '6px',
                fontSize: '10.5px',
                fontWeight: 700,
                color: 'var(--red-primary)',
                background: 'rgba(255, 42, 75, 0.12)',
                padding: '2px 6px',
                borderRadius: '4px',
                border: '1px solid var(--border-red)',
              }}
            >
              FLUTTER.DEV
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  padding: '7px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '13.5px',
                  fontWeight: isActive ? 600 : 500,
                  textDecoration: 'none',
                  color: isActive ? '#ffffff' : 'var(--text-muted)',
                  background: isActive ? 'rgba(255, 42, 75, 0.15)' : 'transparent',
                  border: isActive ? '1px solid var(--border-red)' : '1px solid transparent',
                  boxShadow: isActive ? '0 0 12px var(--red-glow-subtle)' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Socials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a
            href={contactDetails.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            style={{
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-subtle)',
              transition: 'all 0.2s ease',
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
            <Github size={17} />
          </a>

          <a
            href={contactDetails.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            style={{
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-subtle)',
              transition: 'all 0.2s ease',
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
            <Linkedin size={17} />
          </a>

          <a
            href="#contact"
            className="btn-red"
            style={{
              padding: '8px 18px',
              fontSize: '13px',
            }}
          >
            <Send size={14} />
            <span>Hire Me</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            style={{
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: '8px',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            maxWidth: '1200px',
            margin: '10px auto 0',
            background: 'var(--bg-glass-elevated)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--border-red)',
            borderRadius: 'var(--radius-lg)',
            padding: '18px 24px',
            boxShadow: 'var(--shadow-lg), var(--shadow-red)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 500,
                padding: '8px 12px',
                borderRadius: '8px',
                borderLeft: activeSection === link.href.substring(1) ? '3px solid var(--red-primary)' : '3px solid transparent',
                background: activeSection === link.href.substring(1) ? 'rgba(255, 42, 75, 0.08)' : 'transparent',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.desktop-nav) {
            display: none !important;
          }
          :global(.mobile-toggle) {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
