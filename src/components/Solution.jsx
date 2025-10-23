import { motion } from 'framer-motion'
import { Heart, Shield, Sparkles, Users } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import './Solution.css'

function Solution() {
  const { language } = useLanguage()
  const t = translations[language].solution

  const solutions = [
    {
      icon: Users,
      title: t.pillars.community.title,
      description: t.pillars.community.description
    },
    {
      icon: Shield,
      title: t.pillars.safety.title,
      description: t.pillars.safety.description
    },
    {
      icon: Sparkles,
      title: t.pillars.growth.title,
      description: t.pillars.growth.description
    },
    {
      icon: Heart,
      title: t.pillars.experiences.title,
      description: t.pillars.experiences.description
    }
  ]

  return (
    <div className="section solution-section">
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

        <div className="solution-grid">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="solution-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="solution-icon">
                <solution.icon size={36} />
              </div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="solution-concept"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3>{t.difference.title}</h3>
          <div className="difference-points">
            <p>✨ {t.difference.points.exclusive}</p>
            <p>🤖 {t.difference.points.ai}</p>
            <p>🛡️ {t.difference.points.safety}</p>
            <p>💫 {t.difference.points.holistic}</p>
          </div>
        </motion.div>

        <motion.div
          className="solution-vision"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="vision-text">
            {t.description}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Solution



