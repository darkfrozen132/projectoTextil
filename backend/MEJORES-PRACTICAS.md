# 🎯 Mejores Prácticas - Backend MVC

## 📋 Índice
1. [Principios Generales](#principios-generales)
2. [Controllers](#controllers)
3. [Services](#services)
4. [Models](#models)
5. [Modules](#modules)
6. [Errores Comunes](#errores-comunes)

---

## Principios Generales

### ✅ DO - Hacer

1. **Separación de Responsabilidades**
   ```typescript
   // ✅ CORRECTO: Cada archivo tiene una responsabilidad
   // trabajadores.controller.ts - Solo maneja HTTP
   // trabajadores.service.ts - Solo lógica de negocio
   // trabajador.entity.ts - Solo estructura de datos
   ```

2. **Nombres Descriptivos**
   ```typescript
   // ✅ CORRECTO
   async findTrabajadorByDni(dni: string): Promise<Trabajador>
   
   // ❌ INCORRECTO
   async get(x: string): Promise<any>
   ```

3. **Tipado Fuerte**
   ```typescript
   // ✅ CORRECTO
   async create(createDto: CreateTrabajadorDto): Promise<Trabajador>
   
   // ❌ INCORRECTO
   async create(data: any): Promise<any>
   ```

### ❌ DON'T - No Hacer

1. **No mezclar responsabilidades**
   ```typescript
   // ❌ INCORRECTO: Controller con lógica de BD
   @Get()
   async findAll() {
     return this.repository.find(); // ¡NO!
   }
   
   // ✅ CORRECTO: Controller delega al servicio
   @Get()
   async findAll() {
     return this.trabajadoresService.findAll();
   }
   ```

2. **No usar `any`**
   ```typescript
   // ❌ INCORRECTO
   async process(data: any): Promise<any>
   
   // ✅ CORRECTO
   async process(data: ProcessDto): Promise<ProcessResult>
   ```

---

## Controllers

### Responsabilidades
- ✅ Definir rutas HTTP
- ✅ Validar parámetros de entrada
- ✅ Llamar servicios
- ✅ Retornar respuestas HTTP
- ❌ NO contener lógica de negocio
- ❌ NO acceder directamente a la BD

### Ejemplos

#### ✅ CORRECTO
```typescript
@Controller('trabajadores')
export class TrabajadoresController {
  constructor(
    private readonly trabajadoresService: TrabajadoresService
  ) {}

  @Get()
  @HttpCode(200)
  async findAll(): Promise<Trabajador[]> {
    return this.trabajadoresService.findAll();
  }

  @Post()
  @HttpCode(201)
  async create(
    @Body() createDto: CreateTrabajadorDto
  ): Promise<Trabajador> {
    return this.trabajadoresService.create(createDto);
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number
  ): Promise<Trabajador> {
    return this.trabajadoresService.findOne(id);
  }
}
```

#### ❌ INCORRECTO
```typescript
@Controller('trabajadores')
export class TrabajadoresController {
  constructor(
    @InjectRepository(Trabajador)
    private repository: Repository<Trabajador> // ¡NO!
  ) {}

  @Get()
  async findAll() {
    // ❌ Lógica de negocio en el controller
    const trabajadores = await this.repository.find();
    return trabajadores.filter(t => t.activo); // ¡NO!
  }
}
```

### Decoradores Comunes
```typescript
@Controller('ruta')        // Define la ruta base
@Get()                     // HTTP GET
@Post()                    // HTTP POST
@Put()                     // HTTP PUT
@Patch()                   // HTTP PATCH
@Delete()                  // HTTP DELETE
@Param('id')              // Parámetro de URL
@Body()                   // Cuerpo de la petición
@Query()                  // Query parameters
@HttpCode(201)            // Código de respuesta
```

---

## Services

### Responsabilidades
- ✅ Lógica de negocio
- ✅ Validaciones complejas
- ✅ Interactuar con repositorios
- ✅ Manejar transacciones
- ✅ Lanzar excepciones de negocio
- ❌ NO manejar HTTP directamente

### Ejemplos

#### ✅ CORRECTO
```typescript
@Injectable()
export class TrabajadoresService {
  constructor(
    @InjectRepository(Trabajador)
    private readonly trabajadorRepository: Repository<Trabajador>,
  ) {}

  async create(createDto: CreateTrabajadorDto): Promise<Trabajador> {
    // ✅ Validación de negocio
    const existingTrabajador = await this.trabajadorRepository.findOne({
      where: { dni: createDto.dni },
    });

    if (existingTrabajador) {
      throw new ConflictException('El DNI ya está registrado');
    }

    // ✅ Lógica de creación
    const trabajador = this.trabajadorRepository.create(createDto);
    return this.trabajadorRepository.save(trabajador);
  }

  async findAll(): Promise<Trabajador[]> {
    return this.trabajadorRepository.find({
      order: { nombre: 'ASC' }
    });
  }

  async findOne(id: number): Promise<Trabajador> {
    const trabajador = await this.trabajadorRepository.findOne({
      where: { id }
    });

    if (!trabajador) {
      throw new NotFoundException(
        `Trabajador con ID ${id} no encontrado`
      );
    }

    return trabajador;
  }
}
```

#### ❌ INCORRECTO
```typescript
@Injectable()
export class TrabajadoresService {
  async create(data: any) { // ❌ Sin tipado
    // ❌ Sin validaciones
    return this.repository.save(data);
  }

  async findAll() {
    // ❌ Sin manejo de errores
    return this.repository.find();
  }
}
```

### Excepciones Comunes
```typescript
throw new NotFoundException('No encontrado');
throw new ConflictException('Conflicto');
throw new BadRequestException('Petición inválida');
throw new UnauthorizedException('No autorizado');
throw new ForbiddenException('Prohibido');
```

---

## Models

### Entities (Entidades)

#### ✅ CORRECTO
```typescript
@Entity('trabajadores')
export class Trabajador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 20 })
  dni: string;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellido: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

#### Decoradores de TypeORM
```typescript
@Entity('nombre_tabla')           // Define la tabla
@PrimaryGeneratedColumn()         // ID autoincremental
@Column()                         // Columna básica
@Column({ unique: true })         // Columna única
@Column({ nullable: true })       // Columna opcional
@Column({ type: 'text' })        // Tipo específico
@CreateDateColumn()               // Fecha de creación auto
@UpdateDateColumn()               // Fecha de actualización auto
@OneToMany()                      // Relación uno a muchos
@ManyToOne()                      // Relación muchos a uno
```

### DTOs (Data Transfer Objects)

#### ✅ CORRECTO
```typescript
export class CreateTrabajadorDto {
  @IsString()
  @IsNotEmpty()
  @Length(8, 20)
  dni: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  apellido: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[0-9]{9}$/, { message: 'Teléfono inválido' })
  numeroTelefono: string;
}

export class UpdateTrabajadorDto extends PartialType(
  CreateTrabajadorDto
) {}
```

#### Validadores Comunes
```typescript
@IsString()                       // Es string
@IsNumber()                       // Es número
@IsBoolean()                      // Es booleano
@IsEmail()                        // Es email válido
@IsNotEmpty()                     // No está vacío
@IsOptional()                     // Campo opcional
@Length(min, max)                 // Longitud entre min y max
@Min(value)                       // Valor mínimo
@Max(value)                       // Valor máximo
@Matches(/regex/)                 // Coincide con regex
@IsEnum(EnumType)                 // Es valor del enum
@IsDate()                         // Es fecha válida
```

---

## Modules

### ✅ CORRECTO
```typescript
@Module({
  imports: [
    TypeOrmModule.forFeature([Trabajador]) // Importar entidad
  ],
  controllers: [TrabajadoresController],
  providers: [TrabajadoresService],
  exports: [TrabajadoresService] // Exportar si se usa en otros módulos
})
export class TrabajadoresModule {}
```

### Estructura Típica
```typescript
@Module({
  imports: [
    // Módulos que este módulo necesita
    TypeOrmModule.forFeature([Entity]),
    OtroModule
  ],
  controllers: [
    // Controllers de este módulo
    MiController
  ],
  providers: [
    // Services y providers de este módulo
    MiService
  ],
  exports: [
    // Lo que este módulo exporta para otros
    MiService
  ]
})
export class MiModule {}
```

---

## Errores Comunes

### 1. Lógica en el Controller
```typescript
// ❌ INCORRECTO
@Get()
async findAll() {
  const trabajadores = await this.service.findAll();
  return trabajadores.filter(t => t.activo); // ¡NO!
}

// ✅ CORRECTO
@Get()
async findAll() {
  return this.service.findAllActivos();
}
```

### 2. Sin Manejo de Errores
```typescript
// ❌ INCORRECTO
async findOne(id: number) {
  return this.repository.findOne({ where: { id } }); // Puede ser null
}

// ✅ CORRECTO
async findOne(id: number) {
  const item = await this.repository.findOne({ where: { id } });
  if (!item) {
    throw new NotFoundException(`Item ${id} no encontrado`);
  }
  return item;
}
```

### 3. Sin Validaciones
```typescript
// ❌ INCORRECTO
async create(data: any) {
  return this.repository.save(data);
}

// ✅ CORRECTO
async create(createDto: CreateDto) {
  // Validaciones de negocio
  await this.validateUnique(createDto);
  return this.repository.save(createDto);
}
```

### 4. Acceso Directo a Repository desde Controller
```typescript
// ❌ INCORRECTO
@Controller('trabajadores')
export class TrabajadoresController {
  constructor(
    @InjectRepository(Trabajador)
    private repository: Repository<Trabajador>
  ) {}
}

// ✅ CORRECTO
@Controller('trabajadores')
export class TrabajadoresController {
  constructor(
    private readonly trabajadoresService: TrabajadoresService
  ) {}
}
```

---

## 📚 Recursos Adicionales

- [NestJS Documentation](https://docs.nestjs.com/)
- [TypeORM Documentation](https://typeorm.io/)
- [class-validator](https://github.com/typestack/class-validator)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)

---

## ✅ Checklist de Buenas Prácticas

Antes de hacer commit, verifica:

- [ ] Controllers solo manejan HTTP
- [ ] Services contienen la lógica de negocio
- [ ] DTOs tienen validaciones
- [ ] Entities mapean correctamente la BD
- [ ] Manejo apropiado de errores
- [ ] Tipos definidos (no `any`)
- [ ] Nombres descriptivos
- [ ] Código documentado (comentarios en lógica compleja)
- [ ] Imports organizados
- [ ] Sin código duplicado
