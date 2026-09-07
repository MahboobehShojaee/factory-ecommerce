import { env } from "../config/env.js";
import { createChatCompletionStream } from "../services/chatService.js";
import { validateChatPayload } from "../utils/chatValidation.js";

export async function handleChat(req, res, next) {
  try {
    if (!env.openaiApiKey) {
      return res.status(503).json({ error: "Chat is temporarily unavailable." });
    }

    const result = validateChatPayload(req.body);
    if (result.errors) {
      return res.status(400).json({ error: "Validation failed", errors: result.errors });
    }

    const response = await createChatCompletionStream(env.openaiApiKey, result.data.messages);

    res.setHeader("Content-Type", "text/plain; charset=utf-8");

    for await (const chunk of response) {
      const text = chunk.choices?.[0]?.delta?.content || "";
      res.write(text);
    }

    res.end();
  } catch (error) {
    next(error);
  }
}
