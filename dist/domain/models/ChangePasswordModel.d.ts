import { IEntity } from 'domain/shared/IEntity';
export declare class ChangePasswordModel implements IEntity {
    email: string;
    password: string;
    newPassword: string;
    category?: string;
    constructor(email: string, password: string, newPassword: string, category?: string);
    equals(entity: IEntity): boolean;
}
