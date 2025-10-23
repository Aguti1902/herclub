import { motion } from 'framer-motion'
import { Heart, Euro, Rocket, ArrowRight, TrendingUp } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './CTA.css'

function CTA() {
  const { t } = useLanguage()

  const benefits = [
    t('cta.benefit1'),
    t('cta.benefit2'),
    t('cta.benefit3'),
    t('cta.benefit4')
  ]

  const handleDonation = () => {
    // Aquí se integraría con Stripe, PayPal o la pasarela de pago
    alert('Redirigiendo a la pasarela de pago...')
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
            {t('cta.title')}
          </motion.h2>

          <motion.p
            className="cta-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t('cta.subtitle')}
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
                <div className="summary-label">{t('cta.investmentLabel')}</div>
                <div className="summary-value">{t('cta.investmentValue')}</div>
              </div>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-item">
              <Rocket size={30} />
              <div>
                <div className="summary-label">{t('cta.launchLabel')}</div>
                <div className="summary-value">{t('cta.launchValue')}</div>
              </div>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-item">
              <TrendingUp size={30} />
              <div>
                <div className="summary-label">{t('cta.roiLabel')}</div>
                <div className="summary-value">{t('cta.roiValue')}</div>
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
              <span>{t('cta.button')}</span>
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
            <p className="tagline">{t('cta.tagline')}</p>
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
          <h3>{t('cta.thanksTitle')}</h3>
          <p>{t('cta.thanksText')}</p>
        </motion.div>
      </div>
    </div>
  )
}

export default CTA
