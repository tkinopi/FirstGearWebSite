'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  FaUserTie, FaGraduationCap, FaBriefcase, FaChartLine, FaUsers,
  FaLightbulb, FaHandshake, FaAward, FaHome, FaClock, FaYenSign,
  FaHeart, FaRocket, FaGlobeAsia, FaTools, FaCheckCircle, FaArrowRight
} from 'react-icons/fa'

const RecruitmentPage = () => {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState<'newgrad' | 'career' | 'parttime'>('newgrad')

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const jobCategories = [
    { id: 'newgrad', label: '新卒採用', icon: <FaGraduationCap /> },
    { id: 'career', label: '中途採用', icon: <FaBriefcase /> },
    { id: 'parttime', label: 'パート・アルバイト', icon: <FaClock /> }
  ]

  const positions = {
    newgrad: [
      {
        title: '技術職（リビルトエンジニア）',
        department: '製造部門',
        description: '自動車部品のリビルト作業、品質検査、技術開発に携わります。',
        requirements: [
          '2025年3月卒業予定の方',
          '機械工学、電気工学、自動車工学等を専攻',
          '自動車整備士資格があれば尚可',
          'ものづくりへの情熱がある方'
        ],
        number: '5名'
      },
      {
        title: '営業職',
        department: '営業部門',
        description: '国内外の顧客への製品提案、新規開拓、既存顧客のフォローを担当します。',
        requirements: [
          '2025年3月卒業予定の方',
          '学部学科不問',
          'コミュニケーション能力の高い方',
          '海外志向のある方歓迎'
        ],
        number: '3名'
      }
    ],
    career: [
      {
        title: 'リビルトマネージャー',
        department: '製造部門',
        description: '製造ラインの管理、品質管理、工程改善を主導します。',
        requirements: [
          '製造業での実務経験3年以上',
          'マネジメント経験があれば尚可',
          '自動車業界経験者優遇',
          'ISO9001等の品質管理知識'
        ],
        number: '2名'
      },
      {
        title: '海外事業担当',
        department: '海外事業部',
        description: 'バングラデシュを中心とした海外拠点の運営、現地スタッフの教育を担当します。',
        requirements: [
          'ビジネスレベルの英語力',
          '海外勤務経験または海外出張可能な方',
          '異文化コミュニケーション能力',
          '製造業経験があれば尚可'
        ],
        number: '1名'
      },
      {
        title: '品質管理エンジニア',
        department: '品質保証部',
        description: '製品の品質検査、検査基準の策定、品質改善活動を推進します。',
        requirements: [
          '品質管理経験2年以上',
          '自動車部品の知識',
          'ISO/TS16949の知識があれば尚可',
          '分析力と問題解決能力'
        ],
        number: '2名'
      }
    ],
    parttime: [
      {
        title: '製造スタッフ',
        department: '製造部門',
        description: '自動車部品の分解、洗浄、組立作業を行います。',
        requirements: [
          '週3日以上勤務可能な方',
          '体力に自信のある方',
          '細かい作業が得意な方',
          '未経験者歓迎'
        ],
        number: '若干名'
      }
    ]
  }

  const benefits = [
    { icon: <FaYenSign />, title: '給与', detail: '新卒：月給22万円〜 / 中途：経験・能力により優遇' },
    { icon: <FaClock />, title: '勤務時間', detail: '8:30〜17:30（実働8時間）' },
    { icon: <FaHome />, title: '休日休暇', detail: '週休2日制、年間休日120日、有給休暇、特別休暇' },
    { icon: <FaHeart />, title: '福利厚生', detail: '社会保険完備、退職金制度、社員旅行、資格取得支援' },
    { icon: <FaGraduationCap />, title: '教育制度', detail: '新人研修、OJT、外部研修、海外研修制度' },
    { icon: <FaAward />, title: '評価制度', detail: '年2回の賞与、昇給年1回、成果報酬制度' }
  ]

  const values = [
    {
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
      title: '革新への挑戦',
      description: '常に新しい技術と手法を追求し、業界をリードする存在を目指します'
    },
    {
      icon: <FaUsers className="text-4xl text-blue-500" />,
      title: 'チームワーク',
      description: '多様な個性を尊重し、協力して最高の成果を生み出します'
    },
    {
      icon: <FaGlobeAsia className="text-4xl text-green-500" />,
      title: 'グローバル視点',
      description: '世界を舞台に活躍し、国際的な視野を持って事業を展開します'
    },
    {
      icon: <FaRocket className="text-4xl text-purple-500" />,
      title: '成長機会',
      description: '個人の成長が会社の成長に繋がる環境を提供します'
    }
  ]

  const recruitmentProcess = [
    { step: '01', title: 'エントリー', description: '応募フォームまたは電話でお申し込み' },
    { step: '02', title: '書類選考', description: '履歴書・職務経歴書による選考' },
    { step: '03', title: '一次面接', description: '人事担当者との面談（オンライン可）' },
    { step: '04', title: '二次面接', description: '部門責任者との面談' },
    { step: '05', title: '最終面接', description: '役員面接' },
    { step: '06', title: '内定', description: '条件提示・入社日調整' }
  ]

  const employeeVoices = [
    {
      name: '田中 太郎',
      position: 'リビルトエンジニア',
      years: '入社3年目',
      message: '最新の技術を学びながら、環境に配慮したものづくりに携われることにやりがいを感じています。先輩たちの技術力が高く、日々成長を実感できる環境です。',
      image: '👨‍🔧'
    },
    {
      name: '佐藤 花子',
      position: '営業職',
      years: '入社5年目',
      message: '顧客の課題を解決する提案ができた時の達成感は格別です。海外出張の機会もあり、グローバルな視点で仕事ができるのが魅力です。',
      image: '👩‍💼'
    },
    {
      name: '鈴木 次郎',
      position: '品質管理',
      years: '入社7年目',
      message: '品質へのこだわりが強い会社で、自分の提案で工程が改善された時は大きなやりがいを感じます。資格取得支援も充実しています。',
      image: '👨‍🔬'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              採用情報
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              FirstGearで、未来のモビリティを創造する仲間を募集しています
            </p>
            <p className="text-lg text-gray-600">
              あなたの技術と情熱が、世界を変える第一歩になる
            </p>
          </div>
        </motion.div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold text-center mb-12"
          >
            FirstGearで働く価値
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-full shadow-lg p-1">
              {jobCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-primary to-accent text-white'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Job Positions */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {positions[activeCategory].map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{position.title}</h3>
                    <p className="text-gray-500">{position.department}</p>
                  </div>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                    募集人数: {position.number}
                  </span>
                </div>
                <p className="text-gray-700 mb-6">{position.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-3">応募資格</h4>
                  {position.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <p className="text-gray-600">{req}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => router.push('/contact')}
                  className="mt-6 w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  この職種に応募する
                  <FaArrowRight />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold text-center mb-12"
          >
            待遇・福利厚生
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-xl mr-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Voices */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold text-center mb-12"
          >
            先輩社員の声
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {employeeVoices.map((voice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{voice.image}</div>
                  <h3 className="text-xl font-bold">{voice.name}</h3>
                  <p className="text-gray-500">{voice.position}</p>
                  <p className="text-sm text-accent">{voice.years}</p>
                </div>
                <p className="text-gray-700 italic">&ldquo;{voice.message}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold text-center mb-12"
          >
            選考プロセス
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-accent"></div>

              {/* Process Steps */}
              {recruitmentProcess.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'justify-end' : ''}">
                        <span className="text-2xl font-bold text-primary">{process.step}</span>
                        <h3 className="text-lg font-bold">{process.title}</h3>
                      </div>
                      <p className="text-gray-600">{process.description}</p>
                    </div>
                  </div>

                  {/* Circle on timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              あなたの挑戦を待っています
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              FirstGearで一緒に、次世代のモビリティソリューションを創造しませんか？
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => router.push('/contact')}
                className="px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-gray-100 transition-colors text-lg"
              >
                エントリーする
              </button>
              <button
                onClick={() => router.push('/contact')}
                className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-primary transition-colors text-lg"
              >
                会社説明会に参加
              </button>
            </div>
            <p className="text-white/70 text-sm mt-8">
              お問い合わせ：072-298-9273（採用担当）
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default RecruitmentPage