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
exports.FasePlanchado = void 0;
const typeorm_1 = require("typeorm");
const orden_fase_entity_1 = require("./orden-fase.entity");
let FasePlanchado = class FasePlanchado {
    idFase;
    fechaPlanchado;
    calandraResponsable;
    temperaturaPlanchada;
    usoPapelRecubrimiento;
    fechaTerminoPlanchado;
    fase;
};
exports.FasePlanchado = FasePlanchado;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'id_fase' }),
    __metadata("design:type", Number)
], FasePlanchado.prototype, "idFase", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_planchado', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], FasePlanchado.prototype, "fechaPlanchado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'calandra_responsable', length: 128, nullable: true }),
    __metadata("design:type", String)
], FasePlanchado.prototype, "calandraResponsable", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'temperatura_planchada', length: 32, nullable: true }),
    __metadata("design:type", String)
], FasePlanchado.prototype, "temperaturaPlanchada", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'uso_papel_recubrimiento',
        type: 'enum',
        enum: ['SI', 'NO'],
        nullable: true,
    }),
    __metadata("design:type", String)
], FasePlanchado.prototype, "usoPapelRecubrimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_termino_planchado', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], FasePlanchado.prototype, "fechaTerminoPlanchado", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => orden_fase_entity_1.OrdenFase, (ordenFase) => ordenFase.fasePlanchado, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id_fase' }),
    __metadata("design:type", orden_fase_entity_1.OrdenFase)
], FasePlanchado.prototype, "fase", void 0);
exports.FasePlanchado = FasePlanchado = __decorate([
    (0, typeorm_1.Entity)('fase_planchado')
], FasePlanchado);
//# sourceMappingURL=fase-planchado.entity.js.map