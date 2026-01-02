import { CentroTrabajo } from './centro-trabajo.entity';
import { OrdenFase } from './orden-fase.entity';
export declare class FaseTipo {
    idFaseTipo: number;
    codigo: string;
    nombre: string;
    descripcion: string;
    centrosTrabajo: CentroTrabajo[];
    ordenesFase: OrdenFase[];
}
