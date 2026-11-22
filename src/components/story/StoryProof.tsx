import { HOME_CONTENT } from "../../data/content/home";
import { ChapterMarker, CountUp, MaskLine, Reveal } from "./primitives";

const CONTENT = HOME_CONTENT.proof;

/** Chapter 03: the record. Numbers first, then the people and partners behind them. */
export function StoryProof() {
  return (
    <section className="w-full bg-white text-text-base">
      <div className="max-w-container mx-auto px-5 sm:px-8 md:px-10 pt-24 md:pt-36 pb-16 md:pb-20">
        <ChapterMarker chapter={CONTENT.chapter} label={CONTENT.eyebrow} />

        <h2 className="mt-10 md:mt-14 font-display text-[clamp(38px,6vw,88px)] font-medium tracking-[-0.05em] leading-[0.96]">
          <MaskLine>{CONTENT.headlineLead}</MaskLine>
          <MaskLine delay={0.1} className="text-accent">
            {CONTENT.headlineAccent}
          </MaskLine>
        </h2>

        {/* Metrics */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 border-t border-black/[0.08]">
          {CONTENT.metrics.map((metric, i) => (
            <Reveal
              key={metric.label}
              delay={i * 0.1}
              className={`py-8 sm:py-10 border-b sm:border-b-0 border-black/[0.08] ${
                i > 0 ? "sm:border-l sm:pl-8 lg:pl-10" : ""
              } sm:pr-8`}
            >
              <div className="font-display text-[clamp(56px,7vw,112px)] font-medium tracking-[-0.05em] leading-none">
                <CountUp value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
              </div>
              <div className="mt-5 font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] font-semibold">
                {metric.label}
              </div>
              {metric.detail && (
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{metric.detail}</p>
              )}
            </Reveal>
          ))}
        </div>

        {/* Voices & partners */}
        <Reveal className="mt-4 sm:mt-0 pt-8 border-t border-black/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {CONTENT.avatars.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={CONTENT.avatarAlt}
                  width={40}
                  height={40}
                  loading="lazy"
                  className="w-10 h-10 object-cover border-2 border-white"
                />
              ))}
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">
              {CONTENT.voicesLabel}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">
              {CONTENT.partnersLabel}
            </span>
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              {CONTENT.partnerLogos.map((logo) => (
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.label}
                  loading="lazy"
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
