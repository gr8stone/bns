import { ArrowRight, Eye, Maximize2, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../../types";
import { LightboxModal, type LightboxImage } from "./LightboxModal";
import { getYouTubeId, getYouTubeThumbnail } from "../../lib/media";

interface ArchvizProjectShowcaseProps {
  project: Project;
  index: number;
}

export function ArchvizProjectShowcase({
  project,
  index,
}: ArchvizProjectShowcaseProps) {
  const [isPlayingYouTube, setIsPlayingYouTube] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [thumbError, setThumbError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const youtubeId = getYouTubeId(project.heroVideo);
  const youtubeThumb = youtubeId
    ? getYouTubeThumbnail(youtubeId, thumbError ? "hq" : "maxres")
    : null;
  const videoPoster = youtubeThumb || project.heroImage;
  const isDirectVideo = Boolean(
    project.heroVideo &&
      (project.heroVideo.endsWith(".mp4") || project.heroVideo.endsWith(".webm"))
  );

  // Compile all high-res stills for THIS project only (CMS Mindset: zero foreign image injection)
  const stillsMap = new Map<string, LightboxImage>();

  if (project.gallery && project.gallery.length > 0) {
    project.gallery.forEach((g) => {
      if (g.url && !stillsMap.has(g.url)) {
        stillsMap.set(g.url, {
          url: g.url,
          caption: g.caption || `${project.title} — Production Visual`,
          title: project.title,
        });
      }
    });
  }

  if (project.process) {
    project.process.forEach((p) => {
      if (p.image && !stillsMap.has(p.image)) {
        stillsMap.set(p.image, {
          url: p.image,
          caption: `${p.step} // ${p.title} — ${p.description}`,
          title: project.title,
        });
      }
    });
  }

  if (project.heroImage && !stillsMap.has(project.heroImage)) {
    stillsMap.set(project.heroImage, {
      url: project.heroImage,
      caption: `${project.title} — Lead Production Visual`,
      title: project.title,
    });
  }

  if (project.beforeAfter) {
    if (
      project.beforeAfter.beforeImage &&
      !stillsMap.has(project.beforeAfter.beforeImage)
    ) {
      stillsMap.set(project.beforeAfter.beforeImage, {
        url: project.beforeAfter.beforeImage,
        caption:
          project.beforeAfter.beforeLabel || `${project.title} — Archival Dossier`,
        title: project.title,
      });
    }
    if (
      project.beforeAfter.afterImage &&
      !stillsMap.has(project.beforeAfter.afterImage)
    ) {
      stillsMap.set(project.beforeAfter.afterImage, {
        url: project.beforeAfter.afterImage,
        caption:
          project.beforeAfter.afterLabel || `${project.title} — Citizen Delivery`,
        title: project.title,
      });
    }
  }

  // If project is hosted on YouTube, leverage authentic YouTube frames (25%, 50%, 75% video keyframes)
  if (youtubeId) {
    const ytFrames = [
      { key: "1", label: "Opening Briefing" },
      { key: "2", label: "Key Investigative Finding" },
      { key: "3", label: "Civic Resolution & Citizen Impact" },
    ];
    ytFrames.forEach((f) => {
      const url = `https://img.youtube.com/vi/${youtubeId}/${f.key}.jpg`;
      if (!stillsMap.has(url)) {
        stillsMap.set(url, {
          url,
          caption: `${project.title} — YouTube Episode: ${f.label}`,
          title: project.title,
        });
      }
    });
  }

  const stills: LightboxImage[] = Array.from(stillsMap.values());

  // Partition into 2 alternating rows (reduced from 3 rows to avoid clutter for sparse image sets)
  const itemsWithIdx = stills.map((item, originalIndex) => ({
    item,
    originalIndex,
  }));

  const r1Base = itemsWithIdx.filter((_, i) => i % 2 === 0);
  const r2Base = itemsWithIdx.filter((_, i) => i % 2 === 1);

  // Helper to ensure each row has at least 3 items before the duplicate marquee loop
  const ensureMinItems = (arr: typeof itemsWithIdx, min: number = 3) => {
    if (arr.length === 0) return itemsWithIdx;
    let res = [...arr];
    while (res.length < min) {
      res = [...res, ...arr];
    }
    return res;
  };

  const row1BaseEnsured = ensureMinItems(r1Base);
  const row2BaseEnsured = ensureMinItems(r2Base.length > 0 ? r2Base : r1Base);

  // Duplicate each row array for seamless 0% -> -50% infinite loop
  const row1Loop = [...row1BaseEnsured, ...row1BaseEnsured];
  const row2Loop = [...row2BaseEnsured, ...row2BaseEnsured];

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const openFullscreenVideo = () => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleOpenLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const formattedNumber = String(index + 1).padStart(2, "0");

  return (
    <article className="w-full bg-white text-text-base py-12 sm:py-16 border-b border-black/[0.08] select-none">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER: MONOGRAM NUMBER & BIG BOLD TITLE (BNS BLUE & WHITE THEME)
          ───────────────────────────────────────────────────────────── */}
      <div className="mb-6 sm:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-slate">
            <span className="w-1.5 h-1.5 bg-[#2446EC] inline-block" />
            <span className="text-[#2446EC] font-semibold">
              PRODUCTION {formattedNumber} // {project.category}
            </span>
            <span>&bull;</span>
            <span>{project.location}</span>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.05em] text-text-base uppercase">
            <Link
              to={`/projects/${project.slug}`}
              className="hover:text-[#2446EC] transition-colors"
            >
              {project.title}
            </Link>
          </h3>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs text-slate">
          <span className="hidden sm:inline">YEAR: {project.year}</span>
          <span>&bull;</span>
          <Link
            to={`/projects/${project.slug}`}
            className="text-[#2446EC] font-semibold uppercase hover:underline inline-flex items-center gap-1.5"
          >
            <span>View Full Campaign</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. THE CMS MEDIA MATRIX (PRIMARY STAGE 60% + 2-ROW STILLS 40%)
          ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-stretch">
        {/* LEFT: Primary Stage (YouTube Video Player, MP4 Player, or 4K Photographic Frame) */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col">
          <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] w-full h-full min-h-[280px] sm:min-h-[420px] lg:min-h-[500px] overflow-hidden bg-slate-900 border border-black/[0.08] group shadow-xs">
            {youtubeId ? (
              isPlayingYouTube ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover border-0"
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={videoPoster}
                    alt={project.title}
                    loading="lazy"
                    onError={() => setThumbError(true)}
                    className="w-full h-full object-cover filter brightness-[0.96]"
                  />
                  {/* Vibrant Blue Play Trigger Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <button
                      onClick={() => setIsPlayingYouTube(true)}
                      aria-label="Play documentary video"
                      className="group/btn flex items-center gap-3 px-6 py-3.5 bg-[#2446EC] hover:bg-[#1B35B8] text-white backdrop-blur-md border border-white/20 shadow-2xl shadow-[#2446EC]/40 transition-all duration-200 cursor-pointer"
                    >
                      <span className="w-8 h-8 rounded-full bg-white text-[#2446EC] group-hover/btn:scale-105 flex items-center justify-center transition-transform">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </span>
                      <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                        PLAY EPISODE
                      </span>
                    </button>
                  </div>
                </div>
              )
            ) : isDirectVideo ? (
              <video
                ref={videoRef}
                src={project.heroVideo}
                poster={videoPoster}
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                disablePictureInPicture
                className="w-full h-full object-cover filter brightness-95 contrast-105"
              />
            ) : (
              <div
                onClick={() => handleOpenLightbox(0)}
                className="relative w-full h-full cursor-pointer group/lead"
              >
                <img
                  src={project.heroImage}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-95 group-hover/lead:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover/lead:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-[#2446EC] opacity-0 group-hover/lead:opacity-100 transition-opacity flex items-center justify-center shadow-lg border border-[#2446EC]/20">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            )}

            {/* Subtle Gradient vignette for non-playing overlay */}
            {(!youtubeId || !isPlayingYouTube) && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />
            )}

            {/* Top Badges: Format Tag Left + Direct YouTube Link Right */}
            {(!youtubeId || !isPlayingYouTube) && (
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 right-3 sm:right-4 z-10 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 bg-[#2446EC] text-white text-[10px] sm:text-xs font-mono uppercase tracking-widest font-semibold border border-white/20 shadow-md">
                  {project.videoDuration ||
                    (youtubeId
                      ? "YOUTUBE CIVIC BROADCAST"
                      : isDirectVideo
                      ? "CIVIC REEL"
                      : "PHOTOJOURNALISM ARCHIVE")}
                </span>

                {youtubeId && (
                  <a
                    href={`https://www.youtube.com/watch?v=${youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 hover:bg-[#2446EC] text-[#2446EC] hover:text-white border border-[#2446EC]/30 text-[10px] sm:text-xs font-mono uppercase tracking-wider font-semibold shadow-md transition-colors"
                  >
                    <span>WATCH ON YOUTUBE</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            )}

            {/* Bottom Left: Title & Location Watermark */}
            {(!youtubeId || !isPlayingYouTube) && (
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 pointer-events-none">
                <span className="font-mono text-xs text-white/95 uppercase tracking-wider block font-semibold drop-shadow-sm">
                  {project.title} &bull; {project.location}
                </span>
                <span className="font-mono text-[10px] text-[#2446EC] bg-white/95 px-2 py-0.5 uppercase tracking-widest inline-block font-semibold mt-1">
                  BUDGET NDIO STORY ARCHIVE
                </span>
              </div>
            )}

            {/* Bottom Right: Discreet Audio & Fullscreen Controls for direct videos */}
            {isDirectVideo && (
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center gap-2">
                <button
                  onClick={toggleSound}
                  aria-label={isMuted ? "Enable audio" : "Mute audio"}
                  className="w-8 h-8 rounded-full bg-white/90 hover:bg-[#2446EC] text-[#2446EC] hover:text-white border border-black/10 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={openFullscreenVideo}
                  aria-label="Fullscreen video"
                  className="w-8 h-8 rounded-full bg-white/90 hover:bg-[#2446EC] text-[#2446EC] hover:text-white border border-black/10 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Reduced 2-Row Moving Production Stills (BNS Blue & White Theme) */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between gap-2.5 h-full min-h-[280px] sm:min-h-[420px] lg:min-h-[500px] overflow-hidden bg-[#F8FAFC] border border-[#2446EC]/15 p-2.5 sm:p-3 transform-gpu">
          {/* Panel Header */}
          <div className="flex items-center justify-between px-1 py-0.5 font-mono text-[11px]">
            <div className="flex items-center gap-2 text-[#2446EC] font-semibold">
              <span className="w-2 h-2 bg-[#2446EC] inline-block" />
              <span className="uppercase tracking-wider">
                PRODUCTION ARCHIVE ({stills.length})
              </span>
            </div>
            <span className="text-slate text-[10px] uppercase">
              HOVER TO PAUSE
            </span>
          </div>

          {/* Row 1: Slides Left (animate-marquee) */}
          <div className="relative w-full overflow-hidden h-[120px] sm:h-[160px] lg:h-[195px] flex items-center">
            <div
              className="flex items-center gap-2 sm:gap-2.5 animate-marquee w-max"
              style={{ animationDuration: "34s" }}
            >
              {row1Loop.map((entry, idx) => (
                <div
                  key={`r1-${idx}-${entry.originalIndex}`}
                  onClick={() => handleOpenLightbox(entry.originalIndex)}
                  className="group relative w-48 sm:w-60 lg:w-68 h-[120px] sm:h-[160px] lg:h-[195px] flex-shrink-0 overflow-hidden bg-white border border-black/10 hover:border-[#2446EC] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md"
                >
                  <img
                    src={entry.item.url}
                    alt={
                      entry.item.caption || `${project.title} // 0${entry.originalIndex + 1}`
                    }
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-[0.98] group-hover:scale-105 transition-all duration-500 pointer-events-none select-none"
                  />
                  <div className="absolute inset-0 bg-[#2446EC]/0 group-hover:bg-[#2446EC]/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-white text-[#2446EC] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center shadow-lg border border-[#2446EC]/20">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 z-10 pointer-events-none">
                    <span className="px-2 py-0.5 bg-white/95 text-[10px] font-mono font-semibold text-[#2446EC] border border-[#2446EC]/20 uppercase tabular-nums shadow-xs">
                      0{entry.originalIndex + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Slides Rightwards (animate-marquee-reverse) */}
          <div className="relative w-full overflow-hidden h-[120px] sm:h-[160px] lg:h-[195px] flex items-center">
            <div
              className="flex items-center gap-2 sm:gap-2.5 animate-marquee-reverse w-max"
              style={{ animationDuration: "38s" }}
            >
              {row2Loop.map((entry, idx) => (
                <div
                  key={`r2-${idx}-${entry.originalIndex}`}
                  onClick={() => handleOpenLightbox(entry.originalIndex)}
                  className="group relative w-48 sm:w-60 lg:w-68 h-[120px] sm:h-[160px] lg:h-[195px] flex-shrink-0 overflow-hidden bg-white border border-black/10 hover:border-[#2446EC] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md"
                >
                  <img
                    src={entry.item.url}
                    alt={
                      entry.item.caption || `${project.title} // 0${entry.originalIndex + 1}`
                    }
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-[0.98] group-hover:scale-105 transition-all duration-500 pointer-events-none select-none"
                  />
                  <div className="absolute inset-0 bg-[#2446EC]/0 group-hover:bg-[#2446EC]/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-white text-[#2446EC] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center shadow-lg border border-[#2446EC]/20">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 z-10 pointer-events-none">
                    <span className="px-2 py-0.5 bg-white/95 text-[10px] font-mono font-semibold text-[#2446EC] border border-[#2446EC]/20 uppercase tabular-nums shadow-xs">
                      0{entry.originalIndex + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel Footer */}
          <div className="flex items-center justify-between px-1 py-0.5 font-mono text-[10px] text-slate border-t border-black/[0.06]">
            <span className="uppercase tracking-wider">FIELD EVIDENCE</span>
            <span className="text-[#2446EC] font-semibold uppercase">
              View &rarr;
            </span>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. EDITORIAL PROJECT SYNOPSIS & CTA (BNS BLUE & WHITE THEME)
          ───────────────────────────────────────────────────────────── */}
      <div className="pt-8 sm:pt-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left: Lead Summary */}
        <div className="md:col-span-6 lg:col-span-7 space-y-4">
          <p className="font-sans text-base sm:text-lg md:text-xl font-normal text-text-base leading-snug">
            {project.summary}
          </p>
        </div>

        {/* Right: Desk Metadata & Full Case Study CTA */}
        <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between h-full space-y-4 md:pl-6 md:border-l border-black/[0.08]">
          <div className="flex items-center justify-between pt-2">
            <span className="font-mono text-xs text-[#2446EC] font-semibold uppercase tracking-wider">
              {project.category} &bull; {project.year}
            </span>
            <Link
              to={`/projects/${project.slug}`}
              className="solum-btn px-6 py-2.5 bg-[#2446EC] hover:bg-[#1B35B8] text-white border border-[#2446EC] transition-colors text-xs font-mono uppercase tracking-wider font-semibold inline-flex items-center gap-2 shadow-sm"
            >
              <span>VIEW FULL CAMPAIGN</span>
              <span className="btn-arrow ml-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 4K Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={stills}
        currentIndex={lightboxIndex}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </article>
  );
}
