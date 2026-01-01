# 📊 Diagrama de Arquitectura MVC

## Flujo de Petición HTTP

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENTE (Frontend)                        │
│                    http://localhost:5173                          │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ HTTP Request
                             │ GET /trabajadores
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    BACKEND - NestJS Server                        │
│                    http://localhost:3000                          │
└─────────────────────────────────────────────────────────────────┘
                             │
                             │
┌─────────────────────────────────────────────────────────────────┐
│                    🎮 CONTROLLERS LAYER                           │
│                   (controllers/)                                  │
│                                                                   │
│  TrabajadoresController                                          │
│  ├─ @Get() findAll()                                             │
│  ├─ @Get(':id') findOne()                                        │
│  ├─ @Post() create()                                             │
│  ├─ @Patch(':id') update()                                       │
│  └─ @Delete(':id') remove()                                      │
│                                                                   │
│  Responsabilidades:                                              │
│  • Recibir peticiones HTTP                                       │
│  • Validar parámetros y body                                     │
│  • Llamar a servicios                                            │
│  • Retornar respuestas HTTP                                      │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ Llama métodos
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    ⚙️ SERVICES LAYER                              │
│                    (services/)                                    │
│                                                                   │
│  TrabajadoresService                                             │
│  ├─ findAll(): Promise<Trabajador[]>                            │
│  ├─ findOne(id): Promise<Trabajador>                            │
│  ├─ create(dto): Promise<Trabajador>                            │
│  ├─ update(id, dto): Promise<Trabajador>                        │
│  └─ remove(id): Promise<void>                                    │
│                                                                   │
│  Responsabilidades:                                              │
│  • Lógica de negocio                                             │
│  • Validaciones complejas                                        │
│  • Interacción con repositorios                                  │
│  • Manejo de errores de negocio                                  │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ Usa
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    📦 MODELS LAYER                                │
│                    (models/)                                      │
│                                                                   │
│  ┌──────────────────┐         ┌──────────────────┐             │
│  │  ENTITIES        │         │  DTOs            │             │
│  │  (entities/)     │         │  (dto/)          │             │
│  │                  │         │                  │             │
│  │  Trabajador      │         │  CreateDto       │             │
│  │  @Entity()       │         │  @IsString()     │             │
│  │  @Column()       │         │  @IsNotEmpty()   │             │
│  │                  │         │                  │             │
│  │  • Mapean BD     │         │  • Validación    │             │
│  │  • TypeORM       │         │  • Transformación│             │
│  └──────────────────┘         └──────────────────┘             │
│                                                                   │
│  Responsabilidades:                                              │
│  • Definir estructura de datos                                   │
│  • Validar inputs                                                │
│  • Mapear base de datos                                          │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ TypeORM Repository
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    🗄️ DATABASE (MySQL)                            │
│                                                                   │
│  trabajadores                  orden_produccion                  │
│  ├─ id                         ├─ idOrden                        │
│  ├─ dni                        ├─ nroOrden                       │
│  ├─ nombre                     ├─ clienteNombre                  │
│  ├─ apellido                   ├─ fechaRegistro                  │
│  └─ numeroTelefono             └─ ...                            │
└─────────────────────────────────────────────────────────────────┘
```

## Flujo Completo de Ejemplo

### Escenario: Crear un nuevo trabajador

```
1️⃣ Cliente (Frontend)
   POST http://localhost:3000/trabajadores
   Body: {
     "dni": "12345678",
     "nombre": "Juan",
     "apellido": "Pérez",
     "numeroTelefono": "987654321"
   }

2️⃣ Controller (TrabajadoresController)
   @Post()
   create(@Body() createTrabajadorDto: CreateTrabajadorDto) {
     return this.trabajadoresService.create(createTrabajadorDto);
   }
   
   → Valida el DTO automáticamente
   → Llama al servicio

3️⃣ Service (TrabajadoresService)
   async create(createDto: CreateTrabajadorDto): Promise<Trabajador> {
     // Verifica si el DNI ya existe
     const existingTrabajador = await this.repository.findOne({
       where: { dni: createDto.dni }
     });
     
     if (existingTrabajador) {
       throw new ConflictException('El DNI ya está registrado');
     }
     
     // Crea y guarda el trabajador
     const trabajador = this.repository.create(createDto);
     return this.repository.save(trabajador);
   }
   
   → Ejecuta lógica de negocio
   → Interactúa con el repositorio

4️⃣ Repository (TypeORM)
   INSERT INTO trabajadores (dni, nombre, apellido, numeroTelefono)
   VALUES ('12345678', 'Juan', 'Pérez', '987654321');
   
   → Guarda en la base de datos

5️⃣ Response (al Cliente)
   Status: 201 Created
   Body: {
     "id": 1,
     "dni": "12345678",
     "nombre": "Juan",
     "apellido": "Pérez",
     "numeroTelefono": "987654321",
     "createdAt": "2025-12-31T...",
     "updatedAt": "2025-12-31T..."
   }
```

## Organización de Módulos

```
┌──────────────────────────────────────────┐
│         📦 APP MODULE (app.module.ts)     │
│                                           │
│  imports: [                               │
│    ConfigModule,                          │
│    TypeOrmModule,                         │
│    TrabajadoresModule,                    │
│    OrdenProduccionModule                  │
│  ]                                        │
└──────────────┬────────────────────────────┘
               │
       ┌───────┴────────┐
       │                │
       ▼                ▼
┌─────────────┐  ┌──────────────────┐
│ Trabajadores│  │ OrdenProduccion  │
│   Module    │  │     Module       │
├─────────────┤  ├──────────────────┤
│ Controllers │  │ Controllers      │
│ Services    │  │ Services         │
│ Entities    │  │ Entities         │
└─────────────┘  └──────────────────┘
```

## Ventajas de esta Arquitectura

✅ **Separación de Responsabilidades**
   - Cada capa tiene un propósito único y claro

✅ **Mantenibilidad**
   - Fácil localizar y modificar código
   - Cambios en una capa no afectan a las demás

✅ **Escalabilidad**
   - Agregar nuevos módulos es simple
   - Reutilización de código

✅ **Testabilidad**
   - Cada capa puede testearse independientemente
   - Mocks y stubs fáciles de crear

✅ **Claridad**
   - Nuevos desarrolladores entienden rápidamente
   - Código autodocumentado

## Comparación: Antes vs Después

### ❌ ANTES (Sin MVC)
```
src/
├── trabajadores/
│   ├── trabajadores.controller.ts
│   ├── trabajadores.service.ts
│   ├── trabajadores.module.ts
│   ├── dto/
│   └── models/
└── orden-produccion/
    ├── orden-produccion.controller.ts
    ├── orden-produccion.service.ts
    ├── orden-produccion.module.ts
    ├── dto/
    └── entities/
```
**Problema**: Código disperso, difícil de mantener

### ✅ DESPUÉS (Con MVC)
```
src/
├── controllers/        # Todos los controladores
├── services/          # Todos los servicios
├── models/            # Todos los modelos
│   ├── entities/      # Todas las entidades
│   └── dto/           # Todos los DTOs
└── modules/           # Todos los módulos
```
**Ventaja**: Estructura clara y organizada por responsabilidad
