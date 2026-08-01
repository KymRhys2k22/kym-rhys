import { useState, useRef, useEffect } from "react";
import agentPrompt from "./agent-prompt.md?raw";

const API_KEY =
  import.meta.env.VITE_OPENAI_API_KEY ||
  "sk-ZYNE7WRI8MeQrTd3WW36agMxIx7cZYEET7qRvmD2e8AvQqFB";
const BASE_URL = "/api/tokenrouter";
const DEFAULT_MODEL = "moonshotai/kimi-k3-free";


const SUGGESTED_QUESTIONS = [
  "🚀 Tell me about Kym's top projects",
  "💻 What is Kym's tech stack?",
  "⚡ How fast does Kym deliver projects?",
  "📫 How can I contact or hire Kym?",
];

export default function PortfolioChatBot({ onClose }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hi! I am Kym's AI Portfolio Assistant. Ask me anything about Kym's tech stack, recent projects, or development process!",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (customText) => {
    const textToSend = customText || input;
    if (!textToSend.trim() || isLoading) return;

    setInput("");

    const userMsg = { role: "user", content: textToSend.trim() };
    const updatedMessages = [...messages, userMsg];
    setMessages([...updatedMessages, { role: "assistant", content: "" }]);
    setIsLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: DEFAULT_MODEL,
          messages: [
            {
              role: "system",
              content: agentPrompt,
            },
            ...updatedMessages.map((m) => ({
              role: m.role === "assistant" ? "assistant" : "user",
              content: m.content,
            })),
          ],
          stream: true,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage =
          errorData?.error?.message ||
          errorData?.message ||
          `HTTP ${response.status}: ${response.statusText}`;
        throw new Error(errorMessage);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let fullText = "";
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith(":")) continue;

          if (trimmed === "data: [DONE]") break;

          if (trimmed.startsWith("data: ")) {
            try {
              const json = JSON.parse(trimmed.slice(6));
              const chunk = json.choices?.[0]?.delta?.content || "";
              fullText += chunk;

              setMessages((prev) => {
                const next = [...prev];
                next[next.length - 1] = {
                  role: "assistant",
                  content: fullText,
                };
                return next;
              });
            } catch (e) {
              // Ignore partial JSON chunks
            }
          }
        }
      }
    } catch (err) {
      console.error("Chat Error:", err);
      setMessages((prev) => {
        const next = [...prev];
        next[next.length - 1] = {
          role: "assistant",
          content: `⚠️ Failed to respond: ${err.message}`,
          isError: true,
        };
        return next;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-slate-900/95 backdrop-blur-2xl border border-slate-800 rounded-3xl shadow-2xl overflow-hidden font-sans text-slate-100">
      {/* Top Header */}
      <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 via-cyan-500 to-indigo-600 flex items-center justify-center font-black text-white text-sm shadow-lg shadow-cyan-500/20">
              AI
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-950 rounded-full"></span>
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-100">
              Kym's AI Assistant
            </h2>
            <p className="text-[11px] text-slate-400">Ask about projects & tech stack</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {onClose && (
            <button
              onClick={onClose}
              aria-label="Close Chat"
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3.5">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex gap-2.5 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role === "assistant" && (
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5 shadow">
                AI
              </div>
            )}

            <div
              className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap shadow-md ${
                msg.role === "user"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-tr-xs"
                  : msg.isError
                  ? "bg-red-950/80 border border-red-800 text-red-200 rounded-tl-xs font-mono text-xs"
                  : "bg-slate-800/90 text-slate-100 border border-slate-700/80 rounded-tl-xs"
              }`}
            >
              {msg.content || (
                <span className="inline-flex items-center gap-2 text-slate-400">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
                  AI is thinking...
                </span>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompts */}
      {messages.length <= 2 && (
        <div className="px-3 py-2 border-t border-slate-800/60 bg-slate-950/40 flex flex-wrap gap-1.5">
          {SUGGESTED_QUESTIONS.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSend(q)}
              disabled={isLoading}
              className="text-[11px] bg-slate-800/80 hover:bg-cyan-950 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 border border-slate-700/60 rounded-full px-2.5 py-1 transition-all cursor-pointer shadow-sm active:scale-95 disabled:opacity-50"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 border-t border-slate-800 bg-slate-950/80 flex gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about Kym..."
          disabled={isLoading}
          className="flex-1 px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-100 placeholder-slate-500 text-xs sm:text-sm shadow-inner transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-cyan-500/25 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center shrink-0"
        >
          {isLoading ? (
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
}
