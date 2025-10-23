import { motion } from 'framer-motion'
import { Heart, Calendar, Brain, Users, MapPin, Star, MessageCircle, Shield } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import './Mockups.css'

function Mockups() {
  const { language } = useLanguage()
  const t = translations[language].mockups

  return (
    <div className="section mockups-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">
            {t.subtitle}
          </p>
          <p className="scroll-hint">{t.scrollHint}</p>
        </motion.div>

        <div className="mockups-grid">
          {/* Mockup 1: Match de Amistad */}
          <motion.div
            className="phone-mockup"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="screen-header">
                  <div className="app-logo-small">HERCLUB</div>
                  <Heart size={20} fill="currentColor" />
                </div>
                
                <div className="profile-card">
                  <div className="profile-image">
                    <Users size={60} />
                  </div>
                  <h3 className="profile-name">María, 28</h3>
                  <div className="profile-location">
                    <MapPin size={14} />
                    <span>Madrid</span>
                  </div>
                  <div className="profile-tags">
                    <span className="tag">Yoga</span>
                    <span className="tag">Viajar</span>
                    <span className="tag">Cine</span>
                  </div>
                  <p className="profile-bio">
                    Me encanta conocer gente nueva, hacer deporte y descubrir sitios cool ✨
                  </p>
                </div>

                <div className="action-buttons">
                  <button className="btn-pass">✕</button>
                  <button className="btn-match">♡</button>
                </div>
              </div>
              <div className="phone-bottom-bar"></div>
            </div>
            <div className="mockup-label">{t.labels.match}</div>
          </motion.div>

          {/* Mockup 2: Eventos */}
          <motion.div
            className="phone-mockup"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="screen-header">
                  <div className="app-logo-small">HERCLUB</div>
                  <Calendar size={20} />
                </div>

                <h3 className="screen-title">Eventos cerca de ti</h3>
                
                <div className="event-card">
                  <div className="event-icon">
                    <Calendar size={24} />
                  </div>
                  <div className="event-info">
                    <h4>Brunch de Networking</h4>
                    <p>Sábado 15:00 - Malasaña</p>
                    <div className="event-attendees">
                      <Users size={14} />
                      <span>12 asistentes</span>
                    </div>
                  </div>
                </div>

                <div className="event-card">
                  <div className="event-icon">
                    <Star size={24} />
                  </div>
                  <div className="event-info">
                    <h4>Yoga & Café</h4>
                    <p>Domingo 11:00 - Retiro</p>
                    <div className="event-attendees">
                      <Users size={14} />
                      <span>8 asistentes</span>
                    </div>
                  </div>
                </div>

                <div className="event-card">
                  <div className="event-icon">
                    <Heart size={24} />
                  </div>
                  <div className="event-info">
                    <h4>Club de Lectura</h4>
                    <p>Viernes 19:00 - Online</p>
                    <div className="event-attendees">
                      <Users size={14} />
                      <span>15 asistentes</span>
                    </div>
                  </div>
                </div>

                <button className="btn-create-event">+ Crear Evento</button>
              </div>
              <div className="phone-bottom-bar"></div>
            </div>
            <div className="mockup-label">{t.labels.events}</div>
          </motion.div>

          {/* Mockup 3: Bienestar */}
          <motion.div
            className="phone-mockup"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen wellness">
                <div className="screen-header">
                  <div className="app-logo-small">HERCLUB</div>
                  <Brain size={18} />
                </div>

                <h3 className="screen-title">Tu Bienestar</h3>

                <div className="wellness-card">
                  <div className="wellness-icon">
                    <Brain size={24} />
                  </div>
                  <div>
                    <h4>Psicóloga IA</h4>
                    <p>Disponible 24/7</p>
                  </div>
                </div>

                <div className="wellness-card">
                  <div className="wellness-icon">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4>Coaching Personal</h4>
                    <p>Sesiones guiadas</p>
                  </div>
                </div>

                <div className="wellness-card">
                  <div className="wellness-icon">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4>Carta Astral IA</h4>
                    <p>Descubre tu perfil</p>
                  </div>
                </div>

                <div className="mood-tracker">
                  <p className="mood-label">¿Cómo te sientes hoy?</p>
                  <div className="mood-options">
                    <button className="mood-btn">😊</button>
                    <button className="mood-btn">😌</button>
                    <button className="mood-btn">😔</button>
                    <button className="mood-btn">😴</button>
                  </div>
                </div>
              </div>
              <div className="phone-bottom-bar"></div>
            </div>
            <div className="mockup-label">{t.labels.wellness}</div>
          </motion.div>

          {/* Mockup 4: Viajes */}
          <motion.div
            className="phone-mockup"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="screen-header">
                  <div className="app-logo-small">HERCLUB</div>
                  <MapPin size={18} />
                </div>

                <h3 className="screen-title">Viajes & Experiencias</h3>

                <div className="travel-card featured">
                  <div className="travel-image">✈️</div>
                  <h4>Bali - Retiro Wellness</h4>
                  <p>7 días · Mayo 2024</p>
                  <div className="travel-footer">
                    <span className="travel-price">1.200€</span>
                    <span className="travel-spots">8 plazas</span>
                  </div>
                </div>

                <div className="travel-card">
                  <div className="travel-image">🏖️</div>
                  <h4>Ibiza - Fin de Semana</h4>
                  <p>3 días · Junio 2024</p>
                  <div className="travel-footer">
                    <span className="travel-price">450€</span>
                    <span className="travel-spots">12 plazas</span>
                  </div>
                </div>

                <div className="travel-card">
                  <div className="travel-image">🗼</div>
                  <h4>París - City Break</h4>
                  <p>4 días · Julio 2024</p>
                  <div className="travel-footer">
                    <span className="travel-price">650€</span>
                    <span className="travel-spots">10 plazas</span>
                  </div>
                </div>
              </div>
              <div className="phone-bottom-bar"></div>
            </div>
            <div className="mockup-label">{t.labels.travel}</div>
          </motion.div>

          {/* Mockup 5: Chat */}
          <motion.div
            className="phone-mockup"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="screen-header">
                  <div className="app-logo-small">HERCLUB</div>
                  <Heart size={18} />
                </div>

                <h3 className="screen-title">Tus Conexiones</h3>

                <div className="chat-item">
                  <div className="chat-avatar">👩</div>
                  <div className="chat-info">
                    <h4>Laura</h4>
                    <p>¡Genial! Nos vemos el sábado 🎉</p>
                  </div>
                  <span className="chat-time">10:30</span>
                </div>

                <div className="chat-item">
                  <div className="chat-avatar">👩‍🦰</div>
                  <div className="chat-info">
                    <h4>Ana</h4>
                    <p>¿Te apuntas al yoga de mañana?</p>
                  </div>
                  <span className="chat-time">Ayer</span>
                </div>

                <div className="chat-item">
                  <div className="chat-avatar">👱‍♀️</div>
                  <div className="chat-info">
                    <h4>Club de Lectura</h4>
                    <p>Nuevo libro seleccionado 📚</p>
                  </div>
                  <span className="chat-time">Lun</span>
                </div>

                <div className="chat-item">
                  <div className="chat-avatar">🧘‍♀️</div>
                  <div className="chat-info">
                    <h4>Carmen</h4>
                    <p>Me encantó el brunch! 💕</p>
                  </div>
                  <span className="chat-time">Dom</span>
                </div>

                <button className="btn-new-chat">+ Nuevo Chat</button>
              </div>
              <div className="phone-bottom-bar"></div>
            </div>
            <div className="mockup-label">{t.labels.messages}</div>
          </motion.div>

          {/* Mockup 6: Punto Lila */}
          <motion.div
            className="phone-mockup"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen punto-lila">
                <div className="screen-header">
                  <div className="app-logo-small">HERCLUB</div>
                  <Heart size={18} fill="currentColor" />
                </div>

                <div className="punto-lila-header">
                  <h3>🟣 Punto Lila</h3>
                  <p>Tu espacio seguro</p>
                </div>

                <div className="punto-lila-card emergency">
                  <h4>🚨 Ayuda Inmediata</h4>
                  <p>Línea de emergencia 24/7</p>
                  <button className="btn-emergency">Llamar Ahora</button>
                </div>

                <div className="punto-lila-card">
                  <h4>💬 Chat Confidencial</h4>
                  <p>Habla con una asesora</p>
                </div>

                <div className="punto-lila-card">
                  <h4>⚖️ Asesoría Legal</h4>
                  <p>Consulta con abogadas</p>
                </div>

                <div className="punto-lila-card">
                  <h4>📖 Guía de Recursos</h4>
                  <p>Información y apoyo</p>
                </div>
              </div>
              <div className="phone-bottom-bar"></div>
            </div>
            <div className="mockup-label">{t.labels.puntoLila}</div>
          </motion.div>
        </div>

        <motion.div
          className="mockups-features"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3>{t.designs.title}</h3>
          <div className="design-features">
            <div className="design-feature">
              <span className="feature-icon">🎨</span>
              <h4>{t.designs.features[0].title}</h4>
              <p>{t.designs.features[0].description}</p>
            </div>
            <div className="design-feature">
              <span className="feature-icon">✨</span>
              <h4>{t.designs.features[1].title}</h4>
              <p>{t.designs.features[1].description}</p>
            </div>
            <div className="design-feature">
              <span className="feature-icon">💫</span>
              <h4>{t.designs.features[2].title}</h4>
              <p>{t.designs.features[2].description}</p>
            </div>
            <div className="design-feature">
              <span className="feature-icon">🔒</span>
              <h4>{t.designs.features[3].title}</h4>
              <p>{t.designs.features[3].description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Mockups

