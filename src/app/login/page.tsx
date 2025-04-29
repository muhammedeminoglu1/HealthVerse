"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Giriş Yap</h2>

        {/* Google ile Giriş */}
        <button
          onClick={() => signIn("google")}
          className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded mb-4"
        >
          Google ile Giriş Yap
        </button>

        {/* Divider */}
        <div className="text-center text-gray-500 my-2">veya</div>

        {/* Email ve Şifre Girişi */}
        <form className="flex flex-col gap-4">
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
            Giriş Yap
          </button>
        </form>

        {/* Kayıt Ol */}
        <div className="text-center mt-4 text-sm">
          Hesabınız yok mu?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Kayıt Ol
          </Link>
        </div>
      </div>
    </div>
  );
}
