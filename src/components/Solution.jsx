import { motion } from 'framer-motion'
import { Heart, Shield, Sparkles, Users } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Solution.css'

function Solution() {
  const { t } = useLanguage()

  const solutions = [
    {
      icon: Users,
      title: t('solution.card1Title'),
      description: t('solution.card1Text')
    },
    {
      icon: Shield,
      title: t('solution.card2Title'),
      description: t('solution.card2Text')
    },
    {
      icon: Sparkles,
      title: t('solution.card3Title'),
      description: t('solution.card3Text')
    },
    {
      icon: Heart,
      title: t('solution.card4Title'),
      description: t('solution.card4Text')
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
          <h2 className="section-title">{t('solution.title')}</h2>
          <p className="section-subtitle">
            {t('solution.subtitle')}
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
          <h3>{t('solution.conceptTitle')}</h3>
          <div className="concept-formula">
            <span className="concept-item">Tinder</span>
            <span className="concept-plus">+</span>
            <span className="concept-item">Meetup</span>
            <span className="concept-plus">+</span>
            <span className="concept-item">Calm</span>
            <span className="concept-plus">+</span>
            <span className="concept-item">Airbnb</span>
            <span className="concept-plus">+</span>
            <span className="concept-item">Masterclass</span>
          </div>
          <p className="concept-description">
            {t('solution.conceptDescription')}
          </p>
        </motion.div>

        <motion.div
          className="solution-vision"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3>{t('solution.visionTitle')}</h3>
          <p>
            {t('solution.visionText1')}
          </p>
          <p className="vision-bold">
            {t('solution.visionText2')}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Solution
