"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function UserButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-3">
        {session.user?.image && (
          <Image
            src={session.user.image}
            alt="Profil Fotoğrafı"
            width={32}
            height={32}
            className="rounded-full"
          />
        )}
        <span>{session.user?.name}</span>
        <button
          onClick={() => signOut()}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Çıkış
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="px-3 py-1 bg-blue-500 text-white rounded"
    >
      Google ile Giriş Yap
    </button>
  );
}
