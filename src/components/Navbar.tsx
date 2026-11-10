import React, { useState } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { ThemeSelector } from './ThemeSelector';
import { ThemeMode } from '../types';
import { PROFILE_INFO } from '../data/portfolioData';

interface NavbarProps {
  currentTheme: ThemeMode;
  onSelectTheme: (theme: ThemeMode) => void;
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTheme, onSelectTheme, onOpenCV }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Videos', href: '#videos' },
    { name: 'Writing', href: '#writing' },
    { name: 'Clinical Cases', href: '#cases' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--theme-surface)]/95 border-b border-[var(--theme-border)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#main"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)] rounded-lg p-1 shrink-0"
          aria-label="Madhu Bala Sermarajan - Dental Hygienist Portfolio"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface-alt)] flex items-center justify-center text-[var(--theme-primary)] font-serif-display text-lg sm:text-xl font-medium shadow-sm group-hover:scale-105 transition-transform shrink-0">
            MB
          </div>
          <div className="flex flex-col justify-center text-left">
            <div className="font-serif-display font-medium text-base sm:text-lg tracking-tight text-[var(--theme-text-primary)] group-hover:text-[var(--theme-primary)] transition-colors whitespace-nowrap leading-snug">
              Madhu Bala
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[var(--theme-text-secondary)] uppercase flex items-center gap-1.5 whitespace-nowrap leading-none mt-0.5">
              <span>SERMARAJAN · BDS</span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold tracking-normal font-sans">
                GDC 316565
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-medium text-[var(--theme-text-secondary)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[var(--theme-primary)] transition-colors py-1 focus:outline-none focus:underline whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions & Theme */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <ThemeSelector currentTheme={currentTheme} onSelectTheme={onSelectTheme} />

          <button
            onClick={onOpenCV}
            id="nav-cv-btn"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-[var(--theme-border)] bg-[var(--theme-surface-alt)] hover:border-[var(--theme-primary)] text-[var(--theme-text-primary)] transition-all shadow-sm shrink-0 whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
            <span>View CV</span>
          </button>

          <a
            href="mailto:madhuserma28@gmail.com"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[var(--theme-primary)] hover:opacity-90 transition-all shadow-sm shrink-0 whitespace-nowrap"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[var(--theme-text-secondary)] hover:bg-[var(--theme-surface-alt)] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--theme-border)] bg-[var(--theme-surface)] px-4 py-4 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[var(--theme-surface-alt)] text-[var(--theme-text-primary)] font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[var(--theme-border)] flex flex-col gap-2 text-xs">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full py-2 px-3 rounded-lg border border-[var(--theme-border)] bg-[var(--theme-surface-alt)] flex items-center justify-center gap-2 font-medium text-[var(--theme-text-primary)]"
            >
              <FileText className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
              <span>Download & View Official CV</span>
            </button>
            <div className="flex justify-between items-center px-1 text-[var(--theme-text-secondary)]">
              <span>{PROFILE_INFO.phone}</span>
              <span>{PROFILE_INFO.location}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
