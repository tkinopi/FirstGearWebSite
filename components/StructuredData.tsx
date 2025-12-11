export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FirstGear',
    description: '自動車マニュアルトランスミッションリビルト事業を通じて持続可能な社会に貢献',
    url: 'https://www.firstgeardirect.com',
    logo: 'https://www.firstgeardirect.com/logo.png', // ロゴ画像のURLを追加してください
    sameAs: [
      // SNSアカウントがあれば追加してください
      // 'https://www.facebook.com/firstgear',
      // 'https://twitter.com/firstgear',
      // 'https://www.linkedin.com/company/firstgear',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '', // 住所を追加してください
      addressLocality: '', // 市区町村を追加してください
      addressRegion: '', // 都道府県を追加してください
      postalCode: '561-0845', // 郵便番号（contact/page.tsxから）
      addressCountry: 'JP',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['Japanese', 'English'],
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FirstGear',
    description: 'なおす、つながる、ひろがっていく。自動車マニュアルトランスミッションリビルト事業から世界へ',
    url: 'https://www.firstgeardirect.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.firstgeardirect.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'FirstGear',
    image: 'https://www.firstgeardirect.com/og-image.png',
    '@id': 'https://www.firstgeardirect.com',
    url: 'https://www.firstgeardirect.com',
    telephone: '', // 電話番号を追加してください
    address: {
      '@type': 'PostalAddress',
      streetAddress: '', // 住所を追加してください
      addressLocality: '', // 市区町村を追加してください
      addressRegion: '', // 都道府県を追加してください
      postalCode: '561-0845',
      addressCountry: 'JP',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}
