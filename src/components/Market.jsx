import { motion } from 'framer-motion'
import { Target, TrendingUp, Globe, Users } from 'lucide-react'
import './Market.css'

function Market() {
  const marketData = [
    {
      icon: Users,
      stat: '+50%',
      label: 'del público digital activo son mujeres'
    },
    {
      icon: TrendingUp,
      stat: '20B€',
      label: 'mercado de apps de bienestar en Europa'
    },
    {
      icon: Globe,
      stat: 'Global',
      label: 'demanda de espacios femeninos seguros'
    }
  ]

  const targetAudience = [
    'Mujeres de 18 a 60 años',
    'Urbanas y digitales',
    'Activas socialmente',
    'Interesadas en bienestar',
    'Buscan conexiones reales',
    'Valoran la seguridad'
  ]

  return (
    <div className="section market-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Oportunidad de Mercado</h2>
          <p className="section-subtitle">
            Un mercado millonario en crecimiento con demanda insatisfecha
          </p>
        </motion.div>

        <div className="market-stats">
          {marketData.map((item, index) => (
            <motion.div
              key={index}
              className="market-stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="market-icon">
                <item.icon size={40} />
              </div>
              <h3>{item.stat}</h3>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="market-content">
          <motion.div
            className="target-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="target-icon-wrapper">
              <Target size={50} />
            </div>
            <h3>Target Principal</h3>
            <div className="target-list">
              {targetAudience.map((item, index) => (
                <motion.div
                  key={index}
                  className="target-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <span className="check-mark">✓</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="opportunity-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>¿Por qué ahora?</h3>
            <div className="opportunity-points">
              <div className="opportunity-point">
                <h4>Creciente demanda</h4>
                <p>Las mujeres buscan espacios seguros para conectar fuera del ámbito romántico.</p>
              </div>
              <div className="opportunity-point">
                <h4>Fragmentación del mercado</h4>
                <p>Las usuarias necesitan múltiples apps. HERCLUB lo unifica todo.</p>
              </div>
              <div className="opportunity-point">
                <h4>Crisis de salud mental</h4>
                <p>Aumento del 40% en la demanda de servicios de bienestar emocional.</p>
              </div>
              <div className="opportunity-point">
                <h4>Comunidades exclusivas</h4>
                <p>Crecimiento del modelo de membresías y clubes privados digitales.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="market-conclusion"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3>La Oportunidad</h3>
          <p>
            HERCLUB une comunidad, salud mental, viajes y empoderamiento en una sola plataforma, 
            dirigida a un mercado de millones de mujeres que buscan conexiones auténticas y 
            crecimiento personal.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Market



