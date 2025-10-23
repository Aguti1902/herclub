import { motion } from 'framer-motion'
import { Euro, Code, Palette, TrendingUp, PieChart } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import './Investment.css'

function Investment() {
  const { language } = useLanguage()
  const t = translations[language].investment
  const icons = [Code, Palette, TrendingUp]
  const investmentBreakdown = t.breakdown.map((item, index) => ({
    ...item,
    icon: icons[index]
  }))

  return (
    <div className="section investment-section">
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

        <motion.div
          className="investment-total"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Euro size={60} />
          <h3>{t.totalTitle}</h3>
          <div className="total-amount">{t.totalAmount}</div>
          <p>{t.totalDescription}</p>
        </motion.div>

        <div className="breakdown-grid">
          {investmentBreakdown.map((item, index) => (
            <motion.div
              key={index}
              className="breakdown-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="breakdown-header">
                <div className="breakdown-icon">
                  <item.icon size={32} />
                </div>
                <div className="breakdown-info">
                  <h3>{item.category}</h3>
                  <div className="breakdown-amount">{item.amount}</div>
                </div>
              </div>
              
              <div className="progress-bar">
                <motion.div 
                  className="progress-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.15, duration: 1 }}
                >
                  <span className="progress-label">{item.percentage}%</span>
                </motion.div>
              </div>

              <ul className="breakdown-list">
                {item.items.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + idx * 0.1, duration: 0.4 }}
                  >
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="investment-goals"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <PieChart size={50} />
          <h3>{t.goalsTitle}</h3>
          <div className="goals-grid">
            {t.goals.map((goal, idx) => (
              <div key={idx} className="goal-item">
                <div className="goal-number">{goal.number}</div>
                <div className="goal-label">{goal.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Investment



