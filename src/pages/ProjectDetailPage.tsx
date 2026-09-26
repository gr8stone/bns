import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { JOURNAL_ARTICLES } from "../data/journal";
import { PROJECTS } from "../data/projects";
import { getYouTubeId, getYouTubeThumbnail } from "../lib/media";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const leadImageRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  const project = useMemo(() => {
    return PROJECTS.find(
      (p) => p.slug === slug || p.aliases?.includes(slug || ""),
    );
  }, [slug]);

  const currentIndex = useMemo(() => {
    return PROJECTS.findIndex(
      (p) => p.slug === slug || p.aliases?.includes(slug || ""),
    );
  }, [slug]);

  const prevProject = useMemo(() => {
    if (currentIndex <= 0) return PROJECTS[PROJECTS.length - 1];
    return PROJECTS[currentIndex - 1];
  }, [currentIndex]);

  const nextProject = useMemo(() => {
    if (currentIndex < 0 || currentIndex >= PROJECTS.length - 1)
      return PROJECTS[0];
    return PROJECTS[currentIndex + 1];
  }, [currentIndex]);

  const { scrollYProgress } = useScroll({
    target: leadImageRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const projectArticle = JOURNAL_ARTICLES.find(
    (article) => article.projectSlug === project.slug,
  );
  const youtubeId = getYouTubeId(project.heroVideo);
  const youtubeThumb = youtubeId
    ? getYouTubeThumbnail(youtubeId, thumbError ? "hq" : "maxres")
    : null;
  const leadPoster = youtubeThumb || project.heroImage;
  const isDirectVideo = Boolean(
    project.heroVideo &&
    (project.heroVideo.endsWith(".mp4") || project.heroVideo.endsWith(".webm")),
  );

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Breadcrumb / Rail Label */}
        <div className="flex items-center justify-between pb-8 border-b border-[#101010]/12 font-mono text-xs text-[#757575] uppercase tracking-wider">
          <Link
            to="/projects"
            className="flex items-center gap-2 hover:text-[#101010] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>PROJECTS ARCHIVE</span>
          </Link>
          <div className="flex items-center gap-2 text-[#101010]">
            <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
            <span>
              {project.category} // {project.year}
            </span>
          </div>
        </div>

        {/* Title & Year */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
          <div className="col-span-1 md:col-span-3">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.94]">
              {project.title}
            </h1>
          </div>
          <div className="col-span-1 text-left md:text-right font-mono text-xs text-[#757575] uppercase">
            <span>YEAR: {project.year}</span>
            <span className="block mt-1">LOCATION: {project.location}</span>
          </div>
        </div>

        {/* Ruled Details / Credits Table */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-[#101010]/12 text-xs font-mono">
          <div>
            <span className="text-[#757575] block uppercase mb-1">
              PARTNER / INITIATIVE
            </span>
            <span className="text-[#101010] font-sans font-medium">
              {project.client}
            </span>
          </div>
          <div>
            <span className="text-[#757575] block uppercase mb-1">
              RESEARCH &amp; PRODUCTION
            </span>
            <span className="text-[#101010] font-sans font-medium">
              {project.architect}
            </span>
          </div>
          <div>
            <span className="text-[#757575] block uppercase mb-1">
              PILLAR / THEME
            </span>
            <span className="text-[#101010] font-sans font-medium">
              {project.category}
            </span>
          </div>
          <div>
            <span className="text-[#757575] block uppercase mb-1">
              CIVIC FOCUS
            </span>
            <span className="text-[#101010] font-sans font-medium">
              {project.services.join(", ")}
            </span>
          </div>
        </div>
      </div>

      {/* Full-Bleed Lead Video / Thumbnail Stage */}
      <div
        ref={leadImageRef}
        className="relative w-full h-[55vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden bg-black my-16 border-t border-b border-[#101010]/12 group"
      >
        {youtubeId && isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover border-0"
          />
        ) : isDirectVideo && isPlaying ? (
          <video
            src={project.heroVideo}
            poster={leadPoster}
            autoPlay
            controls
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="relative w-full h-full">
            <motion.div
              style={{ y: shouldReduceMotion ? "0%" : parallaxY }}
              className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
              <img
                src={leadPoster}
                alt={project.title}
                loading="eager"
                onError={() => setThumbError(true)}
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />
            </motion.div>

            {(youtubeId || isDirectVideo) && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <button
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play documentary video"
                  className="flex items-center gap-3 px-6 py-3.5 bg-[#2446EC] text-white hover:bg-[#101010] transition-colors rounded-none font-mono text-xs uppercase tracking-wider font-semibold cursor-pointer shadow-xl border-0"
                >
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                  <span>Watch Feature &bull; 2026</span>
                </button>
              </div>
            )}
          </div>
        )}

        <div className="absolute bottom-4 left-6 md:left-10 text-white font-mono text-xs uppercase tracking-wider z-20 pointer-events-none">
          PRIMARY EPISODE VISUAL &bull; {project.title}
        </div>
      </div>

      {/* Narrow Narrative Column (4-Column System, Content Starts Column 2) */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#101010]">
                NARRATIVE
              </span>
            </div>
            <span className="font-mono text-xs text-[#757575]">
              STATEMENT OF INTENT
            </span>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-6 text-sm sm:text-base text-[#101010]/85 font-light leading-relaxed">
            <p className="font-display text-xl sm:text-2xl font-normal tracking-[-0.03em] leading-snug text-[#101010]">
              {projectArticle?.subtitle ?? project.summary}
            </p>
            {(projectArticle?.content ?? project.description).map(
              (paragraph, i) => (
                <p
                  key={i}
                  className="text-xs sm:text-sm text-[#757575] leading-relaxed"
                >
                  {paragraph}
                </p>
              ),
            )}
          </div>

          {/* Project Metrics Summary in Column 4 */}
          <div className="col-span-1 divide-y divide-[#101010]/12 border-t border-b border-[#101010]/12">
            {project.stats.map((st) => (
              <div key={st.label} className="py-3 font-mono text-xs">
                <span className="text-[#757575] uppercase block text-[11px] mb-0.5">
                  {st.label}
                </span>
                <span className="text-[#101010] font-semibold tabular-nums">
                  {st.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alternating Full-Bleed and Grid Gallery from CMS */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 pb-24 space-y-12">
          <div className="border-b border-[#101010]/12 pb-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#101010]">
              PRODUCTION &amp; FIELD GALLERY ({project.gallery.length})
            </span>
          </div>

          {/* Gallery Items with 15% view opacity 0/y28px reveal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((item, idx) => (
              <motion.div
                key={item.url + idx}
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  y: shouldReduceMotion ? 0 : 28,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={idx === 0 ? "md:col-span-2" : "col-span-1"}
              >
                <div
                  className={`relative ${idx === 0 ? "aspect-[21/9]" : "aspect-[4/3]"} w-full overflow-hidden bg-zinc-100 border border-[#101010]/12`}
                >
                  <img
                    src={item.url}
                    alt={item.caption || project.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-2 flex justify-between font-mono text-xs text-[#757575] border-b border-[#101010]/12 pb-2">
                  <span>0{idx + 1}</span>
                  <span>{item.caption || project.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Previous & Next Project Navigation Links */}
      <div className="w-full border-t border-[#101010]/12 bg-[#F6F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-2 divide-x divide-[#101010]/12">
          {prevProject && (
            <Link
              to={`/projects/${prevProject.slug}`}
              className={`py-6 px-3 sm:py-12 sm:pr-6 flex flex-col justify-between group select-none hover:bg-white transition-colors duration-200 ${nextProject ? "" : "col-span-2"}`}
            >
              <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase text-[#757575] mb-3 sm:mb-4">
                <ArrowLeft className="w-3.5 h-3.5 shrink-0 group-hover:-translate-x-1 transition-transform" />
                <span className="sm:hidden">PREV</span>
                <span className="hidden sm:inline">PREVIOUS CAMPAIGN</span>
              </div>
              <h4 className="font-display text-base sm:text-3xl font-semibold tracking-[-0.04em] text-[#101010] uppercase">
                {prevProject.title}
              </h4>
              <span className="font-mono text-[10px] sm:text-xs text-[#757575] mt-2">
                {prevProject.category} &bull; {prevProject.year}
              </span>
            </Link>
          )}

          {nextProject && (
            <Link
              to={`/projects/${nextProject.slug}`}
              className={`py-6 px-3 sm:py-12 sm:pl-8 flex flex-col justify-between group select-none hover:bg-white transition-colors duration-200 sm:text-right ${prevProject ? "" : "col-span-2"}`}
            >
              <div className="flex items-center sm:justify-end gap-2 font-mono text-[10px] sm:text-xs uppercase text-[#757575] mb-3 sm:mb-4">
                <span className="sm:hidden">NEXT</span>
                <span className="hidden sm:inline">NEXT CAMPAIGN</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform" />
              </div>
              <h4 className="font-display text-base sm:text-3xl font-semibold tracking-[-0.04em] text-[#101010] uppercase">
                {nextProject.title}
              </h4>
              <span className="font-mono text-[10px] sm:text-xs text-[#757575] mt-2">
                {nextProject.category} &bull; {nextProject.year}
              </span>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
