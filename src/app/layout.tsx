"use client";

import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <html lang="tr">
        <body className="flex">
          <Sidebar />
          <div className="flex-1 flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 p-6 bg-gray-50">
              {children}
            </main>
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
