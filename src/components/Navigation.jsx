import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import './Navigation.css'

function Navigation({ sections, currentSection, setCurrentSection, show }) {
  const { language } = useLanguage()
  const t = translations[language].nav
  
  const sectionTitles = {
    hero: t.inicio,
    problem: t.problema,
    solution: t.solucion,
    features: t.funcionalidades,
    market: t.mercado,
    business: t.modelo,
    investment: t.inversion,
    roadmap: t.roadmap,
    financials: t.financiero,
    branding: t.branding,
    mockups: t.mockups,
    cta: t.cta
  }
  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          className="main-nav"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="nav-container">
            <div className="nav-logo">HERCLUB</div>
            <div className="nav-links">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  className={`nav-link ${index === currentSection ? 'active' : ''}`}
                  onClick={() => setCurrentSection(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {sectionTitles[section.id]}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default Navigation


