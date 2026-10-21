'use client';

import React from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Download,
  Terminal,
  Sparkles,
  Layers,
  Smartphone,
  Cpu,
  CheckCircle2,
  ExternalLink,
  Code2,
} from 'lucide-react';
import { contactDetails, bioSummary, statsMetrics } from '@/data/portfolioData';

export default function HeroWidget() {
  return (
    <section
      id="about"
      style={{
        paddingTop: '130px',
        paddingBottom: '80px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="section-container" style={{ padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Core SEO & Developer Value Proposition */}
          <div>
            {/* Status Indicator */}
            <div style={{ marginBottom: '20px' }}>
              <div className="status-badge">
                <span className="pulse-dot" />
                <span>Available for Senior Mobile & Full-Stack Roles</span>
              </div>
            </div>

            {/* Main SEO Heading */}
            <h1
              style={{
                fontSize: 'clamp(34px, 4.5vw, 54px)',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-1px',
                marginBottom: '20px',
              }}
            >
              Architecting Premium{' '}
              <span className="gradient-text-red">Flutter Mobile</span> Apps &{' '}
              <span className="gradient-text-pure-red">Full-Stack</span> Systems.
            </h1>

            {/* Keyword-Rich Subheading for SEO & Ranking */}
            <p
              style={{
                fontSize: '17px',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
                marginBottom: '28px',
                maxWidth: '600px',
              }}
            >
              Hi, I’m <strong style={{ color: '#ffffff' }}>M. Arham</strong> — an expert Flutter Developer and Software Engineer (CGPA 3.58). I engineer high-performance cross-platform applications across AI fintech, service marketplaces, and daily utility apps, backed by clean architecture, Supabase, and full-stack web capabilities.
            </p>

            {/* Dynamic Tech Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '36px',
              }}
            >
              {[
                { name: 'Flutter 3.x Expert', color: '#ff2a4b' },
                { name: 'Dart Specialist', color: '#06b6d4' },
                { name: 'GetX & BLoC', color: '#f59e0b' },
                { name: 'Clean Architecture', color: '#10b981' },
                { name: 'Supabase & Firebase', color: '#38bdf8' },
                { name: 'Next.js & TypeScript', color: '#a855f7' },
                { name: 'Python & Data Analysis', color: '#eab308' },
              ].map((badge) => (
                <span
                  key={badge.name}
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-secondary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: badge.color,
                    }}
                  />
                  {badge.name}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
              }}
            >
              <a href="#projects" className="btn-red">
                <span>View Portfolio Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#simulator"
                className="btn-glass"
                style={{
                  border: '1px solid var(--border-red)',
                }}
              >
                <Smartphone size={16} style={{ color: 'var(--red-primary)' }} />
                <span>Test Interactive Flutter Sim</span>
              </a>

              <a
                href="/Arham_Modern_CV_Single.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass"
                title="Open Printable CV / Resume"
              >
                <Download size={15} />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Dribbble Aesthetic Card with Portrait & Floating Badges */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Ambient Red Glow Sphere behind Portrait */}
            <div
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 42, 75, 0.35) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0,
              }}
            />

            {/* Main Portrait Card */}
            <div
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '420px',
                padding: '16px',
                borderRadius: '28px',
                border: '1px solid var(--border-red)',
                boxShadow: 'var(--shadow-lg), var(--shadow-red)',
                zIndex: 1,
                position: 'relative',
              }}
            >
              {/* Image Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-medium)',
                }}
              >
                <Image
                  src="/avatar.jpg"
                  alt="M. Arham - Expert Flutter Developer and Software Engineer"
                  fill
                  priority
                  style={{
                    objectFit: 'cover',
                  }}
                />

                {/* Top Corner Badge: Flutter Expert */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(10, 10, 15, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--border-red)',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color: '#ffffff',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <Cpu size={14} style={{ color: 'var(--red-primary)' }} />
                  <span>Flutter Specialist</span>
                </div>

                {/* Bottom Corner Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(10, 10, 15, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color: '#10b981',
                  }}
                >
                  <CheckCircle2 size={13} />
                  <span>3.58 CGPA (BS SE)</span>
                </div>
              </div>

              {/* Developer Metadata Pill */}
              <div
                style={{
                  marginTop: '16px',
                  padding: '12px 14px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ fontWeight: 800, fontSize: '15px' }}>M. Arham</div>
                  <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                    Mobile Architecture • REST APIs • Cloud
                  </div>
                </div>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(255, 42, 75, 0.15)',
                    border: '1px solid var(--border-red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--red-primary)',
                  }}
                >
                  <Sparkles size={16} />
                </div>
              </div>
            </div>

            {/* Floating Dribbble Pill 1: 60 FPS */}
            <div
              className="animate-float"
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-10px',
                background: 'rgba(15, 15, 22, 0.9)',
                backdropFilter: 'blur(12px)',
                border: '1px solid var(--border-red)',
                borderRadius: 'var(--radius-full)',
                padding: '8px 16px',
                fontSize: '12px',
                fontWeight: 700,
                color: '#ffffff',
                boxShadow: 'var(--shadow-red)',
                zIndex: 3,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#ff2a4b',
                  boxShadow: '0 0 8px #ff2a4b',
                }}
              />
              <span>60 FPS Fluid UI</span>
            </div>

            {/* Floating Dribbble Pill 2: Clean Arch */}
            <div
              className="animate-float"
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '-20px',
                background: 'rgba(15, 15, 22, 0.9)',
                backdropFilter: 'blur(12px)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-full)',
                padding: '8px 16px',
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--text-secondary)',
                boxShadow: 'var(--shadow-md)',
                zIndex: 3,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                animationDelay: '1.5s',
              }}
            >
              <Layers size={14} style={{ color: 'var(--red-primary)' }} />
              <span>Clean Architecture</span>
            </div>
          </div>
        </div>

        {/* Stats Strip Widget */}
        <div
          style={{
            marginTop: '70px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '18px',
          }}
          className="stats-grid"
        >
          {statsMetrics.map((stat) => (
            <div
              key={stat.id}
              className="glass-card"
              style={{
                padding: '20px 22px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                borderLeft: '3px solid var(--red-primary)',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(26px, 2.5vw, 34px)',
                  fontWeight: 900,
                  color: '#ffffff',
                  letterSpacing: '-0.5px',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '4px',
                }}
              >
                <span>{stat.value}</span>
              </div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.hero-grid) {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          :global(.stats-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          :global(.stats-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
