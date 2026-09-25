import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { SectionTwo } from './components/SectionTwo';
import { BackgroundVideo } from './components/BackgroundVideo';
import { WaitlistModal } from './components/WaitlistModal';
import { DossierDrawer } from './components/DossierDrawer';
import { NavSectionModal } from './components/NavSectionModal';
import { COPY_PRESETS } from './data/copyData';
import { CopyMode, ActiveNavModal } from './types';

export default function App() {
  const [copyMode, setCopyMode] = useState<CopyMode>('spacecraft');
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [dossierOpen, setDossierOpen] = useState(false);
  const [activeNavModal, setActiveNavModal] = useState<ActiveNavModal>(null);

  const currentContent = COPY_PRESETS[copyMode];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white relative font-sans">
      {/* Section 1: Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
        {/* Background Video Layer for Section 1: strictly muted, looping, unzoomed (object-contain) */}
        <BackgroundVideo
          videoUrl="https://res.cloudinary.com/qehfzyaf/video/upload/v1790256265/Spaceship_video.mp4"
          storageKey="spacecraft_video_url"
        />

        {/* Structural Top Navigation */}
        <div className="relative z-10">
          <Navigation
            content={currentContent}
            onOpenWaitlist={() => setWaitlistOpen(true)}
            onSelectNav={(item) => setActiveNavModal(item)}
          />
        </div>

        {/* Main Structural Hero Layout */}
        <main className="relative z-10 flex-1 flex flex-col justify-between">
          <HeroSection
            content={currentContent}
            copyMode={copyMode}
            onToggleCopyMode={(mode) => setCopyMode(mode)}
            onOpenDossier={() => setDossierOpen(true)}
          />
        </main>
      </div>

      {/* Section 2: Second Section with Spaceship_video_1.mp4 looping and muted audio */}
      <SectionTwo
        onOpenDossier={() => setDossierOpen(true)}
        onOpenWaitlist={() => setWaitlistOpen(true)}
      />

      {/* Interactive Modal: Waitlist */}
      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />

      {/* Interactive Drawer: Technical Vessel Dossier */}
      <DossierDrawer
        isOpen={dossierOpen}
        onClose={() => setDossierOpen(false)}
        onOpenWaitlist={() => {
          setDossierOpen(false);
          setWaitlistOpen(true);
        }}
      />

      {/* Interactive Modal: Nav Section Details */}
      <NavSectionModal
        section={activeNavModal}
        onClose={() => setActiveNavModal(null)}
        onOpenWaitlist={() => {
          setActiveNavModal(null);
          setWaitlistOpen(true);
        }}
      />
    </div>
  );
}

