import { ImageWithFallback } from "../figma/ImageWithFallback";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBzdHlsaW5nfGVufDF8fHx8MTc2MzMyMjIzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "スタイル1",
  },
  {
    src: "https://images.unsplash.com/photo-1712641970791-ea9a566c93bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVhdXR5JTIwc2Fsb258ZW58MXx8fHwxNzYzNDMyMTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "スタイル2",
  },
  {
    src: "https://images.unsplash.com/photo-1673241072599-3b0ae88df1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHByb2R1Y3RzfGVufDF8fHx8MTc2MzQzMjE4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "使用製品",
  },
  {
    src: "https://images.unsplash.com/photo-1619607146034-5a05296c8f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMzMTcyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "サロン内観",
  },
];

export function SalonGallery() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-neutral-500 mb-4">GALLERY</p>
          <h2 className="mb-6 tracking-wide">施術実績</h2>
          <p className="text-neutral-600">
            お客様の「なりたい」を叶えるスタイル提案
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, idx) => (
            <div key={idx} className="aspect-square relative overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-neutral-600">
            その他のスタイルは
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="underline ml-1 hover:text-neutral-900">
              Instagramでチェック
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
