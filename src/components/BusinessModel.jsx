import { motion } from 'framer-motion'
import { CreditCard, Plane, ShoppingBag, Megaphone, GraduationCap, DollarSign } from 'lucide-react'
import './BusinessModel.css'

function BusinessModel() {
  const revenueStreams = [
    {
      icon: CreditCard,
      title: 'Membresías Premium',
      description: 'Suscripciones mensuales con acceso a funciones exclusivas y eventos privados.',
      potential: 'Alto'
    },
    {
      icon: Plane,
      title: 'Comisiones de Viajes',
      description: 'Porcentaje sobre reservas de viajes, experiencias y alojamientos.',
      potential: 'Alto'
    },
    {
      icon: ShoppingBag,
      title: 'Marketplace de Servicios',
      description: 'Comisión por servicios de coaching, psicología, astrología e imagen.',
      potential: 'Medio-Alto'
    },
    {
      icon: Megaphone,
      title: 'Publicidad Selectiva',
      description: 'Campañas de marcas afines al público femenino (belleza, wellness, moda).',
      potential: 'Medio'
    },
    {
      icon: GraduationCap,
      title: 'Cursos y Eventos',
      description: 'Formaciones presenciales y digitales de pago para emprendedoras.',
      potential: 'Medio-Alto'
    }
  ]

  return (
    <div className="section business-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Modelo de Negocio</h2>
          <p className="section-subtitle">
            Múltiples fuentes de ingresos diversificadas y escalables
          </p>
        </motion.div>

        <div className="revenue-grid">
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={index}
              className="revenue-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="revenue-icon">
                <stream.icon size={32} />
              </div>
              <h3>{stream.title}</h3>
              <p>{stream.description}</p>
              <div className={`potential-badge ${stream.potential.toLowerCase().replace('-', '')}`}>
                Potencial: {stream.potential}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="pricing-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3>Estructura de Precios</h3>
          <div className="pricing-tiers">
            <div className="pricing-card basic">
              <div className="tier-name">Básica</div>
              <div className="tier-price">Gratis</div>
              <div className="tier-features">
                <div className="feature">✓ Match de amistad limitado</div>
                <div className="feature">✓ Acceso a eventos públicos</div>
                <div className="feature">✓ Chat IA básico</div>
              </div>
            </div>
            
            <div className="pricing-card premium">
              <div className="badge-popular">Popular</div>
              <div className="tier-name">Premium</div>
              <div className="tier-price">19.99€<span>/mes</span></div>
              <div className="tier-features">
                <div className="feature">✓ Match ilimitado</div>
                <div className="feature">✓ Eventos exclusivos</div>
                <div className="feature">✓ Psicología y coaching</div>
                <div className="feature">✓ Carta astral completa</div>
                <div className="feature">✓ Descuentos en viajes</div>
              </div>
            </div>
            
            <div className="pricing-card vip">
              <div className="tier-name">VIP</div>
              <div className="tier-price">49.99€<span>/mes</span></div>
              <div className="tier-features">
                <div className="feature">✓ Todo Premium</div>
                <div className="feature">✓ Sesiones 1-on-1</div>
                <div className="feature">✓ Viajes VIP</div>
                <div className="feature">✓ Asesoría personalizada</div>
                <div className="feature">✓ Acceso anticipado</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="business-projection"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <DollarSign size={60} />
          <h3>Proyección de Ingresos</h3>
          <div className="projection-stats">
            <div className="projection-item">
              <span className="projection-label">Año 1</span>
              <span className="projection-value">10.000 usuarios</span>
              <span className="projection-revenue">~200.000€</span>
            </div>
            <div className="projection-item">
              <span className="projection-label">Año 2</span>
              <span className="projection-value">50.000 usuarios</span>
              <span className="projection-revenue">~1.2M€</span>
            </div>
            <div className="projection-item">
              <span className="projection-label">Año 3</span>
              <span className="projection-value">150.000 usuarios</span>
              <span className="projection-revenue">~4.5M€</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BusinessModel



