import { motion } from 'framer-motion'
import { Code, Megaphone, Settings, PiggyBank } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Investment.css'

function Investment() {
  const { t } = useLanguage()

  const investments = [
    {
      icon: Code,
      title: t('investment.dev.title'),
      amount: t('investment.dev.amount'),
      description: t('investment.dev.desc'),
      details: [
        t('investment.dev.d1'),
        t('investment.dev.d2'),
        t('investment.dev.d3'),
        t('investment.dev.d4')
      ]
    },
    {
      icon: Megaphone,
      title: t('investment.marketing.title'),
      amount: t('investment.marketing.amount'),
      description: t('investment.marketing.desc'),
      details: [
        t('investment.marketing.d1'),
        t('investment.marketing.d2'),
        t('investment.marketing.d3'),
        t('investment.marketing.d4')
      ]
    },
    {
      icon: Settings,
      title: t('investment.operations.title'),
      amount: t('investment.operations.amount'),
      description: t('investment.operations.desc'),
      details: [
        t('investment.operations.d1'),
        t('investment.operations.d2'),
        t('investment.operations.d3'),
        t('investment.operations.d4')
      ]
    },
    {
      icon: PiggyBank,
      title: t('investment.reserve.title'),
      amount: t('investment.reserve.amount'),
      description: t('investment.reserve.desc'),
      details: [
        t('investment.reserve.d1'),
        t('investment.reserve.d2'),
        t('investment.reserve.d3'),
        t('investment.reserve.d4')
      ]
    }
  ]

  return (
    <div className="section investment-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('investment.title')}</h2>
          <p className="section-subtitle">
            {t('investment.subtitle')}
          </p>
        </motion.div>

        <div className="investment-grid">
          {investments.map((investment, index) => (
            <motion.div
              key={index}
              className="investment-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="investment-icon">
                <investment.icon size={36} />
              </div>
              <div className="investment-amount">{investment.amount}</div>
              <h3>{investment.title}</h3>
              <p className="investment-desc">{investment.description}</p>
              <div className="investment-details">
                {investment.details.map((detail, idx) => (
                  <div key={idx} className="detail-item">
                    <span className="detail-bullet">•</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Investment
