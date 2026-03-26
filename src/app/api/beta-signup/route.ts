import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  email: z.string().trim().email({ message: "email_invalid" }),
  twitter: z.string().trim(),
});

function normalizeTwitter(raw: string) {
  return raw.replace(/^@+/, "");
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    const field = parsed.error.flatten().fieldErrors;
    const code = field.email?.[0] ?? "validation_failed";
    return NextResponse.json({ error: code }, { status: 400 });
  }

  const handle = normalizeTwitter(parsed.data.twitter);
  if (
    handle.length < 1 ||
    handle.length > 15 ||
    !/^[A-Za-z0-9_]+$/.test(handle)
  ) {
    return NextResponse.json({ error: "twitter_invalid" }, { status: 400 });
  }

  const email = parsed.data.email;
  const payload = {
    email,
    twitter: handle,
    at: new Date().toISOString(),
  };

  const webhook = process.env.BETA_SIGNUP_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        console.error("beta-signup webhook failed", res.status);
      }
    } catch (e) {
      console.error("beta-signup webhook error", e);
    }
  } else if (process.env.NODE_ENV === "development") {
    console.info("beta-signup", payload);
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
