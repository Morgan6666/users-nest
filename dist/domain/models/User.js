"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(firstName, lastName, email, password, category, profession, user_id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.category = category;
        this.profession = profession;
        this.user_id = user_id;
    }
    equals(entity) {
        if (!(entity instanceof User))
            return false;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map