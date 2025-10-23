import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Globe, ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './LanguageSelector.css'

function LanguageSelector() {
  const { language } = useLanguage()
  const navigate = useNavigate()
  const { lang } = useParams()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' }
  ]

  const currentLang = languages.find(lang => lang.code === language)

  const handleLanguageChange = (langCode) => {
    navigate(`/${langCode}`)
    setIsOpen(false)
  }

  return (
    <div className="language-selector">
      <button 
        className="language-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe size={18} />
        <span className="current-lang">{currentLang.flag}</span>
        <ChevronDown size={16} className={`chevron ${isOpen ? 'open' : ''}`} />
      </button>
      
      {isOpen && (
        <>
          <div className="language-overlay" onClick={() => setIsOpen(false)} />
          <div className="language-dropdown">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`lang-option ${language === lang.code ? 'active' : ''}`}
                onClick={() => handleLanguageChange(lang.code)}
              >
                <span className="flag">{lang.flag}</span>
                <span className="label">{lang.label}</span>
                {language === lang.code && <span className="check">✓</span>}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default LanguageSelector

