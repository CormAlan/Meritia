import { useState } from "react";
import { MapPin, Mail, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import DotGrid from "@/components/DotGrid";

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgwoewy";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("_replyto", form.email);
      if (form.phone) data.append("phone", form.phone);
      data.append("message", form.message);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
        return;
      }

      const payload = (await res.json().catch(() => null)) as
        | { errors?: Array<{ message?: string }> }
        | null;
      const msg = payload?.errors?.[0]?.message || "Something went wrong. Please try again.";
      setErrorMsg(msg);
      setStatus("error");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding bg-secondary">
        <DotGrid
         colorClassName="text-primary"
          opacityClassName="opacity-[0.25]"
          positionClassName="absolute -top-10 -right-10"
          size={500}
          />
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">{t("contact.label")}</p>
              <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-[1.1]">
                {t("contact.title1")} <span className="italic text-primary">{t("contact.title2")}</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("contact.subtitle")}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3">
            <FadeIn>
              <h2 className="text-2xl font-serif mb-8">{t("contact.sendMessage")}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">{t("contact.nameLabel")}</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder={t("contact.namePlaceholder")} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">{t("contact.emailLabel")}</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder={t("contact.emailPlaceholder")} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">{t("contact.phoneLabel")}</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder={t("contact.phonePlaceholder")} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">{t("contact.messageLabel")}</label>
                  <textarea rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder={t("contact.messagePlaceholder")} />
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting"
                    ? t("contact.sending", { defaultValue: "Skickar..." })
                    : t("contact.submit")} <ArrowRight size={18} />
                </button>

                {status === "success" && (
                  <p className="text-sm text-primary">{t("contact.thankYou")}</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-destructive">{errorMsg}</p>
                )}
              </form>
            </FadeIn>
          </div>

          <div className="lg:col-span-2">
            <FadeIn delay={0.2}>
              <h2 className="text-2xl font-serif mb-8">{t("contact.contactInfo")}</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">{t("contact.office")}</p>
                    <p className="text-muted-foreground">{t("contact.location")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">{t("contact.email")}</p>
                    <a href="mailto:kontakt@meritia.se" className="text-primary hover:underline">kontakt@meritia.se</a>
                  </div>
                </div>

                <div className="bg-secondary rounded-2xl p-8 mt-8">
                  <h3 className="font-serif text-lg mb-3">{t("contact.bookConsultation")}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t("contact.consultationDesc")}</p>
                  <p className="text-primary font-semibold text-sm">{t("contact.responseTime")}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
