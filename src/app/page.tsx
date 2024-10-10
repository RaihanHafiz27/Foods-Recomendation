import FeaturesSection from "@/components/fragments/home/FeaturesSection";
import HeroSection from "@/components/fragments/home/HeroSection";
import HowSection from "@/components/fragments/home/HowSection";
import TestPage from "@/components/fragments/home/Test";
import TestimonialSection from "@/components/fragments/home/Testimonial";
import MainLayout from "@/components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      {/* <TestPage /> */}
      <FeaturesSection />
      <TestimonialSection />
      <HowSection />
    </MainLayout>
  );
}
