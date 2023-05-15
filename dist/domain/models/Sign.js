"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sign = void 0;
class Sign {
    constructor(email, firtsName, lastName, password, category) {
        this.email = email;
        this.firtsName = firtsName;
        this.lastName = lastName;
        this.password = password;
        this.category = category;
    }
    equals(entity) {
        if (!(entity instanceof Sign))
            return false;
        return this.email == entity.email;
    }
}
exports.Sign = Sign;
//# sourceMappingURL=Sign.js.map