import { createContext, useContext, useState } from 'react'
import translations from '../translations/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es')

  const value = {
    language,
    setLanguage,
    t: (key) => {
      const keys = key.split('.')
      let result = translations[language]
      for (const k of keys) {
        result = result?.[k]
      }
      return result || key
    }
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

