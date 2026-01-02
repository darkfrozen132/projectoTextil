import { OrdenFase } from './orden-fase.entity';
import { CentroTrabajo } from './centro-trabajo.entity';
import { Usuario } from './usuario.entity';
export declare class AsignacionFase {
    idAsignacion: number;
    idFase: number;
    idCentroTrabajo: number;
    estadoAsignacion: 'EN_PROCESO' | 'PAUSADA' | 'FINALIZADA' | 'CANCELADA';
    asignadoPorId: number;
    asignadoAt: Date;
    inicioAt: Date;
    finAt: Date;
    nota: string;
    createdAt: Date;
    updatedAt: Date;
    fase: OrdenFase;
    centroTrabajo: CentroTrabajo;
    asignadoPor: Usuario;
}
