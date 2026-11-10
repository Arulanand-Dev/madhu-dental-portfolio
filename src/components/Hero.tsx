import React from 'react';
import { ShieldCheck, MapPin, Mail, Phone, ArrowUpRight, CheckCircle2, Award, FileDown } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  return (
    <section id="hero" className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Main Intro (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-[var(--theme-border)] bg-[var(--theme-surface-alt)] text-[var(--theme-text-secondary)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Dental Hygienist · London Practices</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-normal text-[var(--theme-text-primary)] leading-[1.15] tracking-tight">
              Madhu Bala <br />
              <span className="italic font-light text-[var(--theme-primary)]">Sermarajan.</span>
            </h1>

            <p className="text-base sm:text-lg text-[var(--theme-text-secondary)] leading-relaxed max-w-xl">
              GDC-registered Dental Hygienist with a <strong className="text-[var(--theme-text-primary)] font-medium">BDS qualification</strong> and overseas experience as a dental surgeon. Combining active UK dental nursing experience at <strong className="text-[var(--theme-text-primary)] font-medium">The Grange Dental, London</strong> with preventive hygiene, periodontal therapy, and attentive patient communication.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE_INFO.email}`}
                id="hero-contact-btn"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[var(--theme-primary)] hover:opacity-90 transition-all shadow-sm group"
              >
                <span>Let’s Connect</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenCV}
                id="hero-download-cv-btn"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold border border-[var(--theme-border)] bg-[var(--theme-surface)] hover:bg-[var(--theme-surface-alt)] text-[var(--theme-text-primary)] transition-all shadow-sm"
              >
                <FileDown className="w-4 h-4 text-[var(--theme-primary)]" />
                <span>Download Dental CV</span>
              </button>

              <a
                href={`tel:${PROFILE_INFO.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-3 rounded-lg text-xs font-medium text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{PROFILE_INFO.phone}</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[var(--theme-text-secondary)] border-t border-[var(--theme-border)]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Pearl Dental Software</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>HTM 01-05 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>English & Tamil</span>
              </div>
            </div>
          </div>

          {/* Clinical Credentials Card (Col 5) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-6 sm:p-7 shadow-lg relative overflow-hidden transition-all">
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[var(--theme-primary)]" />

              <div className="flex items-start justify-between gap-4 pb-5 border-b border-[var(--theme-border)]">
                <div>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[var(--theme-primary)] font-semibold">
                    REGULATORY STATUS
                  </span>
                  <div className="text-lg sm:text-xl font-serif-display font-medium text-[var(--theme-text-primary)] mt-1">
                    GDC-Registered Dental Hygienist
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>316565</span>
                </div>
              </div>

              {/* Status List */}
              <div className="py-5 space-y-4 text-sm">
                <div>
                  <div className="text-xs text-[var(--theme-text-secondary)] font-medium">Professional Qualifications</div>
                  <div className="font-semibold text-[var(--theme-text-primary)] mt-0.5">
                    Bachelor of Dental Surgery (BDS)
                  </div>
                  <div className="text-xs text-[var(--theme-text-secondary)]">Chettinad Dental College & Research Inst. (2016–2022)</div>
                </div>

                <div>
                  <div className="text-xs text-[var(--theme-text-secondary)] font-medium">Practice Location</div>
                  <div className="font-semibold text-[var(--theme-text-primary)] mt-0.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
                    <span>London SE1, United Kingdom</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-[var(--theme-text-secondary)] font-medium">Practice Availability</div>
                  <div className="mt-1.5 p-3 rounded-lg bg-[var(--theme-surface-alt)] border border-[var(--theme-border)]">
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Available Immediately</span>
                    </div>
                    <div className="text-xs text-[var(--theme-text-secondary)] mt-1">
                      Full-time · Part-time · Locum placements across Greater London
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-[var(--theme-border)] flex items-center justify-between text-xs text-[var(--theme-text-secondary)]">
                <span>Active UK Experience</span>
                <span className="font-medium text-[var(--theme-primary)]">The Grange Dental</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Credential Strip */}
      <div className="mt-14 border-y border-[var(--theme-border)] bg-[var(--theme-surface-alt)] py-4 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-y-3 gap-x-8 text-xs text-[var(--theme-text-secondary)]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[var(--theme-text-primary)]">GDC-registered:</span>
            <span className="font-mono font-medium text-[var(--theme-primary)]">316565</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[var(--theme-text-primary)]">Location:</span>
            <span>London SE1 & Central Clinics</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[var(--theme-text-primary)]">Patient Communication:</span>
            <span>English (IELTS 7.0) & Tamil</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[var(--theme-text-primary)]">Core Software:</span>
            <span>Pearl Dental · Digital Records</span>
          </div>
        </div>
      </div>
    </section>
  );
};
