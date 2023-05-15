import { DoctorEducationModel } from 'domain/models/DoctorEducationModel';
export declare class DoctorEducationVM {
    email: string;
    university: string;
    year: string;
    department: string;
    static fromViewModel(vm: DoctorEducationVM): DoctorEducationModel;
}
