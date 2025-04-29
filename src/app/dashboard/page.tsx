"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">
        Hoş Geldin, {session?.user?.name} 🎉
      </h1>
      <p className="text-gray-600 mb-8 max-w-lg">
        HealthVerse başlamak için hazırsın! Şikayetlerini belirt, sana en uygun yönlendirmeyi yapalım.
      </p>

      <Link
        href="/complaint"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded text-lg transition"
      >
        Şikayetleri Başlat
      </Link>
    </div>
  );
}
