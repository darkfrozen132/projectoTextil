import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellidos: string;

  @Column({ length: 50 })
  numeroIdentificacion: string;

  @Column({ type: 'enum', enum: ['CC', 'CE', 'TI', 'NIT', 'Pasaporte'], default: 'CC' })
  tipoIdentificacion: string;

  @Column({ unique: true, length: 150 })
  correo: string;

  @Column({ length: 20 })
  numeroTelefono: string;

  @Column({ length: 255 })
  direccion: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
