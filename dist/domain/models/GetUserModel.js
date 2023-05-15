"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserModel = void 0;
class GetUserModel {
    constructor(email, patient_email) {
        this.email = email;
        this.patient_email = patient_email;
    }
    equals(entity) {
        if (!(entity instanceof GetUserModel))
            return false;
        return this.email === entity.email;
    }
}
exports.GetUserModel = GetUserModel;
//# sourceMappingURL=GetUserModel.js.map