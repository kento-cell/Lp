import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  { number: "10,000+", label: "導入企業" },
  { number: "99.9%", label: "稼働率" },
  { number: "24/7", label: "サポート" },
  { number: "500%", label: "ROI向上" },
];

export function Stats() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzYzNDE5NjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Stats background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-white mb-2">{stat.number}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
