"use client";
import { SITE_TITLE } from "@/lib/constants";

import Link from "next/link";
import { usePathname } from "next/navigation";

const steps = [
  { name: "Tanıtım", href: "/dashboard" },
  { name: "Şikayetler", href: "/complaint" },
  { name: "Sorular", href: "/questions" },
  { name: "Özet ve Sonuç", href: "/results" },
  { name: "Chatbot", href: "/chatbot" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-white border-r shadow-sm flex flex-col">
      <div className="p-6 font-bold text-xl">{SITE_TITLE}</div>

      <nav className="flex flex-col gap-2 p-4">
        {steps.map((step) => (
          <Link
            key={step.href}
            href={step.href}
            className={`px-4 py-2 rounded transition-all ${
              pathname === step.href
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-100 text-gray-700"
            }`}
          >
            {step.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
