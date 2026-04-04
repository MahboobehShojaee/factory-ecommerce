import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import c1 from "../../assets/images/logos/c1.png";
import c2 from "../../assets/images/logos/c2.png";
import c3 from "../../assets/images/logos/c3.png";
import c4 from "../../assets/images/logos/c4.png";
import c5 from "../../assets/images/logos/c5.png";

export default function ClientsSlider() {
  const { dict, isRTL } = useLanguage();
  const t = dict?.home || {};
  const clients = [c1, c2, c3, c4, c5];

  return (
    <section className="py-24 overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col items-center text-center">
          <div className={`flex items-center gap-3 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className="h-[2px] w-8 bg-[#D4AF37]"></span>
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">
              {isRTL ? "اعتماد و تخصص" : "Trusted by Industry Leaders"}
            </span>
            <span className="h-[2px] w-8 bg-[#D4AF37]"></span>
          </div>
          <h2 className="text-3xl font-black text-[#374151] leading-tight">
            {isRTL ? "مشتریان ما" : "Our Valued Clients"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl">
            {isRTL 
              ? "پیشروان صنعت به ما اعتماد کرده‌اند" 
              : "Industry leaders trust us for their critical infrastructure needs"
            }
          </p>
        </div>
      </div>

      {/* Logo Slider */}
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-10">
            {clients.map((logo, idx) => (
              <div
                key={idx}
                className="w-40 h-20 sm:w-48 sm:h-24 bg-white rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-sm border p-1"
              >
                <img
                  src={logo}
                  alt={`Client logo ${idx + 1}: ${['Aria Energy', 'Pars Steel', 'Kerman Cable', 'Gulf Industry', 'Setareh Group'][idx]}`}
                  className="h-14 w-auto sm:h-20 max-w-[140px] object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
