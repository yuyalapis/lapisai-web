import React, { useState, useRef, useEffect } from "react";

type Message = {
  from: "me" | "other";
  text: string;
};

export default function ChatUI() {
  const [messages, setMessages] = useState<Message[]>([
    { from: "other", text: "こんにちは！ご質問はありますか？" },
    { from: "me", text: "はい、お願いします。" },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-expand textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = inputRef.current.scrollHeight + "px";
    }
  }, [input]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { from: "me", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-900 border border-gray-800">
      {/* Top Nav Bar */}
      <header className="absolute inset-x-0 top-0 z-50">
      <nav className="w-full py-3 border-b border-gray-800 bg-gray-950 flex justify-center items-center">
        <img src="/logo_w.png" alt="Logo" className="h-8" />
      </nav>
      </header>
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`rounded-2xl px-4 py-2 max-w-[75%] break-words text-base ${
                msg.from === "me"
                  ? "bg-blue-600 text-white rounded-br-md"
                  : "bg-gray-800 text-gray-100 rounded-bl-md"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      {/* Chat Input */}
      <div className="flex items-end p-3 border-t border-gray-800 bg-gray-950">
        <textarea
          ref={inputRef}
          className="flex-1 min-h-[36px] max-h-32 resize-none rounded-2xl px-4 py-2 bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-blue-500 mr-2"
          value={input}
          onChange={e => setInput(e.target.value)}
          rows={1}
          placeholder="Type your message..."
          onKeyDown={e => {
            // Prevent default Enter key action from submitting a form (if inside a form)
            if (e.key === "Enter") {
              // Do nothing special; allow newline
            }
          }}
        />
        <button
          className="bg-blue-600 text-white rounded-2xl px-5 py-2 font-medium hover:bg-blue-700 transition"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}