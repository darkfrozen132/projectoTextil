import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrdenProduccionDto } from '../models/dto/orden-produccion/create-orden-produccion.dto';
import { UpdateOrdenProduccionDto } from '../models/dto/orden-produccion/update-orden-produccion.dto';
import { OrdenProduccion } from '../models/entities/orden-produccion.entity';

@Injectable()
export class OrdenProduccionService {
    constructor(
        @InjectRepository(OrdenProduccion)
        private ordenProduccionRepository: Repository<OrdenProduccion>,
    ) { }

    create(createOrdenProduccionDto: CreateOrdenProduccionDto) {
        const orden = this.ordenProduccionRepository.create(
            createOrdenProduccionDto,
        );
        return this.ordenProduccionRepository.save(orden);
    }

    findAll() {
        return this.ordenProduccionRepository.find();
    }

    findOne(id: number) {
        return this.ordenProduccionRepository.findOne({ where: { idOrden: id } });
    }

    update(id: number, updateOrdenProduccionDto: UpdateOrdenProduccionDto) {
        return this.ordenProduccionRepository.update(id, updateOrdenProduccionDto);
    }

    remove(id: number) {
        return this.ordenProduccionRepository.delete(id);
    }
}
