import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import BrandShapes from "@/components/BrandShapes";

const About = () => {
  const { t } = useTranslation();

  const values = [
    { title: t("about.v1Title"), desc: t("about.v1Desc") },
    { title: t("about.v2Title"), desc: t("about.v2Desc") },
    { title: t("about.v3Title"), desc: t("about.v3Desc") },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding bg-secondary">
        <BrandShapes
          colorClassName="text-primary"
          opacityClassName="opacity-[0.15]"
          positionClassName="absolute -bottom-24 -left-24"
        />

        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                {t("about.label")}
              </p>
              <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-[1.1]">
                {t("about.title1")}{" "}
                <span className="italic text-primary">
                  {t("about.title2")}
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.subtitle")}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              {t("about.storyLabel")}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-8">
              {t("about.storyTitle")}
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>{t("about.storyP1")}</p>
              <p>{t("about.storyP2")}</p>
              <p>{t("about.storyP3")}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding pt-6 md:pt-10 bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                {t("about.valuesLabel")}
              </p>
              <h2 className="text-3xl md:text-5xl font-serif">
                {t("about.valuesTitle")}
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-5xl mx-auto">
            {/* Top two */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
              {values.slice(0, 2).map((v, i) => (
                <FadeIn key={v.title} delay={i * 0.08}>
                  <div>
                    <div className="font-serif text-2xl leading-tight">
                      {v.title}
                    </div>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Centered third */}
            <FadeIn delay={0.2}>
              {(() => {
                const last = values[2];

                return (
                  <div className="mt-16 flex justify-center">
                    <div className="max-w-xl text-center">
                      <div className="font-serif text-2xl leading-tight">
                        {last.title}
                      </div>

                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {last.desc}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </FadeIn>

            {/* Quote */}
            <FadeIn delay={0.3}>
              <div className="mt-16 border border-border rounded-xl px-8 py-12 bg-secondary text-center max-w-3xl mx-auto">
                <Quote className="mx-auto text-primary/30 mb-5" size={30} />
                <div className="font-serif text-xl md:text-2xl leading-relaxed">
                  {t("about.valuesQuote")}
                </div>
                <div className="mt-5 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {t("about.valuesQuoteBy")}
                </div>
              </div>
            </FadeIn>

            {/* Universities */}
            <FadeIn delay={0.35}>
              <div className="mt-8 text-sm text-muted-foreground text-center">
                {t("universities.label")}{" "}
                {["KTH", "Karolinska Institutet", "Handelshögskolan"].join(
                  " • "
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden section-padding bg-secondary">
        <BrandShapes
          colorClassName="text-secondary-foreground"
          opacityClassName="opacity-[0.08]"
          positionClassName="absolute -top-24 -left-24"
        />
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              {t("about.ctaTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              {t("about.ctaSubtitle")}
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
            >
              {t("about.ctaCta")} <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default About;