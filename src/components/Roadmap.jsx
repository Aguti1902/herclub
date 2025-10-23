import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Roadmap.css'

function Roadmap() {
  const { t } = useLanguage()

  const phases = [
    {
      title: t('roadmap.phase1.title'),
      time: t('roadmap.phase1.time'),
      milestones: [
        t('roadmap.phase1.m1'),
        t('roadmap.phase1.m2'),
        t('roadmap.phase1.m3'),
        t('roadmap.phase1.m4')
      ]
    },
    {
      title: t('roadmap.phase2.title'),
      time: t('roadmap.phase2.time'),
      milestones: [
        t('roadmap.phase2.m1'),
        t('roadmap.phase2.m2'),
        t('roadmap.phase2.m3'),
        t('roadmap.phase2.m4')
      ]
    },
    {
      title: t('roadmap.phase3.title'),
      time: t('roadmap.phase3.time'),
      milestones: [
        t('roadmap.phase3.m1'),
        t('roadmap.phase3.m2'),
        t('roadmap.phase3.m3'),
        t('roadmap.phase3.m4')
      ]
    },
    {
      title: t('roadmap.phase4.title'),
      time: t('roadmap.phase4.time'),
      milestones: [
        t('roadmap.phase4.m1'),
        t('roadmap.phase4.m2'),
        t('roadmap.phase4.m3'),
        t('roadmap.phase4.m4')
      ]
    }
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
          <h2 className="section-title">{t('roadmap.title')}</h2>
          <p className="section-subtitle">
            {t('roadmap.subtitle')}
          </p>
        </motion.div>

        <div className="timeline">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="phase-time">{phase.time}</div>
                <h3>{phase.title}</h3>
                <div className="milestones">
                  {phase.milestones.map((milestone, idx) => (
                    <div key={idx} className="milestone">
                      <CheckCircle size={18} />
                      <span>{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Roadmap
