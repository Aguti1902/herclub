import { motion, AnimatePresence } from 'framer-motion'
import './Navigation.css'

function Navigation({ sections, currentSection, setCurrentSection, show }) {
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
                  {section.title}
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


