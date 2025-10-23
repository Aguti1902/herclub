import { motion } from 'framer-motion'
import { UserX, HeartCrack, Frown, AlertCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Problem.css'

function Problem() {
  const { t } = useLanguage()
  
  const problems = [
    {
      icon: UserX,
      title: t('problem.card1Title'),
      description: t('problem.card1Text')
    },
    {
      icon: HeartCrack,
      title: t('problem.card2Title'),
      description: t('problem.card2Text')
    },
    {
      icon: Frown,
      title: t('problem.card3Title'),
      description: t('problem.card3Text')
    },
    {
      icon: AlertCircle,
      title: t('problem.card4Title'),
      description: t('problem.card4Text')
    }
  ]

  return (
    <div className="section problem-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('problem.title')}</h2>
          <p className="section-subtitle">
            {t('problem.subtitle')}
          </p>
        </motion.div>

        <div className="problems-grid">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="problem-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="problem-icon">
                <problem.icon size={40} />
              </div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="problem-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="stat">
            <h3>{t('problem.stat1')}</h3>
            <p>{t('problem.stat1Label')}</p>
          </div>
          <div className="stat">
            <h3>{t('problem.stat2')}</h3>
            <p>{t('problem.stat2Label')}</p>
          </div>
          <div className="stat">
            <h3>{t('problem.stat3')}</h3>
            <p>{t('problem.stat3Label')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Problem



