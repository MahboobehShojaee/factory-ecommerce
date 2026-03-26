import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

export default function StatsBar({ stats = [] }) {
  const { isRTL } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 
      w-[92%] max-w-5xl bg-[#374151]/95 backdrop-blur-xl 
      rounded-[26px] flex items-center justify-between 
      py-4 px-8 shadow-xl border border-white/10"
    >
      <div className="grid flex-1 grid-cols-2 md:grid-cols-4 gap-6">
        {stats.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className={`flex flex-col px-4 ${
              index !== 0 && (isRTL ? "border-r" : "border-l")
            } border-white/10`}
          >
            <p className="text-[9px] uppercase tracking-widest text-[#D4AF37]">
              {item.label}
            </p>

            <p className="text-lg font-black text-white italic">{item.value}</p>
          </div>
        ))}
      </div>

      <div
        className={`hidden md:block bg-gradient-to-r from-[#D4AF37] to-[#B8860B]
        text-white px-5 py-2 rounded-xl shadow-lg
        ${isRTL ? "mr-4" : "ml-4"}`}
      >
        <p className="text-[10px] font-black uppercase tracking-widest">
          Setareh Kerman
        </p>
      </div>
    </motion.div>
  );
}
