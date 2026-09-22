import { motion, useReducedMotion } from "framer-motion";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
    Navigate,
    Route,
    Routes,
    useLocation,
    type Location,
} from "react-router-dom";
import { BackToTopButton } from "./components/common/BackToTopButton";
import { Footer } from "./components/common/Footer";
import { Navbar } from "./components/common/Navbar";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { SEO } from "./components/common/SEO";
import {
    pauseLenis,
    resetLenisScroll,
    resumeLenis,
    SmoothScroll,
} from "./components/common/SmoothScroll";

const HomePage = lazy(() =>
  import("./pages/HomePage").then((module) => ({ default: module.HomePage })),
);
const AboutPage = lazy(() =>
  import("./pages/AboutPage").then((module) => ({ default: module.AboutPage })),
);
const ProjectsPage = lazy(() =>
  import("./pages/ProjectsPage").then((module) => ({
    default: module.ProjectsPage,
  })),
);
const ProjectDetailPage = lazy(() =>
  import("./pages/ProjectDetailPage").then((module) => ({
    default: module.ProjectDetailPage,
  })),
);
const ServicesPage = lazy(() =>
  import("./pages/ServicesPage").then((module) => ({
    default: module.ServicesPage,
  })),
);
const ServiceDetailPage = lazy(() =>
  import("./pages/ServiceDetailPage").then((module) => ({
    default: module.ServiceDetailPage,
  })),
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage").then((module) => ({
    default: module.ContactPage,
  })),
);
const TermsPage = lazy(() =>
  import("./pages/TermsPage").then((module) => ({ default: module.TermsPage })),
);
const PrivacyPage = lazy(() =>
  import("./pages/PrivacyPage").then((module) => ({
    default: module.PrivacyPage,
  })),
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((module) => ({
    default: module.NotFoundPage,
  })),
);

function AppRoutes({ location }: { location: Location }) {
  return (
    <Suspense fallback={null}>
      <Routes location={location}>
        {/* Core SOLUM Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/programmes" element={<ServicesPage />} />
        <Route path="/programmes/:slug" element={<ServiceDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/404" element={<NotFoundPage />} />

        {/* Backwards-compatibility aliases */}
        <Route path="/blog" element={<Navigate to="/projects" replace />} />
        <Route path="/blog/*" element={<Navigate to="/projects" replace />} />
        <Route path="/journal" element={<Navigate to="/projects" replace />} />
        <Route
          path="/journal/*"
          element={<Navigate to="/projects" replace />}
        />
        <Route path="/work" element={<Navigate to="/projects" replace />} />
        <Route path="/work/:slug" element={<ProjectDetailPage />} />
        <Route path="/process" element={<Navigate to="/about" replace />} />
        <Route path="/studio" element={<Navigate to="/about" replace />} />

        {/* 404 catch-all */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

/**
 * What We Do Stacking Page Transition:
 * - On route navigation:
 *   1. The outgoing page is fixed at its exact viewport scroll offset (ZERO white flash!).
 *   2. The target page mounts at y: 100vh and glides up smoothly to y: 0.
 *   3. When the target page arrives, the background layer is cleaned up silently.
 *   4. The target page is permanent, preserving all DOM, images, and scroll stability.
 */
function PageTransition() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const isFirstMountRef = useRef(true);
  const lastPathnameRef = useRef(location.pathname);
  const lastLocationRef = useRef<Location>(location);

  const [prevLocation, setPrevLocation] = useState<Location | null>(null);
  const [savedScrollY, setSavedScrollY] = useState(0);

  // Synchronously update previous location state when pathname changes
  if (location.pathname !== lastPathnameRef.current) {
    const scroll = window.scrollY || document.documentElement.scrollTop || 0;
    setSavedScrollY(scroll);
    setPrevLocation(lastLocationRef.current);
    lastPathnameRef.current = location.pathname;
    lastLocationRef.current = location;
    resetLenisScroll();
    pauseLenis();
  }

  const isFirstMount = isFirstMountRef.current;
  useEffect(() => {
    isFirstMountRef.current = false;
  }, []);

  const handleAnimationComplete = () => {
    setPrevLocation(null);
    resumeLenis();
  };

  // Safety fallback ensuring background is cleared
  useEffect(() => {
    if (prevLocation) {
      const timer = setTimeout(() => {
        handleAnimationComplete();
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [prevLocation]);

  return (
    <div className="flex-1 w-full relative overflow-x-clip min-h-screen">
      {/* 1. OUTGOING PAGE: Fixed underneath at exact scroll position (NO WHITE FLASH!) */}
      {prevLocation && (
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            top: -savedScrollY,
            left: 0,
            right: 0,
            width: "100%",
            overflow: "hidden",
            zIndex: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
          className="w-full bg-paper text-text-base"
        >
          <AppRoutes location={prevLocation} />
        </div>
      )}

      {/* 2. INCOMING PAGE: Ascends directly from the bottom (100vh -> 0) in normal document flow */}
      <motion.div
        key={location.pathname}
        initial={shouldReduceMotion || isFirstMount ? false : { y: "100vh" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.85,
          ease: [0.16, 1, 0.3, 1],
        }}
        onAnimationComplete={handleAnimationComplete}
        style={{
          position: "relative",
          zIndex: 10,
          willChange: prevLocation ? "transform" : "auto",
          transform: "translateZ(0)",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
        className="w-full min-h-screen bg-paper text-text-base"
      >
        {/* Subtle physical card top edge while rising */}
        {prevLocation && (
          <div className="absolute top-0 left-0 right-0 h-px bg-line-dark pointer-events-none z-20" />
        )}
        <AppRoutes location={location} />
      </motion.div>
    </div>
  );
}

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-text-base selection:bg-ink selection:text-text-light relative overflow-x-clip">
      {/* Session-only Neutral Full-Page Preloader */}
      <SEO />

      {/* Lenis smooth scroll & scroll restoration */}
      <SmoothScroll />
      <ScrollToTop />

      {/* Fixed Transparent Header & Accessible Fullscreen Overlay Menu */}
      <Navbar />

      {/* Global Page Transition: Vertical Travel (What We Do stacking style) */}
      <PageTransition />

      {/* Solum 4-Column Footer & Back to Top */}
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
