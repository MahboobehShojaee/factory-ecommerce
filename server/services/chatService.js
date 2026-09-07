import OpenAI from "openai";
import { detectLang } from "../utils/language.js";
import { buildProductContext, findRelevantProducts } from "./productService.js";

function extractQueryText(lastMessage) {
  if (!lastMessage) return "";
  if (typeof lastMessage.content === "string") return lastMessage.content;
  if (Array.isArray(lastMessage.content)) {
    const textPart = lastMessage.content.find((p) => p.type === "text");
    return textPart ? textPart.text : "";
  }
  return "";
}

function buildSystemPrompt(lang, productContext) {
  if (lang === "fa") {
    return `تو دستیار هوشمند شرکت سیم و کابل ستاره کرمان هستی.
             اطلاعات محصولات مرتبط:
             ${productContext}
             
             دستورالعمل:
             1. اگر سوال درباره محصولات بود، بر اساس کانتکست بالا راهنمایی کن.
             2. اگر عکسی فرستاده شد، آن را تحلیل کن و بگو مربوط به کدام دسته از محصولات ماست.
             3. کوتاه و حرفه‌ای پاسخ بده.`;
  }

  return `You are the AI assistant for Setareh Kerman Cable Company.
             Relevant product data:
             ${productContext}
             
             Rules:
             1. Use product data to guide the user.
             2. If an image is sent, analyze it in the context of our cables/industry.
             3. Keep it short and professional.`;
}

export async function createChatCompletionStream(apiKey, messages) {
  const openai = new OpenAI({ apiKey });
  const lastMessage = messages[messages.length - 1];
  const queryText = extractQueryText(lastMessage);
  const lang = detectLang(queryText);
  const relevantProducts = findRelevantProducts(queryText, lang);
  const productContext = buildProductContext(relevantProducts, lang);

  const systemPrompt = {
    role: "system",
    content: buildSystemPrompt(lang, productContext),
  };

  return openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [systemPrompt, ...messages],
    temperature: 0.7,
    stream: true,
  });
}
