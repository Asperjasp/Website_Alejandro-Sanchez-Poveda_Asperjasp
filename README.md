# 🎻 Portfolio Personal - Alejandro Sánchez

Portfolio profesional con temática musical desarrollado con Astro, combinando creatividad y profesionalismo para mostrar proyectos, artículos y habilidades.

## 📋 Tabla de Contenidos

- [Comenzando](#-comenzando)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Características](#-características)
- [Páginas del Sitio](#-páginas-del-sitio)
- [Sistema de Proyectos](#-sistema-de-proyectos)
- [Configuración de EmailJS (Contacto)](#-configuración-de-emailjs-contacto)
- [Comandos Disponibles](#-comandos-disponibles)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Personalización](#-personalización)

---

## 🚀 Comenzando

### Instalación

```sh
# Clonar el repositorio
git clone https://github.com/Asperjasp/Asperjasp.github.io.git

# Instalar dependencias
bun install

# Iniciar servidor de desarrollo
bun dev
```

El sitio estará disponible en `http://localhost:4322`

### Build para Producción

```sh
# Generar build optimizado
bun build

# Previsualizar build
bun preview
```

---

## 📁 Estructura del Proyecto

```text
/
├── public/
│   ├── Photos/                    # Imágenes del sitio
│   │   ├── ASP_Gofest2025.jpg
│   │   └── Foto_Profesional_Squared.jpg
│   └── thumbnails/                # Miniaturas de proyectos
│
├── src/
│   ├── assets/                    # Assets estáticos
│   │
│   ├── components/                # Componentes reutilizables
│   │   ├── Header.astro          # Navegación con estado activo
│   │   ├── Footer.astro          # Pie de página
│   │   ├── MusicalBackground.astro  # Fondo temático SVG
│   │   ├── ContactForm.astro     # Formulario EmailJS
│   │   ├── ProjectContainer.astro   # Grid de proyectos
│   │   ├── ProjectItem.astro     # Tarjeta individual
│   │   ├── BlogContainer.astro
│   │   ├── BlogItem.astro
│   │   └── Icons/                # Iconos SVG personalizados
│   │
│   ├── content/                   # Content Collections
│   │   ├── blog/                 # Artículos del blog
│   │   │   ├── 2025/
│   │   │   ├── 2026/
│   │   │   └── 2027/
│   │   └── Projects/             # Proyectos
│   │       ├── ai-music-generator.md
│   │       └── language-learning-platform.md
│   │
│   ├── layouts/
│   │   └── Layout.astro          # Layout principal
│   │
│   ├── pages/                     # Rutas del sitio
│   │   ├── index.astro           # Página principal
│   │   ├── about.astro           # Sobre mí
│   │   ├── projects.astro        # Lista de proyectos
│   │   ├── contact.astro         # Formulario de contacto
│   │   ├── feed_rss.xml.js       # Feed RSS
│   │   ├── blog/
│   │   │   └── [...slug].astro   # Posts individuales
│   │   └── projects/
│   │       └── [slug].astro      # Proyectos individuales
│   │
│   ├── styles/
│   │   └── global.css            # Estilos globales
│   │
│   └── content.config.ts         # Configuración de colecciones
│
├── astro.config.mjs              # Configuración de Astro
├── package.json
└── tsconfig.json
```

---

## ✨ Características

### 🎨 Diseño Visual
- **Fondo Musical Temático**: Patrón SVG con pentagrama, notas musicales, clave de sol y elementos de violín
- **Esquema de Colores Profesional**: Paleta azul (#3b82f6) con alto contraste para accesibilidad
- **Responsive Design**: Adaptable a móviles, tablets y escritorio
- **Animaciones Sutiles**: Transiciones suaves y efectos hover

### 🔍 Funcionalidad
- **Búsqueda de Proyectos**: Filtrado en tiempo real por título, descripción y tecnologías
- **Sistema de Estados**: Proyectos completados, en progreso o archivados
- **Proyectos Destacados**: Toggle para mostrar solo los mejores proyectos
- **Formulario de Contacto**: Integración con EmailJS para envío directo de emails
- **RSS Feed**: Suscripción a artículos del blog
- **Navegación Activa**: Indicador visual de página actual con animación

---

## 🌐 Páginas del Sitio

### 1. **Página Principal** (`index.astro`)
- **Hero Section**: Presentación personal con foto profesional
- **Descripción**: Breve biografía y especialización
- **CTA a Proyectos**: Enlace directo a proyectos destacados
- **Fondo Musical**: Patrón SVG con elementos de violín

**Características**:
- Layout responsive con mejor spacing
- Imagen de perfil con borde y sombra
- Tipografía Merriweather Variable
- Botón call-to-action destacado

---

### 2. **Proyectos** (`projects.astro`)

Sistema completo de gestión y visualización de proyectos.

#### **Características Principales**:

**Buscador Interactivo**:
- Búsqueda en tiempo real mientras escribes
- Filtra por: título, descripción y tecnologías
- Sin necesidad de hacer clic en botones
- Feedback visual inmediato

**Filtros**:
- **Por Estado**: Completado / En Progreso / Archivado
- **Toggle Destacados**: Muestra solo proyectos marcados como `featured: true`
- **Contador de Resultados**: Muestra "X proyectos encontrados"

**Visualización**:
- Grid responsive (1/2/3 columnas según pantalla)
- Tarjetas con imagen, título, descripción
- Tags de tecnologías (máximo 4 visibles + contador "+X más")
- Badge de estado con colores distintivos:
  - ✅ **Completado**: Verde con check mark
  - ⚡ **En progreso**: Azul con rayo
  - 📦 **Archivado**: Gris con caja
- Insignia "⭐ Destacado" para proyectos especiales
- Efecto hover con elevación

**Botones de CV**:
- Descarga CV en Español
- Descarga CV en English
- Iconos de descarga

#### **Estructura de Datos**:

Los proyectos se almacenan en `src/content/Projects/` como archivos Markdown con frontmatter:

```yaml
---
title: "Nombre del Proyecto"
description: "Descripción corta (1-2 líneas)"
thumbnail:
  url: "/Photos/proyecto.jpg"
  alt: "Descripción de la imagen"
technologies: ["React", "Node.js", "PostgreSQL"]
links:
  github: "https://github.com/usuario/repo"
  demo: "https://demo.ejemplo.com"
  website: "https://proyecto.com"
startDate: 2024-01-15
endDate: 2024-06-20
featured: true
status: "completed"  # completed | in-progress | archived
---

## Contenido del proyecto en Markdown...
```

#### **Cómo Añadir un Proyecto**:

1. Crea un archivo `.md` en `src/content/Projects/`
2. Añade el frontmatter con todos los campos
3. Escribe el contenido en Markdown
4. Guarda y el proyecto aparecerá automáticamente

Ver `PROJECTS_GUIDE.md` para guía completa.

---

### 3. **Proyecto Individual** (`projects/[slug].astro`)

Página dinámica generada para cada proyecto.

**Contenido**:
- **Breadcrumb**: Navegación "Proyectos > Nombre del Proyecto"
- **Header**: Título, descripción, fechas (inicio - fin)
- **Imagen Principal**: Thumbnail del proyecto
- **Enlaces**: Botones con iconos para GitHub, Demo, Website
- **Tecnologías**: Tags de todas las tecnologías usadas
- **Contenido Markdown**: Renderizado con estilos Tailwind Typography (prose)

**Secciones Recomendadas en el Markdown**:
- Descripción General
- Objetivos del Proyecto
- Tecnologías Utilizadas
- Arquitectura/Diseño
- Características Principales
- Resultados y Métricas
- Desafíos y Soluciones
- Aprendizajes

---

### 4. **Contacto** (`contact.astro`)

Página de contacto con formulario funcional y enlaces sociales.

#### **Layout**:
- **2 columnas responsive**:
  - Izquierda: Formulario de contacto
  - Derecha: Información de contacto y redes sociales

#### **Formulario de Contacto** (`ContactForm.astro`):

**Campos**:
- Nombre completo (requerido)
- Email (requerido, validación de formato)
- Asunto (requerido)
- Mensaje (requerido, min 10 caracteres)

**Estados**:
- **Normal**: Formulario listo para llenar
- **Enviando**: Spinner animado + "Enviando..."
- **Éxito**: Mensaje verde + "¡Mensaje enviado con éxito!"
- **Error**: Mensaje rojo con detalles del error

**Diseño**:
- Gradiente azul en botón submit
- Validación en tiempo real
- Iconos personalizados
- Animaciones suaves

#### **Enlaces de Contacto**:
- 📧 **Email Personal**: alesanchezpov@gmail.com
- 🎓 **Email Académico**: asperjasp@unal.edu.co
- 🐙 **GitHub**: Asperjasp
- 💼 **LinkedIn**: Alejandro Sánchez
- 📸 **Instagram**: @asperjasp
- 🐦 **Twitter/X**: @asperjasp

---

### 5. **Blog** (`blog/[...slug].astro`)

Sistema de artículos con Content Collections.

**Características**:
- Artículos organizados por año (2025, 2026, 2027)
- Renderizado de Markdown
- Estilos con Tailwind Typography
- Feed RSS disponible en `/feed_rss.xml`

---

### 6. **Sobre Mí** (`about.astro`)

Página de presentación personal (personalizar según necesidades).

---

## 📧 Configuración de EmailJS (Contacto)

El formulario de contacto usa **EmailJS** para enviar emails directamente desde el frontend sin servidor backend.

### ¿Qué es EmailJS?

Servicio que permite enviar emails desde aplicaciones frontend. Plan gratuito: **200 emails/mes**.

---

### 🚀 Configuración Paso a Paso

#### **1. Crear Cuenta en EmailJS**

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up"
3. Crea una cuenta gratuita

#### **2. Agregar Servicio de Email**

1. En el dashboard, ve a **"Email Services"**
2. Clic en **"Add New Service"**
3. Selecciona tu proveedor (Gmail recomendado)
4. Para **Gmail**:
   - Clic en "Connect Account"
   - Autoriza EmailJS a enviar desde tu cuenta
   - Nombra el servicio (ej: "Gmail Personal")
5. **Copia el Service ID** (lo necesitarás después)

#### **3. Crear Plantilla de Email**

1. Ve a **"Email Templates"**
2. Clic en **"Create New Template"**
3. Configura:

**Subject (Asunto)**:
```
Nuevo mensaje de {{user_name}} - Portfolio
```

**Content (Cuerpo del email)**:
```
Hola Alejandro,

Has recibido un nuevo mensaje desde tu portfolio web:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Nombre: {{user_name}}
📧 Email: {{user_email}}
📝 Asunto: {{subject}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 Mensaje:

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Este mensaje fue enviado desde tu portfolio.

Para responder, simplemente responde a este email.
```

**Configuración de la plantilla**:
- **To Email**: Tu email (alesanchezpov@gmail.com)
- **From Name**: {{user_name}}
- **Reply To**: {{user_email}}
- **Guarda el Template ID**

#### **4. Obtener Public Key**

1. Ve a **"Account"** → **"General"** (o **"API Keys"**)
2. Busca tu **Public Key** (también llamada User ID)
3. Copia el valor (algo como `user_xxxxxxxxxxxxx`)

#### **5. Actualizar el Código**

Abre `src/components/ContactForm.astro` y busca las líneas **135-137**:

```javascript
// ANTES
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

// DESPUÉS (reemplaza con tus valores reales)
const PUBLIC_KEY = 'user_tu_public_key_aqui';
const SERVICE_ID = 'service_tu_id_aqui';
const TEMPLATE_ID = 'template_tu_id_aqui';
```

#### **6. Probar el Formulario**

```sh
# Inicia el servidor
bun dev

# Navega a http://localhost:4322/contact
# Llena y envía el formulario
# Verifica tu email (revisa spam si no llega)
```

---

### 🔐 Seguridad con Variables de Entorno (Opcional)

Para mayor seguridad:

1. **Crea `.env` en la raíz**:
```env
PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
```

2. **Actualiza `ContactForm.astro`**:
```javascript
const PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
```

3. **Asegúrate que `.env` esté en `.gitignore`** (ya está incluido)

---

### 📝 Variables del Formulario

| Campo en HTML | Variable en Template | Descripción |
|---------------|---------------------|-------------|
| `user_name` | `{{user_name}}` | Nombre del remitente |
| `user_email` | `{{user_email}}` | Email del remitente |
| `subject` | `{{subject}}` | Asunto del mensaje |
| `message` | `{{message}}` | Contenido del mensaje |

**Importante**: Los nombres deben coincidir EXACTAMENTE (case-sensitive).

---

### 🆘 Solución de Problemas EmailJS

**El email no llega**:
- Revisa la carpeta de spam
- Verifica la consola del navegador (F12) por errores
- Confirma que las 3 claves sean correctas
- Chequea el límite de 200 emails/mes

**Error: "Public Key not valid"**:
- Copia nuevamente desde Account → General
- Elimina espacios extra al principio/final

**Error: "Template not found"**:
- Verifica el Template ID
- Asegúrate que el template esté guardado y activo

**Emails sin formato**:
- Revisa que las variables `{{variable}}` coincidan exactamente
- Son case-sensitive: `{{user_name}}` ≠ `{{User_Name}}`

---

## 🧞 Comandos Disponibles

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando | Acción |
|---------|--------|
| `bun install` | Instala dependencias |
| `bun dev` | Inicia servidor en `localhost:4322` |
| `bun build` | Genera build de producción en `./dist/` |
| `bun preview` | Previsualiza el build localmente |
| `bun astro ...` | Ejecuta comandos CLI de Astro |
| `bun astro check` | Verifica errores de TypeScript |
| `bun astro add <integration>` | Añade integraciones de Astro |

---

## 🛠️ Tecnologías Utilizadas

### Core
- **[Astro 5.15.7](https://astro.build/)**: Framework para sitios estáticos
- **[Bun 1.1.42](https://bun.sh/)**: Runtime y package manager
- **[TypeScript](https://www.typescriptlang.org/)**: Type safety

### Estilos
- **[Tailwind CSS 4.1.17](https://tailwindcss.com/)**: Utility-first CSS
- **[@fontsource-variable/merriweather](https://fontsource.org/fonts/merriweather)**: Tipografía variable

### Funcionalidad
- **[@astrojs/rss](https://docs.astro.build/en/guides/rss/)**: Feed RSS para blog
- **[@emailjs/browser 4.4.1](https://www.emailjs.com/)**: Envío de emails desde frontend
- **[@vercel/analytics](https://vercel.com/analytics)**: Analytics integrado

### Content Management
- **Astro Content Collections**: Sistema type-safe para blog y proyectos
- **Markdown**: Contenido de proyectos y artículos

### Deployment
- **[GitHub Pages](https://pages.github.com/)**: Hosting gratuito
- **[Vercel](https://vercel.com/)**: Alternativa de deployment

---

## 🎨 Personalización

### Cambiar Colores

Edita `src/styles/global.css`:

```css
/* Color principal (azul) */
--color-primary: #3b82f6;
--color-primary-hover: #60a5fa;

/* Fondo */
--bg-dark: #0f172a;
--bg-darker: #1e293b;

/* Texto */
--text-light: #f1f5f9;
--text-muted: #cbd5e1;
```

### Modificar Fondo Musical

Edita `src/components/MusicalBackground.astro`:

```astro
<!-- Cambiar opacidad -->
<div class="musical-bg" style="opacity: 0.08;">  <!-- 0.08 = 8% -->

<!-- Cambiar colores del patrón -->
<rect fill="#1e40af" ... />  <!-- Azul más oscuro -->
```

### Añadir/Quitar Secciones del Navbar

Edita `src/components/Header.astro`:

```astro
<nav>
  <a href="/">Inicio</a>
  <a href="/about">Sobre Mí</a>
  <a href="/projects">Proyectos</a>
  <a href="/blog">Blog</a>  <!-- Añadir nueva sección -->
  <a href="/contact">Contacto</a>
</nav>
```

### Personalizar Footer

Edita `src/components/Footer.astro` con tus redes sociales y enlaces.

---

## 📚 Recursos Adicionales

### Documentación
- [Astro Docs](https://docs.astro.build/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [EmailJS Docs](https://www.emailjs.com/docs/)

### Guías del Proyecto
- Ver archivos de ejemplo en `src/content/Projects/`
- Consultar `PROJECTS_GUIDE.md` para añadir proyectos
- Revisar comentarios en el código para detalles

---

## 📝 Notas de Desarrollo

### Instalación de Dependencias Adicionales

**RSS Feed**:
```sh
bun add @astrojs/rss
```

**Tipografía Merriweather**:
```sh
bun add @fontsource-variable/merriweather
```

**EmailJS**:
```sh
bun add @emailjs/browser
```

### Content Collections

Las colecciones de contenido están configuradas en `src/content.config.ts`:

- **Blog**: Artículos con título, descripción, fecha, autor
- **Projects**: Proyectos con esquema completo (11 campos)

Para añadir nuevos tipos de contenido, edita `content.config.ts` y crea la carpeta correspondiente.

---

## 🎯 Próximos Pasos Sugeridos

1. **Completar configuración de EmailJS**
   - Obtener las 3 claves (PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID)
   - Actualizar `ContactForm.astro`
   - Probar el formulario

2. **Añadir proyectos reales**
   - Reemplazar ejemplos con proyectos propios
   - Añadir capturas de pantalla de calidad
   - Incluir links a repositorios y demos

3. **Optimizar imágenes**
   - Usar formatos modernos (WebP, AVIF)
   - Implementar lazy loading
   - Crear versiones responsive

4. **SEO**
   - Añadir meta descriptions únicas
   - Open Graph tags para redes sociales
   - Generar sitemap.xml

5. **Analíticas**
   - Configurar eventos personalizados en Vercel Analytics
   - Trackear clicks en proyectos
   - Medir búsquedas populares

---

## 📄 Licencia

Este proyecto es personal y está disponible para referencia educativa.

---

## 👤 Autor

**Alejandro Sánchez** (Asperjasp)
- Email: alesanchezpov@gmail.com
- GitHub: [@Asperjasp](https://github.com/Asperjasp)
- Portfolio: [https://asperjasp.github.io](https://asperjasp.github.io)

---

**¿Preguntas o sugerencias?** Abre un issue o contacta a través del formulario en el sitio. 🎻✨
