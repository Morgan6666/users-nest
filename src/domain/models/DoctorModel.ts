import { IEntity } from 'domain/shared/IEntity';

export class DoctorModel implements IEntity {
  user_id?: number;

  constructor(user_id: number) {
    this.user_id = user_id;
  }
  equals(entity: IEntity): boolean {
    if (!(entity instanceof DoctorModel)) return false;
    return this.user_id === entity.user_id;
  }
}
