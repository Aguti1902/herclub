import { Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './LanguageSelector.css'

function LanguageSelector() {
  const { language, changeLanguage } = useLanguage()

  const languages = [
    { code: 'es', label: 'ES', flag: '🇪🇸' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'de', label: 'DE', flag: '🇩🇪' }
  ]

  return (
    <div className="language-selector">
      <div className="language-icon">
        <Globe size={20} />
      </div>
      <div className="language-buttons">
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`lang-btn ${language === lang.code ? 'active' : ''}`}
            onClick={() => changeLanguage(lang.code)}
            title={lang.label}
          >
            <span className="flag">{lang.flag}</span>
            <span className="label">{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageSelector

