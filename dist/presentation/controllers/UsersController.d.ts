import { UsersUseCases } from 'application/use-cases/UsersUseCases';
import { CreateUserVM } from 'presentation/view-models/users/CreateUserVM';
import { UserLoginVM } from 'presentation/view-models/users/UserLoginVM';
import { GetUserVM } from 'presentation/view-models/users/GetUserVM';
import { GetPatientsByEmailVM } from 'presentation/view-models/users/GetPatientsByEmailVM';
import { GetDoctorsByEmailVM } from 'presentation/view-models/users/GetDoctorsByEmailVM';
import { ChangePasswordVM } from 'presentation/view-models/users/ChangePasswordVM';
import { Request } from 'express';
import { AddDoctorPatientRecordVM } from 'presentation/view-models/users/AddDoctorPatientRecordVM';
import { AddRecipeVM } from 'presentation/view-models/users/AddRecipeVM';
import { User } from 'domain/models/User';
import { UserInfoModel } from 'domain/models/UserLastFirstNameModel';
export declare class UsersController {
    private readonly usersUseCases;
    constructor(usersUseCases: UsersUseCases);
    sign(createUser: CreateUserVM, request: Request): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    login(loginUser: UserLoginVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    userInfo(userInfo: GetUserVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    logout(request: Request): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getPatientsDoctorByEmail(patientsInfo: GetPatientsByEmailVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getDoctorByEmail(doctorsInfo: GetDoctorsByEmailVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    changePassword(userInfo: ChangePasswordVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getAllDoctorInfo(): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getPatientMetaByEmail(user: GetPatientsByEmailVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    refresToken(request: Request): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
        Content: object;
    }>;
    getUserIdByEmail(data: GetUserVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getPatientMetaInfoByEmail(email: GetUserVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addPatientRecord(data: AddDoctorPatientRecordVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getPatientRecords(email: GetUserVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getDoctorRecords(email: GetUserVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addRecipe(data: AddRecipeVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getRecipeByDoctorEmail(data: GetUserVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getRecipeByUserEmail(data: GetUserVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getDoctorIdByEmail(data: GetUserVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getPatientByDocEmail(data: GetUserVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getUserInfoById(data: User): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getUserInfo(data: UserInfoModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getArrayUserInfo(data: Array<User>): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getArrayDoctorInfo(data: Array<User>): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
}
