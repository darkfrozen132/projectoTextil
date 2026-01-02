import { OrdenFase } from './orden-fase.entity';
export declare class FasePlanchado {
    idFase: number;
    fechaPlanchado: Date;
    calandraResponsable: string;
    temperaturaPlanchada: string;
    usoPapelRecubrimiento: 'SI' | 'NO';
    fechaTerminoPlanchado: Date;
    fase: OrdenFase;
}
