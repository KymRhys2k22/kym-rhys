import { useState, useRef, useEffect } from "react";
import agentPrompt from "./agent-prompt.md?raw";
import { CHAT_ENDPOINT, getSupabaseHeaders } from "../lib/supabaseClient";

const renderFormattedText = (rawText) => {
  if (!rawText) return null;
  // Clean any asterisks (***, **) from text to keep chat 100% natural
  const text = rawText.replace(/\*{2,3}/g, "");
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)|(https?:\/\/[^\s\)]+)/g;
  const parts = [];
  let lastIdx = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      parts.push(text.substring(lastIdx, match.index));
    }

    if (match[1] && match[2]) {
      const label = match[1];
      const url = match[2];
      parts.push(
        <a
          key={match.index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-600 hover:text-amber-700 underline font-medium break-all"
        >
          {label} ↗
        </a>
      );
    } else if (match[3]) {
      const url = match[3];
      parts.push(
        <a
          key={match.index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-600 hover:text-amber-700 underline font-medium break-all"
        >
          {url} ↗
        </a>
      );
    }
    lastIdx = regex.lastIndex;
  }

  if (lastIdx < text.length) {
    parts.push(text.substring(lastIdx));
  }

  return parts;
};

export default function ChatComponent() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState("deepseek/deepseek-v4-flash-0731");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleChat = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");

    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages([...newMessages, { role: "assistant", content: "" }]);
    setIsLoading(true);

    try {
      const response = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: getSupabaseHeaders(),


        body: JSON.stringify({
          model: model,
          messages: [
            {
              role: "system",
              content: agentPrompt,
            },
            ...newMessages.map((m) => ({ role: m.role, content: m.content })),
          ],
          stream: true,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage =
          errorData?.error?.message ||
          errorData?.message ||
          `HTTP Error ${response.status}: ${response.statusText}`;
        throw new Error(errorMessage);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let fullContent = "";
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

          if (trimmed === "data: [DONE]") {
            break;
          }

          if (trimmed.startsWith("data: ")) {
            try {
              const jsonStr = trimmed.slice(6);
              const data = JSON.parse(jsonStr);
              const delta = data.choices?.[0]?.delta;

              if (delta) {
                const textChunk = delta.content || "";
                fullContent += textChunk;

                setMessages((prev) => {
                  const updated = [...prev];
                  updated[updated.length - 1] = {
                    role: "assistant",
                    content: fullContent,
                  };
                  return updated;
                });
              }
            } catch (err) {
              console.warn("Error parsing chunk JSON:", err);
            }
          }
        }
      }
    } catch (error) {
      console.error("Error fetching chat completion:", error);

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: `⚠️ Error: ${error.message}`,
          isError: true,
        };
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto p-4 sm:p-6">
      {/* Model Selection Bar */}
      <div className="flex justify-between items-center mb-3 px-2">
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Model:
        </label>
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="text-xs bg-white border border-gray-300 rounded-lg px-3 py-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer">
          <option value="deepseek/deepseek-v4-flash-0731">
            deepseek/deepseek-v4-flash-0731 (Default)
          </option>
          <option value="moonshotai/kimi-k3-free">
            moonshotai/kimi-k3-free (Free)
          </option>
          <option value="moonshotai/kimi-k2.5">moonshotai/kimi-k2.5</option>
          <option value="moonshotai/kimi-k2.6">moonshotai/kimi-k2.6</option>
        </select>
      </div>

      {/* Messages area */}
      <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 overflow-y-auto space-y-4 mb-4">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 py-12">
            <div className="w-16 h-16 mb-4 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center text-2xl font-bold border border-amber-200">
              K
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Welcome to Kimi Model AI
            </h3>
            <p className="text-sm text-gray-500 max-w-sm">
              Type your message below to start chatting with the Kimi model.
            </p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}>
              <div
                className={`max-w-[85%] sm:max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-amber-500 text-white rounded-br-xs shadow-sm"
                    : msg.isError
                      ? "bg-red-50 text-red-700 border border-red-200 rounded-bl-xs font-mono text-xs"
                      : "bg-gray-100 text-gray-800 rounded-bl-xs"
                }`}>
                {renderFormattedText(msg.content) || (
                  <span className="animate-pulse text-gray-400">
                    Thinking...
                  </span>
                )}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input form */}
      <form onSubmit={handleChat} className="flex gap-2 sm:gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message to Kimi..."
          disabled={isLoading}
          className="flex-1 px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-800 text-sm shadow-sm transition-all disabled:bg-gray-50"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="px-6 py-3.5 bg-amber-500 text-white text-sm font-semibold rounded-xl hover:bg-amber-600 active:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm flex items-center justify-center cursor-pointer">
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Thinking
            </span>
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
}
