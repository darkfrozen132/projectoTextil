export declare enum TipoDocumento {
    DNI = "DNI",
    RUC = "RUC"
}
export declare enum TipoCliente {
    EMPRESA = "EMPRESA",
    PERSONA_NATURAL = "PERSONA_NATURAL"
}
export declare class Cliente {
    idCliente: number;
    nombreLegal: string;
    numeroDocumento: string;
    tipoDocumento: TipoDocumento;
    tipoCliente: TipoCliente;
    correoElectronico: string;
    celular: string;
    createdAt: Date;
    updatedAt: Date;
}
