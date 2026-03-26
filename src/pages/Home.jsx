import { useLanguage } from "../context/LanguageContext";
import HeroSection from "../components/home/HeroSection";
import ClientsSlider from "../components/home/ClientsSlider";
import TechnicalSection from "../components/home/TechnicalSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  const { isRTL } = useLanguage();

  return (
    <div
      className={`pb-12 bg-[#F8F9FA] overflow-x-hidden ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      <HeroSection />

      <ClientsSlider />

      <ProjectsSection />

      <TechnicalSection />
    </div>
  );
}
