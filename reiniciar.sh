#!/bin/bash

echo "🧹 Limpiando caché y archivos temporales..."
rm -rf dist node_modules/.vite .vite 2>/dev/null

echo "🔪 Matando servidores en puertos 5173, 5174, 5175..."
lsof -ti:5173,5174,5175 2>/dev/null | xargs kill -9 2>/dev/null

echo "⏳ Esperando 2 segundos..."
sleep 2

echo "🚀 Iniciando servidor limpio..."
npm run dev

echo ""
echo "✅ Servidor reiniciado!"
echo "📍 Abre: http://localhost:5173"
echo "🔄 Usa modo incógnito o borra caché"

