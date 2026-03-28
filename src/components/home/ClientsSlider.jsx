import { motion } from "framer-motion";

export default function ClientsSlider() {
  const clients = [
    "/src/assets/images/logos/c1.png",
    "/src/assets/images/logos/c2.png",
    "/src/assets/images/logos/c3.png",
    "/src/assets/images/logos/c4.png",
    "/src/assets/images/logos/c5.png",
  ];

  return (
    <section className="py-24 overflow-hidden">
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
                className="w-48 h-24 bg-white rounded-3xl flex items-center justify-center shadow-sm border"
              >
                <img src={logo} className="max-w-[120px]" />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
