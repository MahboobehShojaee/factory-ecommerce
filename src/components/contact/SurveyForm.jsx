import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { useRTL } from "../../hooks/useRTL.js";
import FormInput from "../../components/common/forms/FormInput.jsx";
import FormTextarea from "../../components/common/forms/FormTextarea.jsx";
import StarRating from "./StarRating.jsx";
import { submitSurvey } from "../../api/services/surveyService.js";

const inputClass = (isRTL) =>
  `rounded-2xl border border-gray-200 bg-gray-50/50 px-4 sm:px-5 py-3.5 text-sm text-[#374151] outline-none transition-all focus:border-[#D4AF37] focus:bg-white focus:ring-4 focus:ring-[#D4AF37]/5 w-full ${
    isRTL ? "text-right" : "text-left"
  }`;

const labelClass = (isRTL) =>
  `text-[10px] font-black text-gray-400 uppercase tracking-widest ${
    isRTL ? "mr-2" : "ml-2 mr-0"
  }`;

const selectClass = (isRTL) =>
  `${inputClass(isRTL)} cursor-pointer appearance-none`;

function createSurveySchema(lang) {
  const isFa = lang === "fa";
  return z.object({
    name: z
      .string()
      .min(1, isFa ? "این فیلد الزامی است" : "This field is required")
      .min(2, isFa ? "حداقل ۲ کاراکتر" : "At least 2 characters")
      .max(100, isFa ? "حداکثر ۱۰۰ کاراکتر" : "At most 100 characters"),
    company: z.string().max(100, isFa ? "حداکثر ۱۰۰ کاراکتر" : "At most 100 characters").optional(),
    productService: z.string().optional(),
    rating: z
      .number({ required_error: isFa ? "لطفاً امتیاز دهید" : "Please select a rating" })
      .min(1, isFa ? "لطفاً امتیاز دهید" : "Please select a rating")
      .max(5),
    comments: z
      .string()
      .min(1, isFa ? "این فیلد الزامی است" : "This field is required")
      .min(10, isFa ? "حداقل ۱۰ کاراکتر" : "At least 10 characters")
      .max(2000, isFa ? "حداکثر ۲۰۰۰ کاراکتر" : "At most 2000 characters"),
    canPublish: z.boolean().optional(),
    website: z.string().max(0).optional(),
  });
}

export default function SurveyForm({ t, cableOptions }) {
  const { lang } = useLanguage();
  const { isRTL, dirClass } = useRTL();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = createSurveySchema(lang);

  const productOptions = cableOptions && cableOptions.length > 0
    ? [...cableOptions, lang === "fa" ? "سایر" : "Other"]
    : [lang === "fa" ? "سایر" : "Other"];

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
      name: "",
      company: "",
      productService: "",
      rating: 0,
      comments: "",
      canPublish: false,
      website: "",
    },
  });

  const rating = watch("rating");

  const defaultResetValues = {
    name: "",
    company: "",
    productService: "",
    rating: 0,
    comments: "",
    canPublish: false,
    website: "",
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await submitSurvey({ ...data, lang });

      toast.success(
        lang === "fa"
          ? "نظر شما با موفقیت ثبت شد. سپاسگزاریم!"
          : "Your feedback has been submitted successfully. Thank you!",
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
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="survey-website">Website</label>
        <input
          id="survey-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>
      <div className="mb-2 space-y-3">
        <h2
          className={`text-xl sm:text-2xl font-black text-[#374151] ${isRTL ? "text-right" : "text-left"}`}
        >
          {t.surveyTitle || (lang === "fa" ? "نظرسنجی رضایت مشتری" : "Customer Satisfaction Survey")}
        </h2>
        <p
          className={`text-sm text-gray-600 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}
        >
          {t.surveySubtitle ||
            (lang === "fa"
              ? "نظرات شما برای ما ارزشمند است."
              : "We value your feedback.")}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormInput
          name="name"
          control={control}
          label={t.surveyName || (lang === "fa" ? "نام شما" : "Your Name")}
          placeholder={t.surveyNamePlaceholder || (lang === "fa" ? "نام و نام خانوادگی" : "Full name")}
          className={dirClass}
          inputClassName={inputClass(isRTL)}
          labelClassName={labelClass(isRTL)}
          required
        />
        <FormInput
          name="company"
          control={control}
          label={t.surveyCompany || (lang === "fa" ? "شرکت / سازمان" : "Company / Organization")}
          placeholder={t.surveyCompanyPlaceholder || "—"}
          className={dirClass}
          inputClassName={inputClass(isRTL)}
          labelClassName={labelClass(isRTL)}
        />
      </div>

      <div className={`space-y-2 ${dirClass}`}>
        <label htmlFor="survey-product-service" className={labelClass(isRTL)}>
          {t.surveyProduct || (lang === "fa" ? "محصول / خدمت استفاده شده" : "Product / Service Used")}
        </label>
        <select
          id="survey-product-service"
          {...register("productService")}
          className={selectClass(isRTL)}
        >
          <option value="">{t.surveyProductPlaceholder || (lang === "fa" ? "انتخاب کنید" : "Select")}</option>
          {productOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <fieldset className={`space-y-2 ${dirClass}`}>
        <legend id="survey-rating-label" className={labelClass(isRTL)}>
          {t.surveyRating || (lang === "fa" ? "رضایت کلی" : "Overall Satisfaction")}
          <span className="text-red-500 mr-1">*</span>
        </legend>
        <StarRating
          value={rating}
          onChange={(v) => setValue("rating", v, { shouldValidate: true })}
          isRTL={isRTL}
          errorId={errors.rating ? "survey-rating-error" : undefined}
        />
        {errors.rating && (
          <p id="survey-rating-error" role="alert" className="text-sm text-red-600 font-medium">{errors.rating.message}</p>
        )}
      </fieldset>

      <FormTextarea
        name="comments"
        control={control}
        label={t.surveyComments || (lang === "fa" ? "نظرات / توصیه‌نامه" : "Comments / Testimonial")}
        placeholder={
          t.surveyCommentsPlaceholder ||
          (lang === "fa"
            ? "تجربه خود را به اشتراک بگذارید..."
            : "Share your experience...")
        }
        rows={4}
        className={dirClass}
        textareaClassName={`resize-none rounded-[25px] border border-gray-200 bg-gray-50/50 px-4 sm:px-5 py-4 text-sm text-[#374151] outline-none transition-all focus:border-[#D4AF37] focus:bg-white focus:ring-4 focus:ring-[#D4AF37]/5 w-full ${
          isRTL ? "text-right" : "text-left"
        }`}
        labelClassName={labelClass(isRTL)}
        required
      />

      <div className={`flex items-start gap-3 ${dirClass}`}>
        <input
          type="checkbox"
          id="canPublish"
          {...register("canPublish")}
          className="mt-1 h-4 w-4 min-h-[16px] min-w-[16px] accent-[#D4AF37] shrink-0"
        />
        <label htmlFor="canPublish" className="text-sm text-gray-600">
          {t.surveyPublish ||
            (lang === "fa"
              ? "موافقم این بازخورد در وبسایت منتشر شود"
              : "I agree that this feedback may be published on the website")}
        </label>
      </div>

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
              {t.surveySubmit || (lang === "fa" ? "ثبت نظر" : "Submit Feedback")}
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
