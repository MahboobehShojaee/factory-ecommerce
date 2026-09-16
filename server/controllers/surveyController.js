import { validateSurveyPayload } from "../utils/surveyValidation.js";
import { isMailConfigured, sendSurveyEmail } from "../services/mailService.js";
import { mailUnavailableMessage, requestLang } from "../utils/formResponses.js";

export async function submitSurvey(req, res) {
  const lang = requestLang(req.body);

  try {
    if (typeof req.body?.website === "string" && req.body.website.trim()) {
      return res.status(204).end();
    }

    if (!isMailConfigured()) {
      return res.status(503).json({
        error: mailUnavailableMessage(lang, "survey"),
      });
    }

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
    console.error("Survey form email failed:", error.message);
    return res.status(503).json({
      error: mailUnavailableMessage(lang, "survey"),
    });
  }
}
