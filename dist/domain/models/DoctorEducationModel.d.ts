import { IEntity } from 'domain/shared/IEntity';
export declare class DoctorEducationModel implements IEntity {
    email: string;
    university: string;
    year: string;
    department: string;
    constructor(email: string, university: string, year: string, department: string);
    equals(entity: IEntity): boolean;
}
