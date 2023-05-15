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
exports.DoctorEducationVM = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const DoctorEducationModel_1 = require("../../../domain/models/DoctorEducationModel");
class DoctorEducationVM {
    static fromViewModel(vm) {
        return new DoctorEducationModel_1.DoctorEducationModel(vm.email, vm.university, vm.year, vm.department);
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Doctor email',
        example: 'db@mail.ru',
    }),
    __metadata("design:type", String)
], DoctorEducationVM.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Education university',
        example: 'Первый медицинский университет',
    }),
    __metadata("design:type", String)
], DoctorEducationVM.prototype, "university", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Year',
        example: 'Год окончания обучения',
    }),
    __metadata("design:type", String)
], DoctorEducationVM.prototype, "year", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Education department',
        example: 'Хирургическое отделение',
    }),
    __metadata("design:type", String)
], DoctorEducationVM.prototype, "department", void 0);
exports.DoctorEducationVM = DoctorEducationVM;
//# sourceMappingURL=DoctorEducationVM.js.map