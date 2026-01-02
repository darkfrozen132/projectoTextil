import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { AsignacionFase } from './asignacion-fase.entity';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  idUsuario: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellidos: string;

  @Column({ length: 50 })
  rol: string;

  @Column({ name: 'correo_electronico', length: 150, unique: true })
  correoElectronico: string;

  @Column({ length: 20, nullable: true })
  celular: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => AsignacionFase, (asignacion) => asignacion.asignadoPor)
  asignaciones: AsignacionFase[];
}
