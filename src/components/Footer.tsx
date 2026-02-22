import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-deep text-deep-foreground">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl mb-4">Meritia</h3>
            <p className="text-sm opacity-70 leading-relaxed">{t("footer.description")}</p>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest mb-4 opacity-50">{t("footer.navigation")}</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm opacity-70 hover:opacity-100 transition-opacity">{t("nav.home")}</Link>
              <Link to="/for-foraldrar" className="text-sm opacity-70 hover:opacity-100 transition-opacity">{t("nav.forParents")}</Link>
              <Link to="/bli-tutor" className="text-sm opacity-70 hover:opacity-100 transition-opacity">{t("nav.becomeTutor")}</Link>
              <Link to="/om-oss" className="text-sm opacity-70 hover:opacity-100 transition-opacity">{t("nav.about")}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest mb-4 opacity-50">{t("footer.subjectsTitle")}</h4>
            <div className="flex flex-col gap-3">
              <Link to="/amnen#matematik" className="text-sm opacity-70 hover:opacity-100 transition-opacity">{t("subjects.math.title")}</Link>
              <Link to="/amnen#fysik-kemi" className="text-sm opacity-70 hover:opacity-100 transition-opacity">{t("subjects.physics.title")}</Link>
              <Link to="/amnen#engelska-svenska" className="text-sm opacity-70 hover:opacity-100 transition-opacity">{t("subjects.languages.title")}</Link>
              <Link to="/amnen#programmering" className="text-sm opacity-70 hover:opacity-100 transition-opacity">{t("subjects.programming.title")}</Link>
              <Link to="/amnen#so" className="text-sm opacity-70 hover:opacity-100 transition-opacity">{t("subjects.socialStudies.title")}</Link>
              <Link to="/amnen#moderna-sprak" className="text-sm opacity-70 hover:opacity-100 transition-opacity">{t("subjects.modernLanguages.title")}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest mb-4 opacity-50">{t("footer.contactTitle")}</h4>
            <div className="flex flex-col gap-3">
              <span className="text-sm opacity-70">{t("footer.location")}</span>
              <a href="mailto:hej@meritia.se" className="text-sm opacity-70 hover:opacity-100 transition-opacity">hej@meritia.se</a>
              <Link to="/kontakt" className="text-sm font-medium text-mint hover:underline">{t("footer.bookConsultation")}</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-deep-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-40">{t("footer.copyright")}</p>
          <p className="text-xs opacity-40">{t("footer.locationTag")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
