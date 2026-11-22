/**
 * Page kit — the shared building blocks for every inner page.
 * Same motion vocabulary as the homepage (see ../story/primitives).
 *
 *   PageHero      Title block: back link, eyebrow, masked headline, aside copy.
 *   Section       Container with tone + optional chapter marker.
 *   SectionHead   Section headline (lead + accent) with optional aside.
 *   MediaFrame    Full-width image that opens like a curtain, with parallax.
 *   FactGrid      Label/value facts in a ruled grid.
 *   Accordion     Disclosure list (FAQs).
 *   ClosingCta    Dark band that ends a page with one clear ask.
 *   PrevNext      Previous / next navigation between sibling pages.
 *   Btn           Primary / secondary / light button-links.
 */
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Minus, Plus } from "lucide-react";
import { useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { CONTAINER } from "../../lib/layout";
import { EASE_EDITORIAL, EASE_SNAPPY, VIEWPORT } from "../../lib/motion";
import { ChapterMarker, MaskLine, Reveal } from "../story/primitives";

// ─── Btn ─────────────────────────────────────────────────────────────────────

type BtnVariant = "primary" | "secondary" | "light" | "ghost-light";

const BTN: Record<BtnVariant, string> = {
  primary: "bg-accent text-white hover:bg-text-base",
  secondary: "border border-black/20 hover:border-text-base",
  light: "bg-white text-text-base hover:bg-accent hover:text-white font-semibold",
  "ghost-light": "border border-white/25 text-white hover:border-white",
};

export function Btn({
  to,
  href,
  children,
  variant = "primary",
  arrow = true,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: BtnVariant;
  arrow?: boolean;
}) {
  const cls = `group inline-flex items-center gap-2.5 px-6 py-3.5 font-mono text-xs uppercase tracking-wider transition-colors duration-200 ${BTN[variant]}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />}
    </>
  );
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={cls}>
      {inner}
    </Link>
  );
}

// ─── PageHero ────────────────────────────────────────────────────────────────

interface PageHeroProps {
  eyebrow?: string;
  lead: string;
  accent?: string;
  back?: { to: string; label: string };
  aside?: ReactNode;
  /** The page's main action. Always rendered inside the first screen. */
  cta?: ReactNode;
  children?: ReactNode;
  /** Smaller headline for long titles (e.g. production names). */
  compact?: boolean;
}

/**
 * One hero for every inner page. Sized so the page's purpose and main action
 * fit in the first screen on a 1440×900 laptop and a 390×844 phone.
 */
export function PageHero({ eyebrow, lead, accent, back, aside, cta, children, compact }: PageHeroProps) {
  const size = compact
    ? "text-[clamp(32px,4.4vw,64px)] leading-[1] tracking-[-0.045em]"
    : "text-[clamp(40px,6vw,92px)] leading-[0.94] tracking-[-0.055em]";
  const hasSide = Boolean(aside || cta);

  return (
    <header className={`${CONTAINER} pt-24 md:pt-32 pb-8 md:pb-12`}>
      {(back || eyebrow) && (
        <Reveal trigger="mount" y={6} delay={0.1}>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">
            {back && (
              <Link to={back.to} className="group inline-flex items-center gap-2 hover:text-accent transition-colors duration-200">
                <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                {back.label}
              </Link>
            )}
            {back && eyebrow && <span aria-hidden="true" className="w-6 h-px bg-black/20" />}
            {eyebrow && (
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent inline-block" />
                {eyebrow}
              </span>
            )}
          </div>
        </Reveal>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-end mt-4 md:mt-6">
        <h1 className={`${hasSide ? "lg:col-span-8" : "lg:col-span-12"} font-display font-medium ${size}`}>
          <MaskLine trigger="mount" delay={0.2}>
            {lead}
          </MaskLine>
          {accent && (
            <MaskLine trigger="mount" delay={0.3} className="text-accent">
              {accent}
            </MaskLine>
          )}
        </h1>
        {hasSide && (
          <Reveal trigger="mount" delay={0.45} className="lg:col-span-4 lg:pb-2 space-y-5">
            {aside && <div data-key="hero-aside">{aside}</div>}
            {cta && (
              <div data-key="hero-cta" className="flex flex-wrap gap-3">
                {cta}
              </div>
            )}
          </Reveal>
        )}
      </div>
      {children}
    </header>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

type Tone = "light" | "warm" | "dark";
const TONE: Record<Tone, string> = {
  light: "bg-white text-text-base",
  warm: "bg-paper-warm text-text-base",
  dark: "bg-ink text-white",
};

export function Section({
  chapter,
  label,
  tone = "light",
  id,
  children,
  className = "",
  ruled = true,
}: {
  chapter?: string;
  label?: string;
  tone?: Tone;
  id?: string;
  children: ReactNode;
  className?: string;
  ruled?: boolean;
}) {
  const rule = ruled && tone === "light" ? "border-t border-black/[0.08]" : "";
  return (
    <section id={id} className={`w-full ${TONE[tone]} ${rule} scroll-mt-24`}>
      <div className={`${CONTAINER} py-20 md:py-28 ${className}`}>
        {label && <ChapterMarker chapter={chapter} label={label} tone={tone === "dark" ? "dark" : "light"} />}
        {children}
      </div>
    </section>
  );
}

export function SectionHead({
  lead,
  accent,
  aside,
  tone = "light",
}: {
  lead: string;
  accent?: string;
  aside?: ReactNode;
  tone?: Tone;
}) {
  const accentCls = tone === "dark" ? "text-white/55" : "text-accent";
  return (
    <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
      <h2
        className={`${aside ? "lg:col-span-8" : "lg:col-span-10"} font-display text-[clamp(32px,5vw,72px)] font-medium tracking-[-0.05em] leading-[0.98]`}
      >
        <MaskLine>{lead}</MaskLine>
        {accent && (
          <MaskLine delay={0.1} className={accentCls}>
            {accent}
          </MaskLine>
        )}
      </h2>
      {aside && (
        <Reveal delay={0.2} className="lg:col-span-4">
          {aside}
        </Reveal>
      )}
    </div>
  );
}

// ─── MediaFrame ──────────────────────────────────────────────────────────────

export function MediaFrame({
  src,
  alt,
  captionLeft,
  captionRight,
  aspect = "aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]",
  grayscale = false,
  objectPosition = "object-center",
  children,
}: {
  src: string;
  alt: string;
  captionLeft?: string;
  captionRight?: string;
  aspect?: string;
  grayscale?: boolean;
  objectPosition?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-5%", "5%"]);

  return (
    <motion.figure
      ref={ref}
      initial={reduce ? false : { clipPath: "inset(10% 5% 10% 5%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={VIEWPORT.onceAmount}
      transition={{ duration: 1.1, ease: EASE_SNAPPY }}
      className={`relative w-full ${aspect} overflow-hidden bg-ink`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y, scale: 1.12 }}
        className={`absolute inset-0 w-full h-full object-cover ${objectPosition} ${grayscale ? "grayscale contrast-[1.1]" : ""}`}
      />
      {(captionLeft || captionRight) && (
        <>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          <figcaption className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6 flex items-end justify-between gap-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-white/85">
            <span>{captionLeft}</span>
            <span className="hidden sm:inline text-right">{captionRight}</span>
          </figcaption>
        </>
      )}
      {children}
    </motion.figure>
  );
}

// ─── FactGrid ────────────────────────────────────────────────────────────────

export function FactGrid({
  facts,
  tone = "light",
  cols = "grid-cols-2 md:grid-cols-4",
}: {
  facts: { label: string; value: ReactNode }[];
  tone?: Tone;
  cols?: string;
}) {
  const line = tone === "dark" ? "border-white/15" : "border-black/[0.08]";
  const muted = tone === "dark" ? "text-white/55" : "text-text-muted";
  return (
    <dl className={`grid ${cols} border-t ${line}`}>
      {facts.map((f, i) => (
        <Reveal key={f.label} delay={i * 0.06} className={`py-6 pr-6 border-b ${line}`}>
          <dt className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] ${muted}`}>{f.label}</dt>
          <dd className="mt-2 font-sans text-sm sm:text-base font-medium leading-snug">{f.value}</dd>
        </Reveal>
      ))}
    </dl>
  );
}

// ─── Accordion ───────────────────────────────────────────────────────────────

export interface AccordionItem {
  id: string;
  kicker?: string;
  title: string;
  body: ReactNode;
}

export function Accordion({ items, numbered = true }: { items: AccordionItem[]; numbered?: boolean }) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="border-t border-black/[0.08]">
      {items.map((item, i) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id} className="border-b border-black/[0.08]">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : item.id)}
              className="group w-full text-left py-6 sm:py-7 flex items-start gap-4 sm:gap-8"
            >
              {numbered && (
                <span className="font-mono text-xs text-text-muted pt-1 w-6 shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
              <span className="flex-1">
                {item.kicker && (
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted mb-1">
                    {item.kicker}
                  </span>
                )}
                <span className="block font-display text-lg sm:text-xl font-medium tracking-[-0.02em] leading-snug group-hover:text-accent transition-colors duration-200">
                  {item.title}
                </span>
              </span>
              <span className="pt-1.5 shrink-0 text-text-muted group-hover:text-accent transition-colors duration-200">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
                  className="overflow-hidden"
                >
                  <div className={`pb-7 pr-6 ${numbered ? "pl-10 sm:pl-14" : ""}`}>{item.body}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// ─── ClosingCta ──────────────────────────────────────────────────────────────

export function ClosingCta({
  eyebrow,
  title,
  body,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  primary: { to?: string; href?: string; label: string };
  secondary?: { to?: string; href?: string; label: string };
}) {
  return (
    <section className="w-full bg-ink text-white">
      <div className={`${CONTAINER} py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end`}>
        <div className="lg:col-span-8">
          {eyebrow && <ChapterMarker label={eyebrow} tone="dark" />}
          <h2 className="mt-8 font-display text-[clamp(32px,5vw,68px)] font-medium tracking-[-0.05em] leading-[0.98]">
            <MaskLine>{title}</MaskLine>
          </h2>
        </div>
        <Reveal delay={0.2} className="lg:col-span-4 flex flex-col gap-6">
          {body && <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed">{body}</p>}
          <div className="flex flex-wrap gap-3">
            <Btn to={primary.to} href={primary.href} variant="light">
              {primary.label}
            </Btn>
            {secondary && (
              <Btn to={secondary.to} href={secondary.href} variant="ghost-light" arrow={false}>
                {secondary.label}
              </Btn>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── PrevNext ────────────────────────────────────────────────────────────────

interface PrevNextItem {
  to: string;
  title: string;
  meta?: string;
}

export function PrevNext({
  prev,
  next,
  prevLabel,
  nextLabel,
}: {
  prev?: PrevNextItem;
  next?: PrevNextItem;
  prevLabel: string;
  nextLabel: string;
}) {
  const cell = "group flex flex-col gap-3 py-10 sm:py-14 hover:bg-white transition-colors duration-200";
  return (
    <nav className="w-full bg-paper-warm border-t border-black/[0.08]">
      <div className={`${CONTAINER} grid grid-cols-2 divide-x divide-black/[0.08]`}>
        {prev && (
          <Link to={prev.to} className={`${cell} pr-4 sm:pr-8`}>
            <span className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-text-muted">
              <ArrowLeft className="w-3.5 h-3.5 text-accent transition-transform duration-200 group-hover:-translate-x-1" />
              {prevLabel}
            </span>
            <span className="font-display text-base sm:text-2xl lg:text-3xl font-medium tracking-[-0.03em] leading-tight group-hover:text-accent transition-colors duration-200">
              {prev.title}
            </span>
            {prev.meta && <span className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">{prev.meta}</span>}
          </Link>
        )}
        {next && (
          <Link to={next.to} className={`${cell} pl-4 sm:pl-8 text-right items-end`}>
            <span className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-text-muted">
              {nextLabel}
              <ArrowRight className="w-3.5 h-3.5 text-accent transition-transform duration-200 group-hover:translate-x-1" />
            </span>
            <span className="font-display text-base sm:text-2xl lg:text-3xl font-medium tracking-[-0.03em] leading-tight group-hover:text-accent transition-colors duration-200">
              {next.title}
            </span>
            {next.meta && <span className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">{next.meta}</span>}
          </Link>
        )}
      </div>
    </nav>
  );
}

// ─── Small text helpers ──────────────────────────────────────────────────────

export function Lede({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <p className={`font-sans text-sm sm:text-base leading-relaxed ${tone === "dark" ? "text-white/70" : "text-text-muted"}`}>
      {children}
    </p>
  );
}

export function MonoLabel({ children, accent }: { children: ReactNode; accent?: boolean }) {
  return (
    <span
      className={`font-mono text-[11px] uppercase tracking-[0.16em] ${accent ? "text-accent font-semibold" : "text-text-muted"}`}
    >
      {children}
    </span>
  );
}

// Re-export for pages that only import from the kit.
export { ChapterMarker, MaskLine, Reveal };
