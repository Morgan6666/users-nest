import { IEntity } from 'domain/shared/IEntity';

export class GetClinicsByNameModel implements IEntity {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  equals(entity: IEntity): boolean {
    if (!(entity instanceof GetClinicsByNameModel)) return false;
    return this.name === entity.name;
  }
}
