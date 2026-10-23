'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Github, CheckCircle2, Layers } from 'lucide-react';
import { projectsList } from '@/data/portfolioData';
import { Project } from '@/types/portfolio';

export default function ProjectsWidget() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentGalleryIdx, setCurrentGalleryIdx] = useState(0);

  const openProjectModal = (proj: Project) => {
    setSelectedProject(proj);
    setCurrentGalleryIdx(0);
  };

  const nextImage = () => {
    if (!selectedProject?.galleryImages) return;
    setCurrentGalleryIdx((prev) => (prev + 1) % selectedProject.galleryImages!.length);
  };

  const prevImage = () => {
    if (!selectedProject?.galleryImages) return;
    setCurrentGalleryIdx((prev) => (prev - 1 + selectedProject.galleryImages!.length) % selectedProject.galleryImages!.length);
  };

  // Group into two columns for masonry effect (matches video 00:15 - 00:18)
  const col1Projects = [projectsList[0], projectsList[2]]; // Monefii, WorkSphere
  const col2Projects = [projectsList[1], projectsList[3]]; // Islam Master, FitTrack Pro

  return (
    <section
      id="projects-section"
      style={{
        background: 'var(--light-bg)',
        borderBottom: '1px solid var(--light-border)',
        padding: '120px 32px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '64px' }}>
          <div className="eyebrow-tag">
            <span style={{ color: 'var(--red-accent)' }}>•</span>
            <span>PORTFOLIO</span>
          </div>

          <h2 className="editorial-heading" style={{ margin: 0 }}>
            OUR <br />
            PROJECTS.
          </h2>
        </div>

        {/* Masonry Project Grid with Feature Graphic Aspect Ratio (1024 / 500) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'start',
          }}
          className="projects-masonry-grid"
        >
          {/* Column 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {col1Projects.map((project) => (
              <div
                key={project.id}
                onClick={() => openProjectModal(project)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                {/* Feature Graphic Container (1024 / 500 Play Store Standard) */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1024 / 500',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    background: project.id === 'worksphere' ? '#07152b' : '#0d0d12',
                    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)',
                    border: '1px solid var(--light-border)',
                  }}
                >
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    style={{
                      objectFit: project.id === 'worksphere' ? 'contain' : 'cover',
                    }}
                  />

                  {/* Hover Floating View Button */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(15, 15, 20, 0.8)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2,
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Footer Tag & Category */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '4px 6px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: 'var(--red-accent)',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '13px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                        color: '#0e0e13',
                      }}
                    >
                      {project.title}
                    </span>
                  </div>
                  <span style={{ fontSize: '12px', color: '#777788', fontWeight: 600 }}>
                    {project.tag || `/${project.category}`}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 (Offset / Staggered in height) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '48px',
              paddingTop: '60px',
            }}
            className="masonry-col-offset"
          >
            {col2Projects.map((project) => (
              <div
                key={project.id}
                onClick={() => openProjectModal(project)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                {/* Feature Graphic Container (1024 / 500 Play Store Standard) */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1024 / 500',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    background: project.id === 'islam-master' ? '#071a14' : '#0d0d12',
                    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)',
                    border: '1px solid var(--light-border)',
                  }}
                >
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />

                  {/* Hover Floating View Button */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(15, 15, 20, 0.8)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2,
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Footer Tag & Category */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '4px 6px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: 'var(--red-accent)',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '13px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                        color: '#0e0e13',
                      }}
                    >
                      {project.title}
                    </span>
                  </div>
                  <span style={{ fontSize: '12px', color: '#777788', fontWeight: 600 }}>
                    {project.tag || `/${project.category}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 'ALL PROJECTS' Framer Button (Matches Video 00:18) */}
        <div style={{ marginTop: '72px', display: 'flex', justifyContent: 'flex-start' }}>
          <button
            onClick={() => openProjectModal(projectsList[0])}
            className="btn-framer-primary"
            style={{
              padding: '14px 32px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span>ALL PROJECTS</span>
            <span
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '4px',
                background: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ArrowUpRight size={15} />
            </span>
          </button>
        </div>
      </div>

      {/* Interactive Lightbox Gallery Modal for In-depth Specs & Full Screenshot Viewer */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(10, 10, 14, 0.94)',
            backdropFilter: 'blur(20px)',
            zIndex: 110,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            animation: 'fadeIn 0.25s ease',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              maxWidth: '960px',
              width: '100%',
              maxHeight: '92vh',
              overflowY: 'auto',
              background: '#13131a',
              color: '#ffffff',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '36px',
              position: 'relative',
              boxShadow: '0 24px 64px rgba(0, 0, 0, 0.7)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: '24px',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: 'var(--red-primary)',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  {selectedProject.badge} • {selectedProject.tag}
                </span>
                <h3
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 'clamp(26px, 3.5vw, 36px)',
                    fontWeight: 900,
                    margin: '4px 0 6px',
                    textTransform: 'uppercase',
                  }}
                >
                  {selectedProject.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#9d9db0', margin: 0 }}>
                  {selectedProject.subtitle}
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                style={{
                  width: '40px',
                  height: '40px',
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
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--red-accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
              >
                <X size={20} />
              </button>
            </div>

            {/* High-Res Gallery Viewer */}
            {selectedProject.galleryImages && selectedProject.galleryImages.length > 0 && (
              <div style={{ marginBottom: '28px' }}>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '460px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    background: '#0a0a0e',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src={selectedProject.galleryImages[currentGalleryIdx]}
                    alt={`${selectedProject.title} screenshot ${currentGalleryIdx + 1}`}
                    fill
                    style={{
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 10px 24px rgba(0,0,0,0.4))',
                    }}
                  />

                  {/* Previous / Next buttons */}
                  {selectedProject.galleryImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        aria-label="Previous image"
                        style={{
                          position: 'absolute',
                          left: '16px',
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'rgba(15, 15, 20, 0.75)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                        }}
                      >
                        <ChevronLeft size={22} />
                      </button>

                      <button
                        onClick={nextImage}
                        aria-label="Next image"
                        style={{
                          position: 'absolute',
                          right: '16px',
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'rgba(15, 15, 20, 0.75)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                        }}
                      >
                        <ChevronRight size={22} />
                      </button>
                    </>
                  )}

                  {/* Image Counter Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '16px',
                      background: 'rgba(0, 0, 0, 0.75)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    {currentGalleryIdx + 1} / {selectedProject.galleryImages.length}
                  </div>
                </div>

                {/* Thumbnails Row */}
                {selectedProject.galleryImages.length > 1 && (
                  <div
                    style={{
                      display: 'flex',
                      gap: '10px',
                      marginTop: '12px',
                      overflowX: 'auto',
                      paddingBottom: '6px',
                    }}
                  >
                    {selectedProject.galleryImages.map((thumb, idx) => (
                      <div
                        key={idx}
                        onClick={() => setCurrentGalleryIdx(idx)}
                        style={{
                          position: 'relative',
                          width: '80px',
                          height: '44px',
                          borderRadius: '6px',
                          overflow: 'hidden',
                          flexShrink: 0,
                          cursor: 'pointer',
                          border: currentGalleryIdx === idx ? '2px solid var(--red-accent)' : '1px solid rgba(255, 255, 255, 0.15)',
                          opacity: currentGalleryIdx === idx ? 1 : 0.6,
                          transition: 'all 0.2s',
                          background: '#0e0e14',
                        }}
                      >
                        <Image src={thumb} alt="thumb" fill style={{ objectFit: 'contain' }} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Description */}
            <p style={{ fontSize: '15px', color: '#c5c5d6', lineHeight: '1.65', marginBottom: '24px' }}>
              {selectedProject.description}
            </p>

            {/* Key Bullet Points */}
            <div style={{ marginBottom: '26px' }}>
              <h4
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '13px',
                  fontWeight: 800,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  marginBottom: '12px',
                }}
              >
                Key Architecture & Technical Highlights
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {selectedProject.bulletPoints.map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#a0a0b2' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--red-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
              {selectedProject.techStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-framer-primary"
                  style={{ padding: '10px 22px' }}
                >
                  <Github size={16} />
                  <span>VIEW ON GITHUB</span>
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="btn-framer-dark"
                style={{ padding: '10px 22px' }}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.projects-masonry-grid) {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          :global(.masonry-col-offset) {
            padding-top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
