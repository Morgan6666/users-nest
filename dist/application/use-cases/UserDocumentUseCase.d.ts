import { IUserDocumentsRepository } from 'application/ports/IUserDocumentsRepository';
import { GetUserModel } from 'domain/models/GetUserModel';
import { PolisDMS } from 'domain/models/PolisDMS';
import { UserDocumentsModels } from 'domain/models/UserDocuments';
import { ServiceResponse } from 'infrastructure/utils/ServiceResponse';
export declare class UserDocumentsUsecase {
    private readonly userDocumentsRepo;
    private readonly logger;
    serviceRes: ServiceResponse;
    constructor(userDocumentsRepo: IUserDocumentsRepository);
    addUserDocuments(doc: UserDocumentsModels): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addUserPolis(pol: PolisDMS): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getUserDocuments(user: GetUserModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
}
