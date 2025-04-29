"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuestionsPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const questions = [
    {
      id: "q1",
      question: "Son zamanlarda iştahsızlık yaşadınız mı?",
    },
    {
      id: "q2",
      question: "Gece terlemesi veya titreme oldu mu?",
    },
    {
      id: "q3",
      question: "Ağrılarınız sürekli mi yoksa aralıklı mı?",
    },
  ];

  const handleChange = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allAnswered = questions.every((q) => answers[q.id]);
    if (!allAnswered) {
      alert("Lütfen tüm soruları cevaplayın.");
      return;
    }
    router.push("/results"); // Sonuç sayfasına yönlendir
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-center">Sorular</h2>

        {questions.map((q) => (
          <div key={q.id}>
            <p className="mb-2 font-semibold">{q.question}</p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name={q.id}
                  value="Evet"
                  checked={answers[q.id] === "Evet"}
                  onChange={() => handleChange(q.id, "Evet")}
                />
                Evet
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name={q.id}
                  value="Hayır"
                  checked={answers[q.id] === "Hayır"}
                  onChange={() => handleChange(q.id, "Hayır")}
                />
                Hayır
              </label>
            </div>
          </div>
        ))}

        {/* Devam Et Butonu */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-lg"
        >
          Devam Et
        </button>
      </form>
    </div>
  );
}
