'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Smartphone, Code, Layers, Play, Check } from 'lucide-react';

export default function WorkstationBannerWidget() {
  const [activeTab, setActiveTab] = useState<'monefii' | 'fittrack' | 'islam'>('monefii');

  const demoScreens = {
    monefii: {
      title: 'Monefii AI Expense Scanner',
      image: '/project_images/monefii (ai expense tracker) images/Frame 176.png',
      codeSnippet: `// Monefii Flutter Clean Architecture
class ScanReceiptUseCase {
  final ReceiptRepository repository;
  ScanReceiptUseCase(this.repository);

  Future<ReceiptModel> call(File image) async {
    final rawText = await OcrService.extractText(image);
    final parsed = AiParser.extractExpenseData(rawText);
    return repository.saveExpense(parsed);
  }
}`,
    },
    fittrack: {
      title: 'FitTrack Pro GPS Runner',
      image: '/project_images/fittrack pro/Frame 10.png',
      codeSnippet: `// FitTrack GPS Sensor Stream
class RunTrackerController extends GetxController {
  final GeolocatorPlatform geolocator = GeolocatorPlatform.instance;
  var polylineCoordinates = <LatLng>[].obs;
  var totalDistanceKm = 0.0.obs;

  void startTracking() {
    geolocator.getPositionStream().listen((pos) {
      polylineCoordinates.add(LatLng(pos.latitude, pos.longitude));
    });
  }
}`,
    },
    islam: {
      title: 'Islam Master Qibla Sensor',
      image: '/project_images/Islam_Master/dark.png',
      codeSnippet: `// Qibla Magnetometer Azimuth Math
double calculateQiblaAngle(double lat, double lng) {
  const meccaLat = 21.4225;
  const meccaLng = 39.8262;
  double phiK = radians(meccaLat);
  double lambdaK = radians(meccaLng);
  double phi = radians(lat);
  double lambda = radians(lng);
  return atan2(sin(lambdaK - lambda), cos(phi)*tan(phiK) - sin(phi)*cos(lambdaK - lambda));
}`,
    },
  };

  const current = demoScreens[activeTab];

  return (
    <section
      style={{
        background: '#0d0d12',
        color: '#ffffff',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '90px 32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Cinematic Dual-Monitor Workstation Frame (Matches Video 00:23 - 00:24) */}
        <div
          style={{
            background: '#14141d',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(0, 0, 0, 0.7)',
          }}
        >
          {/* Top Bar with Simulator Selector */}
          <div
            style={{
              padding: '16px 24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              background: '#0f0f15',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            {/* Terminal Window Dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f56' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#27c93f' }} />
              <span
                style={{
                  fontFamily: 'monospace',
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginLeft: '12px',
                }}
              >
                flutter_production_workspace: ~/arham-portfolio/flutter_core
              </span>
            </div>

            {/* App Demo Switcher */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { id: 'monefii', label: 'Monefii (AI Tracker)' },
                { id: 'fittrack', label: 'FitTrack Pro (Sensors)' },
                { id: 'islam', label: 'Islam Master (Qibla)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  style={{
                    background: activeTab === tab.id ? 'var(--red-accent)' : 'rgba(255, 255, 255, 0.05)',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '6px 14px',
                    borderRadius: '6px',
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Split Workstation: Code Editor (Left) & Mobile Simulator (Right) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              minHeight: '440px',
            }}
            className="workstation-split-grid"
          >
            {/* Left: Code IDE */}
            <div
              style={{
                padding: '28px',
                borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#0d0d13',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: '#ff4d6d' }}>
                  <Code size={16} />
                  <span style={{ fontFamily: 'monospace', fontSize: '12px', fontWeight: 700 }}>
                    lib/features/{activeTab}/architecture_controller.dart
                  </span>
                </div>

                <pre
                  style={{
                    fontFamily: 'Consolas, Monaco, "Courier New", monospace',
                    fontSize: '13px',
                    color: '#e2e2ee',
                    lineHeight: '1.6',
                    overflowX: 'auto',
                    margin: 0,
                  }}
                >
                  {current.codeSnippet}
                </pre>
              </div>

              {/* Status footer inside IDE */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '16px',
                  marginTop: '20px',
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.5)',
                }}
              >
                <span style={{ color: '#22c55e', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Check size={14} /> Zero Lint Errors
                </span>
                <span>•</span>
                <span>Hot Reload Active</span>
                <span>•</span>
                <span>60 FPS Rendering Pipeline</span>
              </div>
            </div>

            {/* Right: Live Mobile Simulator Screen */}
            <div
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'radial-gradient(circle at center, #1b1b26 0%, #0d0d12 100%)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '240px',
                  height: '380px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#0a0a0d',
                  border: '6px solid #282836',
                  boxShadow: '0 20px 48px rgba(0, 0, 0, 0.6)',
                }}
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>

              <span
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  marginTop: '16px',
                }}
              >
                {current.title}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.workstation-split-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
