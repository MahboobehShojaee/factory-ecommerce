export function notFoundHandler(_req, res) {
  res.status(404).json({ error: "Endpoint not found" });
}

export function errorHandler(err, _req, res, _next) {
  const status = Number.isInteger(err.status) && err.status >= 400 && err.status < 500
    ? err.status
    : 500;

  // Keep operational detail in the server log, never in the public response.
  console.error("Request failed:", {
    status,
    name: err.name,
    message: err.message,
  });

  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ error: "Invalid JSON request body" });
  }

  if (status === 403) {
    return res.status(403).json({ error: "Request origin is not allowed" });
  }

  if (status < 500) {
    return res.status(status).json({ error: "Invalid request" });
  }

  return res.status(500).json({ error: "Something went wrong. Please try again later." });
}
