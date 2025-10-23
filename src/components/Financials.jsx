import { motion } from 'framer-motion'
import { TrendingUp, Users, DollarSign } from 'lucide-react'
import './Financials.css'

function Financials() {
  const projections = [
    {
      year: 'Año 1',
      users: '10K',
      revenue: '200K€',
      growth: '+100%',
      highlights: [
        'Lanzamiento oficial',
        '10% conversión a premium',
        'Primera campaña de marketing',
        'Primeras colaboraciones'
      ]
    },
    {
      year: 'Año 2',
      users: '50K',
      revenue: '1.2M€',
      growth: '+500%',
      highlights: [
        'Expansión internacional',
        '15% conversión a premium',
        'Marketplace activo',
        'Ingresos por eventos y viajes'
      ]
    },
    {
      year: 'Año 3',
      users: '150K',
      revenue: '4.5M€',
      growth: '+300%',
      highlights: [
        'Líder en el mercado',
        '20% conversión a premium',
        'Múltiples fuentes de ingreso',
        'Break-even alcanzado'
      ]
    }
  ]

  return (
    <div className="section financials-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Proyección Financiera</h2>
          <p className="section-subtitle">
            Crecimiento proyectado a 3 años con modelo escalable
          </p>
        </motion.div>

        <div className="projections-grid">
          {projections.map((proj, index) => (
            <motion.div
              key={index}
              className={`projection-card year-${index + 1}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <h3 className="card-year">{proj.year}</h3>
              
              <div className="main-stats-row">
                <div className="stat-item">
                  <div className="stat-icon">
                    <Users size={24} />
                  </div>
                  <div className="stat-info">
                    <div className="stat-value">{proj.users}</div>
                    <div className="stat-label">Usuarias</div>
                  </div>
                </div>
                
                <div className="stat-item revenue">
                  <div className="stat-icon">
                    <DollarSign size={28} />
                  </div>
                  <div className="stat-info">
                    <div className="stat-value">{proj.revenue}</div>
                    <div className="stat-label">Ingresos</div>
                  </div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-icon">
                    <TrendingUp size={24} />
                  </div>
                  <div className="stat-info">
                    <div className="stat-value">{proj.growth}</div>
                    <div className="stat-label">Crecimiento</div>
                  </div>
                </div>
              </div>

              <div className="card-highlights">
                {proj.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-text">
                    • {highlight}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="financial-breakdown"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3>Desglose de Ingresos (Año 3)</h3>
          <div className="revenue-breakdown">
            <motion.div 
              className="revenue-item"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="revenue-info">
                <span className="revenue-name">Suscripciones</span>
                <span className="revenue-percentage">45%</span>
              </div>
              <div className="revenue-bar-container">
                <motion.div 
                  className="revenue-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: '45%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 1 }}
                  style={{ background: 'linear-gradient(90deg, #5A3B66 0%, #E89BAA 100%)' }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="revenue-item"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="revenue-info">
                <span className="revenue-name">Viajes</span>
                <span className="revenue-percentage">25%</span>
              </div>
              <div className="revenue-bar-container">
                <motion.div 
                  className="revenue-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: '25%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 1 }}
                  style={{ background: 'linear-gradient(90deg, #E89BAA 0%, #F6C7CE 100%)' }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="revenue-item"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="revenue-info">
                <span className="revenue-name">Marketplace</span>
                <span className="revenue-percentage">20%</span>
              </div>
              <div className="revenue-bar-container">
                <motion.div 
                  className="revenue-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: '20%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 1 }}
                  style={{ background: 'linear-gradient(90deg, #F6C7CE 0%, #A08DA5 100%)' }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="revenue-item"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="revenue-info">
                <span className="revenue-name">Otros</span>
                <span className="revenue-percentage">10%</span>
              </div>
              <div className="revenue-bar-container">
                <motion.div 
                  className="revenue-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: '10%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, duration: 1 }}
                  style={{ background: 'linear-gradient(90deg, #A08DA5 0%, #5A3B66 100%)' }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="roi-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3>Retorno de Inversión</h3>
          <div className="roi-stats">
            <div className="roi-stat">
              <div className="roi-number">5X</div>
              <div className="roi-label">ROI a 3 años</div>
            </div>
            <div className="roi-stat">
              <div className="roi-number">18-24</div>
              <div className="roi-label">Meses para break-even</div>
            </div>
            <div className="roi-stat">
              <div className="roi-number">35%</div>
              <div className="roi-label">Margen proyectado</div>
            </div>
          </div>
          <p className="roi-description">
            Con una inversión inicial de 50-60K€, proyectamos alcanzar el punto de equilibrio 
            en 18-24 meses y generar un retorno de 5X en 3 años, con múltiples fuentes de 
            ingresos recurrentes y escalables.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Financials

