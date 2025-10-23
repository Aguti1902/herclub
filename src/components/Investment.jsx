import { motion } from 'framer-motion'
import { Euro, Code, Palette, TrendingUp, PieChart } from 'lucide-react'
import './Investment.css'

function Investment() {
  const investmentBreakdown = [
    {
      icon: Code,
      category: 'Desarrollo de la App',
      amount: '35.000€',
      percentage: 58,
      items: [
        'Frontend y Backend completo',
        'Integración de IA (psicología, astrología)',
        'Sistema de pagos y suscripciones',
        'API de matching y eventos',
        'Base de datos y seguridad'
      ]
    },
    {
      icon: Palette,
      category: 'Diseño y Branding',
      amount: '10.000€',
      percentage: 17,
      items: [
        'Diseño UX/UI completo',
        'Identidad de marca',
        'Material gráfico',
        'Lanzamiento en App Store y Google Play',
        'Website y landing page'
      ]
    },
    {
      icon: TrendingUp,
      category: 'Marketing y Lanzamiento',
      amount: '15.000€',
      percentage: 25,
      items: [
        'Campañas de ads (Instagram, TikTok, Facebook)',
        'Colaboraciones con influencers',
        'Evento de lanzamiento',
        'Community management',
        'Primeras 10.000 usuarias'
      ]
    }
  ]

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
          <h2 className="section-title">Inversión Requerida</h2>
          <p className="section-subtitle">
            Plan detallado de uso de capital para el lanzamiento del MVP
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
          <h3>Inversión Inicial</h3>
          <div className="total-amount">50.000€ - 60.000€</div>
          <p>Capital necesario para desarrollar y lanzar HERCLUB en 6 meses</p>
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
          <h3>Objetivos de la Inversión</h3>
          <div className="goals-grid">
            <div className="goal-item">
              <div className="goal-number">6</div>
              <div className="goal-label">Meses para MVP completo</div>
            </div>
            <div className="goal-item">
              <div className="goal-number">10K</div>
              <div className="goal-label">Usuarias primer año</div>
            </div>
            <div className="goal-item">
              <div className="goal-number">200K€</div>
              <div className="goal-label">Ingresos proyectados año 1</div>
            </div>
            <div className="goal-item">
              <div className="goal-number">5X</div>
              <div className="goal-label">ROI proyectado a 3 años</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Investment



