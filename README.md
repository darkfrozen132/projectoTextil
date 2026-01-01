# 🏭 Proyecto Textil - Sistema de Gestión

Sistema integral para la gestión de trabajadores y órdenes de producción en una planta textil.

## 📁 Estructura del Proyecto

```
projectoTextil/
├── backend/          # API REST con NestJS (Arquitectura MVC)
│   ├── src/
│   │   ├── controllers/    # 🎮 Controladores HTTP
│   │   ├── models/         # 📦 Modelos (Entities + DTOs)
│   │   ├── services/       # ⚙️ Lógica de negocio
│   │   ├── modules/        # 📦 Módulos de NestJS
│   │   └── config/         # ⚙️ Configuraciones
│   └── README.md
│
├── frontend/         # Aplicación React + Vite
│   ├── src/
│   │   ├── components/     # Componentes reutilizables
│   │   ├── pages/          # Páginas de la aplicación
│   │   ├── services/       # Servicios API
│   │   └── types/          # Tipos TypeScript
│   └── README.md
│
└── README.md         # Este archivo
```

## 🏗️ Arquitectura

### Backend - NestJS con MVC
El backend sigue el patrón **MVC (Model-View-Controller)**:
- **Models**: Entidades TypeORM + DTOs de validación
- **Controllers**: Endpoints HTTP REST
- **Services**: Lógica de negocio

Tecnologías:
- NestJS (Framework)
- TypeScript
- TypeORM (ORM)
- MySQL (Base de datos)
- class-validator (Validación)

### Frontend - React SPA
El frontend es una Single Page Application:
- React 18
- TypeScript
- Vite (Build tool)
- React Router (Navegación)
- Axios (HTTP Client)

## 🚀 Instalación Rápida

### Prerrequisitos
- Node.js 18+
- MySQL 8+
- npm o yarn

### Instrucciones para el Backend

1. Entra a la carpeta backend:
   ```bash
   cd backend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno:
   ```bash
   # Crea un archivo .env con tus credenciales de MySQL
   PORT=3000
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=root
   DB_PASSWORD=tu_password
   DB_DATABASE=proyecto_textil
   ```
4. Ejecuta el servidor en modo desarrollo:
   ```bash
   npm run start:dev
   ```

El backend estará disponible en `http://localhost:3000`

### Instrucciones para el Frontend

1. Entra a la carpeta frontend:
   ```bash
   cd frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

El frontend estará disponible en `http://localhost:5173`

## 📚 Documentación

- [Backend - Arquitectura MVC](backend/ARQUITECTURA-MVC.md) - Guía completa del patrón MVC
- [Backend - README](backend/README.md) - Documentación del backend
- [Frontend - README](frontend/README.md) - Documentación del frontend

## 🔌 API Endpoints

### Trabajadores
- `GET /trabajadores` - Listar todos los trabajadores
- `GET /trabajadores/:id` - Obtener trabajador por ID
- `GET /trabajadores/dni/:dni` - Obtener trabajador por DNI
- `POST /trabajadores` - Crear nuevo trabajador
- `PATCH /trabajadores/:id` - Actualizar trabajador
- `DELETE /trabajadores/:id` - Eliminar trabajador

### Órdenes de Producción
- `GET /orden-produccion` - Listar todas las órdenes
- `GET /orden-produccion/:id` - Obtener orden por ID
- `POST /orden-produccion` - Crear nueva orden
- `PATCH /orden-produccion/:id` - Actualizar orden
- `DELETE /orden-produccion/:id` - Eliminar orden

## 🗄️ Base de Datos

El script SQL para crear la base de datos se encuentra en el archivo `datos.txt`.

### Tablas principales:
- **trabajadores**: Información de los trabajadores
- **orden_produccion**: Órdenes de producción textil

## 🛠️ Scripts Disponibles

### Backend
```bash
npm run start:dev    # Desarrollo con hot-reload
npm run start:prod   # Producción
npm run build        # Compilar
npm run test         # Tests unitarios
npm run test:e2e     # Tests e2e
npm run lint         # Linting
```

### Frontend
```bash
npm run dev          # Desarrollo con Vite
npm run build        # Compilar para producción
npm run preview      # Preview de producción
npm run lint         # Linting
```

## 🎨 Características

✅ **Arquitectura MVC** - Backend organizado siguiendo el patrón Model-View-Controller
✅ **TypeScript** - Backend y frontend con tipado fuerte
✅ **Validación de datos** - DTOs con class-validator
✅ **ORM** - TypeORM para gestión elegante de base de datos
✅ **Interfaz moderna** - React con componentes reutilizables
✅ **Código organizado** - Estructura clara y mantenible
✅ **Hot-reload** - Desarrollo ágil tanto en backend como frontend

## 📝 Licencia

UNLICENSED - Proyecto privado

---

> **Nota**: Este proyecto ha sido reestructurado siguiendo el patrón de arquitectura MVC para mejorar la organización, mantenibilidad y escalabilidad del código.

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
