import React from 'react';
import { X, Cpu, Gauge, Shield, Orbit } from 'lucide-react';
import { SPACECRAFT_SPECS } from '../data/copyData';

interface DossierDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWaitlist: () => void;
}

export const DossierDrawer: React.FC<DossierDrawerProps> = ({
  isOpen,
  onClose,
  onOpenWaitlist,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm transition-opacity duration-200 font-sans">
      <div
        className="w-full max-w-xl h-full white-glass-panel border-l border-white/20 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dossier-title"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/15">
            <div>
              <span className="text-[11px] font-sans tracking-widest uppercase text-white/70">
                Technical Dossier // Craft Architecture
              </span>
              <h2 id="dossier-title" className="text-2xl font-normal text-white mt-1">
                Spacecraft Specifications
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white p-2 rounded-lg transition-colors cursor-pointer"
              aria-label="Close technical dossier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Pillar Highlights in Pure White */}
          <div className="grid grid-cols-2 gap-3 my-6">
            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/15">
              <Gauge className="w-4 h-4 text-white mb-2" />
              <div className="text-[11px] font-sans text-white/70 uppercase">Delta-V</div>
              <div className="text-base font-medium text-white tabular-nums">48.5 km/s</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/15">
              <Cpu className="w-4 h-4 text-white mb-2" />
              <div className="text-[11px] font-sans text-white/70 uppercase">Avionics</div>
              <div className="text-base font-medium text-white">Quantum Triangulation</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/15">
              <Shield className="w-4 h-4 text-white mb-2" />
              <div className="text-[11px] font-sans text-white/70 uppercase">Shielding</div>
              <div className="text-base font-medium text-white">Active Quadrupole</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/15">
              <Orbit className="w-4 h-4 text-white mb-2" />
              <div className="text-[11px] font-sans text-white/70 uppercase">Mission Span</div>
              <div className="text-base font-medium text-white tabular-nums">1,200 Days</div>
            </div>
          </div>

          {/* Detailed Categorical Specifications */}
          <div className="space-y-6">
            {SPACECRAFT_SPECS.map((group) => (
              <div key={group.category} className="space-y-2.5">
                <h3 className="text-xs font-sans uppercase tracking-wider text-white">
                  {group.category}
                </h3>
                <div className="divide-y divide-white/10 bg-white/[0.03] rounded-xl border border-white/15 overflow-hidden">
                  {group.specs.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between px-4 py-3 text-xs sm:text-sm"
                    >
                      <span className="text-white font-normal">{item.label}</span>
                      <span className="text-white font-medium text-right tabular-nums">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA inside Drawer */}
        <div className="pt-8 mt-8 border-t border-white/15 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs text-white/70 hover:text-white transition-colors cursor-pointer py-2 px-3"
          >
            Dismiss
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenWaitlist();
            }}
            className="frosted-pill-btn rounded-full px-5 py-2.5 text-xs text-white cursor-pointer"
          >
            Join Mission Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

