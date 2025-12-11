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
  apellido: string;

  @Column({ unique: true, length: 150 })
  email: string;

  @Column()
  password: string;

  @Column({ length: 20, nullable: true })
  telefono: string;

  @Column({ default: true })
  activo: boolean;

  @Column({ type: 'enum', enum: ['admin', 'usuario', 'vendedor'], default: 'usuario' })
  rol: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
