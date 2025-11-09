'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { FaTools, FaRecycle, FaLeaf, FaShieldAlt, FaGlobe, FaCheckCircle, FaAward, FaIndustry } from 'react-icons/fa'

const ProductsPage = () => {
  const router = useRouter()

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const productCategories = [
    {
      title: 'マニュアルトランスミッション（MT）',
      description: '2~10トン超車両対応の手動変速機',
      warranty: '対応メーカー：いすゞ、日野、三菱ふそう',
      features: ['完全分解整備', '長期使用前提', 'フルオーバーホール'],
      image: '/images/transmission_2tMT.png',
      imageType: 'file',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'オートマチックトランスミッション（AT）',
      description: '2~10トン超車両対応の自動変速機',
      warranty: '対応メーカー：いすゞ、日野、三菱ふそう',
      features: ['電子制御対応', '精密調整', '性能テスト実施'],
      image: '/images/transmission_2tAT.png',
      imageType: 'file',
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'スムーサー',
      description: 'いすゞのAMT（自動MT）システム',
      warranty: '対応メーカー：いすゞ',
      features: ['AMT専門技術', '電子制御対応', '完全整備'],
      image: '/images/smoother.png',
      imageType: 'file',
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'デュオニック',
      description: '日野のAMT（自動MT）システム',
      warranty: '対応メーカー：日野',
      features: ['AMT専門技術', '電子制御対応', '完全整備'],
      image: '/images/DUONIC.png',
      imageType: 'file',
      color: 'from-cyan-500 to-cyan-700'
    },
    {
      title: 'GSU（ギアシフトユニット）',
      description: '三菱ふそうのAMT（自動MT）システム',
      warranty: '対応メーカー：三菱ふそう',
      features: ['AMT専門技術', '電子制御対応', '分解'],
      image: '/images/GSU.png',
      imageType: 'file',
      color: 'from-orange-500 to-orange-700'
    }
  ]

  const qualityFeatures = [
    {
      icon: <FaTools className="text-4xl text-primary" />,
      title: '完全分解整備',
      description: 'すべての部品を分解し、摩耗状態を徹底的に検査。必要に応じて新品部品に交換します。'
    },
    {
      icon: <FaRecycle className="text-4xl text-green-500" />,
      title: '環境への配慮',
      description: '資源の有効活用により、CO2削減と環境保護に貢献。持続可能なものづくりを実践します。'
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-500" />,
      title: '品質保証',
      description: '新品同等の性能と耐久性を実現。全製品に保証書を発行し、安心してご利用いただけます。'
    },
    {
      icon: <FaGlobe className="text-4xl text-purple-500" />,
      title: 'グローバル対応',
      description: '国内外の幅広い車種に対応。豊富な在庫と全国ネットワークで迅速に対応します。'
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
              製品について
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              当社リビルト製品は全て新品と同等の機能を有しています。コア（中古部品）を完全分解し、洗浄したのち、各部を点検、清拭しており、
              製品を新品に交換します。
            </p>
            <p className="text-lg text-gray-600">
              実際した製品はごとに専用の検査機器を使用してベンチテストを行い工場出荷前に異常がないことを確認の上で数に載せた品質の保証を行っているものの中、
              各お客様のもとへ出荷いたします。製品外装に関しましても品質をお客様のもとへお届けしたいと。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">取扱商品</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              2~10トン超車両のトランスミッション専門。いすゞ、日野、などに対応
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productCategories.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:transform hover:scale-105"
              >
                <div className={`h-32 bg-gradient-to-r ${product.color} flex items-center justify-center relative overflow-hidden`}>
                  {product.imageType === 'file' ? (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="text-6xl">{product.image}</div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="mb-4">
                    <p className="text-xs text-accent font-semibold mb-2">{product.warranty}</p>
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600 mb-1">
                        <FaCheckCircle className="text-green-500 mr-2 text-xs" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">FirstGearの品質へのこだわり</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              半世紀にわたる経験と最新技術で、お客様に最高品質をお届けします
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Remanufacturing Process */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">リビルト工程</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              厳格な品質管理のもと、6つのステップで確実な再生を実現
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remanufacturingProcess.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">{process.icon}</div>
                    <h3 className="text-lg font-bold mb-2">{process.step}</h3>
                    <p className="text-gray-600 text-sm">{process.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Certifications & Standards */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              {...fadeInUp}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">認証・規格</h2>
              <p className="text-gray-700 text-lg">
                国際規格に基づく品質管理システムで、世界基準の製品をお届けしています
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <FaAward className="text-5xl text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">ISO9001認証</h3>
                <p className="text-gray-600">品質マネジメントシステムの国際規格を取得</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <FaIndustry className="text-5xl text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">自動車整備認証</h3>
                <p className="text-gray-600">国土交通省認定の自動車整備工場</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <FaLeaf className="text-5xl text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">環境認証</h3>
                <p className="text-gray-600">環境に配慮したリサイクル事業者として認定</p>
              </motion.div>
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
              製品に関するお問い合わせ
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              豊富な在庫と専門知識でお客様のニーズにお応えします
            </p>
            <button
              onClick={() => router.push('/contact')}
              className="px-8 py-3 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              お問い合わせ
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage