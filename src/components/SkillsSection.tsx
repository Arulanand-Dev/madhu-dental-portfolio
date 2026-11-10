import React from 'react';
import { Award, CheckCircle2, BookOpen, ShieldCheck, Languages, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-[var(--theme-surface-alt)]/40 border-b border-[var(--theme-border)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Qualifications Column (Col 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-[var(--theme-primary)] uppercase font-semibold">
                03 / SKILLS & EDUCATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-[var(--theme-text-primary)] tracking-tight mt-2">
                Clinical Knowledge. <br />
                <span className="italic text-[var(--theme-primary)]">Patient-Focused Approach.</span>
              </h2>
            </div>

            {/* Academic Qualification Box */}
            <div className="p-5 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--theme-primary)] uppercase font-semibold">
                <BookOpen className="w-4 h-4" />
                <span>Primary Degree</span>
              </div>
              <div>
                <div className="text-lg font-serif-display font-medium text-[var(--theme-text-primary)]">
                  Bachelor of Dental Surgery (BDS)
                </div>
                <div className="text-xs font-medium text-[var(--theme-primary)] mt-1">
                  Chettinad Dental College & Research Institute
                </div>
                <div className="text-xs text-[var(--theme-text-secondary)] mt-0.5">
                  2016 – 2022 · 5-Year Comprehensive Degree & Internship
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--theme-border)] space-y-2 text-xs text-[var(--theme-text-secondary)]">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[var(--theme-text-primary)]">Basic Life Support (BLS):</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400">American Heart Assoc.</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[var(--theme-text-primary)]">IELTS Academic:</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400">Overall Band 7.0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[var(--theme-text-primary)]">GDC Registration:</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400">Dental Hygienist 316565</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Skills Categories (Col 8) */}
          <div className="lg:col-span-8 space-y-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={cat.title}
                className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-6 shadow-xs"
              >
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--theme-border)]">
                  <h3 className="font-serif-display font-medium text-lg text-[var(--theme-text-primary)] flex items-center gap-2">
                    <span className="font-mono text-xs text-[var(--theme-primary)]">0{idx + 1}.</span>
                    <span>{cat.title}</span>
                  </h3>
                  <span className="text-xs text-[var(--theme-text-secondary)] font-mono">
                    {cat.skills.length} competencies
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-[var(--theme-surface-alt)] border border-[var(--theme-border)] hover:border-[var(--theme-primary)]/40 transition-colors"
                    >
                      <div className="flex items-center gap-2 font-medium text-xs sm:text-sm text-[var(--theme-text-primary)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--theme-primary)] flex-shrink-0" />
                        <span>{skill.name}</span>
                      </div>
                      {skill.note && (
                        <div className="text-[11px] text-[var(--theme-text-secondary)] mt-1 ml-5.5 leading-snug">
                          {skill.note}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
