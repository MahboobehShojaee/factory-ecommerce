import dotenv from "dotenv";

dotenv.config();

function cleanEnv(value) {
  return String(value || "")
    .trim()
    .replace(/^['"]|['"]$/g, "")
    .trim();
}

function splitOrigins(value) {
  return value
    .split(",")
    .map((origin) => cleanEnv(origin).replace(/\/$/, ""))
    .filter(Boolean);
}

function expandRelatedOrigins(origins) {
  const expanded = new Set();

  for (const origin of origins) {
    expanded.add(origin);
    try {
      const url = new URL(origin);
      const labels = url.hostname.split(".");
      if (labels[0] === "www" && labels.length > 2) {
        expanded.add(`${url.protocol}//${labels.slice(1).join(".")}`);
      } else if (labels.length === 2) {
        expanded.add(`${url.protocol}//www.${url.hostname}`);
      }
    } catch {
      // Ignore malformed origins; CORS will simply not match them.
    }
  }

  return [...expanded];
}

const nodeEnv = process.env.NODE_ENV || "development";
const defaultOrigins =
  nodeEnv === "production"
    ? ["https://setarehkerman.com", "https://www.setarehkerman.com"]
    : ["http://localhost:5173", "http://127.0.0.1:5173"];

const smtpUser = cleanEnv(process.env.SMTP_USER);
const smtpFrom = cleanEnv(process.env.SMTP_FROM);

export const env = {
  nodeEnv,
  isProduction: nodeEnv === "production",
  port: Number(process.env.PORT) || 5000,
  host: process.env.HOST || "0.0.0.0",
  openaiApiKey: process.env.OPENAI_API_KEY,
  enableChatbot: process.env.ENABLE_CHATBOT === "true",
  corsAllowedOrigins: expandRelatedOrigins([
    ...defaultOrigins,
    ...(process.env.CORS_ALLOWED_ORIGINS
      ? splitOrigins(process.env.CORS_ALLOWED_ORIGINS)
      : []),
  ]),
  contactEmailTo:
    cleanEnv(process.env.CONTACT_EMAIL_TO) || "info.setarehkerman@gmail.com",
  smtp: {
    host: cleanEnv(process.env.SMTP_HOST),
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    user: smtpUser,
    pass: cleanEnv(process.env.SMTP_PASS).replace(/\s+/g, ""),
    from:
      smtpFrom ||
      smtpUser ||
      "Setareh Kerman Website <info.setarehkerman@gmail.com>",
  },
};
