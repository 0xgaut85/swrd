import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import VisionSection from "@/components/VisionSection";
import BlogSection from "@/components/BlogSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <hr className="section-divider" />
      <ProjectsSection />
      <hr className="section-divider" />
      <VisionSection />
      <hr className="section-divider" />
      <BlogSection />
      <hr className="section-divider" />
      <JoinSection />
      <Footer />
    </main>
  );
}
