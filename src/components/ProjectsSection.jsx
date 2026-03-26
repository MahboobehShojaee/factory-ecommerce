import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function ProjectsSection() {
  const { dict, isRTL } = useLanguage();
  const t = dict?.projects || {};

  // داده‌های نمونه برای پروژه‌ها (بهتر است این‌ها را در فایل JSON ترجمه قرار دهی)
  const projectList = t.items || [
    {
      id: 1,
      title: isRTL ? "پروژه آبرسانی خلیج فارس" : "Persian Gulf Water Project",
      category: "Industrial Solution",
      desc: isRTL
        ? "تامین بیش از ۵۰۰ کیلومتر کابل فشار قوی."
        : "Supply of 500+ km of high voltage cables.",
    },
    {
      id: 2,
      title: isRTL ? "نیروگاه خورشیدی کرمان" : "Kerman Solar Plant",
      category: "Energy Sector",
      desc: isRTL
        ? "اتصالات تخصصی پنل‌های فتوولتائیک."
        : "Specialized PV panel connections.",
    },
    {
      id: 3,
      title: isRTL ? "مجتمع تجاری ستاره" : "Setareh Commercial Complex",
      category: "Building Construction",
      desc: isRTL
        ? "سیستم هوشمند توزیع برق داخلی."
        : "Smart internal power distribution.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-6">
        {/* هدر بخش - هماهنگ با جهت زبان */}
        <div
          className={`flex flex-col md:flex-row justify-between items-end mb-16 gap-6 ${isRTL ? "md:flex-row-reverse" : ""}`}
        >
          <div className={`space-y-4 ${isRTL ? "text-right" : "text-left"}`}>
            <div
              className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <span className="h-[2px] w-8 bg-[#D4AF37]"></span>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">
                {isRTL ? "اعتماد و تخصص" : "Proven Reliability"}
              </span>
            </div>
            <h2 className="text-4xl font-black text-[#374151] uppercase italic leading-tight">
              {isRTL ? "پروژه‌های شاخص" : "Featured Projects"}
            </h2>
          </div>
          <p
            className={`max-w-md text-gray-500 font-medium text-sm leading-relaxed ${isRTL ? "text-right" : "text-left"}`}
          >
            {isRTL
              ? "کابل‌های ستاره کرمان، رگ‌های حیاتی بزرگترین پروژه‌های صنعتی و ساختمانی کشور."
              : "Setareh Kerman cables, the vital veins of the country's largest industrial and construction projects."}
          </p>
        </div>

        {/* گرید پروژه‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-[480px] overflow-hidden rounded-[40px] bg-[#374151] shadow-2xl"
            >
              {/* تصویر پروژه - با فیلتر Grayscale که در هاور رنگی می‌شود */}
              <img
                src={`https://images.unsplash.com/photo-1581094120979-af4b61488a2c?auto=format&fit=crop&q=80&w=800`}
                className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                alt={project.title}
              />

              {/* لایه گرادینت برای خوانایی متن */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/20 to-transparent opacity-90" />

              {/* محتوا */}
              <div
                className={`absolute inset-0 p-10 flex flex-col justify-end ${isRTL ? "text-right" : "text-left"}`}
              >
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                  {project.title}
                </h3>

                {/* توضیحات با انیمیشن ارتفاع */}
                <div className="h-0 overflow-hidden group-hover:h-12 transition-all duration-500 ease-in-out">
                  <p className="text-gray-300 text-xs font-medium leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div
                  className={`mt-6 flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <div className="h-[1px] flex-grow bg-white/20" />
                  <div
                    className={`h-11 w-11 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-500 ${isRTL ? "mr-4" : "ml-4"}`}
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      className={isRTL ? "rotate-180" : ""}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
