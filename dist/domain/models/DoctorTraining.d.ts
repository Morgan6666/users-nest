import { IEntity } from 'domain/shared/IEntity';
export declare class DoctorTrainingModel implements IEntity {
    email: string;
    training_name: string;
    university: string;
    year: string;
    constructor(email: string, training_name: string, university: string, year: string);
    equals(entity: IEntity): boolean;
}
