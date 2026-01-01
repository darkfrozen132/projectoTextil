# Frontend React + Vite + TypeScript

Este es el frontend del Proyecto Textil, construido con React, Vite y TypeScript.

## Estructura de carpetas

```
frontend/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Layout/      # Layout principal
│   │   └── Navbar/      # Barra de navegación
│   ├── pages/           # Páginas de la aplicación
│   │   ├── Home.tsx
│   │   ├── TrabajadoresPage.tsx
│   │   └── OrdenesProduccionPage.tsx
│   ├── services/        # Servicios para API
│   │   └── api.ts
│   ├── types/           # Tipos de TypeScript
│   │   ├── trabajador.ts
│   │   └── ordenProduccion.ts
│   ├── App.tsx          # Componente principal
│   ├── App.css
│   ├── main.tsx         # Punto de entrada
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Requisitos

- Node.js 18+
- npm o yarn

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

El servidor de desarrollo estará disponible en `http://localhost:5173`

## Compilación

```bash
npm run build
```

## Características

- ⚡ Vite para desarrollo rápido
- ⚛️ React 18
- 🔷 TypeScript
- 🎨 CSS Modules
- 🛣️ React Router para navegación
- 📡 Axios para peticiones HTTP
- 🎯 Proxy configurado para el backend en desarrollo
