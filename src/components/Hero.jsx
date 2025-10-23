import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import './Hero.css'

function Hero() {
  const { language } = useLanguage()
  const t = translations[language].hero
  return (
    <div className="section hero-section">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.div 
            className="hero-logo"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="logo-icon">
              <Heart className="heart heart-1" />
              <Heart className="heart heart-2" />
            </div>
            <h1 className="logo-text">{t.title}</h1>
          </motion.div>

          {/* Tagline */}
          <motion.h2
            className="hero-tagline"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t.tagline}
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {t.description}
          </motion.p>

          {/* Características principales */}
          <motion.div
            className="hero-features"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="feature-badge">
              <Sparkles size={18} />
              <span>{t.features.match}</span>
            </div>
            <div className="feature-badge">
              <Sparkles size={18} />
              <span>{t.features.wellness}</span>
            </div>
            <div className="feature-badge">
              <Sparkles size={18} />
              <span>{t.features.events}</span>
            </div>
            <div className="feature-badge">
              <Sparkles size={18} />
              <span>{t.features.coaching}</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="hero-cta"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h3>{t.cta}</h3>
          </motion.div>

          {/* Decoración */}
          <div className="hero-decoration">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero



