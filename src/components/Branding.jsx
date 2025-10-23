import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Branding.css'

function Branding() {
  const { t } = useLanguage()

  const colors = [
    { name: t('branding.color1'), hex: '#5A3B66', desc: t('branding.color1Desc') },
    { name: t('branding.color2'), hex: '#E89BAA', desc: t('branding.color2Desc') },
    { name: t('branding.color3'), hex: '#F6C7CE', desc: t('branding.color3Desc') },
    { name: t('branding.color4'), hex: '#A08DA5', desc: t('branding.color4Desc') }
  ]

  const values = [
    { title: t('branding.value1'), desc: t('branding.value1Desc') },
    { title: t('branding.value2'), desc: t('branding.value2Desc') },
    { title: t('branding.value3'), desc: t('branding.value3Desc') },
    { title: t('branding.value4'), desc: t('branding.value4Desc') }
  ]

  const voice = [
    t('branding.voice1'),
    t('branding.voice2'),
    t('branding.voice3'),
    t('branding.voice4')
  ]

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
          <h2 className="section-title">{t('branding.title')}</h2>
          <p className="section-subtitle">
            {t('branding.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="brand-logo-showcase"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="logo-display">
            <Heart className="logo-heart logo-heart-1" />
            <Heart className="logo-heart logo-heart-2" />
            <h3 className="logo-text-large">HERCLUB</h3>
          </div>
        </motion.div>

        <div className="branding-content">
          <motion.div
            className="colors-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3>{t('branding.colorsTitle')}</h3>
            <div className="colors-grid">
              {colors.map((color, index) => (
                <motion.div
                  key={index}
                  className="color-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className="color-circle"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <h4>{color.name}</h4>
                  <p className="color-hex">{color.hex}</p>
                  <p className="color-desc">{color.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="values-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3>{t('branding.valuesTitle')}</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="value-card"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <Heart size={32} />
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="voice-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3>{t('branding.voiceTitle')}</h3>
            <div className="voice-list">
              {voice.map((item, index) => (
                <motion.div
                  key={index}
                  className="voice-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                >
                  <span className="voice-bullet">•</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Branding
