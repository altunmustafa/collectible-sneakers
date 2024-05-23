import HeroSection from "@/components/landing-sections/hero-section";
import JoinUsSection from "@/components/landing-sections/join-us-section";
import ProductsSection from "@/components/landing-sections/products-section";
import ServicesSection from "@/components/landing-sections/services-section";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <JoinUsSection />
    </main>
  );
}
