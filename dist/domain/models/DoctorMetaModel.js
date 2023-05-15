"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorMetaModel = void 0;
class DoctorMetaModel {
    constructor(email, experience, category, place_of_work, university, specialisation, trainning_name) {
        this.email = email;
        this.experience = experience;
        this.category = category;
        this.place_of_work = place_of_work;
        this.university = university;
        this.specialisation = specialisation;
        this.training_name = trainning_name;
    }
    equals(entity) {
        if (!(entity instanceof DoctorMetaModel))
            return false;
        return this.email === entity.email;
    }
}
exports.DoctorMetaModel = DoctorMetaModel;
//# sourceMappingURL=DoctorMetaModel.js.map