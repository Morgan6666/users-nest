import { IsEmail } from 'class-validator';
import { IEntity } from 'domain/shared/IEntity';

export class ChangePasswordModel implements IEntity {
  email: string;
  password: string;
  newPassword: string;
  category?: string;

  constructor(
    email: string,
    password: string,
    newPassword: string,
    category?: string,
  ) {
    (this.email = email),
      (this.password = password),
      (this.category = category);
    this.newPassword = newPassword;
  }
  equals(entity: IEntity): boolean {
    if (!(entity instanceof ChangePasswordModel)) return false;
    return this.email === entity.email;
  }
}
