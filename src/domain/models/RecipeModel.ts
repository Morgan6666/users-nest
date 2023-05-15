import { IEntity } from 'domain/shared/IEntity';

export class RecipeModel implements IEntity {
  patient_email: string;
  doctor_email: string;
  clinics_id: number;
  drug_id: number;
  expire_at: string;
  validiry: string;
  type_recipe: string;
  mode_duration: string;
  doze_count: number;
  doze_per_day: number;

  constructor(
    patient_email: string,
    doctor_email: string,
    clinics_id: number,
    drug_id: number,
    expire_at: string,
    validiry: string,
    type_recipe: string,
    mode_duration: string,
    doze_count: number,
    doze_per_day: number,
  ) {
    this.patient_email = patient_email;
    this.doctor_email = doctor_email;
    this.clinics_id = clinics_id;
    this.drug_id = drug_id;
    this.expire_at = expire_at;
    this.validiry = validiry;
    this.type_recipe = type_recipe;
    this.mode_duration = mode_duration;
    this.doze_count = doze_count;
    this.doze_per_day = doze_per_day;
  }
  equals(entity: IEntity): boolean {
    if (!(entity instanceof RecipeModel)) return false;
    return this.patient_email === entity.patient_email;
  }
}
