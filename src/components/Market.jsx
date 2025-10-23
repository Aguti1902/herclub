import { motion } from 'framer-motion'
import { Target, TrendingUp, Globe, Users } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import './Market.css'

function Market() {
  const { language } = useLanguage()
  const t = translations[language].market

  const marketData = [
    {
      icon: Users,
      stat: '+50%',
      label: t.stats.women
    },
    {
      icon: TrendingUp,
      stat: '€20B',
      label: t.stats.market
    },
    {
      icon: Globe,
      stat: 'Global',
      label: t.stats.demand
    }
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
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">
            {t.subtitle}
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
            <h3>{t.target.title}</h3>
            <div className="target-list">
              {t.target.audience.map((item, index) => (
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
            <h3>{t.why.title}</h3>
            <div className="opportunity-points">
              <div className="opportunity-point">
                <h4>{t.why.points.demand.title}</h4>
                <p>{t.why.points.demand.description}</p>
              </div>
              <div className="opportunity-point">
                <h4>{t.why.points.fragmentation.title}</h4>
                <p>{t.why.points.fragmentation.description}</p>
              </div>
              <div className="opportunity-point">
                <h4>{t.why.points.mentalHealth.title}</h4>
                <p>{t.why.points.mentalHealth.description}</p>
              </div>
              <div className="opportunity-point">
                <h4>{t.why.points.communities.title}</h4>
                <p>{t.why.points.communities.description}</p>
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
          <h3>{t.conclusion.title}</h3>
          <p>
            {t.conclusion.description}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Market



