import { IEntity } from 'domain/shared/IEntity';

export class GetDrugByNameModel implements IEntity {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  equals(entity: IEntity): boolean {
    if (!(entity instanceof GetDrugByNameModel)) return false;
    return this.name === entity.name;
  }
}
