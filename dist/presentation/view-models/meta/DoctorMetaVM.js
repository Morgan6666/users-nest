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
exports.DoctorMetaVM = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const DoctorMetaModel_1 = require("../../../domain/models/DoctorMetaModel");
class DoctorMetaVM {
    static fromViewModel(vm) {
        if (vm.training_name != 'undefined') {
            return new DoctorMetaModel_1.DoctorMetaModel(vm.email, vm.experience, vm.category, vm.place_of_work, vm.university, vm.specialisation, vm.training_name);
        }
        else {
            return new DoctorMetaModel_1.DoctorMetaModel(vm.email, vm.experience, vm.category, vm.place_of_work, vm.university, vm.specialisation);
        }
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({
        description: 'Doctor email',
        example: 'db@mail.ry',
    }),
    __metadata("design:type", String)
], DoctorMetaVM.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Doctor experince',
        example: '10',
    }),
    __metadata("design:type", String)
], DoctorMetaVM.prototype, "experience", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Doctor category',
        example: 'Высшая категория',
    }),
    __metadata("design:type", String)
], DoctorMetaVM.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Place of work',
        example: 'Городска больница',
    }),
    __metadata("design:type", String)
], DoctorMetaVM.prototype, "place_of_work", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'University',
        example: 'Первый медицинский университет',
    }),
    __metadata("design:type", String)
], DoctorMetaVM.prototype, "university", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Doctor specialisation',
        example: 'Лечебное дело',
    }),
    __metadata("design:type", String)
], DoctorMetaVM.prototype, "specialisation", void 0);
exports.DoctorMetaVM = DoctorMetaVM;
//# sourceMappingURL=DoctorMetaVM.js.map