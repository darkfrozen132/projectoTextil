import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TrabajadoresService } from './trabajadores.service';
import { CreateTrabajadorDto } from './dto/create-trabajador.dto';
import { UpdateTrabajadorDto } from './dto/update-trabajador.dto';

@Controller('trabajadores')
export class TrabajadoresController {
  constructor(private readonly trabajadoresService: TrabajadoresService) {}

  @Post()
  create(@Body() createTrabajadorDto: CreateTrabajadorDto) {
    return this.trabajadoresService.create(createTrabajadorDto);
  }

  @Get()
  findAll() {
    return this.trabajadoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.trabajadoresService.findOne(id);
  }

  @Get('dni/:dni')
  findByDni(@Param('dni') dni: string) {
    return this.trabajadoresService.findByDni(dni);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTrabajadorDto: UpdateTrabajadorDto,
  ) {
    return this.trabajadoresService.update(id, updateTrabajadorDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.trabajadoresService.remove(id);
  }
}
