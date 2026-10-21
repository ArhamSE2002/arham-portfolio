'use client';

import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceList } from '@/data/portfolioData';

export default function ExperienceWidget() {
  return (
    <section
      id="experience"
      style={{
        padding: '90px 24px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="section-container" style={{ padding: 0 }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Career History</span>
          <h2 className="section-title">
            Professional <span className="gradient-text-red">Experience</span>
          </h2>
          <p className="section-description">
            A chronological timeline of my engineering roles, apprenticeship contributions, and academic mentorship in mobile development and AI.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
            paddingLeft: '32px',
            borderLeft: '2px solid var(--border-medium)',
          }}
          className="timeline-container"
        >
          {experienceList.map((exp, index) => (
            <div
              key={exp.id}
              style={{
                position: 'relative',
                marginBottom: index === experienceList.length - 1 ? 0 : '48px',
              }}
            >
              {/* Timeline Indicator Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-41px',
                  top: '0px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: exp.current ? 'var(--red-primary)' : 'var(--bg-tertiary)',
                  border: `3px solid ${exp.current ? 'var(--red-primary)' : 'var(--border-subtle)'}`,
                  boxShadow: exp.current ? '0 0 14px var(--red-glow)' : 'none',
                }}
              />

              {/* Experience Card */}
              <div
                className="glass-card"
                style={{
                  padding: '28px',
                  borderRadius: '20px',
                  border: exp.current ? '1px solid var(--border-red)' : '1px solid var(--border-subtle)',
                }}
              >
                {/* Header row */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '10px',
                    marginBottom: '12px',
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.3px' }}>
                      {exp.role}
                    </h3>
                    <div style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--red-primary)', marginTop: '2px' }}>
                      {exp.company}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: exp.current ? 'rgba(255, 42, 75, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                        border: `1px solid ${exp.current ? 'var(--border-red)' : 'var(--border-subtle)'}`,
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '11.5px',
                        fontWeight: 600,
                        color: exp.current ? '#ff4d6d' : 'var(--text-muted)',
                      }}
                    >
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>

                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'var(--text-dim)' }}>
                      <MapPin size={11} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                  {exp.summary}
                </p>

                {/* Responsibilities */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  {exp.responsibilities.map((resp, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '13px',
                        color: 'var(--text-muted)',
                        lineHeight: '1.5',
                      }}
                    >
                      <CheckCircle2 size={15} style={{ color: 'var(--red-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        padding: '3px 9px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
