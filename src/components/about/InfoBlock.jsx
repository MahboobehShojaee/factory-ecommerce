import React from "react";

export default function InfoBlock({ title, text }) {
  return (
    <div className="bg-[#4B5563] p-5 rounded-[25px] border border-white/10 shadow-lg">
      <p className="text-[9px] font-black tracking-widest text-[#D4AF37] uppercase mb-3">
        {title}
      </p>
      <p className="font-bold text-white text-xs leading-relaxed">{text}</p>
    </div>
  );
}
