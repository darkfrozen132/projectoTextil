import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { OrdenProduccion } from './orden-produccion.entity';
import { FaseTipo } from './fase-tipo.entity';
import { CentroTrabajo } from './centro-trabajo.entity';
import { AsignacionFase } from './asignacion-fase.entity';
import { FaseImpresion } from './fase-impresion.entity';
import { FasePlanchado } from './fase-planchado.entity';
import { FaseCorteLaser } from './fase-corte-laser.entity';

@Entity('orden_fase')
export class OrdenFase {
  @PrimaryGeneratedColumn({ name: 'id_fase' })
  idFase: number;

  @Column({ name: 'id_orden' })
  idOrden: number;

  @Column({ name: 'id_fase_tipo' })
  idFaseTipo: number;

  @Column({ type: 'int' })
  secuencia: number;

  @Column({
    type: 'enum',
    enum: ['PENDIENTE', 'LISTA', 'EN_PROCESO', 'BLOQUEADA', 'TERMINADA', 'CANCELADA'],
  })
  estado: 'PENDIENTE' | 'LISTA' | 'EN_PROCESO' | 'BLOQUEADA' | 'TERMINADA' | 'CANCELADA';

  @Column({ name: 'prioridad_guia', type: 'int', nullable: true })
  prioridadGuia: number;

  @Column({ name: 'fecha_inicio_prog', type: 'datetime', nullable: true })
  fechaInicioProg: Date;

  @Column({ name: 'fecha_fin_prog', type: 'datetime', nullable: true })
  fechaFinProg: Date;

  @Column({ name: 'fecha_inicio_real', type: 'datetime', nullable: true })
  fechaInicioReal: Date;

  @Column({ name: 'fecha_fin_real', type: 'datetime', nullable: true })
  fechaFinReal: Date;

  @Column({
    name: 'cantidad_plan',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  cantidadPlan: number;

  @Column({
    name: 'cantidad_ok',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  cantidadOk: number;

  @Column({
    name: 'cantidad_merma',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  cantidadMerma: number;

  @Column({ name: 'comentario_general', type: 'text', nullable: true })
  comentarioGeneral: string;

  @Column({ name: 'id_centro_trabajo', nullable: true })
  idCentroTrabajo: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => OrdenProduccion, (orden) => orden.fases)
  @JoinColumn({ name: 'id_orden' })
  orden: OrdenProduccion;

  @ManyToOne(() => FaseTipo, (faseTipo) => faseTipo.ordenesFase)
  @JoinColumn({ name: 'id_fase_tipo' })
  faseTipo: FaseTipo;

  @ManyToOne(() => CentroTrabajo, { nullable: true })
  @JoinColumn({ name: 'id_centro_trabajo' })
  centroTrabajo: CentroTrabajo;

  @OneToMany(() => AsignacionFase, (asignacion) => asignacion.fase)
  asignaciones: AsignacionFase[];

  @OneToOne(() => FaseImpresion, (faseImpresion) => faseImpresion.fase, {
    cascade: true,
  })
  faseImpresion: FaseImpresion;

  @OneToOne(() => FasePlanchado, (fasePlanchado) => fasePlanchado.fase, {
    cascade: true,
  })
  fasePlanchado: FasePlanchado;

  @OneToOne(() => FaseCorteLaser, (faseCorteLaser) => faseCorteLaser.fase, {
    cascade: true,
  })
  faseCorteLaser: FaseCorteLaser;
}
