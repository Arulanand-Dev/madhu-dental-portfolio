import React from 'react';
import { HeartHandshake, Stethoscope, Sparkles, FileDown, CheckCircle, GraduationCap } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenCV: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCV }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[var(--theme-surface)] border-b border-[var(--theme-border)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (Heading & Core Ethos) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono tracking-widest text-[var(--theme-primary)] uppercase font-semibold">
              02 / ABOUT ME & CLINICAL PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-[var(--theme-text-primary)] tracking-tight leading-tight">
              Care That Starts With <br />
              <span className="italic text-[var(--theme-primary)]">Understanding.</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--theme-text-secondary)] leading-relaxed">
              My background brings together hands-on dental care and clear, compassionate healthcare communication. With a Bachelor of Dental Surgery and overseas experience as a dental surgeon in general, restorative, and preventive dentistry, I am focused on delivering high-standard dental hygiene across London.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--theme-text-primary)] border-b border-[var(--theme-text-primary)] pb-1 hover:text-[var(--theme-primary)] hover:border-[var(--theme-primary)] transition-all"
              >
                <FileDown className="w-4 h-4 text-[var(--theme-primary)]" />
                <span>Download My Dental CV (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right Column (Clinical Pillars & Nursing Context) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface-alt)] space-y-2">
              <div className="w-9 h-9 rounded-lg bg-[var(--theme-surface)] border border-[var(--theme-border)] flex items-center justify-center text-[var(--theme-primary)]">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h3 className="font-serif-display font-medium text-base text-[var(--theme-text-primary)]">
                Empathetic Patient Management
              </h3>
              <p className="text-xs text-[var(--theme-text-secondary)] leading-relaxed">
                In my current dental nursing role at The Grange Dental, London, I reassure nervous patients, manage anxieties, and ensure comfortable, gentle chairside experiences.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface-alt)] space-y-2">
              <div className="w-9 h-9 rounded-lg bg-[var(--theme-surface)] border border-[var(--theme-border)] flex items-center justify-center text-[var(--theme-primary)]">
                <Stethoscope className="w-4 h-4" />
              </div>
              <h3 className="font-serif-display font-medium text-base text-[var(--theme-text-primary)]">
                Periodontal Prevention Focus
              </h3>
              <p className="text-xs text-[var(--theme-text-secondary)] leading-relaxed">
                Firm belief in proactive oral health education, ultrasonic plaque debridement, precise BPE screening, and encouraging long-term oral hygiene compliance.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface-alt)] space-y-2">
              <div className="w-9 h-9 rounded-lg bg-[var(--theme-surface)] border border-[var(--theme-border)] flex items-center justify-center text-[var(--theme-primary)]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="font-serif-display font-medium text-base text-[var(--theme-text-primary)]">
                Surgical & BDS Foundation
              </h3>
              <p className="text-xs text-[var(--theme-text-secondary)] leading-relaxed">
                Comprehensive academic grounding in dental surgery, histology, oral pathology, radiography, and endodontics from Chettinad Dental College.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface-alt)] space-y-2">
              <div className="w-9 h-9 rounded-lg bg-[var(--theme-surface)] border border-[var(--theme-border)] flex items-center justify-center text-[var(--theme-primary)]">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-serif-display font-medium text-base text-[var(--theme-text-primary)]">
                UK Practice Systems
              </h3>
              <p className="text-xs text-[var(--theme-text-secondary)] leading-relaxed">
                Proficient with Pearl Dental Software, digital charting, HTM 01-05 decontamination cycles, and adherence to Care Quality Commission (CQC) standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
