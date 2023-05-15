import { IEntity } from 'domain/shared/IEntity';
export declare class UserDocumentsModels implements IEntity {
    email: string;
    polisOms?: string;
    snils?: string;
    constructor(email: string, polisOms: string, snils: string);
    equals(entity: IEntity): any;
}
