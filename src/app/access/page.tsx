import { MapPin, Clock, Phone, Mail } from "lucide-react";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.258727255126!2d139.7045686765195!3d35.64408933102186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4bb36e2943%3A0xbcb287ec01dd1bac!2z5Lit5aSu55Sw5qmL6aeF!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp";

export default function AccessPage() {
  return (
    <section id="access" className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <div className="aspect-square rounded-[32px] overflow-hidden shadow-2xl border border-white/40">
              <iframe
                src={MAP_EMBED_URL}
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
                title="中目黒駅のGoogleマップ"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-sm text-neutral-500 mt-3 text-center">
              Google マップで「中目黒駅」を表示しています
            </p>
          </div>

          <div>
            <p className="text-sm tracking-widest text-neutral-500 mb-4">ACCESS</p>
            <h2 className="mb-8 tracking-wide">サロン情報</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 text-neutral-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-neutral-500 mb-1">住所</p>
                  <p className="text-neutral-900">
                    〒153-0051
                    <br />
                    東京都目黒区上目黒3-1-1
                    <br />
                    中目黒ビル 2F
                  </p>
                  <p className="text-sm text-neutral-600 mt-2">
                    東急東横線・東京メトロ日比谷線「中目黒駅」徒歩5分
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="h-5 w-5 text-neutral-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-neutral-500 mb-1">営業時間</p>
                  <p className="text-neutral-900">10:00 - 19:00（最終受付 18:00）</p>
                  <p className="text-sm text-neutral-600 mt-2">定休日：月曜日・第3火曜日</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="h-5 w-5 text-neutral-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-neutral-500 mb-1">電話</p>
                  <p className="text-neutral-900">03-1234-5678</p>
                  <p className="text-sm text-neutral-600 mt-2">※施術中は電話に出られない場合がございます</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="h-5 w-5 text-neutral-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-neutral-500 mb-1">お問い合わせ</p>
                  <p className="text-neutral-900">
                    LINE・Instagram DM・お電話にて
                    <br />
                    お気軽にお問い合わせください
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-600 leading-relaxed">
                ※駐車場はございません。お近くのコインパーキングをご利用ください。
                <br />
                ※完全予約制のため、ご来店の際は必ずご予約をお願いいたします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
