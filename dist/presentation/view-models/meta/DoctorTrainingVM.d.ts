import { DoctorTrainingModel } from 'domain/models/DoctorTraining';
export declare class DoctorTrainingVM {
    email: string;
    training_name: string;
    university: string;
    year: string;
    static fromViewModel(vm: DoctorTrainingVM): DoctorTrainingModel;
}
