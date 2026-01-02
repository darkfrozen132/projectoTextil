import { FaseTipo } from './fase-tipo.entity';
import { AsignacionFase } from './asignacion-fase.entity';
export declare class CentroTrabajo {
    idCentroTrabajo: number;
    codigo: string;
    nombre: string;
    idFaseTipo: number;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    faseTipo: FaseTipo;
    asignaciones: AsignacionFase[];
}
