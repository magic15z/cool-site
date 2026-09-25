import React from 'react';
import { CopyContent, CopyMode } from '../types';

interface HeroSectionProps {
  content: CopyContent;
  copyMode: CopyMode;
  onToggleCopyMode: (mode: CopyMode) => void;
  onOpenDossier: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  content,
  copyMode,
  onToggleCopyMode,
  onOpenDossier,
}) => {
  return (
    <section className="relative flex-1 flex flex-col justify-between max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-12 font-sans">
      {/* Upper-Middle Content Block: Primary Typographic, CTA Hierarchy & Transparent Statistic Cards */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 pt-2 sm:pt-4">
        {/* Left Column: Headline, Narrative Subtext & Read More CTA */}
        <div className="max-w-2xl">
          {/* Main Display Headline in DM Sans font with pure white text and no yellow highlight */}
          <h1 className="text-[34px] sm:text-[42px] md:text-[52px] font-light leading-[1.12] tracking-[-0.02em] text-white select-none font-sans">
            <span className="block font-sans font-light text-white">
              {content.headlineLine1}
            </span>
            <span className="block mt-1 sm:mt-1.5 font-sans">
              <span className="font-sans font-light text-white">
                {content.headlineLine2Prefix}
              </span>
              <span className="font-sans italic font-normal text-white">
                {content.headlineLine2Highlight}
              </span>
            </span>
          </h1>

          {/* Narrative Subtext in pure white DM Sans */}
          <p className="mt-5 sm:mt-6 max-w-xl text-white font-normal text-sm sm:text-base leading-relaxed tracking-normal font-sans">
            {content.subtext}
          </p>

          {/* Primary Action: Read more frosted pill button in pure white */}
          <div className="mt-7 sm:mt-8">
            <button
              onClick={onOpenDossier}
              className="frosted-pill-btn rounded-full px-7 py-2.5 sm:px-8 sm:py-3 text-[13.5px] sm:text-[14px] font-medium tracking-wide text-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 font-sans"
              aria-label="Read more about spacecraft systems"
            >
              {content.readMoreBtn}
            </button>
          </div>
        </div>

        {/* Right Column: Two Completely Transparent Statistic Cards with REDUCED HEIGHT */}
        <div className="flex flex-row sm:flex-row lg:flex-col items-stretch gap-3 sm:gap-3.5 self-start lg:self-center shrink-0">
          {/* Statistic Card 1: Transparent, reduced height, pure white text */}
          <div className="group relative rounded-xl px-5 py-2.5 sm:px-6 sm:py-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-white/30 backdrop-blur-md transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)] min-w-[130px] sm:min-w-[150px] flex flex-col justify-center">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl lg:text-[32px] font-light tracking-tight text-white font-sans leading-none">
                99.8%
              </span>
            </div>
            <div className="mt-1.5 w-6 h-0.5 bg-white/40 rounded-full group-hover:w-8 group-hover:bg-white/80 transition-all duration-300" />
          </div>

          {/* Statistic Card 2: Transparent, reduced height, pure white text */}
          <div className="group relative rounded-xl px-5 py-2.5 sm:px-6 sm:py-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-white/30 backdrop-blur-md transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)] min-w-[130px] sm:min-w-[150px] flex flex-col justify-center">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl lg:text-[32px] font-light tracking-tight text-white font-sans leading-none">
                150+
              </span>
            </div>
            <div className="mt-1.5 w-6 h-0.5 bg-white/40 rounded-full group-hover:w-8 group-hover:bg-white/80 transition-all duration-300" />
          </div>
        </div>
      </div>

      {/* Second Section: Zero urgency text from top, clean subtle divider, pure white blurb */}
      <div className="mt-14 sm:mt-16 md:mt-20 pt-6 relative font-sans">
        {/* Subtle Horizontal Hairline Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 sm:mb-8" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          {/* Lower-left secondary text block in pure white DM Sans */}
          <div className="max-w-xs sm:max-w-sm">
            <p className="text-[12px] sm:text-[13px] leading-relaxed text-white font-normal tracking-wide font-sans">
              {content.bottomText}
            </p>
          </div>

          {/* Clean minimal controls: Preset Switcher in pure white */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <div className="inline-flex items-center rounded-full p-1 bg-white/[0.04] border border-white/[0.12] backdrop-blur-md font-sans">
              <button
                onClick={() => onToggleCopyMode('spacecraft')}
                className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer font-sans ${
                  copyMode === 'spacecraft'
                    ? 'bg-white/20 text-white border border-white/30 shadow-[0_0_12px_rgba(255,255,255,0.15)]'
                    : 'text-white/70 hover:text-white'
                }`}
                title="Spacecraft Vessel Edition"
              >
                Spacecraft
              </button>
              <button
                onClick={() => onToggleCopyMode('reference')}
                className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer font-sans ${
                  copyMode === 'reference'
                    ? 'bg-white/20 text-white border border-white/30 shadow-[0_0_12px_rgba(255,255,255,0.15)]'
                    : 'text-white/70 hover:text-white'
                }`}
                title="Exact Screenshot Copy"
              >
                Reference
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

