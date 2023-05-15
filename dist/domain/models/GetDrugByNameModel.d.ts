import { IEntity } from 'domain/shared/IEntity';
export declare class GetDrugByNameModel implements IEntity {
    name: string;
    constructor(name: string);
    equals(entity: IEntity): boolean;
}
