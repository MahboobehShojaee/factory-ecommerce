import { apiClient } from "../client.js";
import { toFormError } from "./formErrors.js";

export async function submitSurvey(payload) {
  try {
    const { data } = await apiClient.post("/api/survey", payload);
    return data;
  } catch (error) {
    throw toFormError(error, payload?.lang, "survey");
  }
}
