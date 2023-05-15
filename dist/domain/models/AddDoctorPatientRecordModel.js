"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDoctorPatientRecordModel = void 0;
class AddDoctorPatientRecordModel {
    constructor(patient_email, doctor_email, time_receipt) {
        this.patient_email = patient_email;
        this.doctor_email = doctor_email;
        this.time_receipt = time_receipt;
    }
    equals(entity) {
        if (!(entity instanceof AddDoctorPatientRecordModel))
            return false;
        return this.patient_email === entity.patient_email;
    }
}
exports.AddDoctorPatientRecordModel = AddDoctorPatientRecordModel;
//# sourceMappingURL=AddDoctorPatientRecordModel.js.map