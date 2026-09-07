import { apiClient } from "../client.js";

export async function submitContactForm(payload) {
  try {
    const { data } = await apiClient.post("/api/contact", payload);
    return data;
  } catch (error) {
    const responseErrors = error?.response?.data?.errors;
    if (Array.isArray(responseErrors) && responseErrors.length > 0) {
      throw new Error(responseErrors[0].message);
    }
    throw error;
  }
}
