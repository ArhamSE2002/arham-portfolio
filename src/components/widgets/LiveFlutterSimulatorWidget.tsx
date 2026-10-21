'use client';

import React, { useState } from 'react';
import {
  Smartphone,
  Code2,
  Scan,
  Compass,
  CheckCircle,
  TrendingDown,
  RotateCcw,
  Sparkles,
  Zap,
  ArrowRight,
} from 'lucide-react';

type ActiveApp = 'expense' | 'islam' | 'worksphere';

export default function LiveFlutterSimulatorWidget() {
  const [activeApp, setActiveApp] = useState<ActiveApp>('expense');
  
  // Interactive Simulator States
  const [tasbeehCount, setTasbeehCount] = useState(33);
  const [scanning, setScanning] = useState(false);
  const [scannedReceipt, setScannedReceipt] = useState(false);
  const [proposalAccepted, setProposalAccepted] = useState(false);

  const triggerScan = () => {
    setScanning(true);
    setScannedReceipt(false);
    setTimeout(() => {
      setScanning(false);
      setScannedReceipt(true);
    }, 1200);
  };

  const codeSnippets: Record<ActiveApp, string> = {
    expense: `// Flutter Clean Architecture + GetX Controller
class ExpenseController extends GetxController {
  final RxDouble monthlyBudget = 2500.0.obs;
  final RxDouble currentSpend = 1420.50.obs;
  final RxList<ExpenseItem> recentTransactions = <ExpenseItem>[].obs;

  // AI OCR Receipt Processing
  Future<void> processReceipt(File imageFile) async {
    final ocrData = await MLVisionService.scanReceipt(imageFile);
    final expense = ExpenseItem(
      title: ocrData.merchantName,
      amount: ocrData.detectedAmount,
      date: DateTime.now(),
      category: AICategorizer.predict(ocrData.merchantName),
    );
    recentTransactions.insert(0, expense);
    currentSpend.value += expense.amount;
  }
}`,
    islam: `// Islam Master: Sensor-Fused Qibla & Local Storage
class QiblaController extends GetxController {
  final RxDouble heading = 254.2.obs;
  final RxInt tasbeehCounter = 0.obs;
  final box = GetStorage();

  void incrementTasbeeh() {
    tasbeehCounter.value++;
    HapticFeedback.lightImpact(); // Subtle haptics
    box.write('tasbeeh_total', tasbeehCounter.value);
  }

  void resetCounter() {
    tasbeehCounter.value = 0;
    box.write('tasbeeh_total', 0);
  }
}`,
    worksphere: `// WorkSphere: Supabase Real-time Job Stream
class WorkSphereService {
  final SupabaseClient supabase = Supabase.instance.client;

  Stream<List<JobListing>> streamAvailableProposals() {
    return supabase
      .from('freelance_jobs')
      .stream(primaryKey: ['id'])
      .eq('status', 'open')
      .order('created_at', ascending: false)
      .map((data) => data.map((json) => JobListing.fromJson(json)).toList());
  }
}`,
  };

  return (
    <section
      id="simulator"
      style={{
        padding: '90px 24px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="section-container" style={{ padding: 0 }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Interactive Flutter Sandbox</span>
          <h2 className="section-title">
            Experience My Apps <span className="gradient-text-red">In Real-Time</span>
          </h2>
          <p className="section-description">
            Interact with live simulations of three production mobile applications I built using Flutter, Dart, and Clean Architecture. Test actual logic, state transitions, and responsive widgets.
          </p>
        </div>

        {/* Tab Controls */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => setActiveApp('expense')}
            className={`filter-tab ${activeApp === 'expense' ? 'active' : ''}`}
          >
            AI Expense Tracker
          </button>
          <button
            onClick={() => setActiveApp('islam')}
            className={`filter-tab ${activeApp === 'islam' ? 'active' : ''}`}
          >
            Islam Master (Quran & Qibla)
          </button>
          <button
            onClick={() => setActiveApp('worksphere')}
            className={`filter-tab ${activeApp === 'worksphere' ? 'active' : ''}`}
          >
            WorkSphere Marketplace
          </button>
        </div>

        {/* Simulator Studio Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '36px',
            alignItems: 'center',
          }}
          className="sim-grid"
        >
          {/* Left: Code Snippet & Architectural Overview */}
          <div
            className="glass-card"
            style={{
              padding: '28px',
              borderRadius: '24px',
              border: '1px solid var(--border-medium)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Code Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)', marginLeft: '8px', fontFamily: 'monospace' }}>
                    {activeApp === 'expense' ? 'expense_controller.dart' : activeApp === 'islam' ? 'qibla_service.dart' : 'supabase_repository.dart'}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--red-primary)',
                    background: 'rgba(255, 42, 75, 0.1)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    border: '1px solid var(--border-red)',
                  }}
                >
                  DART 3.x • CLEAN ARCH
                </div>
              </div>

              {/* Code Window */}
              <pre
                style={{
                  background: 'rgba(5, 5, 8, 0.85)',
                  padding: '18px',
                  borderRadius: '12px',
                  fontFamily: 'monospace',
                  fontSize: '12.5px',
                  lineHeight: '1.65',
                  color: '#e2e8f0',
                  overflowX: 'auto',
                  border: '1px solid var(--border-subtle)',
                  maxHeight: '320px',
                }}
              >
                <code>{codeSnippets[activeApp]}</code>
              </pre>
            </div>

            {/* Architecture Explanatory Notes */}
            <div
              style={{
                marginTop: '20px',
                padding: '14px 18px',
                borderRadius: '14px',
                background: 'rgba(255, 42, 75, 0.05)',
                border: '1px solid var(--border-red)',
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '13px', color: '#ffffff', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Zap size={14} style={{ color: 'var(--red-primary)' }} />
                <span>
                  {activeApp === 'expense' && 'High-Speed OCR & Real-Time Spend Velocity'}
                  {activeApp === 'islam' && 'Device Magnetometer Fusion & Offline Persistence'}
                  {activeApp === 'worksphere' && 'Low-Latency WebSockets via Supabase Realtime'}
                </span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>
                {activeApp === 'expense' && 'Trained receipt parsing model extracts totals in milliseconds, immediately recalculating budget rollover.'}
                {activeApp === 'islam' && 'Smooth 60 FPS compass dampening algorithm prevents jitter while keeping battery consumption minimal.'}
                {activeApp === 'worksphere' && 'Multi-tenant database schema ensures zero data leak between candidate profiles and recruiter hiring panels.'}
              </p>
            </div>
          </div>

          {/* Right: Phone Hardware Frame Simulator */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '320px',
                height: '560px',
                background: '#09090d',
                borderRadius: '44px',
                padding: '12px',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px var(--red-glow)',
                border: '3px solid #262635',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Phone Dynamic Island / Camera Notch */}
              <div
                style={{
                  position: 'absolute',
                  top: '18px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '90px',
                  height: '18px',
                  background: '#000000',
                  borderRadius: '20px',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1c1c24' }} />
              </div>

              {/* Screen Area */}
              <div
                style={{
                  flex: 1,
                  background: '#0e0e15',
                  borderRadius: '34px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '24px 16px 16px',
                  position: 'relative',
                }}
              >
                {/* Status Bar */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '10px',
                    color: 'var(--text-muted)',
                    marginBottom: '16px',
                    padding: '0 4px',
                  }}
                >
                  <span style={{ fontWeight: 600 }}>9:41 AM</span>
                  <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                    <div style={{ width: '12px', height: '6px', border: '1px solid var(--text-muted)', borderRadius: '2px' }} />
                  </div>
                </div>

                {/* APP 1: AI EXPENSE TRACKER */}
                {activeApp === 'expense' && (
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Monthly Budget Pace
                    </div>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', margin: '4px 0 12px' }}>
                      $1,420<span style={{ fontSize: '15px', color: 'var(--text-muted)' }}> / $2,500</span>
                    </div>

                    {/* Pace Bar */}
                    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden', marginBottom: '14px' }}>
                      <div style={{ width: '58%', height: '100%', background: 'linear-gradient(90deg, #10b981, var(--red-primary))' }} />
                    </div>

                    {/* Interactive OCR Button */}
                    <button
                      onClick={triggerScan}
                      disabled={scanning}
                      style={{
                        background: 'linear-gradient(135deg, var(--red-primary), var(--red-deep))',
                        border: 'none',
                        color: '#ffffff',
                        padding: '10px',
                        borderRadius: '12px',
                        fontWeight: 700,
                        fontSize: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px var(--red-glow)',
                        marginBottom: '14px',
                      }}
                    >
                      <Scan size={14} />
                      <span>{scanning ? 'OCR Scanning Receipt...' : 'Tap: Scan New Receipt'}</span>
                    </button>

                    {/* Recent Transactions List */}
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '8px' }}>
                      Recent Activity
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, overflowY: 'auto' }}>
                      {scannedReceipt && (
                        <div
                          style={{
                            background: 'rgba(255, 42, 75, 0.15)',
                            border: '1px solid var(--border-red)',
                            borderRadius: '10px',
                            padding: '8px 10px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            animation: 'float-subtle 0.3s ease',
                          }}
                        >
                          <div>
                            <div style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff' }}>Target Store (OCR Scanned)</div>
                            <div style={{ fontSize: '9px', color: 'var(--red-primary)' }}>Autofilled • Groceries</div>
                          </div>
                          <span style={{ fontSize: '12px', fontWeight: 800, color: '#ff4d6d' }}>-$42.80</span>
                        </div>
                      )}

                      <div
                        style={{
                          background: 'rgba(255, 255, 255, 0.04)',
                          borderRadius: '10px',
                          padding: '8px 10px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '11px', fontWeight: 600, color: '#ffffff' }}>AWS Cloud Renewal</div>
                          <div style={{ fontSize: '9px', color: 'var(--text-muted)' }}>Upcoming Tomorrow</div>
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-secondary)' }}>-$64.00</span>
                      </div>

                      <div
                        style={{
                          background: 'rgba(255, 255, 255, 0.04)',
                          borderRadius: '10px',
                          padding: '8px 10px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '11px', fontWeight: 600, color: '#ffffff' }}>Figma Subscription</div>
                          <div style={{ fontSize: '9px', color: 'var(--text-muted)' }}>Software • Recurring</div>
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-secondary)' }}>-$15.00</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* APP 2: ISLAM MASTER */}
                {activeApp === 'islam' && (
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center' }}>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                      Makkah Direction
                    </div>

                    {/* Qibla Direction Compass Circle */}
                    <div
                      style={{
                        width: '90px',
                        height: '90px',
                        borderRadius: '50%',
                        border: '2px dashed var(--border-red)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '14px',
                        position: 'relative',
                      }}
                    >
                      <Compass size={36} style={{ color: 'var(--red-primary)', transform: 'rotate(45deg)' }} />
                      <span style={{ position: 'absolute', bottom: '6px', fontSize: '9px', fontWeight: 700, color: '#10b981' }}>254° W</span>
                    </div>

                    {/* Interactive Tasbeeh Counter */}
                    <div
                      style={{
                        width: '100%',
                        background: 'rgba(255, 255, 255, 0.04)',
                        borderRadius: '14px',
                        padding: '12px',
                        textAlign: 'center',
                        marginBottom: '12px',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <div style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>SubhanAllah Counter</div>
                      <div style={{ fontSize: '32px', fontWeight: 900, color: 'var(--red-primary)', margin: '2px 0' }}>
                        {tasbeehCount}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                        <button
                          onClick={() => setTasbeehCount((prev) => prev + 1)}
                          style={{
                            background: 'var(--red-primary)',
                            border: 'none',
                            color: '#ffffff',
                            padding: '6px 16px',
                            borderRadius: '8px',
                            fontWeight: 700,
                            fontSize: '11px',
                            cursor: 'pointer',
                          }}
                        >
                          + Count
                        </button>
                        <button
                          onClick={() => setTasbeehCount(0)}
                          style={{
                            background: 'transparent',
                            border: '1px solid var(--border-subtle)',
                            color: 'var(--text-muted)',
                            padding: '6px 10px',
                            borderRadius: '8px',
                            fontSize: '11px',
                            cursor: 'pointer',
                          }}
                        >
                          <RotateCcw size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Daily Quote Banner */}
                    <div
                      style={{
                        background: 'rgba(255, 42, 75, 0.06)',
                        border: '1px solid var(--border-red)',
                        borderRadius: '10px',
                        padding: '8px 10px',
                        fontSize: '9.5px',
                        color: '#ffffff',
                        textAlign: 'center',
                        lineHeight: '1.4',
                      }}
                    >
                      &quot;And He found you lost and guided you.&quot; <br />
                      <span style={{ color: 'var(--red-primary)', fontWeight: 700 }}>[Quran 93:7]</span>
                    </div>
                  </div>
                )}

                {/* APP 3: WORKSPHERE */}
                {activeApp === 'worksphere' && (
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                      Supabase Real-Time Feed
                    </div>

                    {/* Status Pill */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'rgba(16, 185, 129, 0.1)',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        fontSize: '9.5px',
                        color: '#10b981',
                        fontWeight: 600,
                        marginBottom: '12px',
                      }}
                    >
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                      <span>Live WebSocket Connected</span>
                    </div>

                    {/* Job Card */}
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '12px',
                        padding: '10px',
                        marginBottom: '10px',
                      }}
                    >
                      <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#ffffff' }}>
                        Senior Flutter App Architect
                      </div>
                      <div style={{ fontSize: '9.5px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                        Fintech Platform • $4,500 / month
                      </div>
                      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '8px' }}>
                        <span style={{ fontSize: '8px', padding: '2px 5px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px' }}>Flutter</span>
                        <span style={{ fontSize: '8px', padding: '2px 5px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px' }}>Supabase</span>
                        <span style={{ fontSize: '8px', padding: '2px 5px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px' }}>Clean Arch</span>
                      </div>

                      <button
                        onClick={() => setProposalAccepted(true)}
                        style={{
                          width: '100%',
                          background: proposalAccepted ? '#10b981' : 'var(--red-primary)',
                          border: 'none',
                          color: '#ffffff',
                          padding: '6px',
                          borderRadius: '8px',
                          fontWeight: 700,
                          fontSize: '10.5px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '4px',
                        }}
                      >
                        {proposalAccepted ? (
                          <>
                            <CheckCircle size={12} />
                            <span>Proposal Submitted</span>
                          </>
                        ) : (
                          <>
                            <span>Submit 1-Click Proposal</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Second Job Item */}
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '12px',
                        padding: '8px 10px',
                        fontSize: '10px',
                        color: 'var(--text-muted)',
                      }}
                    >
                      <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '10.5px' }}>Healthcare Dashboard Integration</div>
                      <div>REST API Sync • Fixed Price</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.sim-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
