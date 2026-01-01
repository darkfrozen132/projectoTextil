export class CreateOrdenProduccionDto {
    nroOrden: string;
    nroNotaVenta?: string;
    fechaRegistro: Date;
    clienteNombre: string;
    tipoTrabajo?: string;
    incluyeCorteLaser: 'SI' | 'NO';
    dificultadDiseno?: string;
    cantidadPiezas?: number;
    metrajeAsignado?: number;
    anchoAsignado?: number;
    prioridadOrden?: number;
}
