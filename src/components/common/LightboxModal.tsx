import { useEffect, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SHOWCASE_CONTENT } from '../../data/content/showcase';

const content = SHOWCASE_CONTENT.lightbox;

export interface LightboxImage {
  url: string;
  caption?: string;
  title?: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: LightboxImage[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export function LightboxModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}: LightboxModalProps) {
  const currentImage = images[currentIndex];
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  // Keyboard navigation & escape listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useLayoutEffect(() => {
    if (!isOpen) return;

    previouslyFocusedRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    closeButtonRef.current?.focus();

    return () => {
      if (previouslyFocusedRef.current?.isConnected) {
        previouslyFocusedRef.current.focus();
      }
      previouslyFocusedRef.current = null;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        ),
      ).filter(
        (element) =>
          !element.hasAttribute('hidden') &&
          element.getAttribute('aria-hidden') !== 'true' &&
          element.getClientRects().length > 0,
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!dialogRef.current.contains(document.activeElement)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleTab);
    return () => window.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={content.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 md:p-8 select-none"
        onClick={onClose}
      >
        {/* Top Header Bar */}
        <div
          className="w-full flex items-center justify-between text-white/70 font-mono text-xs z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-white rounded-full inline-block" />
            <span className="uppercase tracking-widest text-white font-medium">
              {content.title}
            </span>
            <span className="text-white/40 hidden sm:inline">{content.titleDivider}</span>
            <span className="text-white/60 hidden sm:inline tabular-nums">
              {String(currentIndex + 1).padStart(2, '0')} {content.counterSeparator} {String(images.length).padStart(2, '0')}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-white/40 hidden md:inline">
              {content.keyboardHint}
            </span>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label={content.closeAriaLabel}
              className="w-10 h-10 border border-white/20 hover:border-white text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Main Stage Viewport */}
        <div
          className="relative flex-1 flex items-center justify-center w-full my-auto py-4 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Previous Arrow */}
          {images.length > 1 && (
            <button
              onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
              aria-label={content.previousAriaLabel}
              className="absolute left-2 sm:left-4 z-20 w-12 h-12 border border-white/20 bg-black/60 hover:bg-white hover:text-black hover:border-white text-white flex items-center justify-center transition-colors cursor-pointer group"
            >
              <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" />
            </button>
          )}

          {/* Main Full-Res Render */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage.url + currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[90vw] max-h-[78vh] flex items-center justify-center"
            >
              <img
                src={currentImage.url}
                alt={currentImage.caption || content.imageAltFallback}
                className="max-w-full max-h-[78vh] w-auto h-auto object-contain border border-white/10 shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>

          {/* Next Arrow */}
          {images.length > 1 && (
            <button
              onClick={() => onNavigate((currentIndex + 1) % images.length)}
              aria-label={content.nextAriaLabel}
              className="absolute right-2 sm:right-4 z-20 w-12 h-12 border border-white/20 bg-black/60 hover:bg-white hover:text-black hover:border-white text-white flex items-center justify-center transition-colors cursor-pointer group"
            >
              <ChevronRight className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>

        {/* Bottom Caption & Thumbnail Strip */}
        <div
          className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/10 font-mono text-xs text-white/70 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-left w-full sm:w-auto">
            {currentImage.title && (
              <span className="font-semibold text-white uppercase block sm:inline sm:mr-3">
                {currentImage.title}
              </span>
            )}
            <span className="text-white/60 font-sans text-xs">
              {currentImage.caption || content.captionFallback}
            </span>
          </div>

          {/* Mini Thumbnail Dots / Strip */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar max-w-full py-1">
            {images.map((img, idx) => (
              <button
                key={img.url + idx}
                onClick={() => onNavigate(idx)}
                className={`w-9 h-7 border transition-all cursor-pointer overflow-hidden flex-shrink-0 ${
                  idx === currentIndex
                    ? 'border-white scale-110 opacity-100 shadow-md'
                    : 'border-white/20 opacity-40 hover:opacity-80'
                }`}
              >
                <img
                  src={img.url}
                  alt={content.thumbnailAlt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
