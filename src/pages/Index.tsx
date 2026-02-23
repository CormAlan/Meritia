import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";
import FadeIn from "@/components/FadeIn";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import BrandShapes from "@/components/BrandShapes";

const universities = ["KTH", "Karolinska Institutet", "Handelshögskolan"];

const Index = () => {
  const { t } = useTranslation();

  const steps = [
    { num: "01", title: t("howItWorks.step1Title"), desc: t("howItWorks.step1Desc") },
    { num: "02", title: t("howItWorks.step2Title"), desc: t("howItWorks.step2Desc") },
    { num: "03", title: t("howItWorks.step3Title"), desc: t("howItWorks.step3Desc") },
    { num: "04", title: t("howItWorks.step4Title"), desc: t("howItWorks.step4Desc") }
  ];

  const advantages = [
    { title: t("whyMeritia.adv1Title"), desc: t("whyMeritia.adv1Desc") },
    { title: t("whyMeritia.adv2Title"), desc: t("whyMeritia.adv2Desc") },
    { title: t("whyMeritia.adv3Title"), desc: t("whyMeritia.adv3Desc") },
  ];

  // NEW — tutor perks (from BecomeTutor i18n)
  const tutorPerks = [
    { title: t("becomeTutor.p1Title"), desc: t("becomeTutor.p1Desc") },
    { title: t("becomeTutor.p2Title"), desc: t("becomeTutor.p2Desc") },
    { title: t("becomeTutor.p3Title"), desc: t("becomeTutor.p3Desc") },
  ];

  const testimonials = [
    { text: t("testimonials.t1Text"), author: t("testimonials.t1Author"), role: t("testimonials.t1Role") },
    { text: t("testimonials.t2Text"), author: t("testimonials.t2Author"), role: t("testimonials.t2Role") },
    { text: t("testimonials.t3Text"), author: t("testimonials.t3Author"), role: t("testimonials.t3Role") },
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Stockholm skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/70 to-deep/40" />
        </div>

        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <svg
            className="absolute -top-24 -right-24 opacity-[0.10] text-primary-foreground"
            width="520"
            height="520"
            viewBox="0 0 520 520"
            fill="none"
          >
            <path
              d="M90 140C150 60 290 40 360 90C430 140 470 260 420 350C370 440 240 480 150 420C60 360 30 220 90 140Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M150 170C190 110 280 100 330 140C380 180 410 260 380 320C350 380 260 410 190 370C120 330 110 230 150 170Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto section-padding w-full">
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary-foreground leading-[1.1] mb-6">
                {t("hero.title1")}{" "}
                <span className="italic text-mint">{t("hero.title2")}</span>
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/70 max-w-lg mb-8 font-light leading-relaxed">
                {t("hero.subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-mint text-deep px-8 py-4 rounded-lg text-base font-semibold hover:bg-mint/90 transition-all duration-300"
                >
                  {t("hero.cta")}
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/for-foraldrar"
                  className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:bg-primary-foreground/10 transition-all duration-300"
                >
                  {t("hero.learnMore")}
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Universities */}
      <section className="bg-secondary px-6 py-12 md:py-14 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-10">
              {t("universities.label")}
            </p>

            <div className="flex flex-wrap justify-center items-center gap-16 md:gap-28">
              {/* KTH */}
              <img
                src="/KTH_logga.jpeg"
                alt="KTH"
                className="h-20 md:h-24 w-20 md:w-24 object-contain opacity-80 hover:opacity-100 transition"
              />

              {/* KI */}
              <img
                src="/KI_logga.jpg"
                alt="Karolinska Institutet"
                className="h-20 md:h-24 w-20 md:w-24 object-contain opacity-80 hover:opacity-100 transition"
              />

              {/* HHS */}
              <img
                src="/HHS_logga.png"
                alt="Handelshögskolan"
                className="h-20 md:h-24 w-20 md:w-24 object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          </FadeIn>
        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
              {t("howItWorks.label")}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              {t("howItWorks.title")}
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 border border-border rounded-xl p-6 md:p-8 bg-background/60">
              <div className="border-l border-border pl-6 space-y-8">
                {steps.map((s) => (
                  <div key={s.num} className="relative group">
                    <div className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full bg-foreground" />
                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-6">
                      <div className="text-s font-medium tracking-widest text-muted-foreground w-14">
                        {s.num}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-medium">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-lg text-muted-foreground leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Parent advantages (kept once) */}
            <div className="border border-border rounded-xl p-6 md:p-8 bg-secondary">
              <div className="text-sm text-muted-foreground">
                {t("whyMeritia.label")}
              </div>

              <div className="mt-4 space-y-3">
                {advantages.map((a) => (
                  <div key={a.title} className="text-sm">
                    <div className="font-medium">{a.title}</div>
                    <div className="text-muted-foreground leading-relaxed">
                      {a.desc}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center gap-2 w-full bg-mint text-deep px-5 py-3 rounded-lg text-sm font-semibold hover:bg-mint/90 transition-all duration-300"
                >
                  {t("hero.cta")}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MERITIA */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
              {t("whyMeritia.label")}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              {t("whyMeritia.title")}
            </h2>

            <div className="mt-6 space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-base text-foreground">
                {t("whyMeritia.body1")}
              </p>
              <p className="text-base">{t("whyMeritia.body2")}</p>
              <p className="text-base">{t("whyMeritia.body3")}</p>
            </div>

            <div className="mt-8">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {t("hero.cta")}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* NEW: Tutor recruitment panel */}
          <div className="lg:pl-10">
            <div className="border border-border rounded-xl p-6 md:p-8 bg-background">
              <div className="text-sm text-muted-foreground mb-4">
                {t("becomeTutor.homeKicker")}
              </div>

              <div className="space-y-4">
                {tutorPerks.map((p) => (
                  <div key={p.title} className="flex gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-foreground/70 shrink-0" />
                    <div>
                      <div className="font-medium">{p.title}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        {p.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  to="/bli-tutor"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {t("cta.becomeTutor")}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="pt-10 pb-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                {t("testimonials.label")}
              </p>
              <h2 className="text-3xl md:text-5xl font-serif">
                {t("testimonials.title")}
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((te, i) => (
              <FadeIn key={te.author} delay={i * 0.15}>
                <div className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-between h-full">
                  <div>
                    <Quote className="text-primary/20 mb-4" size={32} />
                    <p className="text-foreground/80 leading-relaxed mb-6 italic">
                      {te.text}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{te.author}</p>
                    <p className="text-sm text-muted-foreground">{te.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden section-padding bg-secondary">
        <BrandShapes
          colorClassName="text-secondary-foreground"
          opacityClassName="opacity-[0.08]"
          positionClassName="absolute -top-24 -left-24"
        />

        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                {t("cta.bookCta")}
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/bli-tutor"
                className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-8 py-4 rounded-lg text-base font-medium hover:bg-foreground/5 transition-all duration-300"
              >
                {t("cta.becomeTutor")}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Index;