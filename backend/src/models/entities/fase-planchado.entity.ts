import {
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { OrdenFase } from './orden-fase.entity';

@Entity('fase_planchado')
export class FasePlanchado {
  @PrimaryColumn({ name: 'id_fase' })
  idFase: number;

  @Column({ name: 'fecha_planchado', type: 'date', nullable: true })
  fechaPlanchado: Date;

  @Column({ name: 'calandra_responsable', length: 128, nullable: true })
  calandraResponsable: string;

  @Column({ name: 'temperatura_planchada', length: 32, nullable: true })
  temperaturaPlanchada: string;

  @Column({
    name: 'uso_papel_recubrimiento',
    type: 'enum',
    enum: ['SI', 'NO'],
    nullable: true,
  })
  usoPapelRecubrimiento: 'SI' | 'NO';

  @Column({ name: 'fecha_termino_planchado', type: 'date', nullable: true })
  fechaTerminoPlanchado: Date;

  @OneToOne(() => OrdenFase, (ordenFase) => ordenFase.fasePlanchado, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_fase' })
  fase: OrdenFase;
}
