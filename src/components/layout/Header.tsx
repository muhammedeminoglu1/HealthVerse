"use client";

import UserButton from "@/components/UserButton";
import { SITE_TITLE } from "@/lib/constants";

export default function Header() {
  return (
    <header className="w-full h-16 bg-white shadow-sm flex items-center justify-between px-6">
     <div className="font-bold text-lg">{SITE_TITLE}</div>

      <div className="flex items-center gap-4">
        <UserButton />
        {/* İleride tema değiştirme ikonu buraya eklenebilir */}
      </div>
    </header>
  );
}
    