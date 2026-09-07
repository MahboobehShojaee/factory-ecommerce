import { verifyMailConfiguration } from "../services/mailService.js";

try {
  await verifyMailConfiguration();
  console.log("SMTP connection verified. The server can connect to the configured email provider.");
} catch (error) {
  console.error("SMTP verification failed. Check the backend email settings and try again.");
  process.exitCode = 1;
}
