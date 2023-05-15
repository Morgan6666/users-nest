import { IEntity } from "domain/shared/IEntity";
export declare class Sign implements IEntity {
    email: string;
    lastName: string;
    firtsName: string;
    password: string;
    category?: string;
    constructor(email: string, firtsName: string, lastName: string, password: string, category?: string);
    equals(entity: IEntity): any;
}
