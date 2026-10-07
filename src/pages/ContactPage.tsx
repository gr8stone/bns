import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CONTACT_PAGE_CONTENT } from "../data/content/contact";

export function ContactPage() {
  const { hero, details, social, success, form, email } = CONTACT_PAGE_CONTENT;
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
      ? `${email.subjectPrefix}${formData.service}`
      : email.defaultSubject;
    const body = [
      `${email.nameLine}${formData.name}`,
      `${email.emailLine}${formData.email}`,
      `${email.initiativeLine}${formData.service || email.initiativeFallback}`,
      "",
      formData.message,
    ].join("\n");

    window.location.href = `mailto:${email.recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
                  {hero.title}
                </h1>
                <p className="font-sans text-sm sm:text-base text-[#757575] leading-relaxed max-w-md">
                  {hero.intro}
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-8 pt-2">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-1">
                    {details.emailLabel}
                  </span>
                  <a
                    href={details.emailHref}
                    className="font-sans font-semibold text-lg sm:text-xl text-[#101010] hover:underline"
                  >
                    {details.email}
                  </a>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-1">
                    {details.phoneLabel}
                  </span>
                  <a
                    href={details.phoneHref}
                    className="font-sans font-semibold text-lg sm:text-xl text-[#101010] hover:underline"
                  >
                    {details.phone}
                  </a>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-1">
                    {details.addressLabel}
                  </span>
                  <p className="font-sans font-semibold text-lg sm:text-xl text-[#101010]">
                    {details.address}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-1">
                    {details.hoursLabel}
                  </span>
                  <p className="font-sans font-semibold text-lg sm:text-xl text-[#101010]">
                    {details.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Follow Us & Clean Form */}
            <div className="lg:col-span-6 lg:pl-4">
              {/* Follow Us Bar */}
              <div className="flex items-center justify-between pb-5 mb-8 border-b border-[#101010]/12 text-xs font-mono text-[#757575]">
                <span>{social.label}</span>
                <div className="flex items-center gap-5 text-xs sm:text-sm text-[#101010]">
                  {social.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-60 transition-opacity font-semibold tracking-wider uppercase"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Minimalist Form */}
              {submitted ? (
                <div className="bg-[#F9F9F8] p-10 md:p-14 border border-[#101010]/12 text-center">
                  <CheckCircle2 className="w-10 h-10 text-[#101010] mx-auto mb-4" />
                  <h3 className="font-display text-2xl md:text-3xl font-semibold uppercase text-[#101010] mb-2 tracking-tight">
                    {success.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed mb-8 max-w-md mx-auto">
                    {success.body}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-[#101010] text-white text-xs font-mono uppercase tracking-wider hover:bg-black transition-colors cursor-pointer"
                  >
                    {success.resetLabel}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block font-sans text-xs text-[#757575] mb-2">
                      {form.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={form.namePlaceholder}
                      className="w-full bg-[#F9F9F8] border border-[#101010]/10 px-4 py-3 text-sm font-sans text-[#101010] placeholder-[#757575]/50 focus:outline-none focus:border-[#101010] transition-colors rounded-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-sans text-xs text-[#757575] mb-2">
                      {form.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder={form.emailPlaceholder}
                      className="w-full bg-[#F9F9F8] border border-[#101010]/10 px-4 py-3 text-sm font-sans text-[#101010] placeholder-[#757575]/50 focus:outline-none focus:border-[#101010] transition-colors rounded-none"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block font-sans text-xs text-[#757575] mb-2">
                      {form.serviceLabel}
                    </label>
                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full bg-[#F9F9F8] border border-[#101010]/10 px-4 py-3 text-sm font-sans text-[#101010] focus:outline-none focus:border-[#101010] transition-colors rounded-none appearance-none cursor-pointer"
                      >
                        <option value="">{form.servicePlaceholder}</option>
                        {form.serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#757575]">
                        {form.selectIndicator}
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-sans text-xs text-[#757575] mb-2">
                      {form.messageLabel}
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={form.messagePlaceholder}
                      className="w-full bg-[#F9F9F8] border border-[#101010]/10 px-4 py-3 text-sm font-sans text-[#101010] placeholder-[#757575]/50 focus:outline-none focus:border-[#101010] transition-colors rounded-none resize-none"
                    />
                  </div>

                  {/* Full-width Solum Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-between bg-[#101010] text-white px-5 py-3.5 text-xs font-mono uppercase tracking-wider hover:bg-black transition-colors group cursor-pointer"
                    >
                      <span className="font-semibold">{form.submitLabel}</span>
                      <div className="w-6 h-6 border border-white/30 group-hover:border-white flex items-center justify-center transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </button>
                    <p className="font-sans text-xs text-[#757575] mt-3">
                      {form.consentLead}{" "}
                      <Link
                        to="/terms"
                        className="underline text-[#101010] hover:opacity-75"
                      >
                        {form.termsLabel}
                      </Link>{" "}
                      {form.consentJoin}{" "}
                      <Link
                        to="/privacy"
                        className="underline text-[#101010] hover:opacity-75"
                      >
                        {form.privacyLabel}
                      </Link>
                      {form.consentEnd}
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
