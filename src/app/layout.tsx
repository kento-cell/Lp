import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import { SalonFooter } from "@/components/salon/SalonFooter";
import { SalonHeader } from "@/components/salon/SalonHeader";

export const metadata: Metadata = {
  title: "AYAKA SALON | プライベートヘアサロン",
  description:
    "中目黒のプライベートサロン AYAKA SALON。ヘアケア、カット、カラー、トリートメントの情報をページごとにご紹介。",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <SalonHeader />
        <main className="pt-16">{children}</main>
        <SalonFooter />
      </body>
    </html>
  );
}
