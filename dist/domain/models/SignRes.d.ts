import { IEntity } from 'domain/shared/IEntity';
export declare class SignRes implements IEntity {
    id: number;
    constructor(id: number);
    equals(entity: IEntity): boolean;
}
