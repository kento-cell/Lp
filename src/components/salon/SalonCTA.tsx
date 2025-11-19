import { Button } from "../ui/button";
import { Instagram, MessageCircle, Phone } from "lucide-react";

export function SalonCTA() {
  return (
    <section className="py-20 md:py-32 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-white mb-6 tracking-wide">
          ご予約・お問い合わせ
        </h2>
        <p className="text-neutral-300 mb-12 leading-relaxed">
          お気軽にご連絡ください。<br className="md:hidden" />
          ご希望の日時やメニューなど、お気軽にご相談ください。
        </p>

        <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-neutral-900 transition-all"
          >
            <Phone className="h-5 w-5 mr-2" />
            お電話
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-neutral-900 transition-all"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            LINE
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-neutral-900 transition-all"
          >
            <Instagram className="h-5 w-5 mr-2" />
            Instagram
          </Button>
        </div>

        <div className="mt-12 text-sm text-neutral-400">
          <p>営業時間：10:00 - 19:00（最終受付 18:00）</p>
          <p className="mt-1">定休日：月曜日・第3火曜日</p>
        </div>
      </div>
    </section>
  );
}
