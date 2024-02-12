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
exports.TodoEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let TodoEntity = class TodoEntity {
    constructor(todo) {
        this.id = todo?.id;
        this.task = todo?.task;
        this.isDone = todo?.isDone;
        this.createdAt = todo?.createdAt;
        this.updatedAt = todo?.updatedAt;
        this.deletedAt = todo?.deletedAt;
    }
};
exports.TodoEntity = TodoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TodoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TodoEntity.prototype, "task", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_done', type: 'tinyint', width: 1 }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TodoEntity.prototype, "isDone", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TodoEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TodoEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TodoEntity.prototype, "deletedAt", void 0);
exports.TodoEntity = TodoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'todos' }),
    __metadata("design:paramtypes", [Object])
], TodoEntity);
//# sourceMappingURL=todo.entity.js.map