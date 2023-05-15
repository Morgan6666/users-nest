"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeModel = void 0;
class RecipeModel {
    constructor(patient_email, doctor_email, clinics_id, drug_id, expire_at, validiry, type_recipe, mode_duration, doze_count, doze_per_day) {
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
    equals(entity) {
        if (!(entity instanceof RecipeModel))
            return false;
        return this.patient_email === entity.patient_email;
    }
}
exports.RecipeModel = RecipeModel;
//# sourceMappingURL=RecipeModel.js.map