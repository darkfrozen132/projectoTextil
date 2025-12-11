import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trabajador } from './models/trabajador.entity';
import { CreateTrabajadorDto } from './dto/create-trabajador.dto';
import { UpdateTrabajadorDto } from './dto/update-trabajador.dto';

@Injectable()
export class TrabajadoresService {
  constructor(
    @InjectRepository(Trabajador)
    private readonly trabajadorRepository: Repository<Trabajador>,
  ) {}

  async create(createTrabajadorDto: CreateTrabajadorDto): Promise<Trabajador> {
    const existingTrabajador = await this.trabajadorRepository.findOne({
      where: { dni: createTrabajadorDto.dni },
    });

    if (existingTrabajador) {
      throw new ConflictException('El DNI ya está registrado');
    }

    const trabajador = this.trabajadorRepository.create(createTrabajadorDto);
    return this.trabajadorRepository.save(trabajador);
  }

  async findAll(): Promise<Trabajador[]> {
    return this.trabajadorRepository.find();
  }

  async findOne(id: number): Promise<Trabajador> {
    const trabajador = await this.trabajadorRepository.findOne({ where: { id } });
    if (!trabajador) {
      throw new NotFoundException(`Trabajador con ID ${id} no encontrado`);
    }
    return trabajador;
  }

  async findByDni(dni: string): Promise<Trabajador> {
    const trabajador = await this.trabajadorRepository.findOne({ where: { dni } });
    if (!trabajador) {
      throw new NotFoundException(`Trabajador con DNI ${dni} no encontrado`);
    }
    return trabajador;
  }

  async update(id: number, updateTrabajadorDto: UpdateTrabajadorDto): Promise<Trabajador> {
    const trabajador = await this.findOne(id);

    if (updateTrabajadorDto.dni && updateTrabajadorDto.dni !== trabajador.dni) {
      const existingTrabajador = await this.trabajadorRepository.findOne({
        where: { dni: updateTrabajadorDto.dni },
      });
      if (existingTrabajador) {
        throw new ConflictException('El DNI ya está en uso');
      }
    }

    Object.assign(trabajador, updateTrabajadorDto);
    return this.trabajadorRepository.save(trabajador);
  }

  async remove(id: number): Promise<void> {
    const trabajador = await this.findOne(id);
    await this.trabajadorRepository.remove(trabajador);
  }
}
