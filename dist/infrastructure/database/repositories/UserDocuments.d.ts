import { BaseRepository } from './BaseRepository';
import { UserDocumentsModels } from 'domain/models/UserDocuments';
import { Connection } from 'typeorm';
import { IUserDocumentsRepository } from 'application/ports/IUserDocumentsRepository';
import { PolisDMS } from 'domain/models/PolisDMS';
import { GetUserModel } from 'domain/models/GetUserModel';
export declare class UserDocumentsRepository extends BaseRepository<UserDocumentsModels> implements IUserDocumentsRepository {
    connection: Connection;
    constructor(connection: Connection);
    addUserDocuments(entity: UserDocumentsModels): Promise<any>;
    checkUserDocument(entity: UserDocumentsModels): Promise<any>;
    addUserPolisDMS(entity: PolisDMS): Promise<any>;
    checkPolisExist(entity: PolisDMS): Promise<any>;
    getUserDocument(entity: GetUserModel): Promise<any>;
}
