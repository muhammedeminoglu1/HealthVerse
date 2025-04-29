"use client";

import { useState } from "react";

export default function ChatbotPage() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Kullanıcının mesajını ekle
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    // Basit bir cevap oluştur (şu an sahte)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: input },
        { sender: "bot", text: "Sorunuz için teşekkür ederim. Daha fazla bilgi almak ister misiniz?" },
      ]);
    }, 500);

    setInput("");
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-2xl flex flex-col p-6 h-[80vh] overflow-y-auto mb-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 my-auto">Henüz bir konuşma yok</div>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`my-2 p-3 rounded max-w-xs ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 text-gray-800 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Bir şeyler yazın..."
          className="flex-1 border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Gönder
        </button>
      </form>
    </div>
  );
}
