import { IEntity } from 'domain/shared/IEntity';
export declare class Login implements IEntity {
    id?: number;
    email: string;
    password: string;
    category?: string;
    constructor(email: string, password: string, category?: string, id?: number);
    equals(entity: IEntity): any;
}
