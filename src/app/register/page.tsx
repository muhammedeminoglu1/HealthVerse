"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [gender, setGender] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Kayıt Ol</h2>

        {/* Kayıt Formu */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="İsim"
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Soyisim"
            className="border p-2 rounded"
          />
          <input
            type="date"
            placeholder="Doğum Tarihi"
            className="border p-2 rounded"
          />
          <input
            type="tel"
            placeholder="Telefon Numarası"
            className="border p-2 rounded"
          />

          {/* Cinsiyet Seçimi */}
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="erkek"
                checked={gender === "erkek"}
                onChange={() => setGender("erkek")}
              />
              Erkek
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="kadin"
                checked={gender === "kadin"}
                onChange={() => setGender("kadin")}
              />
              Kadın
            </label>
          </div>

          <input
            type="email"
            placeholder="E-mail"
            className="border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Şifre"
            className="border p-2 rounded"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Kayıt Ol
          </button>
        </form>

        {/* Giriş Yap Linki */}
        <div className="text-center mt-4 text-sm">
          Hesabınız var mı?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Giriş Yap
          </Link>
        </div>
      </div>
    </div>
  );
}
