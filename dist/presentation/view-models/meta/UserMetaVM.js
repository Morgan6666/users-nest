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
exports.UserMetaVM = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const UserMeta_1 = require("../../../domain/models/UserMeta");
class UserMetaVM {
    static fromViewModel(vm) {
        return new UserMeta_1.UserMeta(vm.user_id, vm.allergy, vm.allergyReactions, vm.smoke, vm.graft, vm.chronickDisease, vm.operation, vm.injures, vm.eatings_habbit, vm.height, vm.weight, vm.blood_group);
    }
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'User id',
        example: '1',
    }),
    __metadata("design:type", Number)
], UserMetaVM.prototype, "user_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Client allergy',
        example: 'Новокаин',
    }),
    __metadata("design:type", String)
], UserMetaVM.prototype, "allergy", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Allergy reactions',
        example: 'Сыпь',
    }),
    __metadata("design:type", String)
], UserMetaVM.prototype, "allergyReactions", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Client smoke',
        example: 'true',
    }),
    __metadata("design:type", Boolean)
], UserMetaVM.prototype, "smoke", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Client graft',
        example: '',
    }),
    __metadata("design:type", String)
], UserMetaVM.prototype, "graft", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Chronick disease',
        example: 'Мочеполовая дистония',
    }),
    __metadata("design:type", String)
], UserMetaVM.prototype, "chronickDisease", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'operations',
        example: 'Операции',
    }),
    __metadata("design:type", String)
], UserMetaVM.prototype, "operation", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'injures',
        example: '',
    }),
    __metadata("design:type", String)
], UserMetaVM.prototype, "injures", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Eatings habbits',
        example: 'Курочка',
    }),
    __metadata("design:type", String)
], UserMetaVM.prototype, "eatings_habbit", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'height',
        example: '180',
    }),
    __metadata("design:type", Number)
], UserMetaVM.prototype, "height", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'weight',
        example: '180.90',
    }),
    __metadata("design:type", Number)
], UserMetaVM.prototype, "weight", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'blood group',
        example: '0',
    }),
    __metadata("design:type", Number)
], UserMetaVM.prototype, "blood_group", void 0);
exports.UserMetaVM = UserMetaVM;
//# sourceMappingURL=UserMetaVM.js.map