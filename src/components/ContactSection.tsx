import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Copy, Check, ArrowUpRight, FileDown, Calendar, ShieldCheck, Clock } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenCV: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCV }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[var(--theme-surface-alt)]/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description (Col 6) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-[var(--theme-border)] bg-[var(--theme-surface)] text-[var(--theme-primary)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>PRACTICE INQUIRIES & RECRUITMENT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif-display font-normal text-[var(--theme-text-primary)] leading-tight tracking-tight">
              Looking for a Dental Hygienist <br />
              <span className="italic text-[var(--theme-primary)]">for your London practice?</span>
            </h2>

            <p className="text-sm sm:text-base text-[var(--theme-text-secondary)] leading-relaxed">
              Available immediately for <strong className="text-[var(--theme-text-primary)]">full-time, part-time, and locum dental hygienist placements</strong> across Greater London. Prepared with complete GDC registration, Pearl software experience, and HTM 01-05 decontamination expertise.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={`mailto:${PROFILE_INFO.email}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[var(--theme-primary)] hover:opacity-90 transition-all shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold border border-[var(--theme-border)] bg-[var(--theme-surface)] hover:bg-[var(--theme-surface-alt)] text-[var(--theme-text-primary)] transition-all shadow-xs"
              >
                <FileDown className="w-4 h-4 text-[var(--theme-primary)]" />
                <span>Download Dental CV</span>
              </button>
            </div>
          </div>

          {/* Right Direct Contact Cards (Col 6) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-6 sm:p-7 shadow-lg space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--theme-border)]">
                <div>
                  <h3 className="font-serif-display font-medium text-lg text-[var(--theme-text-primary)]">
                    Contact Channels
                  </h3>
                  <p className="text-xs text-[var(--theme-text-secondary)]">Direct clinician contact details</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  Quick Response
                </span>
              </div>

              {/* Email Row */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--theme-surface-alt)] border border-[var(--theme-border)]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[var(--theme-surface)] border border-[var(--theme-border)] flex items-center justify-center text-[var(--theme-primary)]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[var(--theme-text-secondary)] uppercase font-mono">Email Address</div>
                    <a
                      href={`mailto:${PROFILE_INFO.email}`}
                      className="text-sm font-semibold text-[var(--theme-text-primary)] hover:text-[var(--theme-primary)] hover:underline"
                    >
                      {PROFILE_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PROFILE_INFO.email, 'email')}
                  className="p-2 rounded-lg hover:bg-[var(--theme-surface)] text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] transition-colors text-xs flex items-center gap-1 font-medium"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 font-mono text-[10px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Row */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--theme-surface-alt)] border border-[var(--theme-border)]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[var(--theme-surface)] border border-[var(--theme-border)] flex items-center justify-center text-[var(--theme-primary)]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[var(--theme-text-secondary)] uppercase font-mono">Mobile (UK)</div>
                    <a
                      href={`tel:${PROFILE_INFO.phone}`}
                      className="text-sm font-semibold text-[var(--theme-text-primary)] hover:text-[var(--theme-primary)] hover:underline font-mono"
                    >
                      {PROFILE_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PROFILE_INFO.phone, 'phone')}
                  className="p-2 rounded-lg hover:bg-[var(--theme-surface)] text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] transition-colors text-xs flex items-center gap-1 font-medium"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 font-mono text-[10px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn Row */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--theme-surface-alt)] border border-[var(--theme-border)]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[var(--theme-surface)] border border-[var(--theme-border)] flex items-center justify-center text-[var(--theme-primary)]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[var(--theme-text-secondary)] uppercase font-mono">LinkedIn Profile</div>
                    <a
                      href={PROFILE_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[var(--theme-text-primary)] hover:text-[var(--theme-primary)] hover:underline"
                    >
                      in/madhu-bala-sermarajan
                    </a>
                  </div>
                </div>

                <a
                  href={PROFILE_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-[var(--theme-surface)] text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Location Badge */}
              <div className="flex items-center justify-between text-xs text-[var(--theme-text-secondary)] pt-2 border-t border-[var(--theme-border)]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
                  <span>London SE1, United Kingdom</span>
                </span>
                <span className="font-mono text-[11px]">Right to Work in UK Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
