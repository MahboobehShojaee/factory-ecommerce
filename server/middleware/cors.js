import cors from "cors";
import { env } from "../config/env.js";

function isAllowedOrigin(origin) {
  if (!origin) return true;
  return env.corsAllowedOrigins.includes(origin.replace(/\/$/, ""));
}

export const corsMiddleware = cors({
  origin(origin, callback) {
    if (isAllowedOrigin(origin)) {
      callback(null, true);
      return;
    }
    const error = new Error("Origin not allowed");
    error.status = 403;
    console.warn(
      `Blocked CORS origin: ${origin}. Allowed: ${env.corsAllowedOrigins.join(", ")}`,
    );
    callback(error);
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Accept"],
  maxAge: 86400,
  credentials: false,
});
