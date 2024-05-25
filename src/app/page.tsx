import CollectionSection from "@/components/landing-sections/collection-section";
import HeroSection from "@/components/landing-sections/hero-section";
import JoinUsSection from "@/components/landing-sections/join-us-section";
import ProductsSection from "@/components/landing-sections/products-section";
import ServicesSection from "@/components/landing-sections/services-section";
import UserCommentsSection from "@/components/landing-sections/user-comments-section";
import WordMapSection from "@/components/landing-sections/world-map-section";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <JoinUsSection />
      <UserCommentsSection />
      <CollectionSection />
      <WordMapSection />
    </main>
  );
}
