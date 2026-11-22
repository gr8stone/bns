import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Lede, MonoLabel, PageHero, Reveal } from "../components/page/kit";
import { CONTACT_PAGE_CONTENT } from "../data/content/contact";
import { CONTAINER } from "../lib/layout";
import { ROUTES } from "../lib/routes";

const { hero, paths, details, social, success, form, email } = CONTACT_PAGE_CONTENT;

const FIELD =
  "w-full bg-paper-warm border border-black/10 px-4 py-3.5 font-sans text-sm placeholder:text-text-muted/60 focus:outline-none focus:border-accent focus:bg-white transition-colors";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({ name: "", email: "", service: "", message: "" });
  const set = (key: keyof typeof data) => (e: { target: { value: string } }) => setData({ ...data, [key]: e.target.value });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const topic = form.serviceOptions.find((o) => o.value === data.service)?.label;
    const subject = topic ? `${email.subjectPrefix}${topic}` : email.defaultSubject;
    const body = [
      `${email.nameLine}${data.name}`,
      `${email.emailLine}${data.email}`,
      `${email.initiativeLine}${topic ?? email.initiativeFallback}`,
      "",
      data.message,
    ].join("\n");
    window.location.href = `mailto:${email.recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  function choosePath(value: string) {
    setData((d) => ({ ...d, service: value }));
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="w-full bg-white text-text-base pb-24 md:pb-32">
      <PageHero eyebrow={hero.eyebrow} lead={hero.title} accent={hero.titleAccent} aside={<Lede>{hero.intro}</Lede>} />

      <div className={CONTAINER}>
        {/* Paths */}
        <Reveal>
          <MonoLabel accent>{paths.label}</MonoLabel>
        </Reveal>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.08] border border-black/[0.08]">
          {paths.items.map((p, i) => {
            const active = data.service === p.value;
            return (
              <Reveal key={p.value} delay={i * 0.06} className="h-full">
                <button
                  type="button"
                  onClick={() => choosePath(p.value)}
                  aria-pressed={active}
                  className={`group w-full h-full text-left p-6 sm:p-7 transition-colors duration-200 ${active ? "bg-accent text-white" : "bg-white hover:bg-paper-warm"}`}
                >
                  <span className="flex items-center justify-between font-display text-xl font-medium tracking-[-0.02em]">
                    {p.title}
                    <ArrowRight className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 ${active ? "text-white" : "text-accent"}`} />
                  </span>
                  <span className={`mt-2 block font-sans text-sm leading-relaxed ${active ? "text-white/80" : "text-text-muted"}`}>{p.body}</span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          {/* Details */}
          <Reveal className="lg:col-span-5 space-y-8">
            {[
              { label: details.emailLabel, value: details.email, href: details.emailHref },
              { label: details.phoneLabel, value: details.phone, href: details.phoneHref },
              { label: details.addressLabel, value: details.address },
              { label: details.hoursLabel, value: details.hours },
            ].map((d) => (
              <div key={d.label} className="pb-8 border-b border-black/[0.08]">
                <MonoLabel>{d.label}</MonoLabel>
                {d.href ? (
                  <a href={d.href} className="mt-2 block font-display text-xl sm:text-2xl font-medium tracking-[-0.02em] hover:text-accent transition-colors">
                    {d.value}
                  </a>
                ) : (
                  <p className="mt-2 font-display text-xl sm:text-2xl font-medium tracking-[-0.02em]">{d.value}</p>
                )}
              </div>
            ))}
            <div>
              <MonoLabel>{social.label}</MonoLabel>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {social.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-wider hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div id="contact-form" className="scroll-mt-28">
              {submitted ? (
                <div role="status" aria-live="polite" className="p-10 md:p-14 bg-paper-warm border border-black/[0.08]">
                  <CheckCircle2 className="w-9 h-9 text-accent" />
                  <h2 className="mt-5 font-display text-2xl md:text-3xl font-medium tracking-[-0.03em]">{success.title}</h2>
                  <p className="mt-3 font-sans text-sm text-text-muted leading-relaxed max-w-md">{success.body}</p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-5 py-3 border border-black/20 hover:border-text-base font-mono text-xs uppercase tracking-wider"
                  >
                    {success.resetLabel}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-[-0.03em]">{form.heading}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label className="block">
                      <MonoLabel>{form.nameLabel}</MonoLabel>
                      <input required value={data.name} onChange={set("name")} placeholder={form.namePlaceholder} className={`${FIELD} mt-2`} />
                    </label>
                    <label className="block">
                      <MonoLabel>{form.emailLabel}</MonoLabel>
                      <input
                        type="email"
                        required
                        value={data.email}
                        onChange={set("email")}
                        placeholder={form.emailPlaceholder}
                        className={`${FIELD} mt-2`}
                      />
                    </label>
                  </div>
                  <label className="block">
                    <MonoLabel>{form.serviceLabel}</MonoLabel>
                    <select value={data.service} onChange={set("service")} className={`${FIELD} mt-2 cursor-pointer`}>
                      <option value="">{form.servicePlaceholder}</option>
                      {form.serviceOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <MonoLabel>{form.messageLabel}</MonoLabel>
                    <textarea
                      required
                      rows={6}
                      value={data.message}
                      onChange={set("message")}
                      placeholder={form.messagePlaceholder}
                      className={`${FIELD} mt-2 resize-none`}
                    />
                  </label>
                  <button
                    type="submit"
                    className="group w-full flex items-center justify-between px-6 py-4 bg-accent text-white hover:bg-text-base transition-colors duration-200 font-mono text-xs uppercase tracking-wider"
                  >
                    {form.submitLabel}
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                  <p className="font-sans text-xs text-text-muted">
                    {form.consentLead}{" "}
                    <Link to={ROUTES.terms} className="underline hover:text-accent">
                      {form.termsLabel}
                    </Link>{" "}
                    {form.consentJoin}{" "}
                    <Link to={ROUTES.privacy} className="underline hover:text-accent">
                      {form.privacyLabel}
                    </Link>
                    {form.consentEnd}
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
