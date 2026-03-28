import React from "react";
import { motion } from "framer-motion";

export default function SidebarInfo({ t, isRTL }) {
  const dirClass = isRTL ? "text-right" : "text-left";

  return (
    <aside
      className={`flex flex-col justify-between border border-white/10 bg-[#374151] p-10 text-white rounded-[45px] shadow-2xl relative overflow-hidden ${dirClass}`}
    >
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full -translate-x-20 translate-y-20 blur-[90px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 space-y-6"
      >
        <div className="w-16 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)] mr-0 ml-auto"></div>
        <h3 className="text-2xl font-black tracking-tight">
          {t.locationTitle}
        </h3>
        <p className="text-gray-400 leading-relaxed text-sm font-medium">
          {t.locationText}
        </p>
      </motion.div>

      <div className="relative z-10 mt-12 space-y-4">
        {[
          ["factoryAddress", "factoryAddressText"],
          ["workingHours", "workingHoursText"],
        ].map(([title, text]) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-[30px] bg-white/5 border border-white/10 p-6 backdrop-blur-md hover:bg-white/10 transition-all group"
          >
            <p className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.2em] mb-3 group-hover:-translate-x-1 transition-transform">
              {t[title]}
            </p>
            <p className="text-sm leading-relaxed text-gray-200 font-medium">
              {t[text]}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div className="relative z-10 mt-12 flex justify-center opacity-80 hover:opacity-100 transition-opacity duration-700">
        <img
          src="/src/assets/images/logo-withoutBackground.png"
          alt="watermark"
          className="h-28 w-28 object-contain brightness-125 saturate-150 dropshadow-[0_0_15px_rgba(212,175,55,0.3)]"
        />
      </motion.div>
    </aside>
  );
}
