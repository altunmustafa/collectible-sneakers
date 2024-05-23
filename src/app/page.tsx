import HeroSection from "@/components/landing-sections/hero-section";
import ServicesSection from "@/components/landing-sections/services-section";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <HeroSection />
      <ServicesSection />
    </main>
  );
}
