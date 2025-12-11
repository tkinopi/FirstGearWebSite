import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const footerSections = [
    {
      title: '事業内容',
      links: [
        { name: 'リビルト事業', href: '/rebuilt' },
        { name: '製品案内', href: '/products' },
      ],
    },
    {
      title: '企業情報',
      links: [
        { name: '会社概要', href: '/company' },
        { name: '社長挨拶', href: '/company#message' },
        { name: '企業理念', href: '/company#philosophy' },
        { name: 'アクセス', href: '/company#access' },
      ],
    },
    {
      title: 'お問い合わせ',
      links: [
        { name: '採用情報', href: '/recruitment' },
        { name: 'お問い合わせフォーム', href: '/contact' },
        { name: 'よくある質問', href: '/contact#faq' },
        { name: '電話でのお問い合わせ', href: '/contact#phone' },
      ],
    },
  ]

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-accent">FirstGear</h2>
              {/* <p className="text-sm text-gray-400 mt-2">
                なおす、つながる、ひろがっていく。
              </p> */}
            </div>
            <p className="text-sm text-gray-400 mb-4">
              自動車マニュアルトランスミッションリビルト事業を通じて、
              持続可能な社会の実現に貢献します。
            </p>
            <div className="text-sm text-gray-400 mb-4">
              <p>〒561-0845</p>
              <p>大阪府豊中市利倉2丁目18番24号</p>
              <p>TEL: 06-6676-7002</p>
              <p>FAX: 06-6676-7003</p>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-accent">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 株式会社FirstGear. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                利用規約
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-400 hover:text-white transition-colors">
                サイトマップ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer