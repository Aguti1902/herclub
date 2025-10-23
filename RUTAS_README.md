# Sistema de Rutas Multi-idioma 🌍

## Estructura de URLs

La aplicación ahora utiliza **React Router** para gestionar rutas con slugs de idioma:

### URLs Disponibles

- **Español**: `https://tu-dominio.com/es`
- **Inglés**: `https://tu-dominio.com/en`
- **Alemán**: `https://tu-dominio.com/de`
- **Italiano**: `https://tu-dominio.com/it`

### Redirecciones Automáticas

- **Ruta raíz (`/`)**: Redirige automáticamente a `/es` (español)
- **Rutas no válidas**: Cualquier ruta no reconocida redirige a `/es`

## Cómo Funciona

### 1. **Cambio de Idioma**
Cuando el usuario selecciona un idioma desde el selector:
```javascript
// El selector cambia la URL
navigate(`/${langCode}`)  // Ej: navigate('/en')
```

### 2. **Sincronización con Contexto**
La URL es la **fuente de verdad**. Cuando cambia, el idioma se sincroniza:
```javascript
// En App.jsx - MainContent
useEffect(() => {
  if (langMap[lang]) {
    changeLanguage(langMap[lang])
  }
}, [lang, changeLanguage])
```

### 3. **Configuración Vercel**
El archivo `vercel.json` asegura que todas las rutas funcionen correctamente:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Beneficios

✅ **SEO mejorado**: Cada idioma tiene su propia URL  
✅ **Compartible**: Los usuarios pueden compartir links en un idioma específico  
✅ **Navegación del navegador**: Los botones atrás/adelante funcionan correctamente  
✅ **Bookmarks**: Los usuarios pueden guardar una página en su idioma preferido  
✅ **Analytics**: Puedes rastrear qué idiomas son más populares  

## Ejemplos de Uso

### Para compartir la propuesta en inglés:
```
https://herclub-propuesta.vercel.app/en
```

### Para compartir en alemán:
```
https://herclub-propuesta.vercel.app/de
```

### Para compartir en italiano:
```
https://herclub-propuesta.vercel.app/it
```

## Estructura de Archivos Modificados

```
src/
├── main.jsx              # BrowserRouter wrapper
├── App.jsx               # Routes con parámetro :lang
├── context/
│   └── LanguageContext.jsx  # Gestión de estado de idioma
└── components/
    └── LanguageSelector.jsx # Navegación con navigate()

vercel.json               # Configuración de rewrites
```

## Desarrollo Local

```bash
npm run dev
```

Accede a:
- `http://localhost:5173/es` - Español
- `http://localhost:5173/en` - Inglés
- `http://localhost:5173/de` - Alemán
- `http://localhost:5173/it` - Italiano

## Producción

El sistema funciona automáticamente en Vercel gracias a `vercel.json`.

---

**Nota**: El idioma por defecto es español (`/es`). Si deseas cambiar el idioma por defecto, modifica el `Navigate` en `App.jsx`:

```javascript
<Route path="/" element={<Navigate to="/en" replace />} />
```

