import { IEntity } from 'domain/shared/IEntity';
export declare class User implements IEntity {
    email?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    category?: string;
    profession?: string;
    user_id?: number;
    patient_email?: string;
    constructor(firstName?: string, lastName?: string, email?: string, password?: string, category?: string, profession?: string, user_id?: number);
    equals(entity: IEntity): boolean;
}
