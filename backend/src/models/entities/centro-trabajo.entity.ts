import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { FaseTipo } from './fase-tipo.entity';
import { AsignacionFase } from './asignacion-fase.entity';

@Entity('centro_trabajo')
export class CentroTrabajo {
  @PrimaryGeneratedColumn({ name: 'id_centro_trabajo' })
  idCentroTrabajo: number;

  @Column({ length: 32, unique: true })
  codigo: string;

  @Column({ length: 128 })
  nombre: string;

  @Column({ name: 'id_fase_tipo' })
  idFaseTipo: number;

  @Column({ type: 'boolean', default: true })
  activo: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => FaseTipo, (faseTipo) => faseTipo.centrosTrabajo)
  @JoinColumn({ name: 'id_fase_tipo' })
  faseTipo: FaseTipo;

  @OneToMany(() => AsignacionFase, (asignacion) => asignacion.centroTrabajo)
  asignaciones: AsignacionFase[];
}
