import { IEntity } from 'domain/shared/IEntity';

export class DoctorEducationModel implements IEntity {
  email: string;
  university: string;
  year: string;
  department: string;

  constructor(
    email: string,
    university: string,
    year: string,
    department: string,
  ) {
    this.email = email;
    this.university = university;
    this.year = year;
    this.department = department;
  }
  equals(entity: IEntity): boolean {
    if (!(entity instanceof DoctorEducationModel)) return false;
    return this.email === entity.email;
  }
}
