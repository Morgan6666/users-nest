import { IEntity } from 'domain/shared/IEntity';

export class UserInfoModel implements IEntity {
  first_name: string;
  last_name: string;

  constructor(first_name: string, last_name: string) {
    this.first_name = first_name;
    this.last_name = last_name;
  }
  equals(entity: IEntity) {
    if (!(entity instanceof UserInfoModel)) return false;

    return this.first_name === entity.first_name;
  }
}
