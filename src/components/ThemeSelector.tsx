import React, { useState } from 'react';
import { Palette, Check, Moon, Sun, Sparkles } from 'lucide-react';
import { THEMES } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface ThemeSelectorProps {
  currentTheme: ThemeMode;
  onSelectTheme: (theme: ThemeMode) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentTheme, onSelectTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const activeThemeObj = THEMES.find((t) => t.id === currentTheme) || THEMES[0];

  return (
    <div className="relative">
      <button
        id="theme-selector-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-[var(--theme-border)] bg-[var(--theme-surface)] hover:bg-[var(--theme-surface-alt)] text-[var(--theme-text-primary)] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)] shrink-0 whitespace-nowrap"
        title="Change Portfolio Color Theme"
      >
        <span
          className="w-2.5 h-2.5 rounded-full ring-1 ring-white/50"
          style={{ backgroundColor: activeThemeObj.primaryColor }}
        />
        <span className="hidden sm:inline">Theme:</span>
        <span className="font-semibold">{activeThemeObj.name.split(' ')[0]}</span>
        <Palette className="w-3.5 h-3.5 opacity-70 ml-0.5" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div
            id="theme-dropdown-menu"
            className="absolute right-0 mt-2 w-72 sm:w-80 rounded-xl bg-[var(--theme-surface)] border border-[var(--theme-border)] shadow-xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[var(--theme-border)]">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--theme-text-primary)]">
                <Sparkles className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
                <span>Select Portfolio Theme</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[var(--theme-text-secondary)]">
                Instant Preview
              </span>
            </div>

            <div className="space-y-1.5">
              {THEMES.map((theme) => {
                const isSelected = theme.id === currentTheme;
                return (
                  <button
                    key={theme.id}
                    id={`theme-btn-${theme.id}`}
                    onClick={() => {
                      onSelectTheme(theme.id);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-lg text-xs transition-all flex items-start justify-between gap-2 border ${
                      isSelected
                        ? 'border-[var(--theme-primary)] bg-[var(--theme-primary-light)] font-medium'
                        : 'border-transparent hover:border-[var(--theme-border)] hover:bg-[var(--theme-surface-alt)]'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full mt-0.5 flex-shrink-0 shadow-sm border border-white/40"
                        style={{ backgroundColor: theme.primaryColor }}
                      />
                      <div>
                        <div className="flex items-center gap-1.5 font-semibold text-[var(--theme-text-primary)]">
                          <span>{theme.name}</span>
                          {theme.isDark ? (
                            <Moon className="w-3 h-3 text-cyan-400" />
                          ) : (
                            <Sun className="w-3 h-3 text-amber-500" />
                          )}
                        </div>
                        <p className="text-[11px] text-[var(--theme-text-secondary)] mt-0.5 leading-snug line-clamp-2">
                          {theme.description}
                        </p>
                      </div>
                    </div>
                    {isSelected && (
                      <Check className="w-4 h-4 text-[var(--theme-primary)] flex-shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-2.5 pt-2 border-t border-[var(--theme-border)] text-[10px] text-[var(--theme-text-secondary)] flex items-center justify-between">
              <span>Theme preference saved locally</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[var(--theme-primary)] hover:underline font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
