'use client';

import React, { useState } from 'react';
import {
  Github,
  ExternalLink,
  Layers,
  Sparkles,
  ArrowRight,
  X,
  CheckCircle2,
  Cpu,
  BarChart2,
  Smartphone,
  Wallet,
  Briefcase,
  Compass,
  Activity,
  Search,
} from 'lucide-react';
import { projectsList } from '@/data/portfolioData';
import { Project } from '@/types/portfolio';

const categoryTabs = [
  { id: 'all', label: 'All Projects' },
  { id: 'flutter', label: 'Flutter Mobile' },
  { id: 'fullstack', label: 'Full-Stack & Web' },
  { id: 'data', label: 'Python & Data Analysis' },
];

export default function ProjectsWidget() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsList.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  const getProjectIcon = (name: string) => {
    switch (name) {
      case 'Wallet':
        return <Wallet size={20} />;
      case 'Briefcase':
        return <Briefcase size={20} />;
      case 'Compass':
        return <Compass size={20} />;
      case 'Activity':
        return <Activity size={20} />;
      case 'Search':
        return <Search size={20} />;
      case 'BarChart2':
        return <BarChart2 size={20} />;
      default:
        return <Smartphone size={20} />;
    }
  };

  return (
    <section
      id="projects"
      style={{
        padding: '90px 24px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="section-container" style={{ padding: 0 }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Featured Engineering Works</span>
          <h2 className="section-title">
            Production Apps & <span className="gradient-text-red">Architectural</span> Projects
          </h2>
          <p className="section-description">
            Explore applications developed by M. Arham spanning mobile fintech, real-time marketplaces, healthcare activity sensors, and data analytics.
          </p>
        </div>

        {/* Filter Navigation */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '46px',
            flexWrap: 'wrap',
          }}
        >
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`filter-tab ${activeCategory === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid-3" style={{ gap: '26px' }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '26px',
                borderRadius: '22px',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '18px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(255, 42, 75, 0.12)',
                      border: '1px solid var(--border-red)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--red-primary)',
                      boxShadow: '0 0 14px var(--red-glow-subtle)',
                    }}
                  >
                    {getProjectIcon(project.iconName)}
                  </div>

                  {project.badge && (
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: 'var(--red-primary)',
                        background: 'rgba(255, 42, 75, 0.08)',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--border-red)',
                      }}
                    >
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '6px',
                    letterSpacing: '-0.3px',
                  }}
                >
                  {project.title}
                </h3>

                <div
                  style={{
                    fontSize: '12.5px',
                    color: 'var(--red-primary)',
                    fontWeight: 600,
                    marginBottom: '14px',
                  }}
                >
                  {project.subtitle}
                </div>

                <p
                  style={{
                    fontSize: '13.5px',
                    color: 'var(--text-muted)',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                  }}
                >
                  {project.description}
                </p>

                {/* Key metric pill if exists */}
                {project.metrics && (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '5px 12px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-subtle)',
                      marginBottom: '18px',
                      fontSize: '11.5px',
                    }}
                  >
                    <span style={{ color: 'var(--text-dim)' }}>{project.metrics.label}:</span>
                    <strong style={{ color: '#ffffff' }}>{project.metrics.value}</strong>
                  </div>
                )}

                {/* Tech Pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '24px',
                  }}
                >
                  {project.techStack.map((tech) => (
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

              {/* Bottom Actions */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <button
                  onClick={() => setSelectedProject(project)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-primary)',
                    fontSize: '13px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    padding: '4px 0',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--red-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                >
                  <span>Specs & Architecture</span>
                  <ArrowRight size={14} />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Source on GitHub"
                    style={{
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '12px',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--red-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    <Github size={15} />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal: In-depth Architecture Specs */}
        {selectedProject && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(12px)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="glass-card"
              style={{
                maxWidth: '680px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '36px',
                borderRadius: '28px',
                border: '1px solid var(--border-red)',
                boxShadow: 'var(--shadow-lg), var(--shadow-red)',
                background: 'var(--bg-secondary)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                }}
              >
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--red-primary)', textTransform: 'uppercase' }}>
                    {selectedProject.badge}
                  </div>
                  <h3 style={{ fontSize: '26px', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.5px' }}>
                    {selectedProject.title}
                  </h3>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                    {selectedProject.subtitle}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-muted)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Description */}
              <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '24px' }}>
                {selectedProject.description}
              </p>

              {/* Technical Highlights / Bullet Points */}
              <div style={{ marginBottom: '26px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Architecture & Implementation Highlights:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {selectedProject.bulletPoints.map((point, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '13.5px',
                        color: 'var(--text-muted)',
                        lineHeight: '1.5',
                      }}
                    >
                      <CheckCircle2 size={16} style={{ color: 'var(--red-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '8px' }}>
                  Technologies & Frameworks:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        padding: '5px 12px',
                        borderRadius: '6px',
                        background: 'rgba(255, 42, 75, 0.1)',
                        border: '1px solid var(--border-red)',
                        color: '#ffffff',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Buttons */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-red"
                    style={{ fontSize: '13.5px', padding: '10px 20px' }}
                  >
                    <Github size={15} />
                    <span>View GitHub Repository</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-glass"
                  style={{ fontSize: '13.5px', padding: '10px 20px' }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
