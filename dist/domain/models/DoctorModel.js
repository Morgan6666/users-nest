"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorModel = void 0;
class DoctorModel {
    constructor(user_id) {
        this.user_id = user_id;
    }
    equals(entity) {
        if (!(entity instanceof DoctorModel))
            return false;
        return this.user_id === entity.user_id;
    }
}
exports.DoctorModel = DoctorModel;
//# sourceMappingURL=DoctorModel.js.map