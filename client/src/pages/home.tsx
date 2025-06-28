import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { EnhancedScrollSection } from "@/components/enhanced-scroll-section";
import { Particles } from "@/components/ui/particles";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden scroll-smooth">
      <CustomCursor />
      <Particles />
      
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <SkillsSection />
        <EnhancedScrollSection />
        <ContactSection />
      </main>
      
      <Toaster />
    </div>
  );
}