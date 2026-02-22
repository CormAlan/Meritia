import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import BrandShapes from "@/components/BrandShapes";
import DotGrid from "@/components/DotGrid";


const ForParents = () => {
  const { t } = useTranslation();

  const benefits = [
    { title: t("forParents.b1Title"), desc: t("forParents.b1Desc") },
    { title: t("forParents.b2Title"), desc: t("forParents.b2Desc") },
    { title: t("forParents.b3Title"), desc: t("forParents.b3Desc") },
    { title: t("forParents.b4Title"), desc: t("forParents.b4Desc") },
  ];

  const subjectKeys = [
    "matematik",
    "fysik",
    "kemi",
    "biologi",
    "engelska",
    "svenska",
    "programmering",
    "ekonomi",
    "statistik",
    "franska",
    "spanska",
    "historia",
    "italienska",
    "mandarin",
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding bg-secondary">
        <DotGrid
         colorClassName="text-primary"
          opacityClassName="opacity-[0.15]"
          positionClassName="absolute -top-10 -left-10"
          size={800}
          />
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                {t("forParents.label")}
              </p>
              <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-[1.1]">
                {t("forParents.title1")}{" "}
                <span className="italic text-primary">{t("forParents.title2")}</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t("forParents.subtitle")}
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all"
              >
                {t("forParents.requestTutor")} <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits — stacked skew panels (short, no numbering/line, palette-matched accents) */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                {t("forParents.benefitsLabel")}
              </p>
              <h2 className="text-3xl md:text-5xl font-serif">
                {t("forParents.benefitsTitle")}
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-7">
            {benefits.map((b, i) => {
              const isEven = i % 2 === 0;

              // Two polygon variants: slant opposite directions
              const clipA = "polygon(2% 0%, 100% 3%, 98% 100%, 0% 97%)";
              const clipB = "polygon(0% 3%, 98% 0%, 100% 97%, 2% 100%)";

              // 4 shades that match your theme (secondary) but differ perceptibly
              const bases = ["bg-secondary", "bg-primary/20", "bg-secondary/80", "bg-primary/20"];
              const base = bases[i % 4];

              // Accent/glow positions vary per card (still using theme tokens)
              const washes = [
                "bg-[radial-gradient(circle_at_20%_25%,hsl(var(--primary))/0.20,transparent_55%)]",
                "bg-[radial-gradient(circle_at_85%_30%,hsl(var(--primary))/0.16,transparent_60%)]",
                "bg-[radial-gradient(circle_at_25%_80%,hsl(var(--primary))/0.12,transparent_55%)]",
                "bg-[radial-gradient(circle_at_80%_75%,hsl(var(--primary))/0.22,transparent_55%)]",
              ];
              const wash = washes[i % 4];

              return (
                <FadeIn key={b.title} delay={i * 0.08}>
                  <div className="relative">
                    {/* Outer glow */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-10 opacity-60 blur-2xl
                        bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary))/0.18,transparent_55%)]"
                    />

                    {/* Skewed background + border (no rectangular card showing) */}
                    <div
                      aria-hidden
                      className={`pointer-events-none absolute inset-0 ${base} border border-border shadow-sm`}
                      style={{ clipPath: isEven ? clipA : clipB }}
                    />

                    {/* Accent wash on the skewed surface */}
                    <div
                      aria-hidden
                      className={`pointer-events-none absolute inset-0 opacity-100 ${wash}`}
                      style={{ clipPath: isEven ? clipA : clipB }}
                    />

                    {/* Content container (normal rectangle, text never skewed) */}
                    <div className="relative px-8 py-7 md:px-10 md:py-8 transition-transform duration-300 hover:-translate-y-0.5">
                      <h3 className="font-serif text-2xl leading-tight text-foreground">
                        {b.title}
                      </h3>
                      <p className="mt-3 text-muted-foreground text-lg leading-relaxed">
                        {b.desc}
                      </p>

                      {/* tiny designed detail */}
                      <div className="mt-5 h-px w-10 bg-border/80" />
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
      {/* Pricing philosophy */}
      <section className="section-padding bg-deep text-deep-foreground">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint mb-3">
                {t("forParents.pricingLabel")}
              </p>
              <h2 className="text-3xl md:text-5xl font-serif mb-6">
                {t("forParents.pricingTitle")}
              </h2>
              <p className="text-deep-foreground/60 text-lg leading-relaxed mb-10">
                {t("forParents.pricingDesc")}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-deep-foreground/5 border border-deep-foreground/10 rounded-2xl p-6">
                  <p className="text-4xl font-serif text-mint mb-2">~75%</p>
                  <p className="text-sm text-deep-foreground/50">
                    {t("forParents.pricingMeritia")}
                  </p>
                </div>
                <div className="bg-deep-foreground/5 border border-deep-foreground/10 rounded-2xl p-6">
                  <p className="text-4xl font-serif text-deep-foreground/40 mb-2">~45%</p>
                  <p className="text-sm text-deep-foreground/50">
                    {t("forParents.pricingTraditional")}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Subjects */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                {t("forParents.subjectsLabel")}
              </p>
              <h2 className="text-3xl md:text-5xl font-serif">
                {t("forParents.subjectsTitle")}
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {subjectKeys.map((s) => (
                <span
                  key={s}
                  className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-medium"
                >
                  {t(`subjectNames.${s}`)}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">

        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              {t("forParents.ctaTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              {t("forParents.ctaSubtitle")}
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all"
            >
              {t("forParents.requestTutor")} <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default ForParents;