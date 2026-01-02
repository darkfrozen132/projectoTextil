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
exports.FaseCorteLaser = void 0;
const typeorm_1 = require("typeorm");
const orden_fase_entity_1 = require("./orden-fase.entity");
let FaseCorteLaser = class FaseCorteLaser {
    idFase;
    fechaInicioCorte;
    encargadoCorte;
    cortadoraResponsable;
    comentario;
    fechaTerminoCorte;
    fase;
};
exports.FaseCorteLaser = FaseCorteLaser;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'id_fase' }),
    __metadata("design:type", Number)
], FaseCorteLaser.prototype, "idFase", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_inicio_corte', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], FaseCorteLaser.prototype, "fechaInicioCorte", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'encargado_corte', length: 128, nullable: true }),
    __metadata("design:type", String)
], FaseCorteLaser.prototype, "encargadoCorte", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cortadora_responsable', length: 128, nullable: true }),
    __metadata("design:type", String)
], FaseCorteLaser.prototype, "cortadoraResponsable", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FaseCorteLaser.prototype, "comentario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_termino_corte', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], FaseCorteLaser.prototype, "fechaTerminoCorte", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => orden_fase_entity_1.OrdenFase, (ordenFase) => ordenFase.faseCorteLaser, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id_fase' }),
    __metadata("design:type", orden_fase_entity_1.OrdenFase)
], FaseCorteLaser.prototype, "fase", void 0);
exports.FaseCorteLaser = FaseCorteLaser = __decorate([
    (0, typeorm_1.Entity)('fase_corte_laser')
], FaseCorteLaser);
//# sourceMappingURL=fase-corte-laser.entity.js.map