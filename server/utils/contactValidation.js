const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+]?[\d\s\-()]+$/;
const VALID_INQUIRY_TYPES = new Set(["general", "quote"]);
const VALID_URGENCY = new Set(["normal", "urgent", "critical"]);

function cleanText(value, { multiline = false } = {}) {
  if (typeof value !== "string") return "";
  const withoutControls = value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
  return multiline
    ? withoutControls.replace(/\r\n?/g, "\n").trim()
    : withoutControls.replace(/\s+/g, " ").trim();
}

function isNonEmptyString(value, min = 1, max = 1000) {
  const cleaned = cleanText(value);
  return cleaned.length >= min && cleaned.length <= max;
}

function isStringArray(value, minItems = 1, maxItems = 20) {
  return (
    Array.isArray(value) &&
    value.length >= minItems &&
    value.length <= maxItems &&
    value.every((item) => {
      const cleaned = cleanText(item);
      return cleaned.length > 0 && cleaned.length <= 100;
    })
  );
}

/**
 * Validates contact form payload (mirrors frontend Zod schema).
 * Returns { data } on success or { errors: [{ field, message }] } on failure.
 */
export function validateContactPayload(body, lang = "en") {
  body = body && typeof body === "object" ? body : {};
  const errors = [];
  const isFa = lang === "fa";

  const msg = {
    required: isFa ? "این فیلد الزامی است" : "This field is required",
    email: isFa ? "لطفاً ایمیل معتبر وارد کنید" : "Please enter a valid email address",
    phone: isFa ? "لطفاً شماره تلفن معتبر وارد کنید" : "Please enter a valid phone number",
    inquiryType: isFa ? "نوع درخواست نامعتبر است" : "Invalid inquiry type",
    atLeastOne: isFa ? "لطفاً حداقل یک گزینه انتخاب کنید" : "Please select at least one option",
  };

  const inquiryType = cleanText(body.inquiryType);

  if (!VALID_INQUIRY_TYPES.has(inquiryType)) {
    errors.push({ field: "inquiryType", message: msg.inquiryType });
  }

  if (!isNonEmptyString(body.company, 2, 100)) {
    errors.push({ field: "company", message: msg.required });
  }

  if (!isNonEmptyString(body.person, 2, 50)) {
    errors.push({ field: "person", message: msg.required });
  }

  const email = cleanText(body.email).toLowerCase();
  if (!email || !EMAIL_PATTERN.test(email)) {
    errors.push({ field: "email", message: msg.email });
  }

  const phone = cleanText(body.phone);
  if (!phone || !PHONE_PATTERN.test(phone) || phone.length < 10 || phone.length > 20) {
    errors.push({ field: "phone", message: msg.phone });
  }

  if (!isNonEmptyString(body.projectType, 1, 100)) {
    errors.push({ field: "projectType", message: msg.required });
  }

  if (!isStringArray(body.selectedCables, 1, 20)) {
    errors.push({ field: "selectedCables", message: msg.atLeastOne });
  }

  if (body.terms !== true) {
    errors.push({ field: "terms", message: msg.required });
  }

  const details = cleanText(body.details, { multiline: true });
  if (details.length > 1000) {
    errors.push({
      field: "details",
      message: isFa ? "حداکثر ۱۰۰۰ کاراکتر" : "Must be at most 1000 characters",
    });
  }

  let quantity = "";
  let urgency = "";

  if (inquiryType === "quote") {
    quantity = cleanText(body.quantity);
    urgency = cleanText(body.urgency);

    if (!isNonEmptyString(quantity, 2, 50)) {
      errors.push({ field: "quantity", message: msg.required });
    }

    if (!VALID_URGENCY.has(urgency)) {
      errors.push({ field: "urgency", message: msg.required });
    }
  }

  if (errors.length > 0) {
    return { errors };
  }

  return {
    data: {
      inquiryType,
      company: cleanText(body.company),
      person: cleanText(body.person),
      email,
      phone,
      projectType: cleanText(body.projectType),
      selectedCables: body.selectedCables.map((c) => cleanText(c)),
      details,
      quantity: inquiryType === "quote" ? quantity : "",
      urgency: inquiryType === "quote" ? urgency : "",
      lang: isFa ? "fa" : "en",
    },
  };
}
