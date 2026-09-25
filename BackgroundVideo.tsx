import React, { useState, useRef, useEffect } from 'react';
import { Video, Settings2, Check, Sparkles } from 'lucide-react';

interface BackgroundVideoProps {
  videoUrl?: string;
  initialUrl?: string;
  storageKey?: string;
  allowCustomUrl?: boolean;
  objectFit?: 'cover' | 'contain';
  showStars?: boolean;
}

const DEFAULT_HERO_URL =
  'https://res.cloudinary.com/qehfzyaf/video/upload/v1790256265/Spaceship_video.mp4';

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoUrl: explicitUrl,
  initialUrl = DEFAULT_HERO_URL,
  storageKey = 'spacecraft_video_url',
  allowCustomUrl = false,
  objectFit = 'cover',
  showStars = false,
}) => {
  const [currentUrl, setCurrentUrl] = useState(() => {
    if (explicitUrl) return explicitUrl;
    const saved = localStorage.getItem(storageKey);
    if (saved && saved.includes('console.cloudinary.com')) {
      localStorage.setItem(storageKey, initialUrl);
      return initialUrl;
    }
    return saved || initialUrl;
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState(currentUrl);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Sync if explicitUrl changes
  useEffect(() => {
    if (explicitUrl) {
      setCurrentUrl(explicitUrl);
      setInputUrl(explicitUrl);
    }
  }, [explicitUrl]);

  // Synchronize playback when URL changes
  useEffect(() => {
    setIsLoaded(false);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay may wait for user interaction
      });
    }
  }, [currentUrl]);

  // Subtle celestial starfield particle effect on canvas (if enabled)
  useEffect(() => {
    if (!showStars) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const starCount = 75;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.1 + 0.3,
      alpha: Math.random() * 0.6 + 0.2,
      velocity: Math.random() * 0.12 + 0.04,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.shadowBlur = 3;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();

        star.y -= star.velocity;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [showStars]);

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;
    setCurrentUrl(inputUrl.trim());
    if (storageKey) {
      localStorage.setItem(storageKey, inputUrl.trim());
    }
    setIsSettingsOpen(false);
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 font-sans">
      {/* Optional Dynamic Starfield Backdrop Canvas */}
      {showStars && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
        />
      )}

      {/* Main Video Element: Full-bleed cover or contain, looping, muted, zero black overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          ref={videoRef}
          src={currentUrl}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          onCanPlay={() => setIsLoaded(true)}
          onPlay={() => setIsLoaded(true)}
          className={`w-full h-full ${
            objectFit === 'cover' ? 'object-cover' : 'object-contain'
          } transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transform: 'none' }}
        />
      </div>

      {/* Optional Persistent trigger for Video URL settings */}
      {allowCustomUrl && (
        <div className="pointer-events-auto absolute bottom-4 right-6 sm:right-10 z-30 font-sans">
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 backdrop-blur-md text-[11px] font-medium text-white transition-all duration-200 cursor-pointer shadow-lg"
            title="Configure Background Video"
          >
            <Video className="w-3.5 h-3.5 text-white" />
            <span className="hidden sm:inline">Change Video</span>
          </button>
        </div>
      )}

      {/* Video URL Config Modal */}
      {isSettingsOpen && (
        <div className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md font-sans">
          <div className="relative w-full max-w-lg white-glass-panel rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="mb-4">
              <div className="flex items-center gap-2 text-white text-xs font-sans uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Background Video Settings</span>
              </div>
              <h3 className="text-xl font-normal text-white mt-1">
                Background Video Configuration
              </h3>
              <p className="text-xs text-white/80 mt-1 leading-relaxed">
                The video is configured to automatically loop, stay muted, and preserve its exact native aspect ratio without any zoom or cropping.
              </p>
            </div>

            <form onSubmit={handleSaveUrl} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white mb-1.5">
                  Video Source URL
                </label>
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="https://res.cloudinary.com/.../Spaceship_video.mp4"
                  className="w-full bg-black/70 border border-white/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white focus:ring-1 focus:ring-white font-mono"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setInputUrl(initialUrl)}
                  className="text-xs text-white/70 hover:text-white transition-colors cursor-pointer py-2"
                >
                  Reset Default
                </button>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsSettingsOpen(false)}
                    className="px-4 py-2 text-xs text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-white bg-white/20 hover:bg-white/30 border border-white/30 transition-colors cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Apply</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
