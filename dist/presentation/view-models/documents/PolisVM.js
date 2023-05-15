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
exports.PolisVM = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const PolisDMS_1 = require("../../../domain/models/PolisDMS");
class PolisVM {
    static fromViewModel(vm) {
        return new PolisDMS_1.PolisDMS(vm.email, vm.insurence_company, vm.insurence_surename, vm.polis_number);
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'User email',
        example: 'test@mail.ru',
    }),
    __metadata("design:type", String)
], PolisVM.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Insures company',
        example: 'insurence company',
    }),
    __metadata("design:type", String)
], PolisVM.prototype, "insurence_company", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Insures name',
        example: 'insurence surename',
    }),
    __metadata("design:type", String)
], PolisVM.prototype, "insurence_surename", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Polis number',
        example: '48848488448',
    }),
    __metadata("design:type", String)
], PolisVM.prototype, "polis_number", void 0);
exports.PolisVM = PolisVM;
//# sourceMappingURL=PolisVM.js.map