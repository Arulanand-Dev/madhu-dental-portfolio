import React from 'react';
import { ArrowUp, Heart, ShieldCheck } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--theme-border)] bg-[var(--theme-surface)] py-10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-serif-display font-medium text-base text-[var(--theme-text-primary)]">
              {PROFILE_INFO.name}, {PROFILE_INFO.suffix}
            </div>
            <div className="text-xs text-[var(--theme-text-secondary)] flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span>GDC Registered Dental Hygienist (316565)</span>
              <span>·</span>
              <span>Based in London, UK</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-[var(--theme-text-secondary)]">
            <a
              href={PROFILE_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--theme-primary)] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.youtube.com/@learnbdswithme"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--theme-primary)] transition-colors"
            >
              YouTube ↗
            </a>
            <a
              href="mailto:madhuserma28@gmail.com"
              className="hover:text-[var(--theme-primary)] transition-colors"
            >
              Email ↗
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-[var(--theme-border)] bg-[var(--theme-surface-alt)] hover:text-[var(--theme-primary)] hover:border-[var(--theme-primary)] transition-all ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--theme-border)] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[var(--theme-text-secondary)]">
          <p>© {new Date().getFullYear()} Madhu Bala Sermarajan. All clinical case materials and documentation reserved.</p>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Strict adherence to GDC Standards & HTM 01-05 Decontamination</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
