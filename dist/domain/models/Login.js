"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
class Login {
    constructor(email, password, category, id) {
        this.email = email;
        this.password = password;
        this.category = category;
        this.id = id;
    }
    equals(entity) {
        if (!(entity instanceof Login))
            return false;
        return this.email === entity.email;
    }
}
exports.Login = Login;
//# sourceMappingURL=Login.js.map