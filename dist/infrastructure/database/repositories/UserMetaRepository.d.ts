import { BaseRepository } from './BaseRepository';
import { UserMeta } from 'domain/models/UserMeta';
import { Connection } from 'typeorm';
import { IUsersMetaReposiotry } from 'application/ports/IUsersMetaRepository';
import { DoctorMetaModel } from 'domain/models/DoctorMetaModel';
import { DoctorTrainingModel } from 'domain/models/DoctorTraining';
import { DoctorEducationModel } from 'domain/models/DoctorEducationModel';
export declare class UserMetaRepository extends BaseRepository<UserMeta> implements IUsersMetaReposiotry {
    connection: Connection;
    constructor(connection: Connection);
    addUserMeta(entity: UserMeta): Promise<any>;
    addDoctorMetaByTraining(entity: DoctorMetaModel): Promise<any>;
    addDoctorMetaWithoutTraining(entity: DoctorMetaModel): Promise<any>;
    addDoctorTraining(entity: DoctorTrainingModel): Promise<any>;
    addDoctorEducation(entity: DoctorEducationModel): Promise<any>;
    checkDoctorMeta(entity: DoctorMetaModel): Promise<any>;
}
