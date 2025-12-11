import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './models/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { correo: createUserDto.correo },
    });

    if (existingUser) {
      throw new ConflictException('El correo ya está registrado');
    }

    const existingIdentificacion = await this.userRepository.findOne({
      where: { numeroIdentificacion: createUserDto.numeroIdentificacion },
    });

    if (existingIdentificacion) {
      throw new ConflictException('El número de identificación ya está registrado');
    }

    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return user;
  }

  async findByCorreo(correo: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { correo } });
    if (!user) {
      throw new NotFoundException(`Usuario con correo ${correo} no encontrado`);
    }
    return user;
  }

  async findByIdentificacion(numeroIdentificacion: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { numeroIdentificacion } });
    if (!user) {
      throw new NotFoundException(`Usuario con identificación ${numeroIdentificacion} no encontrado`);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);

    if (updateUserDto.correo && updateUserDto.correo !== user.correo) {
      const existingUser = await this.userRepository.findOne({
        where: { correo: updateUserDto.correo },
      });
      if (existingUser) {
        throw new ConflictException('El correo ya está en uso');
      }
    }

    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }
}
