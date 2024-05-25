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
      <div className="relative">
        <HeroSection />
        <ServicesSection />
        <svg className="max-md:hidden absolute left-0 top-0 z-[-1] w-full h-full fill-amber-100" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="100,5 2,100 100,100" />
        </svg>
      </div>
      <ProductsSection />
      <JoinUsSection />
      <UserCommentsSection />
      <CollectionSection />
      <WordMapSection />
    </main>
  );
}
