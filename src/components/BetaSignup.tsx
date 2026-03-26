"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function BetaSignup() {
  const t = useTranslations("beta");
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorKey, setErrorKey] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorKey(null);
    setStatus("submitting");
    try {
      const res = await fetch("/api/beta-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, twitter }),
      });
      if (res.status === 201) {
        setStatus("success");
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      setErrorKey(data.error ?? "generic");
      setStatus("error");
    } catch {
      setErrorKey("generic");
      setStatus("error");
    }
  }

  return (
    <section id="beta" className="py-16 md:py-20 bg-bg-secondary">
      <div className="mx-auto max-w-[720px] px-6">
        <p className="section-label mb-8">{t("label")}</p>

        {status === "success" ? (
          <div
            className="dashed-box bg-bg-primary text-center py-10 px-6"
            role="status"
            aria-live="polite"
          >
            <h2 className="font-mono text-xl md:text-2xl font-bold text-fg-primary leading-tight">
              {t("successTitle")}
            </h2>
            <p className="mt-4 text-fg-secondary text-[0.9375rem] leading-relaxed max-w-md mx-auto">
              {t("successBody")}
            </p>
          </div>
        ) : (
          <div className="dashed-box bg-bg-primary">
            <h2 className="font-mono text-xl md:text-2xl font-bold text-fg-primary leading-tight">
              {t("title")}
            </h2>
            <p className="mt-3 text-fg-secondary text-[0.9375rem] leading-relaxed">
              {t("description")}
            </p>
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="beta-email"
                  className="mono-caps text-fg-tertiary"
                >
                  {t("emailLabel")}
                </label>
                <input
                  id="beta-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrorKey(null);
                    setStatus((s) => (s === "error" ? "idle" : s));
                  }}
                  disabled={status === "submitting"}
                  className="w-full rounded-sm border border-border bg-bg-primary px-3 py-2.5 font-mono text-sm text-fg-primary placeholder:text-fg-tertiary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-60"
                  placeholder={t("emailPlaceholder")}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="beta-twitter"
                  className="mono-caps text-fg-tertiary"
                >
                  {t("twitterLabel")}
                </label>
                <input
                  id="beta-twitter"
                  name="twitter"
                  type="text"
                  autoComplete="username"
                  required
                  value={twitter}
                  onChange={(e) => {
                    setTwitter(e.target.value);
                    setErrorKey(null);
                    setStatus((s) => (s === "error" ? "idle" : s));
                  }}
                  disabled={status === "submitting"}
                  className="w-full rounded-sm border border-border bg-bg-primary px-3 py-2.5 font-mono text-sm text-fg-primary placeholder:text-fg-tertiary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-60"
                  placeholder={t("twitterPlaceholder")}
                />
              </div>
              {status === "error" && errorKey && (
                <p className="text-sm text-red-600 font-mono" role="alert">
                  {errorKey === "email_invalid"
                    ? t("errors.emailInvalid")
                    : errorKey === "twitter_invalid"
                      ? t("errors.twitterInvalid")
                      : t("errors.generic")}
                </p>
              )}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="self-start inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-mono text-sm font-medium rounded-sm transition-colors duration-200 hover:bg-accent-light disabled:opacity-60 disabled:pointer-events-none"
              >
                {status === "submitting" ? t("submitting") : t("confirm")}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
