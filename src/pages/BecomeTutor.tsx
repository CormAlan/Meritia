import { useState } from "react";
import { ArrowRight, Banknote, Clock, Users, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import BrandShapes from "@/components/BrandShapes";

const BecomeTutor = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    university: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("becomeTutor.thankYou"));
    setForm({ name: "", email: "", university: "", subject: "", message: "" });
  };

  const perks = [
    { icon: Banknote, title: t("becomeTutor.p1Title"), desc: t("becomeTutor.p1Desc") },
    { icon: Clock, title: t("becomeTutor.p2Title"), desc: t("becomeTutor.p2Desc") },
    { icon: Users, title: t("becomeTutor.p3Title"), desc: t("becomeTutor.p3Desc") },
    { icon: Zap, title: t("becomeTutor.p4Title"), desc: t("becomeTutor.p4Desc") },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding bg-deep text-deep-foreground">
        <BrandShapes
          // On a dark background, use primary-foreground (not primary) and higher opacity
          colorClassName="text-primary-foreground"
          opacityClassName="opacity-[0.12]"
          positionClassName="absolute -top-24 -right-24"
        />
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint mb-4">
                {t("becomeTutor.label")}
              </p>
              <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-[1.1]">
                {t("becomeTutor.title1")}{" "}
                <span className="italic text-mint">{t("becomeTutor.title2")}</span>
              </h1>
              <p className="text-lg text-deep-foreground/70 leading-relaxed mb-8">
                {t("becomeTutor.subtitle")}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Meritia (BecomeTutor) — editorial letter + terms strip */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Letter */}
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                  {t("becomeTutor.whyLabel")}
                </p>
                <h2 className="text-3xl md:text-5xl font-serif">
                  {t("becomeTutor.whyTitle")}
                </h2>

                <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed max-w-prose">
                  <p>{t("becomeTutor.whyBody1")}</p>
                  <p>{t("becomeTutor.whyBody2")}</p>
                  <p>{t("becomeTutor.whyBody3")}</p>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#apply"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                  >
                    {t("becomeTutor.submitApplication")} <ArrowRight size={18} />
                  </a>
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center justify-center gap-2 border border-border px-7 py-4 rounded-lg font-medium hover:bg-secondary transition-all"
                  >
                    {t("hero.learnMore")}
                  </Link>
                </div>
              </div>

              {/* Terms / offer strip */}
              <div className="lg:col-span-5">
                <div className="border border-border rounded-xl overflow-hidden bg-background">
                  {perks.map((p, i) => (
                    <div
                      key={p.title}
                      className="relative px-6 bg-background h-[100px] flex items-center"
                    >
                      <div className="flex items-start gap-6 w-full">
                        <div className="min-w-0 flex-1">
                          <div className="font-serif text-lg leading-snug">
                            {p.title}
                          </div>
                          <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
                            {p.desc}
                          </div>
                        </div>

                        <div className="ml-auto text-xs tracking-[0.2em] uppercase text-muted-foreground">
                          0{i + 1}
                        </div>
                      </div>

                      {/* Divider that does NOT affect height */}
                      {i !== perks.length - 1 && (
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-xs text-muted-foreground leading-relaxed">
                  {t("becomeTutor.subtitle")}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="section-padding bg-secondary">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                {t("becomeTutor.applyLabel")}
              </p>
              <h2 className="text-3xl md:text-5xl font-serif">
                {t("becomeTutor.applyTitle")}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t("becomeTutor.nameLabel")}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder={t("becomeTutor.namePlaceholder")}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t("becomeTutor.emailLabel")}
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder={t("becomeTutor.emailPlaceholder")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t("becomeTutor.universityLabel")}
                  </label>
                  <select
                    required
                    value={form.university}
                    onChange={(e) => setForm({ ...form, university: e.target.value })}
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">{t("becomeTutor.universityPlaceholder")}</option>
                    <option value="KTH">Kungliga Tekniska Högskolan</option>
                    <option value="KI">Karolinska Institutet</option>
                    <option value="SSE">Handelshögskolan</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t("becomeTutor.subjectLabel")}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder={t("becomeTutor.subjectPlaceholder")}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t("becomeTutor.messageLabel")}
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder={t("becomeTutor.messagePlaceholder")}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {t("becomeTutor.submitApplication")} <ArrowRight size={18} />
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default BecomeTutor;