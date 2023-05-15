import { DomainException } from 'domain/exceptions/DomainException';
import { IEntity } from 'domain/shared/IEntity';

export class SignRes implements IEntity {
  id: number;

  constructor(id: number) {
    this.id = id;
  }

  equals(entity: IEntity): boolean {
    if (!(entity instanceof SignRes)) return false;
    return this.id == entity.id;
  }
}
