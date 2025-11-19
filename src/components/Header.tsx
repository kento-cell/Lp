import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-blue-600">
              Your Company
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              機能
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              価格
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              リソース
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              会社概要
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">ログイン</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              無料で始める
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                機能
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                価格
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                リソース
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                会社概要
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Button variant="ghost" className="w-full">
                  ログイン
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  無料で始める
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
