import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

// Cargar variables de entorno antes de usarlas
dotenv.config();

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'textil_produccion',
  entities: [__dirname + '/../models/entities/*.entity{.ts,.js}'],
  synchronize: process.env.NODE_ENV !== 'production', // Auto-crear tablas en desarrollo
  logging: process.env.NODE_ENV !== 'production',
  charset: 'utf8mb4',
};
