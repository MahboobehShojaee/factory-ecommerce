import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function ChatBot() {
  const { lang, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("chatbot_messages")) || [];
    } catch {
      return [];
    }
  });

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const messagesEndRef = useRef(null);
  const chatRef = useRef(null);

  const dict = {
    en: {
      title: "AI Assistant",
      placeholder: "Type or speak...",
      error: "Connection Error",
    },
    fa: {
      title: "پشتیبان هوشمند",
      placeholder: "بنویسید یا صحبت کنید...",
      error: "خطا در ارتباط",
    },
  };

  const t = dict[lang] || dict.fa;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    localStorage.setItem("chatbot_messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // --- بخش اصلی: ضبط صدا و ارسال خودکار ---
  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition)
      return alert("مرورگر شما از ضبط صدا پشتیبانی نمی‌کند.");

    const recognition = new SpeechRecognition();
    recognition.lang = lang === "fa" ? "fa-IR" : "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      if (transcript.trim()) {
        const userMsg = { role: "user", content: transcript };
        const newMessages = [...messages, userMsg];
        setMessages(newMessages);
        sendToApi(newMessages);
      }
    };

    recognition.onerror = (e) => {
      console.error("Voice Error:", e.error);
      setIsListening(false);
      if (e.error === "not-allowed")
        alert("لطفاً دسترسی به میکروفون را در مرورگر تایید کنید.");
    };

    recognition.onend = () => setIsListening(false);

    recognition.start();
  };

  // --- بخش ارسال فایل (تصویر) ---
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const base64Image = event.target.result;
      const imageMsg = {
        role: "user",
        content: [
          {
            type: "text",
            text: lang === "fa" ? "تحلیل تصویر" : "Image analysis",
          },
          { type: "image_url", image_url: { url: base64Image } },
        ],
      };

      setMessages((prev) => [
        ...prev,
        { role: "user", content: "📷 " + (file.name || "Image") },
      ]);
      sendToApi([...messages, imageMsg]);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    sendToApi(newMessages);
  };

  const sendToApi = async (allMessages) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        import.meta.env.VITE_API_URL || "http://localhost:5000/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: allMessages }),
        },
      );

      if (res.body) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let fullText = "";
        setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value);
          fullText += chunk;
          setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1].content = fullText;
            return copy;
          });
        }
      }
    } catch (err) {
      setMessages((prev) => [...prev, { role: "assistant", content: t.error }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      ref={chatRef}
      className={`fixed z-[999] ${isRTL ? "left-6" : "right-6"} bottom-6`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[340px] sm:w-[380px] bg-white rounded-[25px] shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
            style={{ maxHeight: "calc(100vh - 140px)", bottom: "0px" }}
          >
            <div className="p-4 border-b bg-white flex justify-between items-center">
              <span className="font-bold text-gray-700">{t.title}</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/30">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl text-sm shadow-sm max-w-[85%] ${
                      m.role === "user"
                        ? "bg-[#374151] text-white"
                        : "bg-[#FFF5D4] text-[#4B5563]"
                    }`}
                  >
                    {typeof m.content === "string" ? m.content : "📷 Image"}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="text-gray-400 animate-pulse text-xs px-2">
                  ...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-3 bg-white border-t flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-gray-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-gray-300 outline-none"
                placeholder={t.placeholder}
              />

              {/* دکمه میکروفون با تغییر وضعیت بصری */}
              <button
                type="button"
                onClick={startVoice}
                className={`${isListening ? "text-red-500 scale-125" : "text-gray-400"} transition-all duration-300 hover:text-gray-600`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                </svg>
              </button>

              <label className="cursor-pointer text-gray-400 hover:text-gray-600">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828L18 9.828a4 4 0 10-5.656-5.656l-6.586 6.586a6 6 0 108.485 8.485L21 14.828" />
                </svg>
                <input
                  type="file"
                  hidden
                  onChange={handleFile}
                  accept="image/*"
                />
              </label>

              <button
                type="submit"
                className="text-gray-500 hover:text-gray-800"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.button
            key="chat-toggle"
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-[#374151] text-white rounded-full flex items-center justify-center shadow-xl border-2 border-white/20"
          >
            <svg
              width="26"
              height="26"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path d="M21 15a4 4 0 01-4 4H7l-4 4V5a4 4 0 014-4h10a4 4 0 014 4z" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
