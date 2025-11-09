'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  FaUsers, FaHome, FaClock, FaYenSign,
  FaHeart, FaTools, FaCheckCircle, FaArrowRight, FaGraduationCap
} from 'react-icons/fa'

const RecruitmentPage = () => {
  const router = useRouter()

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const positions = [
    {
      title: '製造スタッフ（アルバイト）',
      department: '製造部門',
      description: 'トランスミッションのリビルト作業における分解、洗浄、組立作業を行います。未経験でも丁寧に指導しますので、安心してご応募ください。',
      requirements: [
        '週3日以上勤務可能な方',
        '体力に自信のある方',
        '細かい作業が得意な方',
        '未経験者歓迎（丁寧に指導します）'
      ],
      number: '若干名'
    }
  ]

  const benefits = [
    { icon: <FaYenSign />, title: '時給', detail: '時給1,200円〜（経験・能力により優遇）' },
    { icon: <FaClock />, title: '勤務時間', detail: '9:00〜18:00の間で応相談（週3日以上、1日4時間〜OK）' },
    { icon: <FaHome />, title: '勤務日', detail: 'シフト制（平日・土曜勤務できる方歓迎）' },
    { icon: <FaHeart />, title: '福利厚生', detail: '交通費支給、労災保険、雇用保険（条件を満たす場合）' },
    { icon: <FaTools />, title: '作業環境', detail: '冷暖房完備の工場、作業着貸与' },
    { icon: <FaGraduationCap />, title: '未経験OK', detail: '丁寧な指導で技術が身につきます' }
  ]

  const values = [
    {
      icon: <FaTools className="text-4xl text-blue-500" />,
      title: '技術が身につく',
      description: 'トランスミッションリビルトの専門技術を基礎から学べます'
    },
    {
      icon: <FaUsers className="text-4xl text-green-500" />,
      title: '働きやすい環境',
      description: 'シフトは柔軟に相談可能。学生やWワーク希望の方も歓迎'
    },
    {
      icon: <FaHeart className="text-4xl text-red-500" />,
      title: '丁寧な指導',
      description: '未経験でも安心。先輩スタッフが丁寧に教えます'
    },
    {
      icon: <FaCheckCircle className="text-4xl text-purple-500" />,
      title: '安定した仕事',
      description: '需要が安定しており、長く働ける職場です'
    }
  ]

  const recruitmentProcess = [
    { step: '01', title: 'エントリー', description: '電話またはお問い合わせフォームからご連絡' },
    { step: '02', title: '面接', description: '工場見学を兼ねた面接（履歴書持参）' },
    { step: '03', title: '採用決定', description: '勤務開始日を調整' }
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
              アルバイト募集
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              トランスミッションリビルトの製造スタッフを募集中！
            </p>
            <p className="text-lg text-gray-600">
              未経験OK！丁寧に指導します
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
            FirstGearで働く魅力
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

      {/* Job Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold text-center mb-12"
          >
            募集職種
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
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
                  応募する
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

      {/* Recruitment Process */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold text-center mb-12"
          >
            応募の流れ
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {recruitmentProcess.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
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
              一緒に働きませんか？
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              未経験でも大歓迎！技術が身につく、やりがいのある仕事です
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => router.push('/contact')}
                className="px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-gray-100 transition-colors text-lg"
              >
                応募する
              </button>
              <a
                href="tel:06-6676-7002"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-primary transition-colors text-lg inline-block"
              >
                電話で問い合わせ
              </a>
            </div>
            <p className="text-white/70 text-sm mt-8">
              お問い合わせ：06-6676-7002（採用担当）
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default RecruitmentPage