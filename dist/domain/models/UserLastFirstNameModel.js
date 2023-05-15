"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoModel = void 0;
class UserInfoModel {
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    equals(entity) {
        if (!(entity instanceof UserInfoModel))
            return false;
        return this.first_name === entity.first_name;
    }
}
exports.UserInfoModel = UserInfoModel;
//# sourceMappingURL=UserLastFirstNameModel.js.map