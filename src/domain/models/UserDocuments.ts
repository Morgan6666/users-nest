import { IEntity } from 'domain/shared/IEntity';

export class UserDocumentsModels implements IEntity {
  email: string;
  polisOms?: string;
  snils?: string;

  constructor(email: string, polisOms: string, snils: string) {
    this.email = email;
    this.polisOms = polisOms;
    this.snils = snils;
  }

  equals(entity: IEntity) {
    if (!(entity instanceof UserDocumentsModels)) return false;

    return this.email === entity.email;
  }
}
