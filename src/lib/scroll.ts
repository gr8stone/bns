/**
 * Scroll back up so `el` sits just below the sticky bars, but only if the
 * reader has scrolled past it. Works with Lenis smooth scroll.
 */
export function scrollToResults(el: HTMLElement | null, offset = 150) {
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  if (window.scrollY <= top) return;
  const lenis = (window as unknown as { lenis?: { scrollTo: (y: number, o?: object) => void } }).lenis;
  if (lenis) lenis.scrollTo(top, { duration: 0.8 });
  else window.scrollTo({ top, behavior: "smooth" });
}
