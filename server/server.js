import app from "./app.js";
import { env } from "./config/env.js";
import { isMailConfigured } from "./services/mailService.js";

app.listen(env.port, env.host, () => {
  console.log(`Server running on http://${env.host}:${env.port}`);
  console.log(`Mail configured: ${isMailConfigured()}`);
  console.log(`CORS origins: ${env.corsAllowedOrigins.join(", ")}`);
});
