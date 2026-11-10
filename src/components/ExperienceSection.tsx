import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Filter, Building2, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { ExperienceItem } from '../types';

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'UK Practice' | 'Overseas Hospital'>('all');
  const [expandedId, setExpandedId] = useState<string>('grange-dental');

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (filter === 'all') return true;
    if (filter === 'UK Practice') return exp.type === 'UK Practice';
    if (filter === 'Overseas Hospital') return exp.type === 'Overseas Hospital' || exp.type === 'Internship' || exp.type === 'Dental Assistant';
    return true;
  });

  return (
    <section id="experience" className="py-16 sm:py-20 bg-[var(--theme-surface-alt)]/60 border-b border-[var(--theme-border)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[var(--theme-border)]">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest text-[var(--theme-primary)] uppercase font-semibold">
                01 / CLINICAL EXPERIENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-[var(--theme-text-primary)] tracking-tight">
              A Foundation in Prevention. <br />
              <span className="italic text-[var(--theme-primary)]">Experience Across Practice Settings.</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--theme-text-secondary)] max-w-2xl leading-relaxed">
              Active UK dental nursing experience at <strong className="text-[var(--theme-text-primary)]">The Grange Dental, London</strong> alongside comprehensive overseas practice as a Dental Surgeon in general, restorative, and periodontal care.
            </p>
          </div>

          {/* Quick Filters */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--theme-surface)] border border-[var(--theme-border)] shadow-sm self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === 'all'
                  ? 'bg-[var(--theme-primary)] text-white shadow-xs'
                  : 'text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)]'
              }`}
            >
              All Experience ({EXPERIENCES.length})
            </button>
            <button
              onClick={() => setFilter('UK Practice')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === 'UK Practice'
                  ? 'bg-[var(--theme-primary)] text-white shadow-xs'
                  : 'text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)]'
              }`}
            >
              UK Practice
            </button>
            <button
              onClick={() => setFilter('Overseas Hospital')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === 'Overseas Hospital'
                  ? 'bg-[var(--theme-primary)] text-white shadow-xs'
                  : 'text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)]'
              }`}
            >
              Overseas Surgeon
            </button>
          </div>
        </div>

        {/* Timeline List */}
        <div className="mt-10 space-y-6">
          {filteredExperiences.map((exp: ExperienceItem, idx: number) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                id={`exp-item-${exp.id}`}
                className={`rounded-2xl border transition-all ${
                  exp.isCurrent
                    ? 'border-[var(--theme-primary)]/40 bg-[var(--theme-surface)] shadow-md'
                    : 'border-[var(--theme-border)] bg-[var(--theme-surface)] hover:border-[var(--theme-primary)]/30'
                } p-6 sm:p-7`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Metadata (Col 3) */}
                  <div className="lg:col-span-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold tracking-wider text-[var(--theme-text-primary)]">
                        {exp.period}
                      </span>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                          Active Role
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-[var(--theme-text-secondary)] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[var(--theme-primary)] flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>

                    <div className="pt-2">
                      <span className={`inline-block px-2.5 py-1 rounded text-[11px] font-mono font-medium tracking-wide uppercase border ${
                        exp.type === 'UK Practice'
                          ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                          : 'border-[var(--theme-border)] bg-[var(--theme-surface-alt)] text-[var(--theme-text-secondary)]'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Right Details (Col 9) */}
                  <div className="lg:col-span-9 space-y-4">
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2.5">
                        <h3 className="text-xl font-serif-display font-medium text-[var(--theme-text-primary)]">
                          {exp.role}
                        </h3>
                        <span className="text-sm font-semibold text-[var(--theme-primary)] flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5" />
                          {exp.employer}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--theme-text-secondary)] mt-1.5 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Bullet Points from CV */}
                    <div className="space-y-2.5 pt-1">
                      {exp.highlights.map((highlight: string, hIdx: number) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--theme-text-secondary)]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-primary)] mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills Applied Badges */}
                    <div className="pt-3 border-t border-[var(--theme-border)] flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-mono text-[var(--theme-text-secondary)] mr-1">
                        Key Competencies:
                      </span>
                      {exp.skillsApplied.map((skill: string) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[var(--theme-surface-alt)] text-[var(--theme-text-primary)] border border-[var(--theme-border)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Experience Summary Note */}
        <div className="mt-8 p-4 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[var(--theme-text-secondary)]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--theme-primary)] flex-shrink-0" />
            <span>
              Registered with the General Dental Council (GDC 316565). Complete employment history and UK references available upon request.
            </span>
          </div>
          <a
            href="#contact"
            className="font-semibold text-[var(--theme-primary)] hover:underline whitespace-nowrap"
          >
            Inquire About Availability →
          </a>
        </div>
      </div>
    </section>
  );
};
