import { motion } from 'framer-motion'
import { Heart, Calendar, Brain, Sparkles, Plane, Shield } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import './Features.css'

function Features() {
  const { language } = useLanguage()
  const t = translations[language].features

  const features = [
    {
      icon: Heart,
      title: t.list.match.title,
      description: t.list.match.description
    },
    {
      icon: Brain,
      title: t.list.wellness.title,
      description: t.list.wellness.description
    },
    {
      icon: Calendar,
      title: t.list.events.title,
      description: t.list.events.description
    },
    {
      icon: Plane,
      title: t.list.travel.title,
      description: t.list.travel.description
    },
    {
      icon: Sparkles,
      title: t.list.coaching.title,
      description: t.list.coaching.description
    },
    {
      icon: Shield,
      title: t.list.safety.title,
      description: t.list.safety.description
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
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="feature-icon">
                <feature.icon size={28} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Features



