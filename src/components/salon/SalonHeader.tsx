import { Instagram, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export function SalonHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="tracking-wider"
          >
            AYAKA SALON
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('concept')} className="text-sm tracking-wide text-neutral-600 hover:text-neutral-900 transition-colors">
              コンセプト
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-sm tracking-wide text-neutral-600 hover:text-neutral-900 transition-colors">
              メニュー
            </button>
            <button onClick={() => scrollToSection('profile')} className="text-sm tracking-wide text-neutral-600 hover:text-neutral-900 transition-colors">
              プロフィール
            </button>
            <button onClick={() => scrollToSection('access')} className="text-sm tracking-wide text-neutral-600 hover:text-neutral-900 transition-colors">
              アクセス
            </button>
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
            <Button className="bg-neutral-900 hover:bg-neutral-800 text-white">
              予約する
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
              <button onClick={() => scrollToSection('concept')} className="text-left text-neutral-600 hover:text-neutral-900">
                コンセプト
              </button>
              <button onClick={() => scrollToSection('menu')} className="text-left text-neutral-600 hover:text-neutral-900">
                メニュー
              </button>
              <button onClick={() => scrollToSection('profile')} className="text-left text-neutral-600 hover:text-neutral-900">
                プロフィール
              </button>
              <button onClick={() => scrollToSection('access')} className="text-left text-neutral-600 hover:text-neutral-900">
                アクセス
              </button>
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <Button className="flex-1 bg-neutral-900 hover:bg-neutral-800 text-white">
                  予約する
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
