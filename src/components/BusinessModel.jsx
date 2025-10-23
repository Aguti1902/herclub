import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './BusinessModel.css'

function BusinessModel() {
  const { t } = useLanguage()

  return (
    <div className="section business-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('business.title')}</h2>
          <p className="section-subtitle">
            {t('business.subtitle')}
          </p>
        </motion.div>

        <div className="pricing-section">
          <div className="pricing-tiers">
            <motion.div
              className="pricing-card basic"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="tier-name">{t('business.freemium.title')}</div>
              <div className="tier-price">{t('business.freemium.price')}</div>
              <div className="tier-features">
                <div className="feature"><Check size={18} /> {t('business.freemium.f1')}</div>
                <div className="feature"><Check size={18} /> {t('business.freemium.f2')}</div>
                <div className="feature"><Check size={18} /> {t('business.freemium.f3')}</div>
                <div className="feature"><Check size={18} /> {t('business.freemium.f4')}</div>
              </div>
            </motion.div>

            <motion.div
              className="pricing-card premium"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="popular-badge">{t('business.premium.popular')}</div>
              <div className="tier-name">{t('business.premium.title')}</div>
              <div className="tier-price">{t('business.premium.price')}</div>
              <div className="tier-features">
                <div className="feature"><Check size={18} /> {t('business.premium.f1')}</div>
                <div className="feature"><Check size={18} /> {t('business.premium.f2')}</div>
                <div className="feature"><Check size={18} /> {t('business.premium.f3')}</div>
                <div className="feature"><Check size={18} /> {t('business.premium.f4')}</div>
              </div>
            </motion.div>

            <motion.div
              className="pricing-card vip"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="tier-name">{t('business.vip.title')}</div>
              <div className="tier-price">{t('business.vip.price')}</div>
              <div className="tier-features">
                <div className="feature"><Check size={18} /> {t('business.vip.f1')}</div>
                <div className="feature"><Check size={18} /> {t('business.vip.f2')}</div>
                <div className="feature"><Check size={18} /> {t('business.vip.f3')}</div>
                <div className="feature"><Check size={18} /> {t('business.vip.f4')}</div>
                <div className="feature"><Check size={18} /> {t('business.vip.f5')}</div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="additional-revenue"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3>{t('business.additional.title')}</h3>
          <div className="revenue-list">
            <div className="revenue-item">• {t('business.additional.travel')}</div>
            <div className="revenue-item">• {t('business.additional.marketplace')}</div>
            <div className="revenue-item">• {t('business.additional.events')}</div>
            <div className="revenue-item">• {t('business.additional.partnerships')}</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BusinessModel
