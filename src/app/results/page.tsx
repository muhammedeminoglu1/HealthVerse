"use client";

import Link from "next/link";

export default function ResultsPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold">Ön Değerlendirme Tamamlandı 🎯</h2>

        <p className="text-gray-700">
          Şikayetlerinize ve cevaplarınıza göre genel bir ön değerlendirme yaptık.
          Daha detaylı destek almak ve sorularınızı iletmek için chatbot asistanımızı kullanabilirsiniz.
        </p>

        {/* Chatbot'a Git Butonu */}
        <Link
          href="/chatbot"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded text-lg transition"
        >
          Chatbot ile Devam Et
        </Link>
      </div>
    </div>
  );
}
