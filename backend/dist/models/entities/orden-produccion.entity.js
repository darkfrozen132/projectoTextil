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
exports.OrdenProduccion = void 0;
const typeorm_1 = require("typeorm");
const orden_fase_entity_1 = require("./orden-fase.entity");
let OrdenProduccion = class OrdenProduccion {
    idOrden;
    nroOrden;
    nroNotaVenta;
    fechaRegistro;
    clienteNombre;
    tipoTrabajo;
    incluyeCorteLaser;
    dificultadDiseno;
    cantidadPiezas;
    metrajeAsignado;
    anchoAsignado;
    prioridadOrden;
    createdAt;
    updatedAt;
    fases;
};
exports.OrdenProduccion = OrdenProduccion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_orden' }),
    __metadata("design:type", Number)
], OrdenProduccion.prototype, "idOrden", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nro_orden', length: 32, unique: true }),
    __metadata("design:type", String)
], OrdenProduccion.prototype, "nroOrden", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nro_nota_venta', length: 32, nullable: true }),
    __metadata("design:type", String)
], OrdenProduccion.prototype, "nroNotaVenta", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_registro', type: 'date' }),
    __metadata("design:type", Date)
], OrdenProduccion.prototype, "fechaRegistro", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cliente_nombre', length: 128 }),
    __metadata("design:type", String)
], OrdenProduccion.prototype, "clienteNombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo_trabajo', length: 64, nullable: true }),
    __metadata("design:type", String)
], OrdenProduccion.prototype, "tipoTrabajo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'incluye_corte_laser',
        type: 'enum',
        enum: ['SI', 'NO'],
    }),
    __metadata("design:type", String)
], OrdenProduccion.prototype, "incluyeCorteLaser", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dificultad_diseno', length: 64, nullable: true }),
    __metadata("design:type", String)
], OrdenProduccion.prototype, "dificultadDiseno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cantidad_piezas', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], OrdenProduccion.prototype, "cantidadPiezas", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'metraje_asignado',
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: true,
    }),
    __metadata("design:type", Number)
], OrdenProduccion.prototype, "metrajeAsignado", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'ancho_asignado',
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: true,
    }),
    __metadata("design:type", Number)
], OrdenProduccion.prototype, "anchoAsignado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'prioridad_orden', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], OrdenProduccion.prototype, "prioridadOrden", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], OrdenProduccion.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], OrdenProduccion.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => orden_fase_entity_1.OrdenFase, (ordenFase) => ordenFase.orden),
    __metadata("design:type", Array)
], OrdenProduccion.prototype, "fases", void 0);
exports.OrdenProduccion = OrdenProduccion = __decorate([
    (0, typeorm_1.Entity)('orden_produccion')
], OrdenProduccion);
//# sourceMappingURL=orden-produccion.entity.js.map