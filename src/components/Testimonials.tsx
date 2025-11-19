import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "田中 太郎",
    role: "代表取締役",
    company: "株式会社テックイノベーション",
    content: "このサービスを導入してから、業務効率が3倍になりました。チーム全体の生産性が大きく向上し、売上も増加しています。",
    initials: "TT",
  },
  {
    name: "佐藤 花子",
    role: "マーケティング部長",
    company: "グローバルソリューションズ",
    content: "使いやすさと機能性のバランスが素晴らしいです。導入も簡単で、すぐに成果を実感できました。",
    initials: "SH",
  },
  {
    name: "鈴木 一郎",
    role: "CTO",
    company: "デジタルファースト株式会社",
    content: "セキュリティ面も安心で、エンタープライズ向けの機能も充実しています。コストパフォーマンスも抜群です。",
    initials: "SI",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">お客様の声</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            多くの企業様にご利用いただいています
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-blue-600 text-white">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
