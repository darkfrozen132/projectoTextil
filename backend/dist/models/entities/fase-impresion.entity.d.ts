import { OrdenFase } from './orden-fase.entity';
export declare class FaseImpresion {
    idFase: number;
    fechaImpresion: Date;
    anchoPapelImpreso: number;
    metrajeRealImpreso: number;
    nroPass: string;
    ploterResponsable: string;
    fase: OrdenFase;
}
