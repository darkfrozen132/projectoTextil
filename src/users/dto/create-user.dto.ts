import { IsString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellidos: string;

  @IsString()
  @IsNotEmpty()
  numeroIdentificacion: string;

  @IsEnum(['CC', 'CE', 'TI', 'NIT', 'Pasaporte'])
  tipoIdentificacion: string;

  @IsEmail()
  correo: string;

  @IsString()
  @IsNotEmpty()
  numeroTelefono: string;

  @IsString()
  @IsNotEmpty()
  direccion: string;
}
