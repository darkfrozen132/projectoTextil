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
exports.FaseTipo = void 0;
const typeorm_1 = require("typeorm");
const centro_trabajo_entity_1 = require("./centro-trabajo.entity");
const orden_fase_entity_1 = require("./orden-fase.entity");
let FaseTipo = class FaseTipo {
    idFaseTipo;
    codigo;
    nombre;
    descripcion;
    centrosTrabajo;
    ordenesFase;
};
exports.FaseTipo = FaseTipo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_fase_tipo' }),
    __metadata("design:type", Number)
], FaseTipo.prototype, "idFaseTipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 32, unique: true }),
    __metadata("design:type", String)
], FaseTipo.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 64 }),
    __metadata("design:type", String)
], FaseTipo.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], FaseTipo.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => centro_trabajo_entity_1.CentroTrabajo, (centroTrabajo) => centroTrabajo.faseTipo),
    __metadata("design:type", Array)
], FaseTipo.prototype, "centrosTrabajo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => orden_fase_entity_1.OrdenFase, (ordenFase) => ordenFase.faseTipo),
    __metadata("design:type", Array)
], FaseTipo.prototype, "ordenesFase", void 0);
exports.FaseTipo = FaseTipo = __decorate([
    (0, typeorm_1.Entity)('fase_tipo')
], FaseTipo);
//# sourceMappingURL=fase-tipo.entity.js.map