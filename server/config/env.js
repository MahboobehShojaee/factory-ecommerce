import dotenv from "dotenv";

dotenv.config();

function splitOrigins(value) {
  return value
    .split(",")
    .map((origin) => origin.trim().replace(/\/$/, ""))
    .filter(Boolean);
}

const nodeEnv = process.env.NODE_ENV || "development";
const defaultOrigins =
  nodeEnv === "production"
    ? ["https://setarehkerman.com", "https://www.setarehkerman.com"]
    : ["http://localhost:5173", "http://127.0.0.1:5173"];

export const env = {
  nodeEnv,
  isProduction: nodeEnv === "production",
  port: Number(process.env.PORT) || 5000,
  host: process.env.HOST || "0.0.0.0",
  openaiApiKey: process.env.OPENAI_API_KEY,
  corsAllowedOrigins: process.env.CORS_ALLOWED_ORIGINS
    ? splitOrigins(process.env.CORS_ALLOWED_ORIGINS)
    : defaultOrigins,
  contactEmailTo:
    process.env.CONTACT_EMAIL_TO || "info.setarehkerman@gmail.com",
  smtp: {
    host: process.env.SMTP_HOST || "",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
    from:
      process.env.SMTP_FROM ||
      process.env.SMTP_USER ||
      "Setareh Kerman Website <info.setarehkerman@gmail.com>",
  },
};
