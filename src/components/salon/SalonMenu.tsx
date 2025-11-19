import { Separator } from "../ui/separator";

const menuItems = [
  {
    category: "カット",
    items: [
      { name: "カット", price: "¥8,000", duration: "60分" },
      { name: "カット + トリートメント", price: "¥10,000", duration: "90分" },
    ],
  },
  {
    category: "カラー",
    items: [
      { name: "フルカラー", price: "¥12,000〜", duration: "120分" },
      { name: "リタッチカラー", price: "¥9,000", duration: "90分" },
      { name: "ハイライト / バレイヤージュ", price: "¥15,000〜", duration: "150分" },
    ],
  },
  {
    category: "パーマ",
    items: [
      { name: "デジタルパーマ", price: "¥14,000〜", duration: "150分" },
      { name: "エアウェーブ", price: "¥13,000〜", duration: "150分" },
      { name: "ポイントパーマ", price: "¥8,000〜", duration: "90分" },
    ],
  },
  {
    category: "トリートメント",
    items: [
      { name: "サロントリートメント", price: "¥4,000〜", duration: "30分" },
      { name: "プレミアムケア", price: "¥7,000〜", duration: "45分" },
    ],
  },
  {
    category: "セットメニュー",
    items: [
      { name: "カット + カラー", price: "¥18,000〜", duration: "150分" },
      { name: "カット + カラー + トリートメント", price: "¥22,000〜", duration: "180分" },
      { name: "カット + パーマ", price: "¥20,000〜", duration: "180分" },
    ],
  },
];

export function SalonMenu() {
  return (
    <section id="menu" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-neutral-500 mb-4">MENU</p>
          <h2 className="mb-6 tracking-wide">メニュー・料金</h2>
          <p className="text-neutral-600">
            ※表示価格は全て税込みです<br />
            ※初回の方はカウンセリングのお時間を含みます
          </p>
        </div>

        {/* Menu List */}
        <div className="space-y-12">
          {menuItems.map((category, idx) => (
            <div key={idx}>
              <h3 className="mb-6 tracking-wide pb-3 border-b border-neutral-200">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <p className="text-neutral-900 mb-1">{item.name}</p>
                      <p className="text-sm text-neutral-500">{item.duration}</p>
                    </div>
                    <p className="text-neutral-900 whitespace-nowrap">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 p-6 bg-neutral-50 rounded-lg">
          <p className="text-sm text-neutral-700 leading-relaxed">
            <span className="block mb-2">【ご予約について】</span>
            完全予約制となっております。お電話、LINE、Instagramのダイレクトメッセージにてご予約を承っております。
            <br />
            初めての方も、お気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </section>
  );
}
