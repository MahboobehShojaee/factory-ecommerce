import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";
import { projects } from "../data/projects.js";
import { useEffect } from "react";

export default function ProjectDetails() {
  const { slug } = useParams();
  const { lang, isRTL } = useLanguage();
  
  const project = projects.find(p => p.slug === slug);
  
  // SEO: Update document title and meta description
  useEffect(() => {
    if (project) {
      const title = project.title[lang] || project.title.en;
      const description = project.shortDescription[lang] || project.shortDescription.en;
      
      document.title = `${title} | Setareh Kerman Wire & Cable`;
      
      // Update or create meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = description;
      
      // Update Open Graph meta tags
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.content = title;
      
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.content = description;
      
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      ogImage.content = project.image;
    }
  }, [project, lang]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-center ${isRTL ? "text-right" : "text-left"}`}
        >
          <h1 className="text-3xl font-black text-[#374151] mb-4">
            {lang === "fa" ? "پروژه یافت نشد" : "Project Not Found"}
          </h1>
          <p className="text-gray-500 mb-8">
            {lang === "fa" 
              ? "پروژه‌ای که به دنبال آن بودید وجود ندارد." 
              : "The project you're looking for doesn't exist."
            }
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#374151] text-white rounded-full font-bold hover:bg-[#D4AF37] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-transparent"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            {lang === "fa" ? "بازگشت به پروژه‌ها" : "Back to Projects"}
          </Link>
        </motion.div>
      </div>
    );
  }

  const title = project.title[lang] || project.title.en;
  const shortDescription = project.shortDescription[lang] || project.shortDescription.en;
  const fullDescription = project.fullDescription[lang] || project.fullDescription.en;
  const altText = project.alt[lang] || project.alt.en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#F8F9FA] py-20"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          delay={0.2}
          className={`mb-8 ${isRTL ? "text-right" : "text-left"}`}
        >
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
          <h1 className="text-4xl lg:text-5xl font-black text-[#374151] leading-tight">
            {title}
          </h1>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-[40px] bg-[#374151] shadow-2xl"
          >
            <img
              src={project.image}
              alt={altText}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/50 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={`space-y-6 ${isRTL ? "text-right" : "text-left"}`}
          >
            {/* Short Description */}
            <div>
              <h2 className="text-xl font-bold text-[#374151] mb-3">
                {lang === "fa" ? "خلاصه پروژه" : "Project Overview"}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {shortDescription}
              </p>
            </div>

            {/* Full Description */}
            <div>
              <h2 className="text-xl font-bold text-[#374151] mb-3">
                {lang === "fa" ? "توضیحات کامل" : "Full Description"}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {fullDescription}
              </p>
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
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
