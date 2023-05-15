import { AddRecipeModel } from 'domain/models/AddRecipeModel';
export declare class AddRecipeVM {
    patient_email: string;
    doctor_email: string;
    drug_name: string;
    clinics_name: string;
    expire_at: string;
    validiry: string;
    type_recipe: string;
    mode_duration: string;
    doze_count: number;
    doze_per_day: number;
    static formViewModel(vm: AddRecipeVM): AddRecipeModel;
}
