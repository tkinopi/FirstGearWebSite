'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
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
      title: 'オルタネーター',
      description: '発電機として車両の電力を供給する重要な部品',
      warranty: '保証期間：2年または40,000km',
      features: ['完全分解整備', '新品部品使用', '性能テスト実施'],
      image: '/images/car_alternator.png',
      imageType: 'file',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: '高出力オルタネーター',
      description: '高負荷車両向けの強化型発電機',
      warranty: '保証期間：1年または20,000km',
      features: ['高出力対応', 'コイル強化', '冷却性能向上'],
      image: '/images/car_alternator.png',
      imageType: 'file',
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'スターター',
      description: 'エンジン始動時に必要不可欠なセルモーター',
      warranty: '保証期間：2年または40,000km',
      features: ['ブラシ新品交換', 'コミテータ研磨', '作動テスト済み'],
      image: '/images/car_starter.png',
      imageType: 'file',
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'コンプレッサー',
      description: 'エアコンシステムの心臓部となる冷媒圧縮機',
      warranty: '保証期間：1年または20,000km',
      features: ['シール類新品', '冷媒充填テスト', '圧力テスト実施'],
      image: '/images/car_compressor.png',
      imageType: 'file',
      color: 'from-cyan-500 to-cyan-700'
    },
    {
      title: 'ディストリビューター',
      description: '点火タイミングを制御する重要な部品',
      warranty: '保証期間：2年または40,000km',
      features: ['接点研磨', 'ベアリング交換', 'タイミング調整'],
      image: '/images/car_distributor.png',
      imageType: 'file',
      color: 'from-orange-500 to-orange-700'
    },
    {
      title: 'DPF触媒',
      description: 'ディーゼル車の排気ガス浄化装置',
      warranty: '保証期間：1年（運輸業除く）',
      features: ['触媒洗浄', '詰まり除去', '性能復元'],
      image: '/images/car_dpf.png',
      imageType: 'file',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      title: 'インジェクター',
      description: '燃料噴射を制御する精密部品',
      warranty: '保証期間：1年（運輸業除く）',
      features: ['ノズル交換', '噴射パターン調整', '燃圧テスト'],
      image: '/images/car_injector.png',
      imageType: 'file',
      color: 'from-red-500 to-red-700'
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

  const remanufacturingProcess = [
    { step: '受入検査', description: '詳細な初期診断と状態確認', icon: '📋' },
    { step: '分解・洗浄', description: '専用設備による完全分解と洗浄', icon: '🔧' },
    { step: '部品検査', description: '摩耗部品の交換と精密測定', icon: '🔍' },
    { step: '組立・調整', description: '熟練技術者による精密組立', icon: '⚙️' },
    { step: '性能検査', description: '実負荷テストによる性能確認', icon: '✅' },
    { step: '出荷', description: '厳格な最終検査後、迅速配送', icon: '📦' }
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
              製品を新品に交換します。これらの工程をクリアした製品のみを専用の白いプロダクツボックスで出荷をしています。
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
              自動車電装品のスペシャリストとして、幅広い製品を取り扱っています
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
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover w-full h-full"
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
      <section className="py-20">
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
      </section>

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
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors">
                製品カタログダウンロード
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

export default ProductsPage