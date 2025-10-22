import { motion } from 'framer-motion'
import { Heart, Shield, Sparkles, Users } from 'lucide-react'
import './Solution.css'

function Solution() {
  const solutions = [
    {
      icon: Users,
      title: 'Comunidad Exclusiva',
      description: 'Un club privado solo para mujeres donde crear amistades reales y duraderas.'
    },
    {
      icon: Shield,
      title: 'Espacio Seguro',
      description: 'Entorno protegido y verificado donde las mujeres pueden ser auténticas.'
    },
    {
      icon: Sparkles,
      title: 'Todo en Uno',
      description: 'Amistad + Bienestar + Eventos + Viajes + Coaching en una sola plataforma.'
    },
    {
      icon: Heart,
      title: 'Empoderamiento',
      description: 'Herramientas y recursos para el crecimiento personal y profesional.'
    }
  ]

  return (
    <div className="section solution-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">La Solución: HERCLUB</h2>
          <p className="section-subtitle">
            La primera super-app femenina que fusiona conexión, bienestar y experiencias
          </p>
        </motion.div>

        <div className="solution-grid">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="solution-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="solution-icon">
                <solution.icon size={36} />
              </div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="solution-concept"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3>El Concepto</h3>
          <div className="concept-formula">
            <span className="concept-item">Tinder</span>
            <span className="concept-plus">+</span>
            <span className="concept-item">Meetup</span>
            <span className="concept-plus">+</span>
            <span className="concept-item">Calm</span>
            <span className="concept-plus">+</span>
            <span className="concept-item">Airbnb</span>
            <span className="concept-plus">+</span>
            <span className="concept-item">Masterclass</span>
          </div>
          <p className="concept-description">
            = Una experiencia única diseñada exclusivamente para mujeres
          </p>
        </motion.div>

        <motion.div
          className="solution-vision"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3>Nuestra Visión</h3>
          <p>
            Crear la comunidad femenina más exclusiva y positiva del mundo digital, 
            donde las mujeres puedan conectarse, apoyarse y crecer juntas.
          </p>
          <p className="vision-bold">
            HERCLUB será más que una app: será un movimiento global de conexión, 
            seguridad y empoderamiento femenino.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Solution



