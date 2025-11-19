import { ImageWithFallback } from "../figma/ImageWithFallback";

export function SalonConcept() {
  return (
    <section id="concept" className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="aspect-[3/4] relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBzdHlsaW5nfGVufDF8fHx8MTc2MzMyMjIzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="施術風景"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="text-sm tracking-widest text-neutral-500 mb-4">CONCEPT</p>
            <h2 className="mb-6 tracking-wide">
              あなたらしい美しさを<br />
              丁寧に引き出します
            </h2>
            <div className="space-y-6 text-neutral-700 leading-relaxed">
              <p>
                当サロンは、完全予約制のプライベート空間。
                お一人おひとりとじっくり向き合い、
                ライフスタイルや髪質に合わせた施術を提供しています。
              </p>
              <p>
                トレンドを追うだけでなく、
                あなたの個性を活かした「似合わせ」を大切に。
                毎日のスタイリングがしやすく、
                長く楽しんでいただけるヘアデザインを目指します。
              </p>
              <p>
                落ち着いた空間で、心地よい時間をお過ごしください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
