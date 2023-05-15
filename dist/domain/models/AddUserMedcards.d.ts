import { IEntity } from 'domain/shared/IEntity';
export declare class AddUserMedCardsModel implements IEntity {
    email: string;
    survey: string;
    laboratory: string;
    doctor: string;
    conclussion: string;
    constructor(email: string, survey: string, laboratory: string, doctor: string, conclussion: string);
    equals(entity: IEntity): boolean;
}
