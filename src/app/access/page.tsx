"use client";

export function SalonAccess() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-sm tracking-[0.3em] text-neutral-500 uppercase mb-2">
        ACCESS
      </h2>
      <h3 className="text-2xl font-semibold mb-10">サロン情報</h3>

      <div className="grid md:grid-cols-2 gap-12">
        {/* 左：Google Map */}
        <div className="w-full h-[380px] rounded-xl overflow-hidden border">
          <iframe
            src="https://www.google.com/maps/embed?pb=あなたの埋め込みURL"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>

        {/* 右：テキスト情報 */}
        <div className="space-y-6 text-sm leading-relaxed">
          <div>
            <p className="text-neutral-500">住所</p>
            <p className="mt-1">
              〒153-0051
              <br />
              東京都目黒区上目黒3-1-1
              <br />
              中目黒ビル 2F
            </p>
            <p className="mt-2 text-neutral-600 text-xs">
              東急東横線・東京メトロ日比谷線「中目黒駅」徒歩5分
            </p>
          </div>

          <div>
            <p className="text-neutral-500">営業時間</p>
            <p className="mt-1">
              10:00 - 19:00（最終受付 18:00）
              <br />
              定休日：月曜日・第3火曜日
            </p>
          </div>

          <div>
            <p className="text-neutral-500">電話</p>
            <p className="mt-1">03-1234-5678</p>
            <p className="mt-1 text-neutral-600 text-xs">
              ※施術中はお電話に出られない場合がございます
            </p>
          </div>

          <div>
            <p className="text-neutral-500">お問い合わせ</p>
            <p className="mt-1">
              LINE・Instagram DM・お電話にて
              <br />
              お気軽にお問い合わせください
            </p>
          </div>
        </div>
      </div>

      <p className="mt-10 text-xs text-neutral-500">
        ※駐車場はございません。お近くのコインパーキングをご利用ください。
        <br />
        ※完全予約制のため、ご来店の際は必ず事前にご予約をお願いいたします。
      </p>
    </section>
  );
}
