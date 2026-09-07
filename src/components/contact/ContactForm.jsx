import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { useRTL } from "../../hooks/useRTL.js";
import { createContactFormSchema } from "../../components/common/forms/validationSchemas.js";
import FormInput from "../../components/common/forms/FormInput.jsx";
import FormTextarea from "../../components/common/forms/FormTextarea.jsx";
import FormSelect from "../../components/common/forms/FormSelect.jsx";
import { CableSelector } from "./CableSelector.jsx";
import { analytics } from "../../lib/analytics/GoogleAnalytics.jsx";
import { submitContactForm } from "../../api/services/contactService.js";

const inputClass = (isRTL) =>
  `rounded-2xl border border-gray-200 bg-gray-50/50 px-4 sm:px-5 py-3.5 text-sm text-[#374151] outline-none transition-all focus:border-[#D4AF37] focus:bg-white focus:ring-4 focus:ring-[#D4AF37]/5 w-full ${
    isRTL ? "text-right" : "text-left"
  }`;

const labelClass = (isRTL) =>
  `text-[10px] font-black text-gray-400 uppercase tracking-widest ${
    isRTL ? "mr-2" : "ml-2 mr-0"
  }`;

export default function ContactForm({ t, projectOptions, cableOptions }) {
  const { lang } = useLanguage();
  const { dirClass, isRTL } = useRTL();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = createContactFormSchema(lang);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    register,
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      inquiryType: "general",
      company: "",
      person: "",
      email: "",
      phone: "",
      projectType: projectOptions[0] || "",
      selectedCables: [],
      quantity: "",
      urgency: "normal",
      details: "",
      terms: false,
    },
  });

  const inquiryType = watch("inquiryType");
  const watchedSelectedCables = watch("selectedCables");
  const isQuoteRequest = inquiryType === "quote";

  const urgencyOptions = [
    { value: "normal", label: lang === "fa" ? "عادی (۵-۷ روز)" : "Normal (5-7 days)" },
    { value: "urgent", label: lang === "fa" ? "فوری (۲-۳ روز)" : "Urgent (2-3 days)" },
    { value: "critical", label: lang === "fa" ? "بحرانی (۲۴ ساعت)" : "Critical (24 hours)" },
  ];

  const defaultResetValues = {
    inquiryType: "general",
    company: "",
    person: "",
    email: "",
    phone: "",
    projectType: projectOptions[0] || "",
    selectedCables: [],
    quantity: "",
    urgency: "normal",
    details: "",
    terms: false,
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const payload = {
        ...data,
        lang,
        details: data.details || "",
        quantity: isQuoteRequest ? data.quantity : "",
        urgency: isQuoteRequest ? data.urgency : "",
      };

      await submitContactForm(payload);

      if (isQuoteRequest) {
        analytics.trackQuotationRequest(data);
      } else {
        analytics.trackContactFormSubmit(data);
      }

      toast.success(
        lang === "fa"
          ? isQuoteRequest
            ? "درخواست قیمت با موفقیت ارسال شد!"
            : "پیام شما با موفقیت ارسال شد!"
          : isQuoteRequest
            ? "Quotation request sent successfully!"
            : "Your message has been sent successfully!",
      );

      reset(defaultResetValues);
    } catch (err) {
      if (import.meta.env.DEV) {
        console.error(err);
      }
      toast.error(
        err.message ||
          (lang === "fa"
            ? "ارسال با خطا مواجه شد. لطفاً دوباره تلاش کنید."
            : "Submission failed. Please try again."),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ds-form-panel space-y-6">
      <div className="mb-2 space-y-3">
        <h2
          className={`text-xl sm:text-2xl font-black text-[#374151] ${isRTL ? "text-right" : "text-left"}`}
        >
          {t.formTitle ||
            (lang === "fa" ? "تماس و درخواست" : "Contact & Inquiry")}
        </h2>
        <p
          className={`text-sm text-gray-600 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}
        >
          {t.formSubtitle ||
            (lang === "fa"
              ? "برای مشاوره رایگان یا دریافت قیمت، فرم زیر را تکمیل کنید."
              : "Complete the form below for free consultation or a price quote.")}
        </p>
        <div
          className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500 ${isRTL ? "justify-start" : "justify-start"}`}
        >
          <div className="flex items-center gap-1.5 shrink-0">
            <svg className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{lang === "fa" ? "پاسخ سریع" : "Fast Response"}</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <svg className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>{lang === "fa" ? "اطلاعات محرمانه" : "Confidential"}</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <svg className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{lang === "fa" ? "مشاوره متخصص" : "Expert Consultation"}</span>
          </div>
        </div>
      </div>

      {/* Inquiry type selector */}
      <fieldset className={`space-y-3 ${dirClass}`}>
        <legend className={labelClass(isRTL)}>
          {t.inquiryTypeLabel || (lang === "fa" ? "نوع درخواست" : "Inquiry Type")}
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              value: "general",
              label:
                t.inquiryGeneral ||
                (lang === "fa" ? "استعلام عمومی / مشاوره" : "General Inquiry"),
              hint:
                t.inquiryGeneralHint ||
                (lang === "fa" ? "سوالات فنی و مشاوره" : "Technical questions & consultation"),
            },
            {
              value: "quote",
              label:
                t.inquiryQuote ||
                (lang === "fa" ? "درخواست قیمت" : "Price Quote Request"),
              hint:
                t.inquiryQuoteHint ||
                (lang === "fa" ? "متراژ، اولویت و قیمت" : "Quantity, urgency & pricing"),
            },
          ].map((option) => (
            <label
              key={option.value}
              className={`relative flex cursor-pointer flex-col gap-1 rounded-2xl border p-4 transition-all min-h-[44px] ${
                inquiryType === option.value
                  ? "border-[#D4AF37] bg-[#D4AF37]/5 ring-2 ring-[#D4AF37]/20"
                  : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
              } ${isRTL ? "text-right" : "text-left"}`}
            >
              <input
                type="radio"
                value={option.value}
                {...register("inquiryType")}
                className="sr-only"
              />
              <span className="text-sm font-black text-[#374151]">{option.label}</span>
              <span className="text-xs text-gray-500">{option.hint}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormInput
          name="company"
          control={control}
          label={t.company}
          placeholder={t.companyPlaceholder}
          className={dirClass}
          inputClassName={inputClass(isRTL)}
          labelClassName={labelClass(isRTL)}
          required
        />
        <FormInput
          name="person"
          control={control}
          label={t.person}
          placeholder={t.personPlaceholder}
          className={dirClass}
          inputClassName={inputClass(isRTL)}
          labelClassName={labelClass(isRTL)}
          required
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormInput
          name="email"
          control={control}
          label={t.email}
          placeholder={t.emailPlaceholder || "name@company.com"}
          type="email"
          className={dirClass}
          inputClassName={inputClass(isRTL)}
          labelClassName={labelClass(isRTL)}
          required
        />
        <FormInput
          name="phone"
          control={control}
          label={t.phone}
          placeholder={t.phonePlaceholder || "+98 ..."}
          type="tel"
          className={dirClass}
          inputClassName={inputClass(isRTL)}
          labelClassName={labelClass(isRTL)}
          required
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className={`space-y-2 ${dirClass}`}>
          <label className={labelClass(isRTL)}>{t.projectType}</label>
          <FormSelect
            name="projectType"
            control={control}
            placeholder={t.projectTypePlaceholder}
            options={projectOptions.map((opt) => ({ value: opt, label: opt }))}
            className={dirClass}
            selectClassName={`${inputClass(isRTL)} cursor-pointer appearance-none`}
            required
          />
        </div>
        <div className={`space-y-2 ${dirClass}`}>
          <p className={labelClass(isRTL)}>{t.cableFamilies}</p>
          <CableSelector
            options={cableOptions}
            selected={watchedSelectedCables || []}
            onChange={(updated) => setValue("selectedCables", updated, { shouldValidate: true })}
            error={errors.selectedCables?.message}
          />
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isQuoteRequest && (
          <motion.div
            key="quote-fields"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="grid gap-6 sm:grid-cols-2 pt-2">
              <FormInput
                name="quantity"
                control={control}
                label={t.quantity || (lang === "fa" ? "تعداد/مقدار" : "Quantity")}
                placeholder={
                  t.quantityPlaceholder ||
                  (lang === "fa" ? "مثلاً: ۱۰۰۰ متر" : "e.g., 1000 meters")
                }
                className={dirClass}
                inputClassName={inputClass(isRTL)}
                labelClassName={labelClass(isRTL)}
                required
              />
              <div className={`space-y-2 ${dirClass}`}>
                <label className={labelClass(isRTL)}>
                  {t.urgency || (lang === "fa" ? "اولویت زمانی" : "Urgency")}
                </label>
                <FormSelect
                  name="urgency"
                  control={control}
                  placeholder={
                    t.urgencyPlaceholder ||
                    (lang === "fa" ? "انتخاب کنید" : "Select urgency")
                  }
                  options={urgencyOptions}
                  className={dirClass}
                  selectClassName={`${inputClass(isRTL)} cursor-pointer appearance-none`}
                  required
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <FormTextarea
        name="details"
        control={control}
        label={t.detailsLabel}
        placeholder={t.detailsPlaceholder}
        rows={3}
        className={dirClass}
        textareaClassName={`resize-none rounded-[25px] border border-gray-200 bg-gray-50/50 px-4 sm:px-5 py-4 text-sm text-[#374151] outline-none transition-all focus:border-[#D4AF37] focus:bg-white focus:ring-4 focus:ring-[#D4AF37]/5 w-full ${
          isRTL ? "text-right" : "text-left"
        }`}
        labelClassName={labelClass(isRTL)}
      />

      <div className={`flex items-start gap-3 ${dirClass}`}>
        <input
          type="checkbox"
          id="terms"
          {...register("terms")}
          className="mt-1 h-4 w-4 min-h-[16px] min-w-[16px] accent-[#D4AF37] shrink-0"
        />
        <label htmlFor="terms" className="text-sm text-gray-600">
          {t.terms ||
            (lang === "fa"
              ? "با شرایط و ضوابط موافقت می‌کنم"
              : "I agree to the terms and conditions")}
        </label>
      </div>
      {errors.terms && (
        <p className="text-sm text-red-600 font-medium">{errors.terms.message}</p>
      )}

      <motion.button
        whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        type="submit"
        disabled={isSubmitting || !isValid}
        className={`w-full min-h-[48px] py-4 rounded-2xl text-sm font-black transition-all duration-500 flex items-center justify-center overflow-hidden shadow-xl ${
          isSubmitting || !isValid
            ? "bg-[#374151] text-white cursor-not-allowed opacity-80"
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
              className="uppercase tracking-[0.15em] sm:tracking-[0.2em] px-2 text-center"
            >
              {isQuoteRequest
                ? t.submitQuote ||
                  (lang === "fa" ? "ارسال درخواست قیمت" : "Send Quote Request")
                : t.submit ||
                  (lang === "fa" ? "ارسال استعلام" : "Submit Inquiry")}
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
              <span>{lang === "fa" ? "در حال ارسال..." : "Sending..."}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
}
