import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import OpenAI from "openai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// افزایش محدودیت حجم برای دریافت تصاویر Base64 بدون خطا
app.use(cors());
app.use(express.json({ limit: "20mb" }));

/* =========================
    📦 Load Products
========================= */
const products = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));

/* =========================
    🌍 Detect Language
========================= */
function detectLang(text) {
  if (!text || typeof text !== "string") return "fa";
  return /[\u0600-\u06FF]/.test(text) ? "fa" : "en";
}

/* =========================
    🔍 Smart Product Filter
========================= */
function findRelevantProducts(query, lang) {
  if (!query || typeof query !== "string") return [];
  return products
    .filter((p) => {
      const name = (p.name[lang] || "").toLowerCase();
      const desc = (p.description[lang] || "").toLowerCase();
      return (
        name.includes(query.toLowerCase()) || desc.includes(query.toLowerCase())
      );
    })
    .slice(0, 3);
}

/* =========================
    🧠 Build Context
========================= */
function buildContext(productsList, lang) {
  if (!productsList.length) return "";
  return productsList
    .map(
      (p) => `
Product: ${p.name[lang]}
Category: ${p.category[lang]}
Description: ${p.description[lang]}
Features: ${p.features[lang]?.join(", ") || ""}
Applications: ${p.applications[lang]?.join(", ") || ""}
`,
    )
    .join("\n");
}

/* =========================
    💬 Chat Endpoint
========================= */
app.post("/chat", async (req, res) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "API key missing" });

    const openai = new OpenAI({ apiKey });
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages required" });
    }

    // استخراج متن از آخرین پیام برای پردازش محلی (محصولات)
    // این بخش هم برای متن ساده و هم برای پیام‌های شامل عکس (Vision) کار می‌کند
    const lastMessage = messages[messages.length - 1];
    let queryText = "";

    if (typeof lastMessage.content === "string") {
      queryText = lastMessage.content;
    } else if (Array.isArray(lastMessage.content)) {
      const textPart = lastMessage.content.find((p) => p.type === "text");
      queryText = textPart ? textPart.text : "";
    }

    const lang = detectLang(queryText);
    const relevantProducts = findRelevantProducts(queryText, lang);
    const productContext = buildContext(relevantProducts, lang);

    /* =========================
        🧠 System Prompt
    ========================= */
    const systemPrompt = {
      role: "system",
      content:
        lang === "fa"
          ? `تو دستیار هوشمند شرکت سیم و کابل ستاره کرمان هستی.
             اطلاعات محصولات مرتبط:
             ${productContext}
             
             دستورالعمل:
             1. اگر سوال درباره محصولات بود، بر اساس کانتکست بالا راهنمایی کن.
             2. اگر عکسی فرستاده شد، آن را تحلیل کن و بگو مربوط به کدام دسته از محصولات ماست.
             3. کوتاه و حرفه‌ای پاسخ بده.`
          : `You are the AI assistant for Setareh Kerman Cable Company.
             Relevant product data:
             ${productContext}
             
             Rules:
             1. Use product data to guide the user.
             2. If an image is sent, analyze it in the context of our cables/industry.
             3. Keep it short and professional.`,
    };

    /* =========================
        ⚡ Streaming Response
    ========================= */
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // این مدل از Vision و Text کاملاً پشتیبانی می‌کند
      messages: [systemPrompt, ...messages],
      temperature: 0.7,
      stream: true,
    });

    res.setHeader("Content-Type", "text/plain");

    for await (const chunk of response) {
      const text = chunk.choices?.[0]?.delta?.content || "";
      res.write(text);
    }

    res.end();
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 ChatBot Server running on port ${PORT}`);
});
