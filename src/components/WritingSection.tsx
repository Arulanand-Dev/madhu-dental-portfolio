import React from 'react';
import { BookOpen, ArrowUpRight, FileText, CheckCircle2 } from 'lucide-react';
import { ARTICLES } from '../data/portfolioData';

export const WritingSection: React.FC = () => {
  return (
    <section id="writing" className="py-16 sm:py-20 bg-[var(--theme-surface-alt)]/40 border-b border-[var(--theme-border)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--theme-border)]">
          <div className="space-y-3">
            <span className="text-xs font-mono tracking-widest text-[var(--theme-primary)] uppercase font-semibold">
              05 / PUBLISHED HEALTHCARE WRITING
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-[var(--theme-text-primary)] tracking-tight">
              Making Health Information <br />
              <span className="italic text-[var(--theme-primary)]">Accessible & Understandable.</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--theme-text-secondary)] max-w-2xl leading-relaxed">
              Alongside chairside clinical work, I write and review healthcare publications for iCliniq and work as an academic medical author, translating complex clinical concepts into clear, empathetic patient guidance.
            </p>
          </div>

          <a
            href="https://www.icliniq.com/doctor/dr-madhu-bala-sermarajan/articles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] hover:border-[var(--theme-primary)] text-xs font-semibold text-[var(--theme-text-primary)] transition-all shadow-xs self-start md:self-end"
          >
            <span>View iCliniq Author Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
          </a>
        </div>

        {/* Articles List */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {ARTICLES.map((art) => (
            <a
              key={art.id}
              href={art.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] hover:border-[var(--theme-primary)]/50 transition-all shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[var(--theme-text-secondary)]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--theme-primary)] font-medium">
                    {art.topic}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[var(--theme-surface-alt)] border border-[var(--theme-border)] text-[10px]">
                    {art.publisher}
                  </span>
                </div>

                <h3 className="font-serif-display font-medium text-xl text-[var(--theme-text-primary)] group-hover:text-[var(--theme-primary)] transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--theme-text-secondary)] leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[var(--theme-border)] flex items-center justify-between text-xs font-medium text-[var(--theme-primary)]">
                <span>Read Full Article on iCliniq</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
