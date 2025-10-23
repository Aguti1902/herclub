import { motion } from 'framer-motion'
import { CreditCard, Plane, ShoppingBag, Megaphone, GraduationCap, DollarSign } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import './BusinessModel.css'

function BusinessModel() {
  const { language } = useLanguage()
  const t = translations[language].businessModel
  const icons = [CreditCard, Plane, ShoppingBag, Megaphone, GraduationCap]
  
  const revenueStreams = t.revenueStreams.map((stream, index) => ({
    ...stream,
    icon: icons[index]
  }))

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
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="revenue-grid">
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={index}
              className="revenue-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="revenue-icon">
                <stream.icon size={32} />
              </div>
              <h3>{stream.title}</h3>
              <p>{stream.description}</p>
              <div className={`potential-badge ${stream.potential.toLowerCase().replace('-', '')}`}>
                {t.potential}: {stream.potential}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="pricing-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3>{t.pricingTitle}</h3>
          <div className="pricing-tiers">
            <div className="pricing-card basic">
              <div className="tier-name">{t.tiers.basic.name}</div>
              <div className="tier-price">{t.tiers.basic.price}</div>
              <div className="tier-features">
                {t.tiers.basic.features.map((feature, idx) => (
                  <div key={idx} className="feature">✓ {feature}</div>
                ))}
              </div>
            </div>
            
            <div className="pricing-card premium">
              <div className="badge-popular">{t.tiers.premium.badge}</div>
              <div className="tier-name">{t.tiers.premium.name}</div>
              <div className="tier-price">{t.tiers.premium.price}<span>{t.tiers.premium.period}</span></div>
              <div className="tier-features">
                {t.tiers.premium.features.map((feature, idx) => (
                  <div key={idx} className="feature">✓ {feature}</div>
                ))}
              </div>
            </div>
            
            <div className="pricing-card vip">
              <div className="tier-name">{t.tiers.vip.name}</div>
              <div className="tier-price">{t.tiers.vip.price}<span>{t.tiers.vip.period}</span></div>
              <div className="tier-features">
                {t.tiers.vip.features.map((feature, idx) => (
                  <div key={idx} className="feature">✓ {feature}</div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="business-projection"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <DollarSign size={60} />
          <h3>{t.projectionTitle}</h3>
          <div className="projection-stats">
            {t.projectionData.map((proj, idx) => (
              <div key={idx} className="projection-item">
                <span className="projection-label">{proj.label}</span>
                <span className="projection-value">{proj.users}</span>
                <span className="projection-revenue">{proj.revenue}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BusinessModel



