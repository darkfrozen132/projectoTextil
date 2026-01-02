import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { OrdenFase } from './orden-fase.entity';
import { CentroTrabajo } from './centro-trabajo.entity';
import { Usuario } from './usuario.entity';

@Entity('asignacion_fase')
export class AsignacionFase {
  @PrimaryGeneratedColumn({ name: 'id_asignacion' })
  idAsignacion: number;

  @Column({ name: 'id_fase' })
  idFase: number;

  @Column({ name: 'id_centro_trabajo' })
  idCentroTrabajo: number;

  @Column({
    name: 'estado_asignacion',
    type: 'enum',
    enum: ['EN_PROCESO', 'PAUSADA', 'FINALIZADA', 'CANCELADA'],
  })
  estadoAsignacion: 'EN_PROCESO' | 'PAUSADA' | 'FINALIZADA' | 'CANCELADA';

  @Column({ name: 'asignado_por', nullable: true })
  asignadoPorId: number;

  @Column({ name: 'asignado_at', type: 'datetime' })
  asignadoAt: Date;

  @Column({ name: 'inicio_at', type: 'datetime' })
  inicioAt: Date;

  @Column({ name: 'fin_at', type: 'datetime', nullable: true })
  finAt: Date;

  @Column({ type: 'text', nullable: true })
  nota: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => OrdenFase, (ordenFase) => ordenFase.asignaciones)
  @JoinColumn({ name: 'id_fase' })
  fase: OrdenFase;

  @ManyToOne(() => CentroTrabajo, (centroTrabajo) => centroTrabajo.asignaciones)
  @JoinColumn({ name: 'id_centro_trabajo' })
  centroTrabajo: CentroTrabajo;

  @ManyToOne(() => Usuario, (usuario) => usuario.asignaciones, { nullable: true })
  @JoinColumn({ name: 'asignado_por' })
  asignadoPor: Usuario;
}
