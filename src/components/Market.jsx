import { motion } from 'framer-motion'
import { Target, TrendingUp, Globe, Users } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Market.css'

function Market() {
  const { t } = useLanguage()

  const marketData = [
    {
      icon: Users,
      stat: t('market.stat1'),
      label: t('market.stat1Label')
    },
    {
      icon: TrendingUp,
      stat: t('market.stat2'),
      label: t('market.stat2Label')
    },
    {
      icon: Globe,
      stat: t('market.stat3'),
      label: t('market.stat3Label')
    }
  ]

  const targetAudience = [
    t('market.target1'),
    t('market.target2'),
    t('market.target3'),
    t('market.target4'),
    t('market.target5'),
    t('market.target6')
  ]

  return (
    <div className="section market-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('market.title')}</h2>
          <p className="section-subtitle">
            {t('market.subtitle')}
          </p>
        </motion.div>

        <div className="market-stats">
          {marketData.map((item, index) => (
            <motion.div
              key={index}
              className="market-stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="market-icon">
                <item.icon size={40} />
              </div>
              <h3>{item.stat}</h3>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="market-content">
          <motion.div
            className="target-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="target-icon-wrapper">
              <Target size={50} />
            </div>
            <h3>{t('market.targetTitle')}</h3>
            <div className="target-list">
              {targetAudience.map((item, index) => (
                <motion.div
                  key={index}
                  className="target-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <span className="check-mark">✓</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="opportunity-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>{t('market.whyTitle')}</h3>
            <div className="opportunity-points">
              <div className="opportunity-point">
                <h4>{t('market.why1Title')}</h4>
                <p>{t('market.why1Text')}</p>
              </div>
              <div className="opportunity-point">
                <h4>{t('market.why2Title')}</h4>
                <p>{t('market.why2Text')}</p>
              </div>
              <div className="opportunity-point">
                <h4>{t('market.why3Title')}</h4>
                <p>{t('market.why3Text')}</p>
              </div>
              <div className="opportunity-point">
                <h4>{t('market.why4Title')}</h4>
                <p>{t('market.why4Text')}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="market-conclusion"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3>{t('market.conclusionTitle')}</h3>
          <p>
            {t('market.conclusionText')}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Market
