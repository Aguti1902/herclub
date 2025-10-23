import { motion } from 'framer-motion'
import { Heart, Brain, Plane, Users, Shield, ShoppingBag } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Features.css'

function Features() {
  const { t } = useLanguage()

  const mainFeatures = [
    {
      icon: Heart,
      title: t('features.friendship.title'),
      description: t('features.friendship.desc'),
      details: [
        t('features.friendship.p1'),
        t('features.friendship.p2'),
        t('features.friendship.p3'),
        t('features.friendship.p4')
      ]
    },
    {
      icon: Brain,
      title: t('features.wellness.title'),
      description: t('features.wellness.desc'),
      details: [
        t('features.wellness.p1'),
        t('features.wellness.p2'),
        t('features.wellness.p3'),
        t('features.wellness.p4')
      ]
    },
    {
      icon: Plane,
      title: t('features.travel.title'),
      description: t('features.travel.desc'),
      details: [
        t('features.travel.p1'),
        t('features.travel.p2'),
        t('features.travel.p3'),
        t('features.travel.p4')
      ]
    },
    {
      icon: Users,
      title: t('features.coaching.title'),
      description: t('features.coaching.desc'),
      details: [
        t('features.coaching.p1'),
        t('features.coaching.p2'),
        t('features.coaching.p3'),
        t('features.coaching.p4')
      ]
    },
    {
      icon: Shield,
      title: t('features.safety.title'),
      description: t('features.safety.desc'),
      details: [
        t('features.safety.p1'),
        t('features.safety.p2'),
        t('features.safety.p3'),
        t('features.safety.p4')
      ]
    },
    {
      icon: ShoppingBag,
      title: t('features.marketplace.title'),
      description: t('features.marketplace.desc'),
      details: [
        t('features.marketplace.p1'),
        t('features.marketplace.p2'),
        t('features.marketplace.p3'),
        t('features.marketplace.p4')
      ]
    }
  ]

  return (
    <div className="section features-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('features.title')}</h2>
          <p className="section-subtitle">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="features-grid">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="feature-icon">
                <feature.icon size={36} />
              </div>
              <h3>{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
              <div className="feature-details">
                {feature.details.map((detail, idx) => (
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

export default Features
