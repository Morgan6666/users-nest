"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrugsModel = void 0;
class DrugsModel {
    constructor(id) {
        this.id = id;
    }
    equals(entity) {
        if (!(entity instanceof DrugsModel))
            return false;
        return this.id === entity.id;
    }
}
exports.DrugsModel = DrugsModel;
//# sourceMappingURL=DrugsModel.js.map