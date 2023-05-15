"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDrugByNameModel = void 0;
class GetDrugByNameModel {
    constructor(name) {
        this.name = name;
    }
    equals(entity) {
        if (!(entity instanceof GetDrugByNameModel))
            return false;
        return this.name === entity.name;
    }
}
exports.GetDrugByNameModel = GetDrugByNameModel;
//# sourceMappingURL=GetDrugByNameModel.js.map