import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [missionInterest, setMissionInterest] = useState('Deep Space Exploration');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid communication address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-200 font-sans">
      <div
        className="relative w-full max-w-md blue-glass-panel rounded-2xl p-6 sm:p-8 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/70 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          aria-label="Close waitlist modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-sans tracking-widest uppercase text-white/70">
                Mission Manifest // Communication Channel
              </span>
              <h2 id="waitlist-title" className="text-2xl font-normal text-white mt-1">
                Spacecraft Dispatch
              </h2>
              <p className="text-sm text-white mt-2 font-normal leading-relaxed">
                Connect with our mission flight command for direct launch updates, technical releases, and rendezvous telemetry.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-sans text-white uppercase tracking-wider mb-2">
                  Mission Interest
                </label>
                <select
                  value={missionInterest}
                  onChange={(e) => setMissionInterest(e.target.value)}
                  className="w-full bg-black/70 border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
                >
                  <option value="Deep Space Exploration" className="bg-black text-white">Deep Space Exploration (Outer Solar System)</option>
                  <option value="Orbital Logistics" className="bg-black text-white">Orbital Habitat & Cargo Logistics</option>
                  <option value="Scientific Telemetry" className="bg-black text-white">Scientific Telemetry & Sensor Deployment</option>
                  <option value="Propulsion Engineering" className="bg-black text-white">Variable Specific Impulse Research</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-sans text-white uppercase tracking-wider mb-2">
                  Communication Frequency / Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="commander@spacecraft.aero"
                  className="w-full bg-black/70 border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white focus:ring-1 focus:ring-white font-sans"
                  required
                />
                {error && <p className="text-xs text-rose-400 mt-1.5">{error}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium text-white bg-white/20 hover:bg-white/30 border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-colors cursor-pointer font-sans"
                >
                  <span>Submit Manifest Registration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-white/60 text-center font-normal">
                Encrypted communication. No unsolicited transmission.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center font-sans">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/30 text-white flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-normal text-white">
              Registration Confirmed
            </h3>
            <p className="text-sm text-white mt-2 font-normal max-w-xs mx-auto">
              Your transmission for <strong className="text-white">{email}</strong> in{' '}
              <strong className="text-white">{missionInterest}</strong> has been logged to the mission manifest.
            </p>
            <div className="mt-6">
              <button
                onClick={handleReset}
                className="frosted-pill-btn rounded-full px-6 py-2.5 text-xs text-white cursor-pointer"
              >
                Close Transmission
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

