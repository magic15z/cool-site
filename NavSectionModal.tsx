import React from 'react';
import { X, Check } from 'lucide-react';
import { ActiveNavModal } from '../types';

interface NavSectionModalProps {
  section: ActiveNavModal;
  onClose: () => void;
  onOpenWaitlist: () => void;
}

export const NavSectionModal: React.FC<NavSectionModalProps> = ({
  section,
  onClose,
  onOpenWaitlist,
}) => {
  if (!section) return null;

  const renderContent = () => {
    switch (section) {
      case 'Features':
        return (
          <div className="space-y-4 font-sans">
            <p className="text-sm text-white font-normal leading-relaxed">
              Every system aboard the spacecraft is designed for continuous autonomous operation across astronomical distances.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Dual-stage variable plasma propulsion with 12,000s specific impulse</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Autonomous orbital mechanics calculation running on radiation-hardened arrays</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Graphene-layered micrometeoroid shields with self-healing thermal coating</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Deep space optical array transmitting gigabit telemetry through atmospheric scintillation</span>
              </li>
            </ul>
          </div>
        );
      case 'Workflows':
        return (
          <div className="space-y-4 font-sans">
            <p className="text-sm text-white font-normal leading-relaxed">
              From launch orchestration to autonomous docking, our unified command framework manages the flight envelope:
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-white/[0.04] rounded-xl border border-white/15 text-xs">
                <div className="font-medium text-white">01. Ground Calibration & Fuel Loading</div>
                <div className="text-white/80 mt-1">Autonomous cryogenics chill-down and magnetoplasma coil verification.</div>
              </div>
              <div className="p-3 bg-white/[0.04] rounded-xl border border-white/15 text-xs">
                <div className="font-medium text-white">02. Trans-Lunar & Interplanetary Injection</div>
                <div className="text-white/80 mt-1">Continuous high-efficiency thrust burns optimized for minimal delta-v expenditure.</div>
              </div>
              <div className="p-3 bg-white/[0.04] rounded-xl border border-white/15 text-xs">
                <div className="font-medium text-white">03. Target Orbit Stabilization</div>
                <div className="text-white/80 mt-1">Automated station-keeping around target gravity wells and planetary bodies.</div>
              </div>
            </div>
          </div>
        );
      case 'Testimonials':
        return (
          <div className="space-y-4 font-sans">
            <p className="text-sm text-white font-normal leading-relaxed">
              Perspectives from aerospace engineers, mission controllers, and astrophysicists:
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-white/[0.04] rounded-xl border border-white/15">
                <p className="text-xs text-white italic font-light">
                  "The propulsion efficiency completely redefines transit windows to Mars. Missions that took nine months are now viable within ninety days."
                </p>
                <div className="mt-2 text-[11px] text-white/70">
                  Dr. E. Vance · Principal Flight Dynamics Officer
                </div>
              </div>
              <div className="p-4 bg-white/[0.04] rounded-xl border border-white/15">
                <p className="text-xs text-white italic font-light">
                  "Unmatched optical telemetry stability even when operating past Jovian orbit. An astonishing milestone in deep exploration vessels."
                </p>
                <div className="mt-2 text-[11px] text-white/70">
                  Sarah Lindqvist · Deep Space Communications Lead
                </div>
              </div>
            </div>
          </div>
        );
      case 'Our Vision':
        return (
          <div className="space-y-4 font-sans">
            <p className="text-sm text-white font-normal leading-relaxed">
              We believe humanity is destined to become a multi-planetary species. Our mission is to engineer the transport architecture that makes voyages across the solar system predictable, sustainable, and routine.
            </p>
            <p className="text-sm text-white font-normal leading-relaxed">
              By removing atmospheric limitations and harnessing cutting-edge plasma physics, we open horizons that were once confined to human imagination.
            </p>
          </div>
        );
      case 'Contact':
        return (
          <div className="space-y-4 font-sans">
            <p className="text-sm text-white font-normal leading-relaxed">
              Direct telemetry inquiries and orbital flight rendezvous coordination can be initiated through mission control:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/15">
              <div className="text-sm font-medium text-white">Encrypted Flight Operations Channel</div>
              <p className="text-xs text-white/80 mt-1">
                Real-time dispatch available for active mission partners and payload integrators via secure orbital uplink.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md font-sans">
      <div
        className="relative w-full max-w-lg white-glass-panel rounded-2xl p-6 sm:p-8 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="nav-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/70 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-5">
          <span className="text-[11px] font-sans tracking-widest uppercase text-white/70">
            Navigation Index
          </span>
          <h2 id="nav-modal-title" className="text-2xl font-normal text-white mt-1">
            {section}
          </h2>
        </div>

        {renderContent()}

        <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs text-white/70 hover:text-white cursor-pointer py-1.5 px-2"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenWaitlist();
            }}
            className="frosted-pill-btn rounded-full px-5 py-2 text-xs text-white cursor-pointer"
          >
            Join the waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

