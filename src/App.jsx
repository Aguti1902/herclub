import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import Market from './components/Market'
import BusinessModel from './components/BusinessModel'
import Investment from './components/Investment'
import Roadmap from './components/Roadmap'
import Financials from './components/Financials'
import Branding from './components/Branding'
import Mockups from './components/Mockups'
import CTA from './components/CTA'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [showNav, setShowNav] = useState(false)

  const sections = [
    { id: 'hero', component: Hero, title: 'Inicio' },
    { id: 'problem', component: Problem, title: 'El Problema' },
    { id: 'solution', component: Solution, title: 'La Solución' },
    { id: 'features', component: Features, title: 'Funcionalidades' },
    { id: 'market', component: Market, title: 'Mercado' },
    { id: 'business', component: BusinessModel, title: 'Modelo de Negocio' },
    { id: 'investment', component: Investment, title: 'Inversión' },
    { id: 'roadmap', component: Roadmap, title: 'Roadmap' },
    { id: 'financials', component: Financials, title: 'Proyección' },
    { id: 'branding', component: Branding, title: 'Branding' },
    { id: 'mockups', component: Mockups, title: 'Mockups' },
    { id: 'cta', component: CTA, title: 'Únete' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll al inicio cuando cambia la sección
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [currentSection])

  const CurrentComponent = sections[currentSection].component

  return (
    <div className="app">
      <Navigation 
        sections={sections} 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection}
        show={showNav}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>

      <div className="section-indicators">
        {sections.map((section, index) => (
          <button
            key={section.id}
            className={`indicator ${index === currentSection ? 'active' : ''}`}
            onClick={() => setCurrentSection(index)}
            aria-label={`Ir a ${section.title}`}
          />
        ))}
      </div>

      <div className="navigation-arrows">
        {currentSection > 0 && (
          <button 
            className="nav-arrow prev"
            onClick={() => setCurrentSection(currentSection - 1)}
          >
            ←
          </button>
        )}
        {currentSection < sections.length - 1 && (
          <button 
            className="nav-arrow next"
            onClick={() => setCurrentSection(currentSection + 1)}
          >
            →
          </button>
        )}
      </div>
    </div>
  )
}

export default App


