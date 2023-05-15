"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDocumentsModels = void 0;
class UserDocumentsModels {
    constructor(email, polisOms, snils) {
        this.email = email;
        this.polisOms = polisOms;
        this.snils = snils;
    }
    equals(entity) {
        if (!(entity instanceof UserDocumentsModels))
            return false;
        return this.email === entity.email;
    }
}
exports.UserDocumentsModels = UserDocumentsModels;
//# sourceMappingURL=UserDocuments.js.map