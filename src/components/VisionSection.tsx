import { useTranslations } from "next-intl";
import Image from "next/image";
import RevealSection from "./RevealSection";

export default function VisionSection() {
  const t = useTranslations("vision");
  return (
    <RevealSection>
      <section id="vision" className="py-16 md:py-20 bg-bg-secondary">
        <div className="mx-auto max-w-[720px] px-6">
          <p className="section-label mb-8">{t("label")}</p>
          <div className="dashed-box bg-bg-primary">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-3/5">
                <h2 className="font-mono text-xl md:text-2xl font-bold text-fg-primary leading-tight">
                  {t("statement")}
                </h2>
                <p className="mt-4 text-fg-secondary text-[0.9375rem] leading-relaxed">
                  {t("body")}
                </p>
              </div>
              <div className="md:w-2/5 flex items-center justify-center">
                <div className="vision-scanline-scene" aria-hidden="true">
                  <div className="vision-scanline-layer vision-scanline-layer--blueprint">
                    <Image
                      alt=""
                      fill
                      loading="lazy"
                      className="vision-scanline-image"
                      sizes="(max-width: 767px) 280px, 230px"
                      src="/images/katana-blueprint.png"
                    />
                  </div>
                  <div className="vision-scanline-layer vision-scanline-layer--render">
                    <Image
                      alt=""
                      fill
                      loading="lazy"
                      className="vision-scanline-image"
                      sizes="(max-width: 767px) 280px, 230px"
                      src="/images/katana-render.png"
                    />
                  </div>
                  <div className="vision-scanline-beam" />
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-dashed border-border-dashed grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="mono-caps text-accent mb-2">
                  {t("pillar1Title")}
                </h3>
                <p className="text-fg-tertiary text-sm leading-relaxed">
                  {t("pillar1Desc")}
                </p>
              </div>
              <div>
                <h3 className="mono-caps text-accent mb-2">
                  {t("pillar2Title")}
                </h3>
                <p className="text-fg-tertiary text-sm leading-relaxed">
                  {t("pillar2Desc")}
                </p>
              </div>
              <div>
                <h3 className="mono-caps text-accent mb-2">
                  {t("pillar3Title")}
                </h3>
                <p className="text-fg-tertiary text-sm leading-relaxed">
                  {t("pillar3Desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}
