"use client";

import { Instagram, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "../ui/button";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/concept", label: "コンセプト" },
  { href: "/menu", label: "メニュー" },
  { href: "/gallery", label: "ギャラリー" },
  { href: "/profile", label: "プロフィール" },
  { href: "/testimonials", label: "お客様の声" },
  { href: "/access", label: "アクセス" },
];

export function SalonHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="tracking-wider" onClick={() => setIsMenuOpen(false)}>
            AYAKA SALON
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm tracking-wide transition-colors ${
                    isActive ? "text-neutral-900" : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <Button className="bg-neutral-900 hover:bg-neutral-800 text-white" asChild>
              <Link href="/reserve">予約する</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-neutral-200">
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-left text-neutral-600 hover:text-neutral-900 ${
                    pathname === item.href ? "text-neutral-900" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <Button className="flex-1 bg-neutral-900 hover:bg-neutral-800 text-white" asChild>
                  <Link href="/reserve" onClick={() => setIsMenuOpen(false)}>
                    予約する
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
