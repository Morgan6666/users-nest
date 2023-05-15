"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientModel = void 0;
class PatientModel {
    constructor(user_id) {
        this.user_id = user_id;
    }
    equals(entity) {
        if (!(entity instanceof PatientModel))
            return false;
        return this.user_id === entity.user_id;
    }
}
exports.PatientModel = PatientModel;
//# sourceMappingURL=PatientModel.js.map