import { validateContactPayload } from "../utils/contactValidation.js";
import { isMailConfigured, sendContactEmail } from "../services/mailService.js";
import { mailUnavailableMessage, requestLang } from "../utils/formResponses.js";

export async function submitContact(req, res) {
  const lang = requestLang(req.body);

  try {
    if (typeof req.body?.website === "string" && req.body.website.trim()) {
      return res.status(204).end();
    }

    if (!isMailConfigured()) {
      return res.status(503).json({
        error: mailUnavailableMessage(lang, "contact"),
      });
    }

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
    console.error("Contact form email failed:", error.message);
    if (error.code === "EAUTH" || error.code === "ETIMEDOUT" || error.code === "ESOCKET") {
      return res.status(503).json({
        error: mailUnavailableMessage(lang, "contact"),
      });
    }
    return res.status(503).json({
      error: mailUnavailableMessage(lang, "contact"),
    });
  }
}
