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
exports.OrdenFase = void 0;
const typeorm_1 = require("typeorm");
const orden_produccion_entity_1 = require("./orden-produccion.entity");
const fase_tipo_entity_1 = require("./fase-tipo.entity");
const centro_trabajo_entity_1 = require("./centro-trabajo.entity");
const asignacion_fase_entity_1 = require("./asignacion-fase.entity");
const fase_impresion_entity_1 = require("./fase-impresion.entity");
const fase_planchado_entity_1 = require("./fase-planchado.entity");
const fase_corte_laser_entity_1 = require("./fase-corte-laser.entity");
let OrdenFase = class OrdenFase {
    idFase;
    idOrden;
    idFaseTipo;
    secuencia;
    estado;
    prioridadGuia;
    fechaInicioProg;
    fechaFinProg;
    fechaInicioReal;
    fechaFinReal;
    cantidadPlan;
    cantidadOk;
    cantidadMerma;
    comentarioGeneral;
    idCentroTrabajo;
    createdAt;
    updatedAt;
    orden;
    faseTipo;
    centroTrabajo;
    asignaciones;
    faseImpresion;
    fasePlanchado;
    faseCorteLaser;
};
exports.OrdenFase = OrdenFase;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_fase' }),
    __metadata("design:type", Number)
], OrdenFase.prototype, "idFase", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_orden' }),
    __metadata("design:type", Number)
], OrdenFase.prototype, "idOrden", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_fase_tipo' }),
    __metadata("design:type", Number)
], OrdenFase.prototype, "idFaseTipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], OrdenFase.prototype, "secuencia", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['PENDIENTE', 'LISTA', 'EN_PROCESO', 'BLOQUEADA', 'TERMINADA', 'CANCELADA'],
    }),
    __metadata("design:type", String)
], OrdenFase.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'prioridad_guia', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], OrdenFase.prototype, "prioridadGuia", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_inicio_prog', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], OrdenFase.prototype, "fechaInicioProg", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_fin_prog', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], OrdenFase.prototype, "fechaFinProg", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_inicio_real', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], OrdenFase.prototype, "fechaInicioReal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_fin_real', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], OrdenFase.prototype, "fechaFinReal", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cantidad_plan',
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: true,
    }),
    __metadata("design:type", Number)
], OrdenFase.prototype, "cantidadPlan", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cantidad_ok',
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: true,
    }),
    __metadata("design:type", Number)
], OrdenFase.prototype, "cantidadOk", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cantidad_merma',
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: true,
    }),
    __metadata("design:type", Number)
], OrdenFase.prototype, "cantidadMerma", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'comentario_general', type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrdenFase.prototype, "comentarioGeneral", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_centro_trabajo', nullable: true }),
    __metadata("design:type", Number)
], OrdenFase.prototype, "idCentroTrabajo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], OrdenFase.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], OrdenFase.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => orden_produccion_entity_1.OrdenProduccion, (orden) => orden.fases),
    (0, typeorm_1.JoinColumn)({ name: 'id_orden' }),
    __metadata("design:type", orden_produccion_entity_1.OrdenProduccion)
], OrdenFase.prototype, "orden", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => fase_tipo_entity_1.FaseTipo, (faseTipo) => faseTipo.ordenesFase),
    (0, typeorm_1.JoinColumn)({ name: 'id_fase_tipo' }),
    __metadata("design:type", fase_tipo_entity_1.FaseTipo)
], OrdenFase.prototype, "faseTipo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => centro_trabajo_entity_1.CentroTrabajo, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'id_centro_trabajo' }),
    __metadata("design:type", centro_trabajo_entity_1.CentroTrabajo)
], OrdenFase.prototype, "centroTrabajo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => asignacion_fase_entity_1.AsignacionFase, (asignacion) => asignacion.fase),
    __metadata("design:type", Array)
], OrdenFase.prototype, "asignaciones", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => fase_impresion_entity_1.FaseImpresion, (faseImpresion) => faseImpresion.fase, {
        cascade: true,
    }),
    __metadata("design:type", fase_impresion_entity_1.FaseImpresion)
], OrdenFase.prototype, "faseImpresion", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => fase_planchado_entity_1.FasePlanchado, (fasePlanchado) => fasePlanchado.fase, {
        cascade: true,
    }),
    __metadata("design:type", fase_planchado_entity_1.FasePlanchado)
], OrdenFase.prototype, "fasePlanchado", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => fase_corte_laser_entity_1.FaseCorteLaser, (faseCorteLaser) => faseCorteLaser.fase, {
        cascade: true,
    }),
    __metadata("design:type", fase_corte_laser_entity_1.FaseCorteLaser)
], OrdenFase.prototype, "faseCorteLaser", void 0);
exports.OrdenFase = OrdenFase = __decorate([
    (0, typeorm_1.Entity)('orden_fase')
], OrdenFase);
//# sourceMappingURL=orden-fase.entity.js.map