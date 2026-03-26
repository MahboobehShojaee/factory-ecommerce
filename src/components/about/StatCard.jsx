import React from "react";
import { motion } from "framer-motion";

export default function StatCard({ label, value, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      whileHover={{ y: -5, scale: 1.03 }}
      className="bg-white/80 backdrop-blur-sm border border-gray-100 p-6 rounded-[30px] shadow-sm hover:shadow-xl hover:border-[#D4AF37]/30 transition-all duration-300"
    >
      <p className="text-[9px] font-black tracking-widest text-gray-400 uppercase mb-2">
        {label}
      </p>
      <p className="text-base font-black text-[#374151]">{value}</p>
    </motion.div>
  );
}