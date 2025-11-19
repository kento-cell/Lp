import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Instagram } from "lucide-react";
import { Button } from "../ui/button";

export function SalonHero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1619607146034-5a05296c8f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMzMTcyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="サロン内観"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-white mb-6 tracking-wider">
          あなただけの<br className="md:hidden" />美しさを引き出す
        </h1>
        <p className="text-xl text-white/90 mb-8 tracking-wide max-w-2xl mx-auto">
          中目黒の完全予約制プライベートサロン<br />
          一人ひとりに寄り添った、丁寧な施術をお届けします
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-neutral-900 hover:bg-neutral-100 min-w-[200px]">
            ご予約・お問い合わせ
          </Button>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span className="text-sm tracking-wide">Instagramで見る</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
