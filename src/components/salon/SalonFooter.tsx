import { Instagram } from "lucide-react";

export function SalonFooter() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="tracking-wider mb-2">AYAKA SALON</p>
            <p className="text-sm text-neutral-600">
              〒153-0051 東京都目黒区上目黒3-1-1 中目黒ビル 2F
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200 text-center">
          <p className="text-sm text-neutral-500">
            © 2025 AYAKA SALON. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
