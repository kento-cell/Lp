import { ImageWithFallback } from "../figma/ImageWithFallback";

export function SalonProfile() {
  return (
    <section id="profile" className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div>
            <div className="aspect-[3/4] relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761931403663-050fbd8fb4c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoYWlyJTIwc3R5bGlzdHxlbnwxfHx8fDE3NjM0MzIxOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="オーナー（サンプル）"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm tracking-widest text-neutral-500 mb-4">PROFILE</p>
            <h2 className="mb-6 tracking-wide">サンプル 太郎</h2>
            <p className="text-sm text-neutral-600 mb-8">Sample Owner / Hair Stylist</p>
            
            <div className="space-y-6 text-neutral-700 leading-relaxed">
              <p>
                都内有名サロンで10年の経験を積み、2024年に中目黒にてプライベートサロンをオープン。
              </p>
              <p>
                「お客様一人ひとりに、本当に似合うスタイルを」をモットーに、
                丁寧なカウンセリングと高い技術力で、多くのお客様にご支持いただいています。
              </p>
              <p>
                トレンドを取り入れながらも、日常生活に馴染む
                「再現性の高いスタイル」を得意としています。
              </p>
            </div>

            {/* Qualifications */}
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <p className="text-sm tracking-wide text-neutral-500 mb-4">資格・経歴</p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>• 美容師免許取得</li>
                <li>• カラーリスト検定1級</li>
                <li>• ヘアケアマイスター認定</li>
                <li>• 都内有名サロン 10年勤務</li>
                <li>• スタイリストコンテスト入賞歴多数</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
