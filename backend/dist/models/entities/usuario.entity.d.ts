import { AsignacionFase } from './asignacion-fase.entity';
export declare class Usuario {
    idUsuario: number;
    nombre: string;
    apellidos: string;
    rol: string;
    correoElectronico: string;
    celular: string;
    createdAt: Date;
    updatedAt: Date;
    asignaciones: AsignacionFase[];
}
