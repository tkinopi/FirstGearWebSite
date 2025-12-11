'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaGlobeAsia, FaRecycle, FaCogs, FaUsers, FaRocket } from 'react-icons/fa'
import HeroSlideshow from '@/components/HeroSlideshow'

export default function Home() {
  const services = [
    {
      title: 'マニュアル(MT)',
      description: '高精度なマニュアルトランスミッションのリビルト',
      icon: <FaCogs />,
      image: '/images/transmission_mt.png',
    },
    {
      title: 'スムーサー',
      description: '商用車向けスムーサーのリビルト',
      icon: <FaCogs />,
      image: '/images/transmission_smoother.png',
    },
    {
      title: 'GSU/デュオニック',
      description: '先進のデュアルクラッチトランスミッションのリビルト',
      icon: <FaCogs />,
      image: '/images/transmission_gsu.png',
    },
  ]

  const features = [
    { title: '高品質保証', description: '厳格な品質管理体制' },
    { title: '環境配慮', description: 'SDGsへの積極的な取り組み' },
    { title: 'グローバル展開', description: 'バングラデシュを中心に海外展開' },
    { title: '技術研修', description: '国際的な技術者育成プログラム' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        
        <div className="relative z-10 text-center text-white container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            なおす、
            <br />
            とどける、
            <br />
            <span className="heading-gradient">みらいへつなぐ。</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            自動車マニュアルトランスミッションリビルト事業から世界へ
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="#services" className="btn-primary">
              事業内容を見る
            </Link>
            <Link href="#contact" className="btn-secondary">
              お問い合わせ
            </Link>
          </motion.div>
        </div>
        
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              リビルト事業
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              高品質なトランスミッションのリビルトを通じて、
              持続可能な社会に貢献します
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white text-4xl">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <button className="mt-4 text-primary font-semibold hover:text-secondary transition-colors">
                    詳細を見る →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              私たちの強み
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              FirstGearが選ばれる理由
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="text-4xl text-primary mb-4">
                  <FaCheckCircle />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Section */}
      {/* <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl text-accent mb-6">
                <FaGlobeAsia />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                海外事業展開
              </h2>
              <p className="text-lg mb-6 text-gray-300">
                バングラデシュを中心に、アジア各国への技術移転と
                人材育成を通じて、グローバルなビジネス展開を進めています。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-accent" />
                  <span>技術研修プログラム</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRocket className="text-accent" />
                  <span>国際パートナーシップ</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/abroad.png"
                alt="Global Business"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              一緒に未来を創りませんか？
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              FirstGearでは、意欲的な人材を募集しています。
              あなたのスキルを活かして、一緒に成長しましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/recruitment" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all">
                採用情報を見る
              </Link>
              <Link href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all">
                お問い合わせ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}