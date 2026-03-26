"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { SiX } from "react-icons/si";
import { HiUserGroup } from "react-icons/hi2";

const LOCALES = [
  { code: "en", label: "EN" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
] as const;

export default function Hero() {
  const t = useTranslations();
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="hero-wrapper">
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1 className="hero-title">SWRD</h1>
          <p
            className="hero-pronunciation"
            aria-label={`${t("hero.pronunciationLabel")} ${t("hero.pronunciation")}`}
          >
            {t("hero.pronunciation")}
          </p>
          <p className="hero-tagline">{t("hero.tagline")}</p>
          <p className="hero-subtitle">{t("hero.subtitle")}</p>
        </div>
      </section>

      {/* Logo mark */}
      <a href={`/${locale}`} className="hero-mark" aria-label="SWRD home">
        <Image
          alt="SWRD"
          width={20}
          height={24}
          className="hero-mark-img"
          src="/images/swrd-logo-white.png"
        />
      </a>

      {/* Desktop nav */}
      <nav className="hero-nav" aria-label="Main navigation">
        <div className="hero-nav-links hero-nav-pill">
          <a href="#projects" className="hero-nav-link">
            {t("nav.projects")}
          </a>
          <a href="#vision" className="hero-nav-link">
            {t("nav.vision")}
          </a>
          <a href="#blog" className="hero-nav-link">
            {t("nav.blog")}
          </a>
          <span className="hero-nav-divider" />
          <a
            href="https://x.com/SWRD_ai"
            className="hero-nav-link hero-nav-link-external inline-flex items-center justify-center"
            aria-label={t("nav.twitter")}
            title={t("nav.twitter")}
            target="_blank"
            rel="noreferrer noopener"
          >
            <SiX size={14} />
          </a>
          <a
            href="https://x.com/i/communities/2037206709337297024/"
            className="hero-nav-link hero-nav-link-external inline-flex items-center justify-center"
            aria-label={t("nav.community")}
            title={t("nav.community")}
            target="_blank"
            rel="noreferrer noopener"
          >
            <HiUserGroup size={15} />
          </a>
        </div>
      </nav>

      {/* Language switcher (desktop) */}
      <div className="hero-lang hero-nav-pill">
        {LOCALES.map((l, i) => (
          <span key={l.code} className="flex items-center">
            {i > 0 && <span className="hero-nav-lang-sep">/</span>}
            {l.code === locale ? (
              <span className="hero-nav-lang-active">{l.label}</span>
            ) : (
              <a href={`/${l.code}`} className="hero-nav-lang-link">
                {l.label}
              </a>
            )}
          </span>
        ))}
      </div>

      {/* Hamburger (mobile) */}
      <button
        className="hero-hamburger hero-nav-pill"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className={`hero-nav-menu-line ${menuOpen ? "open" : ""}`} />
        <span className={`hero-nav-menu-line ${menuOpen ? "open" : ""}`} />
        <span className={`hero-nav-menu-line ${menuOpen ? "open" : ""}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="hero-mobile-menu">
          <a
            href="#projects"
            className="hero-mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.projects")}
          </a>
          <a
            href="#vision"
            className="hero-mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.vision")}
          </a>
          <a
            href="#blog"
            className="hero-mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.blog")}
          </a>
          <div className="hero-mobile-divider" />
          <a
            href="https://x.com/SWRD_ai"
            className="hero-mobile-link"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("nav.twitter")}
          </a>
          <a
            href="https://x.com/i/communities/2037206709337297024/"
            className="hero-mobile-link"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("nav.community")}
          </a>
          <div className="hero-mobile-divider" />
          <div className="hero-mobile-lang">
            {LOCALES.map((l, i) => (
              <span key={l.code} className="flex items-center">
                {i > 0 && <span className="hero-nav-lang-sep">/</span>}
                {l.code === locale ? (
                  <span className="hero-nav-lang-active">{l.label}</span>
                ) : (
                  <a href={`/${l.code}`} className="hero-nav-lang-link">
                    {l.label}
                  </a>
                )}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
