'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  FaEnvelope, FaPhone, FaFax, FaMapMarkerAlt, FaClock, FaCalendarAlt,
  FaUser, FaBuilding, FaPaperPlane, FaCheckCircle, FaInfoCircle,
  FaShoppingCart, FaHandshake, FaQuestionCircle, FaFileAlt
} from 'react-icons/fa'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    inquiryType: '',
    companyName: '',
    department: '',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacyAgreed: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const inquiryTypes = [
    { value: 'product', label: '製品に関するお問い合わせ', icon: <FaShoppingCart /> },
    { value: 'quote', label: '見積もり依頼', icon: <FaFileAlt /> },
    { value: 'business', label: '取引に関するお問い合わせ', icon: <FaHandshake /> },
    { value: 'recruitment', label: '採用に関するお問い合わせ', icon: <FaUser /> },
    { value: 'other', label: 'その他', icon: <FaQuestionCircle /> }
  ]

  const contactInfo = {
    phone: '072-298-9273',
    fax: '072-298-9274',
    email: 'info@firstgear.co.jp',
    address: '〒590-0138 大阪府堺市南区金室978-1',
    businessHours: '平日 9:00-18:00 / 土曜 9:00-17:00',
    holidays: '日曜・祝日・年末年始'
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const quickActions = [
    {
      title: 'カタログダウンロード',
      description: '製品カタログをPDFでダウンロード',
      icon: <FaFileAlt className="text-3xl text-blue-500" />,
      action: 'ダウンロード'
    },
    {
      title: '見積もり依頼',
      description: 'オンラインで簡単見積もり',
      icon: <FaShoppingCart className="text-3xl text-green-500" />,
      action: '見積もり'
    },
    {
      title: '技術サポート',
      description: '技術的なご質問にお答えします',
      icon: <FaQuestionCircle className="text-3xl text-purple-500" />,
      action: 'サポート'
    }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center p-12"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <FaCheckCircle className="text-white text-3xl" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">送信完了</h1>
          <p className="text-xl text-gray-600 mb-8">
            お問い合わせありがとうございます。<br />
            内容を確認の上、2-3営業日以内にご連絡いたします。
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                inquiryType: '',
                companyName: '',
                department: '',
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                privacyAgreed: false
              })
            }}
            className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            新しいお問い合わせ
          </button>
        </motion.div>
      </div>
    )
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
              お問い合わせ
            </h1>
            <p className="text-xl text-gray-700">
              ご質問やご相談など、お気軽にお問い合わせください
            </p>
          </div>
        </motion.div>
      </section>

      {/* Quick Actions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            {...fadeInUp}
            className="text-2xl font-bold text-center mb-8"
          >
            よくご利用いただくサービス
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="mb-4 flex justify-center">{action.icon}</div>
                <h3 className="text-lg font-bold mb-2">{action.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{action.description}</p>
                <button className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-lg transition-all">
                  {action.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                {...fadeInUp}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h2 className="text-3xl font-bold mb-8 text-center">お問い合わせフォーム</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      お問い合わせ種別 <span className="text-red-500">*</span>
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {inquiryTypes.map((type) => (
                        <label key={type.value} className="flex items-center">
                          <input
                            type="radio"
                            name="inquiryType"
                            value={type.value}
                            checked={formData.inquiryType === type.value}
                            onChange={handleInputChange}
                            className="mr-3"
                            required
                          />
                          <span className="flex items-center gap-2">
                            {type.icon}
                            {type.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Company Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        会社名
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        placeholder="株式会社○○"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        部署名
                      </label>
                      <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        placeholder="営業部"
                      />
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        placeholder="山田 太郎"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        placeholder="example@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="090-1234-5678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      件名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="お問い合わせの件名"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
                      placeholder="お問い合わせの詳細をご記入ください"
                      required
                    />
                  </div>

                  {/* Privacy Agreement */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="privacyAgreed"
                        checked={formData.privacyAgreed}
                        onChange={handleInputChange}
                        className="mt-1 mr-3"
                        required
                      />
                      <span className="text-sm text-gray-700">
                        <span className="text-red-500">*</span>
                        <a href="#" className="text-primary hover:underline">プライバシーポリシー</a>
                        に同意の上、送信します
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        送信中...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        送信する
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary">お電話でのお問い合わせ</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaPhone className="text-accent mr-3 text-xl" />
                    <div>
                      <p className="font-semibold">TEL</p>
                      <p className="text-2xl font-bold text-primary">{contactInfo.phone}</p>
                      <p className="text-sm text-gray-600">(代表)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaFax className="text-accent mr-3 text-xl" />
                    <div>
                      <p className="font-semibold">FAX</p>
                      <p className="text-lg text-gray-700">{contactInfo.fax}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="text-accent mr-3 text-xl" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-lg text-primary">{contactInfo.email}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary">営業時間</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaClock className="text-accent mr-3 text-xl" />
                    <div>
                      <p className="font-semibold">受付時間</p>
                      <p className="text-gray-700">{contactInfo.businessHours}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-accent mr-3 text-xl" />
                    <div>
                      <p className="font-semibold">定休日</p>
                      <p className="text-gray-700">{contactInfo.holidays}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary">所在地</h3>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-accent mr-3 text-xl mt-1" />
                  <div>
                    <p className="font-semibold">本社・工場</p>
                    <p className="text-gray-700">{contactInfo.address}</p>
                    <button className="mt-3 text-primary hover:text-accent transition-colors text-sm font-semibold">
                      → アクセス詳細
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Notice */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-blue-50 rounded-2xl p-6"
              >
                <div className="flex items-start">
                  <FaInfoCircle className="text-blue-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">お問い合わせについて</h4>
                    <p className="text-blue-700 text-sm">
                      緊急のお問い合わせは、お電話にてご連絡ください。
                      メールでのお問い合わせは、2-3営業日以内にご返信いたします。
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage