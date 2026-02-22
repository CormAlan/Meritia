import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import flagSv from "@/assets/flags/sv.svg";
import flagEn from "@/assets/flags/en.png";
import flagAr from "@/assets/flags/ar.png";
import flagEs from "@/assets/flags/es.svg";
import flagFi from "@/assets/flags/fi.webp";
import flagNo from "@/assets/flags/no.webp";
import flagIs from "@/assets/flags/is.svg";
import flagKu from "@/assets/flags/ku.svg";
import flagSo from "@/assets/flags/so.svg";
import flagFa from "@/assets/flags/fa.webp";

const languages = [
  { code: "sv", flag: flagSv, label: "Svenska" },
  { code: "en", flag: flagEn, label: "English" },
  { code: "ar", flag: flagAr, label: "العربية" },
  { code: "fa", flag: flagFa, label: "فارسی" },
  { code: "ku", flag: flagKu, label: "Kurdî" },
  { code: "so", flag: flagSo, label: "Soomaali" },
  { code: "es", flag: flagEs, label: "Español" },
  { code: "fi", flag: flagFi, label: "Suomi" },
  { code: "no", flag: flagNo, label: "Norsk" },
  { code: "is", flag: flagIs, label: "Íslenska" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center hover:opacity-80 transition-opacity p-1 rounded-lg"
        aria-label="Change language"
      >
        <img src={current.flag} alt={current.label} className="w-7 h-5 object-cover rounded-sm" />
      </button>
      {open && (
        <div className="absolute end-0 top-full mt-2 bg-card border border-border rounded-xl shadow-lg overflow-hidden min-w-[160px] z-50 max-h-[400px] overflow-y-auto">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-secondary transition-colors ${
                lang.code === i18n.language ? "bg-secondary font-semibold" : ""
              }`}
            >
              <img src={lang.flag} alt={lang.label} className="w-7 h-5 object-cover rounded-sm flex-shrink-0" />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
