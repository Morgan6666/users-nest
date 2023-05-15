import { DomainException } from 'domain/exceptions/DomainException';
import { IEntity } from 'domain/shared/IEntity';

export class GetUserModel implements IEntity {
  email: string;
  patient_email?: string;

  constructor(email: string, patient_email?: string) {
    this.email = email;
    this.patient_email = patient_email;
  }

  equals(entity: IEntity): boolean {
    if (!(entity instanceof GetUserModel)) return false;
    return this.email === entity.email;
  }
}
