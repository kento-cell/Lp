"use client";

export default function SalonAccess() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-sm tracking-[0.3em] text-neutral-500 uppercase mb-2">
        ACCESS
      </h2>
      <h3 className="text-2xl font-semibold mb-10">サロン概要</h3>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="w-full h-[380px] rounded-xl overflow-hidden border">
          <iframe
            title="サロン所在地の地図"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.370579862605!2d139.6949555!3d35.6437025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b414715be8f%3A0xb76c2f0cba7d685b!2z5pel5pys44CB44CSMTUzLTAwNTEg5p2x5Lqs6YO95LiW55Sw6LC35Yy65LiA5bqr77yS5LiB55uu77yR77yR!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="space-y-6 text-sm leading-relaxed">
          <div>
            <p className="text-neutral-500">住所</p>
            <p className="mt-1">
              〒000-0000
              <br />
              ○○県○○市○○町0-0-0
              <br />
              サンプルビル 0F
            </p>
            <p className="mt-2 text-neutral-600 text-xs">
              ○○線「○○駅」徒歩0分（サンプルデータ）
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
            <p className="mt-1">000-0000-0000</p>
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
        ※完全予約制のため、ご来店の際は事前にご予約をお願いいたします。
      </p>
    </section>
  );
}
