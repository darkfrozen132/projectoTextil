import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrabajadoresService } from '../services/trabajadores.service';
import { TrabajadoresController } from '../controllers/trabajadores.controller';
import { Trabajador } from '../models/entities/trabajador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trabajador])],
  controllers: [TrabajadoresController],
  providers: [TrabajadoresService],
  exports: [TrabajadoresService],
})
export class TrabajadoresModule {}
