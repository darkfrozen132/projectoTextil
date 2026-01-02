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
exports.FaseImpresion = void 0;
const typeorm_1 = require("typeorm");
const orden_fase_entity_1 = require("./orden-fase.entity");
let FaseImpresion = class FaseImpresion {
    idFase;
    fechaImpresion;
    anchoPapelImpreso;
    metrajeRealImpreso;
    nroPass;
    ploterResponsable;
    fase;
};
exports.FaseImpresion = FaseImpresion;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'id_fase' }),
    __metadata("design:type", Number)
], FaseImpresion.prototype, "idFase", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_impresion', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], FaseImpresion.prototype, "fechaImpresion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'ancho_papel_impreso',
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: true,
    }),
    __metadata("design:type", Number)
], FaseImpresion.prototype, "anchoPapelImpreso", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'metraje_real_impreso',
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: true,
    }),
    __metadata("design:type", Number)
], FaseImpresion.prototype, "metrajeRealImpreso", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nro_pass', length: 32, nullable: true }),
    __metadata("design:type", String)
], FaseImpresion.prototype, "nroPass", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ploter_responsable', length: 128, nullable: true }),
    __metadata("design:type", String)
], FaseImpresion.prototype, "ploterResponsable", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => orden_fase_entity_1.OrdenFase, (ordenFase) => ordenFase.faseImpresion, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id_fase' }),
    __metadata("design:type", orden_fase_entity_1.OrdenFase)
], FaseImpresion.prototype, "fase", void 0);
exports.FaseImpresion = FaseImpresion = __decorate([
    (0, typeorm_1.Entity)('fase_impresion')
], FaseImpresion);
//# sourceMappingURL=fase-impresion.entity.js.map