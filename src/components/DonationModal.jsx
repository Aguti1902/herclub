import { X, Copy, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import './DonationModal.css'

function DonationModal({ isOpen, onClose }) {
  const { language } = useLanguage()
  const t = translations[language].donationModal
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const accountNumber = 'ES6121000972900200437806'
  const accountName = 'Samira Lopez Auad'
  const bankName = 'CAIXABANK SA'

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-header">
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="bank-details">
          <div className="detail-row">
            <div className="detail-label">{t.accountHolder}</div>
            <div className="detail-value">
              {accountName}
              <button 
                className="copy-btn" 
                onClick={() => copyToClipboard(accountName)}
                title={t.copy}
              >
                {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
              </button>
            </div>
          </div>

          <div className="detail-row">
            <div className="detail-label">{t.accountNumber}</div>
            <div className="detail-value iban">
              {accountNumber}
              <button 
                className="copy-btn" 
                onClick={() => copyToClipboard(accountNumber)}
                title={t.copy}
              >
                {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
              </button>
            </div>
          </div>

          <div className="detail-row">
            <div className="detail-label">{t.bankName}</div>
            <div className="detail-value">{bankName}</div>
          </div>
        </div>

        <div className="modal-footer">
          <p>{t.thanks}</p>
        </div>
      </div>
    </div>
  )
}

export default DonationModal

