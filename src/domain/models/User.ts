import { DomainException } from 'domain/exceptions/DomainException';
import { IEntity } from 'domain/shared/IEntity';

export class User implements IEntity {
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  category?: string;
  profession?: string;
  user_id?: number;
  patient_email?: string;

  constructor(
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    category?: string,
    profession?: string,
    user_id?: number,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.category = category;
    this.profession = profession;
    this.user_id = user_id;
  }

  equals(entity: IEntity) {
    if (!(entity instanceof User)) return false;
  }
}
