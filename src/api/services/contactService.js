import { apiClient } from "../client.js";
import { toFormError } from "./formErrors.js";

export async function submitContactForm(payload) {
  try {
    const { data } = await apiClient.post("/api/contact", payload);
    return data;
  } catch (error) {
    throw toFormError(error, payload?.lang, "contact");
  }
}
