export function requestLang(body) {
  return body?.lang === "fa" ? "fa" : "en";
}

export function mailUnavailableMessage(lang, form = "contact") {
  if (lang === "fa") {
    return form === "survey"
      ? "ثبت نظر در حال حاضر ممکن نیست. لطفاً مستقیم به info.setarehkerman@gmail.com ایمیل بزنید."
      : "ارسال فرم در حال حاضر ممکن نیست. لطفاً مستقیم به info.setarehkerman@gmail.com ایمیل بزنید.";
  }

  return form === "survey"
    ? "The survey is temporarily unavailable. Please email info.setarehkerman@gmail.com."
    : "The contact form is temporarily unavailable. Please email info.setarehkerman@gmail.com.";
}
