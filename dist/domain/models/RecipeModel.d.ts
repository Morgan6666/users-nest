import { IEntity } from 'domain/shared/IEntity';
export declare class RecipeModel implements IEntity {
    patient_email: string;
    doctor_email: string;
    clinics_id: number;
    drug_id: number;
    expire_at: string;
    validiry: string;
    type_recipe: string;
    mode_duration: string;
    doze_count: number;
    doze_per_day: number;
    constructor(patient_email: string, doctor_email: string, clinics_id: number, drug_id: number, expire_at: string, validiry: string, type_recipe: string, mode_duration: string, doze_count: number, doze_per_day: number);
    equals(entity: IEntity): boolean;
}
