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
exports.CentroTrabajo = void 0;
const typeorm_1 = require("typeorm");
const fase_tipo_entity_1 = require("./fase-tipo.entity");
const asignacion_fase_entity_1 = require("./asignacion-fase.entity");
let CentroTrabajo = class CentroTrabajo {
    idCentroTrabajo;
    codigo;
    nombre;
    idFaseTipo;
    activo;
    createdAt;
    updatedAt;
    faseTipo;
    asignaciones;
};
exports.CentroTrabajo = CentroTrabajo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_centro_trabajo' }),
    __metadata("design:type", Number)
], CentroTrabajo.prototype, "idCentroTrabajo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 32, unique: true }),
    __metadata("design:type", String)
], CentroTrabajo.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 128 }),
    __metadata("design:type", String)
], CentroTrabajo.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_fase_tipo' }),
    __metadata("design:type", Number)
], CentroTrabajo.prototype, "idFaseTipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], CentroTrabajo.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], CentroTrabajo.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], CentroTrabajo.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => fase_tipo_entity_1.FaseTipo, (faseTipo) => faseTipo.centrosTrabajo),
    (0, typeorm_1.JoinColumn)({ name: 'id_fase_tipo' }),
    __metadata("design:type", fase_tipo_entity_1.FaseTipo)
], CentroTrabajo.prototype, "faseTipo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => asignacion_fase_entity_1.AsignacionFase, (asignacion) => asignacion.centroTrabajo),
    __metadata("design:type", Array)
], CentroTrabajo.prototype, "asignaciones", void 0);
exports.CentroTrabajo = CentroTrabajo = __decorate([
    (0, typeorm_1.Entity)('centro_trabajo')
], CentroTrabajo);
//# sourceMappingURL=centro-trabajo.entity.js.map