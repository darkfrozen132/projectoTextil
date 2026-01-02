import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { CentroTrabajo } from './centro-trabajo.entity';
import { OrdenFase } from './orden-fase.entity';

@Entity('fase_tipo')
export class FaseTipo {
  @PrimaryGeneratedColumn({ name: 'id_fase_tipo' })
  idFaseTipo: number;

  @Column({ length: 32, unique: true })
  codigo: string;

  @Column({ length: 64 })
  nombre: string;

  @Column({ length: 255, nullable: true })
  descripcion: string;

  @OneToMany(() => CentroTrabajo, (centroTrabajo) => centroTrabajo.faseTipo)
  centrosTrabajo: CentroTrabajo[];

  @OneToMany(() => OrdenFase, (ordenFase) => ordenFase.faseTipo)
  ordenesFase: OrdenFase[];
}
