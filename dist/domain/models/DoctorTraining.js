"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorTrainingModel = void 0;
class DoctorTrainingModel {
    constructor(email, training_name, university, year) {
        this.email = email;
        this.training_name = training_name;
        this.university = university;
        this.year = year;
    }
    equals(entity) {
        if (!(entity instanceof DoctorTrainingModel))
            return false;
        return this.email === entity.email;
    }
}
exports.DoctorTrainingModel = DoctorTrainingModel;
//# sourceMappingURL=DoctorTraining.js.map