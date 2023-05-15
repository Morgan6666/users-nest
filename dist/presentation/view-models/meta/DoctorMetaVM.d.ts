import { DoctorMetaModel } from 'domain/models/DoctorMetaModel';
export declare class DoctorMetaVM {
    email: string;
    experience: string;
    category: string;
    place_of_work: string;
    university: string;
    specialisation: string;
    training_name?: string;
    static fromViewModel(vm: DoctorMetaVM): DoctorMetaModel;
}
