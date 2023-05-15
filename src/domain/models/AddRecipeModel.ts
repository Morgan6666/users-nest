import exp from 'constants';
import { IEntity } from 'domain/shared/IEntity';
import { type } from 'os';

export class AddRecipeModel implements IEntity {
  patient_email: string;
  doctor_email: string;
  clinics_name: string;
  drug_name: string;
  expire_at: string;
  validiry: string;
  type_recipe: string;
  mode_duration: string;
  doze_count: number;
  doze_per_day: number;

  constructor(
    patient_email: string,
    doctor_email: string,
    clinics_name: string,
    drug_name: string,
    expire_at: string,
    validiry: string,
    type_recipe: string,
    mode_duration: string,
    doze_count: number,
    doze_per_day: number,
  ) {
    this.patient_email = patient_email;
    this.doctor_email = doctor_email;
    this.clinics_name = clinics_name;
    this.drug_name = drug_name;
    this.expire_at = expire_at;
    this.validiry = validiry;
    this.type_recipe = type_recipe;
    this.mode_duration = mode_duration;
    this.doze_count = doze_count;
    this.doze_per_day = doze_per_day;
  }
  equals(entity: IEntity): boolean {
    if (!(entity instanceof AddRecipeModel)) return false;
    return this.patient_email === entity.patient_email;
  }
}
