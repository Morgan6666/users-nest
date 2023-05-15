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
exports.DoctorTrainingVM = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const DoctorTraining_1 = require("../../../domain/models/DoctorTraining");
class DoctorTrainingVM {
    static fromViewModel(vm) {
        return new DoctorTraining_1.DoctorTrainingModel(vm.email, vm.training_name, vm.university, vm.year);
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Email',
        example: 'db@mail.ru',
    }),
    __metadata("design:type", String)
], DoctorTrainingVM.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Название курса повушения квалификации',
        example: 'Мед бро',
    }),
    __metadata("design:type", String)
], DoctorTrainingVM.prototype, "training_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Университет окончания',
        example: 'Первый медицинский университет',
    }),
    __metadata("design:type", String)
], DoctorTrainingVM.prototype, "university", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Год окончания',
        example: 'Год обучения',
    }),
    __metadata("design:type", String)
], DoctorTrainingVM.prototype, "year", void 0);
exports.DoctorTrainingVM = DoctorTrainingVM;
//# sourceMappingURL=DoctorTrainingVM.js.map