import { AddDoctorPatientRecordModel } from 'domain/models/AddDoctorPatientRecordModel';
export declare class AddDoctorPatientRecordVM {
    patient_email: string;
    doctor_email: string;
    time_receipt: string;
    static fromViewModel(vm: AddDoctorPatientRecordVM): AddDoctorPatientRecordModel;
}
