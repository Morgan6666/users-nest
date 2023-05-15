import { IEntity } from 'domain/shared/IEntity';

export class DrugsModel implements IEntity {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
  equals(entity: IEntity): boolean {
    if (!(entity instanceof DrugsModel)) return false;
    return this.id === entity.id;
  }
}
