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
var UserMetaUsecase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMetaUsecase = void 0;
const common_1 = require("@nestjs/common");
const IUsersMetaRepository_1 = require("../ports/IUsersMetaRepository");
const UserExceptions_1 = require("../../domain/exceptions/UserExceptions");
const ServiceResponse_1 = require("../../infrastructure/utils/ServiceResponse");
let UserMetaUsecase = UserMetaUsecase_1 = class UserMetaUsecase {
    constructor(userMetaRepository) {
        this.userMetaRepository = userMetaRepository;
        this.logger = new common_1.Logger(UserMetaUsecase_1.name);
        this.userException = new UserExceptions_1.UserExceptions();
        this.serviceRes = new ServiceResponse_1.ServiceResponse();
    }
    async addUserMeta(meta) {
        const result = await this.userMetaRepository.addUserMeta(meta);
        return this.serviceRes.metaSuccessfulyAdded();
    }
    async addDoctorMeta(meta) {
        if (meta.training_name) {
            this.logger.log(`Добавление данных без тренингов(addDoctorMeta)`);
            const result = await this.userMetaRepository.addDoctorMetaByTraining(meta);
            this.logger.log(`Результат добавления данных без тренинга:${result}`);
            return this.serviceRes.documentsAddSuccessfully();
        }
        else {
            this.logger.log(`Добавление данных с тренингом(addDoctorMeta)`);
            console.log(meta);
            const result = await this.userMetaRepository.addDoctorMetaWithoutTraining(meta);
            this.logger.log(`Результат добавление данных с учётом тренинга:${result}`);
            return this.serviceRes.documentsAddSuccessfully();
        }
    }
    async addDoctorEducation(meta) {
        const result = await this.userMetaRepository.addDoctorEducation(meta);
        this.logger.log(`Данные добавления образования доктора:${result}`);
        return this.serviceRes.documentsAddSuccessfully();
    }
    async addDoctorTraining(meta) {
        const result = await this.userMetaRepository.addDoctorTraining(meta);
        this.logger.log(`Данные добавления тренингов докотора:${result}`);
        return this.serviceRes.documentsAddSuccessfully();
    }
};
UserMetaUsecase = UserMetaUsecase_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IUsersMetaRepository_1.IUsersMetaReposiotry])
], UserMetaUsecase);
exports.UserMetaUsecase = UserMetaUsecase;
//# sourceMappingURL=UserMetaUsecase.js.map