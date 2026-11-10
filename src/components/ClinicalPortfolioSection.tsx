import React, { useState } from 'react';
import { Eye, AlertCircle, Info, Sparkles, Check, ChevronDown, ChevronUp, Layers, ExternalLink, ShieldAlert } from 'lucide-react';
import { CLINICAL_CASES } from '../data/portfolioData';
import { ClinicalCase } from '../types';
import { ClinicalCaseVisual } from './ClinicalCaseVisual';

interface ClinicalPortfolioSectionProps {
  onSelectCase: (caseItem: ClinicalCase) => void;
}

export const ClinicalPortfolioSection: React.FC<ClinicalPortfolioSectionProps> = ({ onSelectCase }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedCases, setExpandedCases] = useState<Record<string, boolean>>({
    'case-1': true,
    'case-2': false,
  });
  const [sensitiveWarningDismissed, setSensitiveWarningDismissed] = useState(true);

  const categories = ['All', 'Preventive', 'Restorative', 'Prosthetics', 'Endodontics', 'Extractions', 'Trauma'];

  const filteredCases = CLINICAL_CASES.filter((c) => {
    if (selectedCategory === 'All') return true;
    return c.category === selectedCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedCases((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="cases" className="py-16 sm:py-20 bg-[var(--theme-surface)] border-b border-[var(--theme-border)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 pb-8 border-b border-[var(--theme-border)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest text-[var(--theme-primary)] uppercase font-semibold">
                06 / CLINICAL PORTFOLIO & CASE PICTURES
              </span>
            </div>
            <span className="text-xs font-mono text-[var(--theme-text-secondary)]">
              {CLINICAL_CASES.length} Treatment Categories Documented
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-[var(--theme-text-primary)] tracking-tight">
                Selected Clinical Work <br />
                <span className="italic text-[var(--theme-primary)]">& Case Radiographs.</span>
              </h2>
              <p className="text-sm sm:text-base text-[var(--theme-text-secondary)] mt-2 leading-relaxed">
                Photographic comparisons, radiographic records, and procedure notes from clinical practice, structured across periodontal prophylaxis, conservative restorations, prosthetics, and dental trauma care.
              </p>
            </div>

            {/* Medical Content Notice */}
            <div className="lg:col-span-4 p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-xs text-[var(--theme-text-primary)]">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="leading-snug">
                  <span className="font-semibold text-amber-900 dark:text-amber-200">Clinical Protocol:</span>
                  <p className="text-[11px] text-[var(--theme-text-secondary)] mt-0.5">
                    Authentic intraoral patient photographs and diagnostic radiographs documenting clinical procedures. Click any case to examine records in detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`cat-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? 'bg-[var(--theme-primary)] text-white border-[var(--theme-primary)] shadow-xs'
                  : 'bg-[var(--theme-surface-alt)] border-[var(--theme-border)] text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] hover:border-[var(--theme-primary)]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCases.map((caseItem: ClinicalCase) => {
            const isExpanded = expandedCases[caseItem.id];
            return (
              <div
                key={caseItem.id}
                id={`case-card-${caseItem.id}`}
                className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface-alt)]/60 hover:border-[var(--theme-primary)]/50 transition-all shadow-xs overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Intraoral Clinical Image & Radiograph Display */}
                  <div className="p-4 pb-0 relative">
                    <ClinicalCaseVisual
                      type={caseItem.svgType}
                      title={caseItem.title}
                      category={caseItem.category}
                      imageUrl={caseItem.imageUrl}
                      images={caseItem.images}
                      isRadiograph={caseItem.isRadiograph}
                      className="border border-[var(--theme-border)] shadow-xs"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-[11px] font-semibold text-[var(--theme-primary)] uppercase tracking-wider">
                        {caseItem.category}
                      </span>
                      <span className="text-[11px] text-[var(--theme-text-secondary)]">
                        Clinical Case #{caseItem.id.replace('case-', '')}
                      </span>
                    </div>

                    <h3 className="font-serif-display font-medium text-lg text-[var(--theme-text-primary)] leading-snug">
                      {caseItem.title}
                    </h3>
                    <div className="text-xs font-medium text-[var(--theme-text-secondary)] italic">
                      {caseItem.subtitle}
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--theme-text-secondary)] leading-relaxed">
                      {caseItem.description}
                    </p>

                    {/* Expandable Procedure & Notes Drawer */}
                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-[var(--theme-border)] space-y-3 text-xs animate-in fade-in duration-200">
                        <div className="p-3 rounded-lg bg-[var(--theme-surface)] border border-[var(--theme-border)]">
                          <span className="font-semibold text-[var(--theme-text-primary)] block mb-1">
                            Clinical Observations:
                          </span>
                          <p className="text-[var(--theme-text-secondary)] leading-relaxed">
                            {caseItem.clinicalNotes}
                          </p>
                        </div>

                        {caseItem.procedureSteps && (
                          <div className="space-y-1.5 pt-1">
                            <span className="font-semibold text-[var(--theme-text-primary)] block text-[11px] uppercase tracking-wider font-mono">
                              Procedure Sequence:
                            </span>
                            {caseItem.procedureSteps.map((step, sIdx) => (
                              <div key={sIdx} className="flex items-start gap-2 text-[var(--theme-text-secondary)]">
                                <span className="font-mono text-[10px] text-[var(--theme-primary)] font-bold mt-0.5">
                                  0{sIdx + 1}.
                                </span>
                                <span>{step}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {caseItem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-[var(--theme-surface)] text-[var(--theme-text-secondary)] border border-[var(--theme-border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="p-4 pt-2 border-t border-[var(--theme-border)] bg-[var(--theme-surface)]/50 flex items-center justify-between text-xs">
                  <button
                    onClick={() => toggleExpand(caseItem.id)}
                    className="inline-flex items-center gap-1 font-medium text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] transition-colors"
                  >
                    <span>{isExpanded ? 'Hide Protocol Details' : 'View Protocol Details'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => onSelectCase(caseItem)}
                    className="inline-flex items-center gap-1.5 font-semibold text-[var(--theme-primary)] hover:underline"
                  >
                    <span>Inspect Case</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
