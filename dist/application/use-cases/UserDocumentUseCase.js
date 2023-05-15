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
var UserDocumentsUsecase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDocumentsUsecase = void 0;
const common_1 = require("@nestjs/common");
const IUserDocumentsRepository_1 = require("../ports/IUserDocumentsRepository");
const ServiceResponse_1 = require("../../infrastructure/utils/ServiceResponse");
let UserDocumentsUsecase = UserDocumentsUsecase_1 = class UserDocumentsUsecase {
    constructor(userDocumentsRepo) {
        this.userDocumentsRepo = userDocumentsRepo;
        this.logger = new common_1.Logger(UserDocumentsUsecase_1.name);
        this.serviceRes = new ServiceResponse_1.ServiceResponse();
    }
    async addUserDocuments(doc) {
        const checkDoc = await this.userDocumentsRepo.checkUserDocument(doc);
        this.logger.warn(`Проверка документво пользователя в бд:${checkDoc}`);
        if (!checkDoc) {
            const result = await this.userDocumentsRepo.addUserDocuments(doc);
            this.logger.warn(`Данные добавления документов пользователя:${result}`);
            return this.serviceRes.documentsAddSuccessfully();
        }
        else {
            return this.serviceRes.documentsAlreadyExists();
        }
    }
    async addUserPolis(pol) {
        const checkPolis = await this.userDocumentsRepo.checkPolisExist(pol);
        this.logger.warn(`Проверка полиса пользователя в бд:${checkPolis}`);
        if (!checkPolis) {
            const result = await this.userDocumentsRepo.addUserPolisDMS(pol);
            this.logger.warn(`Результат добавления полиса в бд:${result}`);
            return this.serviceRes.polisSuccessAdded();
        }
        else {
            return this.serviceRes.polisAlreadyExists();
        }
    }
    async getUserDocuments(user) {
        const result = await this.userDocumentsRepo.getUserDocument(user);
        this.logger.warn(`Данные пользователя:${result}`);
        if (!result) {
            this.logger.warn(`Даннные не найдены:${result}`);
            return this.serviceRes.documnetsNotFound();
        }
        else {
            return this.serviceRes.uniqueSuccessRes(result);
        }
    }
};
UserDocumentsUsecase = UserDocumentsUsecase_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IUserDocumentsRepository_1.IUserDocumentsRepository])
], UserDocumentsUsecase);
exports.UserDocumentsUsecase = UserDocumentsUsecase;
//# sourceMappingURL=UserDocumentUseCase.js.map