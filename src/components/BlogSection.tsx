import { useTranslations } from "next-intl";
import RevealSection from "./RevealSection";

export default function BlogSection() {
  const t = useTranslations("blog");
  return (
    <RevealSection>
      <section id="blog" className="py-16 md:py-20">
        <div className="mx-auto max-w-[720px] px-6">
          <p className="section-label mb-8">{t("label")}</p>
          <div className="dashed-box">
            <p className="text-fg-secondary text-[0.9375rem] leading-relaxed">
              {t("comingSoon")}
            </p>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}
