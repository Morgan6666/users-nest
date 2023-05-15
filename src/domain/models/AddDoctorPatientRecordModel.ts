import { IEntity } from 'domain/shared/IEntity';

export class AddDoctorPatientRecordModel implements IEntity {
  patient_email?: string;
  doctor_email?: string;
  time_receipt?: string;

  constructor(
    patient_email?: string,
    doctor_email?: string,
    time_receipt?: string,
  ) {
    this.patient_email = patient_email;
    this.doctor_email = doctor_email;
    this.time_receipt = time_receipt;
  }

  equals(entity: IEntity): boolean {
    if (!(entity instanceof AddDoctorPatientRecordModel)) return false;
    return this.patient_email === entity.patient_email;
  }
}
