import { motion } from 'framer-motion'
import { CheckCircle2, Circle, Clock } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import './Roadmap.css'

function Roadmap() {
  const { language } = useLanguage()
  const t = translations[language].roadmap
  const phases = [
    {
      phase: 'Fase 1',
      timeline: '0-2 meses',
      status: 'pending',
      title: 'MVP y Funcionalidades Core',
      items: [
        'Diseño completo UX/UI',
        'Desarrollo del sistema de match de amistad',
        'Integración de eventos y meetups',
        'Sistema de registro y perfiles',
        'Chat en tiempo real',
        'Panel de administración básico'
      ]
    },
    {
      phase: 'Fase 2',
      timeline: '2-4 meses',
      status: 'pending',
      title: 'IA y Funcionalidades Premium',
      items: [
        'Psicología con IA y chat emocional',
        'Carta astral con IA',
        'Sistema de viajes y experiencias',
        'Marketplace de servicios',
        'Integración de pagos (Stripe/PayPal)',
        'Coaching y constelaciones familiares'
      ]
    },
    {
      phase: 'Fase 3',
      timeline: '4-6 meses',
      status: 'pending',
      title: 'Expansión y Lanzamiento Global',
      items: [
        'Multilenguaje (EN, ES, FR, IT)',
        'DJ streaming y música en vivo',
        'Punto Lila y recursos de apoyo',
        'Asesoramiento de imagen',
        'Deporte y salud (clases, dietas)',
        'Cursos para influencers',
        'Lanzamiento en App Store y Google Play',
        'Campaña de marketing masiva'
      ]
    }
  ]

  const milestones = [
    { month: 'Mes 1', goal: 'Diseño completado y desarrollo iniciado' },
    { month: 'Mes 2', goal: 'MVP funcional con match y eventos' },
    { month: 'Mes 3', goal: 'IA integrada y sistema de pagos activo' },
    { month: 'Mes 4', goal: 'Marketplace funcionando y beta testing' },
    { month: 'Mes 5', goal: 'Internacionalización completada' },
    { month: 'Mes 6', goal: 'Lanzamiento oficial y primeras 1.000 usuarias' }
  ]

  return (
    <div className="section roadmap-section">
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

        <div className="phases-container">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className="phase-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="phase-header">
                <div className="phase-badge">
                  <Clock size={20} />
                  <span>{phase.phase}</span>
                </div>
                <div className="phase-timeline">{phase.timeline}</div>
              </div>
              
              <h3>{phase.title}</h3>
              
              <ul className="phase-items">
                {phase.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + idx * 0.1, duration: 0.4 }}
                  >
                    <Circle size={16} className="item-icon" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="milestones-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3>Hitos Clave</h3>
          <div className="milestones-timeline">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="milestone-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              >
                <div className="milestone-icon">
                  <CheckCircle2 size={24} />
                </div>
                <div className="milestone-month">{milestone.month}</div>
                <div className="milestone-goal">{milestone.goal}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="roadmap-conclusion"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3>Estrategia de Lanzamiento</h3>
          <p>
            Desarrollo ágil con sprints de 2 semanas, testing continuo y feedback de usuarias beta. 
            Lanzamiento gradual por fases para garantizar calidad y escalabilidad.
          </p>
          <div className="launch-stats">
            <div className="launch-stat">
              <span className="stat-number">6</span>
              <span className="stat-label">Meses de desarrollo</span>
            </div>
            <div className="launch-stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Fases incrementales</span>
            </div>
            <div className="launch-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Control de calidad</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Roadmap



