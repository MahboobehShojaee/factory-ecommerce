import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

export default function ContactForm({
  t,
  projectOptions,
  cableOptions,
  isRTL,
}) {
  const dirClass = isRTL ? "text-right" : "text-left";

  const [formData, setFormData] = useState({
    company: "",
    person: "",
    email: "",
    phone: "",
    projectType: projectOptions[0] || "",
    details: "",
  });
  const [selectedCables, setSelectedCables] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleCable = (opt) => {
    setSelectedCables((prev) =>
      prev.includes(opt) ? prev.filter((i) => i !== opt) : [...prev, opt],
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      toast.error("لطفا ایمیل معتبر وارد کنید");
      return;
    }
    if (selectedCables.length === 0) {
      toast.error("حداقل یک کابل انتخاب کنید");
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", { ...formData, selectedCables });
      toast.success("پیام شما با موفقیت ارسال شد!");

      setFormData({
        company: "",
        person: "",
        email: "",
        phone: "",
        projectType: projectOptions[0] || "",
        details: "",
      });
      setSelectedCables([]);
    } catch (err) {
      console.error(err);
      toast.error("ارسال با خطا مواجه شد.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-100 p-8 shadow-2xl shadow-gray-200/50 rounded-[40px] space-y-6 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/5 rounded-full translate-x-10 -translate-y-10 blur-3xl" />

      {/* Inputs */}
      <div className="grid gap-6 sm:grid-cols-2">
        {["company", "person"].map((field) => (
          <div key={field} className={`space-y-2 ${dirClass}`}>
            <label
              className={`text-[10px] font-black text-gray-400 uppercase tracking-widest ${
                isRTL ? "mr-2" : "ml-2 mr-0"
              }`}
            >
              {t[field]}
            </label>
            <input
              type="text"
              name={field}
              required
              placeholder={t[`${field}Placeholder`]}
              value={formData[field]}
              onChange={handleChange}
              className={`w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-5 py-3.5 text-sm text-[#374151] outline-none transition-all focus:border-[#D4AF37] focus:bg-white focus:ring-4 focus:ring-[#D4AF37]/5 ${
                isRTL ? "text-right" : "text-left"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {["email", "phone"].map((field) => (
          <div key={field} className={`space-y-2 ${dirClass}`}>
            <label
              className={`text-[10px] font-black text-gray-400 uppercase tracking-widest ${
                isRTL ? "mr-2" : "ml-2 mr-0"
              }`}
            >
              {t[field]}
            </label>
            <input
              type={field}
              name={field}
              required
              placeholder={field === "email" ? "name@company.com" : "+98 ..."}
              value={formData[field]}
              onChange={handleChange}
              className={`w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-5 py-3.5 text-sm text-[#374151] outline-none transition-all focus:border-[#D4AF37] focus:bg-white focus:ring-4 focus:ring-[#D4AF37]/5 ${
                isRTL ? "text-right" : "text-left"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Project & Cables */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className={`space-y-2 ${dirClass}`}>
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2">
            {t.projectType}
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={`w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-5 py-3.5 text-sm text-[#374151] outline-none focus:border-[#D4AF37] focus:bg-white cursor-pointer appearance-none ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {projectOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className={`space-y-2 ${dirClass}`}>
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2">
            {t.cableFamilies}
          </label>
          <div className="grid grid-cols-2 gap-2">
            {cableOptions.map((opt) => {
              const isSelected = selectedCables.includes(opt);
              return (
                <motion.label
                  key={opt}
                  animate={{
                    backgroundColor: isSelected ? "#FDF7E7" : "#F9FAFB",
                    borderColor: isSelected ? "#D4AF37" : "#F3F4F6",
                  }}
                  className="flex items-center justify-between gap-2 rounded-xl border px-3 py-2 cursor-pointer group transition-all"
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    onChange={() => toggleCable(opt)}
                  />
                  <span
                    className={`text-[9px] font-bold transition-colors ${
                      isSelected ? "text-[#D4AF37]" : "text-gray-500"
                    }`}
                  >
                    {opt}
                  </span>
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="text-[#D4AF37]"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.label>
              );
            })}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className={`space-y-2 ${dirClass}`}>
        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2">
          {t.detailsLabel}
        </label>
        <textarea
          name="details"
          rows={3}
          placeholder={t.detailsPlaceholder}
          value={formData.details}
          onChange={handleChange}
          className={`w-full resize-none rounded-[25px] border border-gray-200 bg-gray-50/50 px-5 py-4 text-sm text-[#374151] outline-none transition-all focus:border-[#D4AF37] focus:bg-white focus:ring-4 focus:ring-[#D4AF37]/5 ${
            isRTL ? "text-right" : "text-left"
          }`}
        />
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 rounded-2xl text-sm font-black transition-all duration-500 flex items-center justify-center overflow-hidden shadow-xl ${
          isSubmitting
            ? "bg-[#374151] text-white cursor-not-allowed"
            : "bg-[#374151] hover:bg-[#D4AF37] text-white shadow-gray-300/20"
        }`}
      >
        <AnimatePresence mode="wait">
          {!isSubmitting ? (
            <motion.span
              key="text"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="uppercase tracking-[0.2em]"
            >
              {t.submit}
            </motion.span>
          ) : (
            <motion.div
              key="loader"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex items-center gap-3"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
              <span>در حال ارسال...</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
}
