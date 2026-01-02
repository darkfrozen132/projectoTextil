import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum TipoDocumento {
  DNI = 'DNI',
  RUC = 'RUC',
}

export enum TipoCliente {
  EMPRESA = 'EMPRESA',
  PERSONA_NATURAL = 'PERSONA_NATURAL',
}

@Entity('cliente')
export class Cliente {
  @PrimaryGeneratedColumn({ name: 'id_cliente' })
  idCliente: number;

  @Column({ name: 'nombre_legal', length: 200 })
  nombreLegal: string;

  @Column({ name: 'numero_documento', length: 20, unique: true })
  numeroDocumento: string;

  @Column({
    name: 'tipo_documento',
    type: 'enum',
    enum: TipoDocumento,
  })
  tipoDocumento: TipoDocumento;

  @Column({
    name: 'tipo_cliente',
    type: 'enum',
    enum: TipoCliente,
  })
  tipoCliente: TipoCliente;

  @Column({ name: 'correo_electronico', length: 150, nullable: true })
  correoElectronico: string;

  @Column({ length: 20, nullable: true })
  celular: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
