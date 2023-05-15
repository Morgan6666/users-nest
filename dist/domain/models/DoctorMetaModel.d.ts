import { IEntity } from 'domain/shared/IEntity';
export declare class DoctorMetaModel implements IEntity {
    email: string;
    experience: string;
    category: string;
    place_of_work: string;
    university: string;
    specialisation: string;
    training_name?: string;
    constructor(email: string, experience: string, category: string, place_of_work: string, university: string, specialisation: string, trainning_name?: string);
    equals(entity: IEntity): boolean;
}
