import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const footerSections = [
    {
      title: '事業内容',
      links: [
        { name: 'リビルト事業', href: '#rebuilt' },
        { name: '製品案内', href: '#products' },
        { name: '海外事業', href: '#overseas' },
        { name: '技術研修', href: '#training' },
      ],
    },
    {
      title: '企業情報',
      links: [
        { name: '会社概要', href: '#about' },
        { name: '沿革', href: '#history' },
        { name: 'アクセス', href: '#access' },
        { name: 'SDGsへの取り組み', href: '#sdgs' },
      ],
    },
    {
      title: '採用情報',
      links: [
        { name: '募集要項', href: '#recruitment' },
        { name: '社員インタビュー', href: '#interviews' },
        { name: '福利厚生', href: '#benefits' },
        { name: 'キャリアパス', href: '#career' },
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
              <p className="text-sm text-gray-400 mt-2">
                なおす、つながる、ひろがっていく。
              </p>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              自動車電装品リビルト事業を通じて、
              持続可能な社会の実現に貢献します。
            </p>
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
              © 2024 FirstGear. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                利用規約
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
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