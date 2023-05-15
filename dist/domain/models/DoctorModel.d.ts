import { IEntity } from 'domain/shared/IEntity';
export declare class DoctorModel implements IEntity {
    user_id?: number;
    constructor(user_id: number);
    equals(entity: IEntity): boolean;
}
