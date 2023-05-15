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
exports.AddRecipeVM = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const AddRecipeModel_1 = require("../../../domain/models/AddRecipeModel");
class AddRecipeVM {
    static formViewModel(vm) {
        return new AddRecipeModel_1.AddRecipeModel(vm.patient_email, vm.doctor_email, vm.clinics_name, vm.drug_name, vm.expire_at, vm.validiry, vm.type_recipe, vm.mode_duration, vm.doze_count, vm.doze_per_day);
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({
        description: 'Patient email',
        example: 'test@mail.ru',
    }),
    __metadata("design:type", String)
], AddRecipeVM.prototype, "patient_email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({
        description: 'Doctor email',
        example: 'test@mail.ru',
    }),
    __metadata("design:type", String)
], AddRecipeVM.prototype, "doctor_email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Drug name',
        example: 'Новокаин',
    }),
    __metadata("design:type", String)
], AddRecipeVM.prototype, "drug_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Clinics name',
        example: 'Городская клиническая больница',
    }),
    __metadata("design:type", String)
], AddRecipeVM.prototype, "clinics_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Date recipe expire at',
        example: '1110110',
    }),
    __metadata("design:type", String)
], AddRecipeVM.prototype, "expire_at", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Date of validiry',
        example: '377373373',
    }),
    __metadata("design:type", String)
], AddRecipeVM.prototype, "validiry", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Recipe type',
        example: 'За полную стоимость',
    }),
    __metadata("design:type", String)
], AddRecipeVM.prototype, "type_recipe", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Mode of duration',
        example: 'Обычный',
    }),
    __metadata("design:type", String)
], AddRecipeVM.prototype, "mode_duration", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Doze count',
        example: '2',
    }),
    __metadata("design:type", Number)
], AddRecipeVM.prototype, "doze_count", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Doze per day',
        example: '1',
    }),
    __metadata("design:type", Number)
], AddRecipeVM.prototype, "doze_per_day", void 0);
exports.AddRecipeVM = AddRecipeVM;
//# sourceMappingURL=AddRecipeVM.js.map