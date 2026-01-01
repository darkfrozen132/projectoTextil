import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { OrdenProduccionService } from '../services/orden-produccion.service';
import { CreateOrdenProduccionDto } from '../models/dto/orden-produccion/create-orden-produccion.dto';
import { UpdateOrdenProduccionDto } from '../models/dto/orden-produccion/update-orden-produccion.dto';

@Controller('orden-produccion')
export class OrdenProduccionController {
    constructor(
        private readonly ordenProduccionService: OrdenProduccionService,
    ) { }

    @Post()
    create(@Body() createOrdenProduccionDto: CreateOrdenProduccionDto) {
        return this.ordenProduccionService.create(createOrdenProduccionDto);
    }

    @Get()
    findAll() {
        return this.ordenProduccionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.ordenProduccionService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateOrdenProduccionDto: UpdateOrdenProduccionDto,
    ) {
        return this.ordenProduccionService.update(+id, updateOrdenProduccionDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.ordenProduccionService.remove(+id);
    }
}
