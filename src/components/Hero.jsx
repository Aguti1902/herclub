import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import './Hero.css'

function Hero() {
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
            <h1 className="logo-text">HERCLUB</h1>
          </motion.div>

          {/* Tagline */}
          <motion.h2
            className="hero-tagline"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            La comunidad femenina más exclusiva del mundo digital
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Donde las mujeres se conectan, crecen y se empoderan juntas
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
              <span>Match de Amistad</span>
            </div>
            <div className="feature-badge">
              <Sparkles size={18} />
              <span>Bienestar Mental</span>
            </div>
            <div className="feature-badge">
              <Sparkles size={18} />
              <span>Eventos & Viajes</span>
            </div>
            <div className="feature-badge">
              <Sparkles size={18} />
              <span>Coaching & IA</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="hero-cta"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h3>Propuesta para Inversores</h3>
            <p className="investment-amount">Inversión inicial: 50.000€ - 60.000€</p>
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



