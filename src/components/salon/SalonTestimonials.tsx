import { Star } from "lucide-react";

const testimonials = [
  {
    name: "M.K様",
    age: "20代",
    comment: "カウンセリングが丁寧で、自分では気づかなかった魅力を引き出してもらえました。スタイリングのコツも教えてくださり、毎日のセットが楽しくなりました。",
    rating: 5,
  },
  {
    name: "Y.T様",
    age: "30代",
    comment: "プライベート空間なので周りを気にせずリラックスできます。技術も確かで、カラーの持ちが良く、毎回仕上がりに大満足です。",
    rating: 5,
  },
  {
    name: "S.N様",
    age: "40代",
    comment: "初めての来店でしたが、とても話しやすく安心してお任せできました。年齢に合った上品なスタイルを提案していただき、大変満足しています。",
    rating: 5,
  },
];

export function SalonTestimonials() {
  return (
    <section className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-neutral-500 mb-4">VOICE</p>
          <h2 className="mb-6 tracking-wide">お客様の声</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-neutral-900 text-neutral-900" />
                ))}
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                {testimonial.comment}
              </p>
              <p className="text-sm text-neutral-900">
                {testimonial.name} <span className="text-neutral-500">（{testimonial.age}）</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
