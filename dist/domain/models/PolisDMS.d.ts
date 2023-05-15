import { IEntity } from 'domain/shared/IEntity';
export declare class PolisDMS implements IEntity {
    email: string;
    insurance_company: string;
    insurance_surename: string;
    polis_number: string;
    constructor(email: string, insurance_company: string, insurance_surename: string, polis_number: string);
    equals(entity: IEntity): boolean;
}
