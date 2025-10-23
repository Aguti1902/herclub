import { motion } from 'framer-motion'
import { Heart, Palette } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import './Branding.css'

function Branding() {
  const { language } = useLanguage()
  const t = translations[language].branding
  const colors = t.colors
  const brandValues = t.values

  return (
    <div className="section branding-section">
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

        {/* Logo */}
        <motion.div
          className="logo-showcase"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="logo-display">
            <div className="logo-hearts">
              <Heart className="heart-logo heart-logo-1" fill="#E89BAA" stroke="#E89BAA" />
              <Heart className="heart-logo heart-logo-2" fill="#F6C7CE" stroke="#F6C7CE" />
            </div>
            <h1 className="brand-logo-text">HERCLUB</h1>
          </div>
          <p className="logo-description">
            {t.logoDescription}
          </p>
        </motion.div>

        {/* Paleta de Colores */}
        <motion.div
          className="colors-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="colors-header">
            <Palette size={40} />
            <h3>{t.colorsTitle}</h3>
          </div>
          <div className="colors-grid">
            {colors.map((color, index) => (
              <motion.div
                key={index}
                className="color-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div 
                  className="color-swatch" 
                  style={{ background: color.hex }}
                ></div>
                <div className="color-info">
                  <div className="color-name">{color.name}</div>
                  <div className="color-hex">{color.hex}</div>
                  <div className="color-description">{color.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tipografía */}
        <motion.div
          className="typography-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3>{t.typographyTitle}</h3>
          <div className="typography-samples">
            <div className="typo-sample">
              <div className="typo-name">{t.typography.quicksand.name}</div>
              <div className="typo-display" style={{ fontFamily: 'Quicksand' }}>
                AaBbCc 123
              </div>
              <div className="typo-usage">{t.typography.quicksand.usage}</div>
            </div>
            <div className="typo-sample">
              <div className="typo-name">{t.typography.poppins.name}</div>
              <div className="typo-display" style={{ fontFamily: 'Poppins' }}>
                AaBbCc 123
              </div>
              <div className="typo-usage">{t.typography.poppins.usage}</div>
            </div>
          </div>
        </motion.div>

        {/* Valores de Marca */}
        <motion.div
          className="values-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3>{t.valuesTitle}</h3>
          <div className="values-grid">
            {brandValues.map((value, index) => (
              <motion.div
                key={index}
                className="value-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <Heart size={20} fill="currentColor" />
                <span>{value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="brand-personality"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3>{t.personalityTitle}</h3>
          <p>
            {t.personalityDescription}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Branding



