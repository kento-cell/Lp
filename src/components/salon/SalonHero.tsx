import { Clock3, Instagram, ShieldCheck, Sparkles, Star, User2 } from "lucide-react";
import Link from "next/link";

import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";

const stats = [
  { label: "年間リピート", value: "92%" },
  { label: "施術実績", value: "1,200+" },
  { label: "ケアレシピ", value: "48" },
];

const persona = {
  name: "Kana",
  detail: "32歳 / PRディレクター",
  needs: "忙しくても清潔感と艶を保ちたい",
};

export function SalonHero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-neutral-950 text-white pt-28 pb-24"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
        <div className="absolute -top-24 right-16 size-72 bg-rose-500/30 blur-[140px]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] gap-12 items-center">
          <div className="space-y-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.35em] text-white/70">
              <Sparkles className="size-4 text-rose-200" />
              PRIVATE SALON
            </p>
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-widest">
                女性の輪郭を美しく整える
                <span className="block font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-white">
                  中目黒プライベートサロン
                </span>
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                仕事もプライベートも多忙な女性のために設計された、完全貸切のヘアケアルーム。
                骨格診断とヘルスチェックをもとに「艶」「品」「柔らかさ」を引き出す独自メソッドで、
                翌朝のスタイリングまで安心してお任せいただけます。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="min-w-[220px] bg-white text-neutral-900 hover:bg-white/90 text-base font-semibold px-8 py-6 shadow-2xl shadow-rose-500/30"
                asChild
              >
                <Link href="/reserve">ご予約・お問い合わせ</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-white/40 text-white bg-transparent hover:bg-white/10 px-8 py-6"
                asChild
              >
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <Instagram className="size-5" />
                  Instagramで見る
                </a>
              </Button>
            </div>

            <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:flex-row">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-10 text-rose-200" />
                <div>
                  <p className="text-sm text-white/60">完全貸切で安心</p>
                  <p className="text-base font-medium">1日5名様限定</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock3 className="size-10 text-rose-200" />
                <div>
                  <p className="text-sm text-white/60">ナイトケア対応</p>
                  <p className="text-base font-medium">最終受付 21:00</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold tracking-tight">{stat.value}</p>
                  <p className="mt-1 text-xs tracking-[0.3em] text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-white/20 via-rose-200/30 to-transparent opacity-70 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/5">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1080&q=80"
                alt="サロンでケアを受ける女性"
                className="h-full w-full object-cover"
              />

              <div className="absolute left-6 top-6 flex items-center gap-3 rounded-2xl bg-black/60 px-5 py-3 backdrop-blur">
                <div className="flex items-center gap-1 text-amber-300">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold">4.9 / 5.0</p>
                  <p className="text-xs text-white/70">ご来店のお客様レビュー</p>
                </div>
              </div>

              <div className="absolute -bottom-6 right-6 w-64 rounded-3xl border border-white/10 bg-white/90 p-5 text-neutral-900 shadow-2xl space-y-3">
                <p className="text-xs tracking-[0.4em] text-neutral-500">CARE ROUTINE</p>
                <p className="mt-3 text-lg font-semibold">髪質診断 × オーダーメイドケア</p>
                <p className="mt-2 text-sm text-neutral-600">
                  お持ち帰りいただけるセルフケアレシピで、サロン帰りの艶が長く続きます。
                </p>
                <div className="flex items-center gap-3 rounded-2xl border border-neutral-200/80 bg-white px-3 py-2">
                  <div className="flex size-10 items-center justify-center rounded-full bg-rose-50">
                    <User2 className="size-5 text-rose-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{persona.name}</p>
                    <p className="text-xs text-neutral-500">{persona.detail}</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-500">
                  「{persona.needs}」
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
