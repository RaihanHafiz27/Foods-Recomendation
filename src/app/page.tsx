import FeaturesSection from "@/components/fragments/FeaturesSection";
import HeroSection from "@/components/fragments/HeroSection";
import HowSection from "@/components/fragments/HowSection";
import TestimonialSection from "@/components/fragments/Testimonial";
import MainLayout from "@/components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <HowSection />
    </MainLayout>
  );
}
