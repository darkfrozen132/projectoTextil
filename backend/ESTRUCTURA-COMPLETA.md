# 🏭 Backend Sistema Textil - Arquitectura MVC con TypeORM

Backend completo del sistema de producción textil construido con NestJS, TypeScript y TypeORM.

## 📋 Tabla de Contenidos

- [Estructura del Proyecto](#estructura-del-proyecto)
- [Base de Datos](#base-de-datos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Entidades Creadas](#entidades-creadas)

## 🏗️ Estructura del Proyecto

```
backend/
├── src/
│   ├── config/
│   │   └── database.config.ts      # Configuración de TypeORM
│   ├── models/
│   │   ├── entities/                # 📦 MODELS (Entidades TypeORM)
│   │   │   ├── fase-tipo.entity.ts
│   │   │   ├── usuario.entity.ts
│   │   │   ├── orden-produccion.entity.ts
│   │   │   ├── centro-trabajo.entity.ts
│   │   │   ├── orden-fase.entity.ts
│   │   │   ├── fase-impresion.entity.ts
│   │   │   ├── fase-planchado.entity.ts
│   │   │   ├── fase-corte-laser.entity.ts
│   │   │   ├── asignacion-fase.entity.ts
│   │   │   └── index.ts
│   │   └── dto/                     # Data Transfer Objects
│   ├── controllers/                 # 🎮 CONTROLLERS (Próximo paso)
│   ├── services/                    # ⚙️ SERVICES (Próximo paso)
│   ├── modules/                     # 📦 MODULES (Próximo paso)
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   └── main.ts
├── .env
├── .env.example
├── package.json
└── README.md
```

## 🗄️ Base de Datos

### Tablas Creadas (9 tablas)

TypeORM creará automáticamente todas estas tablas al iniciar el servidor:

#### 1. **fase_tipo**
Catálogo de tipos de fase de producción.
```typescript
- id_fase_tipo (PK)
- codigo (unique) - Ej: IMPRESION, PLANCHADO, CORTE_LASER
- nombre
- descripcion
```

#### 2. **usuario**
Usuarios del sistema.
```typescript
- id_usuario (PK)
- username (unique)
- nombre
- created_at
- updated_at
```

#### 3. **orden_produccion**
Órdenes de producción principal.
```typescript
- id_orden (PK)
- nro_orden (unique)
- nro_nota_venta
- fecha_registro
- cliente_nombre
- tipo_trabajo
- incluye_corte_laser (ENUM: SI/NO)
- dificultad_diseno
- cantidad_piezas
- metraje_asignado
- ancho_asignado
- prioridad_orden
- created_at
- updated_at
```

#### 4. **centro_trabajo**
Máquinas y estaciones de trabajo.
```typescript
- id_centro_trabajo (PK)
- codigo (unique)
- nombre
- id_fase_tipo (FK)
- activo
- created_at
- updated_at
```

#### 5. **orden_fase**
Fases de cada orden (tabla central).
```typescript
- id_fase (PK)
- id_orden (FK)
- id_fase_tipo (FK)
- secuencia
- estado (ENUM: PENDIENTE, LISTA, EN_PROCESO, BLOQUEADA, TERMINADA, CANCELADA)
- prioridad_guia
- fecha_inicio_prog
- fecha_fin_prog
- fecha_inicio_real
- fecha_fin_real
- cantidad_plan
- cantidad_ok
- cantidad_merma
- comentario_general
- id_centro_trabajo (FK - opcional)
- created_at
- updated_at
```

#### 6. **fase_impresion**
Detalles específicos de impresión (1:1 con orden_fase).
```typescript
- id_fase (PK, FK)
- fecha_impresion
- ancho_papel_impreso
- metraje_real_impreso
- nro_pass
- ploter_responsable
```

#### 7. **fase_planchado**
Detalles específicos de planchado (1:1 con orden_fase).
```typescript
- id_fase (PK, FK)
- fecha_planchado
- calandra_responsable
- temperatura_planchada
- uso_papel_recubrimiento (ENUM: SI/NO)
- fecha_termino_planchado
```

#### 8. **fase_corte_laser**
Detalles específicos de corte láser (1:1 con orden_fase).
```typescript
- id_fase (PK, FK)
- fecha_inicio_corte
- encargado_corte
- cortadora_responsable
- comentario
- fecha_termino_corte
```

#### 9. **asignacion_fase**
Historial de asignación de fases a máquinas.
```typescript
- id_asignacion (PK)
- id_fase (FK)
- id_centro_trabajo (FK)
- estado_asignacion (ENUM: EN_PROCESO, PAUSADA, FINALIZADA, CANCELADA)
- asignado_por (FK - id_usuario)
- asignado_at
- inicio_at
- fin_at
- nota
- created_at
- updated_at
```

## 🚀 Instalación

### 1. Instalar dependencias
```bash
cd backend
npm install
```

### 2. Crear la base de datos
Abre MySQL y ejecuta:
```sql
CREATE DATABASE textil_produccion CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 3. Configurar variables de entorno
Copia el archivo de ejemplo:
```bash
cp .env.example .env
```

Edita `.env` con tus credenciales:
```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=tu_password_mysql
DB_DATABASE=textil_produccion
NODE_ENV=development
```

### 4. Iniciar el servidor
```bash
npm run start:dev
```

✨ TypeORM creará automáticamente todas las tablas con sus relaciones!

## 📝 Configuración

### Variables de Entorno

| Variable | Descripción | Valor por Defecto |
|----------|-------------|-------------------|
| PORT | Puerto del servidor | 3000 |
| DB_HOST | Host de MySQL | localhost |
| DB_PORT | Puerto de MySQL | 3306 |
| DB_USERNAME | Usuario de MySQL | root |
| DB_PASSWORD | Contraseña de MySQL | (vacío) |
| DB_DATABASE | Nombre de la BD | textil_produccion |
| NODE_ENV | Entorno | development |

### TypeORM

- **Sincronización automática**: Habilitada en desarrollo (`synchronize: true`)
- **Logging**: Habilitado en desarrollo
- **Charset**: utf8mb4 (soporte completo Unicode)
- Las tablas se crean automáticamente según las entidades

## 📊 Relaciones Entre Entidades

```
FaseTipo
  ├─→ OneToMany → CentroTrabajo
  └─→ OneToMany → OrdenFase

Usuario
  └─→ OneToMany → AsignacionFase

OrdenProduccion
  └─→ OneToMany → OrdenFase

CentroTrabajo
  ├─→ ManyToOne → FaseTipo
  └─→ OneToMany → AsignacionFase

OrdenFase
  ├─→ ManyToOne → OrdenProduccion
  ├─→ ManyToOne → FaseTipo
  ├─→ ManyToOne → CentroTrabajo
  ├─→ OneToMany → AsignacionFase
  ├─→ OneToOne → FaseImpresion
  ├─→ OneToOne → FasePlanchado
  └─→ OneToOne → FaseCorteLaser

AsignacionFase
  ├─→ ManyToOne → OrdenFase
  ├─→ ManyToOne → CentroTrabajo
  └─→ ManyToOne → Usuario
```

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run start:dev       # Iniciar en modo desarrollo con hot-reload

# Producción
npm run build           # Compilar el proyecto
npm run start:prod      # Iniciar en modo producción

# Otros
npm run start:debug     # Modo debug
npm run lint            # Ejecutar linter
npm run format          # Formatear código
npm run test            # Ejecutar tests
npm run test:e2e        # Tests end-to-end
```

## ✨ Características Implementadas

- ✅ **9 Entidades completas** con todas las relaciones
- ✅ **TypeORM** configurado con sincronización automática
- ✅ **Arquitectura MVC** preparada
- ✅ **Validación de tipos** con TypeScript
- ✅ **Enums** para estados y opciones
- ✅ **Relaciones complejas** (OneToOne, OneToMany, ManyToOne)
- ✅ **Timestamps automáticos** (created_at, updated_at)
- ✅ **Configuración por entorno** (.env)
- ✅ **Charset UTF-8** completo (utf8mb4)

## 📚 Próximos Pasos

1. **Controllers** - Crear endpoints REST para cada entidad
2. **Services** - Implementar lógica de negocio
3. **DTOs** - Crear objetos de transferencia con validaciones
4. **Modules** - Organizar el código en módulos funcionales
5. **Validaciones** - Agregar class-validator a los DTOs
6. **Autenticación** - Sistema de login y JWT
7. **Documentación API** - Swagger/OpenAPI

## 🛠️ Tecnologías Utilizadas

- **NestJS** v11 - Framework backend
- **TypeScript** - Lenguaje tipado
- **TypeORM** - ORM para MySQL
- **MySQL2** - Driver de base de datos
- **class-validator** - Validación de datos
- **class-transformer** - Transformación de objetos

## 📖 Documentación de Referencia

- Basado en el esquema SQL de `datos.txt`
- Todas las tablas y relaciones del sistema de producción textil
- Compatible con los triggers y constraints del SQL original

---

**Estado**: ✅ Base de datos y entidades completadas  
**Siguiente**: Implementar Controllers, Services y Modules
