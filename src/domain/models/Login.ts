import { DomainException } from 'domain/exceptions/DomainException';
import { IEntity } from 'domain/shared/IEntity';

export class Login implements IEntity {
  id?: number;
  email: string;
  password: string;
  category?: string;

  constructor(email: string, password: string, category?: string, id?: number) {
    this.email = email;
    this.password = password;
    this.category = category;
    this.id = id;
  }

  equals(entity: IEntity) {
    if (!(entity instanceof Login)) return false;
    return this.email === entity.email;
  }
}
