import React, { useState, useEffect } from 'react';
import { ThemeMode, ClinicalCase } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { VideosSection } from './components/VideosSection';
import { WritingSection } from './components/WritingSection';
import { ClinicalPortfolioSection } from './components/ClinicalPortfolioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseModal } from './components/CaseModal';
import { CVModal } from './components/CVModal';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('portfolio_theme') as ThemeMode | null;
    return saved || 'clinical-teal';
  });

  const [selectedCase, setSelectedCase] = useState<ClinicalCase | null>(null);
  const [isCVOpen, setIsCVOpen] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  // Support direct deep link to CV (e.g. for clean mobile/desktop viewing)
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#cv') {
        setIsCVOpen(true);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectTheme = (newTheme: ThemeMode) => {
    setTheme(newTheme);
  };

  return (
    <>
      <div id="main-app-content" className="min-h-screen flex flex-col selection:bg-[var(--theme-primary)] selection:text-white">
        {/* Sticky Accessible Navigation with Theme Selector */}
        <Navbar
          currentTheme={theme}
          onSelectTheme={handleSelectTheme}
          onOpenCV={() => setIsCVOpen(true)}
        />

        <main id="main" className="flex-1">
          {/* 1. Hero & Regulatory Credentials */}
          <Hero onOpenCV={() => setIsCVOpen(true)} />

          {/* 2. Clinical Experience (MOVED UP per user request) */}
          <ExperienceSection />

          {/* 3. About Me & Patient Care Philosophy */}
          <AboutSection onOpenCV={() => setIsCVOpen(true)} />

          {/* 4. Skills, BDS Degree & Compliance */}
          <SkillsSection />

          {/* 5. Clinical Learning Videos (Learn BDS With Me) */}
          <VideosSection />

          {/* 6. Published Healthcare Writing (iCliniq) */}
          <WritingSection />

          {/* 7. Clinical Portfolio Cases & Pictures (MOVED DOWN per user request) */}
          <ClinicalPortfolioSection onSelectCase={(c) => setSelectedCase(c)} />

          {/* 8. Contact & London Practice Inquiries */}
          <ContactSection onOpenCV={() => setIsCVOpen(true)} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Case Lightbox & Clinical Inspector Modal */}
        <CaseModal
          caseItem={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      </div>

      {/* Printable & Downloadable Dental CV Modal (rendered outside main-app-content for clean print isolation) */}
      <CVModal
        isOpen={isCVOpen}
        onClose={() => {
          setIsCVOpen(false);
          if (window.location.hash === '#cv') {
            history.pushState('', document.title, window.location.pathname + window.location.search);
          }
        }}
      />
    </>
  );
}
