import { useTranslations } from "next-intl";
import { SiX } from "react-icons/si";
import { HiUserGroup } from "react-icons/hi2";

export default function JoinSection() {
  const t = useTranslations("join");
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[720px] px-6 text-center">
        <p className="section-label justify-center mb-8">{t("label")}</p>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-fg-primary leading-tight">
          {t("headline")}
        </h2>
        <p className="mt-4 max-w-md mx-auto text-fg-secondary text-[0.9375rem] leading-relaxed">
          {t("body")}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://x.com/i/communities/2037206709337297024/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-mono text-sm font-medium rounded-sm transition-colors duration-200 hover:bg-accent-light"
            target="_blank"
            rel="noreferrer noopener"
          >
            <HiUserGroup className="shrink-0" size={16} />
            {t("cta")}
          </a>
          <a
            href="https://x.com/SWRD_ai"
            className="bracket-link inline-flex items-center gap-2 text-fg-secondary hover:text-accent"
            target="_blank"
            rel="noreferrer noopener"
          >
            <SiX className="shrink-0" size={14} />
            {t("secondary")}
          </a>
        </div>
      </div>
    </section>
  );
}
