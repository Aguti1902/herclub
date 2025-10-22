import { motion } from 'framer-motion'
import { UserX, HeartCrack, Frown, AlertCircle } from 'lucide-react'
import './Problem.css'

function Problem() {
  const problems = [
    {
      icon: UserX,
      title: 'Soledad Digital',
      description: 'Las mujeres tienen cientos de "amigos" online pero pocas amistades reales y significativas.'
    },
    {
      icon: HeartCrack,
      title: 'Desconexión',
      description: 'Falta de espacios seguros y exclusivos para conectar con otras mujeres sin propósitos románticos.'
    },
    {
      icon: Frown,
      title: 'Salud Mental',
      description: 'Creciente necesidad de apoyo emocional, bienestar mental y desarrollo personal femenino.'
    },
    {
      icon: AlertCircle,
      title: 'Fragmentación',
      description: 'Las mujeres deben usar múltiples apps para bienestar, networking, viajes y eventos.'
    }
  ]

  return (
    <div className="section problem-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">El Problema</h2>
          <p className="section-subtitle">
            Una generación de mujeres más conectadas que nunca... pero más solas
          </p>
        </motion.div>

        <div className="problems-grid">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="problem-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="problem-icon">
                <problem.icon size={40} />
              </div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="problem-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="stat">
            <h3>70%</h3>
            <p>de mujeres reportan sentirse solas</p>
          </div>
          <div className="stat">
            <h3>+50%</h3>
            <p>del público digital activo</p>
          </div>
          <div className="stat">
            <h3>20B€</h3>
            <p>mercado de apps de bienestar en Europa</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Problem



