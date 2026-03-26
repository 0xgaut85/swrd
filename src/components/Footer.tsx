"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { SiX } from "react-icons/si";
import { HiUserGroup } from "react-icons/hi2";

export default function Footer() {
  const t = useTranslations("footer");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("contact@swrd.live");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="py-8 px-6">
      <div className="mx-auto max-w-[720px]">
        <hr className="section-divider mb-8" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-5 flex-wrap">
            <a
              href="https://x.com/SWRD_ai"
              className="bracket-link"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SiX className="inline mr-1 -mt-0.5" size={11} />
              {t("twitter")}
            </a>
            <a
              href="https://x.com/i/communities/2037206709337297024/"
              className="bracket-link"
              target="_blank"
              rel="noreferrer noopener"
            >
              <HiUserGroup className="inline mr-1 -mt-0.5" size={13} />
              {t("community")}
            </a>
            <button
              onClick={handleCopy}
              className="bracket-link cursor-pointer"
              type="button"
            >
              {copied ? t("copied") : <>contact@swrd.live</>}
            </button>
          </div>
          <div className="flex items-center gap-x-5 gap-y-2 flex-wrap text-fg-tertiary">
            <a href="#" className="bracket-link">
              {t("privacy")}
            </a>
            <a href="#" className="bracket-link">
              {t("terms")}
            </a>
          </div>
        </div>
        <p className="mt-6 text-fg-tertiary text-[0.8125rem] font-mono">
          &copy; {new Date().getFullYear()} SWRD. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
