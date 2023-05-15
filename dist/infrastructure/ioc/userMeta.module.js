"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMetaModule = void 0;
const common_1 = require("@nestjs/common");
const IUsersMetaRepository_1 = require("../../application/ports/IUsersMetaRepository");
const UserMetaUsecase_1 = require("../../application/use-cases/UserMetaUsecase");
const UserMetaRepository_1 = require("../database/repositories/UserMetaRepository");
const UserMetaController_1 = require("../../presentation/controllers/UserMetaController");
let UserMetaModule = class UserMetaModule {
};
UserMetaModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [UserMetaController_1.UserMetaController],
        providers: [
            UserMetaUsecase_1.UserMetaUsecase,
            { provide: IUsersMetaRepository_1.IUsersMetaReposiotry, useClass: UserMetaRepository_1.UserMetaRepository },
        ],
    })
], UserMetaModule);
exports.UserMetaModule = UserMetaModule;
//# sourceMappingURL=userMeta.module.js.map