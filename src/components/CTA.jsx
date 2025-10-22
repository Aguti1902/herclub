import { motion } from 'framer-motion'
import { Heart, Mail, Euro, Rocket, ArrowRight, TrendingUp } from 'lucide-react'
import './CTA.css'

function CTA() {
  const benefits = [
    'Únete a un movimiento que transformará la vida de millones de mujeres',
    'Sé parte de una de las comunidades digitales más innovadoras',
    'ROI proyectado de 5X en 3 años',
    'Impacto social medible y sostenible'
  ]

  const handleDonation = () => {
    // Aquí se integraría con Stripe, PayPal o la pasarela de pago
    alert('Redirigiendo a la pasarela de pago...')
  }

  const handleContact = () => {
    window.location.href = 'mailto:contacto@herclub.app?subject=Interés en invertir en HERCLUB'
  }

  return (
    <div className="section cta-section">
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo final */}
          <motion.div
            className="cta-logo"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="logo-hearts-cta">
              <Heart className="heart-cta heart-cta-1" fill="#FFFFFF" stroke="#FFFFFF" />
              <Heart className="heart-cta heart-cta-2" fill="rgba(255,255,255,0.8)" stroke="rgba(255,255,255,0.8)" />
            </div>
            <h1>HERCLUB</h1>
          </motion.div>

          <motion.h2
            className="cta-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Invierte en el Futuro de la Conexión Femenina
          </motion.h2>

          <motion.p
            className="cta-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Juntos podemos crear la comunidad femenina más exclusiva y positiva del mundo digital
          </motion.p>

          <motion.div
            className="benefits-list"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              >
                <Rocket size={20} />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="investment-summary"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="summary-item">
              <Euro size={30} />
              <div>
                <div className="summary-label">Inversión Inicial</div>
                <div className="summary-value">50K - 60K€</div>
              </div>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-item">
              <Rocket size={30} />
              <div>
                <div className="summary-label">Plazo de Lanzamiento</div>
                <div className="summary-value">6 Meses</div>
              </div>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-item">
              <TrendingUp size={30} />
              <div>
                <div className="summary-label">ROI Proyectado</div>
                <div className="summary-value">5X en 3 años</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <button className="btn-primary" onClick={handleDonation}>
              <Euro size={24} />
              <span>Apoya el Lanzamiento de HERCLUB</span>
              <ArrowRight size={20} />
            </button>
          </motion.div>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <p className="tagline">Forma parte del cambio. Invierte en HERCLUB.</p>
          </motion.div>

          {/* Decoración de fondo */}
          <div className="cta-decoration">
            <div className="decoration-circle circle-1"></div>
            <div className="decoration-circle circle-2"></div>
            <div className="decoration-circle circle-3"></div>
          </div>
        </motion.div>

        <motion.div
          className="thank-you"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Heart size={40} fill="currentColor" />
          <h3>Gracias por tu Tiempo e Interés</h3>
          <p>Estamos emocionadas de compartir esta visión contigo y esperamos poder construir el futuro juntos.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default CTA

