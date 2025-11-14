---
title: "Plataforma de Aprendizaje de Idiomas Asiáticos"
description: "Aplicación web interactiva para el aprendizaje de japonés y chino mandarín utilizando NLP y gamificación. Incluye reconocimiento de voz y análisis gramatical."
thumbnail:
  url: "/Photos/Foto_Profesional_Squared.jpg"
  alt: "Dashboard de la plataforma mostrando lecciones de japonés"
technologies:
  - TypeScript
  - Next.js
  - PostgreSQL
  - Python
  - Nagisa
  - Web Speech API
  - Tailwind CSS
  - Prisma
startDate: 2023-09-01
endDate: 2024-03-15
featured: true
status: completed
links:
  github: "https://github.com/asperjasp/asian-language-learning"
  website: "https://learn-asian-languages.vercel.app"
---

## 📚 Descripción del Proyecto

Una plataforma completa de aprendizaje de idiomas enfocada en japonés y chino mandarín, que combina técnicas modernas de NLP con gamificación para crear una experiencia de aprendizaje efectiva y entretenida.

### Características Principales

- **Lecciones interactivas**: Ejercicios dinámicos de vocabulario, gramática y kanji
- **Reconocimiento de voz**: Práctica de pronunciación con feedback en tiempo real
- **Análisis gramatical**: Parser automático usando Nagisa para japonés
- **Sistema de progreso**: Tracking detallado del avance del estudiante
- **Gamificación**: Puntos, niveles y logros para mantener la motivación
- **Tarjetas de memoria**: Sistema SRS (Spaced Repetition System) integrado

## 🎯 Motivación

Como estudiante de idiomas asiáticos, identificué la necesidad de una herramienta que:
1. Combine múltiples aspectos del aprendizaje (lectura, escritura, escucha, habla)
2. Proporcione feedback instantáneo y preciso
3. Se adapte al nivel y ritmo de cada estudiante
4. Haga el aprendizaje más divertido y menos intimidante

## 🛠️ Arquitectura Técnica

### Frontend (Next.js + TypeScript)
```typescript
// Sistema de lecciones dinámicas
interface Lesson {
  id: string;
  type: 'vocabulary' | 'grammar' | 'kanji';
  difficulty: number;
  content: LessonContent;
}
```

### Backend (API Routes + Python)
- **Nagisa**: Tokenización y análisis morfológico del japonés
- **PostgreSQL**: Base de datos para usuarios, progreso y contenido
- **Prisma**: ORM para gestión de datos type-safe

### Procesamiento de Lenguaje Natural
- Análisis de partículas japonesas
- Segmentación de palabras en chino
- Detección de errores comunes
- Sugerencias contextuales

## 📈 Métricas y Resultados

- **500+ usuarios** registrados en la beta
- **10,000+ lecciones** completadas
- **Tasa de retención**: 68% después de 30 días
- **Mejora promedio**: 45% en pruebas de vocabulario después de 2 meses
- **Calificación**: 4.7/5 estrellas de usuarios beta

## 🎨 Diseño UX/UI

La interfaz fue diseñada siguiendo principios de:
- **Claridad**: Información presentada de forma simple y directa
- **Progresión visual**: El usuario siempre sabe dónde está y hacia dónde va
- **Accesibilidad**: Soporte para lectores de pantalla y navegación por teclado
- **Responsive**: Funciona perfectamente en móvil, tablet y desktop

## 🔍 Desafíos Técnicos Superados

### 1. Integración de Nagisa
El mayor desafío fue integrar la biblioteca de Python Nagisa con el frontend de Next.js:
- Solución: API intermediaria en Python con caché inteligente
- Reducción de latencia del 80%

### 2. Reconocimiento de voz para idiomas asiáticos
La Web Speech API tiene limitaciones con tonos del chino:
- Solución: Post-procesamiento con análisis de frecuencia
- Precisión mejorada del 60% al 85%

### 3. Escalabilidad del sistema SRS
Calcular la próxima revisión para miles de tarjetas:
- Solución: Algoritmo optimizado con índices en PostgreSQL
- Tiempo de consulta reducido de 2s a 50ms

## 🎓 Aprendizajes Clave

- Procesamiento de lenguaje natural para idiomas no latinos
- Diseño de sistemas de aprendizaje adaptativo
- Optimización de rendimiento en aplicaciones full-stack
- Integración de APIs de voz y audio
- Gestión de estado complejo en React

## 🚀 Próximos Pasos

- [ ] Añadir coreano como tercer idioma
- [ ] Implementar modo de conversación con IA
- [ ] Crear contenido generado por la comunidad
- [ ] App móvil nativa (iOS y Android)
- [ ] Sistema de tutorías en vivo

## 🌟 Impacto Personal

Este proyecto no solo mejoró mis habilidades técnicas, sino que también me permitió:
- Conectar con una comunidad de estudiantes de idiomas
- Profundizar mi comprensión del japonés y chino
- Explorar el potencial de la tecnología en la educación
- Desarrollar habilidades de UX/UI y diseño de producto

---

**Nota**: El proyecto está en desarrollo activo. ¡Contribuciones y feedback son bienvenidos!
