"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolisDMS = void 0;
class PolisDMS {
    constructor(email, insurance_company, insurance_surename, polis_number) {
        this.email = email;
        this.insurance_company = insurance_company;
        this.insurance_surename = insurance_surename;
        this.polis_number = polis_number;
    }
    equals(entity) {
        if (!(entity instanceof PolisDMS))
            return false;
        return this.email === entity.email;
    }
}
exports.PolisDMS = PolisDMS;
//# sourceMappingURL=PolisDMS.js.map