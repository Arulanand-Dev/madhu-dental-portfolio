import React from 'react';
import { Play, Youtube, ArrowUpRight, Users, Sparkles } from 'lucide-react';
import { VIDEOS } from '../data/portfolioData';

export const VideosSection: React.FC = () => {
  return (
    <section id="videos" className="py-16 sm:py-20 bg-[var(--theme-surface)] border-b border-[var(--theme-border)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with YouTube Channel Stats */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--theme-border)]">
          <div className="space-y-3">
            <span className="text-xs font-mono tracking-widest text-[var(--theme-primary)] uppercase font-semibold">
              04 / CLINICAL TEACHING & CASE VIDEOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-[var(--theme-text-primary)] tracking-tight">
              Learn BDS With Me. <br />
              <span className="italic text-[var(--theme-primary)]">Educational Case Presentations.</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--theme-text-secondary)] max-w-2xl leading-relaxed">
              My educational YouTube channel provides step-by-step dental case presentations, clinical obturation demos, and trauma management tutorials for dental students and colleagues.
            </p>
          </div>

          {/* YouTube Channel Banner */}
          <a
            href="https://www.youtube.com/@learnbdswithme"
            target="_blank"
            rel="noopener noreferrer"
            id="youtube-channel-link"
            className="flex items-center gap-3 p-3.5 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface-alt)] hover:border-red-500/50 transition-all shadow-xs group self-start md:self-end"
          >
            <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <Youtube className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--theme-text-primary)]">
                <span>Visit YouTube Channel</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--theme-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div className="text-[11px] text-[var(--theme-text-secondary)] flex items-center gap-2 mt-0.5">
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  <strong>1.36K</strong> subscribers
                </span>
                <span>·</span>
                <span>Active Dental Series</span>
              </div>
            </div>
          </a>
        </div>

        {/* Video Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {VIDEOS.map((video, idx) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface-alt)] hover:bg-[var(--theme-surface)] hover:border-[var(--theme-primary)]/50 transition-all shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--theme-surface)] text-[var(--theme-primary)] border border-[var(--theme-border)]">
                      {video.topic}
                    </span>
                    {video.viewsOrTag && (
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        {video.viewsOrTag}
                      </span>
                    )}
                  </div>
                  <div className="w-7 h-7 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all shrink-0">
                    <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                  </div>
                </div>

                <h3 className="font-serif-display font-medium text-base text-[var(--theme-text-primary)] group-hover:text-[var(--theme-primary)] transition-colors line-clamp-3 leading-snug">
                  {video.title}
                </h3>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--theme-border)] flex items-center justify-between text-xs text-[var(--theme-text-secondary)]">
                <span className="font-mono">{video.duration}</span>
                <span className="flex items-center gap-1 font-medium text-[var(--theme-primary)] group-hover:underline">
                  <span>Watch on YouTube</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
