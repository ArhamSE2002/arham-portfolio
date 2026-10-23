'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Clock, X, BookOpen } from 'lucide-react';
import { insightArticles } from '@/data/portfolioData';
import { InsightArticle } from '@/types/portfolio';

export default function InsightsWidget() {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  return (
    <section
      id="insights-section"
      style={{
        background: 'var(--light-bg)',
        borderBottom: '1px solid var(--light-border)',
        padding: '120px 32px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <div className="eyebrow-tag">
            <span style={{ color: 'var(--red-accent)' }}>•</span>
            <span>TECH INSIGHTS</span>
          </div>

          <h2 className="editorial-heading" style={{ margin: 0 }}>
            LATEST TECH <br />
            <span className="muted-span">& ARCHITECTURE</span> <br />
            INSIGHTS
          </h2>
        </div>

        {/* Articles Grid (Matches Video 00:32 - 00:33) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}
          className="insights-grid"
        >
          {insightArticles.slice(0, 3).map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              style={{
                background: '#ffffff',
                border: '1px solid var(--light-border)',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: 'var(--shadow-card)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 48px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
            >
              {/* Image Frame with Category Pill */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '220px',
                  background: '#0d0d12',
                }}
              >
                <Image src={article.image} alt={article.title} fill style={{ objectFit: 'cover' }} />

                <span
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'var(--red-accent)',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '11px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                  }}
                >
                  {article.category}
                </span>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flex: 1,
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '12px',
                      color: '#888899',
                      marginBottom: '10px',
                    }}
                  >
                    <span>{article.date}</span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={13} /> {article.readTime}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '20px',
                      fontWeight: 800,
                      color: '#0e0e13',
                      lineHeight: '1.3',
                      marginBottom: '12px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {article.title}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: 'var(--light-text-body)', lineHeight: '1.55', margin: 0 }}>
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer Link */}
                <div
                  style={{
                    borderTop: '1px solid var(--light-border)',
                    paddingTop: '16px',
                    marginTop: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#0e0e13' }}>
                    Written by {article.author}
                  </span>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'rgba(234, 56, 32, 0.1)',
                      color: 'var(--red-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
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
          }}
          onClick={() => setSelectedArticle(null)}
        >
          <div
            style={{
              maxWidth: '720px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: '#ffffff',
              color: '#0e0e13',
              borderRadius: '12px',
              padding: '40px',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span
                style={{
                  background: 'var(--red-accent)',
                  color: '#ffffff',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                }}
              >
                {selectedArticle.category}
              </span>

              <button
                onClick={() => setSelectedArticle(null)}
                style={{
                  background: '#f1f0eb',
                  border: 'none',
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

            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '28px',
                fontWeight: 900,
                textTransform: 'uppercase',
                lineHeight: '1.2',
                marginBottom: '16px',
              }}
            >
              {selectedArticle.title}
            </h2>

            <div style={{ fontSize: '13px', color: '#777788', marginBottom: '24px' }}>
              By {selectedArticle.author} • {selectedArticle.date} • {selectedArticle.readTime}
            </div>

            <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#444455', marginBottom: '20px' }}>
              {selectedArticle.excerpt}
            </p>

            <div style={{ padding: '20px', borderRadius: '8px', background: '#f6f5f0', border: '1px solid #e5e4de', fontSize: '14px', lineHeight: '1.6', color: '#333342' }}>
              In real-world production Flutter environments, profiling rebuild bottlenecks is critical. We isolate states with granular listeners, leverage const constructors, and separate business logic from UI layouts to achieve buttery smooth 60 FPS transitions.
            </div>

            <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setSelectedArticle(null)} className="btn-framer-primary">
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.insights-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
