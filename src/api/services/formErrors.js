export function toFormError(error, lang = "en", form = "contact") {
  const responseErrors = error?.response?.data?.errors;
  if (Array.isArray(responseErrors) && responseErrors.length > 0) {
    return new Error(responseErrors[0].message, { cause: error });
  }

  const apiError = error?.response?.data?.error;
  if (typeof apiError === "string" && apiError.trim()) {
    return new Error(apiError, { cause: error });
  }

  if (error?.response?.status === 403) {
    return new Error(
      lang === "fa"
        ? "درخواست از این دامنه مجاز نیست. لطفاً با پشتیبانی تماس بگیرید."
        : "This request origin is not allowed. Please contact support.",
      { cause: error },
    );
  }

  if (!error?.response) {
    return new Error(
      lang === "fa"
        ? "ارتباط با سرور برقرار نشد. لطفاً دوباره تلاش کنید یا به info.setarehkerman@gmail.com ایمیل بزنید."
        : "Could not reach the server. Please try again or email info.setarehkerman@gmail.com.",
      { cause: error },
    );
  }

  return new Error(
    lang === "fa"
      ? form === "survey"
        ? "ثبت نظر با خطا مواجه شد. لطفاً دوباره تلاش کنید."
        : "ارسال فرم با خطا مواجه شد. لطفاً دوباره تلاش کنید."
      : "Submission failed. Please try again.",
    { cause: error },
  );
}
