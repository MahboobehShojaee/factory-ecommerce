import express from "express";
import rateLimit from "express-rate-limit";
import chatRoutes from "./routes/chatRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";
import contentRoutes from "./routes/contentRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import surveyRoutes from "./routes/surveyRoutes.js";
import { corsMiddleware } from "./middleware/cors.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";
import { env } from "./config/env.js";
import { isMailConfigured } from "./services/mailService.js";

const app = express();

app.set("trust proxy", env.isProduction ? 1 : false);
app.disable("x-powered-by");

app.use((req, res, next) => {
  res.set({
    "Content-Security-Policy": "default-src 'none'; base-uri 'none'; frame-ancestors 'none'",
    "Cross-Origin-Resource-Policy": "cross-origin",
    "Referrer-Policy": "no-referrer",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
  });
  if (env.isProduction) {
    res.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }
  next();
});

app.use(corsMiddleware);
app.use(express.json({ limit: "1mb" }));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 300,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  skip: (req) => req.method === "OPTIONS",
  message: { error: "Too many requests. Please try again later." },
});

const submissionLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  skip: (req) => req.method === "OPTIONS",
  message: { error: "Too many submissions. Please wait before trying again." },
});

const chatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  skip: (req) => req.method === "OPTIONS",
  message: { error: "Too many chat requests. Please wait before trying again." },
});

app.use("/api", apiLimiter);

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    mailConfigured: isMailConfigured(),
    timestamp: new Date().toISOString(),
  });
});

if (env.enableChatbot) {
  app.use("/chat", chatLimiter, chatRoutes);
}
app.use("/api/products", productsRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/contact", submissionLimiter, contactRoutes);
app.use("/api/survey", submissionLimiter, surveyRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
