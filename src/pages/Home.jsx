import { useLanguage } from "../context/LanguageContext";
import HeroSection from "../components/home/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import ClientsSlider from "../components/home/ClientsSlider";

export default function Home() {
  const { isRTL } = useLanguage();

  return (
    <main
      className={`pb-12 bg-[#F8F9FA] overflow-x-hidden ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      <section aria-label="Hero introduction">
        <HeroSection />
      </section>

      <section aria-label="Featured projects">
        <ProjectsSection />
      </section>

      {/* Section Divider */}
      <div className="relative" aria-hidden="true">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-[#F8F9FA] px-4">
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <section aria-label="Client testimonials">
        <ClientsSlider />
      </section>
    </main>
  );
}
