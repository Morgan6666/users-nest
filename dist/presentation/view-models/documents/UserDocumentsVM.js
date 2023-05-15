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
exports.UserDocumentsVM = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const UserDocuments_1 = require("../../../domain/models/UserDocuments");
class UserDocumentsVM {
    static fromViewModel(vm) {
        return new UserDocuments_1.UserDocumentsModels(vm.email, vm.polisOms, vm.snils);
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
], UserDocumentsVM.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'PolisOms',
        example: '4111111111',
    }),
    __metadata("design:type", String)
], UserDocumentsVM.prototype, "polisOms", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Snils',
        example: '4774747477474',
    }),
    __metadata("design:type", String)
], UserDocumentsVM.prototype, "snils", void 0);
exports.UserDocumentsVM = UserDocumentsVM;
//# sourceMappingURL=UserDocumentsVM.js.map