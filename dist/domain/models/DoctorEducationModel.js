"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorEducationModel = void 0;
class DoctorEducationModel {
    constructor(email, university, year, department) {
        this.email = email;
        this.university = university;
        this.year = year;
        this.department = department;
    }
    equals(entity) {
        if (!(entity instanceof DoctorEducationModel))
            return false;
        return this.email === entity.email;
    }
}
exports.DoctorEducationModel = DoctorEducationModel;
//# sourceMappingURL=DoctorEducationModel.js.map