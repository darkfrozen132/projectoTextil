# Arquitectura MVC en el Backend

## 📁 Estructura de Carpetas

```
backend/src/
├── controllers/       # 🎮 CONTROLLERS - Capa de Presentación
├── models/           # 📦 MODELS - Capa de Datos
│   ├── entities/     # Entidades de base de datos (TypeORM)
│   └── dto/          # Data Transfer Objects
├── services/         # ⚙️ SERVICES - Capa de Lógica de Negocio
├── modules/          # 📦 MODULES - Organización de la aplicación
└── config/           # ⚙️ Configuraciones
```

## 🏗️ Patrón MVC Explicado

### 1. **Models (Modelos)** 📦
Representan los datos y su estructura.

**Ubicación:** `src/models/`

**Componentes:**
- **Entities** (`models/entities/`): Clases decoradas con TypeORM que mapean las tablas de la base de datos
  - `trabajador.entity.ts` → Tabla `trabajadores`
  - `orden-produccion.entity.ts` → Tabla `orden_produccion`

- **DTOs** (`models/dto/`): Objetos para transferir datos entre capas
  - `create-*.dto.ts` → Datos para crear registros
  - `update-*.dto.ts` → Datos para actualizar registros

**Ejemplo:**
```typescript
// models/entities/trabajador.entity.ts
@Entity('trabajadores')
export class Trabajador {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  nombre: string;
  // ... más campos
}
```

### 2. **Views (Vistas)** 👁️
En APIs REST, las "vistas" son las respuestas JSON. No hay archivos específicos de vista.

Las respuestas se generan automáticamente desde:
- Los controladores retornan datos
- NestJS serializa automáticamente a JSON
- Los DTOs definen qué campos se exponen

### 3. **Controllers (Controladores)** 🎮
Manejan las peticiones HTTP y coordinan las respuestas.

**Ubicación:** `src/controllers/`

**Responsabilidades:**
- Recibir peticiones HTTP (GET, POST, PUT, DELETE, etc.)
- Validar datos de entrada
- Llamar a los servicios correspondientes
- Devolver respuestas HTTP

**Ejemplo:**
```typescript
// controllers/trabajadores.controller.ts
@Controller('trabajadores')
export class TrabajadoresController {
  constructor(private readonly trabajadoresService: TrabajadoresService) {}

  @Get()
  findAll() {
    return this.trabajadoresService.findAll();
  }

  @Post()
  create(@Body() createDto: CreateTrabajadorDto) {
    return this.trabajadoresService.create(createDto);
  }
}
```

### 4. **Services (Servicios)** ⚙️
Contienen la lógica de negocio de la aplicación.

**Ubicación:** `src/services/`

**Responsabilidades:**
- Lógica de negocio compleja
- Interactuar con la base de datos (a través de repositorios)
- Validaciones de negocio
- Transformaciones de datos

**Ejemplo:**
```typescript
// services/trabajadores.service.ts
@Injectable()
export class TrabajadoresService {
  constructor(
    @InjectRepository(Trabajador)
    private trabajadorRepository: Repository<Trabajador>,
  ) {}

  async findAll(): Promise<Trabajador[]> {
    return this.trabajadorRepository.find();
  }

  async create(createDto: CreateTrabajadorDto): Promise<Trabajador> {
    // Lógica de negocio aquí
    const trabajador = this.trabajadorRepository.create(createDto);
    return this.trabajadorRepository.save(trabajador);
  }
}
```

### 5. **Modules (Módulos)** 📦
Organizan la aplicación en bloques funcionales.

**Ubicación:** `src/modules/`

**Responsabilidades:**
- Agrupar controllers, services y providers relacionados
- Definir importaciones y exportaciones
- Encapsular funcionalidad

**Ejemplo:**
```typescript
// modules/trabajadores.module.ts
@Module({
  imports: [TypeOrmModule.forFeature([Trabajador])],
  controllers: [TrabajadoresController],
  providers: [TrabajadoresService],
  exports: [TrabajadoresService],
})
export class TrabajadoresModule {}
```

## 🔄 Flujo de una Petición HTTP

```
1. Cliente hace petición
   ↓
2. Controller recibe la petición
   → Valida datos con DTOs
   ↓
3. Controller llama al Service
   → Service ejecuta lógica de negocio
   → Service interactúa con Repository
   ↓
4. Repository consulta/modifica Entity en DB
   ↓
5. Service retorna datos al Controller
   ↓
6. Controller retorna respuesta HTTP al Cliente
```

**Ejemplo concreto:**

```
GET /trabajadores

Cliente → TrabajadoresController.findAll()
          → TrabajadoresService.findAll()
             → Repository.find()
                → Base de datos
             ← Array<Trabajador>
          ← Array<Trabajador>
Cliente ← JSON response
```

## 📝 Ventajas de MVC

1. **Separación de Responsabilidades**: Cada capa tiene un propósito específico
2. **Mantenibilidad**: Fácil localizar y modificar código
3. **Escalabilidad**: Agregar nuevas funcionalidades sin afectar el resto
4. **Testabilidad**: Cada capa puede probarse independientemente
5. **Reutilización**: Los servicios pueden usarse en múltiples controladores

## 🎯 Buenas Prácticas

### Controllers
- ✅ Solo manejan HTTP (rutas, peticiones, respuestas)
- ✅ Delgados: Mínima lógica
- ❌ No contienen lógica de negocio
- ❌ No acceden directamente a la base de datos

### Services
- ✅ Contienen toda la lógica de negocio
- ✅ Son reutilizables
- ✅ Manejan validaciones complejas
- ❌ No conocen detalles HTTP

### Models
- ✅ Entities mapean exactamente la estructura de BD
- ✅ DTOs validan y transforman datos de entrada
- ✅ DTOs pueden ser diferentes de Entities
- ❌ No contienen lógica de negocio compleja

## 📚 Recursos Adicionales

- [NestJS Documentation](https://docs.nestjs.com/)
- [TypeORM Documentation](https://typeorm.io/)
- [MVC Pattern Explained](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
