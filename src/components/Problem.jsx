import { motion } from 'framer-motion'
import { UserX, Shield, Frown, AlertCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import './Problem.css'

function Problem() {
  const { language } = useLanguage()
  const t = translations[language].problem

  const problems = [
    {
      icon: UserX,
      title: t.issues.isolation.title,
      description: t.issues.isolation.description
    },
    {
      icon: Shield,
      title: t.issues.safety.title,
      description: t.issues.safety.description
    },
    {
      icon: Frown,
      title: t.issues.mentalHealth.title,
      description: t.issues.mentalHealth.description
    },
    {
      icon: AlertCircle,
      title: t.issues.fragmentation.title,
      description: t.issues.fragmentation.description
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
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">
            {t.subtitle}
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
            <h3>{t.impact.stat1.number}</h3>
            <p>{t.impact.stat1.text}</p>
          </div>
          <div className="stat">
            <h3>{t.impact.stat2.number}</h3>
            <p>{t.impact.stat2.text}</p>
          </div>
          <div className="stat">
            <h3>{t.impact.stat3.number}</h3>
            <p>{t.impact.stat3.text}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Problem



