import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import './LanguageSelector.css'

function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  const languages = [
    { code: 'es', label: 'ES', flag: '🇪🇸' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'de', label: 'DE', flag: '🇩🇪' }
  ]

  return (
    <div className="language-selector">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          className={`lang-btn ${language === lang.code ? 'active' : ''}`}
          onClick={() => setLanguage(lang.code)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="lang-flag">{lang.flag}</span>
          <span className="lang-label">{lang.label}</span>
        </motion.button>
      ))}
    </div>
  )
}

export default LanguageSelector

