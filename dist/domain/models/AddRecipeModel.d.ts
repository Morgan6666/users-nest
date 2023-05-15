import { IEntity } from 'domain/shared/IEntity';
export declare class AddRecipeModel implements IEntity {
    patient_email: string;
    doctor_email: string;
    clinics_name: string;
    drug_name: string;
    expire_at: string;
    validiry: string;
    type_recipe: string;
    mode_duration: string;
    doze_count: number;
    doze_per_day: number;
    constructor(patient_email: string, doctor_email: string, clinics_name: string, drug_name: string, expire_at: string, validiry: string, type_recipe: string, mode_duration: string, doze_count: number, doze_per_day: number);
    equals(entity: IEntity): boolean;
}
