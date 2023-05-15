import { DomainException } from 'domain/exceptions/DomainException';
import { IEntity } from 'domain/shared/IEntity';
import { doc } from 'prettier';

export class AddUserMedCardsModel implements IEntity {
  email: string;
  survey: string;
  laboratory: string;
  doctor: string;
  conclussion: string;

  constructor(
    email: string,
    survey: string,
    laboratory: string,
    doctor: string,
    conclussion: string,
  ) {
    this.email = email;
    this.survey = survey;
    this.laboratory = laboratory;
    this.doctor = doctor;
    this.conclussion = conclussion;
  }
  equals(entity: IEntity): boolean {
    if (!(entity instanceof AddUserMedCardsModel)) return false;
    return this.email === entity.email;
  }
}
