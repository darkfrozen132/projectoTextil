import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrabajadoresService } from './trabajadores.service';
import { TrabajadoresController } from './trabajadores.controller';
import { Trabajador } from './models/trabajador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trabajador])],
  controllers: [TrabajadoresController],
  providers: [TrabajadoresService],
  exports: [TrabajadoresService],
})
export class TrabajadoresModule {}
