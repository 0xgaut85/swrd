import { useTranslations } from "next-intl";
import RevealSection from "./RevealSection";

export default function ProjectsSection() {
  const t = useTranslations("latestProject");
  return (
    <RevealSection>
      <section id="projects" className="py-16 md:py-20">
        <div className="mx-auto max-w-[720px] px-6">
          <p className="section-label mb-8">{t("label")}</p>
          <div className="dashed-box">
            <div className="flex flex-col gap-2">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-fg-primary leading-tight">
                {t("title")}
              </h2>
              <p className="text-fg-secondary text-[0.9375rem] leading-relaxed">
                {t("description")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}
