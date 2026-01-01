# Backend NestJS - Arquitectura MVC

Backend del Proyecto Textil construido con NestJS, TypeScript y TypeORM siguiendo el patrón de arquitectura MVC (Model-View-Controller).

## 📚 Documentación Adicional

- 📖 [ARQUITECTURA-MVC.md](ARQUITECTURA-MVC.md) - Guía completa del patrón MVC
- 📊 [DIAGRAMA-ARQUITECTURA.md](DIAGRAMA-ARQUITECTURA.md) - Diagramas visuales y flujos
- 🎯 [MEJORES-PRACTICAS.md](MEJORES-PRACTICAS.md) - Guía de buenas prácticas y ejemplos

## Arquitectura MVC

```
backend/src/
├── controllers/                    # Controllers - Manejan las peticiones HTTP
│   ├── trabajadores.controller.ts
│   └── orden-produccion.controller.ts
├── models/                         # Models - Datos y lógica de negocio
│   ├── entities/                   # Entidades de base de datos
│   │   ├── trabajador.entity.ts
│   │   └── orden-produccion.entity.ts
│   └── dto/                        # Data Transfer Objects
│       ├── trabajadores/
│       │   ├── create-trabajador.dto.ts
│       │   └── update-trabajador.dto.ts
│       └── orden-produccion/
│           ├── create-orden-produccion.dto.ts
│           └── update-orden-produccion.dto.ts
├── services/                       # Services - Lógica de negocio
│   ├── trabajadores.service.ts
│   └── orden-produccion.service.ts
├── modules/                        # Modules - Organizan la aplicación
│   ├── trabajadores.module.ts
│   └── orden-produccion.module.ts
├── config/                         # Configuraciones
│   └── database.config.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts
```

## ¿Qué es MVC?

**MVC (Model-View-Controller)** es un patrón de diseño que separa la aplicación en tres componentes principales:

- **Model (Modelos)**: Representan los datos y la lógica de negocio. En este proyecto incluyen:
  - `entities/`: Entidades de TypeORM que mapean las tablas de la base de datos
  - `dto/`: Objetos de transferencia de datos para validación y transformación

- **View (Vistas)**: En APIs REST, las "vistas" son las respuestas JSON que se envían al cliente

- **Controller (Controladores)**: Manejan las peticiones HTTP, coordinan entre servicios y devuelven respuestas

- **Services (Servicios)**: Aunque no es parte del MVC tradicional, NestJS usa servicios para la lógica de negocio compleja

## Requisitos

- Node.js 18+
- MySQL 8+
- npm o yarn

## Instalación

```bash
npm install
```

## Configuración

Crea un archivo `.env` en la raíz del backend con las siguientes variables:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=tu_password
DB_DATABASE=proyecto_textil
```

## Desarrollo

```bash
# Modo desarrollo con hot-reload
npm run start:dev

# Modo producción
npm run start:prod
```

El servidor estará disponible en `http://localhost:3000`

## Endpoints disponibles

### Trabajadores
- `GET /trabajadores` - Obtener todos los trabajadores
- `GET /trabajadores/:id` - Obtener un trabajador por ID
- `GET /trabajadores/dni/:dni` - Obtener un trabajador por DNI
- `POST /trabajadores` - Crear un nuevo trabajador
- `PATCH /trabajadores/:id` - Actualizar un trabajador
- `DELETE /trabajadores/:id` - Eliminar un trabajador

### Órdenes de Producción
- `GET /orden-produccion` - Obtener todas las órdenes
- `GET /orden-produccion/:id` - Obtener una orden por ID
- `POST /orden-produccion` - Crear una nueva orden
- `PATCH /orden-produccion/:id` - Actualizar una orden
- `DELETE /orden-produccion/:id` - Eliminar una orden

## Características

- 🏗️ Arquitectura MVC organizada y escalable
- 🚀 NestJS Framework
- 🔷 TypeScript
- 🗄️ TypeORM con MySQL
- ✅ Validación con class-validator
- 🔄 Transformación con class-transformer
- 🧪 Jest para testing
- 📝 ESLint para linting
