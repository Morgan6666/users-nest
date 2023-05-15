import { IEntity } from 'domain/shared/IEntity';

export class PolisDMS implements IEntity {
  email: string;
  insurance_company: string;
  insurance_surename: string;
  polis_number: string;

  constructor(
    email: string,
    insurance_company: string,
    insurance_surename: string,
    polis_number: string,
  ) {
    this.email = email;
    this.insurance_company = insurance_company;
    this.insurance_surename = insurance_surename;
    this.polis_number = polis_number;
  }
  equals(entity: IEntity): boolean {
    if (!(entity instanceof PolisDMS)) return false;
    return this.email === entity.email;
  }
}
