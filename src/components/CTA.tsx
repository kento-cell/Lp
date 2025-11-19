import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white mb-4">
          今すぐ始めましょう
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          無料トライアルで、すべての機能をお試しいただけます
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="メールアドレスを入力"
              className="bg-white"
            />
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 whitespace-nowrap">
              無料で始める
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            クレジットカード不要 • 14日間無料トライアル
          </p>
        </div>
      </div>
    </section>
  );
}
