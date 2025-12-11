import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.firstgeardirect.com'), // 実際のドメインに変更してください
  title: {
    default: 'FirstGear - 自動車マニュアルトランスミッションリビルト事業 | なおす、つながる、ひろがっていく',
    template: '%s | FirstGear',
  },
  description: 'なおす、とどける、みらいへつなぐ。自動車マニュアルトランスミッションリビルト事業から世界へ。高品質なオルタネーター、スターター、コンプレッサーのリビルト品を提供し、持続可能な社会に貢献します。',
  keywords: ['自動車', 'リビルト', '電装品', 'スターター', 'コンプレッサー', 'FirstGear', '環境', 'SDGs', 'バングラデシュ', '海外展開'],
  authors: [{ name: 'FirstGear' }],
  creator: 'FirstGear',
  publisher: 'FirstGear',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://www.firstgeardirect.com',
    siteName: 'FirstGear',
    title: 'FirstGear - 自動車マニュアルトランスミッションリビルト事業',
    description: 'なおす、とどける、みらいへつなぐ。自動車マニュアルトランスミッションリビルト事業から世界へ',
    images: [
      {
        url: '/og-image.png', // OGP画像を用意してください
        width: 1200,
        height: 630,
        alt: 'FirstGear',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FirstGear - 自動車マニュアルトランスミッションリビルト事業',
    description: 'なおす、とどける、みらいへつなぐ。自動車マニュアルトランスミッションリビルト事業から世界へ',
    images: ['/og-image.png'], // OGP画像を用意してください
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Google Search Consoleで取得した認証コードを追加してください
    // google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="font-sans bg-light text-dark">
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}