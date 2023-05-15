import { IEntity } from 'domain/shared/IEntity';
export declare class GetUserModel implements IEntity {
    email: string;
    patient_email?: string;
    constructor(email: string, patient_email?: string);
    equals(entity: IEntity): boolean;
}
