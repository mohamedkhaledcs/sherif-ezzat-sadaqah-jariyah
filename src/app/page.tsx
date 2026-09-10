import { ContentSection } from "@/components/ContentSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ShareSection } from "@/components/ShareSection";
import { SiteBackground } from "@/components/SiteBackground";

export default function HomePage() {
  return (
    <div id="top" className="relative min-h-dvh overflow-x-hidden">
      <SiteBackground />

      <Navbar />
      <div className="h-[var(--nav-height)]" aria-hidden="true" />

      <div className="relative z-10 flex min-h-[calc(100dvh-var(--nav-height))] flex-col">
        <main className="flex-1">
          <Hero />
          <ContentSection />
          <ShareSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
