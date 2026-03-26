import React from "react";

export default function LabCard({ code, title, imgSrc }) {
  return (
    <div className="min-w-[250px] sm:min-w-[300px] group relative overflow-hidden rounded-[40px] bg-[#374151] aspect-[4/5] shadow-xl border border-white/10">
      <img
        src={imgSrc}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover rounded-[40px] z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent z-10 opacity-90" />
      <div className="w-full h-full flex items-center justify-center text-white/5 text-4xl font-black rotate-12 z-20">
        SETREH KERMAN LAB
      </div>
      <div className="absolute bottom-0 p-6 sm:p-8 z-30">
        <p className="text-[10px] font-black text-[#D4AF37] tracking-widest uppercase mb-1">
          {code}
        </p>
        <h4 className="text-white font-bold text-lg">{title}</h4>
      </div>
    </div>
  );
}
