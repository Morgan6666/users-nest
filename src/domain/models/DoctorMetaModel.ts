import { IEntity } from 'domain/shared/IEntity';

export class DoctorMetaModel implements IEntity {
  email: string;
  experience: string;
  category: string;
  place_of_work: string;
  university: string;
  specialisation: string;
  training_name?: string;

  constructor(
    email: string,
    experience: string,
    category: string,
    place_of_work: string,
    university: string,
    specialisation: string,
    trainning_name?: string,
  ) {
    this.email = email;
    this.experience = experience;
    this.category = category;
    this.place_of_work = place_of_work;
    this.university = university;
    this.specialisation = specialisation;
    this.training_name = trainning_name;
  }
  equals(entity: IEntity): boolean {
    if (!(entity instanceof DoctorMetaModel)) return false;
    return this.email === entity.email;
  }
}
