import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useEffect } from "react";

export default function HeroSection() {
  const { dict, isRTL } = useLanguage();
  const t = dict.home || {};
  const stats = t.stats || [];

  const { scrollY } = useScroll();
  const scrollMove = useTransform(scrollY, [0, 600], [0, -120]);

  const mouseX = useSpring(0, { stiffness: 60, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 60, damping: 20 });

  // optimized mouse move using requestAnimationFrame
  useEffect(() => {
    let frame;
    const handleMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (e.clientX - window.innerWidth / 2) / 30;
        const y = (e.clientY - window.innerHeight / 2) / 30;
        mouseX.set(x);
        mouseY.set(y);
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const manX = useTransform(mouseX, (v) => v * (isRTL ? -1.3 : 1.3));
  const manY = useTransform(mouseY, (v) => v * -0.5);
  const bgX = useTransform(mouseX, (v) => v * 0.25);
  const bgY = useTransform(mouseY, (v) => v * 0.25);

  return (
    <section
      className={`relative min-h-[65vh] flex items-center overflow-hidden rounded-[50px] bg-[#F8F9FA] border border-white shadow-2xl shadow-gray-200/60 mx-2 mt-2 ${isRTL ? "text-right" : "text-left"}`}
      aria-labelledby="hero-heading"
    >
      {/* BACKGROUND ELEMENTS */}
      <motion.div
        className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />

      {/* Golden blurred shapes */}
      <motion.div
        animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#FFD700]/25 via-[#D4AF37]/25 to-[#B8860B]/25 blur-[150px]"
        aria-hidden="true"
      />

      {/* Factory image parallax */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 opacity-[0.08] grayscale pointer-events-none"
        aria-hidden="true"
      >
        <img
          src="/factory.png"
          loading="lazy"
          className="w-full h-full object-cover scale-110"
          alt="Factory background"
        />
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="container relative z-20 mx-auto grid lg:grid-cols-2 gap-12 items-center px-6 md:px-10 pb-20 pt-6">
        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1 text-[10px] font-bold text-[#B8860B] uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-ping" />
            {t.badge}
          </div>

          {/* Title with shimmer */}
          <h1 id="hero-heading" className="text-3xl lg:text-4xl xl:text-[42px] font-black leading-tight text-[#374151] w-full">
            {t.title?.split("{highlight}").map((part, index, array) => (
              <span key={index}>
                {part}
                {index < array.length - 1 && (
                  <span
                    className="inline animate-gold-shimmer text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #B8860B 0%, #FFD700 50%, #B8860B 100%)",
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                    }}
                  >
                    {t.titleHighlight}
                  </span>
                )}
              </span>
            ))}
          </h1>

          <p className="text-gray-500 max-w-md text-lg leading-relaxed">
            {t.subtitle}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-3" role="group" aria-label="Primary actions">
            <Link
              to="/products"
              className="bg-[#374151] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg hover:bg-gradient-to-r hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#B8860B] transform hover:scale-105 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              {t.ctaPrimary}
            </Link>
            <Link
              to="/about"
              className="border border-gray-200 bg-white/60 text-[#374151] px-6 py-2.5 rounded-xl text-sm font-bold hover:border-[#D4AF37] transform hover:scale-105 transition-all duration-500 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              {t.ctaSecondary}
            </Link>
          </div>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          style={{ x: manX, y: manY, translateY: scrollMove }}
          className="relative flex justify-center"
          aria-hidden="true"
        >
          {/* subtle gold glow */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute w-[350px] h-[350px] bg-gradient-to-tr from-[#FFD700]/20 via-[#D4AF37]/20 to-[#B8860B]/20 rounded-full blur-[130px]"
          />
          <img
            src="/men.png"
            loading="lazy"
            className="relative z-20 max-w-[400px] drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)]"
            alt="Factory worker"
          />
        </motion.div>
      </div>

      {/* STATS BAR */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl bg-[#374151]/90 backdrop-blur-xl rounded-[26px] flex items-center py-4 px-8 shadow-xl border border-white/10" role="region" aria-label="Key statistics">
        <div className="grid flex-1 grid-cols-2 md:grid-cols-4 gap-6">
          {stats.slice(0, 4).map((item, i) => (
            <div
              key={i}
              className={`flex flex-col px-3 ${isRTL ? "text-right" : "text-left"}`}
            >
              <p className="text-[9px] uppercase text-[#D4AF37] tracking-widest">
                {item.label}
              </p>
              <p className="text-lg font-black text-white italic">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
