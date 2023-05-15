import { IEntity } from 'domain/shared/IEntity';

export class ClinicsModel implements IEntity {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
  equals(entity: IEntity): boolean {
    if (!(entity instanceof ClinicsModel)) return false;
    return this.id === entity.id;
  }
}
