function cleanText(value, { multiline = false } = {}) {
  if (typeof value !== "string") return "";
  const withoutControls = value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
  return multiline
    ? withoutControls.replace(/\r\n?/g, "\n").trim()
    : withoutControls.replace(/\s+/g, " ").trim();
}

function isNonEmptyString(value, min = 1, max = 1000, options) {
  const cleaned = cleanText(value, options);
  return cleaned.length >= min && cleaned.length <= max;
}

function isOptionalString(value, max = 1000, options) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "string" && cleanText(value, options).length <= max)
  );
}

export function validateSurveyPayload(body, lang = "en") {
  body = body && typeof body === "object" ? body : {};
  const errors = [];
  const isFa = lang === "fa";

  const msg = {
    required: isFa ? "این فیلد الزامی است" : "This field is required",
    nameRequired: isFa ? "نام الزامی است" : "Name is required",
    commentsRequired: isFa ? "نظر الزامی است" : "Comments are required",
    commentsMin: isFa ? "نظر باید حداقل ۱۰ کاراکتر باشد" : "Comments must be at least 10 characters",
    ratingRequired: isFa ? "لطفاً امتیاز دهید" : "Please select a rating",
    ratingInvalid: isFa ? "امتیاز باید بین ۱ تا ۵ باشد" : "Rating must be between 1 and 5",
  };

  if (!isNonEmptyString(body.name, 2, 100)) {
    errors.push({ field: "name", message: msg.nameRequired });
  }

  if (!isOptionalString(body.company, 100)) {
    errors.push({ field: "company", message: isFa ? "حداکثر ۱۰۰ کاراکتر" : "Must be at most 100 characters" });
  }

  if (!isOptionalString(body.productService, 200)) {
    errors.push({ field: "productService", message: isFa ? "حداکثر ۲۰۰ کاراکتر" : "Must be at most 200 characters" });
  }

  const rating = Number(body.rating);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    errors.push({ field: "rating", message: msg.ratingInvalid });
  }

  if (!isNonEmptyString(body.comments, 10, 2000, { multiline: true })) {
    errors.push({ field: "comments", message: msg.commentsMin });
  }

  if (errors.length > 0) {
    return { errors };
  }

  return {
    data: {
      name: cleanText(body.name),
      company: cleanText(body.company),
      productService: cleanText(body.productService),
      rating,
      comments: cleanText(body.comments, { multiline: true }),
      canPublish: body.canPublish === true,
      lang: isFa ? "fa" : "en",
    },
  };
}
