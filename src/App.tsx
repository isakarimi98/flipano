import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { ThreeDShowcase } from './components/ThreeDShowcase';
import { ContentSources } from './components/ContentSources';
import { UseCases } from './components/UseCases';
import { CustomizationPanel } from './components/CustomizationPanel';
import { ViewerToolbarDemo } from './components/ViewerToolbarDemo';
import { Workflow } from './components/Workflow';
import { ResponsiveDevices } from './components/ResponsiveDevices';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { FloatingCTA } from './components/FloatingCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-flipano-pattern relative text-white flex flex-col selection:bg-[#FF7A00] selection:text-white">
      {/* Subtle architectural dot grid texture layer for depth */}
      <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none"></div>

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        {/* 1. Hero Section (Single-line headline + authentic 2-page digital album simulator) */}
        <Hero />

        {/* 2. Trust Bar / Key Highlights */}
        <TrustBar />

        {/* 3. Problem / Solution Section (Streamlined comparison) */}
        <ProblemSolution />

        {/* 4. Key Features (8 items) */}
        <Features />

        {/* 5. 3D Showcase (Technical pillars) */}
        <ThreeDShowcase />

        {/* 6. Content Sources */}
        <ContentSources />

        {/* 7. Use Cases (6 categories) */}
        <UseCases />

        {/* 8. Customization / WordPress Admin Panel */}
        <CustomizationPanel />

        {/* 9. Viewer Toolbar Showcase */}
        <ViewerToolbarDemo />

        {/* 10. 3-Step Workflow */}
        <Workflow />

        {/* 11. Responsive Devices (Preserved exactly as requested) */}
        <ResponsiveDevices />

        {/* 12. FAQ */}
        <FAQ />

        {/* 13. Final Summary Section */}
        <FinalCTA />
      </main>

      {/* The ONLY Zhaket Buy Button: Fixed Floating CTA at bottom-left */}
      <FloatingCTA />

      {/* 14. Footer */}
      <Footer />
    </div>
  );
}
