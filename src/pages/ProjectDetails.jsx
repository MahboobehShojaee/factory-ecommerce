import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useRTL } from "../hooks/useRTL.js";
import { getLocalizedNavPath } from "../content/navigation/data.js";
import { projects } from "../data/projects.js";
import SeoHead from "../lib/seo/SeoHead.jsx";
import { buildProductSchema } from "../lib/seo/schema.js";
import { FadeInUp } from "../animations/motionPresets.jsx";
import { Heading, Text } from "../components/ui/Typography.jsx";

export default function ProjectDetails() {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const { isRTL, dirClass } = useRTL();
  
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
        <FadeInUp>
          <div className={`text-center ${dirClass}`}>
            <Heading level={1} className="mb-4">
              {lang === "fa" ? "پروژه یافت نشد" : "Project Not Found"}
            </Heading>
            <Text className="mb-8">
              {lang === "fa" 
                ? "پروژه‌ای که به دنبال آن بودید وجود ندارد." 
                : "The project you're looking for doesn't exist."
              }
            </Text>
            <Link
              to={`${getLocalizedNavPath("/", lang)}#projects`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#374151] text-white rounded-full font-bold hover:bg-[#D4AF37] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-transparent min-h-[44px]"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" />
              </svg>
              {lang === "fa" ? "بازگشت به پروژه‌ها" : "Back to Projects"}
            </Link>
          </div>
        </FadeInUp>
      </div>
    );
  }

  const title = project.title[lang] || project.title.en;
  const shortDescription = project.shortDescription[lang] || project.shortDescription.en;
  const fullDescription = project.fullDescription[lang] || project.fullDescription.en;
  const altText = project.alt[lang] || project.alt.en;

  return (
    <>
      <SeoHead
        title={`${title} | Setareh Kerman`}
        description={shortDescription}
        canonical={`/projects/${project.slug}`}
        jsonLd={buildProductSchema({
          name: title,
          description: shortDescription,
          category: project.category,
          url: `https://setarehkerman.com/projects/${project.slug}`,
        })}
        image={project.image}
        type="article"
      />
      <section className="min-h-screen bg-[#F8F9FA] py-10 sm:py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <FadeInUp delay={0.2}>
            <div className={`mb-8 ${dirClass}`}>
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-[#D4AF37] transition-colors mb-6 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-transparent"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
                {lang === "fa" ? "بازگشت به پروژه‌ها" : "Back to Projects"}
              </Link>
              
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block mb-2">
                {project.category}
              </span>
              <Heading level={1}>
                {title}
              </Heading>
            </div>
          </FadeInUp>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <FadeInUp delay={0.3}>
              <div className="relative overflow-hidden rounded-[40px] bg-[#374151] shadow-2xl">
                <img
                  src={project.image}
                  alt={altText}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/50 to-transparent" />
              </div>
            </FadeInUp>

            {/* Content */}
            <FadeInUp delay={0.4}>
              <div className={`space-y-6 ${dirClass}`}>
                {/* Short Description */}
                <div>
                  <Heading level={3} className="text-xl mb-3">
                    {lang === "fa" ? "خلاصه پروژه" : "Project Overview"}
                  </Heading>
                  <Text className="leading-relaxed">
                    {shortDescription}
                  </Text>
                </div>

                {/* Full Description */}
                <div>
                  <Heading level={3} className="text-xl mb-3">
                    {lang === "fa" ? "توضیحات کامل" : "Full Description"}
                  </Heading>
                  <Text className="leading-relaxed">
                    {fullDescription}
                  </Text>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                  <div>
                    <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block mb-1">
                      {lang === "fa" ? "شناسه" : "ID"}
                    </span>
                    <span className="text-[#374151] font-black">
                      #{project.id}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block mb-1">
                      {lang === "fa" ? "دسته‌بندی" : "Category"}
                    </span>
                    <span className="text-[#374151] font-black">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  );
}
