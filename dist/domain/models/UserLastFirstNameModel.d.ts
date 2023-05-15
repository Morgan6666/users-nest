import { IEntity } from 'domain/shared/IEntity';
export declare class UserInfoModel implements IEntity {
    first_name: string;
    last_name: string;
    constructor(first_name: string, last_name: string);
    equals(entity: IEntity): any;
}
