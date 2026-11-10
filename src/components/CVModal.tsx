import React, { useState } from 'react';
import { X, Printer, Download, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';
import { downloadCVPdf, openCVPdfInNewTab } from '../utils/generateCVPdf';
import { PROFILE_INFO, EXPERIENCES } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [downloadState, setDownloadState] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    const success = downloadCVPdf('Madhu_Bala_Sermarajan_BDS_CV.pdf');
    if (success) {
      setDownloadState('success');
      setTimeout(() => setDownloadState('idle'), 4500);
    } else {
      setDownloadState('error');
    }
  };

  const handleOpenPDF = () => {
    openCVPdfInNewTab();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-modal-overlay fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Background click backdrop (hidden during print) */}
      <div className="fixed inset-0 no-print" onClick={onClose} aria-hidden="true" />

      {/* Main Modal Container */}
      <div className="cv-modal-box relative w-full max-w-3xl rounded-2xl bg-white text-slate-900 shadow-2xl overflow-hidden z-10 my-2 sm:my-4 border border-slate-200">
        {/* Top Header Bar (hidden during print) */}
        <div className="no-print p-3 sm:p-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="font-serif-display text-sm sm:text-base font-semibold">Madhu Bala Sermarajan, BDS</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[11px] font-bold">
              GDC: 316565
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Primary Direct PDF Download Button */}
            <button
              id="cv-download-pdf-btn"
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white transition-all cursor-pointer shadow-xs"
              title="Download pure single-page PDF document directly"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            {/* Open in New Tab Button (Perfect for Mobile / Instant Preview) */}
            <button
              id="cv-open-tab-btn"
              onClick={handleOpenPDF}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer border border-slate-700"
              title="Open pure PDF in a new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              <span>Open PDF</span>
            </button>

            {/* Print Button (Single-page A4) */}
            <button
              id="cv-print-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer border border-slate-700"
              title="Print directly to printer or browser PDF (1 page)"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-400" />
              <span>Print</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Success notification banner */}
        {downloadState === 'success' && (
          <div className="no-print px-4 py-2 bg-emerald-50 text-emerald-900 text-xs flex items-center justify-between border-b border-emerald-200 font-medium animate-in fade-in slide-in-from-top-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Madhu_Bala_Sermarajan_BDS_CV.pdf</strong> downloaded directly to your device!</span>
            </div>
            <button
              onClick={handleOpenPDF}
              className="text-emerald-700 underline text-[11px] hover:text-emerald-900 font-semibold"
            >
              Open in tab
            </button>
          </div>
        )}

        {/* Printable 1-Page Document Container */}
        <div
          id="cv-document-printable"
          className="p-5 sm:p-7 md:p-8 max-h-[82vh] overflow-y-auto font-sans text-slate-800 space-y-3 bg-white"
        >
          {/* Header */}
          <div className="text-center pb-2.5 border-b-2 border-emerald-800 cv-avoid-break">
            <h1 className="text-xl sm:text-2xl font-serif-display font-bold text-slate-950 tracking-tight">
              Madhu Bala Sermarajan, BDS
            </h1>
            <div className="text-[11px] sm:text-xs font-semibold text-emerald-800 mt-0.5">
              GDC Registered Dental Hygienist (Registration No. 316565)
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-600 flex flex-wrap items-center justify-center gap-1.5 mt-1">
              <span>{PROFILE_INFO.phone}</span>
              <span className="text-slate-300">•</span>
              <span>{PROFILE_INFO.email}</span>
              <span className="text-slate-300">•</span>
              <span>{PROFILE_INFO.location}</span>
              <span className="text-slate-300">•</span>
              <a
                href={PROFILE_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:underline"
              >
                linkedin.com/in/madhu-bala-sermarajan
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="cv-avoid-break space-y-1">
            <h2 className="text-[10px] font-bold font-mono tracking-widest text-emerald-900 uppercase border-b border-slate-300 pb-0.5">
              Professional Summary
            </h2>
            <p className="text-[10.5px] sm:text-[11px] text-slate-700 leading-relaxed text-justify">
              {PROFILE_INFO.summary}
            </p>
          </div>

          {/* Key Clinical & Professional Competencies */}
          <div className="cv-avoid-break space-y-1.5">
            <h2 className="text-[11px] font-bold font-mono tracking-widest text-emerald-900 uppercase border-b border-slate-300 pb-0.5">
              Key Clinical & Professional Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10.5px] sm:text-[11px] text-slate-700">
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">Clinical Periodontology & Hygiene:</span>
                Ultrasonic & hand scaling, subgingival debridement, BPE charting, prophylaxis, stain removal, topical fluoride, dental impressions.
              </div>
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">Practice Compliance & HTM 01-05:</span>
                Cross-infection control, autoclave operation, sterilization logging, BLS / CPR (AHA), Safeguarding, patient confidentiality.
              </div>
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">Dental Software & Radiography:</span>
                Pearl Dental Software for clinical records, medical history audits, BPE charting; IOPA and bitewing radiographic interpretation.
              </div>
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">Patient Care & Communication:</span>
                Tailored oral hygiene education, gentle dental-phobic anxiety management, English (Fluent / IELTS Band 7.0), Tamil (Native).
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="cv-avoid-break space-y-2.5">
            <h2 className="text-[11px] font-bold font-mono tracking-widest text-emerald-900 uppercase border-b border-slate-300 pb-0.5">
              Professional Clinical Experience
            </h2>

            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-1 text-[10.5px] sm:text-[11px]">
                <div className="flex items-baseline justify-between">
                  <div className="font-bold text-slate-950">
                    {exp.role} <span className="font-normal text-slate-600">| {exp.employer}, {exp.location.split(',')[0]}</span>
                  </div>
                  <div className="text-[10px] font-semibold font-mono text-slate-600">
                    {exp.period}
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-0.5 text-slate-700 leading-snug">
                  {exp.highlights.slice(0, 4).map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="cv-avoid-break space-y-1.5 pt-1">
            <h2 className="text-[11px] font-bold font-mono tracking-widest text-emerald-900 uppercase border-b border-slate-300 pb-0.5">
              Education & Professional Credentials
            </h2>
            <div className="text-[10.5px] sm:text-[11px] text-slate-800 space-y-1">
              <div>
                <strong>Bachelor of Dental Surgery (BDS)</strong> — Chettinad Dental College & Research Institute, Dr. M.G.R. Medical University (2016 – 2022)
              </div>
              <div className="text-slate-700">
                <strong className="text-emerald-800">Registered Dental Hygienist (UK):</strong> General Dental Council (GDC Reg No. 316565) — Active Registration
              </div>
              <div className="text-slate-600 text-[10px]">
                <strong>Certifications:</strong> Basic Life Support (BLS, American Heart Association) | IELTS Academic (Overall Band: 7.0) | CPD Compliant
              </div>
            </div>
          </div>

          {/* Compact Declaration */}
          <div className="pt-2.5 border-t border-slate-200 flex items-center justify-between text-[9.5px] text-slate-500 cv-avoid-break">
            <span>Official Curriculum Vitae · General Dental Council (UK) Registered</span>
            <span>Document Ref: MBS-BDS-CV-1P</span>
          </div>
        </div>

        {/* Modal Bottom Footer Bar (hidden during print) */}
        <div className="no-print p-3 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span className="text-[11px]">Strictly 1-page British dental CV. Instant PDF file generation.</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleOpenPDF}
              className="px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium transition-colors cursor-pointer text-xs sm:hidden"
            >
              Open PDF
            </button>
            <button
              onClick={handleDownloadPDF}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-semibold transition-colors cursor-pointer shadow-xs inline-flex items-center gap-1.5 text-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors cursor-pointer text-xs"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
