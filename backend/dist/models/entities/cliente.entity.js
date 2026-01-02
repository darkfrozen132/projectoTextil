"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = exports.TipoCliente = exports.TipoDocumento = void 0;
const typeorm_1 = require("typeorm");
var TipoDocumento;
(function (TipoDocumento) {
    TipoDocumento["DNI"] = "DNI";
    TipoDocumento["RUC"] = "RUC";
})(TipoDocumento || (exports.TipoDocumento = TipoDocumento = {}));
var TipoCliente;
(function (TipoCliente) {
    TipoCliente["EMPRESA"] = "EMPRESA";
    TipoCliente["PERSONA_NATURAL"] = "PERSONA_NATURAL";
})(TipoCliente || (exports.TipoCliente = TipoCliente = {}));
let Cliente = class Cliente {
    idCliente;
    nombreLegal;
    numeroDocumento;
    tipoDocumento;
    tipoCliente;
    correoElectronico;
    celular;
    createdAt;
    updatedAt;
};
exports.Cliente = Cliente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_cliente' }),
    __metadata("design:type", Number)
], Cliente.prototype, "idCliente", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre_legal', length: 200 }),
    __metadata("design:type", String)
], Cliente.prototype, "nombreLegal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'numero_documento', length: 20, unique: true }),
    __metadata("design:type", String)
], Cliente.prototype, "numeroDocumento", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'tipo_documento',
        type: 'enum',
        enum: TipoDocumento,
    }),
    __metadata("design:type", String)
], Cliente.prototype, "tipoDocumento", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'tipo_cliente',
        type: 'enum',
        enum: TipoCliente,
    }),
    __metadata("design:type", String)
], Cliente.prototype, "tipoCliente", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'correo_electronico', length: 150, nullable: true }),
    __metadata("design:type", String)
], Cliente.prototype, "correoElectronico", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Cliente.prototype, "celular", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Cliente.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Cliente.prototype, "updatedAt", void 0);
exports.Cliente = Cliente = __decorate([
    (0, typeorm_1.Entity)('cliente')
], Cliente);
//# sourceMappingURL=cliente.entity.js.map