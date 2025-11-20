import { Clock3, Instagram, ShieldCheck, Sparkles, Star } from "lucide-react";
import Link from "next/link";

import { Button } from "../ui/button";

const stats = [
  { label: "\u5e74\u9593\u30ea\u30d4\u30fc\u30c8\u7387", value: "92%" },
  { label: "\u65bd\u8853\u5b9f\u7e3e", value: "1,200+" },
  { label: "\u30b1\u30a2\u30ec\u30b7\u30d4\u6570", value: "48" },
];

export function SalonHero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#f5f0ff] via-white to-rose-50 text-neutral-900 pt-28 pb-28 lg:pt-32 lg:pb-32"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.08),transparent_45%)]" />
        <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-rose-200/50 blur-[140px]" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-violet-200/50 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] gap-16 lg:gap-20 items-center">
          <div className="space-y-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.35em] text-violet-700 shadow-sm backdrop-blur">
              <Sparkles className="size-4 text-violet-500" />
              PRIVATE SALON
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-wider text-neutral-900">
                {"\u4e2d\u76ee\u9ed2\u3067\u51fa\u4f1a\u3046"}
                <span className="block font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-fuchsia-600 to-rose-500">
                  {"\u3042\u306a\u305f\u3089\u3057\u3044\u8276\u3068\u54c1\u3092"}
                </span>
              </h1>
              <p className="text-lg text-neutral-700 leading-relaxed max-w-2xl">
                {
                  "\u5b8c\u5168\u4e88\u7d04\u5236\u306e\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u7a7a\u9593\u3067\u3001\u9aea\u8cea\u3084\u9aa8\u683c\u306b\u5408\u308f\u305b\u305f\u4e01\u5be7\u306a\u30ab\u30a6\u30f3\u30bb\u30ea\u30f3\u30b0\u3068\u65bd\u8853\u3092\u884c\u3044\u307e\u3059\u3002\u5fd9\u3057\u3044\u65e5\u5e38\u306e\u5408\u9593\u306b\u3001\u547c\u5438\u304c\u6574\u3046\u8d05\u6ca2\u306a\u30d8\u30a2\u30b1\u30a2\u4f53\u9a13\u3092\u304a\u697d\u3057\u307f\u304f\u3060\u3055\u3044\u3002"
                }
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="min-w-[220px] bg-white text-neutral-900 border border-violet-200 hover:bg-gradient-to-r hover:from-violet-700 hover:via-fuchsia-600 hover:to-rose-500 hover:text-white text-base font-semibold px-9 py-6 shadow-[0_16px_45px_rgba(124,58,237,0.28)] ring-2 ring-violet-200/80 transition-colors duration-200"
                asChild
              >
                <Link href="/reserve">
                  {
                    "\u3054\u4e88\u7d04\u30fb\u304a\u554f\u3044\u5408\u308f\u305b"
                  }
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-base border-violet-200 text-violet-800 bg-white/90 hover:bg-violet-50 px-9 py-6 shadow-sm"
                asChild
              >
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram className="size-5" />
                  {"Instagram\u3067\u898b\u308b"}
                </a>
              </Button>
            </div>

            <div className="flex flex-col gap-5 sm:gap-6 rounded-3xl border border-violet-100 bg-white/85 p-7 backdrop-blur-sm sm:flex-row shadow">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-10 text-violet-500" />
                <div>
                  <p className="text-sm text-neutral-500">
                    {"\u5b8c\u5168\u8cb8\u5207\u3067\u5b89\u5fc3"}
                  </p>
                  <p className="text-base font-medium">
                    {"\u0031\u65e5\u0035\u540d\u69d8\u9650\u5b9a"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock3 className="size-10 text-violet-500" />
                <div>
                  <p className="text-sm text-neutral-500">
                    {"\u30ca\u30a4\u30c8\u30b1\u30a2\u5bfe\u5fdc"}
                  </p>
                  <p className="text-base font-medium">
                    {
                      "\u6700\u7d42\u53d7\u4ed8\u0020\u0032\u0031\u003a\u0030\u0030"
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-violet-100 bg-white/90 px-5 py-5 shadow"
                >
                  <p className="text-3xl font-semibold tracking-tight text-neutral-900">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs tracking-[0.3em] text-neutral-500 whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-white via-violet-200/60 to-rose-100/60 opacity-80 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-xl">
              <video
                src="/media/6160-189422433.mp4"
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
              />

              <div className="absolute left-6 top-6 flex items-center gap-3 rounded-2xl bg-white/85 px-5 py-3 backdrop-blur text-neutral-900 shadow-sm">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold">4.9 / 5.0</p>
                  <p className="text-xs text-neutral-600">
                    {
                      "\u304a\u5ba2\u69d8\u304b\u3089\u306e\u30ec\u30d3\u30e5\u30fc"
                    }
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 right-6 w-64 rounded-3xl border border-violet-100 bg-white p-5 text-neutral-900 shadow-2xl">
                <p className="text-xs tracking-[0.4em] text-neutral-500">
                  CARE ROUTINE
                </p>
                <p className="mt-3 text-lg font-semibold">
                  {
                    "\u9aea\u306e\u571f\u53f0\u304b\u3089\u30aa\u30fc\u30c0\u30fc\u30e1\u30a4\u30c9\u30b1\u30a2"
                  }
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  {
                    "\u4e7e\u71e5\u3084\u3046\u306d\u308a\u3001\u30c0\u30e1\u30fc\u30b8\u30ec\u30b9\u306a\u85ac\u5264\u3092\u7528\u3044\u3001\u30b5\u30ed\u30f3\u5e30\u308a\u306e\u8276\u3068\u307e\u3068\u307e\u308a\u304c\u7d9a\u304d\u307e\u3059\u3002"
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
