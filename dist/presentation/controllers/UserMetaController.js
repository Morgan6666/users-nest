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
exports.UserMetaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const UserMetaUsecase_1 = require("../../application/use-cases/UserMetaUsecase");
const BadRequestError_1 = require("../errors/BadRequestError");
const UnprocessableEntityError_1 = require("../errors/UnprocessableEntityError");
const DoctorEducationVM_1 = require("../view-models/meta/DoctorEducationVM");
const DoctorMetaVM_1 = require("../view-models/meta/DoctorMetaVM");
const DoctorTrainingVM_1 = require("../view-models/meta/DoctorTrainingVM");
const UserMetaVM_1 = require("../view-models/meta/UserMetaVM");
let UserMetaController = class UserMetaController {
    constructor(userMetaUsecase) {
        this.userMetaUsecase = userMetaUsecase;
    }
    async addUserMeta(userMeta) {
        const metaResult = await this.userMetaUsecase.addUserMeta(UserMetaVM_1.UserMetaVM.fromViewModel(userMeta));
        return metaResult;
    }
    async addDoctorInfo(doctorMeta) {
        const docMeta = await this.userMetaUsecase.addDoctorMeta(DoctorMetaVM_1.DoctorMetaVM.fromViewModel(doctorMeta));
        return docMeta;
    }
    async addDoctorTraining(doctorTraining) {
        const docTraining = await this.userMetaUsecase.addDoctorTraining(DoctorTrainingVM_1.DoctorTrainingVM.fromViewModel(doctorTraining));
        return docTraining;
    }
    async addDocEducation(doctorEducation) {
        const docEdu = await this.userMetaUsecase.addDoctorEducation(DoctorEducationVM_1.DoctorEducationVM.fromViewModel(doctorEducation));
        return docEdu;
    }
};
__decorate([
    (0, common_1.Post)('add'),
    (0, swagger_1.ApiOperation)({
        summary: 'Add user meta',
    }),
    (0, swagger_1.ApiResponse)({ description: 'Meta add successfully', type: UserMetaVM_1.UserMetaVM }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'The request object doesnt th expected one',
        type: BadRequestError_1.BadRequestError,
    }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({
        description: 'Validation error while login user',
        type: UnprocessableEntityError_1.UnprocessableEntityError,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserMetaVM_1.UserMetaVM]),
    __metadata("design:returntype", Promise)
], UserMetaController.prototype, "addUserMeta", null);
__decorate([
    (0, common_1.Post)('docInfo'),
    (0, swagger_1.ApiOperation)({
        summary: 'Add doctor meta information',
    }),
    (0, swagger_1.ApiResponse)({ description: 'Meta add successfully', type: DoctorMetaVM_1.DoctorMetaVM }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'The request object doesnt th expected one',
        type: BadRequestError_1.BadRequestError,
    }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({
        description: 'Validation error while login user',
        type: UnprocessableEntityError_1.UnprocessableEntityError,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DoctorMetaVM_1.DoctorMetaVM]),
    __metadata("design:returntype", Promise)
], UserMetaController.prototype, "addDoctorInfo", null);
__decorate([
    (0, common_1.Post)('train'),
    (0, swagger_1.ApiOperation)({
        summary: 'Add doctor training',
    }),
    (0, swagger_1.ApiResponse)({ description: 'Meta add successfully', type: DoctorTrainingVM_1.DoctorTrainingVM }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'The request object doesnt th expected one',
        type: BadRequestError_1.BadRequestError,
    }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({
        description: 'Validation error while login user',
        type: UnprocessableEntityError_1.UnprocessableEntityError,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DoctorTrainingVM_1.DoctorTrainingVM]),
    __metadata("design:returntype", Promise)
], UserMetaController.prototype, "addDoctorTraining", null);
__decorate([
    (0, common_1.Post)('edu'),
    (0, swagger_1.ApiOperation)({
        summary: 'Add doctor education',
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Education add successfully',
        type: DoctorEducationVM_1.DoctorEducationVM,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'The request object doesnt th expected one',
        type: BadRequestError_1.BadRequestError,
    }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({
        description: 'Validation error while login user',
        type: UnprocessableEntityError_1.UnprocessableEntityError,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DoctorEducationVM_1.DoctorEducationVM]),
    __metadata("design:returntype", Promise)
], UserMetaController.prototype, "addDocEducation", null);
UserMetaController = __decorate([
    (0, swagger_1.ApiTags)('Meta'),
    (0, common_1.Controller)('meta'),
    __metadata("design:paramtypes", [UserMetaUsecase_1.UserMetaUsecase])
], UserMetaController);
exports.UserMetaController = UserMetaController;
//# sourceMappingURL=UserMetaController.js.map