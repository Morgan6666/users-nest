"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRecipeModel = void 0;
class AddRecipeModel {
    constructor(patient_email, doctor_email, clinics_name, drug_name, expire_at, validiry, type_recipe, mode_duration, doze_count, doze_per_day) {
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
    equals(entity) {
        if (!(entity instanceof AddRecipeModel))
            return false;
        return this.patient_email === entity.patient_email;
    }
}
exports.AddRecipeModel = AddRecipeModel;
//# sourceMappingURL=AddRecipeModel.js.map