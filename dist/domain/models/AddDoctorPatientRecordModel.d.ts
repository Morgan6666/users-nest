import { IEntity } from 'domain/shared/IEntity';
export declare class AddDoctorPatientRecordModel implements IEntity {
    patient_email?: string;
    doctor_email?: string;
    time_receipt?: string;
    constructor(patient_email?: string, doctor_email?: string, time_receipt?: string);
    equals(entity: IEntity): boolean;
}
