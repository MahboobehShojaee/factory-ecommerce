import { validateSurveyPayload } from "../utils/surveyValidation.js";
import { isMailConfigured, sendSurveyEmail } from "../services/mailService.js";

export async function submitSurvey(req, res, next) {
  try {
    if (!isMailConfigured()) {
      return res.status(503).json({
        error: "Survey form is temporarily unavailable. Please try again later or email us directly.",
      });
    }

    const lang = req.body?.lang === "fa" ? "fa" : "en";
    const result = validateSurveyPayload(req.body, lang);

    if (result.errors) {
      return res.status(400).json({
        error: "Validation failed",
        errors: result.errors,
      });
    }

    await sendSurveyEmail(result.data);

    res.status(200).json({
      success: true,
      message:
        lang === "fa"
          ? "نظر شما با موفقیت ثبت شد. سپاسگزاریم!"
          : "Your feedback has been submitted successfully. Thank you!",
    });
  } catch (error) {
    next(error);
  }
}
