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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const UsersUseCases_1 = require("../../application/use-cases/UsersUseCases");
const CreateUserVM_1 = require("../view-models/users/CreateUserVM");
const UserVM_1 = require("../view-models/users/UserVM");
const BadRequestError_1 = require("../errors/BadRequestError");
const UnprocessableEntityError_1 = require("../errors/UnprocessableEntityError");
const UserLoginVM_1 = require("../view-models/users/UserLoginVM");
const GetUserVM_1 = require("../view-models/users/GetUserVM");
const GetPatientsByEmailVM_1 = require("../view-models/users/GetPatientsByEmailVM");
const GetDoctorsByEmailVM_1 = require("../view-models/users/GetDoctorsByEmailVM");
const ChangePasswordVM_1 = require("../view-models/users/ChangePasswordVM");
const AddDoctorPatientRecordVM_1 = require("../view-models/users/AddDoctorPatientRecordVM");
const AddRecipeVM_1 = require("../view-models/users/AddRecipeVM");
const User_1 = require("../../domain/models/User");
const UserLastFirstNameModel_1 = require("../../domain/models/UserLastFirstNameModel");
const requestIp = require('request-ip');
let UsersController = class UsersController {
    constructor(usersUseCases) {
        this.usersUseCases = usersUseCases;
    }
    async sign(createUser, request) {
        const useragent = request.headers['user-agent'];
        const newUser = await this.usersUseCases.sign(CreateUserVM_1.CreateUserVM.fromViewModel(createUser), useragent);
        return newUser;
    }
    async login(loginUser) {
        const userLogin = await this.usersUseCases.login(UserLoginVM_1.UserLoginVM.fromViewModel(loginUser));
        return userLogin;
    }
    async userInfo(userInfo) {
        const info = await this.usersUseCases.getUserByEmai(GetUserVM_1.GetUserVM.fromViewModel(userInfo));
        return info;
    }
    async logout(request) {
        const useragent = request.headers['user-agent'];
        const result = await this.usersUseCases.logout(useragent);
        return result;
    }
    async getPatientsDoctorByEmail(patientsInfo) {
        const info = await this.usersUseCases.getPatientsByEmail(GetPatientsByEmailVM_1.GetPatientsByEmailVM.fromViewModel(patientsInfo));
        return info;
    }
    async getDoctorByEmail(doctorsInfo) {
        const info = await this.usersUseCases.getDoctorsByEmail(GetDoctorsByEmailVM_1.GetDoctorsByEmailVM.fromViewModel(doctorsInfo));
        return info;
    }
    async changePassword(userInfo) {
        const result = await this.usersUseCases.changePassword(ChangePasswordVM_1.ChangePasswordVM.fromViewModel(userInfo));
        return result;
    }
    async getAllDoctorInfo() {
        const result = await this.usersUseCases.getAllDoctorsInfo();
        return result;
    }
    async getPatientMetaByEmail(user) {
        const result = await this.usersUseCases.getPatientMetaByEmail(GetPatientsByEmailVM_1.GetPatientsByEmailVM.fromViewModel(user));
        return result;
    }
    async refresToken(request) {
        const token = request.headers['access-token'].toString();
        const result = await this.usersUseCases.updateAccessToken(token);
        return result;
    }
    async getUserIdByEmail(data) {
        const result = await this.usersUseCases.getUserIdByEmail(GetUserVM_1.GetUserVM.fromViewModel(data));
        return result;
    }
    async getPatientMetaInfoByEmail(email) {
        const result = await this.usersUseCases.getPatientMetaByEmail(GetUserVM_1.GetUserVM.fromViewModel(email));
        return result;
    }
    async addPatientRecord(data) {
        const result = await this.usersUseCases.addDoctorPatientRecord(AddDoctorPatientRecordVM_1.AddDoctorPatientRecordVM.fromViewModel(data));
        return result;
    }
    async getPatientRecords(email) {
        console.log('Patients');
        const result = await this.usersUseCases.getAllPatientRecords(GetUserVM_1.GetUserVM.fromViewModel(email));
        return result;
    }
    async getDoctorRecords(email) {
        const result = await this.usersUseCases.getAllDoctorsRecords(GetUserVM_1.GetUserVM.fromViewModel(email));
        return result;
    }
    async addRecipe(data) {
        const result = await this.usersUseCases.addRecipe(AddRecipeVM_1.AddRecipeVM.formViewModel(data));
        return result;
    }
    async getRecipeByDoctorEmail(data) {
        const result = await this.usersUseCases.getRecipeByDoctorEmail(GetUserVM_1.GetUserVM.fromViewModel(data));
        return result;
    }
    async getRecipeByUserEmail(data) {
        const result = await this.usersUseCases.getRecipeByUserEmail(GetUserVM_1.GetUserVM.fromViewModel(data));
        return result;
    }
    async getDoctorIdByEmail(data) {
        const result = await this.usersUseCases.getDoctorIdByEmail(GetUserVM_1.GetUserVM.fromViewModel(data));
        return result;
    }
    async getPatientByDocEmail(data) {
        const result = await this.usersUseCases.getPatientsId(GetUserVM_1.GetUserVM.fromViewModel(data));
        return result;
    }
    async getUserInfoById(data) {
        const result = await this.usersUseCases.getUserInfoById(data);
        return result;
    }
    async getUserInfo(data) {
        const result = await this.usersUseCases.getUserInfo(data);
        return result;
    }
    async getArrayUserInfo(data) {
        const result = await this.usersUseCases.getListUserInfo(data);
        return result;
    }
    async getArrayDoctorInfo(data) {
        const result = await this.usersUseCases.getListDoctorInfo(data);
        return result;
    }
};
__decorate([
    (0, common_1.Post)('sign'),
    (0, swagger_1.ApiOperation)({
        summary: 'Sign User',
    }),
    (0, swagger_1.ApiResponse)({ description: 'User successfull sign', type: UserVM_1.UserVM }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'The request object doesn`t match the expected one',
        type: BadRequestError_1.BadRequestError,
    }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({
        description: 'Validation errro while sign user',
        type: UnprocessableEntityError_1.UnprocessableEntityError,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUserVM_1.CreateUserVM, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "sign", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({
        summary: 'Login User',
    }),
    (0, swagger_1.ApiResponse)({ description: 'User successfull login', type: UserLoginVM_1.UserLoginVM }),
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
    __metadata("design:paramtypes", [UserLoginVM_1.UserLoginVM]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('info'),
    (0, swagger_1.ApiOperation)({
        summary: 'User info',
    }),
    (0, swagger_1.ApiResponse)({ description: 'User successfully', type: GetUserVM_1.GetUserVM }),
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
    __metadata("design:paramtypes", [GetUserVM_1.GetUserVM]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "userInfo", null);
__decorate([
    (0, common_1.Patch)('logout'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)('patients'),
    (0, swagger_1.ApiOperation)({
        summary: 'Doctors patients',
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Patients successfully',
        type: GetPatientsByEmailVM_1.GetPatientsByEmailVM,
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
    __metadata("design:paramtypes", [GetPatientsByEmailVM_1.GetPatientsByEmailVM]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getPatientsDoctorByEmail", null);
__decorate([
    (0, common_1.Post)('doctors'),
    (0, swagger_1.ApiOperation)({
        summary: 'All doctors from patients',
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Doctors successfully',
        type: GetDoctorsByEmailVM_1.GetDoctorsByEmailVM,
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
    __metadata("design:paramtypes", [GetDoctorsByEmailVM_1.GetDoctorsByEmailVM]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getDoctorByEmail", null);
__decorate([
    (0, common_1.Post)('change'),
    (0, swagger_1.ApiOperation)({
        summary: 'Change password',
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Change password successfully',
        type: GetDoctorsByEmailVM_1.GetDoctorsByEmailVM,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'The request object doesnt th expected one',
        type: BadRequestError_1.BadRequestError,
    }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({
        description: 'Validation error while email user',
        type: UnprocessableEntityError_1.UnprocessableEntityError,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ChangePasswordVM_1.ChangePasswordVM]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Get)('doc_info'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllDoctorInfo", null);
__decorate([
    (0, common_1.Post)('patient_meta'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GetPatientsByEmailVM_1.GetPatientsByEmailVM]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getPatientMetaByEmail", null);
__decorate([
    (0, common_1.Patch)('refresh'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "refresToken", null);
__decorate([
    (0, common_1.Post)('user_id'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GetUserVM_1.GetUserVM]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserIdByEmail", null);
__decorate([
    (0, common_1.Post)('patient_meta_info'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get patient meta info by email',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GetUserVM_1.GetUserVM]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getPatientMetaInfoByEmail", null);
__decorate([
    (0, common_1.Post)('add_record'),
    (0, swagger_1.ApiOperation)({
        summary: 'Add doctor record',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddDoctorPatientRecordVM_1.AddDoctorPatientRecordVM]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addPatientRecord", null);
__decorate([
    (0, common_1.Post)('get_patient_records'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get patients records',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GetUserVM_1.GetUserVM]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getPatientRecords", null);
__decorate([
    (0, common_1.Post)('get_doctors_records'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get patients records',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GetUserVM_1.GetUserVM]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getDoctorRecords", null);
__decorate([
    (0, common_1.Post)('add_recipe'),
    (0, swagger_1.ApiOperation)({
        summary: 'Add recipe',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddRecipeVM_1.AddRecipeVM]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addRecipe", null);
__decorate([
    (0, common_1.Post)('get_recipe_doctor'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get recipe by doctor email',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GetUserVM_1.GetUserVM]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getRecipeByDoctorEmail", null);
__decorate([
    (0, common_1.Post)('get_recipe_user'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get recipes by user email',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GetUserVM_1.GetUserVM]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getRecipeByUserEmail", null);
__decorate([
    (0, common_1.Post)('get_doc_id_by_email'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get doctor id by email',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GetUserVM_1.GetUserVM]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getDoctorIdByEmail", null);
__decorate([
    (0, common_1.Post)('get_patients'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get patient id by email',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GetUserVM_1.GetUserVM]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getPatientByDocEmail", null);
__decorate([
    (0, common_1.Post)('user_by_id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get user info by id',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserInfoById", null);
__decorate([
    (0, common_1.Post)('get_id_by_name'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get user id by first/last-name',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserLastFirstNameModel_1.UserInfoModel]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserInfo", null);
__decorate([
    (0, common_1.Post)('list_user_info'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get user info by list id',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getArrayUserInfo", null);
__decorate([
    (0, common_1.Post)('list_doctor_info'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get list doctor info',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getArrayDoctorInfo", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [UsersUseCases_1.UsersUseCases])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=UsersController.js.map