import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CopyContent, ActiveNavModal } from '../types';

interface NavigationProps {
  content: CopyContent;
  onOpenWaitlist: () => void;
  onSelectNav: (item: ActiveNavModal) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  content,
  onOpenWaitlist,
  onSelectNav,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-40 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-7 sm:pt-8 flex items-center justify-between">
        {/* Left: Logo only */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onSelectNav(null)}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 rounded-full cursor-pointer"
            aria-label="Spacecraft Home"
          >
            {/* Celestial blue glowing orb */}
            <div className="relative w-8 h-8 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-500 blur-[7px] group-hover:blur-[9px] transition-all duration-300 opacity-90" />
              <div className="relative w-5 h-5 rounded-full bg-gradient-to-br from-blue-300 via-blue-500 to-indigo-700 border border-blue-200/50 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
            </div>
            {content.brandName && (
              <span className="text-xs tracking-[0.25em] font-medium text-white uppercase font-sans">
                {content.brandName}
              </span>
            )}
          </button>
        </div>

        {/* Middle: Navigation options with transparent background layer and pure white text */}
        <nav
          className="hidden md:flex items-center justify-center gap-1 sm:gap-2 px-5 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.1] backdrop-blur-md transition-all duration-200 shadow-[0_4px_24px_rgba(0,0,0,0.15)] text-[14px] font-normal text-white tracking-wide font-sans"
          aria-label="Main Navigation"
        >
          {content.navLinks.map((link) => (
            <button
              key={link}
              onClick={() => onSelectNav(link as ActiveNavModal)}
              className="px-3.5 py-1 rounded-full text-white hover:text-white hover:bg-white/[0.12] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40 font-sans"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Right: Clean Join Waitlist button in pure white */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenWaitlist}
            className="frosted-pill-btn rounded-full px-6 py-2.5 text-[13px] font-medium tracking-wide text-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 font-sans"
          >
            {content.joinWaitlistBtn}
          </button>
        </div>

        {/* Mobile: Clean Menu Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-white rounded-lg focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[70px] z-50 bg-black/95 border-b border-white/10 backdrop-blur-xl px-6 py-6 transition-all duration-200 font-sans">
          <div className="flex flex-col gap-4">
            {content.navLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSelectNav(link as ActiveNavModal);
                }}
                className="text-left text-white py-2 text-base font-medium tracking-wide transition-colors"
              >
                {link}
              </button>
            ))}
            <div className="pt-4 border-t border-white/10 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWaitlist();
                }}
                className="w-full frosted-pill-btn rounded-full py-3 text-center text-sm font-medium text-white"
              >
                {content.joinWaitlistBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

