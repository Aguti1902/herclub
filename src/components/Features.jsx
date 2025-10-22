import { motion } from 'framer-motion'
import { Heart, Calendar, Brain, Sparkles, Plane, Home, Shield, Image, Dumbbell, GraduationCap, Music, Globe } from 'lucide-react'
import './Features.css'

function Features() {
  const features = [
    {
      icon: Heart,
      title: 'Match de Amistad',
      description: 'Conecta con otras mujeres según edad, ubicación, gustos y hobbies. Modo Tinder para amistad.'
    },
    {
      icon: Calendar,
      title: 'Eventos & Meetups',
      description: 'Crea, descubre y asiste a eventos presenciales o virtuales cerca de ti.'
    },
    {
      icon: Brain,
      title: 'Psicología IA + Humana',
      description: 'Chat con psicóloga virtual 24/7 y opción de contactar profesionales reales.'
    },
    {
      icon: Sparkles,
      title: 'Coaching Personal',
      description: 'Desarrollo personal, constelaciones familiares y sesiones guiadas.'
    },
    {
      icon: Sparkles,
      title: 'Carta Astral IA',
      description: 'Cálculo automático de tu carta astral y conexión con astrólogas reales.'
    },
    {
      icon: Plane,
      title: 'Viajes & Experiencias',
      description: 'Descubre y únete a viajes grupales y experiencias exclusivas.'
    },
    {
      icon: Home,
      title: 'Alojamientos',
      description: 'Ofrece o reserva apartamentos entre miembros de la comunidad.'
    },
    {
      icon: Shield,
      title: 'Punto Lila',
      description: 'Recursos de apoyo contra violencia de género, chat de emergencia y asistencia legal.'
    },
    {
      icon: Image,
      title: 'Asesoramiento de Imagen',
      description: 'Servicios de cambio de imagen, estilo personal y consultoría de moda.'
    },
    {
      icon: Dumbbell,
      title: 'Deporte & Salud',
      description: 'Clases online, dietas personalizadas, entrenamientos y rutinas fitness.'
    },
    {
      icon: GraduationCap,
      title: 'Cursos para Emprendedoras',
      description: 'Formación práctica para influencers y mujeres que quieren lanzar su marca.'
    },
    {
      icon: Music,
      title: 'DJ Fridays & Saturdays',
      description: 'Música en vivo tipo streaming con DJs reales y filtros por género musical.'
    },
    {
      icon: Globe,
      title: 'Multilenguaje',
      description: 'Disponible en inglés, español, francés e italiano.'
    }
  ]

  return (
    <div className="section features-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Funcionalidades Principales</h2>
          <p className="section-subtitle">
            Una super-app todo-en-uno diseñada para la mujer moderna
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="feature-icon">
                <feature.icon size={28} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="features-highlight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3>13 Funcionalidades en 1 Sola App</h3>
          <p>HERCLUB elimina la necesidad de usar múltiples aplicaciones. Todo lo que una mujer moderna necesita, en un solo lugar.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Features



