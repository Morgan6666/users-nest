import { IUsersMetaReposiotry } from 'application/ports/IUsersMetaRepository';
import { UserExceptions } from 'domain/exceptions/UserExceptions';
import { DoctorEducationModel } from 'domain/models/DoctorEducationModel';
import { DoctorMetaModel } from 'domain/models/DoctorMetaModel';
import { DoctorTrainingModel } from 'domain/models/DoctorTraining';
import { UserMeta } from 'domain/models/UserMeta';
import { ServiceResponse } from 'infrastructure/utils/ServiceResponse';
export declare class UserMetaUsecase {
    private readonly userMetaRepository;
    private readonly logger;
    userException: UserExceptions;
    serviceRes: ServiceResponse;
    constructor(userMetaRepository: IUsersMetaReposiotry);
    addUserMeta(meta: UserMeta): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addDoctorMeta(meta: DoctorMetaModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addDoctorEducation(meta: DoctorEducationModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addDoctorTraining(meta: DoctorTrainingModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
}
