import { IEntity } from 'domain/shared/IEntity';

export class DoctorTrainingModel implements IEntity {
  email: string;
  training_name: string;
  university: string;
  year: string;

  constructor(
    email: string,
    training_name: string,
    university: string,
    year: string,
  ) {
    this.email = email;
    this.training_name = training_name;
    this.university = university;
    this.year = year;
  }
  equals(entity: IEntity): boolean {
    if (!(entity instanceof DoctorTrainingModel)) return false;
    return this.email === entity.email;
  }
}
