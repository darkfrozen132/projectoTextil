import { OrdenFase } from './orden-fase.entity';
export declare class OrdenProduccion {
    idOrden: number;
    nroOrden: string;
    nroNotaVenta: string;
    fechaRegistro: Date;
    clienteNombre: string;
    tipoTrabajo: string;
    incluyeCorteLaser: 'SI' | 'NO';
    dificultadDiseno: string;
    cantidadPiezas: number;
    metrajeAsignado: number;
    anchoAsignado: number;
    prioridadOrden: number;
    createdAt: Date;
    updatedAt: Date;
    fases: OrdenFase[];
}
