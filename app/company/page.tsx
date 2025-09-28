'use client'

import { motion } from 'framer-motion'
import { FaBuilding, FaCalendarAlt, FaUsers, FaYenSign, FaPhone, FaMapMarkerAlt, FaIndustry, FaGlobeAsia, FaHandshake, FaChartLine, FaAward, FaHistory, FaCar, FaTrain, FaDirections, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const CompanyPage = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const companyInfo = {
    name: '株式会社 FirstGear',
    headquarters: '大阪府堺市南区金室978-1',
    branches: ['大阪'],
    tel: '072-298-9273',
    fax: '072-298-9274',
    established: '平成17年4月11日',
    capital: '300万円',
    ceo: '代表取締役社長　山田 義夫',
    employees: '107名（2024年10月現在、派遣社員含む）',
    business: [
      '自動車部品の修理及び再生（リビルト）',
      '自動車部品および自動車用品類の製造、販売'
    ]
  }

  const timeline = [
    { year: '1973年9月', event: '大阪府堺市寺地町にてオートモービルサービスを設立し、祖業の自動車整備業を開始', icon: <FaBuilding /> },
    { year: '1977年', event: '大阪陸運局より、自動車整備二種認証工場として認定を受ける', icon: <FaAward /> },
    { year: '1978年', event: '中央自動車工業よりリビルト製造を受託し、スターター・オルタネーターのリビルト技術を習得', icon: <FaIndustry /> },
    { year: '1982年', event: '阪堺自動車協同組合に加入し、整備業を拡大', icon: <FaHandshake /> },
    { year: '1987年', event: '大阪府堺市辻之にて大光電機株式会社を設立し、オートモービルサービスを自動車部として吸収', icon: <FaBuilding /> },
    { year: '同年', event: '岡山県後月郡に自動車部品再生工場を設立し、ディストリビューターのリビルトと輸出を開始', icon: <FaGlobeAsia /> },
    { year: '1998年', event: '阪南自動車よりイグニッション部品の製造権を取得し、コンタクトポイント・コンデンサーの製造を開始', icon: <FaIndustry /> },
    { year: '2001年', event: '大阪府堺市金室978の1に新社屋を建設', icon: <FaBuilding /> },
    { year: '2005年4月', event: '大光電機株式会社から国内再生部門を分社化し、有限会社大光サービスを新たに設立', icon: <FaChartLine /> }
  ]

  const philosophy = {
    vision: 'ものづくり、ひとづくり。',
    mission: '大気汚染の最も大きな原因は、自動車による排気ガスです。世界で最も大気汚染が進んでいる国バングラデシュは、世界ガスによる汚染物質排出を続録するため、エネルギー源を高価な石油やガスから石炭に移行し、バングラディシュ産業の国内発電所に頼る私人税を軽減しています。',
    sdgs: [
      { number: 12, title: 'つくる責任つかう責任', description: 'リビルト事業を通じて資源の有効活用を推進' },
      { number: 8, title: '働きがいも経済成長も', description: '技術革新による持続可能な経済成長を実現' },
      { number: 4, title: '質の高い教育をみんなに', description: '海外での技術教育・人材育成プロジェクト実施' },
      { number: 8, title: 'パートナーシップで目標を達成しよう', description: 'JICAとともにバングラデシュで発展させることで、現地での人材確保活動を推進' }
    ]
  }

  const tabs = [
    { id: 'overview', label: '会社概要', icon: <FaBuilding /> },
    { id: 'history', label: '沿革', icon: <FaHistory /> },
    { id: 'philosophy', label: '企業理念', icon: <FaAward /> },
    { id: 'access', label: 'アクセス', icon: <FaMapMarkerAlt /> }
  ]

  const accessInfo = {
    address: '〒590-0138 大阪府堺市南区金室978-1',
    nearestStation: [
      { line: '泉北高速鉄道', station: '栂・美木多駅', time: '車で約10分' },
      { line: '南海高野線', station: '金剛駅', time: '車で約15分' }
    ],
    parking: '完備（20台）',
    businessHours: '平日 9:00-18:00 / 土曜 9:00-17:00',
    holidays: '日曜・祝日・年末年始'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              企業情報
            </h1>
            <p className="text-xl text-gray-700">
              半世紀にわたる技術と信頼で、未来のモビリティを支えます
            </p>
          </div>
        </motion.div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-20 z-40 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-2 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {activeTab === 'overview' && (
        <motion.section
          key="overview"
          {...fadeInUp}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Company Name Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 bg-gradient-to-r from-primary to-accent p-8 rounded-2xl shadow-2xl text-white"
              >
                <h2 className="text-4xl font-bold mb-4">{companyInfo.name}</h2>
                <p className="text-xl opacity-90">FirstGear - Automotive Excellence Since 1973</p>
              </motion.div>

              {/* Info Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                    <FaBuilding className="mr-3" />
                    基本情報
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FaMapMarkerAlt className="text-accent mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-700">本社</p>
                        <p className="text-gray-600">{companyInfo.headquarters}</p>
                        <p className="text-sm text-gray-500 mt-1">出荷拠点：{companyInfo.branches.join('・')}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaPhone className="text-accent mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-gray-600">TEL: {companyInfo.tel} (代)</p>
                        <p className="text-gray-600">FAX: {companyInfo.fax}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaCalendarAlt className="text-accent mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-700">設立</p>
                        <p className="text-gray-600">{companyInfo.established}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                    <FaChartLine className="mr-3" />
                    経営情報
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FaYenSign className="text-accent mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-700">資本金</p>
                        <p className="text-gray-600">{companyInfo.capital}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaUsers className="text-accent mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-700">従業員数</p>
                        <p className="text-gray-600">{companyInfo.employees}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaAward className="text-accent mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-700">代表者</p>
                        <p className="text-gray-600">{companyInfo.ceo}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Business Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                  <FaIndustry className="mr-3" />
                  事業内容
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {companyInfo.business.map((item, index) => (
                    <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}

      {activeTab === 'history' && (
        <motion.section
          key="history"
          {...fadeInUp}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">沿革</h2>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

                {/* Timeline Items */}
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex items-start mb-8"
                  >
                    {/* Icon */}
                    <div className="absolute left-4 w-8 h-8 bg-white border-4 border-primary rounded-full flex items-center justify-center z-10">
                      <div className="text-primary text-sm">{item.icon}</div>
                    </div>

                    {/* Content */}
                    <div className="ml-20 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-bold text-white bg-gradient-to-r from-primary to-accent px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {activeTab === 'philosophy' && (
        <motion.section
          key="philosophy"
          {...fadeInUp}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {philosophy.vision}
                </h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  {philosophy.mission}
                </p>
              </motion.div>

              {/* SDGs */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-center mb-8">持続可能な開発目標への取り組み</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {philosophy.sdgs.map((sdg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all hover:transform hover:scale-105"
                    >
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                          {sdg.number}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2 text-gray-800">{sdg.title}</h4>
                          <p className="text-gray-600">{sdg.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Core Values */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-12"
              >
                <h3 className="text-3xl font-bold text-center mb-8">私たちの約束</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-4xl mb-4">🔧</div>
                    <h4 className="font-bold text-lg mb-2">技術革新</h4>
                    <p className="text-gray-600">最新技術で品質向上を追求</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-4xl mb-4">🌍</div>
                    <h4 className="font-bold text-lg mb-2">環境配慮</h4>
                    <p className="text-gray-600">持続可能な社会の実現</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-4xl mb-4">🤝</div>
                    <h4 className="font-bold text-lg mb-2">信頼構築</h4>
                    <p className="text-gray-600">お客様との長期的な関係</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}

      {activeTab === 'access' && (
        <motion.section
          key="access"
          {...fadeInUp}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">アクセス</h2>

              {/* Map Container */}
              <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.8899999999996!2d135.48333333333334!3d34.48333333333334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDI5JzAwLjAiTiAxMzXCsDI5JzAwLjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
              </div>

              {/* Access Information */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Address & Contact */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-xl p-8"
                >
                  <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                    <FaMapMarkerAlt className="mr-3" />
                    所在地
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">本社・工場</p>
                      <p className="text-gray-600 text-lg">{accessInfo.address}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">お問い合わせ</p>
                      <div className="space-y-2">
                        <p className="text-gray-600 flex items-center">
                          <FaPhone className="mr-2 text-accent" />
                          TEL: {companyInfo.tel} (代)
                        </p>
                        <p className="text-gray-600 flex items-center">
                          <FaEnvelope className="mr-2 text-accent" />
                          FAX: {companyInfo.fax}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Transportation */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-xl p-8"
                >
                  <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                    <FaTrain className="mr-3" />
                    交通アクセス
                  </h3>
                  <div className="space-y-4">
                    {accessInfo.nearestStation.map((station, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-700">{station.line}</p>
                            <p className="text-gray-600">{station.station}</p>
                            <p className="text-sm text-accent mt-1">{station.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-blue-700 flex items-center">
                        <FaCar className="mr-2" />
                        駐車場：{accessInfo.parking}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-center">営業時間</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-3xl mb-3">🕐</div>
                    <h4 className="font-bold text-lg mb-2">営業時間</h4>
                    <p className="text-gray-600">{accessInfo.businessHours}</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-3xl mb-3">📅</div>
                    <h4 className="font-bold text-lg mb-2">定休日</h4>
                    <p className="text-gray-600">{accessInfo.holidays}</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-3xl mb-3">📞</div>
                    <h4 className="font-bold text-lg mb-2">お問い合わせ</h4>
                    <p className="text-gray-600">お気軽にお電話ください</p>
                  </div>
                </div>
              </motion.div>

              {/* Directions Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 text-center"
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=大阪府堺市南区金室978-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  <FaDirections className="text-xl" />
                  Google Mapsで経路を検索
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              共に未来を創造しませんか
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              FirstGearは、革新的な技術と情熱を持った仲間を求めています
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => router.push('/recruitment')}
                className="px-8 py-3 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                採用情報を見る
              </button>
              <button
                onClick={() => router.push('/contact')}
                className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                お問い合わせ
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CompanyPage