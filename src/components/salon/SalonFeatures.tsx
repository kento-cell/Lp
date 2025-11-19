import { Sparkles, Heart, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "厳選したプロダクト",
    description: "髪と頭皮に優しいオーガニック製品を中心に、厳選したプロダクトを使用しています。",
  },
  {
    icon: Heart,
    title: "丁寧なカウンセリング",
    description: "お客様のライフスタイルや悩みをじっくりお伺いし、最適なスタイルをご提案します。",
  },
  {
    icon: Clock,
    title: "完全予約制",
    description: "プライベートな空間で、お一人おひとりとゆっくり向き合える時間を大切にしています。",
  },
  {
    icon: Shield,
    title: "高い技術力",
    description: "10年以上の経験と確かな技術で、理想のスタイルを実現します。",
  },
];

export function SalonFeatures() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-neutral-500 mb-4">FEATURES</p>
          <h2 className="mb-6 tracking-wide">当サロンのこだわり</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-neutral-900" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 tracking-wide">{feature.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
