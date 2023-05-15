import { IEntity } from 'domain/shared/IEntity';
export declare class UserMeta implements IEntity {
    user_id?: number;
    allergy?: string;
    allergyReactions?: string;
    smoke?: boolean;
    graft?: string;
    chronickDisease?: string;
    operation?: string;
    injures?: string;
    eatings_habbits?: string;
    height?: number;
    weight?: number;
    blood_group?: number;
    constructor(user_id: number, allergy: string, allergyReactions: string, smoke: boolean, graft: string, chronickDisease: string, operation: string, injures: string, eatings_habbits: string, height: number, weight: number, blood_group: number);
    equals(entity: IEntity): boolean;
}
