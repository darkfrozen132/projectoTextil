import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenProduccionService } from '../services/orden-produccion.service';
import { OrdenProduccionController } from '../controllers/orden-produccion.controller';
import { OrdenProduccion } from '../models/entities/orden-produccion.entity';

@Module({
    imports: [TypeOrmModule.forFeature([OrdenProduccion])],
    controllers: [OrdenProduccionController],
    providers: [OrdenProduccionService],
})
export class OrdenProduccionModule { }
