'use client';

import React from 'react';
import { Award, GraduationCap, CheckCircle2, ShieldCheck, BookOpen } from 'lucide-react';
import { certificationsList, educationInfo } from '@/data/portfolioData';

export default function CertificationsWidget() {
  return (
    <section
      style={{
        padding: '70px 24px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="section-container" style={{ padding: 0 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
          }}
          className="cert-grid"
        >
          {/* Left Column: Education */}
          <div
            className="glass-card"
            style={{
              padding: '32px',
              borderRadius: '24px',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255, 42, 75, 0.12)',
                    color: 'var(--red-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border-red)',
                  }}
                >
                  <GraduationCap size={22} />
                </div>
                <div>
                  <span className="section-tag" style={{ marginBottom: 0 }}>
                    Academic Foundation
                  </span>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff' }}>
                    Education
                  </h3>
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                  {educationInfo.degree}
                </div>
                <div style={{ fontSize: '14.5px', color: 'var(--red-primary)', fontWeight: 600 }}>
                  {educationInfo.institution}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {educationInfo.period}
                </div>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  marginBottom: '16px',
                }}
              >
                <CheckCircle2 size={14} style={{ color: '#10b981' }} />
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#10b981' }}>
                  Cumulative GPA: {educationInfo.cgpa} / {educationInfo.gradeMax}
                </span>
              </div>

              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {educationInfo.details}
              </p>
            </div>
          </div>

          {/* Right Column: Professional Certifications */}
          <div
            className="glass-card"
            style={{
              padding: '32px',
              borderRadius: '24px',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(255, 42, 75, 0.12)',
                  color: 'var(--red-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-red)',
                }}
              >
                <Award size={22} />
              </div>
              <div>
                <span className="section-tag" style={{ marginBottom: 0 }}>
                  Verified Credentials
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff' }}>
                  Certifications
                </h3>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {certificationsList.map((cert) => (
                <div
                  key={cert.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '16px',
                    padding: '18px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      marginBottom: '6px',
                    }}
                  >
                    <div>
                      <h4 style={{ fontSize: '15.5px', fontWeight: 800, color: '#ffffff' }}>
                        {cert.title}
                      </h4>
                      <div style={{ fontSize: '12.5px', color: 'var(--red-primary)', fontWeight: 600 }}>
                        {cert.issuer}
                      </div>
                    </div>
                    {cert.verified && (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '11px',
                          fontWeight: 700,
                          color: '#10b981',
                          background: 'rgba(16, 185, 129, 0.1)',
                          padding: '3px 8px',
                          borderRadius: '4px',
                        }}
                      >
                        <ShieldCheck size={13} />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>

                  {cert.credentialId && (
                    <div style={{ fontSize: '11px', color: 'var(--text-dim)', marginBottom: '10px', fontFamily: 'monospace' }}>
                      Credential ID: {cert.credentialId}
                    </div>
                  )}

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontSize: '11px',
                          padding: '3px 8px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          borderRadius: '4px',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.cert-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
