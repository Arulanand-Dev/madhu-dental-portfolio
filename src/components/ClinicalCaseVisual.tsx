import React, { useState, useEffect } from 'react';
import { ZoomIn, Grid, X, ChevronLeft, ChevronRight, FileImage } from 'lucide-react';
import { CaseImage } from '../types';

interface ClinicalCaseVisualProps {
  type?: 'scaling' | 'restorative' | 'denture' | 'endodontic' | 'extraction' | 'crown' | 'trauma';
  title: string;
  category: string;
  imageUrl?: string;
  images?: CaseImage[];
  isRadiograph?: boolean;
  className?: string;
}

export const ClinicalCaseVisual: React.FC<ClinicalCaseVisualProps> = ({
  title,
  category,
  imageUrl,
  images,
  isRadiograph,
  className = '',
}) => {
  const initialImages: CaseImage[] = images && images.length > 0
    ? images
    : imageUrl
    ? [{ url: imageUrl, label: title, type: isRadiograph ? 'radiograph' : 'clinical-photo' }]
    : [];

  const [selectedImgIndex, setSelectedImgIndex] = useState<number>(0);
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [imageOverrides, setImageOverrides] = useState<Record<number, string>>({});
  const [imgLoadError, setImgLoadError] = useState<Record<number, boolean>>({});

  // Retain all uploaded pictures from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(`clinical_img_${title}`);
      if (stored) {
        setImageOverrides(JSON.parse(stored));
      }
    } catch {
      // Ignore storage errors
    }
  }, [title]);

  const currentOriginalImage = initialImages[selectedImgIndex] || initialImages[0];
  const currentImageUrl =
    (currentOriginalImage ? currentOriginalImage.url : '') || imageOverrides[selectedImgIndex] || '';
  const isCurrentRadiograph =
    isRadiograph || (currentOriginalImage && currentOriginalImage.type === 'radiograph');

  return (
    <div
      className={`relative w-full rounded-xl overflow-hidden bg-slate-950 flex flex-col border border-slate-800 ${className}`}
    >
      {/* Top Clinical Header Bar */}
      <div className="px-3.5 py-2.5 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300 z-10">
        <div className="flex items-center gap-2">
          <span
            className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase border shadow-xs ${
              isCurrentRadiograph
                ? 'bg-teal-950/80 text-teal-300 border-teal-500/40'
                : 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
            }`}
          >
            {isCurrentRadiograph ? 'Diagnostic Radiograph (IOPA)' : 'Patient Clinical Photograph'}
          </span>
        </div>

        {/* Clinical Image Tools */}
        <div className="flex items-center gap-2">
          {isCurrentRadiograph && (
            <>
              <button
                type="button"
                onClick={() => setIsHighContrast((prev) => !prev)}
                title="Toggle High-Contrast Invert (Inspect Apical Seal & Bone)"
                className={`px-2 py-1 rounded text-[10px] font-mono border transition-all flex items-center gap-1 cursor-pointer ${
                  isHighContrast
                    ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                <span>{isHighContrast ? 'Invert: ON' : 'Invert'}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowGrid((prev) => !prev)}
                title="Toggle 1mm Measurement Grid"
                className={`px-2 py-1 rounded text-[10px] font-mono border transition-all flex items-center gap-1 cursor-pointer ${
                  showGrid
                    ? 'bg-teal-500 text-white border-teal-400 font-bold'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                <Grid className="w-3 h-3" />
                <span>Grid</span>
              </button>
            </>
          )}

          {currentImageUrl && (
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              title="Open Fullscreen Lightbox"
              className="p-1.5 rounded bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-all cursor-pointer"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Photographic Display Frame */}
      <div className="relative flex-1 min-h-[240px] max-h-[380px] bg-black flex items-center justify-center overflow-hidden p-2 select-none group">
        {currentImageUrl && !imgLoadError[selectedImgIndex] ? (
          <>
            <img
              src={currentImageUrl}
              alt={currentOriginalImage?.label || title}
              referrerPolicy="no-referrer"
              onError={() => setImgLoadError((prev) => ({ ...prev, [selectedImgIndex]: true }))}
              className={`max-h-[340px] w-auto max-w-full object-contain rounded-md transition-all duration-300 ${
                isHighContrast ? 'invert contrast-150 brightness-95' : 'contrast-105'
              }`}
            />

            {/* Optional Diagnostic Millimeter Grid Overlay for Radiographs */}
            {showGrid && isCurrentRadiograph && (
              <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #22d3ee 1px, transparent 1px), linear-gradient(to bottom, #22d3ee 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              />
            )}

            {/* Hover overlay hint */}
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="absolute inset-0 w-full h-full bg-black/0 hover:bg-black/35 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-zoom-in"
            >
              <span className="px-3.5 py-1.5 rounded-lg bg-black/85 text-white text-xs font-medium backdrop-blur-xs flex items-center gap-2 border border-white/20 shadow-xl">
                <ZoomIn className="w-4 h-4 text-teal-400" />
                <span>Click to Inspect High-Resolution Record</span>
              </span>
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-700">
              <FileImage className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-200">{title}</p>
              <p className="text-xs text-slate-400 mt-1">{currentOriginalImage?.label || 'Clinical Record'}</p>
            </div>
          </div>
        )}
      </div>

      {/* Multi-Record Navigation Bar */}
      {initialImages.length > 1 && (
        <div className="px-3.5 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
          <span className="text-[11px] font-mono text-slate-400 truncate max-w-[65%]">
            Record {selectedImgIndex + 1} of {initialImages.length}:{' '}
            <span className="text-slate-200 font-medium">{currentOriginalImage?.label || ''}</span>
          </span>

          <div className="flex items-center gap-1.5 shrink-0">
            {initialImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImgIndex(idx)}
                className={`px-2.5 py-1 rounded text-[10px] font-mono transition-all border cursor-pointer ${
                  selectedImgIndex === idx
                    ? 'bg-[var(--theme-primary)] text-white border-[var(--theme-primary)] font-bold shadow-xs'
                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                }`}
              >
                Record {idx + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Full-Screen Lightbox Modal */}
      {isLightboxOpen && currentImageUrl && (
        <div className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div
            className="fixed inset-0"
            onClick={() => setIsLightboxOpen(false)}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-5xl w-full max-h-[92vh] flex flex-col bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Lightbox Header */}
            <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
                  {category} · Clinical Record #{selectedImgIndex + 1}
                </span>
                <h4 className="text-base font-serif-display font-medium text-white mt-0.5">
                  {currentOriginalImage?.label || title}
                </h4>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                {isCurrentRadiograph && (
                  <button
                    type="button"
                    onClick={() => setIsHighContrast((prev) => !prev)}
                    className={`px-2.5 py-1 rounded text-xs font-mono border transition-all cursor-pointer ${
                      isHighContrast
                        ? 'bg-amber-400 text-slate-950 font-bold'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                    }`}
                  >
                    {isHighContrast ? 'Invert: ON' : 'Invert Radiograph'}
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Close lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Image Container */}
            <div className="relative p-4 flex-1 flex items-center justify-center bg-black overflow-hidden">
              {initialImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImgIndex((prev) => (prev > 0 ? prev - 1 : initialImages.length - 1))
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-all cursor-pointer shadow-lg"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImgIndex((prev) => (prev < initialImages.length - 1 ? prev + 1 : 0))
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-all cursor-pointer shadow-lg"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <img
                src={currentImageUrl}
                alt={currentOriginalImage?.label || title}
                referrerPolicy="no-referrer"
                className={`max-h-[68vh] w-auto max-w-full object-contain rounded-lg transition-all ${
                  isHighContrast ? 'invert contrast-150 brightness-95' : 'contrast-105'
                }`}
              />
            </div>

            {/* Lightbox Caption / Clinical Notes */}
            {currentOriginalImage?.caption && (
              <div className="p-4 bg-slate-900/95 border-t border-slate-800 text-xs text-slate-300">
                <span className="font-semibold text-white block mb-1">Clinical Record Notes:</span>
                <p className="text-slate-300 leading-relaxed">{currentOriginalImage.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
