const MAX_MESSAGES = 12;
const MAX_TEXT_LENGTH = 2000;
const MAX_IMAGE_DATA_LENGTH = 800000;
const VALID_ROLES = new Set(["user", "assistant"]);

function isSafeImagePart(part) {
  const url = part?.image_url?.url;
  return (
    part?.type === "image_url" &&
    typeof url === "string" &&
    /^data:image\/(png|jpe?g|webp);base64,/i.test(url) &&
    url.length <= MAX_IMAGE_DATA_LENGTH
  );
}

function isSafeContent(content) {
  if (typeof content === "string") {
    return content.trim().length > 0 && content.length <= MAX_TEXT_LENGTH;
  }

  return (
    Array.isArray(content) &&
    content.length > 0 &&
    content.length <= 2 &&
    content.every((part) =>
      (part?.type === "text" && typeof part.text === "string" && part.text.trim().length > 0 && part.text.length <= MAX_TEXT_LENGTH) ||
      isSafeImagePart(part),
    )
  );
}

export function validateChatPayload(body) {
  if (!body || typeof body !== "object" || !Array.isArray(body.messages)) {
    return { errors: [{ field: "messages", message: "Messages are required" }] };
  }

  if (body.messages.length < 1 || body.messages.length > MAX_MESSAGES) {
    return { errors: [{ field: "messages", message: "Invalid number of messages" }] };
  }

  if (!body.messages.every((message) => VALID_ROLES.has(message?.role) && isSafeContent(message.content))) {
    return { errors: [{ field: "messages", message: "Invalid message content" }] };
  }

  return { data: { messages: body.messages } };
}
