import { IEntity } from 'domain/shared/IEntity';

export class PatientModel implements IEntity {
  user_id?: number;

  constructor(user_id: number) {
    this.user_id = user_id;
  }
  equals(entity: IEntity): boolean {
    if (!(entity instanceof PatientModel)) return false;
    return this.user_id === entity.user_id;
  }
}
