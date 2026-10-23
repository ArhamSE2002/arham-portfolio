'use client';

import React from 'react';
import Image from 'next/image';
import { certificationsList, experienceList } from '@/data/portfolioData';
import { Award, Briefcase, Calendar, CheckCircle2, MapPin } from 'lucide-react';

export default function AboutView() {
  return (
    <div style={{ background: 'var(--light-bg)', minHeight: '100vh', paddingTop: '100px' }}>
      {/* About Us Hero (Matches Video 00:39 - 00:41) */}
      <section style={{ padding: '60px 32px 40px', maxWidth: '1320px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#777788', letterSpacing: '2px', textTransform: 'uppercase' }}>
              ARHAM®
            </span>
            <h1
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(54px, 8vw, 100px)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 0.9,
                margin: '8px 0 0',
                textTransform: 'uppercase',
              }}
            >
              ABOUT US
            </h1>
          </div>

          <div style={{ fontSize: '13px', fontWeight: 700, color: '#888899' }}>
            ©2026 [Scroll to Explore]
          </div>
        </div>

        {/* Horizontal Photo Strip / Gallery (Matches Video 00:40 - 00:41) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            marginBottom: '72px',
          }}
          className="about-gallery-strip"
        >
          {[
            '/project_images/monefii (ai expense tracker) images/Frame 176.png',
            '/avatar.jpg',
            '/project_images/worksphere project images/Gemini_Generated_Image_yypiv8yypiv8yypi.jpg',
            '/project_images/fittrack pro/Frame 10.png',
          ].map((src, i) => (
            <div
              key={i}
              style={{
                position: 'relative',
                width: '100%',
                height: '320px',
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#0e0e14',
                boxShadow: 'var(--shadow-card)',
                border: '1px solid var(--light-border)',
              }}
            >
              <Image src={src} alt="About Arham" fill style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>

        {/* Mission Statement & Stats (Matches Video 00:42 - 00:43) */}
        <div style={{ marginBottom: '90px' }}>
          <div className="eyebrow-tag">
            <span style={{ color: 'var(--red-accent)' }}>•</span>
            <span>OUR MISSION</span>
          </div>

          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: 900,
              lineHeight: 1.05,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              marginBottom: '40px',
              maxWidth: '1000px',
            }}
          >
            ARHAM BELIEVES MOBILE ARCHITECTURE CREATES MEANINGFUL USER EXPERIENCES.
          </h2>

          <p style={{ fontSize: '16px', color: 'var(--light-text-body)', lineHeight: '1.7', maxWidth: '880px', marginBottom: '48px' }}>
            Every digital interface is designed to improve usability, reinforce reliability, and deliver fluid, zero-latency 60 FPS interactions across mobile devices and modern web companions.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
              borderTop: '1px solid var(--light-border)',
              paddingTop: '36px',
            }}
            className="about-stats-grid"
          >
            <div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '56px', fontWeight: 900, color: '#0e0e13' }}>
                160+
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
                Completed Milestones
              </div>
              <div style={{ fontSize: '13px', color: 'var(--light-text-body)' }}>
                Shipped production-grade modules and architectures worldwide.
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '56px', fontWeight: 900, color: '#0e0e13' }}>
                3+
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
                Years Experience
              </div>
              <div style={{ fontSize: '13px', color: 'var(--light-text-body)' }}>
                Hands-on Flutter, Dart, Supabase, and full-stack software development.
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '56px', fontWeight: 900, color: '#0e0e13' }}>
                100%
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
                Cross-Platform Fidelity
              </div>
              <div style={{ fontSize: '13px', color: 'var(--light-text-body)' }}>
                Collaborating with founders, product teams, and startups.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Achievements Section (Matches Video 00:44 - 00:48) */}
      <section
        style={{
          background: 'var(--dark-bg)',
          color: '#ffffff',
          padding: '110px 32px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ marginBottom: '64px' }}>
            <div className="eyebrow-tag dark">
              <span style={{ color: 'var(--red-accent)' }}>•</span>
              <span>HONORS & AWARDS</span>
            </div>

            <h2 className="editorial-heading dark" style={{ margin: 0 }}>
              ARHAM® <br />
              ACHIEVEMENTS
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}
            className="achievements-grid"
          >
            {certificationsList.map((cert) => (
              <div
                key={cert.id}
                style={{
                  background: '#13131a',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '280px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--red-accent)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  <Award size={32} style={{ color: 'var(--red-accent)', marginBottom: '24px' }} />
                  <h3
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '18px',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: '#ffffff',
                      marginBottom: '10px',
                      lineHeight: '1.3',
                    }}
                  >
                    {cert.title}
                  </h3>
                  <div style={{ fontSize: '13px', color: '#9e9eb2' }}>
                    {cert.issuer}
                  </div>
                </div>

                <div
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingTop: '16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <span>{cert.badge || 'Verified'}</span>
                  <strong style={{ color: '#ffffff' }}>{cert.year || '2024'}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Journey Section (Matches Video 00:49 - 00:50) */}
      <section style={{ padding: '110px 32px', maxWidth: '1320px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px' }}>
          <div className="eyebrow-tag">
            <span style={{ color: 'var(--red-accent)' }}>•</span>
            <span>CAREER JOURNEY</span>
          </div>

          <h2 className="editorial-heading" style={{ margin: 0 }}>
            PURPOSE-DRIVEN <br />
            <span className="muted-span">EXPERIENCES FOR</span> <br />
            MODERN COMPANIES
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {experienceList.map((exp) => (
            <div
              key={exp.id}
              className="editorial-card"
              style={{
                display: 'grid',
                gridTemplateColumns: '260px 1fr',
                gap: '40px',
                padding: '40px',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '13px',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: 'var(--red-accent)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  [{exp.period}]
                </span>
                <h3
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '24px',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    color: '#0e0e13',
                    marginBottom: '6px',
                  }}
                >
                  {exp.company}
                </h3>
                <div style={{ fontSize: '13px', color: '#777788', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={13} /> {exp.location}
                </div>
              </div>

              <div>
                <h4
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '18px',
                    fontWeight: 800,
                    color: '#0e0e13',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                  }}
                >
                  {exp.role}
                </h4>
                <p style={{ fontSize: '14.5px', color: 'var(--light-text-body)', lineHeight: '1.6', marginBottom: '20px' }}>
                  {exp.summary}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: '#444455' }}>
                      <CheckCircle2 size={15} style={{ color: 'var(--red-accent)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '4px',
                        background: '#f1f0ea',
                        border: '1px solid #e2e1db',
                        color: '#2a2a36',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.about-gallery-strip) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          :global(.about-stats-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.achievements-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          :global(.about-gallery-strip) {
            grid-template-columns: 1fr !important;
          }
          :global(.achievements-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
