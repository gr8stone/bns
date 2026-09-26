import { ArrowRight, CheckCircle2 } from "lucide-react";
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

  return (
    <main className="w-full bg-white text-[#101010] select-none">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: SOLUM CONTACT & MINIMALIST FORM
          ───────────────────────────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-20 md:pb-28 border-b border-[#101010]/12">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading & Key Details */}
            <div className="lg:col-span-6 lg:pr-8 lg:border-r border-[#101010]/12 space-y-12">
              <div>
                <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[108px] font-semibold tracking-[-0.06em] text-[#101010] leading-[0.9] uppercase mb-6">
                  Contact
                </h1>
                <p className="font-sans text-sm sm:text-base text-[#757575] leading-relaxed max-w-md">
                  We believe that public finance is a public contract. Reach out
                  to collaborate, report, or bring budget literacy to your
                  community.
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
                    Address
                  </span>
                  <p className="font-sans font-semibold text-lg sm:text-xl text-[#101010]">
                    Nairobi Civic Media Hub, Kenya
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
                        <option value="">Select initiative</option>
                        <option value="connect">
                          BNS Connect (Town Halls &amp; Legislative Dialogues)
                        </option>
                        <option value="mashinani">
                          BNS Mashinani (Grassroots &amp; Ward Budget Audits)
                        </option>
                        <option value="wanahabari">
                          BNS Wanahabari (Journalism Grants &amp; Fellowships)
                        </option>
                        <option value="studio">
                          BNS Studio (Docuseries, Podcasts &amp; Explainers)
                        </option>
                        <option value="whistleblower">
                          Whistleblower Tip &amp; Document Submission
                        </option>
                        <option value="partnership">
                          General Civic Partnership &amp; Research
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
    </main>
  );
}
