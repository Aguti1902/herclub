import { motion } from 'framer-motion'
import { TrendingUp, Users, DollarSign } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Financials.css'

function Financials() {
  const { t } = useLanguage()

  const projections = [
    {
      year: t('financials.year1'),
      users: '10K',
      revenue: '200K€',
      growth: '+100%',
      highlights: [
        t('financials.highlights.y1_1'),
        t('financials.highlights.y1_2'),
        t('financials.highlights.y1_3'),
        t('financials.highlights.y1_4')
      ]
    },
    {
      year: t('financials.year2'),
      users: '50K',
      revenue: '1.2M€',
      growth: '+500%',
      highlights: [
        t('financials.highlights.y2_1'),
        t('financials.highlights.y2_2'),
        t('financials.highlights.y2_3'),
        t('financials.highlights.y2_4')
      ]
    },
    {
      year: t('financials.year3'),
      users: '150K',
      revenue: '4.5M€',
      growth: '+300%',
      highlights: [
        t('financials.highlights.y3_1'),
        t('financials.highlights.y3_2'),
        t('financials.highlights.y3_3'),
        t('financials.highlights.y3_4')
      ]
    }
  ]

  return (
    <div className="section financials-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('financials.title')}</h2>
          <p className="section-subtitle">
            {t('financials.subtitle')}
          </p>
        </motion.div>

        <div className="projections-grid">
          {projections.map((proj, index) => (
            <motion.div
              key={index}
              className={`projection-card year-${index + 1}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <h3 className="card-year">{proj.year}</h3>

              <div className="main-stats-row">
                <div className="stat-item">
                  <div className="stat-icon">
                    <Users size={24} />
                  </div>
                  <div className="stat-info">
                    <div className="stat-value">{proj.users}</div>
                    <div className="stat-label">{t('financials.users')}</div>
                  </div>
                </div>

                <div className="stat-item revenue">
                  <div className="stat-icon">
                    <DollarSign size={28} />
                  </div>
                  <div className="stat-info">
                    <div className="stat-value">{proj.revenue}</div>
                    <div className="stat-label">{t('financials.revenue')}</div>
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-icon">
                    <TrendingUp size={24} />
                  </div>
                  <div className="stat-info">
                    <div className="stat-value">{proj.growth}</div>
                    <div className="stat-label">{t('financials.growth')}</div>
                  </div>
                </div>
              </div>

              <div className="card-highlights">
                {proj.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-text">
                    • {highlight}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="financial-breakdown"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3>{t('financials.breakdownTitle')}</h3>
          <div className="revenue-breakdown">
            <motion.div
              className="revenue-item"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="revenue-info">
                <span className="revenue-name">{t('financials.subscriptions')}</span>
                <span className="revenue-percentage">45%</span>
              </div>
              <div className="revenue-bar-container">
                <motion.div
                  className="revenue-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: '45%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 1 }}
                  style={{ background: 'linear-gradient(90deg, #5A3B66 0%, #E89BAA 100%)' }}
                />
              </div>
            </motion.div>

            <motion.div
              className="revenue-item"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="revenue-info">
                <span className="revenue-name">{t('financials.travel')}</span>
                <span className="revenue-percentage">25%</span>
              </div>
              <div className="revenue-bar-container">
                <motion.div
                  className="revenue-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: '25%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 1 }}
                  style={{ background: 'linear-gradient(90deg, #E89BAA 0%, #F6C7CE 100%)' }}
                />
              </div>
            </motion.div>

            <motion.div
              className="revenue-item"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="revenue-info">
                <span className="revenue-name">{t('financials.marketplace')}</span>
                <span className="revenue-percentage">20%</span>
              </div>
              <div className="revenue-bar-container">
                <motion.div
                  className="revenue-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: '20%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 1 }}
                  style={{ background: 'linear-gradient(90deg, #F6C7CE 0%, #A08DA5 100%)' }}
                />
              </div>
            </motion.div>

            <motion.div
              className="revenue-item"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="revenue-info">
                <span className="revenue-name">{t('financials.other')}</span>
                <span className="revenue-percentage">10%</span>
              </div>
              <div className="revenue-bar-container">
                <motion.div
                  className="revenue-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: '10%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, duration: 1 }}
                  style={{ background: 'linear-gradient(90deg, #A08DA5 0%, #5A3B66 100%)' }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="roi-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3>{t('financials.roiTitle')}</h3>
          <div className="roi-stats">
            <div className="roi-stat">
              <div className="roi-number">{t('financials.roi1')}</div>
              <div className="roi-label">{t('financials.roi1Label')}</div>
            </div>
            <div className="roi-stat">
              <div className="roi-number">{t('financials.roi2')}</div>
              <div className="roi-label">{t('financials.roi2Label')}</div>
            </div>
            <div className="roi-stat">
              <div className="roi-number">{t('financials.roi3')}</div>
              <div className="roi-label">{t('financials.roi3Label')}</div>
            </div>
          </div>
          <p className="roi-description">
            {t('financials.roiText')}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Financials
