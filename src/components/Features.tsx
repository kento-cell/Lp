import { Zap, Shield, Users, BarChart3, Clock, Rocket } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "高速処理",
    description: "最先端の技術により、驚異的なスピードでタスクを処理します。",
  },
  {
    icon: Shield,
    title: "セキュリティ",
    description: "エンタープライズグレードのセキュリティで、大切なデータを守ります。",
  },
  {
    icon: Users,
    title: "チーム協業",
    description: "シームレスな連携で、チーム全体の生産性を向上させます。",
  },
  {
    icon: BarChart3,
    title: "詳細分析",
    description: "リアルタイムの分析により、データに基づいた意思決定が可能です。",
  },
  {
    icon: Clock,
    title: "時間短縮",
    description: "自動化により、作業時間を大幅に削減し、重要な業務に集中できます。",
  },
  {
    icon: Rocket,
    title: "スケーラブル",
    description: "ビジネスの成長に合わせて、柔軟にスケールできます。",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">主な機能</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ビジネスの成功に必要な、すべての機能を提供します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
