import React from 'react';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Layers, BookOpen } from 'lucide-react';
import { ClinicalCase } from '../types';
import { ClinicalCaseVisual } from './ClinicalCaseVisual';

interface CaseModalProps {
  caseItem: ClinicalCase | null;
  onClose: () => void;
}

export const CaseModal: React.FC<CaseModalProps> = ({ caseItem, onClose }) => {
  if (!caseItem) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-3xl rounded-2xl bg-[var(--theme-surface)] border border-[var(--theme-border)] shadow-2xl overflow-hidden z-10 my-8">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[var(--theme-border)] flex items-start justify-between gap-4 bg-[var(--theme-surface-alt)]/50">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase font-bold tracking-wider bg-[var(--theme-primary)] text-white">
                {caseItem.category} Case
              </span>
              <span className="text-xs font-mono text-[var(--theme-text-secondary)]">
                Case ID: {caseItem.id}
              </span>
            </div>
            <h3 className="font-serif-display font-medium text-xl sm:text-2xl text-[var(--theme-text-primary)] mt-1.5 leading-snug">
              {caseItem.title}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--theme-text-secondary)] mt-0.5 italic">
              {caseItem.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] hover:bg-[var(--theme-surface)] border border-transparent hover:border-[var(--theme-border)] transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Detailed Visual Diagnostic representation */}
          <div className="rounded-xl overflow-hidden border border-[var(--theme-border)] shadow-sm">
            <ClinicalCaseVisual
              type={caseItem.svgType}
              title={caseItem.title}
              category={caseItem.category}
              imageUrl={caseItem.imageUrl}
              images={caseItem.images}
              isRadiograph={caseItem.isRadiograph}
              className="min-h-[280px]"
            />
          </div>

          {/* Description & Clinical Observations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-[var(--theme-surface-alt)] border border-[var(--theme-border)] space-y-1.5">
              <span className="text-xs font-mono uppercase font-semibold text-[var(--theme-primary)] flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                Case Summary & Presentation
              </span>
              <p className="text-[var(--theme-text-secondary)] leading-relaxed">
                {caseItem.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--theme-surface-alt)] border border-[var(--theme-border)] space-y-1.5">
              <span className="text-xs font-mono uppercase font-semibold text-[var(--theme-primary)] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Clinical Notes & Technique
              </span>
              <p className="text-[var(--theme-text-secondary)] leading-relaxed">
                {caseItem.clinicalNotes}
              </p>
            </div>
          </div>

          {/* Clinical Procedure Sequence */}
          {caseItem.procedureSteps && (
            <div className="p-4 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[var(--theme-text-primary)] block">
                Standard Operative Procedure Steps:
              </span>
              <div className="space-y-2">
                {caseItem.procedureSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--theme-text-secondary)]">
                    <span className="w-5 h-5 rounded-full bg-[var(--theme-primary)]/10 text-[var(--theme-primary)] text-[11px] font-mono font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[var(--theme-border)]">
            <span className="text-xs font-mono text-[var(--theme-text-secondary)]">Clinical Indices:</span>
            {caseItem.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--theme-surface-alt)] text-[var(--theme-text-primary)] border border-[var(--theme-border)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[var(--theme-border)] bg-[var(--theme-surface-alt)]/40 flex items-center justify-between text-xs">
          <span className="text-[var(--theme-text-secondary)]">
            Case records preserved with patient confidentiality and consent standards.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg font-semibold bg-[var(--theme-primary)] text-white hover:opacity-90 transition-opacity"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
