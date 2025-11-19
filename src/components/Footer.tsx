import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  product: {
    title: "製品",
    links: ["機能", "価格", "セキュリティ", "アップデート"],
  },
  company: {
    title: "会社",
    links: ["会社概要", "採用情報", "ブログ", "お問い合わせ"],
  },
  resources: {
    title: "リソース",
    links: ["ドキュメント", "ヘルプセンター", "API", "コミュニティ"],
  },
  legal: {
    title: "法的情報",
    links: ["利用規約", "プライバシーポリシー", "特定商取引法", "Cookie設定"],
  },
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © 2025 Your Company. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="hover:text-white transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
