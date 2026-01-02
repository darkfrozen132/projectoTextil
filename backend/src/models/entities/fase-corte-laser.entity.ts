import {
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { OrdenFase } from './orden-fase.entity';

@Entity('fase_corte_laser')
export class FaseCorteLaser {
  @PrimaryColumn({ name: 'id_fase' })
  idFase: number;

  @Column({ name: 'fecha_inicio_corte', type: 'date', nullable: true })
  fechaInicioCorte: Date;

  @Column({ name: 'encargado_corte', length: 128, nullable: true })
  encargadoCorte: string;

  @Column({ name: 'cortadora_responsable', length: 128, nullable: true })
  cortadoraResponsable: string;

  @Column({ type: 'text', nullable: true })
  comentario: string;

  @Column({ name: 'fecha_termino_corte', type: 'date', nullable: true })
  fechaTerminoCorte: Date;

  @OneToOne(() => OrdenFase, (ordenFase) => ordenFase.faseCorteLaser, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_fase' })
  fase: OrdenFase;
}
