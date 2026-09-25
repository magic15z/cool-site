import React from 'react';
import { BackgroundVideo } from './BackgroundVideo';
import { ArrowUpRight } from 'lucide-react';

interface SectionTwoProps {
  onOpenDossier: () => void;
  onOpenWaitlist: () => void;
}

const SECTION_TWO_VIDEO_URL =
  'https://res.cloudinary.com/qehfzyaf/video/upload/v1790256263/Spaceship_video_1.mp4';

export const SectionTwo: React.FC<SectionTwoProps> = ({
  onOpenDossier,
  onOpenWaitlist,
}) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between max-w-full w-full mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-12 sm:pb-16 font-sans overflow-hidden bg-transparent text-white">
      {/* Background Video: Looping, muted audio, full-bleed coverage with NO black overlay or dark tint */}
      <BackgroundVideo
        videoUrl={SECTION_TWO_VIDEO_URL}
        storageKey="section_two_video_url"
        objectFit="cover"
        showStars={false}
      />

      {/* Top Header Area: NO urgency text at the top */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Subtle Category Title in DM Sans - clean, no urgency words */}
        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-[13px] tracking-[0.22em] uppercase font-light text-white font-sans">
            Kinetic Propulsion & Telemetry Architecture
          </span>
          <div className="w-12 h-px bg-white/30" />
        </div>

        {/* Display Headline in DM Sans with pure white text and no yellow highlight */}
        <h2 className="mt-4 text-[32px] sm:text-[44px] md:text-[54px] font-light leading-[1.12] tracking-[-0.02em] text-white select-none max-w-3xl font-sans">
          <span className="block font-light text-white">
            Autonomous deep space
          </span>
          <span className="block mt-1 font-normal text-white">
            transit dynamics
          </span>
        </h2>

        {/* Narrative Description in pure white DM Sans */}
        <p className="mt-5 sm:mt-6 max-w-xl text-white font-normal text-sm sm:text-base leading-relaxed tracking-normal font-sans">
          Engineered for extreme orbital trajectories and self-sustaining deep transit. Each subsystem calculates continuous thrust vectors through plasma coil modulation and autonomous stellar triangulation.
        </p>

        {/* Compact Stat Cards (Reduced Height, Pure White, Transparent Glass, zero dark shadow) */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
          <div className="rounded-xl px-5 py-2.5 sm:px-6 sm:py-3 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.15] hover:border-white/30 backdrop-blur-md transition-all duration-300 min-w-[130px] sm:min-w-[150px] flex flex-col justify-center">
            <span className="text-2xl sm:text-3xl font-light tracking-tight text-white font-sans leading-none">
              12,000s
            </span>
            <span className="text-[11px] font-light text-white uppercase tracking-wider mt-1">
              Plasma Isp
            </span>
            <div className="mt-1.5 w-6 h-0.5 bg-white/40 rounded-full" />
          </div>

          <div className="rounded-xl px-5 py-2.5 sm:px-6 sm:py-3 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.15] hover:border-white/30 backdrop-blur-md transition-all duration-300 min-w-[130px] sm:min-w-[150px] flex flex-col justify-center">
            <span className="text-2xl sm:text-3xl font-light tracking-tight text-white font-sans leading-none">
              48.5 km/s
            </span>
            <span className="text-[11px] font-light text-white uppercase tracking-wider mt-1">
              Total Delta-V
            </span>
            <div className="mt-1.5 w-6 h-0.5 bg-white/40 rounded-full" />
          </div>

          <div className="rounded-xl px-5 py-2.5 sm:px-6 sm:py-3 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.15] hover:border-white/30 backdrop-blur-md transition-all duration-300 min-w-[130px] sm:min-w-[150px] flex flex-col justify-center">
            <span className="text-2xl sm:text-3xl font-light tracking-tight text-white font-sans leading-none">
              0.82 g
            </span>
            <span className="text-[11px] font-light text-white uppercase tracking-wider mt-1">
              Continuous Thrust
            </span>
            <div className="mt-1.5 w-6 h-0.5 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom Area: Hairline divider, secondary telemetry blurb, and pure white actions */}
      <div className="relative z-10 max-w-7xl mx-auto w-full mt-12 sm:mt-16 pt-6">
        <div className="w-full h-px bg-white/20 mb-6 sm:mb-8" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="max-w-md">
            <p className="text-[12px] sm:text-[13px] leading-relaxed text-white font-normal tracking-wide font-sans">
              Continuous pulsed-inductive fields maintain high-temperature ionization without electrode erosion, enabling multi-year interplanetary voyages across outer planetary systems.
            </p>
          </div>

          {/* Action buttons in pure white */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDossier}
              className="frosted-pill-btn rounded-full px-6 py-2.5 sm:px-7 sm:py-3 text-[13px] sm:text-[13.5px] font-medium tracking-wide text-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 font-sans inline-flex items-center gap-2"
            >
              <span>Vessel Specifications</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={onOpenWaitlist}
              className="frosted-pill-btn rounded-full px-6 py-2.5 sm:px-7 sm:py-3 text-[13px] sm:text-[13.5px] font-medium tracking-wide text-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 font-sans"
            >
              Join Mission Manifest
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
