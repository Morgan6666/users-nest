"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicsModel = void 0;
class ClinicsModel {
    constructor(id) {
        this.id = id;
    }
    equals(entity) {
        if (!(entity instanceof ClinicsModel))
            return false;
        return this.id === entity.id;
    }
}
exports.ClinicsModel = ClinicsModel;
//# sourceMappingURL=ClinicsModel.js.map