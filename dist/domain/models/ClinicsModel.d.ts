import { IEntity } from 'domain/shared/IEntity';
export declare class ClinicsModel implements IEntity {
    id: number;
    constructor(id: number);
    equals(entity: IEntity): boolean;
}
