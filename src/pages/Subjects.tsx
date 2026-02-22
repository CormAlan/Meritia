import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BookOpen, Calculator, FlaskConical, Languages, Code, Globe, Landmark } from "lucide-react";
import { useTranslation } from "react-i18next";
import FadeIn from "@/components/FadeIn";
import Layout from "@/components/Layout";
import BrandShapes from "@/components/BrandShapes";

const subjectConfig = [
  { id: "matematik", key: "math", icon: Calculator },
  { id: "fysik-kemi", key: "physics", icon: FlaskConical },
  { id: "engelska-svenska", key: "languages", icon: Languages },
  { id: "programmering", key: "programming", icon: Code },
  { id: "so", key: "socialStudies", icon: Landmark },
  { id: "moderna-sprak", key: "modernLanguages", icon: Globe },
];

const Subjects = () => {
  const { hash } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [hash]);

  const subjects = subjectConfig.map((s) => ({
    ...s,
    title: t(`subjects.${s.key}.title`),
    tagline: t(`subjects.${s.key}.tagline`),
    description: t(`subjects.${s.key}.description`),
    levels: t(`subjects.${s.key}.levels`, { returnObjects: true }) as string[],
    topics: t(`subjects.${s.key}.topics`, { returnObjects: true }) as string[],
  }));

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding bg-secondary">
        <BrandShapes
          // On a light background, use primary (not primary-foreground) and lower opacity
          colorClassName="text-primary"
          opacityClassName="opacity-[0.08]"
          positionClassName="absolute -top-24 -right-24"
        />
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">
              {t("subjects.heroTitle1")} <span className="italic text-primary">{t("subjects.heroTitle2")}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t("subjects.heroSubtitle")}</p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {subjects.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="inline-flex items-center gap-2 bg-card border border-border px-5 py-2.5 rounded-xl text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <s.icon size={16} />
                  {s.title}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Subject sections */}
      {subjects.map((subject, i) => (
        <section
          key={subject.id}
          id={subject.id}
          className={`section-padding scroll-mt-24 ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}
        >
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <div>
                  <div className="inline-flex items-center gap-2 text-primary mb-4">
                    <subject.icon size={24} />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">{subject.tagline}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif mb-6">{subject.title}</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{subject.description}</p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">{t("subjects.levels")}</h3>
                    <div className="flex flex-wrap gap-2">
                      {subject.levels.map((level) => (
                        <span key={level} className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium">{level}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">{t("subjects.topics")}</h3>
                    <ul className="space-y-2">
                      {subject.topics.map((topic) => (
                        <li key={topic} className="flex items-center gap-3 text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default Subjects;
