'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { FaCogs, FaCheckCircle, FaShieldAlt, FaTruck } from 'react-icons/fa'

const RebuiltPage = () => {
  const router = useRouter()

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const services = [
    {
      icon: <FaTruck />,
      title: '対応車両',
      description: '2トン・4トン車両のトランスミッション専門。主要3メーカーに対応。',
      features: ['いすゞ', '日野', '三菱ふそう', 'その他要相談']
    },
    {
      icon: <FaCogs />,
      title: '対応トランスミッション',
      description: 'MT・AT・AMTなど、各種トランスミッションに幅広く対応。',
      features: ['マニュアル(MT)', 'オートマチック(AT)', 'スムーサー', 'GSU/デュオニック']
    },
    {
      icon: <FaShieldAlt />,
      title: '専門特化の強み',
      description: 'トランスミッションリビルト専門だからこそ実現できる高品質と信頼性。',
      features: ['専門技術の蓄積', '豊富な実績', '厳格な品質管理', '迅速な対応']
    }
  ]

  const process = [
    { number: '01', title: '受入検査', description: '詳細な初期診断と状態確認', image: '/images/acceptance_inspection.png' },
    { number: '02', title: '分解・洗浄', description: '専用設備による完全分解と洗浄', image: '/images/washing.png' },
    { number: '03', title: '部品検査・交換', description: '摩耗部品の交換と精密測定', image: '/images/parts_inspection_and_exchange.png' },
    { number: '04', title: '組立・調整', description: '熟練技術者による精密組立', image: '/images/assembly_adjustment.png' },
    { number: '05', title: '性能検査', description: '実負荷テストによる性能確認', image: '/images/performance_inspection.png' },
    { number: '06', title: '出荷', description: '厳格な最終検査後、迅速配送', image: '/images/shipping.png' }
  ]

  const benefits = [
    {
      icon: <FaShieldAlt className="text-4xl text-primary" />,
      title: 'フルオーバーホール',
      description: '長く使用することを前提とした徹底的な整備。\n新品同等の性能と耐久性を実現。'
    },
    {
      icon: <FaCheckCircle className="text-4xl text-green-500" />,
      title: '充実のアフターフォロー',
      description: '納品後のフォローもしっかり対応。\n安心して長くご使用いただけます。'
    },
    {
      icon: <FaTruck className="text-4xl text-blue-500" />,
      title: '迅速対応',
      description: '豊富な在庫と全国ネットワークによる即日発送体制。'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              リビルト事業
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              2トン・4トントラックのトランスミッションリビルト専門。
              いすゞ、日野、三菱ふそうに特化した専門技術で、確かな品質をお届けします。
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors">
                カタログダウンロード
              </button>
              <button
                onClick={() => router.push('/contact')}
                className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                お問い合わせ
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">トランスミッションリビルト専門</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              2トン・4トントラック（いすゞ・日野・三菱ふそう）に特化した専門サービス
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="text-5xl text-primary mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">リビルトプロセス</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              厳格な品質管理のもと、6つのステップで確実な再生を実現
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">FirstGearの強み</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              お客様に選ばれる3つの理由
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">{benefit.description}</p>
              </motion.div>
            ))}
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
              リビルト製品のご相談はお気軽に
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              専門スタッフが最適なリビルトソリューションをご提案いたします
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors">
                見積もり依頼
              </button>
              <button
                onClick={() => router.push('/contact')}
                className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                技術資料請求
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default RebuiltPage