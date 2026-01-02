import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { OrdenFase } from './orden-fase.entity';

@Entity('orden_produccion')
export class OrdenProduccion {
  @PrimaryGeneratedColumn({ name: 'id_orden' })
  idOrden: number;

  @Column({ name: 'nro_orden', length: 32, unique: true })
  nroOrden: string;

  @Column({ name: 'nro_nota_venta', length: 32, nullable: true })
  nroNotaVenta: string;

  @Column({ name: 'fecha_registro', type: 'date' })
  fechaRegistro: Date;

  @Column({ name: 'cliente_nombre', length: 128 })
  clienteNombre: string;

  @Column({ name: 'tipo_trabajo', length: 64, nullable: true })
  tipoTrabajo: string;

  @Column({
    name: 'incluye_corte_laser',
    type: 'enum',
    enum: ['SI', 'NO'],
  })
  incluyeCorteLaser: 'SI' | 'NO';

  @Column({ name: 'dificultad_diseno', length: 64, nullable: true })
  dificultadDiseno: string;

  @Column({ name: 'cantidad_piezas', type: 'int', nullable: true })
  cantidadPiezas: number;

  @Column({
    name: 'metraje_asignado',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  metrajeAsignado: number;

  @Column({
    name: 'ancho_asignado',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  anchoAsignado: number;

  @Column({ name: 'prioridad_orden', type: 'int', nullable: true })
  prioridadOrden: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => OrdenFase, (ordenFase) => ordenFase.orden)
  fases: OrdenFase[];
}
