import {
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { OrdenFase } from './orden-fase.entity';

@Entity('fase_impresion')
export class FaseImpresion {
  @PrimaryColumn({ name: 'id_fase' })
  idFase: number;

  @Column({ name: 'fecha_impresion', type: 'date', nullable: true })
  fechaImpresion: Date;

  @Column({
    name: 'ancho_papel_impreso',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  anchoPapelImpreso: number;

  @Column({
    name: 'metraje_real_impreso',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  metrajeRealImpreso: number;

  @Column({ name: 'nro_pass', length: 32, nullable: true })
  nroPass: string;

  @Column({ name: 'ploter_responsable', length: 128, nullable: true })
  ploterResponsable: string;

  @OneToOne(() => OrdenFase, (ordenFase) => ordenFase.faseImpresion, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_fase' })
  fase: OrdenFase;
}
