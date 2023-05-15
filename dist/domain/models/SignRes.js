"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignRes = void 0;
class SignRes {
    constructor(id) {
        this.id = id;
    }
    equals(entity) {
        if (!(entity instanceof SignRes))
            return false;
        return this.id == entity.id;
    }
}
exports.SignRes = SignRes;
//# sourceMappingURL=SignRes.js.map