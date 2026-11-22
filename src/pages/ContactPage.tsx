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

/**
 * Contact: the form is in the first screen. Topics are one-tap chips
 * (no dropdown), contact details sit beside the form.
 */
export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({ name: "", email: "", topic: "", message: "" });
  const set = (key: keyof typeof data) => (e: { target: { value: string } }) => setData({ ...data, [key]: e.target.value });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const topic = paths.items.find((p) => p.value === data.topic)?.title;
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

  return (
    <main className="w-full bg-white text-text-base pb-24 md:pb-32">
      <PageHero eyebrow={hero.eyebrow} lead={hero.title} accent={hero.titleAccent} aside={<Lede>{hero.intro}</Lede>} />

      <div className={`${CONTAINER} grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start`}>
        {/* Form first: it's why people are here */}
        <Reveal trigger="mount" delay={0.35} className="lg:col-span-7 lg:order-2">
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
              <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8 border border-black/[0.08]">
                <fieldset>
                  <legend className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent font-semibold">{paths.label}</legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {paths.items.map((p) => {
                      const active = data.topic === p.value;
                      return (
                        <button
                          key={p.value}
                          type="button"
                          aria-pressed={active}
                          title={p.body}
                          onClick={() => setData({ ...data, topic: active ? "" : p.value })}
                          className={`px-4 py-2.5 border font-sans text-sm transition-colors duration-200 ${
                            active ? "bg-accent border-accent text-white" : "border-black/15 hover:border-text-base"
                          }`}
                        >
                          {p.title}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="block">
                    <MonoLabel>{form.nameLabel}</MonoLabel>
                    <input required value={data.name} onChange={set("name")} placeholder={form.namePlaceholder} className={`${FIELD} mt-2`} />
                  </label>
                  <label className="block">
                    <MonoLabel>{form.emailLabel}</MonoLabel>
                    <input type="email" required value={data.email} onChange={set("email")} placeholder={form.emailPlaceholder} className={`${FIELD} mt-2`} />
                  </label>
                </div>
                <label className="block">
                  <MonoLabel>{form.messageLabel}</MonoLabel>
                  <textarea required rows={4} value={data.message} onChange={set("message")} placeholder={form.messagePlaceholder} className={`${FIELD} mt-2 resize-none`} />
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

        {/* Direct lines */}
        <Reveal trigger="mount" delay={0.45} className="lg:col-span-5 lg:order-1">
          <dl className="border-t border-black/[0.08]">
            {[
              { label: details.emailLabel, value: details.email, href: details.emailHref },
              { label: details.phoneLabel, value: details.phone, href: details.phoneHref },
              { label: details.addressLabel, value: details.address },
              { label: details.hoursLabel, value: details.hours },
            ].map((d) => (
              <div key={d.label} className="py-5 border-b border-black/[0.08]">
                <dt>
                  <MonoLabel>{d.label}</MonoLabel>
                </dt>
                <dd className="mt-1.5 font-display text-lg sm:text-xl font-medium tracking-[-0.02em]">
                  {d.href ? (
                    <a href={d.href} className="hover:text-accent transition-colors">
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {social.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-wider hover:text-accent transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </main>
  );
}
