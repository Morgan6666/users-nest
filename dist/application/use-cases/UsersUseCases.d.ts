import { IUsersRepository } from 'application/ports/IUsersRepository';
import { UserExceptions } from 'domain/exceptions/UserExceptions';
import { ChangePasswordModel } from 'domain/models/ChangePasswordModel';
import { GetUserModel } from 'domain/models/GetUserModel';
import { Login } from 'domain/models/Login';
import { User } from 'domain/models/User';
import { ServiceResponse } from 'infrastructure/utils/ServiceResponse';
import { JwtService } from '@nestjs/jwt';
import { JwtTokenModel } from 'domain/models/JwtToken';
import Redis from 'ioredis';
import { AddDoctorPatientRecordModel } from 'domain/models/AddDoctorPatientRecordModel';
import { AddRecipeModel } from 'domain/models/AddRecipeModel';
import { UserInfoModel } from 'domain/models/UserLastFirstNameModel';
export declare class UsersUseCases {
    private readonly usersRepository;
    private jwtService;
    private readonly redis;
    private readonly logger;
    userException: UserExceptions;
    serviceRes: ServiceResponse;
    private configService;
    constructor(usersRepository: IUsersRepository, jwtService: JwtService, redis: Redis);
    sign(user: User, user_agent: string): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    signDoctor(user: User): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    calculateTokens(user: JwtTokenModel): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    signUser(user: User, user_agent: string): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    loginUser(user: Login): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    loginDoctor(user: Login): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    logout(user_agent: string): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    login(user: Login): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getUserByEmai(user: GetUserModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getPatientsByEmail(user: GetUserModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getDoctorsByEmail(user: GetUserModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    changePassword(user: ChangePasswordModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    changePasswordUser(user: ChangePasswordModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    changePasswordDoctor(user: ChangePasswordModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getAllDoctorsInfo(): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    updateAccessToken(token: string): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
        Content: object;
    }>;
    getPatientMetaByEmail(entety: User): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getUserIdByEmail(entity: User): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getPatientInfoByEmail(entity: User): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addDoctorPatientRecord(entity: AddDoctorPatientRecordModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getAllPatientRecords(entity: User): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getAllDoctorsRecords(entety: User): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addRecipe(entity: AddRecipeModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getRecipeByDoctorEmail(entety: User): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getRecipeByUserEmail(entety: User): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getDoctorIdByEmail(entity: User): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getPatientsId(entity: User): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getUserInfoById(entity: User): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getUserInfo(entity: UserInfoModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getListDoctorInfo(entity: Array<User>): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getListUserInfo(entity: Array<User>): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
}
