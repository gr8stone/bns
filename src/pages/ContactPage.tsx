import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = formData.service
      ? `BNS inquiry: ${formData.service}`
      : "BNS civic inquiry";
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Initiative: ${formData.service || "Not specified"}`,
      "",
      formData.message,
    ].join("\n");

    window.location.href = `mailto:info@budgetndiostory.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const requirements = [
    {
      step: "01",
      title: "Programme Partner (Civic)",
      description:
        "Co-design and co-fund budget literacy programmes, youth town halls, scorecards, surveys, and ward-level engagements.",
      formats: "County Governments · MDAs · Bilaterals · Civic Foundations",
      image: "/images/bns/survey/bnssurvey1.jpeg",
    },
    {
      step: "02",
      title: "Content Commission (BNS Studios)",
      description:
        "Commission BNS Studios to produce podcasts, animations, research spotlights, and multi-platform social media series.",
      formats: "Development Partners · Think Tanks · CSOs · Private Sector",
      image: "/images/bns/cohort1 groundworks/129A3964.jpg",
    },
    {
      step: "03",
      title: "Strategic Partnership (Foundation)",
      description:
        "Become a foundational partner of BNS Foundation, supporting our long-term civic mission with flexible, multi-year funding.",
      formats: "Foundational Partners · Philanthropies · Global Donors",
      image: "/images/bns/media/129A4039.jpg",
    },
    {
      step: "04",
      title: "Annual Retainers & Embedded Studio",
      description:
        "Embed BNS Studios as a 'Content & Engagement Studio' budget line in your grant applications from the design stage.",
      formats: "Grant Embedment · Annual Mandates · Retainer Agreements",
      image: "/images/bns/towwnhallmay/129A3912.jpg",
    },
  ];

  return (
    <main className="w-full bg-white text-[#101010] select-none">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: SOLUM CONTACT & MINIMALIST FORM
          ───────────────────────────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-20 md:pb-28 border-b border-[#101010]/12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading & Key Details */}
            <div className="lg:col-span-6 lg:pr-8 lg:border-r border-[#101010]/12 space-y-12">
              <div>
                <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[108px] font-semibold tracking-[-0.06em] text-[#101010] leading-[0.9] uppercase mb-6">
                  Contact
                </h1>
                <p className="font-sans text-sm sm:text-base text-[#757575] leading-relaxed max-w-md">
                  We believe that public finance is a public contract. Reach out
                  to collaborate, commission BNS Studios, or bring budget
                  literacy to your community.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-8 pt-2">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:info@budgetndiostory.org"
                    className="font-sans font-semibold text-lg sm:text-xl text-[#101010] hover:underline"
                  >
                    info@budgetndiostory.org
                  </a>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-1">
                    Phone
                  </span>
                  <a
                    href="tel:+254790631623"
                    className="font-sans font-semibold text-lg sm:text-xl text-[#101010] hover:underline"
                  >
                    +254 790 631 623
                  </a>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-1">
                    Offices
                  </span>
                  <p className="font-sans font-semibold text-lg sm:text-xl text-[#101010]">
                    BNS Foundation • BNS Studios • Nairobi, Kenya
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-1">
                    Office hours
                  </span>
                  <p className="font-sans font-semibold text-lg sm:text-xl text-[#101010]">
                    Monday to Friday: 8:30 AM – 5:30 PM EAT
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Follow Us & Clean Form */}
            <div className="lg:col-span-6 lg:pl-4">
              {/* Follow Us Bar */}
              <div className="flex items-center justify-between pb-5 mb-8 border-b border-[#101010]/12 text-xs font-mono text-[#757575]">
                <span>Follow us:</span>
                <div className="flex items-center gap-5 text-xs sm:text-sm text-[#101010]">
                  <a
                    href="https://x.com/budgetndiostory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition-opacity font-semibold tracking-wider uppercase"
                  >
                    𝕏
                  </a>
                  <a
                    href="https://www.linkedin.com/company/budget-ndio-story/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition-opacity font-semibold tracking-wider uppercase"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://instagram.com/budgetndiostory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition-opacity font-semibold tracking-wider uppercase"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/share/1CPg2LgfVJ/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition-opacity font-semibold tracking-wider uppercase"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://wa.me/254790631623"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition-opacity font-semibold tracking-wider uppercase"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Minimalist Form */}
              {submitted ? (
                <div className="bg-[#F9F9F8] p-10 md:p-14 border border-[#101010]/12 text-center">
                  <CheckCircle2 className="w-10 h-10 text-[#101010] mx-auto mb-4" />
                  <h3 className="font-display text-2xl md:text-3xl font-semibold uppercase text-[#101010] mb-2 tracking-tight">
                    Inquiry Received
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed mb-8 max-w-md mx-auto">
                    Thank you. A member of our civic research desk will review
                    your inquiry and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-[#101010] text-white text-xs font-mono uppercase tracking-wider hover:bg-black transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block font-sans text-xs text-[#757575] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Jane Wanjiku"
                      className="w-full bg-[#F9F9F8] border border-[#101010]/10 px-4 py-3 text-sm font-sans text-[#101010] placeholder-[#757575]/50 focus:outline-none focus:border-[#101010] transition-colors rounded-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-sans text-xs text-[#757575] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="info@budgetndiostory.org"
                      className="w-full bg-[#F9F9F8] border border-[#101010]/10 px-4 py-3 text-sm font-sans text-[#101010] placeholder-[#757575]/50 focus:outline-none focus:border-[#101010] transition-colors rounded-none"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block font-sans text-xs text-[#757575] mb-2">
                      Civic Initiative / Pillar
                    </label>
                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full bg-[#F9F9F8] border border-[#101010]/10 px-4 py-3 text-sm font-sans text-[#101010] focus:outline-none focus:border-[#101010] transition-colors rounded-none appearance-none cursor-pointer"
                      >
                        <option value="">Select partnership track or initiative</option>
                        <option value="programme-partner">
                          Programme Partner (Town Halls, Youth Chapters &amp; Scorecards)
                        </option>
                        <option value="content-commission">
                          Content Commission — BNS Studios (Podcasts, Animations, Spotlights)
                        </option>
                        <option value="strategic-partnership">
                          Strategic Partnership (Foundational Multi-Year Mission Support)
                        </option>
                        <option value="annual-retainer">
                          Annual Retainer &amp; Embedded Grant Studio
                        </option>
                        <option value="connect">
                          BNS Connect (Town Halls &amp; Legislative Dialogues)
                        </option>
                        <option value="mashinani">
                          BNS Mashinani (47-County Grassroots Budget Audits)
                        </option>
                        <option value="wanahabari">
                          Wanahabari Lab (Journalism Grants &amp; Training)
                        </option>
                        <option value="whistleblower">
                          Whistleblower Tip &amp; Document Submission
                        </option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#757575]">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-sans text-xs text-[#757575] mb-2">
                      Message / Tip Details
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share your inquiry, community issue, or tip..."
                      className="w-full bg-[#F9F9F8] border border-[#101010]/10 px-4 py-3 text-sm font-sans text-[#101010] placeholder-[#757575]/50 focus:outline-none focus:border-[#101010] transition-colors rounded-none resize-none"
                    />
                  </div>

                  {/* Full-width Solum Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-between bg-[#101010] text-white px-5 py-3.5 text-xs font-mono uppercase tracking-wider hover:bg-black transition-colors group cursor-pointer"
                    >
                      <span className="font-semibold">Send Message</span>
                      <div className="w-6 h-6 border border-white/30 group-hover:border-white flex items-center justify-center transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </button>
                    <p className="font-sans text-xs text-[#757575] mt-3">
                      By submitting, you agree to our{" "}
                      <Link
                        to="/terms"
                        className="underline text-[#101010] hover:opacity-75"
                      >
                        Terms
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/privacy"
                        className="underline text-[#101010] hover:opacity-75"
                      >
                        Privacy policy
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: VISUAL "WHAT WE NEED FROM YOU" (MINIMALIST CARDS WITH IMAGES)
          Direct visual answers with real imagery, concise punchy copy, no clutter
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#FFFFFF]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          {/* Minimalist Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#101010]/12">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-2">
                // PARTNERSHIP FRAMEWORK
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.05em] text-[#101010] uppercase leading-none">
                How to Partner With BNS.
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#757575] max-w-sm leading-relaxed">
              We offer concrete, valuable partnerships tailored to what each
              partner needs across civic programmes, impact content, and
              foundational support.
            </p>
          </div>

          {/* 4 Architectural Visual Cards with Real Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {requirements.map((item) => (
              <div
                key={item.step}
                className="group bg-[#FFFFFF] border border-[#101010]/12 flex flex-col justify-between overflow-hidden hover:border-[#101010] transition-colors duration-200"
              >
                {/* Visual Image Header with Number Badge */}
                <div>
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#F4F4F0]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#101010] text-white font-mono text-xs font-semibold">
                      {item.step}
                    </div>
                  </div>

                  {/* Concise Title & Punchy Description */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-lg sm:text-xl font-semibold uppercase text-[#101010] tracking-tight mb-2.5">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Accepted Formats Badge */}
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 border-t border-[#101010]/10">
                  <span className="font-mono text-[11px] text-[#101010] font-medium block">
                    {item.formats}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mutual NDA Safeguard Footer Banner */}
          <div className="mt-12 p-6 border border-[#101010]/12 bg-[#F9F9F8] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-3.5">
              <ShieldCheck className="w-5 h-5 text-[#101010] shrink-0" />
              <span className="font-sans text-xs sm:text-sm text-[#101010] font-medium">
                All citizen tips, leaked procurement records, and community
                petitions are strictly protected under cryptographic source
                confidentiality.
              </span>
            </div>
            <a
              href="mailto:info@budgetndiostory.org?subject=Confidential%20Whistleblower%20Tip"
              className="text-xs font-mono uppercase tracking-wider text-[#101010] underline hover:opacity-70 shrink-0"
            >
              Submit Confidential Tip ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
