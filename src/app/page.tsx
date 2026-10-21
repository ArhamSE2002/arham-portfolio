import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroWidget from '@/components/widgets/HeroWidget';
import LiveFlutterSimulatorWidget from '@/components/widgets/LiveFlutterSimulatorWidget';
import ProjectsWidget from '@/components/widgets/ProjectsWidget';
import ExperienceWidget from '@/components/widgets/ExperienceWidget';
import SkillsMatrixWidget from '@/components/widgets/SkillsMatrixWidget';
import CertificationsWidget from '@/components/widgets/CertificationsWidget';
import ContactWidget from '@/components/widgets/ContactWidget';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Ambient Red & Black Mesh Background */}
      <div className="ambient-bg" aria-hidden="true" />

      {/* Floating Frosted Glass Navbar */}
      <Navbar />

      {/* Modular Widget Stack */}
      <HeroWidget />
      <LiveFlutterSimulatorWidget />
      <ProjectsWidget />
      <ExperienceWidget />
      <SkillsMatrixWidget />
      <CertificationsWidget />
      <ContactWidget />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
