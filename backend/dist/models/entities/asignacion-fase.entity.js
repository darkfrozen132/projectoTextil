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
exports.AsignacionFase = void 0;
const typeorm_1 = require("typeorm");
const orden_fase_entity_1 = require("./orden-fase.entity");
const centro_trabajo_entity_1 = require("./centro-trabajo.entity");
const usuario_entity_1 = require("./usuario.entity");
let AsignacionFase = class AsignacionFase {
    idAsignacion;
    idFase;
    idCentroTrabajo;
    estadoAsignacion;
    asignadoPorId;
    asignadoAt;
    inicioAt;
    finAt;
    nota;
    createdAt;
    updatedAt;
    fase;
    centroTrabajo;
    asignadoPor;
};
exports.AsignacionFase = AsignacionFase;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_asignacion' }),
    __metadata("design:type", Number)
], AsignacionFase.prototype, "idAsignacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_fase' }),
    __metadata("design:type", Number)
], AsignacionFase.prototype, "idFase", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_centro_trabajo' }),
    __metadata("design:type", Number)
], AsignacionFase.prototype, "idCentroTrabajo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'estado_asignacion',
        type: 'enum',
        enum: ['EN_PROCESO', 'PAUSADA', 'FINALIZADA', 'CANCELADA'],
    }),
    __metadata("design:type", String)
], AsignacionFase.prototype, "estadoAsignacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'asignado_por', nullable: true }),
    __metadata("design:type", Number)
], AsignacionFase.prototype, "asignadoPorId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'asignado_at', type: 'datetime' }),
    __metadata("design:type", Date)
], AsignacionFase.prototype, "asignadoAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'inicio_at', type: 'datetime' }),
    __metadata("design:type", Date)
], AsignacionFase.prototype, "inicioAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fin_at', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], AsignacionFase.prototype, "finAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AsignacionFase.prototype, "nota", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], AsignacionFase.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], AsignacionFase.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => orden_fase_entity_1.OrdenFase, (ordenFase) => ordenFase.asignaciones),
    (0, typeorm_1.JoinColumn)({ name: 'id_fase' }),
    __metadata("design:type", orden_fase_entity_1.OrdenFase)
], AsignacionFase.prototype, "fase", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => centro_trabajo_entity_1.CentroTrabajo, (centroTrabajo) => centroTrabajo.asignaciones),
    (0, typeorm_1.JoinColumn)({ name: 'id_centro_trabajo' }),
    __metadata("design:type", centro_trabajo_entity_1.CentroTrabajo)
], AsignacionFase.prototype, "centroTrabajo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.asignaciones, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'asignado_por' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], AsignacionFase.prototype, "asignadoPor", void 0);
exports.AsignacionFase = AsignacionFase = __decorate([
    (0, typeorm_1.Entity)('asignacion_fase')
], AsignacionFase);
//# sourceMappingURL=asignacion-fase.entity.js.map