import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTrabajadorDto {
  @IsString()
  @IsNotEmpty()
  dni: string;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsString()
  @IsNotEmpty()
  numeroTelefono: string;
}
