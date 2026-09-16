import { apiClient } from "../client.js";

export async function submitContactForm(payload) {
  try {
    const { data } = await apiClient.post("/api/contact", payload);
    return data;
  } catch (error) {
    const responseErrors = error?.response?.data?.errors;
    if (Array.isArray(responseErrors) && responseErrors.length > 0) {
      throw new Error(responseErrors[0].message, { cause: error });
    }

    const apiError = error?.response?.data?.error;
    if (typeof apiError === "string" && apiError.trim()) {
      throw new Error(apiError, { cause: error });
    }

    if (error?.response?.status === 403) {
      throw new Error(
        payload?.lang === "fa"
          ? "درخواست از این دامنه مجاز نیست. لطفاً با پشتیبانی تماس بگیرید."
          : "This request origin is not allowed. Please contact support.",
        { cause: error },
      );
    }

    if (!error?.response) {
      throw new Error(
        payload?.lang === "fa"
          ? "ارتباط با سرور برقرار نشد. لطفاً دوباره تلاش کنید یا مستقیماً به info.setarehkerman@gmail.com ایمیل بزنید."
          : "Could not reach the server. Please try again or email info.setarehkerman@gmail.com directly.",
        { cause: error },
      );
    }

    throw error;
  }
}
