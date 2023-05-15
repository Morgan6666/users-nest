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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDocumentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const UserDocumentUseCase_1 = require("../../application/use-cases/UserDocumentUseCase");
const UserDocuments_1 = require("../../domain/models/UserDocuments");
const BadRequestError_1 = require("../errors/BadRequestError");
const UnprocessableEntityError_1 = require("../errors/UnprocessableEntityError");
const PolisVM_1 = require("../view-models/documents/PolisVM");
const UserDocumentsVM_1 = require("../view-models/documents/UserDocumentsVM");
const GetUserVM_1 = require("../view-models/users/GetUserVM");
let UserDocumentsController = class UserDocumentsController {
    constructor(userDocumentsUsecase) {
        this.userDocumentsUsecase = userDocumentsUsecase;
    }
    async addUserDocuments(userDocuments) {
        const document = await this.userDocumentsUsecase.addUserDocuments(userDocuments);
        return document;
    }
    async addPolisDms(userPolis) {
        const dms = await this.userDocumentsUsecase.addUserPolis(PolisVM_1.PolisVM.fromViewModel(userPolis));
        return dms;
    }
    async getDocs(user) {
        const doc = await this.userDocumentsUsecase.getUserDocuments(GetUserVM_1.GetUserVM.fromViewModel(user));
        return doc;
    }
};
__decorate([
    (0, common_1.Post)('add'),
    (0, swagger_1.ApiOperation)({
        summary: 'Add user meta',
    }),
    (0, swagger_1.ApiResponse)({ description: "Meta add successfully", type: UserDocumentsVM_1.UserDocumentsVM }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: "The request object doesnt th expected one",
        type: BadRequestError_1.BadRequestError,
    }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({
        description: "Validation error while login user",
        type: UnprocessableEntityError_1.UnprocessableEntityError,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDocuments_1.UserDocumentsModels]),
    __metadata("design:returntype", Promise)
], UserDocumentsController.prototype, "addUserDocuments", null);
__decorate([
    (0, common_1.Post)('pol'),
    (0, swagger_1.ApiOperation)({
        summary: 'Add polis dms',
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: "The request object doesnt th expected one",
        type: BadRequestError_1.BadRequestError,
    }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({
        description: "Validation error while login user",
        type: UnprocessableEntityError_1.UnprocessableEntityError,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PolisVM_1.PolisVM]),
    __metadata("design:returntype", Promise)
], UserDocumentsController.prototype, "addPolisDms", null);
__decorate([
    (0, common_1.Post)('docs'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get docs',
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: "The request object doesnt th expected one",
        type: BadRequestError_1.BadRequestError,
    }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({
        description: "Validation error while login user",
        type: UnprocessableEntityError_1.UnprocessableEntityError,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GetUserVM_1.GetUserVM]),
    __metadata("design:returntype", Promise)
], UserDocumentsController.prototype, "getDocs", null);
UserDocumentsController = __decorate([
    (0, swagger_1.ApiTags)("Documents"),
    (0, common_1.Controller)("doc"),
    __metadata("design:paramtypes", [UserDocumentUseCase_1.UserDocumentsUsecase])
], UserDocumentsController);
exports.UserDocumentsController = UserDocumentsController;
//# sourceMappingURL=UserDocumentsController.js.map