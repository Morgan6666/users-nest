"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClinicsByNameModel = void 0;
class GetClinicsByNameModel {
    constructor(name) {
        this.name = name;
    }
    equals(entity) {
        if (!(entity instanceof GetClinicsByNameModel))
            return false;
        return this.name === entity.name;
    }
}
exports.GetClinicsByNameModel = GetClinicsByNameModel;
//# sourceMappingURL=GetClinicsNameModel.js.map