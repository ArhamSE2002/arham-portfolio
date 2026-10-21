'use client';

import React from 'react';
import {
  Smartphone,
  Globe,
  Server,
  Terminal,
  Check,
  Sparkles,
  Zap,
} from 'lucide-react';
import { skillsCategories } from '@/data/portfolioData';

export default function SkillsMatrixWidget() {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'flutter-expert':
        return <Smartphone size={20} />;
      case 'web-frontend':
        return <Globe size={20} />;
      case 'backend-cloud':
        return <Server size={20} />;
      default:
        return <Terminal size={20} />;
    }
  };

  return (
    <section
      id="skills"
      style={{
        padding: '90px 24px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="section-container" style={{ padding: 0 }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text-red">Architecture</span> Matrix
          </h2>
          <p className="section-description">
            Positioned as a dedicated <strong>Flutter & Mobile Expert</strong> with versatile full-stack web and backend engineering capabilities.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid-2" style={{ gap: '28px' }}>
          {skillsCategories.map((cat) => {
            const isExpert = cat.highlight === 'Expert';
            return (
              <div
                key={cat.id}
                className="glass-card"
                style={{
                  padding: '30px',
                  borderRadius: '24px',
                  border: isExpert ? '1px solid var(--border-red)' : '1px solid var(--border-subtle)',
                  background: isExpert ? 'rgba(20, 16, 24, 0.85)' : 'var(--bg-card)',
                  boxShadow: isExpert ? 'var(--shadow-md), var(--shadow-red-sm)' : 'var(--shadow-sm)',
                }}
              >
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                    paddingBottom: '14px',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: isExpert ? 'var(--red-primary)' : 'rgba(255, 255, 255, 0.05)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: isExpert ? '0 0 14px var(--red-glow)' : 'none',
                      }}
                    >
                      {getCategoryIcon(cat.id)}
                    </div>

                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.3px' }}>
                        {cat.title}
                      </h3>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        {cat.subtitle}
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      background: isExpert ? 'rgba(255, 42, 75, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                      color: isExpert ? 'var(--red-primary)' : 'var(--text-muted)',
                      border: `1px solid ${isExpert ? 'var(--border-red)' : 'var(--border-subtle)'}`,
                      letterSpacing: '0.5px',
                    }}
                  >
                    {cat.highlight.toUpperCase()}
                  </span>
                </div>

                {/* Skill Items with Interactive Progress Bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '6px',
                        }}
                      >
                        <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#ffffff' }}>
                          {skill.name}
                        </span>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            color: skill.tier === 'Expert' ? 'var(--red-primary)' : 'var(--text-muted)',
                          }}
                        >
                          {skill.tier}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div
                        style={{
                          width: '100%',
                          height: '6px',
                          background: 'rgba(255, 255, 255, 0.06)',
                          borderRadius: '3px',
                          overflow: 'hidden',
                          marginBottom: '4px',
                        }}
                      >
                        <div
                          style={{
                            width: `${skill.level}%`,
                            height: '100%',
                            background: isExpert
                              ? 'linear-gradient(90deg, #ff4d6d, var(--red-primary))'
                              : 'linear-gradient(90deg, #64748b, #94a3b8)',
                            borderRadius: '3px',
                          }}
                        />
                      </div>

                      <div style={{ fontSize: '11.5px', color: 'var(--text-dim)', lineHeight: '1.4' }}>
                        {skill.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
