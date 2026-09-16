import { validateContactPayload } from "../utils/contactValidation.js";
import { isMailConfigured, sendContactEmail } from "../services/mailService.js";

export async function submitContact(req, res, next) {
  try {
    if (typeof req.body?.website === "string" && req.body.website.trim()) {
      return res.status(204).end();
    }

    if (!isMailConfigured()) {
      return res.status(503).json({
        error: "Contact form is temporarily unavailable. Please try again later or email us directly.",
      });
    }

    const lang = req.body?.lang === "fa" ? "fa" : "en";
    const result = validateContactPayload(req.body, lang);

    if (result.errors) {
      return res.status(400).json({
        error: "Validation failed",
        errors: result.errors,
      });
    }

    await sendContactEmail(result.data);

    res.status(200).json({
      success: true,
      message:
        lang === "fa"
          ? "پیام شما با موفقیت ارسال شد."
          : "Your message has been sent successfully.",
    });
  } catch (error) {
    next(error);
  }
}
